import styled from "styled-components";

export const CardContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;

  margin-top: 10px;

  @media (max-width: 1200px) {
    max-width: 550px;
    width: 550px;
  }
  @media (max-width: 580px) {
    width: 90%;
  }

  .card {
    width: 100%;
    position: relative;
    box-shadow: rgba(255, 255, 255, 0.08) 0px 0px 0px 1px;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    background-color: transparent;
    color: #fafafa;
    text-align: start;
    font-family: "Roboto", sans-serif;
    border: none;

    img {
      padding: 10px;
      background-color: #cccccc28;
      position: absolute;
      box-shadow: rgba(255, 255, 255, 0.08) 0px 0px 0px 1px;
      filter: invert(1) hue-rotate(30deg);

      z-index: 99;
      width: 50px;
      top: 10px;
      right: 10px;
      border-radius: 8px;
    }

    h2 {
      width: 80%;
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
    }

    p {
      width: 80%;
      font-family: "Roboto", sans-serif;

      margin-top: 8px;
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
