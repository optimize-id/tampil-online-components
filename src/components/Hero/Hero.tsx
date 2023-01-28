import styled from "@emotion/styled";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  image?: string;
  children: ReactNode;
  reverse?: boolean;
  inline?: boolean;
}

interface ContainerProps {
  reverse: HeroProps["reverse"];
  inline: HeroProps["inline"];
}

const containerFlexDirection = (reverse: boolean, inline: boolean) => {
  if (inline) {
    return reverse ? "column-reverse" : "column";
  }
  return reverse ? "row-reverse" : "reverse";
};

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 60px;
  flex-direction: ${({ reverse = false, inline = false }) =>
    containerFlexDirection(reverse, inline)};
  text-align: ${({ inline = false }) => (inline ? "center" : "left")};

  @media screen and (max-width: 1024px) {
    padding: 30px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  }
`;

const FlexItem = styled.div`
  flex: 1 1 0;
`;

const Description = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #737b7d;

  @media screen and (max-width: 1024px) {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h4`
  font-size: 3.2rem;
  color: #373f41;
  font-weight: 700;
  line-height: 4rem;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
    line-height: 3rem;
  }
`;

const Hero = (props: HeroProps) => {
  const { title, image, children, reverse = false, inline = false } = props;

  return (
    <Container reverse={reverse} inline={inline}>
      <FlexItem>
        <DescriptionContainer>
          <Title>{title}</Title>
          <Description>{children}</Description>
        </DescriptionContainer>
      </FlexItem>
      {!!image ? (
        <FlexItem>
          <img src={image} alt={title} />
        </FlexItem>
      ) : (
        <FlexItem>&nbsp;</FlexItem>
      )}
    </Container>
  );
};

export default Hero;
