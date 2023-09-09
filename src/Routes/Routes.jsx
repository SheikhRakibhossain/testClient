import {createBrowserRouter} from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../pages/Home/Home";
import App from "../App";
import User from "../Dashboard/User";
import Update from "../Dashboard/Update";
import Services from "../pages/Services/Services";
import UpdateServices from "../pages/Services/UpdateServices/UpdateServices";


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
            path:'/app',
            element:<App/>
        },
        {
            path:'/user',
            element:<User/>,
            loader:()=>fetch('http://localhost:5000/user')
        },
        {
          path:'/update/:id',
          element:<Update/>,
          loader:({params})=>fetch(`http://localhost:5000/user/${params.id}`)
        },
        {
          path:'/services',
          element:<Services/>
        },
        {
          path:'/updateservices/:id',
          element:<UpdateServices/>,
          loader:({params})=>fetch(`http://localhost:5000/updateservices/${params.id}`)
        }

      ]
    },
  ]);

export default router;