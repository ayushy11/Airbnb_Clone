import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Search from './Search.js';
import '../styles/Banner.css';

function Banner() {
    const history = useHistory();
    const [showSearch, setSearch] = useState(false);
    
    return (
        <div className="banner">
            <div className="banner__search">

                {showSearch && <Search />}

                <Button
                    className="banner__searchbutton"
                    variant="outlined"
                    onClick={()=> setSearch(!showSearch)}
                >
                {showSearch ? "Hide" : "Search Dates"}    
                </Button>
            </div>
            <div className="banner__info">
            <h1>Inspiration for future getaways</h1> 
            <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
            <Button 
                variant='outlined'
                onClick={()=> history.push('/search')}   
            >
            Explore nearby
            </Button>
            </div>
            
        </div>
    )
}

export default Banner
