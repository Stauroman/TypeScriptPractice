import React from "react";
import {useHistory} from "react-router-dom"
export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h4>Сделал Александр Николаев</h4>
            <button className="btn" onClick={()=>history.push("/")}>К списку дел</button>
        </>
    )
}