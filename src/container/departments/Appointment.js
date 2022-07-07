import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function Appointment(props) {
    const [update, setUpdate] = useState(false)

    const history = useHistory()
   const DataInsert = (values) => {
        const localdata = JSON.parse(localStorage.getItem('Apt'))

     let id = Math.floor(Math.random()*1000);

        let data ={
            id,
            ...values
        } 
        if(localdata === null){
            localStorage.setItem('Apt', JSON.stringify([data]))
        }else{
            localdata.push(data)
            localStorage.setItem('Apt',JSON.stringify(localdata))
        }
        history.push("/list")
   }
    useEffect( () => {
        let localdata = JSON.parse(localStorage.getItem('Apt'))

        if(props.location.state && localdata !== null){
            const fdata = localdata.filter((l) => l.id === props.location.state.id);
            formikobj.setValues(fdata[0])
            setUpdate(true)
        }
        
   },[]);

   const updatedata = (values) => {
    let localdata = JSON.parse(localStorage.getItem('Apt'));
        let newdata = localdata.map((m) => {
            if(m.id === values.id){
                return values
            }else{
                return m;
            }
        })
         
        localStorage.setItem('Apt', JSON.stringify(newdata));
        formikobj.resetForm()
        setUpdate(false)
        history.replace('/list')
   }

    let schema = yup.object().shape({
        name: yup.string().required("required"),
        email: yup.string().email("please enter valid email id").required("required"),
        phone: yup.number().required("required"),
        date: yup.string().required("required"),
        department: yup.string().required("required"),
        message: yup.string().required("required")

    });
    const resetform = () => {
        formikobj.resetForm()
        setUpdate(false)
        history.replace()
    }
    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: (values, action) => {
            if(update){
                updatedata(values)
            }else{
            DataInsert(values)
            }
            action.resetForm()
            
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, touched, values } = formikobj


    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Book an Appointment</h2>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-center'>
                            <NavLink to="/appointment" onClick={() => resetform()}>
                                <h2 className='btn btn-primary' style={{backgroundColor:'#ff6337', borderColor:'#ff6337', padding:'10px 60px', fontSize:'30px'}}>Appointment</h2></NavLink>
                        </div>
                        <div className='col-6 text-center'>
                        <NavLink to="/list">
                            <h3 className='btn btn-primary' style={{backgroundColor:'#ff6337', borderColor:'#ff6337', padding:'10px 60px', fontSize:'30px'}}>List</h3></NavLink>
                        </div>
                    </div>
                    <Formik values={formikobj}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">

                                <div className="col-md-4 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        onChange={handleChange}
                                        value={values.name}
                                        onBlur={handleBlur}
                                    />
                                    <p className='text-danger'>{errors.name && touched.name ? errors.name : ''}</p>
                                </div>

                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
                                    />
                                    <p className='text-danger'>{errors.email && touched.email ? errors.email : ''}</p>
                                </div>

                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        placeholder="Your Phone"
                                        onChange={handleChange}
                                        value={values.phone}
                                        onBlur={handleBlur}
                                    />
                                    <p className='text-danger'>{errors.phone && touched.phone ? errors.phone : ''}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input
                                        type="date"
                                        name="date"
                                        className="form-control datepicker"
                                        id="date"
                                        placeholder="Appointment Date"
                                        onChange={handleChange}
                                        value={values.date}
                                        onBlur={handleBlur}
                                    />
                                    <p className='text-danger'>{errors.date && touched.date ? errors.date : ''}</p>
                                </div>

                                <div className="col-md-4 form-group mt-3">
                                    <select
                                        name="department"
                                        id="department"
                                        className="form-select"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.department}
                                    >
                                        <option value>Select Department</option>
                                        <option >Department 1</option>
                                        <option >Department 2</option>
                                        <option >Department 3</option>
                                    </select>
                                    <p className='text-danger'>{errors.department && touched.department ? errors.department : ''}</p>
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <textarea className="form-control" type="text" name="message" rows={5} placeholder="Message" 
                                onChange={handleChange}
                                value={values.message}
                                onBlur={handleBlur}
                                />
                                <p className='text-danger'>{errors.message && touched.message ? errors.message : ''}</p>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center">
                                {
                                    update ? 
                                <button type="submit">Update an Appointment</button>
                                    :
                                <button type="submit">Make an Appointment</button>
                                }
                                </div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default Appointment;