
import "./globals.css";

export const metadata = {
  title: "Burna Landing Page",
  description: "Created by jayempire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
