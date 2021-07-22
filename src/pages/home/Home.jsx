import './home.scss';
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Feature from '../../components/feature/Feature';
import List from '../../components/list/List';


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Feature />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home;
 