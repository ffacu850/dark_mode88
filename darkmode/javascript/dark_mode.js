import {darkMode} from "./light_or_dark.js"


export const dark = (e, selector) => {
    if(e.target.matches(selector)){  
           console.log("evento dark")
            darkMode()
    }
           
}








