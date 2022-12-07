import styled from "styled-components";
import { Form } from "./Form";
import { PageType } from "../pages";

const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 100px 48px 48px 48px;
  width: 100%;
`;

const Container = styled.nav`
  margin: auto;
  max-width: 640px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  text-transform: uppercase;

  strong {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 48px;
  text-align: center;
`;

interface Props {
  page: PageType;
}

function Page({ page }: Props) {
  return (
    <Wrapper color={page.color}>
      <Container>
        <Title>
          React <strong>Page Transitions</strong>
        </Title>

        <Description>
          View the usage instructions and source code on{" "}
          <a
            href="https://github.com/Steveeeie/react-page-transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Description>

        <Form />
      </Container>
    </Wrapper>
  );
}

export { Page };
