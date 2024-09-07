import {Input} from "@nextui-org/input";
import { Button } from "@nextui-org/react";
function InputImage(){
    function change(){
        console.log("clicked")
    }
    return(
        <>
         <div className=" flex justify-center items-center w-44 h-32 bg-red-500">

         <label>
         <input type="file" style={{display:"none"}} onChange={change} />
    + Add Your Logo
</label>
         
                
          
                    </div>
    

        </>
    )
}


export default InputImage;