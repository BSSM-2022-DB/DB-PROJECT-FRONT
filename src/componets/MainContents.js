import React, {useEffect, useState} from 'react';
const MainContents = (props) => {
    let propsData = props.data;
    return (
            <div>
                {propsData}
            </div>
            );
}

export default MainContents