import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import jobService, { Job } from "@/services/jobs";

function useJob() {
  const { jobId } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const { success, error, data } = await jobService.get(Number(jobId));

      if (success) {
        setJob(data);
      } else {
        setError(error);
      }

      setLoading(false);
    };

    fetch();
  }, []);

  return { loading, job, error };
}

export default useJob;
