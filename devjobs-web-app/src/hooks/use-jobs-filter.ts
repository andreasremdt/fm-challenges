import { useState } from "react";
import type { SearchProps } from "../components/search-bar";
import type { Job } from "../services/jobs";

function useJobFilter(jobs: Job[]) {
  const [searchProps, setSearchProps] = useState<SearchProps>({
    search: "",
    location: "",
    fullTimeOnly: false,
  });

  const filteredJobs = jobs.filter((job) => {
    if (searchProps.fullTimeOnly && job.contract !== "Full Time") {
      return false;
    }

    if (searchProps.location.length > 0 && !job.location.includes(searchProps.location)) {
      return false;
    }

    if (searchProps.search.length > 0) {
      if (job.company.toLocaleLowerCase().includes(searchProps.search.toLocaleLowerCase())) {
        return true;
      }

      if (job.position.toLocaleLowerCase().includes(searchProps.search.toLocaleLowerCase())) {
        return true;
      }

      return false;
    }

    return true;
  });

  return { filteredJobs, setSearchProps };
}

export default useJobFilter;
