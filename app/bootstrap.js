var webComponentsAreSupported =
  ('registerElement' in document)
  && ('import' in document.createElement('link'))
  && ('content' in document.createElement('template'));

console.log('webComponentsAreSupported', webComponentsAreSupported);

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});

document.addEventListener('load', () => {
  console.log('load');
});

// app main entry point must be here:
function finalizeLazyLoading() {
  console.log('bootstrapping app...');
  // do some...
  console.log('app bootstrapped');
}

if (!webComponentsAreSupported) {

  var script = document.createElement('script');

  script.async = true;
  script.src = './bower_components/webcomponentsjs/webcomponents-loader.js';
  script.onload = finalizeLazyLoading;
  document.head.appendChild(script);
  console.log('polyfills where added.');

}

finalizeLazyLoading();
