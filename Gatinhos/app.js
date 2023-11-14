const buscarGatinhos = (e) => {

    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const cats = JSON.parse(xhr.responseText)
                cats.forEach(cat => {
                    const figure = document.createElement('figure')
                    const img = document.createElement('img')
                    img.src = cat.url
                    img.id = cat.id 
                    img.width = cat ['width'] 
                    img.height = cat ['height'] 
                    figure.appendChild(img)
                   
                    const caption = document.createElement('figcaption')
                    caption.textContent = `id: ${cat.id}, width: ${cat.width}, height: ${cat.height}`
                    figure.appendChild(caption)
                    document.querySelector("#gatinhos").appendChild(figure)
                });
            }else{
                alert('erro na requisição')
            }
        }

    }
xhr.send()
}
const btnMostrar = document.querySelector("#mostrar-gatinhos")
btnMostrar.addEventListener("click", buscarGatinhos)

