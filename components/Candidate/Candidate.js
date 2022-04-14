import React from 'react'
import CandidateCard from '../CandidateCard/CandidateCard'
import SectionHeader from '../SectionHeader/SectionHeader'
import style from './candidate.module.scss'

const Candidate = ({candidateDetail}) => {
  return (
    <div className={style.candidate}>
        <SectionHeader title="Best Candidate" text="We choose Best Candidate for you. Try to reaching out them."/>

        <div className={style.candidate_main}>
            {candidateDetail.map((details) => {
                return <CandidateCard key={details.id} cdetails={details} />
            })}
        </div>
    </div>
  )
}

export default Candidate