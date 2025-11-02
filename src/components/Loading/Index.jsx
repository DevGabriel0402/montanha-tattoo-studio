import LoadingImage from "@/assets/favicon-montanha.png";

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImg src={LoadingImage} alt="Loading..." />
    </LoadingContainer>
  );
};

import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #121112;
`;

export const LoadingImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  animation: opacityAnimation 0.5s infinite alternate;

  @keyframes opacityAnimation {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;
