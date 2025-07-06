import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elvin Omondi Juma | Full-Stack Developer & Computer Scientist",
  description:
    "Elvin Omondi Juma is a Kenyan full-stack developer specializing in React, Next.js, Node.js, and cutting-edge web technologies. A Computer Science student at Moi University and alumnus of Equity Leadership Program, Elvin combines formal education with hands-on expertise from Beren LLC Bootcamp. Skilled in TypeScript, React Native, Redux, Figma UI design, and AI integration (OpenAI), he builds secure, dynamic web and mobile apps with frameworks like Express, Socket.io, and Three.js. Explore his journey from Kapkenduiywo Primary School to tech innovation in Kenya.",
  keywords: [
    "Full-stack developer Kenya",
    "React developer Eldoret",
    "Next.js portfolio",
    "Moi University Computer Science",
    "TypeScript expert",
    "React Native mobile apps",
    "Node.js backend developer",
    "UI/UX design with Figma",
    "Web development Kenya",
    "Equity Leadership Program alumnus",
    "Eldoret, Uasin Gishu, Kapseret, Nakuru, WestsideMall",
  ],
  openGraph: {
    type: "website",
    // url: "https://elvin-profile.netlify.app.com",
    title: "Elvin Omondi Juma | Full-Stack Developer",
    description:
      "Kenyan developer building modern web & mobile apps with React, Next.js, and Node.js.",
    images: [{ url: "/images/elvin-logo-1.png" }],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
