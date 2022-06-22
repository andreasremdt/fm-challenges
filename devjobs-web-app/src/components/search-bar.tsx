import { useState, FormEvent, MouseEvent, useRef, useEffect } from "react";

import Checkbox from "@/components/checkbox";

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
  const [filterDialogVisible, setFilterDialogVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  function handleDialogClose(event: MouseEvent<HTMLDivElement>) {
    if (filterDialogVisible && event.target === dialogRef.current) {
      setFilterDialogVisible(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (filterDialogVisible) {
      setFilterDialogVisible(false);
    }

    onSearch({ search, location, fullTimeOnly });
  }

  useEffect(() => {
    if (filterDialogVisible) {
      const focusable = dialogRef.current!.querySelectorAll("input, select, button");
      let focused = 0;

      function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Tab") {
          event.preventDefault();

          if (event.shiftKey) {
            if (focused === 0) {
              focused = focusable.length - 1;
            } else {
              focused -= 1;
            }
          } else if (focused === focusable.length - 1) {
            focused = 0;
          } else {
            focused += 1;
          }

          (focusable[focused] as HTMLElement).focus();
        } else if (event.key === "Escape") {
          setFilterDialogVisible(false);
        }
      }

      window.addEventListener("keydown", handleKeyDown);

      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [filterDialogVisible]);

  return (
    <Styled.Form noValidate onSubmit={handleSubmit}>
      <Styled.SearchInput
        aria-label="Filter by title, companies, expertise"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Filter by title, companies, expertise..."
      />

      <Styled.Overlay open={filterDialogVisible} onClick={handleDialogClose} ref={dialogRef}>
        <Styled.InnerOverlay>
          <Styled.Select
            required
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            aria-label="Filter by location"
          >
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
        </Styled.InnerOverlay>
      </Styled.Overlay>

      <Styled.MobileButton
        type="button"
        aria-label="More filters"
        variant="transparent"
        onClick={() => setFilterDialogVisible(true)}
      >
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      </Styled.MobileButton>

      <Styled.MobileButton type="submit" aria-label="Search">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      </Styled.MobileButton>
    </Styled.Form>
  );
}

export default SearchBar;
