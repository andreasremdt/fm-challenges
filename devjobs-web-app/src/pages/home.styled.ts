import styled from "styled-components";

export const Container = styled.main`
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
  width: clamp(16rem, 98vw, 1110px);
`;
