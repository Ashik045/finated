import React from 'react'
import Swal from 'sweetalert2'
import style from './newsletter.module.scss'

const Newsletter = () => {

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
            Toast.fire({
                icon: 'success',
                title: 'Subscribe in successfully'
              })
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={style.newsletter}>
        <div className={style.newsletter_main}>
                <div className={style.left}>
                    <h1>Subscribe for everyday job newsletter.</h1>
                </div>

                <div className={style.right}>
                    <form action="" className={style.right_form} onSubmit={handleSubmit}>
                        <input type="email" placeholder='Enter your email..' />
                        <input type="submit" value="Subscribe"/>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Newsletter