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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-3 text-center`}
      >
        <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 m-5 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
          {children}
        </main>
      </body>
    </html>
    // </ThemeProvider>
  );
}
