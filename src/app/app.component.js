import { html, LitElement } from 'lit';

export class App extends LitElement {
  render() {
    return html`
      <section>
        <lit-route>
          <h1>404 Page Not Found!</h1>
        </lit-route>
      </section>
    `;
  }
}
customElements.define('wedding-app', App);
