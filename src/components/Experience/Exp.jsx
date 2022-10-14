import React from 'react'
import "./Exp.css";
import {AiOutlineCheck} from "react-icons/ai"
const Exp = () => {
  return (
    <section id="experience">
    <h5>What skills i have</h5>
    <h2>My experience</h2>

    <div className='container container_exp'>
      <div className='exp_front'>
        <h3>Frontend Development</h3>
        <div className='exp_content'>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
         <div>
            <h4>Html</h4>
            <small className='text-light'>Intermediate</small>
         </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>Css</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Basic</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>jQuery</h4>
            <small className='text-light'>Basic</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>Responsive website</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
      </div>
      </div>
      {/* //......................................// */}

      <div className='exp_back'>
        <h3>Backend Development</h3>
        <div className='exp_content'>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>Json</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>Api, RESTful API</h4>
            <small className='text-light'>Basic</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>MongoDB & Mongoose</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>Git,Version Control</h4>
            <small className='text-light'>Baisc</small>
          </div>
        </article>
        <article className='exp_detail'>
          <AiOutlineCheck className='exp_icon'/>
          <div>
            <h4>Node.js, Express</h4>
            <small className='text-light'>Basic</small>
          </div>
        </article>
        </div>
      </div>
    </div>

    </section>
  )
}

export default Exp