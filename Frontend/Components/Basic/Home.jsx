import React from "react";

function Home(props) {
  return (
    <>
      <center>
        {" "}
        <h2> Library Application!!</h2>
        <img
          src={require("../static/Images/library.jpg")}
          width="700"
          height="430"
        />
      </center>
    </>
  );
}

export default Home;
