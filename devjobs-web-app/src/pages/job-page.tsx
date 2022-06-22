import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/button";
import Heading from "@/components/heading";
import useJob from "@/hooks/use-job";

import * as Styled from "./job-page.styled";

function JobPage() {
  const navigate = useNavigate();
  const { job, error, loading } = useJob();

  useEffect(() => {
    if (!loading && !job) {
      navigate("/404");
    }
  }, [loading, job]);

  return loading ? (
    <Styled.EmptyState>Loading, please wait...</Styled.EmptyState>
  ) : error || !job ? (
    <Styled.ErrorState>
      Something went wrong getting this job. Sorry for that, please try again later.
    </Styled.ErrorState>
  ) : (
    <>
      <Styled.TopHeader>
        <Styled.Column>
          <Heading level="h2" as="h1">
            {job.company}
          </Heading>
          <Styled.Link href={job.website} target="_blank" rel="noopener nofollow noreferrer">
            {job.website}
          </Styled.Link>
        </Styled.Column>

        <Styled.CompanyLogo bg={job.logoBackground} url={job.logo} size="large" />

        <Button variant="secondary" href={job.website} as="a">
          Company Site
        </Button>
      </Styled.TopHeader>

      <Styled.Container>
        <Styled.SubHeader>
          <Styled.Column>
            <Styled.Meta>
              {job.postedAt} <span>•</span> {job.contract}
            </Styled.Meta>
            <Heading level="h1" as="h2">
              {job.position}
            </Heading>
            <Styled.Location>{job.location}</Styled.Location>
          </Styled.Column>
          <Styled.ApplyButton>Apply Now</Styled.ApplyButton>
        </Styled.SubHeader>

        <p>{job.description}</p>

        <Styled.Title level="h3">Requirements</Styled.Title>

        <p>{job.requirements.content}</p>

        <Styled.BulletList>
          {job.requirements.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Styled.BulletList>

        <Styled.Title level="h3">What You Will Do</Styled.Title>

        <p>{job.role.content}</p>

        <Styled.NumberList>
          {job.role.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Styled.NumberList>
      </Styled.Container>

      <Styled.Footer>
        <Styled.FooterContainer>
          <Styled.Column>
            <Heading level="h3">{job.position}</Heading>
            <Styled.FooterCompany>{job.company}</Styled.FooterCompany>
          </Styled.Column>
          <Styled.ApplyButton>Apply Now</Styled.ApplyButton>
        </Styled.FooterContainer>
      </Styled.Footer>
    </>
  );
}

export default JobPage;
