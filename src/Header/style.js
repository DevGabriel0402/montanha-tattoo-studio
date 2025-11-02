import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 460px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  position: relative;
  overflow: hidden;
  background-image: url("https://res.cloudinary.com/dsqtianpj/image/upload/v1762037024/Montanha-BG-min_p47ruv.png");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    z-index: 20;
    background-image: linear-gradient(to top, #0b0b0b 0%, transparent 100%);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    background-image: linear-gradient(to left, #0b0b0b 0%, transparent 50%, #0b0b0b 100%);
  }

  @media (max-width: 460px) {
    width: 90vw;
    min-height: 430px;
  }

  @media (max-width: 380px) {
    width: 90vw;
    min-height: 320px;
  }

  .foto {
    width: 500px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    z-index: 10;
    top: 30px;

    @media (max-width: 460px) {
      width: 100vw;
      bottom: 0;
      /* top: 50px; */
    }

    @media (max-width: 380px) {
      width: 100vw;
    }
  }

  .texto {
    width: 100%;
    position: absolute;
    text-align: center;
    top: 100px;
    z-index: 5;
    font-size: 6em;
    padding: 0;
    margin: 0;
    color: #fafafa;
    text-shadow: 0 1px #020303ff, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5,
      -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5,
      -4px 5px #808d93, -5px 4px #000000ff, -5px 6px #808d93, -6px 5px #cdd2d5,
      -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 12px;
    @media (max-width: 550px) {
      font-size: 4em;
    }

    @media (max-width: 380px) {
      font-size: 3em;
      top: 75px;
    }

    @media (max-width: 280px) {
      font-size: 2em;
      top: 60px;
    }
  }

  .icon {
    width: 120px;
    position: absolute;
  }

  .icon-maquina {
    filter: blur(2px);

    z-index: 15;
    bottom: 80px;
    transform: rotate(-20deg) translate(-130px, -90px);
  }
  .icon-piercing {
    filter: blur(2px);
    width: 60px;
    z-index: 15;
    bottom: 80px;
    transform: rotate(-20deg) translate(130px, -120px);
  }

  @media (max-width: 600px) {
    .icon-maquina {
      transform: rotate(-20deg) translate(-80px, -100px);
    }
  }
`;
