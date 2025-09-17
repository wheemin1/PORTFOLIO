interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <div className="inline-block px-6 py-3 border border-border rounded-md">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          {title}
        </h2>
      </div>
    </div>
  );
}