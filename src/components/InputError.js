import styled from "styled-components";

const InputErrorWrapper = styled.p`
  text-align: center;
  padding: 20px;
  color: red;
`;

const InputError = () => {
  return (
    <InputErrorWrapper>
      Spaces and not alphanumeric symbols are not allowed!
    </InputErrorWrapper>
  );
};

export default InputError;
