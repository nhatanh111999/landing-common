import React, { useState } from 'react';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Button from '@mui/material/Button';

const menu = [
    {
        Id: 1,
        Title: "Home"
    },
    {
        Id: 2,
        Title: "About Us"
    },
    {
        Id: 3,
        Title: "Contact"
    },
    {
        Id: 4,
        Title: "Service"
    },
    {
        Id: 5,
        Title: "Features"
    },
    {
        Id: 6,
        Title: "Project"
    }
]

const Header = () => {
    const [sticky, setSticky] = useState('')
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
                    <div className='icon-menu'/>
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