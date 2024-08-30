 import { Outlet } from "react-router-dom";
import Top from "./Pages/Top";
const Layout=()=>{
    return(
       <>
       <Top/>
       <Outlet/>
       
      
       </>
    )
 }
 export default Layout;