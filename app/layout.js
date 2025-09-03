
import "./globals.css";

export const metadata = {
  title: "Arimart",
  description: "Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-white ">
        {children}
      </body>
    </html>
  );
}
