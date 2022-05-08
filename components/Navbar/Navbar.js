import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleUp, FaArtstation, FaGripLines, FaTimes } from "react-icons/fa";
import style from './navbar.module.scss';

const Navbar = () => {
  const [toggler, setToggler] = useState(false)
  const [user, setUser]  = useState(false)
  const [toTop, setToTop]  = useState(false)

  if (typeof window !== "undefined") {
    window.onscroll = function() {
        if(document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
            setToTop(true)
        } else {
          setToTop(false)
        }
    }
  }

  const handleToggle = () => {
    setToggler(!toggler)
  }

  return (
    <div className={style.navbar}>
        <Link href="/">
          <div className={style.nav_brand}>
              <FaArtstation /> Finated
          </div>
        </Link>

      <div className={style.nav_menu}>
        <Link  href="/">
          <a href="">Home</a>
        </Link>
        <Link href="/jobs">
          <a href="">Find Jobs</a>
        </Link>
        <Link href="/employerdetail">
          <a href="">Employers Details</a>
        </Link>
        <Link href="/candidate">
          <a href="">Candidate</a>
        </Link>
        <Link href="/article">
          <a href="">Blog</a>
        </Link>
        <Link href="/contact">
          <a href="">Contact</a>
        </Link>
      </div>

      <div className={style.nav_registration}>
        {user ? (
          <button type='button' className={style.nav_reg_btn}>Log Out</button>
        ) : (
          <button type='button' className={style.nav_reg_btn}>Log In</button>
        )}
      </div>

      <div className={style.res_nav}>
          {toggler ? <FaTimes onClick={handleToggle} className={style.tgl_btn} /> : <FaGripLines onClick={handleToggle} className={style.tgl_btn} />}
          {toggler && (
            <div className={style.res_nav_menu}>
              <Link  href="/">
                <a href="" onClick={handleToggle}>Home</a>
              </Link>
              <Link href="/jobs">
                <a href="" onClick={handleToggle}>Find Jobs</a>
              </Link>
              <Link href="/employerdetail">
                <a href="" onClick={handleToggle}>Employers Details</a>
              </Link>
              <Link href="/candidate">
                <a href="" onClick={handleToggle}>Candidate</a>
              </Link>
              <Link href="/blogs">
                <a href="" onClick={handleToggle}>Blog</a>
              </Link>
              <Link href="/contact">
                <a href="" onClick={handleToggle}>Contact</a>
              </Link>

              <div className={style.res_nav_registration}>
                {user ? (
                  <button type='button' className={style.res_nav_reg_btn} onClick={handleToggle}>Log Out</button>
                ) : (
                  <Link href="/login">
                    <button type='button' className={style.res_nav_reg_btn} onClick={handleToggle}>Log In</button>
                  </Link>
                )}
              </div>
            </div>
          )}
      </div>

        {toTop && (
          <a href="#top">
            <div className={style.to_top}>
                <FaAngleUp className={style.to_top_icon} />
            </div>
          </a>
        )}
    </div>
  )
}

export default Navbar