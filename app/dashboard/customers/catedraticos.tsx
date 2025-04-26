'use client';

import React, { useState } from 'react';
import { Search, User, ChevronLeft } from 'lucide-react';
import { catedraticosData } from './data';

type Estudio = {
  nivel: string;
  descripcion: string;
  institucion: string;
};

type Asignacion = {
  licenciatura: string;
  ciclo: string;
  modalidad: string;
  clases: string;
  status: string;
  motivoBaja: string;
  recomendaReingreso: string;
};

type Experiencia = {
  descripcion: string;
  institucion: string;
  fecha: string;
};

type Evaluacion = {
  ciclo: string;
  calificacion: string;
  comentarios: string;
};

type Catedratico = {
  id: number;
  nombre: string;
  especialidad: string;
  fechaNacimiento: string;
  titulo: string;
  escuelaAval: string;
  estudios: Estudio[];
  asignaciones: Asignacion[];
  experiencia: Experiencia[];
  evaluaciones: Evaluacion[];
};

const SistemaCatedraticos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCatedratico, setSelectedCatedratico] = useState<Catedratico | null>(null);
  const [view, setView] = useState<'list' | 'detail'>('list');

  const filteredCatedraticos = catedraticosData.filter(
    c => c.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
         c.especialidad.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const viewDetails = (c: Catedratico) => {
    setSelectedCatedratico(c);
    setView('detail');
  };

  const backToList = () => {
    setSelectedCatedratico(null);
    setView('list');
  };

  const ListView = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Perfiles</h1>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="pl-10 pr-4 py-2 border rounded-lg" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="space-y-2">
        {filteredCatedraticos.map(c => (
          <div 
            key={c.id} 
            className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => viewDetails(c)}
          >
            <div className="bg-gray-200 p-2 rounded-full">
              <User size={24} />
            </div>
            <div>
              <h3 className="font-medium">{c.nombre}</h3>
              <p className="text-gray-600 text-sm">{c.especialidad}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DetailView = () => {
    if (!selectedCatedratico) return null;

    return (
      <div className="p-6">
        <button 
          className="flex items-center gap-1 text-blue-600 mb-4"
          onClick={backToList}
        >
          <ChevronLeft size={18} />
          <span>Información Personal</span>
        </button>

        <div className="bg-white rounded-lg p-6 border space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-gray-200 p-2 rounded-full">
              <User size={24} />
            </div>
            <div>
              <h2 className="text-xl font-medium">{selectedCatedratico.nombre}</h2>
              <p className="text-gray-600">CURP: ••••••••••••••</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p><strong>Fecha de Nacimiento:</strong> {selectedCatedratico.fechaNacimiento}</p>
              <p><strong>Cédula/Título:</strong> {selectedCatedratico.titulo}</p>
              <p><strong>Escuela Aval:</strong> {selectedCatedratico.escuelaAval}</p>
            </div>

            <DataTable title="Estudios" columns={['Nivel', 'Descripción', 'Institución']} data={selectedCatedratico.estudios} keys={['nivel', 'descripcion', 'institucion']} />
            <DataTable title="Asignaciones" columns={['Licenciatura', 'Ciclo', 'Modalidad', 'Clases', 'Status', 'Causa de baja', 'Recomienda Reingreso']} data={selectedCatedratico.asignaciones} keys={['licenciatura', 'ciclo', 'modalidad', 'clases', 'status', 'motivoBaja', 'recomendaReingreso']} />
            <DataTable title="Experiencia" columns={['Descripción', 'Institución', 'Fecha']} data={selectedCatedratico.experiencia} keys={['descripcion', 'institucion', 'fecha']} />
            <DataTable title="Evaluaciones" columns={['Ciclo', 'Calificación', 'Comentarios']} data={selectedCatedratico.evaluaciones} keys={['ciclo', 'calificacion', 'comentarios']} />
          </div>
        </div>
      </div>
    );
  };

  const DataTable = ({ title, columns, data, keys }: { title: string; columns: string[]; data: any[]; keys: string[] }) => (
    <div>
      <h3 className="font-medium text-lg mb-2">• {title}</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            {columns.map((col, i) => (
              <th key={i} className="border p-2 text-left">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {keys.map((key, j) => (
                <td key={j} className="border p-2">{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1">{view === 'list' ? <ListView /> : <DetailView />}</main>
    </div>
  );
};

export default SistemaCatedraticos;