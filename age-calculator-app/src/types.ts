export type InputValue = {
  element: HTMLInputElement;
  error: boolean;
  message: string | null;
};

export type Listeners = {
  [key: string]: (data: any) => void;
};

export type FieldRules = {
  [key: string]: (input: HTMLInputElement) => string | null;
};

export type GlobalRules = (formData: FormData) => string | null;

export type Fields = "years" | "days" | "months";
