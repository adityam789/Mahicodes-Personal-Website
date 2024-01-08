import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const Skills = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'Node.js',
    'AWS',
    'Jenkins',
    'GCP',
    'Git',
    'Oracle',
    'MongoDB',
    'SQL',
    'R',
  ];

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Tools & Software</h2>
      <div className="inner">
        <p>
          Over the years, I had the opportunity to work with various software, tools and frameworks.
          Here are some of them:
        </p>
        <StyledSkillsList>
          {skills &&
            skills.map((skill, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                <StyledSkillsListItem key={i}>{skill}</StyledSkillsListItem>
              </CSSTransition>
            ))}
        </StyledSkillsList>
      </div>
    </StyledSkillsSection>
  );
};

const StyledSkillsSection = styled.section`
  max-width: 800px;
`;

const StyledSkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;
`;

const StyledSkillsListItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-xl);
  color: var(--green);
  font-weight: 800;
  line-height: 35px;
`;

export default Skills;
