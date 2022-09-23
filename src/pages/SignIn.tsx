import {ChangeEvent, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {defaultFormFields} from "./SignUp";
import {AuthContext} from "../components/AuthContext";

export function SignIn() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const navigate = useNavigate()
    const [wrongPasswordError, setWrongPasswordError] = useState(false)
    const [wrongEmailError, setWrongEmailError] = useState(false)
    const value = useContext(AuthContext);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
    const signIn = (event: any) => {
        const user = JSON.parse(localStorage.getItem(email) as string);

        if (user && user.email === email && user.password === password) {
            value?.login(user.name, user.email, user.password, true)
            navigate('/');
            window.location.reload()
        } else if (user && user.email !== email) {
            event.preventDefault()
            setWrongEmailError(true)
            setWrongPasswordError(false)
        } else {
            event.preventDefault()
            setWrongPasswordError(true)
            setWrongEmailError(false)
        }
    }

    return (
        <section className="h-screen">
            <div className="px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={signIn}>
                            {wrongEmailError && <div
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-red-700 bg-white bg-clip-padding">No
                                such email</div>}
                            {wrongPasswordError && <div
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-red-700 bg-white bg-clip-padding">Wrong
                                password</div>}
                            <div className="mb-6">
                                <input
                                    type="email"
                                    name='email'
                                    required
                                    onChange={handleChange}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    name='password'
                                    required
                                    onChange={handleChange}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <a
                                    href="/sign-up"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                >Register</a
                                >
                            </div>

                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}