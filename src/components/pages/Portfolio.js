import React from 'react'
import Project from '../Project';
import PasswordGenerator from '../../images/password.PNG';
import Planner from '../../images/planner.PNG';
import Weather from '../../images/weather.PNG';
import Budget from '../../images/budget.PNG';
import ProjectOne from '../../images/brewery.jpg';
import ProjectTwo from '../../images/haunted.PNG';

export default function Portfolio() {
    return(
        <div className="p-5 container">
            <h1 className="text-center">My Projects</h1>
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays will create a random password..."}/>
            <Project name={"Work Day Scheduler"} img={Planner} github={"https://github.com/akoster15/work-day-scheduler.git"} liveapp={"https://akoster15.github.io/work-day-scheduler/"} description={"This app lets a user creat a schedule for work..."}/>
            <Project name={"Weather Dashboard"} img={Weather} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app displays the weather for a specific city..."}/>
            <Project name={"Budget Tracker"} img={Budget} github={"https://github.com/akoster15/budget-tracker.git"} liveapp={"https://budget-tracker-akoster15.herokuapp.com/"} description={"This app will allow a user to track a budget offline/online..."}/>
            <Project name={"Travel Brewery"} img={ProjectOne} github={"https://github.com/akoster15/travel-brewery"} liveapp={"https://matildabrantley.github.io/project-one/"} description={"This app allows a user to look up information on breweries..."}/>
            <Project name={"Haunted Doll House"} img={ProjectTwo} github={"https://github.com/ahuffma2/Haunted-Doll-House.git"} liveapp={"https://haunted-doll-house.herokuapp.com/"} description={"This app allows a user to find information on cool artifacts..."}/>
            </div>
        </div>
    );
}