import ImageHeader from "@/assets/foto.webp";
import { HeaderContainer } from "./style";

import Maquina from "@/assets/maquina.webp";
import Piercing from "@/assets/piercing.webp";

export const Header = () => {
  return (
    <HeaderContainer>
      <img className="icon icon-maquina" src={Maquina} alt="Máquina" />
      <img className="icon icon-piercing" src={Piercing} alt="Piercing" />
      <img className="foto" src={ImageHeader} alt="Header" />
      <h1 className="texto">Links Úteis</h1>
    </HeaderContainer>
  );
};
