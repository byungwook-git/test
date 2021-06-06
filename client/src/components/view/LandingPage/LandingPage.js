import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div className="container" style={{ marginTop: 100 }}>
      홈
    </div>
  );
}

export default LandingPage;
