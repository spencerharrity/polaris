import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    super();
    this.title = "Psu Wins!";
    this.image = "https://www.ydr.com/gcdn/-mm-/c3c1e22b1a53652a77fcb5bf66b6bffc54d34bc1/c=0-121-2400-1477/local/-/media/2016/11/26/PAGroup/Chambersburg/636157873314238494-CPO-NHG-112616-PENN-STATE-FOOTBALL-VS-MICHIGAN-12.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp";
    this.description = "This is a picture of the Penn State football team when they won the national championship in 2016. This was one of the best teams the school ever had and remains that way to this day. The team hasn't been as good since.";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
        font-size: 1em;
        display: inline-flex;
        border: 2px solid grey;
        padding: 8px;
        margin: 8px;
        background-color: green;
        transition: .6s all ease-in-out;
      }
      .card-image {
        width: 300px;
        height: 100%;
      }
      .card-text {
        width: 300px;
        padding: 0 8px 8px 8px;
        color: black;
        background-color: white;
        margin: 0 0 0 8px;
        height: 300px;
        overflow: auto;
      }
      .card-title {
        position: sticky;
        top: 0;
        background-color: gray;
        text-align: center;
        font-size: 2em;
        padding: 8px 8px 16px;
        margin: 0 -8px;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img class="card-image" alt="Card Image" src="${this.image}" />
        <div class="card-text">
          <h2 class="card-title">${this.title}</h2>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
