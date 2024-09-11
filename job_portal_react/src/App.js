import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const [joblist, setJobList] = useState([]);
  const nameRef = useRef();
  const delnameRef = useRef();
  const cnameRef = useRef();
  const reqRef = useRef();

  const getData = async () => {
    let res = await fetch("http://localhost:8080/list_jobs", { method: "GET" });
    let json = await res.json();
    console.log(json);
    setJobList(json);
  };

  const createJob = async () => {
    let data = {
      name: nameRef.current.value,
      company_name: cnameRef.current.value,
      requirements: reqRef.current.value,
    };
    let res = await fetch("http://localhost:8080/create_jobs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    let json = await res.json();
    console.log(json);
    getData();
  };

  const deleteJob = async () => {
    let name = delnameRef.current.value;

    let res = await fetch(`http://localhost:8080/delete_job?name=${name}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    let json = await res.json();
    alert(json["msg"]);
    getData();
  };

  return (
    <div className="App">
      <div>
        <button onClick={getData}> List The Jobs </button>
      </div>
      <div>
        {joblist.map((obj, index) => {
          return (
            <h3 key={index}>
              <strong>Name : </strong>
              {obj.name}
              <br />
              <strong>Company Name : </strong>
              {obj.comapny_name}
            </h3>
          );
        })}
      </div>
      <div>
        <h1>Create Form</h1>
        <div>
          <input type="name" ref={nameRef} placeholder="Job Name"></input>
        </div>
        <div>
          <input type="name" ref={cnameRef} placeholder="Company Name"></input>
        </div>
        <div>
          <input type="name" ref={reqRef} placeholder="Requirements"></input>
        </div>
        <div>
          <button onClick={createJob}>Add Job</button>
        </div>
      </div>
      <div>
        <div>
          <h2>DELETE FORM</h2>
        </div>
        <div>
          <input type="name" ref={delnameRef} placeholder="Name"></input>
        </div>
        <div>
          <button onClick={deleteJob}>Delete Job</button>
        </div>
      </div>
    </div>
  );
}

export default App;
