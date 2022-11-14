import styled from "styled-components";
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
    const lineCheck = (params , e) => {
        console.log('hi')
    }
    return (
            <div className="header">
                <Header>
                    <LineList href="/top" value="탑" onClick={(e) => {lineCheck(params,e)}}>탑</LineList>
                    <LineList href="/jungle" value="정글" onClick={lineCheck}>정글</LineList>
                    <LineList href="/mid" value="미드" onClick={lineCheck}>미드</LineList>
                    <LineList href="/adc" value="원딜" onClick={lineCheck}>원딜</LineList>
                    <LineList href="/support" value="서폿" onClick={lineCheck}>서폿</LineList>
                </Header>
            </div>
    );
};

export default Header;