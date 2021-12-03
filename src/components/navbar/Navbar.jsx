import React,{useState, useEffect} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css';

const Menu = ()=>(
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [navbar, setNavbar] = useState(false)

    useEffect(() => {
        const windowhandler = ()=>{
            if(window.scrollY >= 100){
                return setNavbar(true)
            } else{
                return setNavbar(false)
            }
        }
        document.addEventListener("scroll", windowhandler)
    }, [])

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>

            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button"> Sign up</button>
            </div>
            
            <div className="gpt3__navbar-menu">
                {
                    toggleMenu
                    ? <RiCloseLine size="2em" color="#fff" onClick={()=>setToggleMenu(false)} className="menu-close" />
                    : <RiMenu3Line size="2em" color="#fff" onClick={()=>setToggleMenu(true)} className="menu-open" />
                }
                {
                    toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <Menu />
                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button" > Sign up</button>
                            </div>
                        </div>
                    )
                }
                
            </div>
            <div className={navbar?"blur":""}></div>
        </div>
    )
}

export default Navbar
