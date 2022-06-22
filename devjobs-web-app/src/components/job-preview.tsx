import { Link } from "react-router-dom";

import type { Job } from "@/services/jobs";

import * as Styled from "./job-preview.styled";

type JobPreviewProps = {
  job: Partial<Job>;
};

function JobPreview({ job }: JobPreviewProps) {
  return (
    <Styled.Card>
      <Styled.Title level="h3">
        <Link to={`/jobs/${job.id}`}>{job.position}</Link>
      </Styled.Title>
      <Styled.CompanyLogo url={job.logo!} bg={job.logoBackground!} />
      <Styled.Meta>
        {job.postedAt} <span>•</span> {job.contract}
      </Styled.Meta>
      <Styled.Company>{job.company}</Styled.Company>
      <Styled.Location>{job.location}</Styled.Location>
    </Styled.Card>
  );
}

export default JobPreview;
