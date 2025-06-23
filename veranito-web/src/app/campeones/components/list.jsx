export const List = ({ campeones }) => {
    return (
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
    );
};          