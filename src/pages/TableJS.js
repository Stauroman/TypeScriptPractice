import React from "react";
import {Cell} from "../components/Cell";

export const Table = () => {

    //const arr = [[x,y][0,1]];

    // const row = () => {
    //     for (let i = 0; i < 20; i++) {
    //
    //     }
    // }
    const matrix = (rows, columns) => {

        let arr = [];
        for (let i = 0; i < rows; i++) {
            arr[i] = [];
            for (let j = 0; j < columns; j++) {
                arr[i][j] = [i, j];
            }
        }
        return arr
    }
    const myMatrix = matrix(20, 20)
    return (
        <>
            <table>
                <tbody>
                {myMatrix.map(e => <tr key={e}>{e.map(subEl => <Cell key={subEl} id={subEl}/>)}</tr>)}
                </tbody>
            </table>
        </>)
}
// function matrixArray(rows,columns){
//     var arr = new Array();
//     for(var i=0; i<rows; i++){
//         arr[i] = new Array();
//         for(var j=0; j<columns; j++){
//             arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
//         }
//     }
//     return arr;
// }
// var myMatrix = matrixArray(3,3);