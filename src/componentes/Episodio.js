import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Episodio = () => {
    let disp = useDispatch();


    let episod = useSelector(state => state.episodios);
    console.log(episod);
    const epirow = episod.map((episod, i) => (
        <tr key={i}>
            <td>{episod}</td>
        </tr>
    ))

    return (
        <div>

            <div>
                <table border="1">
                    <thead>

                        <tr>

                            <th style={{ display: "flex", justifyContent: "Center" }}>
                                Episodios</th>

                        </tr>

                    </thead>
                    <tbody>
                        {epirow}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Episodio