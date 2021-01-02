import React, { useEffect, useState } from "react";
import AddComponent from "../../component/AddComponent";
import Axios from "axios";

const Adds = () => {
  const [addsList, setAddsList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timeout called!");
      Axios.get("http://localhost:3001/getadds").then((response) => {
        console.log(response.data);
        setAddsList(response.data);
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container">
        <div className="divSpacing"></div>
        <h2>Oglasi</h2>
        <div className="divSpacing" />
        {addsList.map((value) => {
          return (
            <>
              <AddComponent
                key={value.id}
                title={value.title}
                description={value.description}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Adds;
