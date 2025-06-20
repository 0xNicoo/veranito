import { Menu } from "./components/menu/menu";
import { Anuncio } from "./components/anuncio";

export default function Home() {

  return (
    <div className="flex flex-col items-center">
      <Menu />  
      <Anuncio />  
    </div>
  );
}
