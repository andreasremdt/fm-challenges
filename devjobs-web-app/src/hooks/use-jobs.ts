import { useEffect, useState } from "react";
import jobService, { Job } from "../services/jobs";

function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [slice, setSlice] = useState(0);

  const loadMore = () => setSlice(slice + 1);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const { success, error, data } = await jobService.getAll(slice);

      if (success) {
        setJobs([...jobs, ...data]);
      } else {
        setError(error);
      }

      setLoading(false);
    };

    fetch();
  }, [slice]);

  return { loading, jobs, error, loadMore };
}

export default useJobs;
