import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected projects by ${site.name} — multi-tenant SaaS, offline desktop systems, marketplaces, education platforms, mobile applications, and AI search.`,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
