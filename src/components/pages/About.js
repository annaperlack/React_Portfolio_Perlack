import React from 'react';
import photo from '../images/photo.png'


export default function About() {
    return (
        <div className='row justify-content-evenly'>
            <h1 className='header'>Hi, I'm Anna!</h1>
            <div className= 'col-2'>
                <img className='profile-pic' src={photo} alt="photo"/>
            </div>
            <div className= 'col-6'>
            <p className='about-p'>
                I have a masters degree in occupational therapy and have spent the last 6 years working in a variety of healthcare settings. I recently took a leap of faith and enrolled in a full-stack web development bootcamp through The Ohio State University. I graduate from the program in April and plan to start my new career right away! I am passionate about helping others and love solving problems. I am hoping to use my unique skillset to contribute to solving healthcare related problems through the use of technology. Please explore my portfolio to check out projects I have completed, download my resume, and locate my contact information. I am looking forward to connecting with you!
            </p>
            </div>
    
        </div>
    );
}
