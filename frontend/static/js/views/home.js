export default class {

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return `
        <section>
            <div class="bg_img_container">
                <img class="bg_img" src="/static/doggo.jpg" alt="Cat">
            </div>
            <article>
                <h2>Adoptar una mascota traerá muchos cambios positivos para tu vida.</h2>
                
                <p>A través de la historia, las mascotas han sido grandes compañeras de la vida de las personas, compartiendo alegrías, pero también ayudando a superar momentos difíciles.</p>
                
                <p>Adoptar es un gran paso. Hay muchos aspectos que debes considerar previamente, desde elegir el tipo de mascota más adecuada para tu estilo de vida, hasta decidir dónde o con quién adoptar. Por eso queremos ayudarte para que ésta sea una de las mejores experiencias en tu vida y la de tu próximo amigo de cuatro patas.</p>
                
                <p>Ante todo, debes tomar en cuenta la gran responsabilidad que representa tener a un animal de compañía dentro de tu vida, ya que desafortunadamente es común que algunos dueños que adquieren un cachorro o un gatito, de forma impulsiva decidan abandonarlo. Esto sucede por lo regular cuando se dan cuenta del compromiso a largo plazo que implica vivir con una mascota.</p>
                
                <p>Si ya estás decidido a doptar una mascota para ser tu compañera de vida.</p>
            </article>
            <a class="nav_link bot-foot" href="/adopt" data-link>VER MASCOTAS EN ADOPCIÓN</a>
            <br>
        </section>

        <section>
        <br>
            <h2>Nuestras Historias:</h2>
            <div class="history_container">
                <div class="history">
                    <img class="history-image" src="/static/doggo.jpg" alt="Pichichus">
                    <div class="history-text">
                    <h3 class="history-heading">
                        <span class="history-name">Pichichus</span>
                    </h3>
                    <p class="history-description">
                        Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                        congue eu mauris nec, pretium tincidunt nulla.
                    </p>
                    </div>
                </div>
                <div class="history">
                    <img class="history-image" src="/static/Cat.jpg" alt="Michichus">
                    <div class="history-text">
                    <h3 class="history-heading">
                        <span class="history-name">Michichus</span>
                    </h3>
                    <p class="history-description">
                        Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                        congue eu mauris nec, pretium tincidunt nulla.
                    </p>
                    </div>
                </div>
                <div class="history">
                    <img class="history-image" src="/static/doggo.jpg" alt="Pichichus">
                    <div class="history-text">
                    <h3 class="history-heading">
                        <span class="history-name">Pichichus</span>
                    </h3>
                    <p class="history-description">
                        Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                        congue eu mauris nec, pretium tincidunt nulla.
                    </p>
                    </div>
                </div>
                <div class="history">
                    <img class="history-image" src="/static/Cat.jpg" alt="Michichus">
                    <div class="history-text">
                    <h3 class="history-heading">
                        <span class="history-name">Michichus</span>
                    </h3>
                    <p class="history-description">
                        Nunc efficitur felis vel mi efficitur, sed molestie sem scelerisque. Fusce orci risus,
                        congue eu mauris nec, pretium tincidunt nulla.
                    </p>
                    </div>
                </div>
            </div>
        </section>

        `; 
    }
}