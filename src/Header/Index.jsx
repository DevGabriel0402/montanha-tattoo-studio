import ImageHeader from "@/assets/foto.webp";
import { HeaderContainer } from "./style";

import Maquina from "@/assets/maquina.webp";
import Piercing from "@/assets/piercing.webp";

export const Header = () => {
  return (
    <HeaderContainer>
      <img
        className="seta-animated"
        src="https://images.vexels.com/media/users/3/136720/isolated/preview/aa2c8886b534f88cf3c788d11ee553b4-seta-direita.png"
        alt="seta icon"
      />
      <img className="icon icon-maquina" src={Maquina} alt="Máquina" />
      <img className="icon icon-piercing" src={Piercing} alt="Piercing" />
      <img className="foto" src={ImageHeader} alt="Header" />
      <h1 className="texto">Links Úteis</h1>
    </HeaderContainer>
  );
};
