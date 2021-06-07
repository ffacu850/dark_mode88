import { darkMode, lightMode } from "./light_or_dark.js"

const ls = localStorage
export const localFun = () => {
    if(ls.getItem("theme") === null){
        ls.setItem("theme", "light")
    }
    if(ls.getItem("theme") === "light"){
        lightMode()
    }
    if(ls.getItem("theme") === "dark"){
        darkMode()
    }
}