import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () =>
    (
        <nav>
            <div className="nav-wrapper blue darken-2 px1" >
                <a href="/" className="brand-logo">React + typeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">Список дел</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Информация</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ws">Тест вебсокетов</NavLink>
                    </li>
                    <li>
                        <NavLink to="/table">Таблица Aprbot</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )