function shadowWiz(options){
    let images = document.querySelectorAll('.shadowWiz')

    options.shadow_type = options.shadow_type === "hard" ? "0px" : "15px"

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`

        if(options.padding){
            image.style.padding = "1rem"
        }
    })
}


module.exports.shadowWiz = shadowWiz