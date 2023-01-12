export class Header{
    constructor(tag_container){
        this.nome = "Header";
        this.tag_container = tag_container;
        this.html_structure = (
                '<header class="showcase">'+
                    '<div class="video-container">'+
                        '<video src="src/img/studioGhibliEdit.mp4" autoplay muted loop></video>'+
                    '</div>'+
                    '<div class="content">'+
				        '<span>Anime collection</span>'+
                        '<p>Which anime do you feel like watching today?</p>'+
                    '</div>'+
                '</header>'
            );
        this.startComponent();
    }

    //Funzione essenziale per ogni componente
    startComponent() {
        //Prima creo la struttura nel documento altrimenti non parte proprio
        this.tag_container.insertAdjacentHTML("beforeend", this.html_structure)
      }

}