import { useEffect, useState } from "react";
import jobService, { Job } from "../services/jobs";

function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const { success, error, data } = await jobService.getAll();

      if (success) {
        setJobs(data);
      } else {
        setError(error);
      }

      setLoading(false);
    };

    fetch();
  }, []);

  return { loading, jobs, error };
}

export default useJobs;
