import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import FormHeader from '../../components/FormHeader/FormHeader'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import style from '../../styles/register.module.scss'

const register = () => {
  return (
    <div className={style.register_page}>
        <Navbar />
        <PageHeader title="Register Page"  />

        <div className={style.register_page_main}>
           <FormHeader header="Register Hare" />
            
            <ContactForm />
        </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default register