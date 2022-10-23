import React, {Component} from 'react';
import './header.css'
import {NavLink} from "react-router-dom";
export const Header = () =>  {
        return (
            <div className="header">
                 <a>Weather App</a>
                 <NavLink to='/' className="link">Home</NavLink>
                 <NavLink to="/map" className="link">Map</NavLink>
            </div>
        );
}
