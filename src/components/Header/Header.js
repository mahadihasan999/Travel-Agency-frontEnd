import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div>

            {/* navbar */}

            <nav className="navbar">
                <div className="container-fluid">
                    <p className="logo" >Galaxy Travel Agency</p>

                    <form className="d-flex search-field">
                        <input type="Enter Your serach" placeholder="search area" />
                        <button className="btn" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            {/* tagline */}
            <div className="text">
                <p className="text-center">The 15 Best Places to Travel</p>
            </div>
        </div>
    );
};

export default Header;