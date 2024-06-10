import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Edit from './component/Edit'
import Detail from './component/Detail'

const LevelRouter= ()=>{
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<App/>}></Route>
                <Route path='/edit' element={<Edit/>}></Route>
                <Route path='/detail/:no' element={<Detail/>}/>

                
            </Routes>
        </BrowserRouter>
    )
}

export default LevelRouter