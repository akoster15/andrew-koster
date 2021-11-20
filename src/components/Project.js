import React from 'react'

export default function Project(props) {
    return (
        <div>
         <div class="card" style={{width: "16rem", margin: ".6em",}}>
          <img style={{height: "10rem"}} src={props.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.description}</p>
            <a href={props.github} class="btn btn-primary" style={{margin: ".5em",}}>GitHub</a>
            <a href={props.liveapp} class="btn btn-primary" style={{margin: ".5em",}}>Live App</a>
          </div>
         </div>
        </div>
    )
}