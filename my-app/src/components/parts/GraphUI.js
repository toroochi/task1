import './style.css';
import React, { useState } from 'react';



function Graph() {
    const [rows, setRows] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    const [cols, setCols] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    
    
    return(
        <>
            <h1>12*12掛け算表</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        {rows.map((value) => (
                        <th scope="col">{value}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {cols.map((value) => (
                        <tr>
                            <th scope='row'>{value}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default Graph;
