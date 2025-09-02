import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

// import { ThemeProvider } from '@/components/shadcn-example/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'React Key Concepts',
  description: 'We will code our way through the key concepts of React book.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ThemeProvider
    //   attribute="class"
    //   defaultTheme="system"
    //   enableSystem
    //   disableTransitionOnChange
    // >
    <html lang="en" className="h-full">
      <body
        className={`antialiased m-0 text-center ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className="container h-full mx-auto py-10 px-6">{children}</main>
      </body>
    </html>
    // </ThemeProvider>
  );
}
