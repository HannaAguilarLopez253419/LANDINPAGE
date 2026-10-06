async function cargarSeccion(id, archivo) {

    try {

        const elemento = document.getElementById(id);

        const respuesta = await fetch(`html/${archivo}`);

        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar ${archivo}`);
        }

        const contenido = await respuesta.text();

        elemento.innerHTML = contenido;

    } catch (error) {

        console.error(error);

    }

}


cargarSeccion("navbar", "navbar.html");

cargarSeccion("hero", "hero.html");
cargarSeccion("about", "about.html");
cargarSeccion("languages", "languages.html");
cargarSeccion("projects", "projects.html");
cargarSeccion("footer", "footer.html");