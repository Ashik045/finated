import Image from 'next/image'
import React from 'react'
import { FaCheck, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import candidateImg from '../../images/client1.jpg'
import style from '../../styles/candidateDetail.module.scss'

const candidateDetail = () => {

  const candidateItem = {
    img: candidateImg,
    name: 'Joland Heri',
    job: 'Front-end Developer (Senior)',
    location: 'America, USA',
    contact: ' +88 456 796 457',
    description: ['Job analysis is a first step toward creating a job description and job specification. The job specification is a statement of employee characteristics and qualifications required for satisfactory performance of defined duties and tasks comprising a specific job or function. A job description is more than just a paragraph describing the responsibilities of the job; it’s also an important document that should contain specific information and statements. For example, a job description should state that the employer does not discriminate against potential employees based on age, race, gender, or other personal qualities. In addition, the job description should describe the level of education, experience, and knowledge required for the position. These types of statements are important for several reasons. First, they make it easier to decide whether a particular candidate is really a good match for the job.', 'Now the HR department takes over. It’s up to them to reach out to find qualified candidates, screen possible applicants, and select individuals who meet your needs. You will then interview a small number of highly qualified individuals and choose the person who best fits your department’s needs.'],
    experience: [
      {
        id: 11,
        title: 'Senior UI Designer',
        year: '2021 - Present',
        company: 'Flux Water Gear',
        desc: 'It takes some skill and knowledge to interview a job applicant effectively. It’s important to do the job right, though, because the costs of hiring someone are substantial, and many hires leave within one year. Some effective interviewing techniques includes the following.'
      },
      {
        id: 12,
        title: 'NodeJs Developer',
        year: '2018 - 2020',
        company: 'Inspire Fitness Co.',
        desc: 'I believe no amount of business school training or work experience can teach what is ultimately a matter of personal character. Businesses are not dishonest or greedy, people are. Thus, a business, successful or not, is merely a reflection of the character of its leadership.'
      },
      {
        id: 13,
        title: 'Front-end Developer',
        year: '2020 - 2021',
        company: 'Darkeno Ltd.',
        desc: 'When I think about what part of my college experience came back in my work experience, I feel like it was learning how to read deeper, learning how to keep filling the movie up with more and more resonance. The harder I work the more I live.'
      },
    ],
    skill: ["Web Interface Design", "Creating reactive website designs", "Hard worker and passionate", "Landing Page Design.", "Good knowledge of UI/UX.", " Problem Solving", "Project Planning", "Adobe Photoshop & XD", "Web application Design", "Mobile Application Design"],
}

  return (
    <div className={style.candidate_detail}>
    <Navbar />
    <PageHeader title="Candidate Detail"/>

    <div className={style.candidate_detail_main}>
            <div className={style.candidate_detail_top}>
                <div className={style.candidate_detail_top_left}>
                    <Image src={candidateItem.img} alt="logo" width={120} height={120} className={style.job_left_img}/>
                    <div className={style.top_left_desc}>
                        <h2>{candidateItem.name}</h2>
                        <p className={style.top_left_desc_color}>{candidateItem.job}</p>
                        <p><FaMapMarkerAlt size={16} /> {candidateItem.location}. <span className={style.top_left_desc_block}><FaPhoneAlt size={16}  style={{marginLeft: '10px'}}/> { candidateItem.contact}</span></p>
                    </div>
                </div>

                <div className={style.candidate_detail_top_right}>
                    <button>Download Resume</button>
                </div>
            </div>

        <div className={style.candidate_detail_bottom}>
            <div className={style.detail_bottom_left}>
                <h2>About Candidate</h2>
                {candidateItem.description.map((des, index) => {
                    return <p key={index} className={style.bottom_left_desc}>{des}</p>
                })}

                <h2>Work & Experience</h2>
                {candidateItem.experience?.map((e) => {
                    return <div key={e.id} className={style.experience_div}>
                                <div className={style.experience_div_title}>
                                   <h4>{e.title} </h4>
                                    <p className={style.experience_div_year}> // {e.year}</p>
                                </div>
                                  <h5>{e.company}</h5>
                                  <p>{e.desc}</p>
                    </div>
                })}

                <h2>Professional Skills</h2>
                {candidateItem.skill.map((ee, indes) => {
                    return <p key={indes}><FaCheck className={style.right_icon}/> {ee}</p>
                })}

            </div>

            <div className={style.detail_bottom_right}>
                <div className={style.bottom_right_summery}>
                    <h2>Summary</h2>
                    <div className={style.right_summery_btm}></div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Position</td>
                                <td>:</td>
                                <td>Web Developer</td>
                            </tr>
                            <tr>
                                <td>Experience</td>
                                <td>:</td>
                                <td>5 Year</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>:</td>
                                <td>26 Year</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>:</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Lnaguage</td>
                                <td>:</td>
                                <td>English, Spanish </td>
                            </tr>
                            <tr>
                                <td>Lavel</td>
                                <td>:</td>
                                <td>Senior</td>
                            </tr>
                            <tr>
                                <td>Completed Work</td>
                                <td>:</td>
                                <td>34+</td>
                            </tr>
                            <tr>
                                <td>Offered Salary</td>
                                <td>:</td>
                                <td>	$5500 / Monthly</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={style.bottom_right_tags}>
                    <h2>Contact</h2>
                    <div className={style.right_tags_btm}></div>
                    <div className={style.right_tags_btns}>
                        <h1>contact form</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Newsletter />
    <Footer />
    </div>
  )
}

export default candidateDetail