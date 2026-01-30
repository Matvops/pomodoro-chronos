import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { FormHome } from "../../components/FormHome";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {

  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <FormHome />
        </Container>
      </MainTemplate>
    </>
  );
}