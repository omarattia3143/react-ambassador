import React, {useState} from "react";
import {connect} from "react-redux";
import {User} from "../models/user";
import {Link, Navigate} from "react-router-dom";
import axios from "axios";

const Nav = (props: { user: User }) => {
    const [redirect, setRedirect] = useState(false);
    const logout = async () => {
        await axios.post("/logout")
        setRedirect(true);
    };

    if (redirect){
        return <Navigate to="/login"/>
    }

    let menu;

    if (props.user?.id) {
        menu = (
            <div className="col-md-3 text-end">
                <a onClick={logout} href="/login" className="btn btn-outline-primary me-2">Logout</a>
                <Link to="/profile" className="btn btn-primary">{props.user.first_name} {props.user.last_name}</Link>
            </div>
        );
    } else {
        menu = (
            <div className="col-md-3 text-end">
                <Link to="/login" className="btn btn-outline-primary me-2">
                    Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                    Sign-up
                </Link>
            </div>
        );
    }

    return (
        <div className="container">
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <a href="#" className="nav-link px-2 link-secondary">
                            Frontend
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-2 link-dark">
                            Backend
                        </a>
                    </li>
                </ul>
                {menu}

            </header>
        </div>
    );
};

export default connect((state: { user: User }) => ({
    user: state.user,
}))(Nav);
