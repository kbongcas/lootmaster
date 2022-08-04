import styled from 'styled-components'
import { useContext } from 'react';
import {Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as PotionLogo } from '../assets/potion.svg'
import { UserContext } from '../context/user-context';
                    //{currentUser && <div> Hello {currentUser} </div>}

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    return (
        <Fragment>
            <NavigationBar>
                <LogoLink to="/">
                    <Logo className="Logo"/>
                </LogoLink>
                <UserName>
                    { currentUser && <div>Hello Kevin</div> }
                </UserName>
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
                    <NavLink to="/signin">
                        Sign in
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

const UserName = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .div{
        padding: 10px 15px;
    }
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

