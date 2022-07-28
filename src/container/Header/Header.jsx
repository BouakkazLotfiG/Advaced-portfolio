import React from 'react'
import './Header.scss'

import { AppWrap } from '../../wrapper'
import { motion } from 'framer-motion'
import { images } from '../../constants'



function Header() {

    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    }




    return (
        <div  className='app__header app__flex'>


            {/* text shit  */}
           <motion.div
            whileInView={{ x: [-100, 0] , opacity: [0, 1]}}
            transition={{ duration: 2}}
            className='app__header-info'
           >

               <div className='app__header-badge'>
                   <div className='badge-cmp app__flex'>
                       {/* <span>👋</span> */}
                       <div style={{ marginLeft: 20}}>
                            <p className='p-text'>Hello, I'm </p>
                            <h1 className='head-text'>Lotfi</h1>
                       </div>
                   </div>

                    <div  className='tag-cmp '>
                        <h2 className="head-text">Frontend<h1 className='head-text'> Developer </h1>
                                
                                
                                <br />
                        </h2>
                    </div>

                   



                    <div  className='tag-cmp app__flex'>
                        <h2 className="head-text">
                            <a href='https://drive.google.com/file/d/1aJXhksv8ZTjbn-s6W3M20gC7oT8qjxFo/view?usp=sharing' >Resumé </a>
                                 
                                
                                
                                <br />
                        </h2>
                    </div>
               </div>
           </motion.div>

 

            {/* image shit */}
           <motion.div 
            whileInView={{ opacity: [0, 1]}}
            transition={{ duration: 2, delayChildren: 1}}
            className='app__header-img'>
                <img src={images.profile} alt="profile_bg" />

                {/* circle imaeg  */}
                {/* <motion.img
                    whileInView={{ scale: [0, 1]}}
                    transition={{ duration: 1, ease: 'easeInOut'}}
                    src={images.circle}
                    className="overlay_circle"
                /> */}
           </motion.div> 


            {/* <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >

                {[images.react, images.javascript, images.git].map((circle, index) => (
                      <div className='circle-cmp app__flex' key={`circle-${index}`}>
                          <img src={circle} alt="circle" />
                      </div>
                  ))}
               
            </motion.div> */}
    
        </div>
    )
}

export default AppWrap(Header, 'home')
