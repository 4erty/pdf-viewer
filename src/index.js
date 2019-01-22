import Brocure from './brocure/brocure';

// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
const testUrl = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

document.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.querySelector('.brocure');
  // Loaded via <script> tag, create shortcut to access PDF.js exports.
  const pdfjsLib = window['pdfjs-dist/build/pdf'];

  // The workerSrc property shall be specified.
  pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

  const brocure = new Brocure(pdfjsLib, testUrl, htmlElement);
  brocure.init();
});
