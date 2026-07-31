import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected production projects by ${site.name} — education platforms, commerce, operations systems, and product engineering.`,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
