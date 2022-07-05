import React from 'react';
import { NavLink } from 'react-router-dom';

function List_Apt(props) {
    return (
        <div>
            <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Book an Appointment</h2>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-center'>
                            <NavLink to="/appointment">
                                <h2>Appointment</h2></NavLink>
                        </div>
                        <div className='col-6 text-center'>
                        <NavLink to="/list">
                            <h3>List</h3></NavLink>
                        </div>
                    </div>
                    </div>
                    </section>
                    </main>
        </div>
    );
}

export default List_Apt;