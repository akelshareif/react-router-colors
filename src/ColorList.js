import React from 'react';
import { Link } from 'react-router-dom';

import './ColorList.css';

const ColorList = ({ colors }) => {
    return (
        <div className="ColorListContainer">
            <div className="ColorList">
                <h1>Welcome to the Color Factory</h1>
                <Link to="/colors/new">Add A Color</Link>
            </div>
            <div className="Colors">
                <h3>Please Select a Color</h3>
                <Link to="/colors/red">red</Link>
                <Link to="/colors/green">green</Link>
                <Link to="/colors/blue">blue</Link>
                {colors.map((c, idx) => (
                    <Link key={c.name + idx} to={`/colors/${c.name}`}>
                        {c.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ColorList;
