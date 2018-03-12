import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './Header.css';

export default class Header extends React.Component {

    showDrop(){
        console.log("Hello")
        document.getElementById("myDropDown").classList.toggle("show");
    }

    render() {
        return (
            <div>
                <Navbar className="nav-bar" brand='React with Giphy API' right>
                    <NavItem href='https://github.com/AaronA05/match-react'>GitHub Link</NavItem>
                    <NavItem href='https://developers.giphy.com/docs/'>Giphy API Docs</NavItem>
                </Navbar>
            </div>
        )
    }
}
