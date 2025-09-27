import './Header.css';
import { Link, Route, Routes,useNavigate } from "react-router-dom";
// import Store from './Store';
// import Store from './Store.js'; // ✅ Correct for default export
import Child1 from './Child1.js';
import { Users } from './Users.js';
import Child2 from './Child2.js';
import { Suspense,lazy } from 'react';

const Home =lazy(()=> import("./Lazyload/Home"));
const About =lazy(()=> import("./Lazyload/Home"));
const Contact =lazy(()=> import("./Lazyload/Home"));
export const Header = () => {
  const Navigate=useNavigate();
  return (
    <>
      <div className="Header">
        <nav className="menuHeader">
          <ul className="UlHeader">
            <li>
              <img
                src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
                alt="apple logo"
                width="60"
                height="40"
              />
            </li>
            <li><Link to="/Store">Store</Link></li>
            <li><Link to="/user">Ipad</Link></li>
            <li>Watch</li>
            <li>Vision</li>
            <li>Airpods</li>
            <li>TV AND HOME</li>
            <li>Entertainment</li>
            <li>Accessories</li>
            <li>Support</li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path={"/Store/*"} element={<Child1 />} />
        <Route path={"/user/*"}element={<Child2/>}/>
       
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      */}
      </Routes>
      <button onClick={()=>Navigate("/Store")}>Navigate</button>
    </>
  );
};
export default Header;
