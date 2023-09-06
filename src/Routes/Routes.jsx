import {createBrowserRouter} from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../pages/Home/Home";
import App from "../App";
import User from "../Dashboard/User";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'app',
            element:<App/>
        },
        {
            path:'user',
            element:<User/>,
            loader:()=>fetch('http://localhost:5000/user')
        }

      ]
    },
  ]);

export default router;