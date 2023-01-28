import styled from "@emotion/styled";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  image?: string;
  children: ReactNode;
  reverse?: boolean;
}

interface ContainerProps {
  reverse: HeroProps["reverse"];
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 60px;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  }
`;

const FlexItem = styled.div`
  flex: 1 1 0;
`;

const Description = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
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
  line-height: 4.5rem;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
    line-height: 3rem;
  }

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
  }
`;

const Hero = (props: HeroProps) => {
  const { title, image, children, reverse = false } = props;

  return (
    <Container reverse={reverse}>
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
