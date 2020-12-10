console.log('hello world')

const toggleClass = (id, className) => {
    console.log(id)
    const element = document.getElementById(id)
    element.classList.toggle(className)
}

