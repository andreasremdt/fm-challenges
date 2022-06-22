import { useEffect, useState, useRef } from "react";

import jobService, { Job, SLICE_SIZE } from "@/services/jobs";

function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasMoreJobs, setHasMoreJobs] = useState(true);
  const sliceRef = useRef(0);

  async function fetchJobs(slice?: number) {
    const { success, error, data } = await jobService.getAll(slice);

    if (success) {
      setHasMoreJobs(data.length === SLICE_SIZE);
      setJobs([...jobs, ...data]);
    } else {
      setError(error);
    }
  }

  async function loadMore() {
    fetchJobs((sliceRef.current += 1));
  }

  useEffect(() => {
    setLoading(true);

    fetchJobs().then(() => setLoading(false));
  }, []);

  return { loading, jobs, error, loadMore, hasMoreJobs };
}

export default useJobs;
