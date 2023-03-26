import React, { useState } from 'react';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Button from '@mui/material/Button';

const menu = [
    {
        Id: 1,
        Title: "Home",
        Image: "home.png"
    },
    {
        Id: 2,
        Title: "About Us",
        Image: "about.png"
    },
    {
        Id: 3,
        Title: "Contact",
        Image: "contact.png"
    },
    {
        Id: 4,
        Title: "Service",
        Image: "service.png"
    },
    {
        Id: 5,
        Title: "Features",
        Image: "feature.png"
    },
    {
        Id: 6,
        Title: "Project",
        Image: "project.png"
    }
]

const Header = () => {
    const [sticky, setSticky] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    //scroll
    const onScrollHeader = () => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    setSticky("sticky")
                }
                else {
                    setSticky("")
                }
            })
        }
    }
    onScrollHeader()

    const onClickOpenMenu = () => {
        setIsOpen(true)
    }

    const onClickCloseMenu = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <div className={`${sticky} Header `}>
                <div className='container'>
                    <div className='logo'>
                        Logo
                    </div>
                    <div className="navbar">
                        {menu.map((item, idex) => {
                            return (
                                <div key={idex} className={`${inter.className} item`}>
                                    {item.Title}
                                </div>
                            )
                        })}
                    </div>
                    <div className={`icon-open ${isOpen ? 'active' : ''}`}>
                        <img onClick={() => onClickOpenMenu()} src='/icons/menu.png'  url="menu" />
                    </div>
                </div>
                <div className={`side-bar ${isOpen ? 'active' : ''}`}>
                    <div className='icon-close'>
                        <img onClick={() => onClickCloseMenu()} src='/icons/cancel.png' />
                    </div>
                    <div className='menu-sidebar'>
                        {menu.map((item, idex) => {
                            return (
                                <a key={idex} onClick={() => onClickCloseMenu()} href={`# ${item.Title}`}>
                                    <div className='icon-item'>
                                        <img src={`/icons/${item.Image}`} url="icon-home" />
                                    </div>
                                    <div className={`${inter.className} item`}>
                                        {item.Title}
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='Banner'>
                <div className='container'>
                    <div className='grid-container'>
                        <div className='grid-item item-left'>
                            <div className='h1'>
                                Hello,
                            </div>
                            <div className='h2'>
                                We Help You To Boost Your Business
                            </div>
                            <div className='content-banner'>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequinesciunt.
                            </div>
                            <Button className='button-banner' variant="contained" size="medium">
                                Get Started!
                            </Button>
                        </div>
                        <div className='grid-item item-right'>
                            <img src='images/image-banner.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Header;