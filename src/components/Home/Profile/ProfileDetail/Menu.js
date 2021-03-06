import React from 'react'

export const Menu = () => (
    <nav className="menu">
        <ul>
            <a href="">
                <li>
                    <ion-icon name="logo-octocat"></ion-icon>
                    <p>Home</p>
                </li>
            </a>
            <a href="">
                <li>
                    <ion-icon name="heart"></ion-icon>
                    <p>Matches</p>
                </li>
            </a>
            <a href="">
                <li>
                    <ion-icon name="help-buoy"></ion-icon>
                    <p>Help</p>
                </li>
            </a>
            <a href="#">
                <li>
                    <ion-icon name="Close"></ion-icon>
                    <p>Logout</p>
                </li>
            </a>
        </ul>
    </nav>
)