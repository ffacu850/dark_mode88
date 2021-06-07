import {dark} from "./dark_mode.js"
import {localFun} from "./funLocalStorage.js"
import {light} from "./light.js"

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
        dark(e, ".mode-moon")
        light(e, ".mode-sun")
    })
    localFun()

})




