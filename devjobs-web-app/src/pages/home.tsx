import { useState } from "react";

import * as Styled from "./home.styled";
import JobPreview from "../components/job-preview";
import SearchBar, { SearchProps } from "../components/search-bar";
import useJobs from "../hooks/use-jobs";

function Home() {
  const [searchProps, setSearchProps] = useState<SearchProps>({
    search: "",
    location: "",
    fullTimeOnly: false,
  });
  const { loading, jobs, error, loadMore } = useJobs();

  const locations = Array.from(new Set(jobs.map((job) => job.location)));

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

  return (
    <>
      <SearchBar availableLocations={locations} onSearch={setSearchProps} />

      <Styled.Container>
        {filteredJobs.map((job) => (
          <JobPreview key={job.id} job={job} />
        ))}

        <Styled.LoadMoreButton onClick={loadMore}>Load More</Styled.LoadMoreButton>
      </Styled.Container>
    </>
  );
}

export default Home;
