import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'

const LevelRouter= ()=>{
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<App/>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default LevelRouter