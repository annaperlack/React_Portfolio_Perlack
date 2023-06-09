import React from 'react';
import lazyDater from '../images/screenshot-lazy-dater.png';
import cartoonify from '../images/profilepage.png'
import quizzinator from '../images/quizzinator.png'


export default function Portfolio() {
    return (
        <div>
            <h1>Check out my projects!</h1>
            <div className='projects row'>
                <div class="card col-3 m-3">
                    <img src={cartoonify} class="card-img-top" alt="cartoonify" />
                    <div class="card-body">
                        <h5 class="card-title"><a href="https://github.com/annaperlack/cartoonify-my-pic">Cartoonify My Pic</a></h5>
                        <p class="card-text">Welcome to Cartoonify My Pic! This application allows you to upload your images and "cartoonify" them with one simple click! It was built using jquery, sequelize, express, and cloudinary.</p>
                        <a href="https://cartoonify-my-pic.herokuapp.com/login" class="btn btn-primary">Try it out!</a>
                    </div>
                    
                </div>
                <div class="card col-3 m-3">
                    <img src={lazyDater} class="card-img-top" alt="lazy-dater" />
                    <div class="card-body">
                        <h5 class="card-title"><a href="https://github.com/FDJoss/The-Lazy-Dater">The Lazy Dater</a></h5>
                        <p class="card-text">This website is built with HTML, CSS, and Javascript. It utilizes two APIs, the Cocktail Database and the Movie Database, to pull in cocktail and movie information.</p>
                        <a href="https://fdjoss.github.io/The-Lazy-Dater/" class="btn btn-primary">Try it out!</a>
                    </div>
                </div>
                <div class="card col-3 m-3">
                    <img src={quizzinator} class="card-img-top" alt="cartoonify" />
                    <div class="card-body">
                        <h5 class="card-title"><a href="https://github.com/annaperlack/cartoonify-my-pic">The Quizzinator </a></h5>
                        <p class="card-text">This application was created using React and allows a user to test their trivia knowledge.</p>
                        <a href="https://quizzinator.herokuapp.com/" class="btn btn-primary">Try it out!</a>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}
