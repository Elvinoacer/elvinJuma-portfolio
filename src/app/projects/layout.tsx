import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Project Archive",
  description: `A chronological engineering archive by ${site.name}, covering product systems, platforms, commerce, education and interface experiments from 2024 onward.`,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
