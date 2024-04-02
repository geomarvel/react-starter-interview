import { useEffect, useState } from "react";
import { Link, Router, useLocation } from "react-router-dom";

const Header = () => {

    const [activePath, setActivePath] = useState("");
    const route = useLocation();
    
    useEffect(() => {
        setActivePath(route.pathname.split("/")[1]);
    }, [route.pathname])

    return (
        <div className="navbar">
            <Link to='/'>
                <div className={`navbar-item p-2 ${activePath === "" && 'active'}`}> Dashboard </div>
            </Link>
            <Link to='/monitoring' >
                <div className={`navbar-item p-2 ${activePath === "monitoring" && 'active'}`}> Monitoring </div>
            </Link>
            <Link to='/documents'>
                <div className={`navbar-item p-2 ${activePath === "documents" && 'active'}`}> Documents </div>
            </Link>
        </div>
    )
}

export default Header;