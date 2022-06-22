import getBasePath from "@/utils/path";

import * as Styled from "./logo.styled";

type LogoProps = {
  url: string;
  bg: string;
  size?: "small" | "large";
};

function Logo({ url, size = "small", ...props }: LogoProps) {
  return (
    <Styled.Wrapper size={size} {...props}>
      <img src={getBasePath(url)} alt="" />
    </Styled.Wrapper>
  );
}

export default Logo;
