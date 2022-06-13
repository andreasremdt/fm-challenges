import Checkbox from "./checkbox";
import * as Styled from "./search-bar.styled";

function SearchBar() {
  return (
    <Styled.Form noValidate>
      <Styled.SearchInput type="search" id="search" placeholder="Filter by title, companies, expertise..." />

      <Styled.Select required>
        <option value="" selected>
          Filter by location...
        </option>
        <option value="uk">United Kingdom</option>
        <option value="us">United States</option>
      </Styled.Select>

      <Checkbox>Full Time Only</Checkbox>

      <Styled.SubmitButton type="submit">Search</Styled.SubmitButton>
    </Styled.Form>
  );
}

export default SearchBar;
