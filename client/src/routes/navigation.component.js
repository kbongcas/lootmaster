import styled from 'styled-components'
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as PotionLogo } from '../assets/potion.svg'

const Navigation = () => {
    return (
        <Fragment>
            <NavigationBar>
                <LogoLink to="/">
                    <Logo className="Logo"/>
                </LogoLink>
                <NavLinkContainer >
                    <NavLink to="/items">
                        Items
                    </NavLink>
                    <NavLink to="/auth">
                        Auth
                    </NavLink>
                    <NavLink to="/signup">
                        Sign up
                    </NavLink>
                </NavLinkContainer>
            </NavigationBar>
            <Outlet/>
        </Fragment>
    )
}

const NavigationBar = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    border-bottom: 4px solid black;
    background-color: whitesmoke;
`

const LogoLink = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 10px;
`

const Logo = styled(PotionLogo)`
`

const NavLinkContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`







export default Navigation;

