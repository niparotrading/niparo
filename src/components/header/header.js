import React from "react";
import "./header.css";
import { Navbar, Link, Image, Popover, Text, NavbarMenuToggle, NavbarContent, NavbarBrand } from "@nextui-org/react";
import Logo from '../../assets/Logo.png'
import LinkedIn from '../../assets/linkedin2.png'

function Header() {

    const items = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Opportunities', href: '/opportunities' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    var active = window.location.pathname

    return (
        <Navbar className="navbar" variant="static" shouldHideOnScroll={false}>
            <Navbar.Toggle color="inherit" showIn="sm" />
            <Navbar.Brand hideIn="sm" css={{ '&:hover': { transform: 'scale(1.25)' } }}>
                <Image css={{
                    width: '40px',
                    height: '40px',
                    transitionDuration: '0.5s',
                    transitionProperty: 'transform',
                    '&:hover': {
                        cursor: 'pointer',
                        transform: 'rotate(360deg)',
                    }
                }} src={Logo}
                    onClick={() => {
                        window.location.pathname = ''
                    }} />
            </Navbar.Brand>
            <Navbar.Content activeColor={"secondary"} hideIn="sm" variant="highlight-rounded">
                {items.map((item, index) => {
                    return (
                        <Navbar.Link key={index} isActive={item.href === active.substring(0, item.href.length + 1)} href={item.href}
                            css={{
                                // fontFamily: 'MEregular'
                            }}>
                            {item.name}
                        </Navbar.Link>
                    )
                })}

            </Navbar.Content>
            <Navbar.Content showIn={'sm'}>
                <Image css={{
                    width: '40px',
                    height: '40px'
                }} src={Logo} />
            </Navbar.Content>

            <Navbar.Content>
                <Link className="ig-link" target="_blank" href="https://www.instagram.com/aba_ashoka/">
                    <Image css={{
                        width: '40px',
                        height: '40px'
                    }} src={LinkedIn} />
                </Link>
            </Navbar.Content>

            <Navbar.Collapse showIn={"sm"}>
                {items.map((item, index) => {
                    return (
                        <Navbar.CollapseItem key={index} isActive={item.href === active.substring(0, item.href.length + 1)}>
                            <Link href={item.href}
                                css={{
                                    minWidth: "100%",
                                }}
                            >
                                {item.name}
                            </Link>
                        </Navbar.CollapseItem>)
                })}

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;