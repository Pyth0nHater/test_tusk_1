import "./globals.css";

export const metadata = {
  title: "Get random quote",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'main'}>
        {children}
      </body>
    </html>
  );
}
