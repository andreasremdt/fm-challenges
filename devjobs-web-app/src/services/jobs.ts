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

type ReturnWithData<K> = {
  success: true;
  data: K;
  error: null;
};

type ReturnWithError = {
  success: false;
  data: null;
  error: string;
};

export const SLICE_SIZE = 12;

const jobs = {
  async getAll(slice = 0): Promise<ReturnWithData<Job[]> | ReturnWithError> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/data.json");

      if (response.ok) {
        const json = (await response.json()) as Job[];

        return {
          success: true,
          data: json.slice(slice * SLICE_SIZE, slice * SLICE_SIZE + SLICE_SIZE),
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

  async get(jobId: number): Promise<ReturnWithData<Job> | ReturnWithError> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/data.json");

      if (response.ok) {
        const json = (await response.json()) as Job[];
        const job = json.find((job) => job.id === jobId);

        if (job) {
          return {
            success: true,
            data: job,
            error: null,
          };
        }

        throw new Error(`Could not get job with ID ${jobId}: 404 - Not Found`);
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
