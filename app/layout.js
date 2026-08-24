import "./globals.css";

export const metadata = {
  title: "Kanike Madhu - AI/ML Engineer Portfolio",
  description: "AI/ML Engineer & Full Stack Developer specializing in NLP, applied ML, and end-to-end web applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
