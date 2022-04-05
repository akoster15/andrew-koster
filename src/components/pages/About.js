import React from 'react'
import portrait from '../../images/portrait.jpg';

export default function About() {
    return (
    <div className="container">
        <div className="section">

            <div className="row">
                <div className="col s12 m4">
                    <img className="img-responsive img-fluid" src={portrait} alt="pofileImg" width="450" heigh="600"
                    >
                    </img>
                </div>

                <div className="col s12 m4">
                    <h3><i className="mdi-content-send"></i></h3>
                    <h4>About Me</h4>
                    <p className="left-align light">
                        My name is Andrew Koster. I was born in Johns Creek, GA and have lived here my whole life.
                        I have recently decided to make a career change from being a civil engineer to become a 
                        web developer. I am currently studying HTML, CSS, JavaScript, Bootstrap, jQuery, Node.js, Git,
                        React, MongoDB, and so much more. I love to code and create new ideas. I also love going to the gym, 
                        watching football, playing basketball, traveling, and going out with friends.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}
