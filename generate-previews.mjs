import fs from "fs/promises";

const errors = [];

async function getChallenges() {
  try {
    const challenges = (await fs.readdir(".", { withFileTypes: true }))
      .filter((entry) => entry.isDirectory())
      .filter((folder) => !folder.name.startsWith(".") && folder.name !== "node_modules")
      .map((folder) => folder.name);

    return challenges;
  } catch (ex) {
    errors.push();
  }

  return [];
}

async function getChallengeDetails(slug) {
  try {
    const href = `./${slug}`;
    const screenshot = `${href}/screenshot.png`;
    const name = (await fs.readFile(`${slug}/README.md`, "utf-8"))
      .split(/\n/)
      .at(0)
      .slice(20)
      .replace(/solution/, "")
      .trim();

    return { name, screenshot, href };
  } catch (ex) {
    console.log(`Could not get challenge details for ${slug}`, ex.message);
  }

  return false;
}

function generateHTML(challenge) {
  return `
    <a href="${challenge.href}">
      <img src="${challenge.screenshot}" alt="${challenge.name}" />
      <h2>${challenge.name}</h2>
    </a>`;
}

async function writeOutput(challenges) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>Hello World</h1>
        ${challenges}
      </body>
    </html>
  `;

  try {
    await fs.writeFile("./index.html", html);
  } catch (ex) {
    console.log(`Could write HTML file`, ex.message);
  }
}

async function run() {
  const challenges = await getChallenges();

  const html = (
    await Promise.all(
      challenges.map(async (challenge) => {
        const details = await getChallengeDetails(challenge);

        if (details) {
          return generateHTML(details);
        }

        return null;
      })
    )
  )
    .filter(Boolean)
    .join("");

  await writeOutput(html);
}

run();
