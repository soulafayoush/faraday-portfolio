import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google"; // دمج الخط الفاخر محلياً
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/portfolio/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// تهيئة الخط الفاخر من خلال محرك الأداء الرسمي لـ Next.js لمنع الـ Layout Shift
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap", // يضمن تحميل النص فوراً دون أي حجب بصري
});

// الحفاظ التام والكامل على كافة مسميات وبيانات الـ Metadata دون تغيير حرف واحد
export const metadata: Metadata = {
  title: "Alexander Faraday — Growth & VC Consultant",
  description: "Strategic growth advisory and venture capital consulting for next-generation companies. Based in Geneva, Switzerland.",
  keywords: ["growth consultant", "VC", "venture capital", "startup advisory", "Alexander Faraday", "Geneva"],
  authors: [{ name: "Alexander Faraday" }],
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Alexander Faraday — Growth & VC Consultant",
    description: "Strategic growth advisory and venture capital consulting for next-generation companies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* تم حذف روابط Google Fonts التقليدية لأن الخط أصبح مدمجاً ومحسناً محلياً بالأعلى */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} antialiased`}
        style={{ background: "#050505" }} // إعطاء لون خلفية مبدئي صلب يطابق ثيم الكربون الفاخر لمنع وميض الشاشة الأبيض أثناء التحميل الأولى
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}