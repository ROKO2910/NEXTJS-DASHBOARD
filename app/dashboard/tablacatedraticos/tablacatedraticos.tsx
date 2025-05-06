'use client';

import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { Catedratico, catedraticosData } from './data';

export default function TablaCatedraticos() {
  const [catedraticos, setCatedraticos] = useState<Catedratico[]>(catedraticosData);
  const [busqueda, setBusqueda] = useState("");
  const [ordenamiento, setOrdenamiento] = useState<{ campo: string | null, direccion: 'asc' | 'desc' }>({ campo: null, direccion: 'asc' });
  const [filtroActivo, setFiltroActivo] = useState<'todos' | 'activos' | 'inactivos'>('todos');

  // Búsqueda
  const buscarCatedraticos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);
    
    if (valor === "") {
      // Si el filtro activo está aplicado, mantener ese filtro
      if (filtroActivo !== 'todos') {
        aplicarFiltroActivo(filtroActivo);
      } else {
        setCatedraticos(catedraticosData);
      }
    } else {
      let resultados = catedraticosData.filter(catedratico => 
        catedratico.nombre.toLowerCase().includes(valor) ||
        catedratico.materias.some(materia => materia.toLowerCase().includes(valor)) ||
        catedratico.carreras.some(carrera => carrera.toLowerCase().includes(valor))
      );
      
      // Aplicar filtro adicional por estado si existe
      if (filtroActivo !== 'todos') {
        resultados = resultados.filter(catedratico => 
          (filtroActivo === 'activos' && catedratico.activo) || 
          (filtroActivo === 'inactivos' && !catedratico.activo)
        );
      }
      
      setCatedraticos(resultados);
    }
  };

  // Ordenamiento
  const ordenarPor = (campo: 'nombre' | 'valoracion') => {
    const direccion = ordenamiento.campo === campo && ordenamiento.direccion === 'asc' ? 'desc' : 'asc';
    setOrdenamiento({ campo, direccion });

    setCatedraticos([...catedraticos].sort((a, b) => {
      if (campo === 'nombre') {
        return direccion === 'asc' 
          ? a.nombre.localeCompare(b.nombre)
          : b.nombre.localeCompare(a.nombre);
      } else if (campo === 'valoracion') {
        return direccion === 'asc' 
          ? a.valoracion - b.valoracion
          : b.valoracion - a.valoracion;
      }
      return 0;
    }));
  };

  // Aplicar filtro por estado
  const aplicarFiltroActivo = (estado: 'todos' | 'activos' | 'inactivos') => {
    if (estado === 'todos') {
      if (busqueda !== "") {
        // Si hay una búsqueda activa, filtramos primero por la búsqueda
        const resultados = catedraticosData.filter(catedratico => 
          catedratico.nombre.toLowerCase().includes(busqueda) ||
          catedratico.materias.some(materia => materia.toLowerCase().includes(busqueda)) ||
          catedratico.carreras.some(carrera => carrera.toLowerCase().includes(busqueda))
        );
        setCatedraticos(resultados);
      } else {
        setCatedraticos(catedraticosData);
      }
    } else {
      const catedraticosBase = busqueda !== "" 
        ? catedraticosData.filter(catedratico => 
            catedratico.nombre.toLowerCase().includes(busqueda) ||
            catedratico.materias.some(materia => materia.toLowerCase().includes(busqueda)) ||
            catedratico.carreras.some(carrera => carrera.toLowerCase().includes(busqueda))
          )
        : catedraticosData;
      
      const resultados = catedraticosBase.filter(catedratico => 
        (estado === 'activos' && catedratico.activo) || 
        (estado === 'inactivos' && !catedratico.activo)
      );
      setCatedraticos(resultados);
    }
  };

  // Filtrado por estado
  const filtrarPorEstado = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const estado = e.target.value as 'todos' | 'activos' | 'inactivos';
    setFiltroActivo(estado);
    aplicarFiltroActivo(estado);
  };

  // Renderizado del indicador de ordenamiento
  const renderIndicadorOrden = (campo: string) => {
    if (ordenamiento.campo !== campo) return null;
    return ordenamiento.direccion === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Directorio de Catedráticos</h1>
      
      {/* Controles de búsqueda y filtros */}
      <div className="mb-4 flex flex-col md:flex-row gap-3 justify-between">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Buscar catedrático, materia o carrera..."
            value={busqueda}
            onChange={buscarCatedraticos}
          />
        </div>
        
        <div className="flex items-center">
          <Filter size={18} className="mr-2 text-gray-500" />
          <select
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={filtroActivo}
            onChange={filtrarPorEstado}
          >
            <option value="todos">Todos los catedráticos</option>
            <option value="activos">Solo activos</option>
            <option value="inactivos">Solo inactivos</option>
          </select>
        </div>
      </div>
      
      {/* Tabla de catedráticos */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                <button 
                  onClick={() => ordenarPor('nombre')}
                  className="flex items-center font-semibold focus:outline-none"
                >
                  Nombre
                  {renderIndicadorOrden('nombre')}
                </button>
              </th>
              <th className="px-4 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Materias
              </th>
              <th className="px-4 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Carreras
              </th>
              <th className="px-4 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                <button 
                  onClick={() => ordenarPor('valoracion')}
                  className="flex items-center font-semibold focus:outline-none"
                >
                  Valoración
                  {renderIndicadorOrden('valoracion')}
                </button>
              </th>
              <th className="px-4 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {catedraticos.length > 0 ? (
              catedraticos.map((catedratico) => (
                <tr key={catedratico.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        {catedratico.nombre.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{catedratico.nombre}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      {catedratico.materias.map((materia, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1 mb-1">
                          {materia}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      {catedratico.carreras.map((carrera, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-1 mb-1">
                          {carrera}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-2 text-sm font-medium text-gray-900">
                        {catedratico.valoracion.toFixed(1)}
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${(catedratico.valoracion / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {catedratico.activo ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Activo
                      </span>
                    ) : (
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Inactivo
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{catedratico.motivoInactivo}</p>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  No se encontraron catedráticos con los criterios de búsqueda
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Resumen */}
      <div className="mt-4 text-sm text-gray-600">
        Mostrando {catedraticos.length} de {catedraticosData.length} catedráticos
      </div>
    </div>
  );
}