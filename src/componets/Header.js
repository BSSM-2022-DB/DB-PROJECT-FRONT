import styled from "styled-components";
const Header = () => {

    const Header = styled.div`
        display: flex;
        justify-content: center;
    `;
    const LineList = styled.a`
        max-width: 200px;
        max-height: 100px;
        width: 100%;
        height: 100px;
        text-align: center;
        color: white;
        background-color: #27C4A2;
    `;

    return (
            <div className="header">
                <Header>
                    <LineList href="/top">탑</LineList>
                    <LineList href="/jungle">정글</LineList>
                    <LineList href="/mid">미드</LineList>
                    <LineList href="/adc">원딜</LineList>
                    <LineList href="/support">서폿</LineList>
                </Header>
            </div>
    );
};

export default Header;