import React from 'react';
import SectionHeader from '../commons/SectionHeader';
import { experiences } from './experienceList';
import ExperienceDetail from './ExperienceDetail';

const ExperienceComponent = () => {
  return (
    <section id="experiences" className="text-white mt-5" aria-label="About">
      <SectionHeader title="Experience" />
      {experiences.map((experience) => (
        <ExperienceDetail key={experience.id} {...experience} />
      ))}
    </section>
  );
};

export default ExperienceComponent;
