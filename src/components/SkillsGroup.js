import React from 'react'
import reactLogo from "../images/react.png"
import express from "../images/express.jpg"
import mongo from "../images/mongo.jpg"
import node from "../images/node.jpg"
import html from "../images/html.jpg"
import css from "../images/css.jpg"
import js from "../images/js.jpg"
import c from "../images/c.jpg"
import python from "../images/python.jpg"
import skillsLogo from "../images/skillsLogo.png"
import tailwind from "../images/tailwind.png"
import nodeLogo from "../images/nodeLogo.jpg"

const skillsImgs = {
    reactLogo,
    express,
    mongo,
    node,
    html,
    css,
    js,
    c,
    python,
    skillsLogo,
    tailwind,
    nodeLogo
}

const SkillsGroup = ({ groupHead, skills }) => {
    console.log(skills);
    return (
        <div className="skills-grp">
            <p className="grp-h">{groupHead}</p>
            <div className="skills-lst">
                {
                    skills.map((skill, index) =>
                        <div className="sk" key={index}>
                            <img src={skillsImgs[skill[0]]} alt="" />
                            <span>{skill[1]}</span>
                        </div>
                    )
                }
                {/* <div className="sk">
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
                </div> */}
            </div>
        </div>
    )
}

export default SkillsGroup
