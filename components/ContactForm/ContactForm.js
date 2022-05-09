import emailjs from '@emailjs/browser'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Input from '../Input/Input'
import style from './contactform.module.scss'

const ContactForm = () => {

    const [inpval, setInpval] = useState({
        name: '',
        email: '',
        subject: '',
    })
    const [textarea, setTextarea] = useState('')
    const [err, setErr] = useState(false)
    const router = useRouter()

    const inpDetails = [
        {
            id: 1,
            name: "name",
            type: 'text',
            placeholder: 'Name:',
            required: true,
            errMsg: 'This field is required!',
        },
        {
            id: 2,
            name: "email",
            type: 'email',
            placeholder: 'Email:',
            required: true,
            errMsg: 'Please provide a valid email address!',
        },
        {
            id: 3,
            name: "subject",
            type: 'text',
            placeholder: 'Subject:',
            required: true,
            errMsg: 'This field is required!',
        },
    ]

    const handleChng= (e) => {
        setInpval({...inpval, [e.target.name]: e.target.value})
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        width: "250px",
        padding: '.75rem',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            emailjs.sendForm('service_p9nenhd', 'template_dtz4j7s', e.target, 'mqlVmI9Fm3eB-SSCf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


            setInpval({
                name: '',
                email: '',
                subject: ''
            })
            setTextarea: ''

            Toast.fire({
                icon: 'success',
                title: 'Message send successfully'
              })
              router.push('/contact')
        } catch (error) {
            console.log(error);
            setErr(true)
        }
    }

  return (
    <div className={style.contact_form}>
        <form className={style.bottom_contact_form} onSubmit={handleSubmit}>
            {inpDetails.map((inpdetail) => {
                                return <Input key={inpdetail.id} {...inpdetail} value={inpval[inpdetail.name]} onChange={handleChng}/>
                            })}

                            <textarea className={style.contact_form_textarea} name="" id="" cols="30" rows="10" placeholder='Message...' value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>

                            {err && <p>Authentication failed!</p>}
                            <button type="submit" className={style.submit_btn}>Send Message</button>
            </form>
    </div>
  )
}

export default ContactForm