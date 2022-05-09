import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import PageHeader from '../components/PageHeader/PageHeader'
import style from '../styles/contact.module.scss'


const contactDetail = [
    {
        id: 1,
        icon: <FaEnvelope />,
        title: 'Email',
        txt1: 'exampleEmail.gmail.com',
        txt2: 'ashikurislam045@gmail.com'
    },
    {
        id: 2,
        icon: <FaPhoneAlt />,
        title: 'Phone',
        txt1: '+88 465 748 937',
        txt2: '+8801710502483'
    },
    {
        id: 3,
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        txt1: 'Sunset Beach, East',
        txt2: 'Rangpur, Bangladesh'
    },
    
]

const contact = () => {

  return (
    <div className={style.contact_page}>
        <Navbar />
        <PageHeader title="Contact Us" />

        <div className={style.contact_main}>
            <div className={style.contact_top}>
                {contactDetail.map((detail) => {
                    return  <div className={style.contact_top_item} key={detail.id}>
                                    <span>{detail.icon}</span>
                                    <div className={style.contact_top_item_list}>
                                        <h2>{detail.title}</h2>
                                        <p>{detail.txt1}</p>
                                        <p>{detail.txt2}</p>
                                    </div>
                            </div>
                })}
            </div>

            <div className={style.contact_bottom}>
                <div className={style.contact_bottom_contact}>
                    <h2>Stay in Touch</h2>
                    <div className={style.contact_bottom_btm}></div>

                        <ContactForm />
                </div>

                <div className={style.contact_bottom_map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.03760583998!2d89.2270260555086!3d25.74983426227356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1651992328971!5m2!1sen!2sbd" width="100%" height="750" style={{border: '0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default contact