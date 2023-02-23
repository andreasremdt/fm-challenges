export type Definition = {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
};

export type Meaning = {
  partOfSpeech: "exclamation" | "noun" | "verb";
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type Phonetic = {
  text: string;
  audio?: string;
};

export type License = {
  name: string;
  url: string;
};

export type Word = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin?: string;
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};

export type Error = {
  title: string;
  message: string;
  resolution: string;
};

export type Response = {
  success: boolean;
  data?: Word[];
  error?: Error;
};
