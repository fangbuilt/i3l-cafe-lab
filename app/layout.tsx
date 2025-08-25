import type { Metadata } from "next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { ClientLayout } from "./client-layout";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "i3L Cafe Lab",
  description:
    "Internal software for i3L Cafe Lab, streamlining operations and enhancing stakeholder experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
