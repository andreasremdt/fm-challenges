import styled from "styled-components";

import Button from "../components/button";

export const Container = styled.main`
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
  width: clamp(16rem, 98vw, 1110px);
`;

export const LoadMoreButton = styled(Button)`
  justify-self: center;
  grid-column: 1 / -1;
`;
