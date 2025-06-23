import { GaleriaContent } from "./components/GaleriaContent";
import { Window } from "../components/window";
import { Buttons } from "../components/menu/buttons";

export default function GaleriaPage() {
  const images = [
    { image: "ssss.jpeg", descripcion: "El peruano mas chad de la historia", src: "/image/images/ssss.jpeg" },
    { image: "mbappe.jpeg", descripcion: "corta la bocha", src: "/image/images/mbappe.jpeg" },
  ];

  return (
      <Window title="Galeria" buttons={<Buttons />} footerTextLeft="Galeria" footerTextRight="🏆 Never goon 🏆">
        <GaleriaContent images={images} />
      </Window>
  );
} 