import styled from "styled-components";

export const GridContainer = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  margin: 0 auto;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  border-radius: 10px;
  background-color: #5351516f;
  padding: 5px;
  box-shadow: rgba(255, 255, 255, 0.08) 0px 0px 0px 1px;

  @media (max-width: 1200px) {
    width: auto;
  }

  @media (max-width: 600px) {
    width: auto;
  }
  @media (max-width: 580px) {
    width: 90%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    align-items: center;
    justify-content: flex-start;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none !important;
    }
  }

  img {
    width: 180px;
    height: auto;
    padding: 5px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 16px;

    @media (max-width: 580px) {
      width: 260px;
    }

    @media (max-width: 360px) {
      width: 180px;
    }
  }
`;
