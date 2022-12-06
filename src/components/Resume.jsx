import React from 'react'
import Section from './Section'

const data = [
    {
        name: "Akshay Shanbhag",
        description: "Ventura, CA",
        score: "email: akshanbhag13@gmail.com"
    },
    {
        name: "Purdue University",
        description: "West Lafayette, IN",
        score: "Computer Science"
    },
    {
        name: "Foothill Technology High School",
        description: "Ventura, CA",
        score: "GPA: 4.5"
    },
    {
        name: "Yardi Systems Inc.",
        description: "Oxnard, CA",
        score: "Created pages with editable tables using Angular JS"
    },
    {
        name: "VSolvIt LLC.",
        description: "Ventura, CA",
        score: "Completed inventory on items within the office"
    }
]

const Resume = () => {
    return (
        <div>
            {data.map(item => {
                return (
                    <Section
                        name={item.name}
                        description={item.description}
                        score={item.score}
                    />
                )
            })}
        </div>
    )
}

export default Resume