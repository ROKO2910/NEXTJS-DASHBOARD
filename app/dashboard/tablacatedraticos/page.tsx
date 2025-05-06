import CatedraticosComp from '@/app/dashboard/tablacatedraticos/tablacatedraticos';
import TablaCatedraticos from './tablacatedraticos';

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Sistema de Evaluación de Catedráticos</h1>
        <p className="text-gray-600 text-center">Visualiza información sobre catedráticos, materias y valoraciones.</p>
      </div>
      
      <section className="mb-8">
        <TablaCatedraticos />
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Acciones Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors cursor-pointer">
            <h3 className="font-medium text-blue-600 mb-2">Evaluar Catedrático</h3>
            <p className="text-sm text-gray-600">Envía tu valoración sobre un catedrático y las materias que imparte.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors cursor-pointer">
            <h3 className="font-medium text-blue-600 mb-2">Ver Estadísticas</h3>
            <p className="text-sm text-gray-600">Consulta estadísticas generales sobre valoraciones y desempeño.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors cursor-pointer">
            <h3 className="font-medium text-blue-600 mb-2">Administrar Carreras</h3>
            <p className="text-sm text-gray-600">Gestiona la información sobre carreras y planes de estudio.</p>
          </div>
        </div>
      </section>
    </main>
  );
}