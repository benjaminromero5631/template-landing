import { config } from "@/lib/config";

export default function Footer() {
  return (
    <footer
      className="w-full px-4 py-6 text-center"
      style={{ borderTop: "1px solid var(--hairline)" }}
    >
      <p className="font-body text-[12px]" style={{ color: "#554F49" }}>
        &copy; {config.footer.copyright}
      </p>
    </footer>
  );
}
