import React from "react";

const Footer = (props) => {
    return (
        <div className="footer">
            <h1>Total users count:{props.users.length}</h1>
        </div>
    );
};

export default Footer;
