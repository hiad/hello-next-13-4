import React from "react";
import TimeStamp from "../components/timestamp";
import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          <TimeStamp></TimeStamp>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
