import React, {useEffect, useState} from 'react';
import axios from 'axios'
const AxEx = (props) => {
    const url = "http://localhost:8080/cham_list";
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(function(response) {
            setData(response.data);
            console.log("성공");
//            console.log(data);
        }).catch(function(error) {
            console.log("실패");
            });
    },[]);

    let rt =[];

    data.map((pro) => {
        if ( pro.line_name == props.line ) {
            rt.push(
                    <div id="cham-list">
                        <span id="cham-name">
                            <img
                                src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${pro.cham_id}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_64&v=1668401198263`} alt="champion-img" />
                                {pro.cham_name}
                            </span>
                        <span id="cham-tier">{pro.tier}</span>
                        <span id="cham-win">{pro.win_rate}%</span>
                        <span id="cham-ban">{pro.ban_rate}%</span>
                        <span id="cham-pick">{pro.pick_rate}%</span>
                    </div>
                    );
        }});
    return rt;
}
export default AxEx;