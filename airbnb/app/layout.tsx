import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar/navbar";

import { Nunito } from "next/font/google";
import ClientOnly from "./components/clientonly";

import RegisterModal from "./components/modals/registermodal";
import TosterProvider from "./providers/tosterprovider";
import LoginModal from "./components/modals/loginmodal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/rentmodal";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone app",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <TosterProvider />
          {/**/}
          <RentModal/>
          <LoginModal /> 
          <RegisterModal />
          
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
