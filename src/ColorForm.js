import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './ColorForm.css';

const ColorForm = ({ addColor }) => {
    const [formData, setFormData] = useState({
        name: '',
        color: '#000000',
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor((data) => [...data, formData]);

        history.push('/colors');
    };

    return (
        <div className="ColorFormContainer">
            <h1>Pick and name a color!</h1>
            <form onSubmit={handleSubmit} className="ColorForm">
                <div className="ColorFormGroup">
                    <label htmlFor="name">Color Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Ex: Shadow Blue"
                        onChange={handleChange}
                    />
                </div>

                <div className="ColorFormGroup">
                    <label htmlFor="color">Color Value: </label>
                    <input type="color" name="color" value={formData.color} onChange={handleChange} />
                </div>
                <button>Add Color</button>
            </form>
        </div>
    );
};

export default ColorForm;
