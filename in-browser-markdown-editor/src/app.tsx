import { StrictMode } from "react";

import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Editor from "@/components/editor";
import Preview from "@/components/preview";

function App() {
  return (
    <StrictMode>
      <Header />
      <Navigation />

      <main>
        <Editor />
        <Preview />
      </main>
    </StrictMode>
  );
}

export default App;
