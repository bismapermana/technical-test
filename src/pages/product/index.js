import React, { useState, useEffect } from "react";
import { API } from "../../config/api";
import { useHistory } from "react-router";

const Product = () => {
  const [form, setForm] = useState({
    name: "",
  });
  const [data, setData] = useState([]);
  const history = useHistory();

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async () => {
    try {
      const response = await API.get("/checklist");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClickDetail = (id) => history.push("/item/" + id);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.post("/checklist", form, config);
      getData();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (id) => {
    try {
      const response = await API.delete("/checklist/" + id);
      console.log(response);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>product</p>
      <input type="text" onChange={handleOnChange} name="name" />
      <button onClick={handleOnSubmit}>submit</button>
      <p>Data</p>
      {data.map((item) => (
        <div style={{ display: "flex" }}>
          <p>{item.name}</p>
          <button onClick={() => deleteData(item.id)}>delete</button>
          <button onClick={() => handleOnClickDetail(item.id)}>detail</button>
          {item.checklistCompleteStatus !== false ? <p>false</p> : <p>true</p>}
        </div>
      ))}
    </div>
  );
};

export default Product;
