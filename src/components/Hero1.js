
import React from 'react'
import '../App.css';
import './Hero1.css';
import { Button } from 'reactstrap';

function Hero1() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" className="hero-video" autoPlay loop muted></video>
            <h1> Adventure awaiting</h1>
            <p> This is adventure club!</p>
            <div className="hero-btn">
                <button  className="btns btn btn-md btn-danger" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get Started
                </button>
                <button color="danger" className="btns btn btn-md btn-primary" buttonStyle="btn--primary" buttonSize="btn--large"  onClick={console.log('hey')}>
                    Watch Trailer <i className='fa fa-play-circle'/>
                </button>
            </div>
        </div>
    )
}

export default Hero1;