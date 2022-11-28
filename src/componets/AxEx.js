import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

const AxEx = (props) => {
  const lineValue = useSelector((state) => state); // form: hook
  const url = "http://10.150.150.2:5000/cham_list";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data);
        console.log("get seccess!!!");
        //            console.log(data);
      })
      .catch(function (error) {
        console.log("faild");
      });
  }, []);

  let rt = [];

  data.map((pro) => {
    if (pro.line_name == lineValue) {
      // pro.line_name == props.line
      rt.push(
        <div id="cham-list">
          <span id="cham-img">
            <img
              src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${pro.cham_id}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_64&v=1668401198263`}
              alt="champion-img"
            />
          </span>
          <span id="cham-name">{pro.cham_name}</span>
          <span id="cham-tier">{pro.tier}티어</span>
          <span id="cham-win">승률 : {pro.win_rate}%</span>
          <span id="cham-ban">밴률 : {pro.ban_rate}%</span>
          <span id="cham-pick">픽률 : {pro.pick_rate}%</span>
        </div>
      );
    }
  });
  return rt;
};
export default AxEx;
