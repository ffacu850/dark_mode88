import {lightMode} from "./light_or_dark.js"

export const light = (e, selector) => {
    if(e.target.matches(selector)){  
            console.log("evento light")
            lightMode()
    }       
}