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
    this.button = '';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      :host([fancy]) {
        display: inline-block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      .card {
        padding: 8px;
        width: 240px;
        border-radius: 8px;
        text-align: center;
        background-color: gray;
        border: 2px solid black;
      }

      img {
        margin: auto;
        display: flex;
        height: 150px;
        width: 200px;
      }

      details div {
        margin: 8px;
        padding: 8px;
        border: 2px solid black;
        text-align: center;
        height: 50px;
        overflow: auto;
      }

      details summary {
        margin: 10px;
        padding: 10px;
      }

      details[open] summary {
        font-weight: bold;
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

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="card">
      <img src="${this.image}">
      <div class="cardTitle">${this.title}</div>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot><p>${this.description}</p></slot>
        </div>
      </details>
      <button><a href="${this.link}" target="">${this.buttonDesc}</a></button>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: {type: String},
      description: { type: String },
      button: { type: String },
      fancy: {type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
