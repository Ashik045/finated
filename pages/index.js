import Head from 'next/head'
import Articles from '../components/Articles/Articles'
import Candidate from '../components/Candidate/Candidate'
import Category from '../components/Category/Category'
import Download from '../components/Download/Download'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HowWork from '../components/HowWork/HowWork'
import Jobs from '../components/Jobs/Jobs'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Reviews from '../components/Reviews/Reviews'
import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.webp'
import img4 from '../images/4.webp'
import img5 from '../images/5.webp'
import img6 from '../images/6.webp'
import img7 from '../images/7.webp'
import img8 from '../images/8.webp'
import img9 from '../images/9.webp'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import image1 from '../images/candidate1.jpg'
import image2 from '../images/candidate2.jpg'
import image3 from '../images/candidate3.jpg'
import image4 from '../images/candidate4.jpg'


const jobsDetail = [
  {
      id: 1,
      company: "Darkeno Ltd.",
      location: 'New York, USA',
      image: img1,
      title: 'Front-end Developer',
      type: 'Remote',
      skills: ["CSS3", "Reactjs", "Javascript", "Reactjs", "Javascript"],
      sallery: '3500'
  },
  {
      id: 2,
      company: "Flux Water Gear",
      location: 'America, USA',
      image: img2,
      title: 'Back-end Developer(PHP)',
      type: 'Full Time',
      skills: ["PHP", "Laravel", "Reactjs", "Javascript", "Typescript"],
      sallery: '5000'
  },
  {
      id: 3,
      company: "Cogent Data",
      location: 'London, America',
      image: img3,
      title: 'NodeJs Developer',
      type: 'Part Time',
      skills: ["CSS3", "Reactjs", "Javascript", "Node Js", "Mongodb"],
      sallery: '3000'
  },
  {
      id: 4,
      company: "Inspire Fitness Co.",
      location: 'New York, US',
      image: img4,
      title: 'Senior NodeJs Developer',
      type: 'Full Time',
      skills: ["Node Js", "Mongodb", "ExpressJs", "Reactjs", "Javascript"],
      sallery: '5500'
  },
  {
      id: 5,
      company: "Obelus Concepts",
      location: 'Malaysia',
      image: img5,
      title: 'Senior UI Designer',
      type: 'Remote',
      skills: ["Photoshop", "Sass", "Reactjs", "Javascript", "Javascript"],
      sallery: '3500'
  },
  {
      id: 6,
      company: "Darkeno Ltd.",
      location: 'New York, USA',
      image: img6,
      title: 'UX Researcher',
      type: 'Full Time',
      skills: ["CSS3", "Sass", "Reactjs", "Javascript",  "Javascript"],
      sallery: '3500'
  },
  {
      id: 7,
      company: "Sanguine Skincare",
      location: 'New York',
      image: img7,
      title: 'Android App Developer',
      type: 'Remote',
      skills: ["CSS3", "Reactjs", "Javascript"],
      sallery: '4500'
  },
  {
      id: 8,
      company: "Inspire Fitness Co.",
      location: 'London, USA',
      image: img8,
      title: 'Senior UI Designer',
      type: 'Remote',
      skills: ["CSS3", "Reactjs", "Javascript", "Bootstrap"],
      sallery: '5000'
  },
  {
      id: 9,
      company: "Cogent Data",
      location: 'Califonia',
      image: img9,
      title: 'Graphic Designer',
      type: 'Remote',
      skills: ["Photoshop", "Reactjs", "Javascript"],
      sallery: '3500'
  },
  
]

const candidateDetail = [
  {
      id: 1,
      image: image1,
      name: 'Aguilera Shakia',
      title: 'UI/UX Designer',
      skills: 'CSS3, HTML5, Javascript, Jquery',
  },
  {
      id: 2,
      image: image2,
      name: 'Assunta Manson',
      title: 'Web Designer',
      skills: 'CSS3, HTML5, Javascript, Bootstrap, Jquery',
  },
  {
      id: 3,
      image: image3,
      name: 'Anders Valentine',
      title: 'App Developer',
      skills: 'CSS3, HTML5, Javascript, React-Native',
  },
  {
      id: 4,
      image: image4,
      name: 'Lauran Benitez',
      title: 'Full-stack Developer',
      skills: ' Javascript, Bootstrap, Jquery, NodeJs',
  },
]

const articleDetail = [
    {
        id: 1,
        image: blog1,
        author: 'Aguilera Snea',
        title: 'Established fact and readeren will distracted the readable content.',
        createdAt: '2 June, 2021',
    },
    {
        id: 2,
        image: blog2,
        author: 'Devid Hyou',
        title: 'It long established fact that reader will distracted the readable.',
        createdAt: '22 Jan, 2020',
    },
]
  
const articleDetai2 = [
    {
        id: 1,
        image: blog1,
        author: 'Henri Doe',
        title: 'With WooLentor is drag-and drop interface for creating.',
        createdAt: '20 June, 2017',
        hr: true,
    },
    {
        id: 2,
        image: blog2,
        author: 'Julia Dev',
        title: 'It long established fact that reader will distracted the readable.',
        createdAt: '04 Jan, 2022',
        hr: false,
    },
]


export default function Home() {
    return (
        <div >
        <Head>
            <title>Finated</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

            <main id='top'>
                <Navbar />
                <Header />
                <Category />
                <Jobs jobsDetail={jobsDetail}/>
                <HowWork />
                <Download />
                <Candidate candidateDetail={candidateDetail} />
                <Reviews />
                <Articles articleDetail={articleDetail} articleDetai2={articleDetai2} />
                <Newsletter />
                <Footer />
            </main>
        </div>
    )
}
