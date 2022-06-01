import { useState } from "react";

export default function AjaxSample(){

    const [emp, setEmp] = useState({items:[]}); 


    const getDataFromService = () => {
        fetch("https://reqres.in/api/users?page=2")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              setEmp(result.page)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
             console.log("Erropr");
            }
          )
      }
    


    return(
<>

<button onClick={getDataFromService}> click to Load </button>
employee Details 
{emp}
</>
    );


}