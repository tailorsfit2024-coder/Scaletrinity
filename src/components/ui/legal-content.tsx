export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-mist-400 sm:text-base">
        {children}
      </div>
    </div>
  );
}
