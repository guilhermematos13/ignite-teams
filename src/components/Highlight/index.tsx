import { Container, Subtitle, Title } from "./styles";

interface HighlightProps {
  title: string;
  subtitle: string;
}

export function Highlight(props: HighlightProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  );
}
