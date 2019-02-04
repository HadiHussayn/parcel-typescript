import * as React from "react";
// import First from "./components/header";
// import Footer from "./components/footer";
// import Sidebar from "./components/sidebar";
// import Todos from "./components/todo";
import Form from "./components/form/form"

export default () => {
  return (
    <div className='todo'>
      {/* <First /> */}
      <div style = {{display:"flex",}}>
      {/* <Sidebar /> */}
      {/* <Todos /> */}
      <Form/>
    
      </div>
      {/* <Footer /> */}
    </div>
  );
};
