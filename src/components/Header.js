import React from "react";


function Header(props) {
    //console.log(props)
    //console.log(title)
    return (
        <header>
            <h1> {props.name} </h1>
        </header>
    );
}

export default Header;