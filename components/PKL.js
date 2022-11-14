import { useState } from 'react';
import Unit from './Unit';

export default function PKL({title}){

    const [unitList, setUnitList] = useState([]);

    const addUnit = (ev) => {
        setUnitList(unitList.concat(<Unit key={unitList.length} unitid={`${title}-unit-${unitList.length}`}/>));
    }

    return(
        <div style={{backgroundColor: '#3ee', margin: '10px', padding: '10px'}}>
            <h1>{title}</h1>
            <button onClick={addUnit}>Add Unit</button>
            <br/>

            {unitList}

        </div>
    )
}