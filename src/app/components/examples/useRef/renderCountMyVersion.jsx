import React, { useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const [renderCount, setRenderCount] = useState(0)
    const toggleOtherState = () => {
        setRenderCount(prevState => prevState+1)
    }

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>

            <p>render count: {renderCount}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Toggle other state</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
