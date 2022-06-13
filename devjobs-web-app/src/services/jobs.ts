export type Job = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
};

type ReturnWithData = {
  success: true;
  data: Job[];
  error: null;
};

type ReturnWithError = {
  success: false;
  data: null;
  error: string;
};

const jobs = {
  async getAll(): Promise<ReturnWithData | ReturnWithError> {
    try {
      const response = await fetch("/data.json");

      if (response.ok) {
        const json = await response.json();

        return {
          success: true,
          data: json as Job[],
          error: null,
        };
      } else {
        throw new Error(`Could not fetch data: ${response.status} - ${response.statusText}`);
      }
    } catch (ex: any) {
      return {
        success: false,
        error: ex.message,
        data: null,
      };
    }
  },
};

export default jobs;
