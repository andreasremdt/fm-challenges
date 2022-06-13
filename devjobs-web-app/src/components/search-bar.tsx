import { useState, FormEvent } from "react";

import Checkbox from "./checkbox";
import * as Styled from "./search-bar.styled";

export type SearchProps = {
  search: string;
  location: string;
  fullTimeOnly: boolean;
};

type SearchBarProps = {
  availableLocations: string[];
  onSearch: ({ search, location, fullTimeOnly }: SearchProps) => void;
};

function SearchBar({ availableLocations, onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSearch({ search, location, fullTimeOnly });
  }

  return (
    <Styled.Form noValidate onSubmit={handleSubmit}>
      <Styled.SearchInput
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Filter by title, companies, expertise..."
      />

      <Styled.Select required value={location} onChange={(event) => setLocation(event.target.value)}>
        <option value="">Filter by location...</option>
        {availableLocations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </Styled.Select>

      <Checkbox onChange={() => setFullTimeOnly(!fullTimeOnly)} checked={fullTimeOnly}>
        Full Time Only
      </Checkbox>

      <Styled.SubmitButton type="submit">Search</Styled.SubmitButton>
    </Styled.Form>
  );
}

export default SearchBar;
