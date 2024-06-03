import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "A-i manager App",
  description: "An app to manage to your sites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jakarta.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
