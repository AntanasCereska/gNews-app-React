import styled from "styled-components";

const EmptySearchMessageWrapper = styled.p`
  text-align: center;
  padding: 20px;
`;

const EmptySearchMessage = () => {
  return (
    <EmptySearchMessageWrapper>
      Enter search word/words for app to respond with gNews results
    </EmptySearchMessageWrapper>
  );
};

export default EmptySearchMessage;
