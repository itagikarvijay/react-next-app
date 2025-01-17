'use client'

import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import "bootstrap/dist/css/bootstrap.css"
import LoginCtrl from './LoginCtrl'
// import { Redirect } from "react-router-dom";
import { useRouter } from 'next/navigation'
import { useDispatch } from "react-redux";
// import { loginAction } from "../app-store/actions/loginAction";
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../error/error'

type FormInputs = {
    name: string,
    password: string
}

function Login() {
    const router = useRouter()
    const { register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormInputs>();

    React.useEffect(() => {
        setError("name", {
            types: {
                required: "This is required",
                minLength: "This is minLength",
            },
        })
        setError("password", {
            types: {
                required: "This is required",
                minLength: "This is minLength",
            },
        })
    }, [setError])



    const [isNextView, setNextView] = useState(false);

    const [valid, setValid] = useState('');

    const dispatch = useDispatch();
    const onSubmit = (data: any) => {
        console.log('sending data to server.!')
        LoginCtrl(data).then(response => {
            console.log('response', response)
            // if (response.data.found) {
            //     setNextView(true);
            //     dispatch(loginAction(response.data));
            // } else {
            //     setValid(`${response.data.login_failuer_message} Please try with valid user name & password.!`);
            // }
        });
    }
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                {/* {isNextView ? (< Redirect to="/work" />) :( */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <div className="col">
                                            <label htmlFor="name">User Name :</label>
                                        </div>
                                        <div className="col">
                                            <input
                                                placeholder="Enter user name"
                                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                                {...register("name", {
                                                    // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    required: "Enter user name.!"
                                                },
                                                )}
                                            />
                                            <ErrorMessage className="invalid-feedback" name="name" as="div" errors={errors} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <label htmlFor="password">Password :</label>
                                        </div>
                                        <div className="col">
                                            <input
                                                type='password'
                                                placeholder="Enter password"
                                                className={`form-control ${errors.password ? "is-invalid" : ""
                                                    }`}
                                                {...register("password", {
                                                    required: "Password is required.!",
                                                    // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                })}
                                            />
                                            <ErrorMessage className="invalid-feedback" name="password" as="div" errors={errors} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <button className="btn btn-primary" type="submit">Submit</button>
                                        </div>
                                        {/* onClick={() => dispatch(LoginAction('Moto'))} */}
                                    </div>
                                    {valid}
                                </form>
                                {/* )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ErrorBoundary>
    );
}

export default Login;