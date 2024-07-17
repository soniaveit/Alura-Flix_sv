import GlobalContextProvider from "context/GlobalContext";
import NuevoVideo from "../pages/NuevoVideo/NuevoVideo";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase/PaginaBase";


const { default: Inicio } = require("pages/Inicio");
// const { default: NuevoVideo} = require("pages/NuevoVideo");

const { BrowserRouter, Route, Routes } = require("react-router-dom");

function AppRoutes(){
    return(
        <GlobalContextProvider> 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase/>}>
                        <Route index element={<Inicio/>}></Route>
                        <Route path="NuevoVideo" element={<NuevoVideo/>}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContextProvider>
    )
}

export default AppRoutes