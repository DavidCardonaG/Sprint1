let btnHtml = document.getElementById('html');
let btnCss = document.getElementById('css');
let btnJs = document.getElementById('js');
let btnFigma = document.getElementById('figma');
let btnUx = document.getElementById('ux');

const getPreguntas = async (url) =>{
    let muestraPregunta = document.querySelector(".preguntas")
    muestraPregunta.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach(preguntas => {
        const {imagen,pregunta,correcta,respuesta1,respuesta2,respuesta3} = preguntas;
        muestraPregunta.innerHTML += `
        <div class="card">
         <img src="${imagen}" class="card-img" alt="...">
        <p class="pregunta-title ">${pregunta}</p>
                <div class="opciones">
                    <div class="inputs">
                        <input id="btn" class="resp" type="radio" >${respuesta1}</input>
                    </div>
                    <div class="inputs">
                        <input id="btn" class="resp" type="radio" >${respuesta2}</input>
                    </div>
                    <div class="inputs">
                        <input id="btn" class="resp" type="radio"> ${correcta}</input>
                    </div>
                    <div class="inputs">
                        <input id="btn" class="resp" type="radio"> ${respuesta3}</input>
                    </div>
                    <button class="comprobar">COMPROBAR</button>
                </div>
        </div>
        `
    });
}

btnHtml.addEventListener('click', () => {
     document.querySelector('.cursos').remove();
    
    getPreguntas('http://localhost:3900/HTML');
})

btnCss.addEventListener('click', () => {
    document.querySelector('.cursos').remove();
    getPreguntas(' http://localhost:4000/CSS');
})
btnJs.addEventListener('click', () => {
    document.querySelector('.cursos').remove();
    getPreguntas('http://localhost:4100/JS ');
})
btnFigma.addEventListener('click', () => {
    document.querySelector('.cursos').remove();
    getPreguntas('http://localhost:4300/FIGMA ');
})
btnUx.addEventListener('click', () => {
    document.querySelector('.cursos').remove();
    getPreguntas('http://localhost:4200/UX ');
})

