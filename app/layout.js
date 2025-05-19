import { Outfit , Ovo } from "next/font/google" ;
import "./globals.css";

const outfit = Outfit({
  subsets : ["latin"] , weight : ["400","500","600","700"]
})

const ovo = Ovo({
  subsets : ["latin"] , weight : ["400"]
})


export const metadata = {
  title: 'Sarath Khandavilli - Portfolio',
  description: 'Official website of Sarath Chandra Khandavilli, showcasing skills, projects, and professional background.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
