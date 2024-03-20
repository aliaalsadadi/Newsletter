'use client';

import React, { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Form = ({ data, setData }) => {

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data);
        try {
            const response = await axios.post('http://127.0.0.1:8000/sendMails/', data);
            console.log(response.data);
        } catch (error) {
            console.error('POST Error:', error.message);
        }
    };

    return (
        <form className="flex-1" onSubmit={(e) => handleSubmit(e)}>
            <table className="table-fixed">
                <tbody>
                    <tr>
                        <td className='p-5'>
                            <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900 p-5 text-center">
                                subject
                            </label>
                        </td>
                        <td className='p-5'>
                            <textarea
                                id="subject"
                                name="subject"
                                rows={3}
                                className="block w-full rounded-md border-2  px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                onChange={(e) => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5'>
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 p-5 text-center">
                                Title
                            </label>
                        </td>
                        <td className='p-5'>
                            <textarea
                                id="title"
                                name="title"
                                rows={3}
                                className="block w-full rounded-md border-2  px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                onChange={(e) => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5'>
                            <label htmlFor="idea1" className="block text-sm font-medium leading-6 text-gray-900 p-5 text-center">
                                Idea 1
                            </label>
                        </td>
                        <td className='p-5'>
                            <textarea
                                id="idea1"
                                name="idea1"
                                rows={3}
                                className="block w-full rounded-md border-2  px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                onChange={(e) => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5'>
                            <label htmlFor="idea2" className="block text-sm font-medium leading-6 text-gray-900 p-5 text-center">
                                Idea 2
                            </label>
                        </td>
                        <td className='p-5'>
                            <textarea
                                id="idea2"
                                name="idea2"
                                rows={3}
                                className="block w-full rounded-md border-2  px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                onChange={(e) => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5'>
                            <label htmlFor="idea3" className="block text-sm font-medium leading-6 text-gray-900 p-5 text-center">
                                Idea 3
                            </label>
                        </td>
                        <td className='p-5'>
                            <textarea
                                id="idea3"
                                name="idea3"
                                rows={3}
                                className="block w-full rounded-md border-2  px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                onChange={(e) => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5'>
                            <label htmlFor="quote1" className="block text-sm font-medium leading-6 text-gray-900 p-5 text-center">
                                Quote 1
                            </label>
                        </td>
                        <td className='p-5'>
                            <textarea
                                id="quote1"
                                name="quote1"
                                rows={3}
                                className="block w-full rounded-md border-2  px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                onChange={(e) => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5'>
                            <label htmlFor="quote2" className="block text-sm font-medium leading-6 text-gray-900 p-5 text-center">
                                Quote 2
                            </label>
                        </td>
                        <td className='p-5'>
                            <textarea
                                id="quote2"
                                name="quote2"
                                rows={3}
                                className="block w-full rounded-md border-2  px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                onChange={(e) => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5'>
                            <label htmlFor="quote2" className="block text-sm font-medium leading-6 text-gray-900 p-5 text-center">
                                Question to ponder on
                            </label>
                        </td>
                        <td className='p-5'>
                            <textarea
                                id="question1"
                                name="question1"
                                rows={3}
                                className="block w-full rounded-md border-2  px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                onChange={(e) => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='p-5'>
                            <div className="flex mt-8 p-5">
                                <button type="submit" className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                                    <svg className="w-4 h-4 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                    <span>Send Mails</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default Form;
