import styled from "@emotion/styled";
import { ReactNode } from "react";

interface FeatureProps {
  title?: string;
  children?: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: #737b7d;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

const Feature = (props: FeatureProps) => {
  const { title, children } = props;

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <div>{children}</div>
    </Container>
  );
};

export default Feature;
