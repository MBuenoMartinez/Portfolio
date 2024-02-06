import ScrollToTop from "@/components/common/ScrollToTop";
import "./globals.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin"],
  display: "swap",
});

export const metadata = {
  title: "Martin Bueno",
  description:
    "Martin Bueno is a passionate full stack developer focusing on Front-End with experience in web design. .",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ScrollToTop /> {children}
      </body>
    </html>
  );
};

export default RootLayout;
