import styled from "@emotion/styled";

const Wrapper = styled.div`
  line-height: 1.7rem;

  table {
    tr {
      td {
        border-color: rgb(255, 255, 255);
      }
    }
  }
`

const Text = (props: { text: string }) => {
  const { text } = props;

  return <Wrapper dangerouslySetInnerHTML={{ __html: text }} />;
};

export default Text;
