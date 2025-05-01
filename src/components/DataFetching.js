import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const APIComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Unauthorized: No token found");
      return;
    }

    axios
      .get("http://localhost:5000/posts", {
        headers: { Authorization: `Bearer ${token}` }, // Send token in headers
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="title">Fetched Data</h2>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default APIComponent;
