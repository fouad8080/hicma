import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
        <Link to="/" className="link">الرئيسية</Link>
        <Link to="/random_quotes" className="link">مختارات الأقوال</Link>
    </nav>
  );
}

export default Navbar;
   