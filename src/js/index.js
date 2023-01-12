import { Header } from "./components/header.js";
import { Navbar } from "./components/nav_bar.js"
import { Section } from "./components/content_section.js";
import { Footer } from "./components/footer.js";



const body_selector = document.getElementsByTagName('body')
const body = body_selector[0]


const nav_bar_links = {
    0 : {'nome': 'Home',
        'link' : '#'},

    1 : {'nome': 'News',
        'link' : '#'},

    2 : {'nome': 'Contact',
        'link' : '#'},

    3 : {'nome': 'About',
        'link' : '#'},

    4 : {'nome': 'Gallery',
        'link' : "./src/views/Gallery.html"},
}

//Qui è dove vengono aggiunti i componenti alla pagina, basta una semplice dichiarazione per crearli
const header = new Header(body);
const nav_bar = new Navbar(body, nav_bar_links);
const section = new Section(body, 'Servizi', 'Scegli uno dei servizi disponibili', 'Home', 0);
const footer = new Footer(body);

