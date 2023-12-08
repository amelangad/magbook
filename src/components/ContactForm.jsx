"use client"

import React, { useState } from 'react'
import Button from '../components/Button'

export default function ContactForm() {

    const [email, setEmail] = useState();
    const [text, setText] = useState();
    const [errMsg, setErrMsg] = useState(null);

    const sendForm = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/send', {
                body: JSON.stringify({ email, text }),
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if (res.ok) {
                console.log(res)
                setText('')
                setEmail('')
                setErrMsg('Email was send');
                setTimeout(function() {setErrMsg('')}, 2000)
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }

    return (
        <div id="contact" className=" bg-[#101230] w-full h-[80vh] flex justify-center items-center flex-col font-roboto py-20">
            <h1 className="w-3/4 lg:w-1/3 text-white text-3xl py-10 bg-[#e0e1e907]  flex items-center justify-center">Do you have any questions? Contact us</h1>
            <form className="w-3/4 lg:w-1/3 min-h-[40vh] p-5 bg-[#e0e1e907] flex flex-col justify-center items-center gap-5" onSubmit={sendForm}>
                <input type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-3/4 h-10 outline-none p-3"
                    placeholder="Your email adress">
                </input>
                <textarea
                    value={text}
                    name="email"
                    onChange={(e) => setText(e.target.value)}
                    placeholder="How can we help You?"
                    className="w-3/4 h-[150px] p-3 outline-none resize-none"></textarea>
                <Button type='submit' text='Send' />
                {errMsg ? <p className="text-white text-lg">{errMsg} </p> : null}

            </form>
        </div>
    )
}