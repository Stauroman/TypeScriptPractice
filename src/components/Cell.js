import React, {useState} from "react";

export const Cell = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [valueInCell, setValueInCell] = useState(0);
    const handleChange = (e) => {
        setValueInCell(e.target.value)
    }
// определяем цвет фона /сделать свитч кейс
    const backgroundColorValue = () => {
        let color
        if (valueInCell > 1.5) {
            color = 'green'
        } else if (valueInCell < -1.5) {
            color = 'red'
        } else if (valueInCell === 0) {
            color = 'white'
        } else {
            color = 'yellow'
        }
        return color
    }
    const style = {backgroundColor: `${backgroundColorValue()}`,
    }
// активируем по двойному клику


    return (<>
            <td style={style} onDoubleClick={() => {setIsDisabled(prevState => false)}}>
                <input type='text'
                       disabled={isDisabled}
                       value={valueInCell}
                       onChange={handleChange}
                       onFocus={true}


                />
            </td>
            <button onDoubleClick={() => {
                {setIsDisabled(prevState => true)}
                console.log(isDisabled)

            }}>log
            </button>
        </>
    )
}