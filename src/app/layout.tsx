import type { Metadata } from "next";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Buscador de pasteles",
    description: "Una App web para buscar diseños de pasteles",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-gradient-to-b from-color-4 to-color-5 bg-fixed">
            <body className="min-h-screen overflow-x-hidden">
                <NextUIProvider>
                    {children}
                </NextUIProvider>
            </body>
        </html>
    );
}
