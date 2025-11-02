import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-block: 30px;

  img {
    cursor: pointer;
    width: 20px;

    @media (max-width: 768px) {
      width: 30px;
    }
  }

  p {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 1200px) {
    max-width: 550px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
