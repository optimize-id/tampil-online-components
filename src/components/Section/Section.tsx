import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const SectionWrapper = styled.div`
  display: flex;

  a {
    color: #304979;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media print {
    flex-direction: column;
  }
`;

const SectionTitle = styled.div`
  width: 250px;

  h3 {
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const SectionContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  table * {
    border-width: 0 !important;
  }
`;

const Section = (props: { title: string; children: ReactNode }) => {
  const { title, children } = props;
  return (
    <SectionWrapper>
      <SectionTitle>
        <h3>{title}</h3>
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};

export default Section;
