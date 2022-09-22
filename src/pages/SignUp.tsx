import React, {ChangeEvent, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../components/AuthContext";

export const defaultFormFields = {
    name: '',
    email: '',
    password: '',
};

export function SignUp() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, name, password} = formFields;
    const value = useContext(AuthContext);
    const navigate = useNavigate()
    const [signedInError, setSignedInError] = useState(false)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const signUp = (event: any): void => {
        const {email: checkEmail} = JSON.parse(localStorage.getItem(email) ?? '[]')
        if (checkEmail === email) {
            event.preventDefault()
            setSignedInError(true)
        }
        else {
            value?.login(name, email, password, true)
            setSignedInError(false)
            navigate('/')
        }
    }

    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">

                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={signUp}>
                            {signedInError && <div
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-red-700 bg-white bg-clip-padding">Cannot
                                create user, email already in use</div>}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name='name'
                                    required
                                    onChange={handleChange}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Name"
                                />
                            </div>


                            <div className="mb-6">
                                <input
                                    type="email"
                                    required
                                    name='email'
                                    onChange={handleChange}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    name='password'
                                    onChange={handleChange}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <a
                                    href="/sign-in"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                >Already have an account?</a
                                >
                            </div>

                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}