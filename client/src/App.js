import Home from './routes/home.component'
import Items from './routes/items.component'
import Navigation from './routes/navigation.component';
import Authenticated from './routes/authenticated.component';
import Signup from './routes/signup.component';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';

const App = () => (
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home />}/>
            <Route path='items' element={<Items />}/>
            <Route path='auth' element={<Authenticated />}/>
            <Route path='signup' element={<Signup />}/>
        </Route>
    </Routes>
);

export default App;
