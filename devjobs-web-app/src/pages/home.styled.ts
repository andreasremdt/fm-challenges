import styled from "styled-components";

import Button from "../components/button";

export const Container = styled.main`
  margin: 80px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
  width: clamp(16rem, calc(100% - 80px), 1110px);

  @media (max-width: 768px) {
    margin-block: 40px;
    gap: 40px 10px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    width: clamp(16rem, calc(100% - 40px), 1110px);
  }
`;

export const LoadMoreButton = styled(Button)`
  justify-self: center;
  grid-column: 1 / -1;
`;
