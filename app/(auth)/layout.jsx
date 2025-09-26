import MobileBackButton from "@/components/MobileBackButton";

export default function AuthLayout({ children }) {
  return (
    <body className="min-h-screen">
      <MobileBackButton />
      {children}
    </body>
  );
}
