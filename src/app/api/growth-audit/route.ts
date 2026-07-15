import { Resend } from "resend";
import {
  growthAuditFieldLabels,
  growthAuditRequiredFields,
  type GrowthAuditPayload,
} from "@/lib/growth-audit";

const NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL || "scaletrinity@gmail.com";
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || "ScaleTrinity Website <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Partial<GrowthAuditPayload>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = growthAuditRequiredFields.filter((field) => !body[field]?.trim());
  if (missing.length > 0) {
    return Response.json(
      { error: `Missing required field(s): ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return Response.json(
      { error: "Email delivery is not configured yet. Please contact us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const rows = (Object.keys(growthAuditFieldLabels) as (keyof GrowthAuditPayload)[])
    .map((field) => {
      const value = body[field]?.trim();
      if (!value) return "";
      return `<tr><td style="padding:8px 12px;font-weight:600;color:#0b1220;vertical-align:top;white-space:nowrap;">${escapeHtml(growthAuditFieldLabels[field])}</td><td style="padding:8px 12px;color:#1d2d4a;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td></tr>`;
    })
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;">
      <h2 style="color:#0b1220;">New Free Growth Audit Request</h2>
      <table style="border-collapse:collapse;width:100%;border:1px solid #e2e8f0;">${rows}</table>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      replyTo: body.email as string,
      subject: `New Growth Audit Request — ${body.company as string}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send your request. Please try again." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Growth audit submission failed:", err);
    return Response.json({ error: "Failed to send your request. Please try again." }, { status: 500 });
  }
}
