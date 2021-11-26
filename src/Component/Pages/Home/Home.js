import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Services from './Services/Services';
import GetStarted from './GetStarted/GetStarted';

const Home = () => {
    return (
        <div id='home'>
            <div><Banner></Banner></div>
            <div id='services'><Services></Services></div>
            <div><Category></Category></div>
            <div><GetStarted></GetStarted></div>
        </div>
    );
};

export default Home;