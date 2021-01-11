import React, { useEffect, useState } from "react";
import AddComponent from "../../component/AddComponent";
import Axios from "axios";

const Adds = () => {
  const [addsList, setAddsList] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/getadds").then((response) => {
      console.log("Fetch adds trough api...");
      setAddsList(response.data);
    });
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
                id={value.id}
                title={value.title}
                description={value.description}
                picture={value.picture}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Adds;
