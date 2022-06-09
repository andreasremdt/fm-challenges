import Header from "../components/header";
import Heading from "../components/heading";

function StyleGuide() {
  return (
    <>
      <Header>
        <Heading>Design System</Heading>
      </Header>

      <main>
        <Heading level="h2">
          <span>1</span> Colors
        </Heading>

        <Heading level="h2">
          <span>2</span> Typography
        </Heading>

        <Heading level="h2">
          <span>3</span> Buttons
        </Heading>

        <Heading level="h2">
          <span>4</span> Form Elements
        </Heading>
      </main>
    </>
  );
}

export default StyleGuide;
