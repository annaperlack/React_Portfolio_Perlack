import React from 'react';
import lazyDater from '../images/screenshot-lazy-dater.png';
import cartoonify from '../images/profilepage.png'

export default function Portfolio() {
    return (
        <div>
            <h1>Check out my projects!</h1>
            <div className='projects row'>
                <div class="card col-3">
                    <img src={cartoonify} class="card-img-top" alt="cartoonify" />
                    <div class="card-body">
                        <h5 class="card-title">Cartoonify My Pic</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://cartoonify-my-pic.herokuapp.com/login" class="btn btn-primary">Try it out!</a>
                    </div>
                    
                </div>
                <div class="card col-3">
                    <img src={lazyDater} class="card-img-top" alt="lazy-dater" />
                    <div class="card-body">
                        <h5 class="card-title">The Lazy Dater</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://fdjoss.github.io/The-Lazy-Dater/" class="btn btn-primary">Try it out!</a>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}
