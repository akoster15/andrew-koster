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
            <Project name={"Password Generator"} img={PasswordGenerator} github={"https://github.com/akoster15/password-generator.git"} liveapp={"https://akoster15.github.io/password-generator/"} description={"This app generates a random password that can include lowercase letters, uppercase lettes, numbers, and special characters."}/>
            <Project name={"Work Day Scheduler"} img={Planner} github={"https://github.com/akoster15/work-day-scheduler.git"} liveapp={"https://akoster15.github.io/work-day-scheduler/"} description={"This application allows a user to enter items that they will be working on for each hour of a work day and how long they will be spending on them."}/>
            <Project name={"Weather Dashboard"} img={Weather} github={"https://akoster15.github.io/weather-dashboard/"} liveapp={" https://github.com/akoster15/weather-dashboard.git"} description={"This application allows users to search any city and find out the current weather and 5 day weather forecast for that specific city."}/>
            <Project name={"Budget Tracker"} img={Budget} github={"https://github.com/akoster15/budget-tracker.git"} liveapp={"https://budget-tracker-akoster15.herokuapp.com/"} description={"This app allows users to track their expenses both online and offline by adding or subtracting fund from their account balance."}/>
            <Project name={"Travel Brewery"} img={ProjectOne} github={"https://github.com/akoster15/travel-brewery"} liveapp={"https://matildabrantley.github.io/project-one/"} description={"This app will allow users to search for Breweries based on a specific location. This location is searched on using both city and state."}/>
            <Project name={"Haunted Doll House"} img={ProjectTwo} github={"https://github.com/ahuffma2/Haunted-Doll-House.git"} liveapp={"https://haunted-doll-house.herokuapp.com/"} description={"This app is a forum that allows users to post about the most cursed artifacts on the internet as well as allow them to search for specific ones as well."}/>
            </div>
        </div>
    );
}