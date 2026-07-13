export default function Footer({ copyright }: { copyright: string }) {
  return (
    <footer
      className="w-full px-4 py-6 text-center"
      style={{ borderTop: "1px solid var(--hairline)" }}
    >
      <p className="font-body text-[12px]" style={{ color: "#554F49" }}>
        &copy; {copyright}
      </p>
    </footer>
  );
}
