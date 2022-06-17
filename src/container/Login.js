import React, { useState } from 'react';
import  * as yup from 'yup';
import { useFormik, Formik, Form } from 'formik';

function Login(props) {
  const [login, setLogin] = useState("Login")

  const [reset, setReset] = useState(false)

  let schema = yup.object().shape({
    email: yup.string().required("please enter your email id").email("please enter valid email id"),
    password: yup.string().required("please enter password"),
  });

  const formikobj = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleSubmit, handleChange, errors } = formikobj


  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          {reset ?
            <h2>
              forget password
            </h2>
            :
            login === "Login" ?
              <h2>Login</h2>
              :
              <h2>signup</h2>
          }


        </div>
        <Formik values={formikobj}>
          <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">

            {
              reset ?
                null
                :
                login === "Login" ?
                  null
                  :
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />

                    </div>
                  </div>
            }
            <div className="row">
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange}/>
                <p>{errors.email}</p>

              </div>
            </div>

            {
              reset ?
                null
                :
                <div className="row">
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input type="password" className="form-control" name="password" id="password" placeholder="Your password" onChange={handleChange}/>
                  <p>{errors.password}</p>
                  </div>
                </div>

            }
            {
              login === "Login" ?
                <div>
                  Create a new account  <button onClick={() => { setLogin("signup"); setReset(false) }}>Signup</button>
                  <br></br>

                </div>
                :
                <div>
                  Already have an account  <button onClick={() => { setLogin("Login"); setReset(false) }}>Login</button>
                </div>
            }
            <button onClick={() => { setReset(true) }}>forget password</button>

            {
              reset ?
                <div className="text-center"><button type="submit">submit</button></div>
                :
                login === "Login" ?
                  <div className="text-center"><button type="submit">Login</button></div>
                  :
                  <div className="text-center"><button type="submit">Signup</button></div>
            }



          </Form>
        </Formik>

      </div>
    </section>

  );
}

export default Login;