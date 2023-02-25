import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TitleLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SectionLogo = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0rem;
  text-transform: uppercase;
  font-weight: 800;
`;

const TitleWrapper = styled.div`
  flex: 1;
`;

const Content = styled.div<{ hasImage: boolean }>`
  ${({ hasImage }) =>
    hasImage &&
    css`
      margin-left: 60px;
    `}
  margin-top: 16px;

  ul {
    margin-top: 0;
    padding-left: 17px;

    li {
      margin-bottom: 6px;
    }
  }

  li > ul {
    margin-top: 6px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const ActivityCard = (props: {
  title: string;
  subTitle: string;
  text: string;
  image: string;
}) => {
  const { image, title: activityTitle, subTitle, text } = props;

  return (
    <Item>
      <TitleLogo>
        {!!image && (
          <SectionLogo>
            <img decoding="async" alt={activityTitle} src={image} />
          </SectionLogo>
        )}
        <TitleWrapper>
          <Title>{activityTitle}</Title>
          <div>{subTitle}</div>
        </TitleWrapper>
      </TitleLogo>

      <Content hasImage={!!image} dangerouslySetInnerHTML={{ __html: text }} />
    </Item>
  );
};

export default ActivityCard;
