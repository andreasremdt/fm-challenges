export type InputValue = {
  element: HTMLInputElement;
  error: boolean;
  message: string | null;
};

export type Listeners = {
  [key: string]: (formData: FormData) => string | void;
};

export type Rules = {
  [key: string]: (input: HTMLInputElement) => string | null;
};

export type Fields = "years" | "days" | "months";
