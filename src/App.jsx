import { Header } from "./Header/Index";
import styled from "styled-components";
import { Main } from "./Main/Index";
import { Footer } from "./Footer/Index";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 95vw;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px;
`;
