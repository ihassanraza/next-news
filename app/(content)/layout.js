import "../globals.css";

import MainHeader from "@/components/header/main-header";

export const metadata = {
  title: "Next News",
  description: "Latest news from Next News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
