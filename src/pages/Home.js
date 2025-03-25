import React, { useEffect } from 'react'
import "../styles/Home.css"
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import call from "../images/call.png";
import drone_website from "../images/drone_website.png";
import future_tech from "../images/future_tech_clone.png";
import promodor from "../images/promodor.png";
import todoapp from "../images/todoapp.png";
import quik_buy from "../images/quik_buy.jpg";
import effiq from "../images/effiq_img.jpg";
import order_desk from "../images/order-desk.png";
import portfolio from "../images/portfolio.png";
import listening from "../images/listening.jpg";
import sololearn from "../images/sololearn.jpg";
import udemy from "../images/udemy.jpg";
import udemy2 from "../images/udemy2.jpg";
import profile from "../images/profile.png";
import solid from "../images/solid.png";
import mr_loggage from "../images/mr_loggage.jpg";
import navpad_info from "../images/navpad_info.jpg";
import acciojob_logo from "../images/acciojob_img.png";
import slms from "../images/slms.jpg";
import resume_img from "../images/resume_img.png";

import resumePDF from "../assets/resume.pdf"
import SkillsGroup from '../components/SkillsGroup'
import ExperienceCard from '../components/ExperienceCard';
import axios from 'axios';

const Home = () => {

    useEffect(() => {
        // (async () => {
        //     const response = await axios.get("https://slms-backend.vercel.app/get/visitor-count/portfolio-u");
        //     console.log("Visitor Count:", response.data.visitCount);
        // })();
    }, [])

    return (
        <main className="home" >
            <header className="page" id='home'>
                {/* <div className="resume" id='resume' onClick={() => { document.getElementById("resume").style.left = "200%" }} >
                    <img src={resume_img} alt="" />
                    <button><a href={resumePDF} download="Ushank_Wagh_Resume">Download PDF</a></button>
                    <button className="x" >X</button>
                </div> */}
                <div className="profile">
                    <div className="image-nav">
                        <img src={profile} alt="" />
                    </div>
                </div>
                <div className="head">
                    <div className="intro">
                        <p className='greet'>Hello !!👋,  Myself</p>
                        <p className="name"><span>Ushank</span> Shailesh Wagh</p>
                    </div>
                    <p className="h">Software<span> Development</span> Engineer</p>
                    <div className="hire">
                        <button><a href="#contacts">Hire Me</a></button>
                        <button><a href='https://drive.google.com/file/d/1_i3PCbJrLumYj5Bhh3Qq9bQgHU9EUKnA/view?usp=sharing' target='_blank'>View Resume</a></button>
                    </div>
                </div>
            </header>
            <div className="about" id='about' >
                <p className="about-h page-h">About Me</p>
                <div className="about-c">
                    <p>👋 My passion lies in the world of Software Development.</p><br />
                    {/* <p>
                        👋   I'm currently pursuing my Integrated - Masters of Computer Applications ( IMCA ) degree at Parul University with Full Stack Web Development as Specialization. 📚
                    </p><br /> */}
                    <p>🎯Currently on the path to "Master DSA & Problem Solving" along with "Learn in Public Challenge".</p>
                    <p>
                        Undergoing a SDE Training @AccioJob Specialising in DSA and Problem Solving in Java, along with hands-on exposure to Real-World Projects.
                    </p>
                    {/* <p>
                        💻   My passion lies in the world of MERN ( MongoDB, Express.js, React, Node.js ) technologies. I've honed my skills through a highly-rated MERN Stack development course on Udemy, which equipped me with extensive knowledge.
                    </p> */}
                </div>
            </div>

            <div className="skills" id='skills' >
                <p className="skills-h page-h">Skills</p>
                <div className="skills-c">
                    <SkillsGroup groupHead="Frontend" skills={[["reactLogo", "React JS"], ["html", "HTML 5"], ["css", "CSS 3"], ["js", "JavaScript"], ["tailwind", "Tailwind CSS"]]} />
                    <SkillsGroup groupHead="Backend" skills={[["skillsLogo", "Java"], ["nodeLogo", "Node JS"], ["express", "Express Js"], ["mongo", "Mongo DB"], ["js", "JavaScript"], ["reactLogo", "RestFull APIs"], ["reactLogo", "User Authentication"], ["c", "C"], ["python", "Python"]]} />
                    <SkillsGroup groupHead="Other" skills={[["skillsLogo", "Problem Solving"], ["skillsLogo", "Critical Thinking"], ["skillsLogo", "Creativity"], ["skillsLogo", "Communication"],]} />
                </div>
            </div>

            <div className="exp" id="exp">
                <p className="exp-h page-h">Experience</p>
                <div className="exp-c">
                    {/* <ExperienceCard role={"Software Development Trainee"} duration={["Oct '24", "Present"]} company={{ img: mr_loggage, name: "AccioJob" }} skills={["DSA", "Problem Solving", "Java", "Software Development"]} desc={["Currently undergoing a Software Development Training, specializing in Data Structures and Algorithms - Java, with a focus on problem-solving, algorithmic thinking, and hands-on software development training."]} /> */}
                    <ExperienceCard role={"Software Development Trainee"} duration={["Oct '24", "Present"]} company={{ img: acciojob_logo, name: "AccioJob" }} skills={["DSA", "Problem Solving", "Java", "Software Development"]} desc={["Currently undergoing a Software Development Training, specializing in Data Structures and Algorithms - Java, with a focus on problem-solving, algorithmic thinking, and hands-on software development training."]} />
                    <ExperienceCard role={"Full Stack Web Developer"} duration={["Jun '24", "Aug '24"]} company={{ img: mr_loggage, name: "Mr Loggage" }} skills={["MERN", "React Js", "Node Js", "Mongo DB", "Express Js", "Rest API"]} desc={["Working on a Real-World project on MERN Stack with collaboration in a dynamic team."]} />
                    <ExperienceCard role={"Full Stack Developer"} duration={["Jan '24", "May '24"]} company={{ img: navpad_info, name: "Navpad infotech" }} skills={["MERN", "Rest API", "MVC", "Authentication"]} desc={["Developed a Full Stack project using MERN Stack Technology, while applying latest tech skills."]} />
                    {/* <ExperienceCard role={""} duration={""} company={{img:"", name:""}} skills={[]} desc={[""]} /> */}
                </div>
            </div>

            <div className="projects" id='projects' >
                <p className="projects-h page-h">Projects</p>
                <div className="projects-c">
                    <div className="proj1 proj">
                        <div className="proj-h">
                            <div className="pno">01</div>
                            <div className="pname">EffiQ</div>
                        </div>
                        <div className="proj-dets">
                            <img src={effiq} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology  : MERN</b></p>
                                <p className="tech-d" >
                                    Skip the Queue with "EffiQ"
                                </p>
                                <div className="v-links">
                                    <a href="https://github.com/UshankWagh/UnQue/tree/master" target='_blank'><span>Github</span> <span className="material-symbols-outlined">
                                        link
                                    </span></a>
                                    {/* <a href="https://student-leave-management-system.netlify.app/" target='_blank'><span></span><span className="material-symbols-outlined">
                                        open_in_new
                                    </span></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj1 proj">
                        <div className="proj-h">
                            <div className="pno">01</div>
                            <div className="pname">SLMS</div>
                        </div>
                        <div className="proj-dets">
                            <img src={slms} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology  : MERN</b></p>
                                <p className="tech-d" >
                                    Student Leave Management System: Online Leave Management platform to manage students leave
                                </p>
                                <div className="v-links">
                                    <a href="https://github.com/VishankWagh/SLMS" target='_blank'><span>Github</span> <span className="material-symbols-outlined">
                                        link
                                    </span></a>
                                    {/* <a href="https://student-leave-management-system.netlify.app/" target='_blank'><span></span><span className="material-symbols-outlined">
                                        open_in_new
                                    </span></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj2 proj">
                        <div className="proj-h">
                            <div className="pno">02</div>
                            <div className="pname">Quik-Buy</div>
                        </div>
                        <div className="proj-dets">
                            <img src={quik_buy} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology  : MERN</b></p>
                                <p className="tech-d" >
                                    A MERN-powered solution for effortless Local Store shopping, connecting customers with local shops with home delivery.
                                </p>
                                <div className="v-links">
                                    <a href="https://github.com/VishankWagh/Quik-Buy" target='_blank'><span>Github</span> <span className="material-symbols-outlined">
                                        link
                                    </span></a>
                                    <a href="https://quik-buy.vercel.app" target='_blank'><span></span><span className="material-symbols-outlined">
                                        open_in_new
                                    </span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj3 proj">
                        <div className="proj-h">
                            <div className="pno">03</div>
                            <div className="pname">Portfolio</div>
                        </div>
                        <div className="proj-dets">
                            <img src={portfolio} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology  : React Js</b></p>
                                <p className="tech-d" >
                                    Visit the Attractive and Modern design Portfolio, designed using latest tech React Js. Have a look on my latest projects and industry oriented tech stack skills.
                                </p>
                                <div className="v-links">
                                    <a href="https://github.com/UshankWagh/Ushank-Portfolio" target='_blank'><span>Github</span> <span className="material-symbols-outlined">
                                        link
                                    </span></a>
                                    <a href="https://ushank-wagh-portfolio.vercel.app" target='_blank'><span></span><span className="material-symbols-outlined">
                                        open_in_new
                                    </span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj4 proj">
                        <div className="proj-h">
                            <div className="pno">04</div>
                            <div className="pname">Order Desk</div>
                        </div>
                        <div className="proj-dets">
                            <img src={order_desk} alt="" width="250rem" />
                            <div className="proj-desc">
                                <p className="tech" ><b>Technology : MERN</b></p>
                                <p className="tech-d" >
                                    React powered online platform for ordering food in restaurent in just one click, and get it served to your table.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="proj5 proj">
                        <div className="proj-h">
                            <div className="pno">05</div>
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
                </div>
            </div>

            <div className="certifs" id='certifs' >
                <p className="page-h certifs-h">Certifications</p>
                <div className="certifs-c">
                    <div className="certif">
                        <img src={udemy2} alt="" className="certif-img" />

                        <p>
                            Web Development Bootcamp 2023 - Udemy
                        </p>
                    </div>
                    <div className="certif">
                        <img src={udemy} alt="" className="certif-img" />

                        <p>
                            The Complete 2023 Web Development Bootcamp - Udemy
                        </p>
                    </div>
                    <div className="certif">
                        <img src={solid} alt="" className="certif-img" />

                        <p>
                            SOLID Principles every developer must know - Scaler
                        </p>
                    </div>
                    <div className="certif">
                        <img src={sololearn} alt="" className="certif-img" />

                        <p>
                            Web Development Fundamentals - Sololearn
                        </p>
                    </div>
                    <div className="certif">
                        <img src={listening} alt="" className="certif-img" />

                        <p>
                            FunFest 2022-23
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
