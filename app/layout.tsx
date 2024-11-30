import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestión de Notas jesus 186",
  description: "Aplicación para gestionar notas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-custom antialiased bg-lightPink text-darkPurple">
        <header className="p-4 bg-lightBlue text-darkYellow text-center">
          <h1 className="text-3xl font-bold">Bienvenidos</h1>
          <p className="text-xl">Aplicación de Gestión de Notas</p>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 bg-gray-200 text-lightBlue text-center">
          <p>© 2024 Aplicación de Notas de Ángel</p>
        </footer>
      </body>
    </html>
  );
}
