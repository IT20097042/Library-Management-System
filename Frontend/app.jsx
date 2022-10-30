import React from "react";
import Navigation from "./components/Basic/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Basic/Home";
import InsertBook from "./Components/Book/InsertBook";
import ViewBooks from "./Components/Book/ViewBooks";
import UpdateBook from "./Components/Book/UpdateBook";
import ViewAuthors from "./Components/Author/ViewAuthors";
import InsertAuthor from "./Components/Author/InsertAuthor";
import UpdateAuthor from "./Components/Author/UpdateAuthor";
import ViewBookData from "./Components/Book/ViewBookData";


function App() {
  return (
    <>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/insertBook" element={<InsertBook/>} />
          <Route path="/insertAuthor" element={<InsertAuthor/>} />
          <Route path="/viewBook" element={<ViewBooks/>} />
          <Route path="/updateBook" element={<UpdateBook/>} />  
          <Route path="/viewAuthor" element={<ViewAuthors/>} />
          <Route path="/updateAuthor" element={<UpdateAuthor/>} />
          <Route path="/dataBook" element={<ViewBookData/>} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
