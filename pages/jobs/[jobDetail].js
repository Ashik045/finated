import Image from 'next/image'
import React from 'react'
import { FaCheck, FaMapMarkerAlt } from 'react-icons/fa'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import jobLogo from '../../images/10.webp'
import style from '../../styles/jobdetail.module.scss'


const jobDetail = () => {
    const jobItem = {
        img: jobLogo,
        title: 'Back-end Developer(PHP)',
        company: 'Flux Water Gear',
        location: 'America, USA',
        contact: ' +88 456 796 457',
        sallary: '$5000',
        description: ['As Senior Community Manager, you will play a key role in developing the Google Cloud Community Support strategy, roadmap, and success metrics for the different community initiatives in alignment with Google Cloud Support goals. This role includes managing the different community initiatives, which use public channels to deliver scalable technical support to administrators and developers who use Google Cloud products. You will partner with community managers and cross-functional teams on community engagement strategies. You will also use data from these activities to influence the direction of products, documentation, and user experience.', 'You will plan requirements with internal customers and guide projects through the entire project lifecycle, including managing project schedules, identifying risks, and clearly communicating goals to project stakeholders. Your projects will often span offices, time zones and you will be responsible for aligning all teams on the project is progress and deadlines.'],
        qualifications: ["Experience in vendor management.", "Experience driving B2B Community support.", "Understanding of customer support principles.", "Creating reactive website designs"],
        responsibilities: ["Working under strict deadlines", "Creating reactive website designs", "Hard worker and passionate – we are growing super fast", "Moderate knowledge in WordPress Core APIs like options, metadata, REST, hooks, settings, etc.", "Experience with the latest community technologies and channels."],
        workHour: ["9:00 AM - 7:00 PM", "Weekly: 5 days."],
        statement: "Finated is committed to creating the happiest company working for and is proud to provide equal opportunity to all. All the qualified applicants will receive consideration for employment without regard to race, color, ancestry, religion, sex, sexual orientation, age, citizenship, marital status, disability, gender identity, or any other basis protected by federal, state, or local law."
    }
    
  return (
    <div className={style.job_detail}>
        <Navbar />
        <PageHeader title="Job Details" />

        <div className={style.job_detail_main}>
            <div className={style.job_detail_top}>
                <div className={style.job_detail_top_left}>
                    <Image src={jobLogo} alt="logo" width={150} height={150} className={style.job_left_img}/>
                    <div className={style.top_left_desc}>
                        <h2>{jobItem.title}</h2>
                        <p className={style.top_left_desc_color}>{jobItem.company}</p>
                        <p><FaMapMarkerAlt /> {jobItem.location}</p>
                    </div>
                </div>

                <div className={style.job_detail_top_right}>
                    <p><span className={style.job_detail_amount}>{jobItem.sallary}</span>/monthly</p>
                    <button>Apply Now</button>
                </div>
            </div>

        <div className={style.job_detail_bottom}>
            <div className={style.detail_bottom_left}>
                <h2>About the job</h2>
                {jobItem.description.map((des, index) => {
                    return <p key={index}>{des}</p>
                })}

                <h2>Qualifications</h2>
                {jobItem.qualifications.map((e, indes) => {
                    return <p key={indes}><FaCheck /> {e}</p>
                })}

                <h2>Responsibilities</h2>
                {jobItem.responsibilities.map((ee, indes) => {
                    return <p key={indes}><FaCheck /> {ee}</p>
                })}

                <h2>Work Hour</h2>
                {jobItem.workHour.map((w, indes) => {
                    return <p key={indes}><FaCheck /> {w}</p>
                })}

                <h2>Statement</h2>
                <p>{jobItem.statement}</p>
            </div>

            <div className={style.detail_bottom_right}>
                <h1>Summary</h1>
            </div>
        </div>
    </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default jobDetail