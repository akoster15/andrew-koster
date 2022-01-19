import React from 'react'

function Footer() {
    return(
        <footer style={{bottom: "0", height: "6rem", background: "#d4a373"}}>
        <div className="main-footer font-small white pt-4"></div>
            <div className="container-fluid text-center text-md-left">
                <div className="row">

                    <div className="col-md-3 mx-auto">
                        <ul style={{listStyleType:"none", display: "flex", justifyContent: "space-around"}}>
                        <li><a style={{textDecoration: "none", display: "block"}} href="https://github.com/akoster15"target="blank">GitHub</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mx-auto">
                        <ul style={{listStyleType:"none", display: "flex", justifyContent: "space-around"}}>
                        <li><a style={{textDecoration: "none", display: "block"}} href="https://www.linkedin.com/in/andrew-n-koster/"target="blank">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mx-auto">
                        <ul style={{listStyleType:"none", display: "flex", justifyContent: "space-around"}}>
                        <li><a style={{textDecoration: "none", display: "block"}} href="https://twitter.com/AKoster15"target="blank">Twitter</a>
                        </li>
                        </ul>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12 mx-auto">
                    <ul style={{listStyleType:"none", display: "flex", justifyContent: "space-around"}}>
                        <li><a style={{textDecoration: "none", display: "block"}} target="blank">Email: andrekoster@outlook.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;