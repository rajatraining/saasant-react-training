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
            {this.state.cars.map( (items,index) => 
                <li key={index}> {index} {items}</li>
                )}
            </div>

            <div>
                {
                    this.state.animals.map( (animal) =>
                        <li>{animal.id}  {animal.animal}</li>
                    )
                }
            </div>
            


        </div>
        

    );
}



}

export default MapPractice;