import { Link } from "react-router-dom";

import type { Job } from "../services/jobs";
import * as Styled from "./job-preview.styled";

type JobPreviewProps = {
  job: Partial<Job>;
};

function JobPreview({ job }: JobPreviewProps) {
  return (
    <Styled.Card>
      <Styled.Title>
        <Link to={`/jobs/${job.id}`}>{job.position}</Link>
      </Styled.Title>
      <Styled.Logo style={{ background: job.logoBackground }}>
        <img src={job.logo} alt="" />
      </Styled.Logo>
      <Styled.Meta>
        {job.postedAt} <span>•</span> {job.contract}
      </Styled.Meta>
      <Styled.Company>{job.company}</Styled.Company>
      <Styled.Location>{job.location}</Styled.Location>
    </Styled.Card>
  );
}

export default JobPreview;
