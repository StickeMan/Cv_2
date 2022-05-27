let jsonUrl = 'https://raw.githubusercontent.com/StickeMan/CV_json/master/CVfrank.json';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}

function cargarJson() {
    fetch(jsonUrl)
        .then(respuesta => respuesta.json()) 
        .then(informacion => mostrarDato(informacion))
        .catch(error => console.log(error))
};
cargarJson();

curriculum = `
<body>

    <div id="page-wrap">

        <img src="images/Frank.jpg" alt="Photo of me" id="pic" />

        <div id="contact-info" class="vcard">

            <h1 class="fn">
                <Font color="purple">{nombre}</Font>
            </h1>

            <p>
                Date: {fechaNacimiento}
                Cell: {telefono}
                Email: {correo}
            </p>
        </div>

        <div id="objective">
            <p>
                Summary: {Resumen}
            </p>
        </div>

        <div class="clear"></div>

        <dl>
            <dd class="clear"></dd>

            <dt>Education</dt>
            <dd>
                <h2>{escuela}</h2>
                <p><strong>Date:</strong>{fecha}</p>
                <p><strong>Promedio:</strong>{promedio}<p>
            </dd>
            <dd class="clear"></dd>

            <dt>Skills</dt>
            <dd>
                <h2>Professional skills</h2>
                {professionalskills}

                <h2>Computer skills</h2>
                {Computerskills}
            </dd>

            <dd class="clear"></dd>

            <dt>Experience</dt>
            <dd>
                <h2>{job}<span>{company} - {date}</span></h2>
                {datails}
            </dd>

            <dd class="clear"></dd>

            <dt>Hobbies</dt>
            {hobbies}

            <dd class="clear"></dd>

            <dt>Languages</dt>
            {Languages}
            
            <dd class="clear"></dd>
        </dl>

        <div class="clear"></div>

    </div>

</body>
`

function mostrarDato(informacion) {
    let html = curriculum;
    let nombre = informacion.nombre;
    let fechaNacimiento = informacion.fechaNacimiento;
    let resumen = informacion.Resumen;
    let Num = informacion.telefono;
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
    let languages = informacion.Languages;

    html = html.replace("{nombre}", nombre);
    html = html.replace("{fechanacimiento}", fechaNacimiento);
    html = html.replace("{resumen}", resumen);
    html = html.replace("{num}", Num);
    html = html.replace("{correo}", correo);
    html = html.replace("{profeskills}", profeskills);
    html = html.replace("{compuskills}", compskills);
    html = html.replace("{job}", job);
    html = html.replace("{company}", company);
    html = html.replace("{date}", date);
    html = html.replace("{datails}", datails);
    html = html.replace("{escuela}", escuela);
    html = html.replace("{fecha}", fecha);
    html = html.replace("{promedio}", promedio);
    html = html.replace("{hobby}", hobby);
    html = html.replace("{languages}", languages);
    document.getElementById('curriculum').innerHTML += html;
};