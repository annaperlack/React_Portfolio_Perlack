import React from 'react';
import photo from '../images/photo.png'


export default function About() {
    return (
        <div>
            <h1>Hi, I'm Anna!</h1>
            <p>
                I have a masters degree in occupational therapy and have spent the last 6 years working in a variety of healthcare settings. I recently took a leap of faith and enrolled in a full-stack web development bootcamp through The Ohio State University. I am passionate about helping others and love solving problems. I am hoping to use my unique skillset to contribute to solving healthcare related problems through the use of technology.
            </p>
            <div>
                <img className='profile-p' src={photo} alt="photo"/>
            </div>
        </div>
    );
}
