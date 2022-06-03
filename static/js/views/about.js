export default class {

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return `
        <section>
            <h3>Que nos motivo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, eligendi officia architecto dolor qui magni ad, earum minima vero aliquid veritatis aspernatur. Dolorum, fuga sunt eaque numquam ipsum quae quis!</p>
            <br>
            <h3>Como comenzamos</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt molestiae modi repellat rem, reprehenderit natus perspiciatis delectus quidem ab dolor beatae eius similique vel exercitationem quod? Inventore facilis dignissimos itaque?</p>
            <br>
            <h3>Lo que nos gustaría lograr</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero quos ab id accusantium obcaecati qui, quas odit modi officiis consectetur? Saepe eligendi ex asperiores deserunt deleniti quos, distinctio nihil.</p>
        </section>
        <br>
        <div class="contacto">
          <h4>Contáctanos</h4>
          <div class="margen">
            <button type="button" class="bot-foot">
              <i class="fa-solid fa-envelope"></i>
            </button>
            <span>straypaws@gmail.com</span>
          </div>

          <div class="margen">
            <button type="button" class="bot-foot">
              <i class="fa-solid fa-square-phone"></i>
            </button>
            <span>0800-123-729</span>
          </div>

          <div class="margen">
            <button type="button" class="bot-foot">
              <i class="fa-brands fa-instagram-square"></i>
            </button>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">StrayPaws</a>
          </div>
        </div>
        `;
    }
}