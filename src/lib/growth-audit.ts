export type GrowthAuditPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  marketplace: string;
  revenue: string;
  adSpend: string;
  challenges: string;
  goals: string;
};

export const growthAuditFieldLabels: Record<keyof GrowthAuditPayload, string> = {
  name: "Full Name",
  company: "Company / Brand",
  email: "Work Email",
  phone: "Phone Number",
  website: "Website / Store URL",
  marketplace: "Primary Marketplace",
  revenue: "Monthly Revenue",
  adSpend: "Current Advertising Spend",
  challenges: "Current Challenges",
  goals: "Growth Goals",
};

export const growthAuditRequiredFields: (keyof GrowthAuditPayload)[] = [
  "name",
  "company",
  "email",
  "marketplace",
  "revenue",
];
