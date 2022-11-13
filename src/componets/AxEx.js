import React, {useEffect, useState} from 'react';
import axios from 'axios'
const AxEx = () => {
    const url = "http://localhost:8080/cham_list";
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(function(response) {
            setData(response.data);
            console.log("성공");
            console.log(data);
        }).catch(function(error) {
            console.log("실패");
            });
    },[]);

    return (
            <div className="App">
      <div>
          {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default AxEx;