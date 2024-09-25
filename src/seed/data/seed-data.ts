import * as bcrypt from 'bcrypt';

interface SeedRepositorio {
    title: string;
    docente: string;
    materia: string;
    seccion: number;
    anotacion: string;
    comentario: string;
    cu: string;
    tt: ValidTypes;
    archivoComprimido: string[];
}

type ValidTypes = 'tarea'|'proyecto'|'clase'|'asesoria';


interface SeedUser {
    email: string;
    fullName: string;
    password: string;
    roles: string[];
}

interface SeedData {
    users: SeedUser[];
    repositorios: SeedRepositorio[];
}


export const initialData: SeedData = {

    users: [
        {
            email: 'davcogut@gmail.com',
            fullName: 'David Gutiérrez',
            password: bcrypt.hashSync('Nokiac3-00',10),
            roles: ['admin','user'],
        },
        {
            email: 'david.cogugu@gmail.com',
            fullName: 'David Constantino',
            password: bcrypt.hashSync('Abc123',10),
            roles: ['user'],
        },
    ],

    repositorios: [
        {
            title: "Primavera 2015 FH",
            docente: "Jesus Vazquez Ramirez",
            materia: "Formacion Humana y Social",
            seccion: 1,
            anotacion: "Materia de tronco comun",
            comentario: "sin comentarios",
            cu: "jesus_vazquez_ramirez_formacion_humana_y_sociall",
            tt: "clase",
            archivoComprimido: [
                'clase-1-prim-formacion-humana.rar',
                'clase-2-prim-formacion-humana.rar',
            ],
        },
        {
            title: "Primavera 2015 ME",
            docente: "Robles Mendoza Francisco Javier",
            materia: "Matematicas Elementales",
            seccion: 1,
            anotacion: "Matematicas Basicas",
            comentario: "logica matematica",
            cu: "robles_mendoza_francisco_javier_matematicas_elementales",
            tt: "clase",
            archivoComprimido: [
                'clase-5-prim-matematicas-elementales.rar',
                'clase-6-prim-matematicas-elementales.rar',
            ],
        },
        {
            title: "Otonio 2015 AS",
            docente: "Castro Cardona Mauricio",
            materia: "Algebra Superior",
            seccion: 5,
            anotacion: "Introduccion al algebra",
            comentario: "sin comentarios",
            cu: "castro_cardona_mauricio_algebra_superior",
            tt: "clase",
            archivoComprimido: [
                'clase-5-oton-algebra-superior.rar',
                'clase-6-oton-algebra-superior.rar',
            ],
        },
        {
            title: "Primavera 2015 MP",
            docente: "Beatriz Beltran Martinez",
            materia: "Metodologia de la programacion",
            seccion: 8,
            anotacion: "conociendo la programacion",
            comentario: "pseudocodigos",
            cu: "beatriz_beltran_martinez_metodologia_programacion",
            tt: "clase",
            archivoComprimido: [
                'clase-1-prim-metodologia-programacion.rar',
                'clase-7-prim-metodologia-programacion.rar',
            ],
        },
        {
            title: "Primavera 2015 FH",
            docente: "Jesus Vazquez Ramirez",
            materia: "Formacion Humana y Social",
            seccion: 1,
            anotacion: "Materia de tronco comun",
            comentario: "sin comentarios",
            cu: "jesus_vazquez_ramirez_formacion_humana_y_social",
            tt: "clase",
            archivoComprimido: [
                'clase-1-prim-formacion-humana.rar',
                'clase-2-prim-formacion-humana.rar',
            ],
        },
        {
            title: "Otonio 2016 CD",
            docente: "Martinez Guzman Gerardo",
            materia: "Calculo Diferencial",
            seccion: 3,
            anotacion: "Introduccion al calculo",
            comentario: "demostraciones matematicas",
            cu: "martinez_guzman_gerardo_calculo_diferencial",
            tt: "clase",
            archivoComprimido: [
                'clase-8-oton-calculo-diferencial.rar',
                'clase-9-oton-calculo-diferencial.rar',
            ],
        },
        {
            title: "Verano 2015 E",
            docente: "Marcos Gonzalez Flores",
            materia: "Ensamblador",
            seccion: 9,
            anotacion: "Lenguaje de maquina",
            comentario: "aprendiendo lenguaje 1 y 0",
            cu: "marcos_gonzalez_flores_ensamblador",
            tt: "asesoria",
            archivoComprimido: [
                'asesoria-1-veran-ensamblador.rar',
                'asesoria-2-veran-ensamblador.rar',
            ],
        },
        {
            title: "Verano 2015 P1",
            docente: "Pedro Bello Lopez",
            materia: "Programacion 1",
            seccion: 10,
            anotacion: "Bases de la programacion",
            comentario: "primeros lenguajes de la programacion",
            cu: "pedro_bello_lopez_programacion_1",
            tt: "asesoria",
            archivoComprimido: [
                'asesoria-4-veran-progrmacion-1.rar',
                'asesoria-3-veran-progrmacion-1.rar',
            ],
        },
        {
            title: "Otonio 2017 CE",
            docente: "Mario Bustillo Diaz",
            materia: "Circuitos Electricos",
            seccion: 256,
            anotacion: "bases electronicas",
            comentario: "conociendo calculos de ciruitos",
            cu: "mario_bustillo_diaz_circuitos_electricos",
            tt: "tarea",
            archivoComprimido: [
                'tarea-2-oton-circuitos-electricos.rar',
                'tarea-3-oton-circuitos-electricos.rar',
            ],
        },
        {
            title: "Verano 2018 G",
            docente: "Ivan Olmos Pineda",
            materia: "Graficacion",
            seccion: 259,
            anotacion: "disenio de patrones",
            comentario: "uso de blender para modelado 3d",
            cu: "ivan_olmos_pineda_graficacion",
            tt: "proyecto",
            archivoComprimido: [
                'proyecto-1-veran-graficacion.rar'
            ],
        },
        {
            title: "Otonio 2018 ED",
            docente: "Miguel Rodriguez Hernandez",
            materia: "Estructura de datos",
            seccion: 16,
            anotacion: "estructura de datos",
            comentario: "sin comentarios",
            cu: "miguel_rodriguez_hernandez_estructura_de_datos",
            tt: "proyecto",
            archivoComprimido: [
                'proyecto-1-oton-estructura-datos.rar',
                'proyecto-2-oton-estructura-datos.rar',
            ],
        },
        {
            title: "Primavera 2019 BD",
            docente: "Maria del Consuelo Molina Garcia",
            materia: "Bases de datos",
            seccion: 260,
            anotacion: "que es una base de datos",
            comentario: "primeros pasos en una base de datos",
            cu: "maria_del_consuelo_molina_garcia_bases_de_datos",
            tt: "tarea",
            archivoComprimido: [
                'tarea-1-prim-bases-de-datos.rar',
                'tarea-2-prim-bases-de-datos.rar',
                'tarea-3-prim-bases-de-datos.rar',
                'tarea-4-prim-bases-de-datos.rar',
            ],
        },
        {
            title: "Primavera 2020 DAM",
            docente: "Veronica Edith Bautista Lopez",
            materia: "Desarrollo de Aplicaciones Moviles",
            seccion: 202,
            anotacion: "Materia formativa",
            comentario: "primeros pasos creacion de una app movil",
            cu: "veronica_edith_bautista_lopez_desarrollo_app_movil",
            tt: "clase",
            archivoComprimido: [
                'clase-1-prim-desarrollo-app-movil.rar',
                'clase-2-prim-desarrollo-app-movil.rar',
                'clase-3-prim-desarrollo-app-movil.rar',
                'clase-4-prim-desarrollo-app-movil.rar',
                'clase-5-prim-desarrollo-app-movil.rar',
                'clase-6-prim-desarrollo-app-movil.rar',
            ],
        },
        {
            title: "Primavera 2018 AR",
            docente: "Adriana Hernandez Beristain",
            materia: "Administracion de Redes",
            seccion: 261,
            anotacion: "Materia formativa",
            comentario: "topoliga de redes",
            cu: "adriana_hernandez_beristain_administracion_redes",
            tt: "proyecto",
            archivoComprimido: [
                'proyecto-1-prim-administracion-redes.rar',
                'proyecto-2-prim-administracion-redes.rar',
                'proyecto-3-prim-administracion-redes.rar',
                'proyecto-4-prim-administracion-redes.rar',
            ],
        },
        {
            title: "Otonio 2020 DD",
            docente: "Jose Luis Hernandez Ameca",
            materia: "Diseño Digital",
            seccion: 252,
            anotacion: "diseño de circuitos digitales",
            comentario: "creacion de circuitos usando metodologias",
            cu: "jose_luis_hernandez_ameca_disenio_digital",
            tt: "proyecto",
            archivoComprimido: [
                'proyecto-1-oton-disenio-digital.rar',
            ],
        },
        {
            title: "Verano 2022 MDD",
            docente: "Marco Soriano Ulloa",
            materia: "Mineria de datos",
            seccion: 606,
            anotacion: "materia optativa",
            comentario: "sin comentarios",
            cu: "marco_soriano_ulloa_mineria_de_datos",
            tt: "tarea",
            archivoComprimido: [
                'tarea-1-veran-mineria-de-datos.rar',
                'tarea-2-veran-mineria-de-datos.rar',
                'tarea-3-veran-mineria-de-datos.rar',
                'tarea-5-veran-mineria-de-datos.rar',
                'tarea-7-veran-mineria-de-datos.rar',
            ],
        },
        {
            title: "Primavera 2022 IW",
            docente: "Pedro Bello Lopez",
            materia: "Ingenieria Web",
            seccion: 605,
            anotacion: "materia optativa",
            comentario: "sin comentarios",
            cu: "pedro_bello_lopez_ingenieria_web",
            tt: "tarea",
            archivoComprimido: [
                'tarea-1-prim-ingenieria-web.rar',
                'tarea-2-prim-ingenieria-web.rar',
                'tarea-3-prim-ingenieria-web.rar',
                'tarea-4-prim-ingenieria-web.rar',
            ],
        },
        {
            title: "Otonio 2016 AW",
            docente: "Meliza Contreras Gonzalez",
            materia: "Aplicaciones Web",
            seccion: 617,
            anotacion: "tecnicas y metodologias de diseño y desarrollo",
            comentario: "aprendizaje de un diseño optimo de una app web",
            cu: "meliza_contreras_gonzalez_aplicaciones_web",
            tt: "clase",
            archivoComprimido: [
                'clase-1-oton-aplicaciones-web.rar',
                'clase-2-oton-aplicaciones-web.rar',
                'clase-3-oton-aplicaciones-web.rar',
                'clase-4-oton-aplicaciones-web.rar',
                'clase-5-oton-aplicaciones-web.rar',
                'clase-6-oton-aplicaciones-web.rar',
            ],
        },
        {
            title: "Verano 2015 PI",
            docente: "Buitron Ramos Alejandra",
            materia: "Proyectos 1",
            seccion: 2,
            anotacion: "materia formativa",
            comentario: "creacion de un proyecto parte 1",
            cu: "buitron_ramos_alejandra_proyectos_1",
            tt: "proyecto",
            archivoComprimido: [
                'proeycto-1-veran-ensamblador.rar',
                'proeycto-2-veran-ensamblador.rar',
            ],
        },
        {
            title: "Verano 2020 SD",
            docente: "Elsa Chavira Martinez",
            materia: "Sistemas digitales",
            seccion: 254,
            anotacion: "materia formativa",
            comentario: "uso de hardware para resolver problemas del mundo real",
            cu: "elsa_chavira_martinez_sistemas_digitales",
            tt: "proyecto",
            archivoComprimido: [
                'proyecto-1-veran-sistemas-digitales.rar',
                'proyecto-2-veran-sistemas-digitales.rar',
            ],
        },
        {
            title: "Otonio 2017 SO",
            docente: "Carmen Ceron Garnica",
            materia: "Sistemas operativos",
            seccion: 253,
            anotacion: "materia formativa",
            comentario: "sin comentarios",
            cu: "carmen_ceron_garnica_sistemas_operativos",
            tt: "clase",
            archivoComprimido: [
                'clase-1-oton-sistemas-operativos.rar',
                'clase-2-oton-sistemas-operativos.rar',
            ],
        },
        {
            title: "Verano 2018 RI",
            docente: "Jose Torres Leon",
            materia: "Redes inalambricas",
            seccion: 259,
            anotacion: "materia formativa",
            comentario: "sin comentarios",
            cu: "jose_torres_leon_redes_inalambricas",
            tt: "tarea",
            archivoComprimido: [
                'tarea-1-veran-redes-inalambricas.rar',
                'tarea-2-veran-redes-inalambricas.rar',
                'tarea-3-veran-redes-inalambricas.rar',
            ],
        },
        {
            title: "Otonio 2018 SE",
            docente: "Gabriel Juarez Diaz",
            materia: "Sistemas empotrados",
            seccion: 202,
            anotacion: "materia formativa",
            comentario: "sin comentarios",
            cu: "gabriel_juarez_diaz_sistemas_empotrados",
            tt: "asesoria",
            archivoComprimido: [
                'asesoria-1-oton-sistemas-empotrados.rar',
                'asesoria-2-oton-sistemas-empotrados.rar',
            ],
        },
        {
            title: "Primavera 2019 AM",
            docente: "Arturo Olvera Lopez",
            materia: "Aplicaciones multimedia",
            seccion: 0,
            anotacion: "materia optativa",
            comentario: "materia con previo conocimiento",
            cu: "arturo_olvera_lopez_aplicaciones_multimedia",
            tt: "tarea",
            archivoComprimido: [
                'tarea-1-prim-aplicaciones-multimedia.rar',
                'tarea-2-prim-aplicaciones-multimedia.rar',
                'tarea-3-prim-aplicaciones-multimedia.rar',
                'tarea-4-prim-aplicaciones-multimedia.rar',
            ],
        },
    ]
}