import Brocure from './brocure/brocure';

// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
const testUrl = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

document.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.querySelector('.brocure');

  const brocure = new Brocure(testUrl, htmlElement);
  brocure.init();
});
