import react from 'react';
import './Header.css'

export default function Header(){
    return(
        <header className="mainHeader">
            <nav>
                <a href="#first">Home</a>
                <a href="#second">About</a>
                <a href="#third">Contact</a>
            </nav>
        </header>
    )
}

