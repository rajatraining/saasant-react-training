import { Collapse } from "@mui/material";
import React from "react";

class MapPractice extends React.Component{

    constructor()
    {
        super();
        this.state= {cars: ['Maruti','Suzuki','Skoda','WolksVegan','Hyundai'],
         animals: [
            { id: 1, animal: "Dog" },
            { id: 2, animal: "Bird" },
            { id: 3, animal: "Cat" },
            { id: 4, animal: "Mouse" },
            { id: 5, animal: "Horse" }
          ]
        } ;


    }

render()
{
    return (
        <div>
            <div>
            <table style={{"border-collapse": "collapse", border: "1px solid #ddd"}}>
                <thead>
                    <th>
                        ID
                    </th>
                    <th>
                        Animal
                    </th>
                </thead>
                <tbody>
                {
                    this.state.animals.map( (animal) =>

                    <tr>
                    <td>{animal.id} </td>
                    <td>{animal.animal}</td>
                    </tr>
                     
                    )
                }


                    
                </tbody>
            </table>


            {this.state.cars.map( (items,index) => 
                <li key={index}> {index} {items}</li>
                )}
            </div>

            <div>
                
            </div>
            


        </div>
        

    );
}



}

export default MapPractice;