import Header from "@/Components/Header";
import { Outlet } from "react-router-dom";
import Rodape from "@/Components/Rodape";

const PaginaBase = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Rodape />
        </>
    );
};

export default PaginaBase;