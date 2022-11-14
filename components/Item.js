import { useState } from 'react';

export default function Item({ title, id }){
    return(
        <div style={{backgroundColor: '#8c6', padding: '10px', marginBottom: '10px', border: '1px solid #000'}}>
            <h3>Item ({id})</h3>
            <h4>Soalan</h4>
            <textarea id="soalan"></textarea>
            <br/>
            <button>Move up</button>
            <button>Move down</button>
            <button>Delete</button>
            <button>Save</button>
            <button>Add scroring guide</button>

        </div>
    )
}