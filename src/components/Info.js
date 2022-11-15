import React from "react"
import HeadShot from "../images/pic.jpg"
import { BiMailSend } from "react-icons/bi"

export default function Info() {
    return (
        <div className="Info">
            <img src={HeadShot} alt="friendly web dev with glasses" className="headshot" />
            <div className="text">
                <h3>Kristina Glinoga</h3>
                <p id="title">Frontend Developer</p>
                <p id="website">kglinoga.website</p>
                <button id="email">
                    <BiMailSend />
                    <p>Email</p>
                </button>
            </div>
        </div>
    )
}
