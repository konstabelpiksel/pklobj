import { useState } from 'react';
import Item from './Item';

export default function Unit({ title, unitid }){

    const [itemList, setItemList] = useState([]);
    
    const addItem = (ev) => {
        setItemList(itemList.concat(<Item key={itemList.length} id={`${unitid}-item-${itemList.length}`}/>));
    }

    return(
        <div style={{backgroundColor: '#c36', padding: '10px', marginBottom: '10px', border: '1px solid #000'}}>
            <h2>Unit ({unitid})</h2>
            <h3>Teks</h3>
            <textarea id="teks"></textarea>
            <br/>
            <button onClick={addItem}>Add Item</button>

            {itemList}
        </div>
    )
}