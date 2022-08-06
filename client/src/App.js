import Home from './routes/home.component'
import Items from './routes/items.component'
import Navigation from './routes/navigation.component';
import Authenticated from './routes/authenticated.component';
import { Routes, Route } from 'react-router-dom'; 
import SignupPage from './pages/signup-page';
import SignInPage from './pages/signin-page';
import './App.css';
import PrivateRoutes from './routes/private-routes';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />} exact="exact">
                <Route path='/' element={<Home />} exact="exact"/>
                <Route path='/items' element={<Items />}/>
                <Route path='/signup' element={<SignupPage />}/>
                <Route path='/signin' element={<SignInPage />}/>
                <Route element={<PrivateRoutes />}>
                    <Route path='auth' element={<Authenticated/>}/>
                </Route>
            </Route>
        </Routes>
    )
};

export default App;
