const rules = {
  day: (input: HTMLInputElement) => {
    const { validity, valueAsNumber } = input;

    if (validity.valueMissing) {
      return "This field is required";
    }

    if (valueAsNumber < 1 || valueAsNumber > 31 || validity.badInput) {
      return "Must be a valid day";
    }
  },
  month: (input: HTMLInputElement) => {
    const { validity, valueAsNumber } = input;

    if (validity.valueMissing) {
      return "This field is required";
    }

    if (valueAsNumber < 1 || valueAsNumber > 12 || validity.badInput) {
      return "Must be a valid month";
    }
  },
  year: (input: HTMLInputElement) => {
    const { validity, valueAsNumber } = input;

    if (validity.valueMissing) {
      return "This field is required";
    }

    if (valueAsNumber >= new Date().getFullYear()) {
      return "Must be in the past";
    }

    if (valueAsNumber < 1 || validity.badInput) {
      return "Must be a valid year";
    }
  },
};

export default rules;
