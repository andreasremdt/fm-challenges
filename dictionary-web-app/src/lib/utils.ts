import type { Word, Response } from "../types";

export const getPhoneticAudio = (word: Word) => {
  return word.phonetics.find((phonetic) => {
    if (phonetic.audio) {
      return phonetic;
    }
  })?.audio;
};

export const createId = (prefix = "") => {
  return `${prefix}-${Math.random().toString(16).slice(2)}`;
};

export const fetchDefinition = async (word: string): Promise<Response | undefined> => {
  if (word.length) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const json = await response.json();

    if (response.ok) {
      return { success: true, data: json };
    }

    return { success: false, error: json };
  }
};
