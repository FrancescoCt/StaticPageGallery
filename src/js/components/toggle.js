export class Toggle {
    constructor(tag_container){
        //start = typeof start !== "undefined" ? start : false;

        this.nome = "Toggle";
        this.tag_container = tag_container;
        this.html_structure = (
            '<div id="toggle_theme" class="switch">'+
            '<label >'+
                '.'+
                '<input type="checkbox" value="light">'+
                '<span class="slider round"></span>'+
            '</label>'+
            '</div>'
            
            );
    }
    addOnClick(){
        document.getElementById("toggle_theme").firstChild.childNodes[1].onclick = this.switchTheme;
    }
    switchTheme(){
        const toggle_theme = document.getElementById("toggle_theme").firstChild.childNodes[1];
        if(toggle_theme.value == "light"){
            toggle_theme.value = "dark"
        }else if(toggle_theme.value == "dark"){
            toggle_theme.value = "light"
        }
        document.documentElement.className = toggle_theme.value;
    }
        
    };
