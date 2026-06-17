export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex justify-center py-12">
      <span
        className="font-body text-[11px] tracking-[0.22em] uppercase px-5 py-2"
        style={{
          border: "1px solid rgba(126,200,227,0.25)",
          color: "var(--celeste)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
