// header button and redux dispatch
import styled from "styled-components";
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {

    const value = useSelector((state) => state); // form: hook
    const dispatch = useDispatch(); // hook request

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

    useEffect(()=>{ // When Change line , execute dispatch( type: line ) & upload
        dispatch({ type: line });
    },[line]);

    return (
            <div className="header">
                <Header>
                    <LineList href="/top"     onClick={() => setLine("top")}>탑</LineList>
                    <LineList href="/jungle"  onClick={() => setLine("jungle")}>정글</LineList>
                    <LineList href="/mid"     onClick={() => setLine("mid")}>미드</LineList>
                    <LineList href="/adc"     onClick={() => setLine("adc")}>원딜</LineList>
                    <LineList href="/support" onClick={() => setLine("support")}>서폿</LineList>
                </Header>
            </div>
    );
};

export default Header;