import styled from "styled-components";
import {useEffect, useState} from "react";
const Header = () => {
    const Header = styled.div`
    display: flex;
    justify-content: center;
    `;
    const LineList = styled.button`
    max-width: 200px;
    max-height: 100px;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
    background-color: #27C4A2;
    `;
    const [line,setLine] = useState("");
    async function lineCheck (params , e) {
        switch(params) {
            case "Top":
                console.log("TOP");
                await setLine("탑");
                console.log(line);
                break;
            case "Jungle":
                console.log("Jungle");
                setLine("정글");
                console.log(line);
                break;
            case "Mid":
                console.log("MID");
                setLine("미드");
                console.log(line);
                break;
            case "Adc":
                console.log("ADC");
                setLine("원딜");
                console.log(line);
                break;
            case "Support":
                console.log("SUPPORT");
                setLine("서폿");
                console.log(line);
                break;
            default:
                console.log(params);
        }
    }
    return (
            <div className="header">
                <Header>
                    <LineList href="/top" value="탑" onClick={(e) => {lineCheck("Top",e)}}>탑</LineList>
                    <LineList href="/jungle" value="정글" onClick={(e) => {lineCheck("Jungle",e)}}>정글</LineList>
                    <LineList href="/mid" value="미드" onClick={(e) => {lineCheck("Mid",e)}}>미드</LineList>
                    <LineList href="/adc" value="원딜" onClick={(e) => {lineCheck("Adc",e)}}>원딜</LineList>
                    <LineList href="/support" value="서폿" onClick={(e) => {lineCheck("Support",e)}}>서폿</LineList>
                </Header>
            </div>
    );
};

export default Header;