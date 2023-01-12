
export class Card {
    constructor(titolo, svg_icon){
        if (typeof titolo === "undefined" ){console.error('Errore: Manca un parametro alla card ')}

        this.nome = "Card"

        this.titolo = titolo
        this.svg_icon = svg_icon

        this.properties_svg = {width : 48, viewport : 24}
        this.html_structure = (
                    '<div class="card d-flex justify-content-between hovered">'+
                        '<div class="py-5 max-width sottolineato"><strong>'+this.titolo+'</strong></div>'+
                        '<div class ="py-5 sottolineato">'+
                            this.svg_icon+
                        '</div>'+
                    '</div>'
                );
        } 
    };
