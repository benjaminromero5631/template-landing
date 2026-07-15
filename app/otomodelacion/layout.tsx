import type { Metadata } from "next";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: config.clinica.nombre,
};

export default function OtomodelacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
