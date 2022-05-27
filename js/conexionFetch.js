//SE LLAMO EL JSON DESDE EL REPOSITORIO DE GITHUB
let jsonUrl = 'https://raw.githubusercontent.com/StickeMan/CV_json.git';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}

//funcion para cargar el json.
function cargarJson() {
    fetch(jsonUrl)
        .then(respuesta => respuesta.json()) //indicamos el formato en que se desea optener.
        .then(informacion => mostrarDato(informacion))//mostramos informacion.
        .catch(error => console.log(error))
};
cargarJson();

curriculum = `
<body>

    <div id="page-wrap">

        <img src="images/Frank.jpg" alt="Photo of me" id="pic" />

        <div id="contact-info" class="vcard">

            <h1 class="fn">
                <Font color="purple">Francisco Delgado Martínez</Font>
            </h1>

            <p>
                Date: <span class="date">16/10/2000</span><br>
                Cell: <span class="tel">984-198-93-05</span><br/>
                Email: <a class="email">2005040@utrivieramaya.edu.mx</a>
            </p>
        </div>

        <div id="objective">
            <p>
                (Summary) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, officia repudiandae ipsa,
                iustoeos, sequi magnam vel et hic dicta sapiente veritatis fuga similique molestias temporibus aliquam 
                fugiat dolor nihil.
            </p>
        </div>

        <div class="clear"></div>

        <dl>
            <dd class="clear"></dd>

            <dt>Education</dt>
            <dd>
                <h2>Cetec Riviera Maya</h2>
                <p><strong>Date:</strong> 2017-2019 </p>
            </dd>
            <dd>
                <h2>Vicente Guerrero</h2>
                <p><strong>Date:</strong> 2013-2016 </p>
            </dd>

            <dd class="clear"></dd>

            <dt>Skills</dt>
            <dd>
                <h2>Professional skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Java</li>
                </ul>

                <h2>Computer skills</h2>
                <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows</p>
            </dd>

            <dd class="clear"></dd>

            <dt>Experience</dt>
            <dd>
                <h2>Job <span>Company - Date</span></h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <h2>Job <span>Company - Date</span></h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </dd>

            <dd class="clear"></dd>

            <dt>Hobbies</dt>
            <dd>Read, drawn, walk sometimes</dd>

            <dd class="clear"></dd>

            <dt>Languages</dt>
            <ul>
                <dd>
                    <li>English</li>
                </dd>
            </ul>
            

            <dd class="clear"></dd>
        </dl>

        <div class="clear"></div>

    </div>

</body>
`
function mostrarDato(informacion) {
    let html = curriculum;
    let Resumen = informacion.Resumen;
    let Nombre = informacion.nombre;
    let Num = informacion.telefono;
    let fechaNacimiento = informacion.fechaNacimiento;
    let correo = informacion.correo;
    let profeskills = informacion.skills[0].professionalskills;
    let compskills = informacion.skills[0].Computerskills;
    let job = informacion.experienciaLaboral[0].job;
    let company = informacion.experienciaLaboral[0].company;
    let date = informacion.experienciaLaboral[0].date;
    let datails = informacion.experienciaLaboral[0].datails;
    let escuela = informacion.educacion[0].escuela;
    let fecha = informacion.educacion[0].fecha;
    let promedio = informacion.educacion[0].promedio;
    let hobby = informacion.hobbies;
    let Languages = informacion.Languages;

    html = html.replace("{Resumen}", Resumen);
    html = html.replace("{Nombre}", Nombre);
    html = html.replace("{num}", Num);
    html = html.replace("{fechanacimiento}", fechaNacimiento);
    html = html.replace("{correo}", correo);
    html = html.replace("{profeskills}", profeskills);
    html = html.replace("{compuskills}", compskills);
    html = html.replace("{Languages}", Languages);
    html = html.replace("{company}", company);
    html = html.replace("{job}", job);
    html = html.replace("{date}", date);
    html = html.replace("{datails}", datails);
    html = html.replace("{escuela}", escuela);
    html = html.replace("{fecha}", fecha);
    html = html.replace("{promedio}", promedio);
    html = html.replace("{hobby}", hobby);
    document.getElementById('curriculum').innerHTML += html;
};