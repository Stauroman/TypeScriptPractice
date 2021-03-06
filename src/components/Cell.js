import React, {useState} from "react";

export const Cell = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [valueInCell, setValueInCell] = useState('');
    const handleChange = (e) => {
        setValueInCell(e.target.value)
    }
// определяем цвет фона
    const backgroundColorValue = () => {
        let color
        switch (true) {
            case valueInCell > 1.5 :
                color = 'green';
                break;

            case valueInCell < -1.5 :
                color = 'red';
                break;

            case valueInCell == 0 :
                color = 'white';
                break;

            default:
                color = 'yellow';

        }
        return color
    }
    // const backgroundColorValue = () => {
    //     let color
    //     if (valueInCell > 1.5) {
    //         color = 'green'
    //     } else if (valueInCell < -1.5) {
    //         color = 'red'
    //     } else if (valueInCell === 0) {
    //         color = 'white'
    //     } else {
    //         color = 'yellow'
    //     }
    //     return color
    // }
    const style = {
        backgroundColor: `${backgroundColorValue()}`,
    }
// активируем по двойному клику


    return (<>
            <td id={props.id}
                style={style} onDoubleClick={() => {
                setIsDisabled(prevState => false)
            }}>
                <input
                    type='text'
                    disabled={isDisabled}
                    value={valueInCell}
                    onChange={handleChange}
                />
            </td>
            {/*<button onDoubleClick={() => {*/}
            {/*    {*/}
            {/*        setIsDisabled(prevState => true)*/}
            {/*    }*/}
            {/*    console.log(isDisabled)*/}

            {/*}}>log*/}
            {/*</button>*/}
        </>
    )
}