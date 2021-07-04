import styled from "styled-components";

const SearchInput = styled.input`
  display: block;
  margin: 0.5em auto;
  font-size: 1.5rem;
`;

const SearchBarWrapper = styled.div``;

const SearchBar = (props) => {
  return (
    <>
      <SearchBarWrapper >
        <SearchInput
          maxLength={40}
          placeholder="enter search word/words"
          onChange={(e) => props.onChange(e.target.value)}
        />
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;
