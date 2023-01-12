import { Card } from "./card.js";
import { icons } from "../../img/svg_icons.js";

export class Section{
    constructor(tag_container, titolo, descrizione, nome_pagina_js, posizione){
        this.nome = "Section";
        this.tag_container = tag_container;

        this.titolo = titolo
        this.descrizione = descrizione

        this.nome_pagina_js = nome_pagina_js    //Il nome prende anche il numero della sezione
        this.posizione = posizione

        if(this.nome_pagina_js == 'Home' || this.nome_pagina_js == 'index'){
            switch(this.posizione) {
                case 0: 
                this.html_structure = (
                    '<section class="px-2">'+
                        '<h1>'+this.titolo+'</h1>'+
                        '<p>'+this.descrizione+'</p>'+
                        '<div class="cards">'+
                            (new Card('Games', icons.games).html_structure)+
                            (new Card('Chat', icons.chat).html_structure)+
                            (new Card('To Do List', icons.to_do).html_structure)+
                            (new Card('Gallery', icons.gallery).html_structure ) +
                        '</div>'+
                    '</section>'
                    );
                    break;
            }

        }else if(this.nome_pagina_js == 'Gallery' ){
            switch(this.posizione) {
                case 0:
                   this.html_structure = (
                        '<section class="px-2">'+
                            '<h1>'+this.titolo+'</h1>'+
                            '<p>'+this.descrizione+'</p>'+
                            '<div class="cards">'+
                                (new Card('Games', icons.games).html_structure)+
                                (new Card('Chat', icons.chat).html_structure)+
                                (new Card('To Do List', icons.to_do).html_structure)+
                                (new Card('Gallery', icons.gallery).html_structure ) +
                            '</div>'+
                        '</section>'
                    );
                  break;
                case 1:
                    this.html_structure = (
                        '<section class="my-5 px-2">'+
                            '<h1>'+this.titolo+'</h1>'+
                            '<p>'+this.descrizione+'</p>'+
                            '<div class="cards">'+
                                (new Card('Chat', icons.chat).html_structure)+
                                (new Card('To Do List', icons.to_do).html_structure)+
                            '</div>'+
                        '</section>'
                    );
                  break;
              }
        }
        else {
            this.html_structure = (
                '<section class="px-2">'+
                    '<h1>'+'Problema applicativo: pagina non definita per la section!'+'</h1>'+
                
                '</section>'
            );
        }
        


        this.startComponent();
    }

    startComponent() {
        //Prima creo la struttura nel documento altrimenti non parte proprio
        this.tag_container.insertAdjacentHTML("beforeend", this.html_structure)
    }
}