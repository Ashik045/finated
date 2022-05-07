import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import style from './pagination.module.scss'

const Pagination = () => {
  return (
    <div className={style.pagination}>
        <div className={style.pagination_main}>
            <a href="#top" className={style.active}>1</a>
            <a href="#top">2</a>
            <a href="#top">3</a>
            <a href="#top">4</a>
            <a href="#top"><FaArrowRight /> </a>
        </div>
    </div>
  )
}

export default Pagination