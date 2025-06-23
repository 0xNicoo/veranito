import { CampeonesContent } from "./components/campeonesContent";
import { Window } from "../components/window";
import { Buttons } from "../components/menu/buttons";

export default function CampeonesPage() {
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

  return (
      <Window title="🏆 Tabla de Campeones" buttons={<Buttons />} footerTextLeft="Campeones" footerTextRight="🏆 Never goon 🏆">
        <CampeonesContent campeones={campeones} />
      </Window>
  );
} 