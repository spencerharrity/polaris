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
    this.title = 'My card';
    this.link = '#';
    this.image = null;
    this.description = 'text';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      :host([fancy]) {
      display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      div {
        padding: 10px;
        width: 230px;
        border-radius: 8px;
        text-align: center;
        background-color: lightgray;
        border: 1px solid;
      }

      img {
        margin: auto;
        display: flex;
        height: 150px;
        width: 200px;
      }

      button {
        margin: auto;
        display: flex;
        background-color: navy;
      }

      a:hover {
        color: darkgray;
      }

      a {
        color: white;
      }
    `;
  }

  render() {
    return html`
    <div>
      <h1>${this.title}</h1>
      <img src=${this.image}>
      <p>${this.description}</p>
      <button><a href=${this.link}>Details</a></button>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: {type: String},
      description: { type: String },
      fancy: {type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
