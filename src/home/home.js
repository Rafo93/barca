import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {useFormik} from "formik";

import './home.css';

const Home = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
        }),
        onSubmit: values => {
            axios.post('http://localhost:3000/posts', values)
                .then(res => console.log(res))
        },
    });
        return (
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder='Email'
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className='error'>{formik.errors.email}</div>
                ) : null}
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    placeholder='Password'
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className='error'>{formik.errors.password}</div>
                ) : null}
                <button type="submit" className='btn'>Submit</button>
            </form>
        );
    };

export  default Home
