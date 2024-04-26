import React, { useState } from 'react'
import {DragDropContext} from 'react-beatiful-dnd'

export default function KanbanBord() {
    const [completed, setCompleted] = useState([]);
    const [Incomplete, setIncomplete] = useState ([]);
    




  return(
    <DragDropContext>
        <h2 style={{textAlign: 'center'}}>Progress</h2>
        
        <div
            style={{
                display: 'flex',
                justifyContent: 'space- between',
                AlignItems: 'center',
                felxDirection: 'row',
            }}
            >
            

             

        </div>
    </DragDropContext>


  );
}
