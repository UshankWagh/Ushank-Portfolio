import React from 'react'
import "../styles/Home.css"
import reactLogo from "../images/react.png"
import express from "../images/express.jpg"
import mongo from "../images/mongo.jpg"
import node from "../images/node.jpg"
import html from "../images/html.jpg"
import css from "../images/css.jpg"
import js from "../images/js.jpg"
import c from "../images/c.jpg"
import python from "../images/python.jpg"
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import call from "../images/call.png";
import drone_website from "../images/drone_website.png";
import future_tech from "../images/future_tech_clone.png";
import promodor from "../images/promodor.png";
import todoapp from "../images/todoapp.png";
import quik_buy from "../images/quik_buy.jpg";
import order_desk from "../images/order-desk.png";
import iit_bombay from "../images/iit_bombay.jpg";
import listening from "../images/listening.jpg";
import sololearn from "../images/sololearn.jpg";
import udemy from "../images/udemy.jpg";
import profile from "../images/profile.png";
import resume from "../images/resume.png";

const Home = () => {


    return (
        <main className="home" >
            <header className="page" id='home'>
                <div className="resume" id='resume' onClick={() => { document.getElementById("resume").style.left = "200%" }} >
                    <img src={resume} alt="" />
                    <button><a href={resume} download="Ushank_Wagh_Resume">Download</a></button>
                    <button className="x" >X</button>
                </div>
                <div className="profile">
                    <div className="image-nav">
                        <img src={profile} alt="" />
                    </div>
                </div>
                <div className="head">
                    <div className="intro">
                        <p className='greet'>Hello !!,  Myself</p>
                        <p className="name"><span>Ushank</span> Shailesh Wagh</p>
                    </div>
                    <p className="h">mern<span> Stack</span> Developer</p>
                    <div className="hire">
                        <button><a href="#contacts">Hire Me</a></button>
                        <button onClick={() => { document.getElementById("resume").style.left = 0 }}>View Resume</button>
                    </div>
                </div>
            </header>
            <div className="about" id='about' >
                <p className="about-h page-h">About Me</p>
                <div className="about-c">
                    <p>
                        👋   I'm currently pursuing my Integrated - Masters of Computer Applications ( IMCA ) degree at Parul University with Full Stack Web Development as Specialization. 📚
                    </p><br />
                    <p>
                        💻   My passion lies in the world of MERN ( MongoDB, Express.js, React, Node.js ) technologies. I've honed my skills through a highly-rated MERN Stack development course on Udemy, which equipped me with extensive knowledge.                    </p>
                </div>
            </div>

            <div className="skills" id='skills' >
                <p className="skills-h page-h">Skills</p>
                <div className="skills-c">
                    <div className="skills-grp">
                        <p className="grp-h">Frontend</p>
                        <div className="skills-lst">
                            <div className="sk">
                                <img src={reactLogo} alt="" />
                                <span>React JS</span>
                            </div>
                            <div className="sk">
                                <img src={html} alt="" />
                                <span>HTML 5</span>
                            </div>
                            <div className="sk">
                                <img src={css} alt="" />
                                <span>CSS 3</span>
                            </div>
                            <div className="sk">
                                <img src={js} alt="" />
                                <span>JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-grp">
                        <p className="grp-h">Backend</p>
                        <div className="skills-lst">
                            <div className="sk">
                                <img src={node} alt="" />
                                <span>Node Js</span>
                            </div>
                            <div className="sk">
                                <img src={express} alt="" />
                                <span>Express Js</span>
                            </div>
                            <div className="sk">
                                <img src={mongo} alt="" />
                                <span>Mongo DB</span>
                            </div>
                            <div className="sk">
                                <img src={js} alt="" />
                                <span>JavaScript</span>
                            </div>
                            <div className="sk">
                                <img src={c} alt="" />
                                <span>C</span>
                            </div>
                            <div className="sk">
                                <img src={python} alt="" />
                                <span>Python</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-grp">
                        <p className="grp-h">Other</p>
                        <div className="skills-lst">
                            <div className="sk">
                                <img src={reactLogo} alt="" />
                                <span>Problem Solving</span>
                            </div>
                            <div className="sk">
                                <img src={reactLogo} alt="" />
                                <span>Critical Thinking</span>
                            </div>
                            <div className="sk">
                                <img src={reactLogo} alt="" />
                                <span>Creativity</span>
                            </div>
                            <div className="sk">
                                <img src={reactLogo} alt="" />
                                <span>Communication</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="projects" id='projects' >
                <p className="projects-h page-h">Projects</p>
                <div className="projects-c">
                    <div className="proj1 proj">
                        <div className="proj-h">
                            <div className="pno">01</div>
                            <div className="pname">Quik-Buy</div>
                        </div>
                        <div className="proj-dets">
                            <img src={quik_buy} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology  : MERN</b></p>
                                <p className="tech-d" >
                                    A MERN-powered solution for effortless online shopping, connecting customers with local shops for home delivery.
                                </p>
                                <div className="v-links">
                                    <a href="https://github.com/VishankWagh/Online-Local-Store.git" target='_blank'><span>Github</span> <span className="material-symbols-outlined">
                                        link
                                    </span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj2 proj">
                        <div className="proj-h">
                            <div className="pno">02</div>
                            <div className="pname">Order Desk</div>
                        </div>
                        <div className="proj-dets">
                            <img src={order_desk} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology : MERN</b></p>
                                <p className="tech-d" >
                                    Your productivity companion built with React, making work-break scheduling a breeze to boost your efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="proj2 proj">
                        <div className="proj-h">
                            <div className="pno">03</div>
                            <div className="pname">Promodor App</div>
                        </div>
                        <div className="proj-dets">
                            <img src={promodor} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology : React Js</b></p>
                                <p className="tech-d" >
                                    Your productivity companion built with React, making work-break scheduling a breeze to boost your efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="proj3 proj">
                        <div className="proj-h">
                            <div className="pno">04</div>
                            <div className="pname">Drone Website</div>
                        </div>
                        <div className="proj-dets">
                            <img src={drone_website} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology : HTML 5, CSS 3</b></p>
                                <p className="tech-d" >
                                    Explore the world of drones through our classic portfolio website, showcasing the cutting-edge features of our company's drone technology.
                                </p>
                                <div className="v-links">
                                    <a href="https://usw-drone-technology.w3spaces.com" target='_blank'><span>View</span> <span className="material-symbols-outlined">
                                        link
                                    </span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj4 proj">
                        <div className="proj-h">
                            <div className="pno">05</div>
                            <div className="pname">Future Tech Clone</div>
                        </div>
                        <div className="proj-dets">
                            <img src={future_tech} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology : HTML 5, CSS 3</b></p>
                                <p className="tech-d" >
                                    An engaging frontend website that serves as a platform for exploring and showcasing the latest advancements in future technologies and products.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="proj5 proj">
                        <div className="proj-h">
                            <div className="pno">06</div>
                            <div className="pname">Todo App</div>
                        </div>
                        <div className="proj-dets">
                            <img src={todoapp} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology : React Js</b></p>
                                <p className="tech-d" >
                                    Your dynamic task manager, powered by React, to organize your to-do lists effortlessly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="certifs" id='certifs' >
                <p className="page-h certifs-h">Certifications</p>
                <div className="certifs-c">
                    <div className="certif">
                        <img src={udemy} alt="" className="certif-img" />

                        <p>
                            Web Development Bootcamp 2023
                        </p>
                    </div>
                    <div className="certif">
                        <img src={iit_bombay} alt="" className="certif-img" />

                        <p>
                            Certificate of Completion of C training
                        </p>
                    </div>
                    <div className="certif">
                        <img src={listening} alt="" className="certif-img" />

                        <p>
                            FunFest 2022-23
                        </p>
                    </div>
                    <div className="certif">
                        <img src={sololearn} alt="" className="certif-img" />

                        <p>
                            Web Development Fundamentals
                        </p>
                    </div>
                </div>
            </div>

            <div className="contacts" id='contacts' >
                <p className="page-h">Contact me</p>
                <div className="contact-c">
                    <a className="c" href='https://www.linkedin.com/in/ushank-wagh-51285524a' target='_blank'>
                        <img src={linkedin} alt="" />
                        <p>Ushank Wagh</p>
                    </a>
                    <a className="c" href='mailto:ushankswagh@gmail.com'>
                        <img src={gmail} alt="" />
                        <p>ushankswagh@gmail.com</p>
                    </a>
                    <div className="c" title='Copy' onClick={function myFunction() {
                        navigator.clipboard.writeText('9408327656');
                        alert("Contact Number copied")
                    }}>
                        <img src={call} alt="" />
                        <p id="phoneNumber" >+91 9408327656</p>
                    </div>
                </div>
            </div>
            <div className="copy">
                Copyright | Created By Ushank Wagh
            </div>
        </main>
    )
}

export default Home
