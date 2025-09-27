import { Route, Routes,Link, useNavigate } from "react-router-dom";
import Child2 from "./Child2";
// import PropTypes from "Prop-types";
function Child1(){
  const Navigate=useNavigate();
return(
  <>
  {/* <h1>{props.name},{props.age} hello</h1> */}
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLkRj4BQHwAlmPFGNmH6lbD3H_Hkze8gjrg&s"></img><br/>
  <nav>
  <Link to="user"><button>go to ipad</button></Link>
  </nav>
  <Routes>
    <Route>
      <Route path={"user/*"} element={<Child2 />} />
    </Route>
  </Routes>

  </>
)
 

}

export default Child1;