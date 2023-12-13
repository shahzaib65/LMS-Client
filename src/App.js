import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";



import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddCourse from "./components/course/addCourse";
import Layout from "./components/Layout";
import StudentsList from "./components/students/StudentsList";

import Payments from "./components/payment/Payments";
import Certificates from "./components/certificate/Certificates";
import { FAQS } from "./components/faq/FAQS";
import Contact from "./components/contactus/Contact";
import { DetailPage } from "./components/detailPage/DetailPage";

import { createContext, useReducer } from "react";

import {initialState, reducer} from "../src/reducer/useReducer"


export  const UserContext = createContext();
const App =()=> {
  const[state,dispatch] = useReducer(reducer,initialState)
  
  
  return (
    
  <>
    <UserContext.Provider value={{state,dispatch}}>
     <Router>
     <NavBar/>
     <Routes>
       <Route exact path="/" element={<SignIn/>}/>
       <Route exact path="/signup" element={<SignUp/>}/>
       <Route exact path="/faq" element={<FAQS/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/course/:id" element={<DetailPage/>}/>
       <Route exact path="/home" element={<Home/>}/>
     </Routes>
     </Router>
     </UserContext.Provider>
    </>
  );
}

export default App;


//  <Layout>
//         <Routes>
//           {/* <Route exact path="/" element={<Home/>}/>
     
//       <Route exact path="/signup" element={<SignUp/>}/>
//       <Route exact path="/contact" element={<Contactus/>}/> */}
//           <Route exact path="/add" element={<AddCourse />} />
//           <Route exact path="/student" element={<StudentsList/>}/>
//           <Route exact path="/courses" element={<CoursesList/>}/>
//           <Route exact path="/signin" element={ <SignIn/>}/>
//           <Route exact path="/payment" element={ <Payments/>}/>
//           <Route exact path="/certificate" element={<Certificates/>}/>
//         </Routes>
//       </Layout>