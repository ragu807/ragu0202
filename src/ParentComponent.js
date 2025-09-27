import Child1 from "./Child1";
import React from "react";
function Parent(){
  return(
    <>
    <Child1 name="raguram" age={25} />
    <Child1 name="lotus" age={20} />
    <p>hello store</p>
    <p>this is parent</p>
    </>
  )
}
export default Parent;