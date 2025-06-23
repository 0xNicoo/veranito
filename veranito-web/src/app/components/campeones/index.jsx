import Link from 'next/link';

export const Campeones = ({ showBackButton = false }) => {
  const campeones = [
    { semana: 1, dias: "28/04/2025 - 04/05/2025", campeon: "Sebastian Gonzales Tello", motivo: "Por peruano", campeonatos: '⭐' },
    { semana: 2, dias: "05/05/2025 - 11/05/2025", campeon: "Emiliano Rios", motivo: "Cronograma", campeonatos: '⭐' },
    { semana: 3, dias: "12/05/2025 - 18/05/2025", campeon: "Rafael Eguren", motivo: "Por cabra", campeonatos: '⭐' },
    { semana: 4, dias: "19/05/2025 - 25/05/2025", campeon: "Juan Ignacio Frangolini", motivo: "Pegó laburo", campeonatos: '⭐' },
    { semana: 5, dias: "26/05/2025 - 01/06/2025", campeon: "Victoria Miranda", motivo: "Recibida", campeonatos: '⭐' },
    { semana: 6, dias: "02/06/2025 - 08/06/2025", campeon: "Tomas Pipolo", motivo: "Se votó solo", campeonatos: '⭐' },
    { semana: 7, dias: "09/06/2025 - 15/06/2025", campeon: "Nicolas Morales", motivo: "Justicia divina", campeonatos: '⭐' },
    { semana: 8, dias: "16/06/2025 - 22/06/2025", campeon: "Juan Ignacio Frangolini", motivo: "Cumpleaños", campeonatos: '⭐⭐' },
  ];

  const totalCampeonatos = campeones.length;

  return (
    <div className="win95-window w-full max-w-4xl mt-4">
      <div className="win95-title-bar">
        <span>🏆 Tabla de Campeones</span>
        <div className="win95-title-bar-buttons">
          {showBackButton && (
            <Link href="/">
              <button className="win95-button">←</button>
            </Link>
          )}
          <button className="win95-button">_</button>
          <button className="win95-button">□</button>
          <button className="win95-button">X</button>
        </div>
      </div>
      
      <div className="p-4 bg-[#c0c0c0]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#c0c0c0] text-black">
                <th className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2 text-left">Semana</th>
                <th className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2 text-left">Días</th>
                <th className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2 text-left">Campeón</th>
                <th className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2 text-left">Motivo</th>
                <th className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2 text-left">Campeonatos</th>
              </tr>
            </thead>
            <tbody>
              {campeones.map((campeon, index) => (
                <tr key={index} className={'bg-white'}>
                  <td className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2">{campeon.semana}</td>
                  <td className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2">{campeon.dias}</td>
                  <td className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2">{campeon.campeon}</td>
                  <td className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2">{campeon.motivo}</td>
                  <td className="border-2 border-r-[#808080] border-b-[#808080] border-l-white border-t-white p-2 text-center">
                    {campeon.campeonatos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 p-3 bg-[#c0c0c0] inset-border">
          <p className="text-sm mt-1">
            <strong>📊 Total de Campeonatos:</strong> {totalCampeonatos}
          </p>
        </div>
      </div>
      
      <div className="inset-border p-1 text-xs flex justify-between">
        <span>©2025 Veranito - Campeones</span>
        <span>🏆 Never goon 🏆</span>
      </div>
    </div>
  );
}; 