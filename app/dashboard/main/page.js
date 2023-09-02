'use client'

import {useEffect, useState} from 'react'
import Image from "next/image";
import './main.scss'

import imageTest from '/public/image/12.jpg'
import axios from "axios";

export default function Counter() {
    const [data, setData] = useState([])

    async function getData() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        return setData(res.data)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            <div className="container">
                <div className="title">
                    WELCOME NEXT JS
                </div>
                <div className="cards">
                    {
                        data?.map((item) => (
                            <div key={item.id} className="card">
                                <div className="section">
                                    <div className="key">
                                        Name
                                    </div>
                                    <div className="value">
                                        {
                                            item.name
                                        }
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="key">
                                        Email
                                    </div>
                                    <div className="value">
                                        {
                                            item.email
                                        }
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="key">
                                        Phone
                                    </div>
                                    <div className="value">
                                        {
                                            item.phone
                                        }
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="key">
                                        Website
                                    </div>
                                    <div className="value">
                                        {item.website}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}