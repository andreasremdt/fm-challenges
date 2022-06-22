import { Link } from "react-router-dom";

import Button from "@/components/button";
import Heading from "@/components/heading";

import * as Styled from "./not-found.styled";

function NotFound() {
  return (
    <Styled.Container>
      <Heading level="h1">Page Not Found</Heading>
      <p>The page you are looking for does not exist. Please make sure that the URL is correct and try again.</p>

      <Button as={Link} to="/">
        Back To Home
      </Button>
    </Styled.Container>
  );
}

export default NotFound;
