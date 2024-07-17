const { default: Cabecera } = require("components/Cabecera/Cabecera");
const { default: Pie } = require("components/Pie");
const { Outlet } = require("react-router-dom");


function PaginaBase() {
    return (
        <main>
            <Cabecera/>
            <Outlet/>
            <Pie/>
        </main>
    )
}

export default PaginaBase;