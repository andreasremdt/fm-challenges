import * as Styled from "./home.styled";
import JobPreview from "../components/job-preview";
import SearchBar from "../components/search-bar";
import useJobs from "../hooks/use-jobs";
import useJobFilter from "../hooks/use-jobs-filter";

function Home() {
  const { loading, jobs, error, loadMore } = useJobs();
  const locations = Array.from(new Set(jobs.map((job) => job.location)));
  const { filteredJobs, setSearchProps } = useJobFilter(jobs);

  return (
    <>
      <SearchBar availableLocations={locations} onSearch={setSearchProps} />

      <Styled.Container>
        {loading ? (
          <Styled.EmptyState>Loading, please wait...</Styled.EmptyState>
        ) : error ? (
          <Styled.ErrorState>
            Something went wrong getting the jobs. Sorry for that, please try again later.
          </Styled.ErrorState>
        ) : filteredJobs.length === 0 ? (
          <Styled.EmptyState>
            No jobs found that match your search. Please change your search parameters and try again.
          </Styled.EmptyState>
        ) : (
          <>
            {filteredJobs.map((job) => (
              <JobPreview key={job.id} job={job} />
            ))}

            <Styled.LoadMoreButton onClick={loadMore}>Load More</Styled.LoadMoreButton>
          </>
        )}
      </Styled.Container>
    </>
  );
}

export default Home;
