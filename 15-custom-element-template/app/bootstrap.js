window['daggerok.app.DEBUG'] = true;

(function bootstrap() {
  'use strict';

  const DEBUG = window['daggerok.app.DEBUG'];
  const debug = (...content) => {
    if (DEBUG) console.log(...content);
  };

  const webComponentsAreSupported = () =>
    ('registerElement' in document)
    && ('import' in document.createElement('link'))
    && ('content' in document.createElement('template'));

  function finalizeLazyLoading() {
    debug('finalizing lazy loading...');

    const template = document.createElement('template');

    template.innerHTML = `
      <style>
      :host {
        
      }
      </style>
    `;

    class MyElement extends HTMLElement {

    }

    window.customElements.define('my-element', MyElement);

    debug('lazy loading finalized');
  }

  debug('web components are supported', webComponentsAreSupported());
  document.addEventListener('load', e => debug('load document'), false);
  document.addEventListener('DOMContentLoaded', e => debug('DOM content loaded'), false);

  if (!webComponentsAreSupported()) {

    const script = document.createElement('script');

    script.async = true;
    script.src = './bower_components/webcomponentsjs/webcomponents-loader.js';
    script.onload = finalizeLazyLoading;
    document.head.appendChild(script);
    debug('polyfills where added');
  }

  finalizeLazyLoading();

})();
