import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
