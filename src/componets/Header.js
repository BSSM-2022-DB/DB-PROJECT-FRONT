// header button and redux dispatch
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hover } from "@testing-library/user-event/dist/hover";
const Header = () => {
  const value = useSelector((state) => state); // form: hook
  const dispatch = useDispatch(); // hook request

  const Header = styled.div`
    display: flex;
    justify-content: center;
  `;
  const LineList = styled.button`
    margin-top: 50px;
    margin-bottom: 70px;
    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 10px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 80px;
    width: 200px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 20px;
    font-weight: bold;
    &:focus {
      box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    }
    &:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      transform: translateY(-2px);
    }
    &:active {
      box-shadow: #d6d6e7 0 3px 7px inset;
      transform: translateY(2px);
    }
  `;

  const [line, setLine] = useState("");

  useEffect(() => {
    // When Change line , execute dispatch( type: line ) & upload
    dispatch({ type: line });
  }, [line]);

  return (
    <div className="header">
      <Header>
        <LineList href="/top" onClick={() => setLine("top")}>
          탑
        </LineList>
        <LineList href="/jungle" onClick={() => setLine("jungle")}>
          정글
        </LineList>
        <LineList href="/mid" onClick={() => setLine("mid")}>
          미드
        </LineList>
        <LineList href="/adc" onClick={() => setLine("adc")}>
          원딜
        </LineList>
        <LineList href="/support" onClick={() => setLine("support")}>
          서폿
        </LineList>
      </Header>
    </div>
  );
};

export default Header;
