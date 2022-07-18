import styled from "@emotion/styled";

import SectionHeader from "@/components/section-header";

type Props = {
  isPreviewExpanded: boolean;
};

const Section = styled.section<{ isPreviewExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  flex-basis: ${(props) => (props.isPreviewExpanded ? "0" : "50%")};
  overflow-x: hidden;
  transition: flex-basis 0.25s ease-out;
`;

const Textarea = styled.textarea`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100%;
  border: unset;
  resize: none;
  padding: 1rem;
  outline: none;
  appearance: none;
  font: 400 14px/2 ${(props) => props.theme.fonts.mono};
`;

function Editor({ isPreviewExpanded }: Props) {
  return (
    <Section isPreviewExpanded={isPreviewExpanded}>
      <SectionHeader title="Markdown" />

      <Textarea
        value="# Welcome to Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?

1. Write markdown in the markdown editor window
2. See the rendered markdown in the preview window

### Features

- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
- Name and save the document to access again later
- Choose between Light or Dark mode depending on your preference

> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).

#### Headings

To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.

##### Lists

You can see examples of ordered and unordered lists above.

###### Code Blocks

This markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:

```
<main>
  <h1>This is a larger code block</h1>
</main>
```"
      />
    </Section>
  );
}

export default Editor;
