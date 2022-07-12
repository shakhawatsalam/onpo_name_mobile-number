import React from 'react';
import './PhoneNumberComponent.css'

const PhoneNumberComponent = () => {
    return (
        <div className='main'>
            <div className='input_field'>
                <label htmlFor="inactive">inactive</label>
                <input type="tel" />
                <label htmlFor="active">active</label>
                <input type="tel" />
                <label htmlFor="active">Active with Dropdown</label>
                <input type="tel" />
            </div>
        </div>
    );
};

export default PhoneNumberComponent;