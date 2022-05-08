import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import blog1 from '../../images/blogdetail1.jpg'
import blog2 from '../../images/header2.jpg'
import style from '../../styles/articleDetail.module.scss'

const articleDetail = () => {

    const article = {
        image: blog1,
        author: 'Aguilera Snea',
        createdAt: '02 Jun, 2020',
        title: 'Established fact and readeren will distracted the readable content  and also profitable to create pricing and cost-based blog posts.',
        title2 : 'The headlines that show up in search engine results or when content is shared via social media directly impact whether people will view, read or share content.',
        desc: ["Well, do you love travel? Starting with a question draws readers in, making the description personal. It goes on to explain exactly how Lonely Planet helps travelers, all within the 160 character count. And this blog article is a continuation of how great they are at creating super valuable, actually educational content about cost for a service that is, quite frankly, kind of challenging to explain and understand without feeling like someone is trying to be wishy-washy. And this blog article is a continuation of how great they are at creating super valuable, actually educational content about cost for a service that is, quite frankly, kind of challenging to explain and understand without feeling like someone is trying to be wishy-washy. Again, similar to writing blog post articles about problems, comparisons blog post articles help buyers feel as if they're making a more informed decision, so they can avoided that dreaded feeling of buyer's remorse later. ", "Whether you are just now planning to start a blog for your business or you're a digital marketer who has been blogging for some time on behalf of companies, my goal in this article is simple. I've hand-selected the articles below, as each of them are a case study in how to write great blog posts that not only engage readers, but also help move the needle on some aggressive digital sales and marketing goals. It used to be that you could gloss over conversations about pricing and cost in marketing materials the way one might sidestep politics and religion at the Thanksgiving dinner table."],
        title3: 'Our company fails the real world test in all kinds of ways.',
        desc2: ["For example, I recently replaced the entire fence at my house. It was only later that I realized I mentally disqualified any vendor who didn't have some form of pricing information on their website. Either as a blog post article or on a more clear-cut product pricing page. For example, I recently replaced the entire fence at my house. It was only later that I realized I mentally disqualified any vendor who didn't have some form of pricing information on their website. Either as a blog post article or on a more clear-cut product pricing page.", "But don't take my word for it. Here are a few fantastic examples that show it's not only possible, but also profitable to create pricing and cost-based blog posts. You know what your buyers want to avoid more than anything else in this entire world? Buyer's remorse. They don't want to make a big investment in any or products or services, only to have that decision blow up in their face, because they didn't do enough research. You know what your buyers want to avoid more than anything else in this entire world? Buyer's remorse. They don't want to make a big investment in any or products or services, only to have that decision blow up in their face, because they didn't do enough research. SAMCO is a B2B company that offers water solutions and technologies to a wide variety of industries including oil and gas, power companies, refineries, and so on. One of their solutions is raw water treatment, so it only made sense that they wrote this article. This is especially true since every product or solution on the market in every single industry today is not the right choice for everyone. Every personal individual, family, or business has a unique set of needs and circumstances, which will dictate what the right choice is. "],
        image2: blog2,
        title4: 'Just think about the last time you made a big purchase — and how frustrating it was when you could not find pricing information. ',
        desc3: ["There is no simple answer to this question, but they do a beautiful job of showcasing how to talk about the pricing of a product with tons of variables. Basically, it's the one-stop-shop for any consumer who is considering a fiberglass pool and needs to develop a deep understanding of the financial variables that will influence the ultimate price tag for their potential pool project. Another great area of problems to explore in your blogging strategy is the types of problems someone might experience in their role, if that role is someone you typically target as a decision-maker — or, at least an influencer in the decision-making process.", "What I love about this article is that it deals with that textbook answer of It depends, and then showcases how you can answer that question in a detailed way that still leaves an audience feeling more knowledgable than ever before. They even included a video! If you sell a specific product or set of products, you need to get completely honest about what problems someone might experience. I know, I know. You don't want to talk about what might go wrong, but the reality is that no single product is perfect. Moreover, not every single potential buyer is the best fit for what you're selling."],
        createdAt: '2 June, 2021',
    }

  return (
    <div className={style.articledetail_page}>
        <Navbar />
        <PageHeader title="Article Detail"/>

        <div className={style.articledetail_page_main}>
            <div className={style.articledetail_page_main_top}>
                <p>By <span className={style.page_main_author}>{article.author}</span> <span  className={style.dot}>.</span> {article.createdAt} <span className={style.dot}>.</span> 10 min read</p>
                <h1>{article.title}</h1>
            </div>

            <div className={style.btnss}>
                <Link href="/article" >
                    <button>Buisness</button>
                </Link>
                <Link href="/article" >
                    <button>Agency</button>
                </Link>
                <Link href="/article" >
                    <button>Development</button>
                </Link>
                <Link href="/article" >
                    <button>Circular</button>
                </Link>
            </div>

            <Image src={article.image} alt='articleImg'  height={550} width={1600} className={style.page_main_img1}/>

            <h1>{article.title2}</h1>
            {article.desc?.map((de, index) => {
                return <p key={index}>{de}</p>
            })}

            <h1>{article.title3}</h1>
            {article.desc2?.map((des, index) => {
                return <p key={index}>{des}</p>
            })}

            <Image src={article.image2} alt='articleImg'  height={550} width={1600} className={style.page_main_img1}/>

            <h1>{article.title4}</h1>
            {article.desc3?.map((des, index) => {
                return <p key={index}>{des}</p>
            })}

        </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default articleDetail