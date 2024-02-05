import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalStyle from "@/themes/globalStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Moviectionary: Explore o Mundo do Cinema e Séries",
    description:
        "Explore o universo cinematográfico no Moviectionary. Veja informações detalhadas sobre filmes e séries, incluindo sinopses, elencos e avaliações.",
    keywords:
        "Cinema, Séries, Moviectionary, API TMDB, Informações sobre Filmes, Sinopses, Elencos, Avaliações, Entretenimento Audiovisual, Guia Cinematográfico.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <GlobalStyle />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
