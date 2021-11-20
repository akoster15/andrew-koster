import React from 'react'
import Res from '../../images/resume.PNG'

export default function Resume() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <h1 className="text-center">Resume</h1>
                        <img src={Res} className="img-responsive center-block d-block mx-auto" alt="resumeIMG" style={{maxHeight: "75rem", maxWidth: "40rem"}}
                    >
                    </img>
        </div>
        </div>
        </div>
        </div>
    );
}