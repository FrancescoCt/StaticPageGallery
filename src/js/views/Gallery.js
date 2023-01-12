import { Header } from "../components/header.js";
import { Navbar } from "../components/nav_bar.js";
import { Section } from "../components/content_section.js";
import { Footer } from "../components/footer.js";

const body_selector = document.getElementsByTagName('body')
const body = body_selector[0]

const nav_bar_links = {
    0 : {'nome': 'Home',
        'link' : '../../index.html'},

    1 : {'nome': 'News',
        'link' : '#'},

    2 : {'nome': 'Contact',
        'link' : '#'},

    3 : {'nome': 'About',
        'link' : '#'},

    4 : {'nome': 'Gallery',
        'link' : "#"},
}

//const header = new Header(body);
const nav_bar = new Navbar(body, nav_bar_links);
const section = new Section(body, 'Foto Galleria', "Dai un'occhiata alle foto", "Gallery", 0);
const section1 = new Section(body, 'Nuova sezione', "Ciao questa è un'altra sezione", "Gallery", 1);
const footer = new Footer(body);