import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";

const Main = () => {
    return (
        <>
        <NavigationBar/>
        <Outlet/>
            
        </>
    );
};

export default Main;