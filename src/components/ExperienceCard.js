import React from 'react'
import python from "../images/python.jpg"
import js from "../images/js.jpg"


const ExperienceCard = ({ role, duration, company, skills, desc }) => {
    return (
        <div className='exp-card'>
            <div className="role">

                <p>{role}</p>
                <span className="date">
                    {duration[0]}&nbsp; - &nbsp;{duration[1]}
                </span>
            </div>
            <div className="exp-company">
                <a href="https://www.linkedin.com/company/mrloggage/">
                    <img src={company.img} alt="" />
                    <p>{company.name}</p>
                </a>
            </div>
            <div className="exp-desc">
                <ul>
                    {
                        desc.map((d, index) => <li key={index}>{d}</li>)
                    }
                </ul>
            </div>
            <div className="exp-skills">
                {
                    skills.map((skill, index) => <div className="exp-skill" key={index}>{skill}</div>)
                }
            </div>
        </div>
    )
}

export default ExperienceCard
