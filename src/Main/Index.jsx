import { MainContainer } from "./style";
import { Grid } from "../components/Grid/Index.jsx";
import { Card } from "../components/Card/Index.jsx";

export const Main = () => {
  return (
    <MainContainer>
      <Grid />
      <Card />
    </MainContainer>
  );
};
