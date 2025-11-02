import Maquina from "@/assets/maquina.webp";
import Piercing from "@/assets/piercing.webp";
import Location from "@/assets/location.png";

import { CardContainer } from "./style";

export const Card = () => {
  const cards = [
    {
      id: 1,
      title: "Agendar uma tattoo",
      description: "Clique aqui e você será direcionado para o agendamento.",
      image: Maquina,
      classe: "card-tattoo",
      mensagem: "Olá Montanha, gostaria de agendar uma tatto com você.",
    },
    {
      id: 2,
      title: "Agendar um Piercing",
      description: "Clique aqui e você será direcionado para o agendamento.",
      image: Piercing,
      classe: "card-piercing",
      mensagem: "Olá Montanha, gostaria de agendar um piercing com você.",
    },

    {
      id: 3,
      title: "Ver nossa Localização",
      description:
        "Clique aqui e você será direcionado para o Google Maps, com nossa localização",
      image: Location,
      classe: "card-location",
      url: "https://www.google.com/maps/place/MONTANHA+TATTOO+STUDIO/@-19.9278052,-43.9117226,876m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6998143133def:0x4ec17a45ab7ef64d!8m2!3d-19.9278103!4d-43.9091423!16s%2Fg%2F11k5g1186m?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const whatsappBaseUrl = "https://wa.me/5531994747595?text=";

  const handleCardClick = (mensagem) => {
    const url = whatsappBaseUrl + encodeURIComponent(mensagem);
    window.open(url, "_blank");
  };

  const handleLocationClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <CardContainer>
      {cards.map((card) => {
        return (
          <button
            onClick={() =>
              card.url ? handleLocationClick(card.url) : handleCardClick(card.mensagem)
            }
            className={`card ${card.classe}`}
            key={card.id}
          >
            <h2>{card.title}</h2>

            <img src={card.image} alt={card.title} />
            <p>{card.description}</p>
          </button>
        );
      })}
    </CardContainer>
  );
};
