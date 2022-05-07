import { useRouter } from 'next/router'
import React from 'react'
import style from './pageHeader.module.scss'

const PageHeader = ({title}) => {
    const {pathname} = useRouter()
    const path = pathname.split('/')[1]
    // console.log(path);
  return (
    <div className={style.page_header}>
    <div className={style.page_header_img}></div>

    <div className={style.page_header_txt}>
        <h1>{title}</h1>
        <h4>Home // {path}</h4>
    </div>
    </div>
  )
}

export default PageHeader