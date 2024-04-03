import { Outlet } from "react-router-dom";
import Header from "../../components/Layout/header";


const Layout = () => {
    return (
        <div className="flex flex-col space-y-[30px] container mx-auto">
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout;