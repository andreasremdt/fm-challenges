import styled from "styled-components";

export const Card = styled.article`
  background-color: ${(props) => props.theme.colors.element};
  border-radius: 6px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-top: 25px;
`;

export const Logo = styled.figure`
  order: 1;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 15px;
  display: grid;
  place-items: center;
  position: absolute;
  top: -25px;
  left: 32px;
  margin: unset;
`;

export const Meta = styled.p`
  color: ${(props) => props.theme.colors.darkGrey};
  order: 2;
  margin-block: 10px;

  > span {
    font-size: 30px;
    line-height: 0;
    vertical-align: middle;
    display: inline-block;
    margin-inline: 5px;
  }
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.h3};
  line-height: ${(props) => props.theme.lineHeights.h3};
  margin: unset;
  order: 3;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.headings.text};

    &:hover {
      color: ${(props) => props.theme.colors.headings.hover.text};
    }
  }
`;

export const Company = styled.p`
  color: ${(props) => props.theme.colors.darkGrey};
  order: 4;
  margin-block: 10px;
`;

export const Location = styled.p`
  background-color: transparent;
  border: unset;
  order: 5;
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.violet};
  margin-block: 30px 0;
`;
