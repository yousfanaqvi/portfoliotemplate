import React from 'react'
import "./Portfolio.css"
import img1 from "../../assets/portfolio1.jpg"
import img2 from "../../assets/portfolio2.jpg"
import img3 from "../../assets/portfolio3.jpg"
import img4 from "../../assets/portfolio4.jpg"
import img5 from "../../assets/portfolio5.png"
import img6 from "../../assets/portfolio6.jpg"



const Portfolio = () => {

const data=[
  {
    id:1,
    img:img1,
    title:"project 1",
    github:"#portfolio",
    demo:"#portfolio"
  },
  {
    id:2,
    img:img2,
    title:"project 2",
    github:"#portfolio",
    demo:"#portfolio"
  },
  {
    id:3,
    img:img3,
    title:"project 3",
    github:"#portfolio",
    demo:"#portfolio"
  },
  {
    id:4,
    img:img4,
    title:"project 4",
    github:"#portfolio",
    demo:"#portfolio"
  },
  {
    id:5,
    img:img5,
    title:"project 5",
    github:"#portfolio",
    demo:"#portfolio"
  },
]


  return (
    <section id="portfolio">
      <h5> My Recent work</h5>
      <h2>Portrfolio</h2>

      <div className='container container_portfolio'>
        {
          data.map(({id,img,title,github,demo})=>{
            return( 
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item_img">
                  <img src={img} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live demo</a>
                </div>            
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio