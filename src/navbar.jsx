import { Link } from "react-router-dom";
import { useContext } from "react";
import { target_subject } from "./App";

function Navbar() {
  const { showparamiter, setshowparamiter } = useContext(target_subject);
  const {font}=useContext(target_subject)
  return (
    <div className="navcontiner">
      <h2 id="title">حكمة</h2>
      <nav>
        <Link to="/" className="link">الرئيسية</Link>
        <Link to="/random_quotes" className="link">مختارات الأقوال</Link>
        <Link to="/faverit" className="link">المفضلة</Link>
        <button className="link" style={{fontFamily:font}} onClick={()=>{setshowparamiter(!showparamiter)}}>إعدادات</button>
    </nav>
    </div>
    
  )
}

export default Navbar;
   