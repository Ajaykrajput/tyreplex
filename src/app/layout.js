import { Roboto } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBootstrap from "../components/InstallBootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InstallBootstrap />
        {children}
      </body>
    </html>
  );
}
