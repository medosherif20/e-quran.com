import header from './header.js';
import footer from './footer.js';
import ads from './ads.js';
import home from './home.js';
import history from './history.js';
import readers from './readers.js';
import hisnmuslim from './hisnmuslim.js';
import Lectures from './Lectures.js';





import loadGA from './ga.js';

async function init() {
  await loadGA(); // نتأكد إن gtag جاهز قبل أي كود يعتمد عليه

  // هنا تقدر تستخدم gtag بأمان
  gtag('event', 'page_view', { page_path: location.pathname });

  // باقي الأكواد عندك
}

init();








const hostname = window.location.origin;

/* Open Graph | Image Preview */
// const hostname = window.location.origin;
// document.querySelector('meta[property="og:image"]').content = `${hostname}/files/image/preview.png`

/* HEADER AND FOORER LOAD  */

await header();
await footer();
await ads();

/* PAGES LOAD  */

await home();
await history();
await readers();
await hisnmuslim();
await Lectures();

/* DOM LOAD EVENT */

// const root = document.querySelector(':root');
// const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
// const myVariables = {
//     '--color-font': '#eff6ff'
//   };
//   setVariables(myVariables);