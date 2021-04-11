import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"


const ws = new WebSocket('wss://echo.websocket.org');

export const Wstest: React.FC = () => {

    ws.onopen = (evt) => {
        ws.send("Hello Socket")
        setConnectionStatus("CONNECTED")
    };
    ws.onclose = (evt) => {
        setConnectionStatus("DISCONNECTED")
    };
    ws.onerror = (evt) => {
        setConnectionStatus("CONNECTION FAILED")
    };
    ws.onmessage = (evt) => {
        let newMessage = evt.data;
        setMessages(newMessage)
    };

    const history = useHistory();
    const [connectionStatus, setConnectionStatus] = useState<string>("");
    const [messages, setMessages] = useState<string>("");
    const [messageToSend, setMessageToSend] = useState<string>("");


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageToSend(event.target.value)
    }

    const sendMessage = () => {
        ws.send(messageToSend);
        setMessageToSend("");
    }
    //какие писать зависимости? при каждом ререндере (инпут) отправляется новый запрос и всё ломается пока не придет ответ
    useEffect(() => ws.addEventListener('message', () => {
    }), [])
    return (
        <div>
            <div>
                <h4>websocket test page</h4>
                <button className="btn" onClick={() => history.push("/")}>К списку дел</button>
            </div>
            <div>
                Статус:
                <br/>
                {connectionStatus}
            </div>
            <div>
                Сообщения:
                <br/>
                {messages}
            </div>
            <div>
                <input type="text" onChange={handleChange} value={messageToSend}/>
                <button className="btn" onClick={sendMessage}>отправить</button>
            </div>
        </div>
    )
}



