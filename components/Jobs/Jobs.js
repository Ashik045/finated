import React from 'react';
import JobsCard from '../JobsCard/JobsCard';
import SectionHeader from '../SectionHeader/SectionHeader';
import style from './jobs.module.scss';



const Jobs = ({jobsDetail}) => {
  return (
    <div className={style.jobs}>
        <SectionHeader title="Recent Job Circulars" text="We help you to choose the right job for you"/>

        <div className={style.jobs_main}>
            {jobsDetail.map((details) => {
                return <JobsCard key={details.id} jobDetail={details} />
            })}
        </div>
    </div>
  )
}

export default Jobs