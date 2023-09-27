import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENG : Ahmed Abdulrahman",
  description: `Passionate computer science fresh graduated frontend React js developer. Proven ability to 
  design, develop, and test high-quality web applications using React js.
   Seeking a job opportunity in a reputable company in the field of software development, where 
  I can utilize my knowledge in Frontend developement React js technology towards the growth of 
  the organization and developing my potential in team management.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div
          className={`bg-[#fbe2e3] w-[31.25rem] h-[31.25rem] rounded-full blur-[9rem] absolute top-[-6rem] right-[11rem] -z-10 sm:w-[68.75rem]`}
        ></div>
        <div
          className={`bg-[#dbd7fb] w-[50rem] h-[31.25rem] rounded-full blur-[9rem] absolute top-[-1rem] left-[-35rem] -z-10 sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-50rem] 2xl:left-[-5rem]`}
        ></div>
        <div></div>
        {children}
      </body>
    </html>
  );
}
