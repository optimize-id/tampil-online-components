import styled from "@emotion/styled";

interface GridProps {
  columns?: number;
}

const generateColumns = (columns = 1) => {
  const arr = [...new Array(columns)];
  return arr.map(() => `1fr`).join(" ");
};

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => generateColumns(columns)};
  grid-column-gap: 24px;
  grid-row-gap: 48px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  }
`;

export default Grid;
