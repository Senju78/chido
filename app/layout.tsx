import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema Avanzado de Notas",
  description: "Una herramienta poderosa para organizar y administrar tus notas con facilidad",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-200 text-gray-800 font-sans antialiased">
        <header className="py-6 bg-gradient-to-b from-purple-700 to-purple-900 text-white shadow-md">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold">Sistema Avanzado de Notas</h1>
            <p className="text-lg mt-2">Organiza, prioriza y lleva tus notas al siguiente nivel</p>
          </div>
        </header>
        <nav className="bg-purple-100 py-4 shadow-inner">
          <div className="container mx-auto flex justify-center gap-8 text-purple-800">
            <a href="/" className="hover:underline">Inicio</a>
            <a href="/about" className="hover:underline">Acerca de</a>
            <a href="/features" className="hover:underline">Características</a>
            <a href="/contact" className="hover:underline">Contacto</a>
          </div>
        </nav>
        <main className="container mx-auto p-8">
          {children}
        </main>
        <footer className="py-6 bg-gray-800 text-gray-100">
          <div className="container mx-auto text-center">
            <p className="text-sm">© 2024 Sistema Avanzado de Notas. Todos los derechos reservados.</p>
            <p className="text-xs mt-2">Creado con ♥ por el equipo de desarrollo.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
