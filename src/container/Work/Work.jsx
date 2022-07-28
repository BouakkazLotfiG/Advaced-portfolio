import React, {useState, useEffect} from 'react'
import './Work.scss'
import { AiFillEye , AiFillGithub } from 'react-icons/ai'
import {motion} from 'framer-motion'

import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'
import { images } from '../../constants'

function Work() {

    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    


    return (
        <>
            <h2 className="head-text">
                My Latest
                <span> Work </span>
            </h2>


            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio">


                {/* project 1 */}
                <div className="app__work-item app__flex" >

                    <div className="app__work-img app__flex">
                        <img src={images.home} />

                        <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                            className="app__work-hover app__flex"
                        >
                            <a href='https://www.google.fr/' target="_blank" rel="noreferrer">

                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillEye />
                            </motion.div>
                            </a>
                            <a href='https://github.com/' target="_blank" rel="noreferrer">
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillGithub />
                            </motion.div>
                            </a>
                        </motion.div>
                    </div>

                    <div className="app__work-content app__flex">
                        <h4 className="bold-text">Crypto-App</h4>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            A fully responsive Crypto currency web application with User Authentification, user's favorite coins and a light/dark</p>
                            <br />
                            <span>React, Firebase, Tailwind</span>
                    </div>
                </div>



                {/* Projet 2 */}
                <div className="app__work-item app__flex" >

                    <div className="app__work-img app__flex">
                        <img src={images.about01} />

                        <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                            className="app__work-hover app__flex"
                        >
                            <a href='https://www.google.fr/' target="_blank" rel="noreferrer">

                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillEye />
                            </motion.div>
                            </a>
                            <a href='https://github.com/' target="_blank" rel="noreferrer">
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillGithub />
                            </motion.div>
                            </a>
                        </motion.div>
                    </div>

                    <div className="app__work-content app__flex">
                        <h4 className="bold-text">Crypto</h4>
                        <p className="p-text" style={{ marginTop: 10 }}>crypto zpp xith shit</p>
                    </div>
                </div>



                {/* Projet 3 */}
                <div className="app__work-item app__flex" >

                    <div className="app__work-img app__flex">
                        <img src={images.about01} />

                        <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                            className="app__work-hover app__flex"
                        >
                            <a href='https://www.google.fr/' target="_blank" rel="noreferrer">

                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillEye />
                            </motion.div>
                            </a>
                            <a href='https://github.com/' target="_blank" rel="noreferrer">
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillGithub />
                            </motion.div>
                            </a>
                        </motion.div>
                    </div>

                    <div className="app__work-content app__flex">
                        <h4 className="bold-text">Crypto</h4>
                        <p className="p-text" style={{ marginTop: 10 }}>crypto zpp xith shit</p>
                    </div>
                </div>
                
            </motion.div>
        </>
    )
}

export default AppWrap(Work, 'work')
    