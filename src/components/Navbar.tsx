import React from "react";

export const Navbar: React.FC = () =>
    (
        <nav>
            <div className="nav-wrapper blue darken-2 px1" >
                <a href="/" className="brand-logo">React + typeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="/">Список дел</a>
                    </li>
                    <li>
                        <a href="/">Информация</a>
                    </li>

                </ul>
            </div>
        </nav>
    )