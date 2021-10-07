import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
  /*
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
      });
    });
    */
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> setUser(res.data))
  }, []);
  return (
    <div>
      <table>
        {user.map((item, i) =>  (
          <tr key={i}>
            <td>{item.userId}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
