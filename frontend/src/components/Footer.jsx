import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div>

            {/* ---- Left Section ---- */}
            <div>
                <img src={assets.logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/* ---- Center Section ---- */}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>

            </div>

            {/* ---- Right Section ---- */}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+6013-4567899</li>
                    <li>appointmentadmin@gmail.com</li>
                </ul>
            </div>

        </div>

        {/* ---- Copyright Text ---- */}
        <div>
            <hr />
            <p>Copyright © 2025 AppointmentSystem - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer