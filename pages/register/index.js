import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Footer from '../../components/Footer/Footer'
import FormHeader from '../../components/FormHeader/FormHeader'
import Input from '../../components/Input/Input'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import style from '../../styles/register.module.scss'

const register = () => {
  const [inpval, setInpval] = useState({
    username: '',
    email: '',
    password: '',
    confirmpass: ''
})
const [err, setErr] = useState(false)
const router = useRouter()

const inpDetail = [
    {
        id: 1,
        name: "username",
        type: 'text',
        placeholder: 'UserName:',
        required: true,
        errMsg: 'Username should be 5-15 characters and should not include any special character!',
        pattern: '^[A-Za-z0-9]{5,15}$',
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
        name: "password",
        type: 'password',
        placeholder: 'Password:',
        required: true,
        errMsg: 'Password should be 5-15 characters and include at last 1 letter, 1 number and 1 special character!',
        pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$',
    },
    {
      id: 4,
      name: "confirmpass",
      type: 'password',
      placeholder: 'Re-type Password:',
      required: true,
      errMsg: 'Password does not matched!',
      pattern: inpval.password,
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
      console.log('Register Successfull.');

      
        setInpval({
          password: '',
          confirmpass: ''
        })

        Toast.fire({
            icon: 'success',
            title: 'Register Succesfully.'
          })
          router.push('/login')
    } catch (error) {
        console.log(error);
        setErr(true)
    }
}

  return (
    <div className={style.register_page}>
        <Navbar />
        <PageHeader title="Register Page"  />

        <div className={style.register_page_main}>
           <FormHeader header="Register Hare" />
            <form action="" onSubmit={handleSubmit}>
              {inpDetail.map((inpdetail) => {
                return <Input {...inpdetail} key={inpdetail.id} value={inpval[inpdetail.name]} onChange={handleChng}/>
              })}

                {err && <p style={{color: 'red', marginBottom: '0px'}}>Authentication failed!</p>}
                  <input type="submit" value="Register Now" className={style.submit_btn} />
                  <Link href="/login">
                      <a href="" className={style.login_link}>
                          Already have an account? Log in hare..
                      </a>
                  </Link>
                </form>
        </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default register