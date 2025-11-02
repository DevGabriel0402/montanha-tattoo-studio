import { FooterContainer } from "./style";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FooterContainer>
      <div>
        <img
          src="https://img.icons8.com/ios11/512/FFFFFF/instagram-new.png"
          alt="instagram icon"
          onClick={() =>
            window.open("https://www.instagram.com/montanhaoficial_/", "_blank")
          }
        />
        <img
          src="https://img.icons8.com/ios11/512/FFFFFF/whatsapp.png"
          alt="whatsapp icon"
          onClick={() => window.open("https://wa.me/5531994747595", "_blank")}
        />
      </div>
      <p>© {year} Montanha Tattoo Studio. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};
