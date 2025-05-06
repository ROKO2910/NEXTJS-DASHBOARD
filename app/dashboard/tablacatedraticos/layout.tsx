/*import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sistema de Evaluación de Catedráticos',
  description: 'Aplicación para la evaluación y gestión de catedráticos, materias y carreras.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-blue-700 text-white shadow-md">
          <div className="container mx-auto py-4 px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-bold text-xl">EvalúaCatedráticos</span>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li><a href="#" className="hover:text-blue-200 transition-colors">Inicio</a></li>
                  <li><a href="#" className="hover:text-blue-200 transition-colors">Catedráticos</a></li>
                  <li><a href="#" className="hover:text-blue-200 transition-colors">Materias</a></li>
                  <li><a href="#" className="hover:text-blue-200 transition-colors">Carreras</a></li>
                </ul>
              </nav>
              <div>
                <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">EvalúaCatedráticos</h3>
                <p className="text-gray-300">Sistema para evaluación de catedráticos y gestión académica.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contáctanos</h3>
                <p className="text-gray-300">info@evaluacatedraticos.edu</p>
                <p className="text-gray-300">+123 456 7890</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} EvalúaCatedráticos. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}*/
export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }