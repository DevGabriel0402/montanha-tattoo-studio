import { GridContainer } from "./style";

export const Grid = () => {
  const imagensUrl = [
    {
      id: 1,
      urlImage:
        "https://res.cloudinary.com/dsqtianpj/image/upload/v1760479025/montanhaoficial__523885032_18048151616552406_189578846832327892_n_1_vhlvpm.jpg",
      alt: "tattoo",
    },
    {
      id: 2,
      urlImage:
        "https://res.cloudinary.com/dsqtianpj/image/upload/v1760479026/montanhaoficial__452854308_18008568629552406_5825118390313894746_n_l1gmi3.jpg",
      alt: "tattoo",
    },
    {
      id: 3,
      urlImage:
        "https://res.cloudinary.com/dsqtianpj/image/upload/v1760479027/marinaandrino_466987429_17978118326785285_7930172944270165863_n_rgstqg.jpg",
      alt: "tattoo",
    },
    {
      id: 4,
      urlImage:
        "https://res.cloudinary.com/dsqtianpj/image/upload/v1760479027/montanhaoficial__467499499_18021860750552406_691190851775556318_n_bkurpp.jpg",
      alt: "tattoo",
    },
    {
      id: 5,
      urlImage:
        "https://res.cloudinary.com/dsqtianpj/image/upload/v1762039288/story-highlights-18070836143149296_1_rpwcaz.jpg",
      alt: "piercing",
    },
    {
      id: 6,
      urlImage:
        "https://res.cloudinary.com/dsqtianpj/image/upload/v1762039290/story-highlights-18070836143149296_nnrxlr.jpg",
      alt: "piercing",
    },
  ];
  return (
    <GridContainer>
      {imagensUrl.map((imagem) => (
        <img key={imagem.id} src={imagem.urlImage} alt="tattoo" />
      ))}
    </GridContainer>
  );
};
