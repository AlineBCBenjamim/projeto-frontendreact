import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import CarrinhoPage from "../pages/CarrinhoPage";
import Footer from "../components/Footer";


export default function Router (){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/carrinho" element={<CarrinhoPage/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}