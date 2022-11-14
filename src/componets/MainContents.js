import React, {useEffect, useState} from 'react';
const MainContents = (props) => {
    let propsData = props.data;
    return (
            <div>
                This is MainContents!!!
                {propsData}
            </div>
    );
}

export default MainContents