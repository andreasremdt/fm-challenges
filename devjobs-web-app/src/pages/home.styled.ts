import styled from "styled-components";

import Button from "../components/button";

export const Container = styled.main`
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem 1.875rem;
  width: clamp(16rem, calc(100% - 5rem), 69.375rem);

  @media (max-width: 48rem) {
    margin-block: 2.5rem;
    gap: 2.5rem 0.625rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 37.5rem) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.25rem;
    width: clamp(16rem, calc(100% - 2.5rem), 69.375rem);
  }
`;

export const EmptyState = styled.p`
  justify-self: center;
  grid-column: 1 / -1;
`;

export const ErrorState = styled.p`
  grid-column: 1 / -1;
  background-color: ${(props) => props.theme.colors.violet};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.375rem;
  padding: 1.25rem;
  text-align: center;
`;

export const LoadMoreButton = styled(Button)`
  justify-self: center;
  grid-column: 1 / -1;
`;
