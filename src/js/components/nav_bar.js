import { Toggle } from "./toggle.js";

export class Navbar {
    constructor(tag_container, links){
        this.nome = "Navbar";
        this.tag_container = tag_container;
        this.links = links;
        
        this.properties_svg = {width : 16, viewport : 16}
        this.switch = new Toggle(tag_container)

        this.html_structure = (
            '<nav class="topnav" id="myTopnav">'+
                this.processLinks()+
                '<a href="#" id="change_theme"> Change Theme</a>'+
                this.switch.html_structure+
                '<a href="#" class="icon" id ="bars_icon" >'+
                    '<svg width="'+this.properties_svg.width+'" height="'+this.properties_svg.width+'" fill="currentColor" class="bi bi-list" viewBox="0 0 '+this.properties_svg.viewport+' '+this.properties_svg.viewport+'">'+
                        '<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>'+
                    '</svg>'+
                '</a>'+
            '</nav>'
            );
        this.startComponent();
    }
    startComponent() {
        this.tag_container.insertAdjacentHTML("beforeend", this.html_structure)
        document.getElementById("bars_icon").onclick = this.setResponsiveBar;
        this.switch.addOnClick()
      }
    
    setResponsiveBar() {
        
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
        
    };

    processLinks(){
        
        let string = ''
        // '<a href="./src/views/Gallery.html">Gallery</a>'+
        Object.keys(this.links).map((key)=>{
            return(
                string += '<a href="'+this.links[key]['link']+'" '+this.active_check(this.links[key]['nome'])+'>'+this.links[key]['nome']+'</a>'
                )
        } )
        return string
    }

    active_check(nome){
        let support = window.location.href.split('/');
        let output = ''

        if((support[3] == '' || support[3] == 'index.html') && nome == 'Home'){
           output = 'class="active"'
        }

        if(support[5] == nome+'.html'){
            output =  'class="active"'
        }

        return output
    }
}
