import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './Color.css';

const Color = ({ colors }) => {
    const { color } = useParams();

    const setColor = colors.filter((c) => c.name === color)[0];

    const styles = {
        backgroundColor: setColor ? setColor.color : color,
    };

    return (
        <div className="ColorContainer" style={styles}>
            <h1>THIS IS {color.toUpperCase()}!</h1>
            <p>ISN'T IT BEAUTIFUL?</p>
            <Link to="/colors">GO BACK</Link>
        </div>
    );
};

export default Color;
