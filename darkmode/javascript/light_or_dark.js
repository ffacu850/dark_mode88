// let count = 0
const ls = localStorage


export const darkMode = () => {
    document.querySelector("[data-dark]").href = `/darkmode/css/light.css` 
    ls.setItem("theme", "dark")
}

export const lightMode = () => {
    document.querySelector("[data-dark]").href = `/darkmode/css/styles.css`
    ls.setItem("theme", "light")
}

