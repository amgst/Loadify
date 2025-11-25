import { LoaderItem } from '../types';

const loaderClassRegex = /\.loader/g;

const buildLoaderHtml = (html: string, id: string): string => {
  if (html.includes(`loader-${id}`)) {
    return html;
  }
  if (html.includes('class="loader"')) {
    return html.replace('class="loader"', `class="loader-${id}"`);
  }
  return `<div class="loader-${id}">${html}</div>`;
};

const scopeLoaderCss = (css: string, id: string): string =>
  css.replace(loaderClassRegex, `.loader-${id}`);

const createSpinner = (
  id: string,
  name: string,
  css: string,
  html: string = '<div class="loader"></div>'
): LoaderItem => ({
  id,
  name,
  type: 'spinner',
  html: buildLoaderHtml(html, id),
  css: scopeLoaderCss(css, id)
});

const createDots = (id: string, name: string, css: string, count: number = 3): LoaderItem => {
  const divs = Array(count).fill('<div></div>').join('');
  return {
    id, name, type: 'dots',
    html: buildLoaderHtml(`<div class="loader">${divs}</div>`, id),
    css: scopeLoaderCss(css, id)
  };
};

const createBar = (id: string, name: string, css: string, count: number = 5): LoaderItem => {
  const divs = Array(count).fill('<div></div>').join('');
  return {
    id, name, type: 'bar',
    html: buildLoaderHtml(`<div class="loader">${divs}</div>`, id),
    css: scopeLoaderCss(css, id)
  };
};

const createGrid = (id: string, name: string, css: string, html: string): LoaderItem => ({
  id,
  name,
  type: 'grid',
  html: buildLoaderHtml(html, id),
  css: scopeLoaderCss(css, id)
});

const createPulse = (id: string, name: string, css: string, html: string = '<div class="loader"></div>'): LoaderItem => ({
  id,
  name,
  type: 'pulse',
  html: buildLoaderHtml(html, id),
  css: scopeLoaderCss(css, id)
});

export const initialLoaders: LoaderItem[] = [
  // --- SPINNERS (25) ---
  {
    id: 'spinner-classic',
    name: 'Classic Spinner',
    type: 'spinner',
    html: '<div class="loader-spinner-classic"></div>',
    css: `.loader-spinner-classic {
  width: var(--loader-size);
  height: var(--loader-size);
  border: calc(var(--loader-size) * 0.1) solid rgba(255,255,255,0.1);
  border-left-color: var(--loader-color);
  border-radius: 50%;
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`
  },
  createSpinner('spinner-dashed', 'Dashed Circle', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border: calc(var(--loader-size) * 0.1) dashed var(--loader-color);
  border-radius: 50%;
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-dots-circle', 'Dotted Circle', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border: calc(var(--loader-size) * 0.1) dotted var(--loader-color);
  border-radius: 50%;
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-quarter', 'Quarter Arc', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border: calc(var(--loader-size) * 0.1) solid transparent;
  border-top-color: var(--loader-color);
  border-radius: 50%;
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-dual-ring', 'Dual Ring', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
}
.loader:after {
  content: " ";
  display: block;
  width: 80%;
  height: 80%;
  margin: 10%;
  border-radius: 50%;
  border: calc(var(--loader-size) * 0.1) solid var(--loader-color);
  border-color: var(--loader-color) transparent var(--loader-color) transparent;
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-grow', 'Growing Circle', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  background-color: var(--loader-color);
  border-radius: 50%;
  animation: scale var(--loader-speed) infinite ease-in-out;
}
@keyframes scale { 0% { transform: scale(0); } 100% { transform: scale(1.0); opacity: 0; } }`),
  createSpinner('spinner-fade', 'Fading Circle', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  background-color: var(--loader-color);
  border-radius: 50%;
  animation: fade var(--loader-speed) infinite ease-in-out;
}
@keyframes fade { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }`),
  createSpinner('spinner-double-bounce', 'Double Bounce', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  position: relative;
}
.loader:before, .loader:after {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--loader-color);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: bounce var(--loader-speed) infinite ease-in-out;
}
.loader:after { animation-delay: calc(var(--loader-speed) / -2); }
@keyframes bounce { 0%, 100% { transform: scale(0); } 50% { transform: scale(1); } }`),
  createSpinner('spinner-triangle', 'Triangle Spin', `
.loader {
  width: 0;
  height: 0;
  border-left: calc(var(--loader-size) / 2) solid transparent;
  border-right: calc(var(--loader-size) / 2) solid transparent;
  border-bottom: var(--loader-size) solid var(--loader-color);
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-square', 'Square Spin', `
.loader {
  width: calc(var(--loader-size) * 0.6);
  height: calc(var(--loader-size) * 0.6);
  background-color: var(--loader-color);
  animation: rotateplane var(--loader-speed) infinite ease-in-out;
}
@keyframes rotateplane {
  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
  50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
  100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); }
}`),
  createSpinner('spinner-clock', 'Clock', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border: 2px solid var(--loader-color);
  border-radius: 50%;
  position: relative;
}
.loader:before, .loader:after {
  content: '';
  position: absolute;
  background: var(--loader-color);
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
}
.loader:before { height: 2px; width: 40%; animation: spin var(--loader-speed) linear infinite; }
.loader:after { height: 2px; width: 30%; animation: spin calc(var(--loader-speed) * 12) linear infinite; }
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-radar', 'Radar', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: 50%;
  border: 2px solid var(--loader-color);
  position: relative;
  overflow: hidden;
}
.loader:after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: conic-gradient(from 0deg, transparent 0%, var(--loader-color) 100%);
  border-radius: 50%;
  animation: spin var(--loader-speed) linear infinite;
  opacity: 0.5;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-yin-yang', 'Yin Yang', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: 50%;
  border: 2px solid var(--loader-color);
  background: linear-gradient(to bottom, #fff 50%, var(--loader-color) 50%);
  animation: spin var(--loader-speed) linear infinite;
  display: flex;
  align-items: center;
}
.loader:before, .loader:after {
  content: '';
  width: 50%; height: 50%;
  border-radius: 50%;
  margin-left: 25%;
}
.loader:before { background: #fff; border: calc(var(--loader-size) / 8) solid var(--loader-color); }
.loader:after { background: var(--loader-color); border: calc(var(--loader-size) / 8) solid #fff; margin-left: -50%; }
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-orbit', 'Orbit', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: 50%;
  position: relative;
}
.loader:before, .loader:after {
  content: '';
  position: absolute;
  width: 20%; height: 20%;
  border-radius: 50%;
  background: var(--loader-color);
  top: 0; left: 40%;
  animation: orbit var(--loader-speed) ease-in-out infinite;
  transform-origin: 50% 250%;
}
.loader:after {
  top: auto; bottom: 0;
  animation-delay: calc(var(--loader-speed) / -2);
  transform-origin: 50% -150%;
}
@keyframes orbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-gear', 'Gear', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  background: var(--loader-color);
  border-radius: 50%;
  border: 4px dashed #0f172a;
  mask: radial-gradient(transparent 40%, black 41%);
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-circle-notch', 'Circle Notch', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border: calc(var(--loader-size) * 0.1) solid var(--loader-color);
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-atom', 'Atom', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  position: relative;
}
.loader:before, .loader:after, .loader > div {
  content: "";
  position: absolute;
  width: 100%; height: 100%;
  border-radius: 50%;
  border: 2px solid var(--loader-color);
  animation: spin var(--loader-speed) linear infinite;
}
.loader:before { transform: rotate(60deg); }
.loader:after { transform: rotate(120deg); }
@keyframes spin { 100% { transform: rotate(360deg); } }`, '<div><div></div></div>'),
  createSpinner('spinner-pulse-ring', 'Pulse Ring', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border: 4px solid var(--loader-color);
  border-radius: 50%;
  animation: ring-pulse var(--loader-speed) cubic-bezier(0.5, 0, 0.5, 1) infinite;
  opacity: 0;
}
@keyframes ring-pulse { 0% { transform: scale(0.1); opacity: 1; } 100% { transform: scale(1); opacity: 0; } }`),
  createSpinner('spinner-wifi', 'Wifi', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.loader:before {
  content: ''; position: absolute; top: 70%; left: 45%; width: 10%; height: 10%; background: var(--loader-color); border-radius: 50%;
  box-shadow: 0 -15px 0 0 transparent, 0 -15px 0 3px var(--loader-color),
              0 -30px 0 0 transparent, 0 -30px 0 3px var(--loader-color);
  animation: wifi var(--loader-speed) linear infinite;
}
@keyframes wifi { 0% { opacity: 0.2; } 50% { opacity: 1; } 100% { opacity: 0.2; } }`),
  createSpinner('spinner-hourglass', 'Hourglass Spin', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border: calc(var(--loader-size) * 0.4) solid var(--loader-color);
  border-color: var(--loader-color) transparent var(--loader-color) transparent;
  border-radius: 50%;
  animation: hourglass var(--loader-speed) infinite ease-in-out;
}
@keyframes hourglass { 0% { transform: rotate(0); } 100% { transform: rotate(180deg); } }`),
  createSpinner('spinner-cross', 'Cross Spin', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  background: var(--loader-color);
  clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-eclipse', 'Eclipse', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: 50%;
  background: var(--loader-color);
  animation: eclipse var(--loader-speed) ease-in-out infinite;
}
@keyframes eclipse { 0% { transform: scale(0); } 50% { transform: scale(1); } 100% { transform: scale(0); } }`),
  createSpinner('spinner-breathe', 'Breathing Circle', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  background: transparent;
  border: 4px solid var(--loader-color);
  border-radius: 50%;
  animation: breathe var(--loader-speed) ease-in-out infinite;
}
@keyframes breathe { 0%, 100% { transform: scale(0.8); box-shadow: 0 0 0 0 var(--loader-color); } 50% { transform: scale(1); box-shadow: 0 0 20px 0 var(--loader-color); } }`),
  createSpinner('spinner-snake', 'Snake', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: var(--loader-color);
  border-right-color: var(--loader-color);
  animation: spin var(--loader-speed) linear infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('spinner-fan', 'Fan', `
.loader {
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: 50%;
  border: calc(var(--loader-size) / 2) solid transparent;
  border-top-color: var(--loader-color);
  border-bottom-color: var(--loader-color);
  animation: spin var(--loader-speed) ease-in-out infinite;
}
@keyframes spin { 100% { transform: rotate(360deg); } }`),

  // --- DOTS (25) ---
  createDots('dots-pulse', 'Pulsing Dots', `
.loader { display: flex; gap: 8px; align-items: center; justify-content: center; width: var(--loader-size); height: var(--loader-size); }
.loader div { width: 20%; height: 20%; background: var(--loader-color); border-radius: 50%; animation: pulse var(--loader-speed) ease-in-out infinite both; }
.loader div:nth-child(1) { animation-delay: -0.32s; }
.loader div:nth-child(2) { animation-delay: -0.16s; }
@keyframes pulse { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }`, 3),
  createDots('dots-bounce', 'Bouncing Dots', `
.loader { display: flex; gap: 8px; justify-content: center; width: var(--loader-size); height: var(--loader-size); align-items: flex-end; }
.loader div { width: 20%; height: 20%; background: var(--loader-color); border-radius: 50%; animation: bounce var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(2) { animation-delay: 0.1s; }
.loader div:nth-child(3) { animation-delay: 0.2s; }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-100%); } }`, 3),
  createDots('dots-elastic', 'Elastic Dots', `
.loader { display: flex; gap: 4px; justify-content: center; align-items: center; width: var(--loader-size); height: var(--loader-size); }
.loader div { width: 20%; height: 20%; background: var(--loader-color); border-radius: 50%; animation: elastic var(--loader-speed) infinite; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.1s; }
.loader div:nth-child(3) { animation-delay: 0.2s; }
@keyframes elastic { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.5); } }`, 3),
  createDots('dots-typing', 'Typing', `
.loader { display: flex; gap: 6px; align-items: center; width: var(--loader-size); height: var(--loader-size); }
.loader div { width: 15%; height: 15%; background: var(--loader-color); border-radius: 50%; animation: type var(--loader-speed) infinite; opacity: 0.5; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.2s; }
.loader div:nth-child(3) { animation-delay: 0.4s; }
@keyframes type { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(-5px); opacity: 1; } }`, 3),
  createDots('dots-fade', 'Fading Dots', `
.loader { display: flex; gap: 8px; justify-content: center; width: var(--loader-size); height: var(--loader-size); align-items: center; }
.loader div { width: 20%; height: 20%; background: var(--loader-color); border-radius: 50%; animation: fade var(--loader-speed) linear infinite; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.2s; }
.loader div:nth-child(3) { animation-delay: 0.4s; }
@keyframes fade { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }`, 3),
  createDots('dots-chase', 'Chase Dots', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; animation: rotate var(--loader-speed) infinite linear; }
.loader div { position: absolute; width: 20%; height: 20%; background: var(--loader-color); border-radius: 50%; top: 0; left: 40%; }
.loader div:nth-child(2) { top: 40%; left: 80%; }
.loader div:nth-child(3) { top: 80%; left: 40%; }
.loader div:nth-child(4) { top: 40%; left: 0%; }
@keyframes rotate { 100% { transform: rotate(360deg); } }`, 4),
  createDots('dots-grid', 'Grid Dots', `
.loader { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; width: var(--loader-size); height: var(--loader-size); }
.loader div { background: var(--loader-color); border-radius: 50%; animation: grid-pulse var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(odd) { animation-delay: 0.2s; }
@keyframes grid-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(0.5); opacity: 0.5; } }`, 9),
  createDots('dots-carousel', 'Carousel', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; width: 15%; height: 15%; background: var(--loader-color); border-radius: 50%; animation: carousel var(--loader-speed) infinite linear; transform-origin: 50% 250%; top: 10%; left: 42.5%; }
.loader div:nth-child(2) { animation-delay: -0.2s; }
.loader div:nth-child(3) { animation-delay: -0.4s; }
@keyframes carousel { 100% { transform: rotate(360deg); } }`, 3),
  createDots('dots-wind', 'Windmill', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; top: 50%; left: 50%; width: 10px; height: 10px; background: var(--loader-color); border-radius: 50%; animation: wind var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { transform: translate(-20px, -20px); animation-delay: 0s; }
.loader div:nth-child(2) { transform: translate(10px, -20px); animation-delay: 0.1s; }
.loader div:nth-child(3) { transform: translate(10px, 10px); animation-delay: 0.2s; }
.loader div:nth-child(4) { transform: translate(-20px, 10px); animation-delay: 0.3s; }
@keyframes wind { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`, 4),
  createDots('dots-shuttle', 'Shuttle', `
.loader { display: flex; justify-content: space-between; width: var(--loader-size); height: var(--loader-size); align-items: center; }
.loader div { width: 20%; height: 20%; background: var(--loader-color); border-radius: 50%; animation: shuttle var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(3) { animation-delay: 0.5s; }
@keyframes shuttle { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(200%); } }`, 3),
  createDots('dots-orbit-3', 'Tri-Orbit', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; width: 15%; height: 15%; background: var(--loader-color); border-radius: 50%; top: 42.5%; left: 42.5%; animation: orbit3 var(--loader-speed) infinite linear; }
.loader div:nth-child(1) { transform: translate(150%) rotate(0deg); animation-delay: 0s; }
.loader div:nth-child(2) { transform: translate(150%) rotate(120deg); animation-delay: -0.33s; }
.loader div:nth-child(3) { transform: translate(150%) rotate(240deg); animation-delay: -0.66s; }
@keyframes orbit3 { from { transform: rotate(0deg) translateX(30px) rotate(0deg); } to { transform: rotate(360deg) translateX(30px) rotate(-360deg); } }`, 3),
  createDots('dots-collision', 'Collision', `
.loader { display: flex; justify-content: center; align-items: center; width: var(--loader-size); }
.loader div { width: 20%; height: 20%; background: var(--loader-color); border-radius: 50%; position: absolute; animation: collide var(--loader-speed) infinite ease-in-out; }
.loader div:first-child { left: 0; animation-name: collide-left; }
.loader div:last-child { right: 0; animation-name: collide-right; }
@keyframes collide-left { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(100%); } }
@keyframes collide-right { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-100%); } }`, 2),
  createDots('dots-flow', 'Flow', `
.loader { display: flex; gap: 5px; width: var(--loader-size); flex-wrap: wrap; }
.loader div { width: 10px; height: 10px; background: var(--loader-color); border-radius: 50%; animation: flow var(--loader-speed) infinite linear; }
@keyframes flow { 0% { transform: translateY(0); } 50% { transform: translateY(10px); } 100% { transform: translateY(0); } }`, 5),
  createDots('dots-firefly', 'Firefly', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; width: 10px; height: 10px; background: var(--loader-color); border-radius: 50%; animation: firefly var(--loader-speed) infinite ease-in-out alternate; }
.loader div:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.loader div:nth-child(2) { top: 60%; left: 70%; animation-delay: 0.5s; }
.loader div:nth-child(3) { top: 80%; left: 30%; animation-delay: 1s; }
@keyframes firefly { 0% { opacity: 0.2; transform: scale(1); } 100% { opacity: 1; transform: scale(1.5); } }`, 3),
  createDots('dots-steps', 'Steps', `
.loader { display: flex; gap: 5px; align-items: flex-end; width: var(--loader-size); height: var(--loader-size); }
.loader div { width: 20%; background: var(--loader-color); animation: steps var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { height: 20%; animation-delay: 0s; }
.loader div:nth-child(2) { height: 40%; animation-delay: 0.2s; }
.loader div:nth-child(3) { height: 60%; animation-delay: 0.4s; }
@keyframes steps { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }`, 3),
  createDots('dots-bricks', 'Bricks', `
.loader { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; width: calc(var(--loader-size)*0.6); }
.loader div { width: 100%; padding-top: 100%; background: var(--loader-color); animation: bricks var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(4) { animation-delay: 0.4s; }
@keyframes bricks { 0%, 100% { transform: scale(1); } 50% { transform: scale(0); } }`, 4),
  createDots('dots-snake', 'Snake Dots', `
.loader { display: flex; gap: 4px; width: var(--loader-size); flex-wrap: wrap; }
.loader div { width: 8px; height: 8px; background: var(--loader-color); border-radius: 50%; animation: snake var(--loader-speed) infinite linear; }
@keyframes snake { 0% { transform: translateY(0); } 25% { transform: translateY(5px); } 50% { transform: translateY(0); } 75% { transform: translateY(-5px); } 100% { transform: translateY(0); } }`, 5),
  createDots('dots-rain', 'Rain', `
.loader { display: flex; gap: 6px; width: var(--loader-size); height: var(--loader-size); transform: rotate(15deg); }
.loader div { width: 4px; height: 20px; background: var(--loader-color); border-radius: 2px; animation: rain var(--loader-speed) infinite linear; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.2s; }
.loader div:nth-child(3) { animation-delay: 0.4s; }
@keyframes rain { 0% { transform: translateY(-20px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(20px); opacity: 0; } }`, 3),
  createDots('dots-triangle-path', 'Tri Path', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; width: 10px; height: 10px; background: var(--loader-color); border-radius: 50%; animation: tripath var(--loader-speed) infinite linear; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: calc(var(--loader-speed)/-3); }
.loader div:nth-child(3) { animation-delay: calc(var(--loader-speed)/-1.5); }
@keyframes tripath { 0% { top: 0; left: 50%; } 33% { top: 100%; left: 0; } 66% { top: 100%; left: 100%; } 100% { top: 0; left: 50%; } }`, 3),
  createDots('dots-blur', 'Blur Dots', `
.loader { display: flex; gap: 5px; width: var(--loader-size); justify-content: center; }
.loader div { width: 15px; height: 15px; background: var(--loader-color); border-radius: 50%; filter: blur(2px); animation: blurpulse var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(2) { animation-delay: 0.2s; }
@keyframes blurpulse { 0%, 100% { transform: scale(1); filter: blur(2px); } 50% { transform: scale(1.5); filter: blur(0px); } }`, 3),
  createDots('dots-zipper', 'Zipper', `
.loader { display: flex; gap: 2px; width: var(--loader-size); align-items: center; }
.loader div { width: 10px; height: 10px; background: var(--loader-color); border-radius: 50%; animation: zip var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(odd) { animation-name: zip-up; }
.loader div:nth-child(even) { animation-name: zip-down; }
@keyframes zip-up { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes zip-down { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }`, 6),
  createDots('dots-scanner', 'Scanner', `
.loader { display: flex; gap: 5px; width: var(--loader-size); }
.loader div { width: 100%; height: 5px; background: var(--loader-color); animation: scan var(--loader-speed) infinite linear; opacity: 0.2; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.1s; }
.loader div:nth-child(3) { animation-delay: 0.2s; }
.loader div:nth-child(4) { animation-delay: 0.3s; }
@keyframes scan { 0%, 100% { opacity: 0.2; } 20% { opacity: 1; } }`, 5),
  createDots('dots-flicker', 'Flicker', `
.loader { display: flex; gap: 5px; width: var(--loader-size); justify-content: center; }
.loader div { width: 10px; height: 10px; background: var(--loader-color); border-radius: 50%; animation: flicker var(--loader-speed) infinite random; }
.loader div:nth-child(1) { animation-delay: 0.1s; }
.loader div:nth-child(2) { animation-delay: 0.5s; }
.loader div:nth-child(3) { animation-delay: 0.3s; }
@keyframes flicker { 0% { opacity: 1; } 50% { opacity: 0.2; } 100% { opacity: 1; } }`, 3),
  createDots('dots-shuffle', 'Shuffle', `
.loader { display: flex; gap: 5px; width: var(--loader-size); justify-content: center; }
.loader div { width: 15px; height: 15px; background: var(--loader-color); border-radius: 50%; position: absolute; animation: shuffle var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { left: 30%; animation-delay: 0s; }
.loader div:nth-child(2) { left: 50%; animation-delay: 0.5s; }
.loader div:nth-child(3) { left: 70%; animation-delay: 1s; }
@keyframes shuffle { 0% { transform: translateX(0); } 50% { transform: translateX(20px); } 100% { transform: translateX(0); } }`, 3),
  createDots('dots-pendulum', 'Pendulum', `
.loader { display: flex; gap: 5px; width: var(--loader-size); justify-content: center; border-top: 2px solid #333; padding-top: 5px; }
.loader div { width: 10px; height: 10px; background: var(--loader-color); border-radius: 50%; transform-origin: 50% -15px; animation: pendulum var(--loader-speed) infinite ease-in-out alternate; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation: none; }
.loader div:nth-child(3) { animation-delay: 0.5s; }
@keyframes pendulum { 0% { transform: rotate(30deg); } 100% { transform: rotate(-30deg); } }`, 3),

  // --- BARS (20) ---
  createBar('bar-wave', 'Wave Bars', `
.loader { display: flex; justify-content: space-between; width: var(--loader-size); height: calc(var(--loader-size) * 0.6); }
.loader div { background-color: var(--loader-color); height: 100%; width: 15%; animation: wave var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { animation-delay: -1.2s; }
.loader div:nth-child(2) { animation-delay: -1.1s; }
.loader div:nth-child(3) { animation-delay: -1.0s; }
.loader div:nth-child(4) { animation-delay: -0.9s; }
.loader div:nth-child(5) { animation-delay: -0.8s; }
@keyframes wave { 0%, 40%, 100% { transform: scaleY(0.4); } 20% { transform: scaleY(1); } }`, 5),
  createBar('bar-equalizer', 'Equalizer', `
.loader { display: flex; gap: 4px; width: var(--loader-size); height: var(--loader-size); align-items: flex-end; }
.loader div { background-color: var(--loader-color); width: 20%; animation: equalizer var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { height: 60%; animation-delay: 0s; }
.loader div:nth-child(2) { height: 30%; animation-delay: 0.2s; }
.loader div:nth-child(3) { height: 70%; animation-delay: 0.4s; }
.loader div:nth-child(4) { height: 40%; animation-delay: 0.1s; }
.loader div:nth-child(5) { height: 50%; animation-delay: 0.3s; }
@keyframes equalizer { 0%, 100% { height: 20%; } 50% { height: 100%; } }`, 5),
  createBar('bar-stretch', 'Stretch', `
.loader { display: flex; gap: 4px; width: var(--loader-size); height: 40px; align-items: center; }
.loader div { background-color: var(--loader-color); width: 20%; height: 100%; border-radius: 4px; animation: stretch var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(2) { animation-delay: 0.1s; }
.loader div:nth-child(3) { animation-delay: 0.2s; }
@keyframes stretch { 0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); } }`, 5),
  createBar('bar-stair', 'Staircase', `
.loader { display: flex; gap: 2px; width: var(--loader-size); height: var(--loader-size); align-items: flex-end; }
.loader div { background-color: var(--loader-color); width: 20%; animation: stair var(--loader-speed) infinite linear; }
.loader div:nth-child(1) { height: 20%; animation-delay: 0s; }
.loader div:nth-child(2) { height: 40%; animation-delay: 0.2s; }
.loader div:nth-child(3) { height: 60%; animation-delay: 0.4s; }
.loader div:nth-child(4) { height: 80%; animation-delay: 0.6s; }
.loader div:nth-child(5) { height: 100%; animation-delay: 0.8s; }
@keyframes stair { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }`, 5),
  createBar('bar-escalator', 'Escalator', `
.loader { display: flex; gap: 5px; width: var(--loader-size); height: var(--loader-size); overflow: hidden; }
.loader div { width: 20%; height: 100%; background: var(--loader-color); animation: escalator var(--loader-speed) infinite linear; transform: translateY(100%); }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.2s; }
.loader div:nth-child(3) { animation-delay: 0.4s; }
.loader div:nth-child(4) { animation-delay: 0.6s; }
.loader div:nth-child(5) { animation-delay: 0.8s; }
@keyframes escalator { 0% { transform: translateY(100%); } 100% { transform: translateY(-100%); } }`, 5),
  createBar('bar-music', 'Music', `
.loader { display: flex; gap: 2px; width: var(--loader-size); height: var(--loader-size); align-items: center; }
.loader div { width: 15%; background: var(--loader-color); animation: music var(--loader-speed) infinite ease-in-out alternate; border-radius: 4px; }
.loader div:nth-child(1) { height: 20%; animation-delay: 0s; }
.loader div:nth-child(2) { height: 40%; animation-delay: 0.2s; }
.loader div:nth-child(3) { height: 80%; animation-delay: 0.4s; }
.loader div:nth-child(4) { height: 40%; animation-delay: 0.1s; }
.loader div:nth-child(5) { height: 20%; animation-delay: 0.3s; }
@keyframes music { 0% { height: 10%; } 100% { height: 100%; } }`, 5),
  createBar('bar-dna', 'DNA', `
.loader { display: flex; gap: 4px; width: var(--loader-size); height: 50px; align-items: center; }
.loader div { width: 8px; height: 100%; background: var(--loader-color); border-radius: 4px; animation: dna var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.1s; }
.loader div:nth-child(3) { animation-delay: 0.2s; }
.loader div:nth-child(4) { animation-delay: 0.3s; }
.loader div:nth-child(5) { animation-delay: 0.4s; }
@keyframes dna { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }`, 5),
  createBar('bar-progress', 'Progress Line', `
.loader { width: var(--loader-size); height: 4px; background: #333; position: relative; overflow: hidden; border-radius: 2px; }
.loader:after { content: ''; position: absolute; top: 0; left: 0; height: 100%; width: 50%; background: var(--loader-color); animation: progress var(--loader-speed) infinite ease-in-out; }
@keyframes progress { 0% { left: -50%; } 100% { left: 100%; } }`, 0),
  createBar('bar-pulse', 'Pulse Bar', `
.loader { width: var(--loader-size); height: 10px; background: #333; border-radius: 5px; position: relative; }
.loader:after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px; background: var(--loader-color); animation: bar-pulse var(--loader-speed) infinite ease-in-out; }
@keyframes bar-pulse { 0%, 100% { opacity: 0.2; transform: scaleX(0.5); } 50% { opacity: 1; transform: scaleX(1); } }`, 0),
  createBar('bar-sliding', 'Sliding Bars', `
.loader { display: flex; flex-direction: column; gap: 4px; width: var(--loader-size); }
.loader div { height: 6px; width: 100%; background: var(--loader-color); border-radius: 3px; animation: slide var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { width: 80%; animation-delay: 0s; }
.loader div:nth-child(2) { width: 60%; animation-delay: 0.2s; }
.loader div:nth-child(3) { width: 90%; animation-delay: 0.4s; }
@keyframes slide { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(10px); } }`, 3),
  createBar('bar-rotate', 'Rotating Bars', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; left: 45%; top: 0; width: 10%; height: 25%; background: var(--loader-color); border-radius: 4px; transform-origin: 50% 200%; animation: fade var(--loader-speed) infinite linear; }
.loader div:nth-child(1) { transform: rotate(0deg); animation-delay: -0.9s; }
.loader div:nth-child(2) { transform: rotate(45deg); animation-delay: -0.8s; }
.loader div:nth-child(3) { transform: rotate(90deg); animation-delay: -0.7s; }
.loader div:nth-child(4) { transform: rotate(135deg); animation-delay: -0.6s; }
.loader div:nth-child(5) { transform: rotate(180deg); animation-delay: -0.5s; }
.loader div:nth-child(6) { transform: rotate(225deg); animation-delay: -0.4s; }
.loader div:nth-child(7) { transform: rotate(270deg); animation-delay: -0.3s; }
.loader div:nth-child(8) { transform: rotate(315deg); animation-delay: -0.2s; }
@keyframes fade { 0% { opacity: 1; } 100% { opacity: 0.1; } }`, 8),
  createBar('bar-cross', 'Cross Bars', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; background: var(--loader-color); animation: cross var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { width: 100%; height: 20%; top: 40%; left: 0; }
.loader div:nth-child(2) { width: 20%; height: 100%; top: 0; left: 40%; animation-delay: 0.5s; }
@keyframes cross { 0%, 100% { transform: scale(1); } 50% { transform: scale(0.5); } }`, 2),
  createBar('bar-bounce', 'Bouncing Bar', `
.loader { width: 10px; height: var(--loader-size); background: #333; position: relative; overflow: hidden; border-radius: 5px; }
.loader div { width: 100%; height: 20%; background: var(--loader-color); position: absolute; border-radius: 50%; animation: bounce-vertical var(--loader-speed) infinite ease-in-out; }
@keyframes bounce-vertical { 0%, 100% { top: 0; } 50% { top: 80%; } }`, 1),
  createBar('bar-fill', 'Fill Bar', `
.loader { width: var(--loader-size); height: 20px; border: 2px solid var(--loader-color); padding: 2px; border-radius: 10px; }
.loader div { width: 0%; height: 100%; background: var(--loader-color); border-radius: 8px; animation: fill var(--loader-speed) infinite linear; }
@keyframes fill { 0% { width: 0%; } 100% { width: 100%; } }`, 1),
  createBar('bar-stack', 'Stack', `
.loader { display: flex; flex-direction: column-reverse; gap: 2px; width: 20px; height: var(--loader-size); }
.loader div { width: 100%; height: 20%; background: var(--loader-color); animation: stack var(--loader-speed) infinite ease-in-out; opacity: 0; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.2s; }
.loader div:nth-child(3) { animation-delay: 0.4s; }
.loader div:nth-child(4) { animation-delay: 0.6s; }
.loader div:nth-child(5) { animation-delay: 0.8s; }
@keyframes stack { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }`, 5),
  createBar('bar-pendulum', 'Bar Pendulum', `
.loader { display: flex; gap: 2px; width: var(--loader-size); height: 40px; }
.loader div { width: 20%; background: var(--loader-color); animation: pendulum-h var(--loader-speed) infinite ease-in-out alternate; }
@keyframes pendulum-h { from { height: 10%; } to { height: 100%; } }`, 5),
  createBar('bar-fade', 'Fade Bars', `
.loader { display: flex; gap: 4px; width: var(--loader-size); height: 40px; }
.loader div { flex: 1; background: var(--loader-color); animation: fade-bar var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.2s; }
.loader div:nth-child(3) { animation-delay: 0.4s; }
@keyframes fade-bar { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }`, 3),
  createBar('bar-grow', 'Growing Bars', `
.loader { display: flex; gap: 4px; width: var(--loader-size); height: var(--loader-size); align-items: center; }
.loader div { width: 20%; background: var(--loader-color); animation: grow var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { height: 20%; animation-delay: 0s; }
.loader div:nth-child(3) { height: 20%; animation-delay: 0.5s; }
@keyframes grow { 0%, 100% { height: 20%; } 50% { height: 100%; } }`, 3),
  createBar('bar-circle', 'Circle Bars', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; width: 6px; height: 15px; background: var(--loader-color); border-radius: 3px; left: 48%; top: 40%; transform-origin: 50% 25px; animation: spin-fade var(--loader-speed) infinite linear; }
.loader div:nth-child(1) { transform: rotate(0deg); animation-delay: -1.1s; }
.loader div:nth-child(2) { transform: rotate(30deg); animation-delay: -1s; }
.loader div:nth-child(3) { transform: rotate(60deg); animation-delay: -0.9s; }
.loader div:nth-child(4) { transform: rotate(90deg); animation-delay: -0.8s; }
.loader div:nth-child(5) { transform: rotate(120deg); animation-delay: -0.7s; }
.loader div:nth-child(6) { transform: rotate(150deg); animation-delay: -0.6s; }
.loader div:nth-child(7) { transform: rotate(180deg); animation-delay: -0.5s; }
.loader div:nth-child(8) { transform: rotate(210deg); animation-delay: -0.4s; }
.loader div:nth-child(9) { transform: rotate(240deg); animation-delay: -0.3s; }
.loader div:nth-child(10) { transform: rotate(270deg); animation-delay: -0.2s; }
.loader div:nth-child(11) { transform: rotate(300deg); animation-delay: -0.1s; }
.loader div:nth-child(12) { transform: rotate(330deg); animation-delay: 0s; }
@keyframes spin-fade { 0% { opacity: 1; } 100% { opacity: 0.2; } }`, 12),
  createBar('bar-brick-wall', 'Brick Wall', `
.loader { display: flex; flex-wrap: wrap; width: 40px; gap: 2px; }
.loader div { width: 12px; height: 6px; background: var(--loader-color); animation: wall var(--loader-speed) infinite; opacity: 0; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.1s; }
.loader div:nth-child(3) { animation-delay: 0.2s; }
.loader div:nth-child(4) { animation-delay: 0.3s; }
@keyframes wall { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }`, 4),

  // --- GRID (10) ---
  {
    id: 'grid-cube',
    name: 'Grid Cube',
    type: 'grid',
    html: `<div class="loader-grid-cube"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`,
    css: `.loader-grid-cube {
  display: inline-grid; grid-template-columns: repeat(3, 1fr); gap: 2px; width: var(--loader-size); height: var(--loader-size);
}
.loader-grid-cube div { width: 100%; height: 100%; background-color: var(--loader-color); animation: grid-fade var(--loader-speed) infinite ease-in-out; }
.loader-grid-cube div:nth-child(1) { animation-delay: 0.2s; }
.loader-grid-cube div:nth-child(2) { animation-delay: 0.3s; }
.loader-grid-cube div:nth-child(3) { animation-delay: 0.4s; }
.loader-grid-cube div:nth-child(4) { animation-delay: 0.1s; }
.loader-grid-cube div:nth-child(5) { animation-delay: 0.2s; }
.loader-grid-cube div:nth-child(6) { animation-delay: 0.3s; }
.loader-grid-cube div:nth-child(7) { animation-delay: 0s; }
.loader-grid-cube div:nth-child(8) { animation-delay: 0.1s; }
.loader-grid-cube div:nth-child(9) { animation-delay: 0.2s; }
@keyframes grid-fade { 0%, 70%, 100% { opacity: 1; transform: scale(1); } 35% { opacity: 0; transform: scale(0.5); } }`
  },
  createGrid('grid-shuffle', 'Grid Shuffle', `
.loader { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px; width: var(--loader-size); height: var(--loader-size); }
.loader div { background: var(--loader-color); animation: shuffle-grid var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: 0.2s; }
.loader div:nth-child(3) { animation-delay: 0.4s; }
.loader div:nth-child(4) { animation-delay: 0.6s; }
@keyframes shuffle-grid { 0% { transform: scale(1); } 50% { transform: scale(0.5) rotate(90deg); } 100% { transform: scale(1) rotate(180deg); } }`, `<div>${'<div></div>'.repeat(4)}</div>`),
  createGrid('grid-scale', 'Grid Scale', `
.loader { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; width: var(--loader-size); height: var(--loader-size); }
.loader div { background: var(--loader-color); animation: scale-grid var(--loader-speed) infinite ease-in-out; }
@keyframes scale-grid { 0%, 100% { transform: scale(1); } 50% { transform: scale(0.5); } }`, `<div>${'<div></div>'.repeat(9)}</div>`),
  createGrid('grid-rotate', 'Grid Rotate', `
.loader { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px; width: var(--loader-size); height: var(--loader-size); animation: rotate-grid var(--loader-speed) infinite steps(4); }
.loader div { background: var(--loader-color); }
.loader div:nth-child(1) { opacity: 0.4; }
.loader div:nth-child(2) { opacity: 0.6; }
.loader div:nth-child(3) { opacity: 0.8; }
.loader div:nth-child(4) { opacity: 1; }
@keyframes rotate-grid { 100% { transform: rotate(360deg); } }`, `<div>${'<div></div>'.repeat(4)}</div>`),
  createGrid('grid-cross', 'Grid Cross', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; background: var(--loader-color); width: 30%; height: 30%; animation: cross-move var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(1) { top: 0; left: 0; animation-name: cross-tl; }
.loader div:nth-child(2) { top: 0; right: 0; animation-name: cross-tr; }
.loader div:nth-child(3) { bottom: 0; left: 0; animation-name: cross-bl; }
.loader div:nth-child(4) { bottom: 0; right: 0; animation-name: cross-br; }
@keyframes cross-tl { 0%, 100% { top: 0; left: 0; } 50% { top: 70%; left: 70%; } }
@keyframes cross-tr { 0%, 100% { top: 0; right: 0; } 50% { top: 70%; right: 70%; } }
@keyframes cross-bl { 0%, 100% { bottom: 0; left: 0; } 50% { bottom: 70%; left: 70%; } }
@keyframes cross-br { 0%, 100% { bottom: 0; right: 0; } 50% { bottom: 70%; right: 70%; } }`, `<div>${'<div></div>'.repeat(4)}</div>`),
  createGrid('grid-random', 'Random Fade', `
.loader { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; width: var(--loader-size); height: var(--loader-size); }
.loader div { background: var(--loader-color); animation: random-fade var(--loader-speed) infinite linear; }
.loader div:nth-child(1) { animation-delay: 0.1s; }
.loader div:nth-child(5) { animation-delay: 0.5s; }
.loader div:nth-child(9) { animation-delay: 0.9s; }
@keyframes random-fade { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }`, `<div>${'<div></div>'.repeat(9)}</div>`),
  createGrid('grid-fold', 'Folding', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; transform: rotateZ(45deg); }
.loader div { position: absolute; transform: rotateZ(0); width: 50%; height: 50%; background: var(--loader-color); animation: fold var(--loader-speed) infinite linear; transform-origin: 100% 100%; }
.loader div:nth-child(2) { transform: rotateZ(90deg); animation-delay: 0.3s; }
.loader div:nth-child(3) { transform: rotateZ(180deg); animation-delay: 0.6s; }
.loader div:nth-child(4) { transform: rotateZ(270deg); animation-delay: 0.9s; }
@keyframes fold { 0%, 10% { transform: perspective(140px) rotateX(-180deg); opacity: 0; } 25%, 75% { transform: perspective(140px) rotateX(0deg); opacity: 1; } 90%, 100% { transform: perspective(140px) rotateY(180deg); opacity: 0; } }`, `<div>${'<div></div>'.repeat(4)}</div>`),
  createGrid('grid-wave', 'Wave Matrix', `
.loader { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; width: var(--loader-size); height: var(--loader-size); }
.loader div { background: var(--loader-color); border-radius: 4px; animation: grid-wave var(--loader-speed) ease-in-out infinite; }
.loader div:nth-child(4n+1) { animation-delay: 0s; }
.loader div:nth-child(4n+2) { animation-delay: 0.1s; }
.loader div:nth-child(4n+3) { animation-delay: 0.2s; }
.loader div:nth-child(4n) { animation-delay: 0.3s; }
@keyframes grid-wave { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(-35%); opacity: 1; } }`, `<div>${'<div></div>'.repeat(16)}</div>`),
  createGrid('grid-luminate', 'Luminate Grid', `
.loader { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; width: var(--loader-size); height: var(--loader-size); }
.loader div { background: var(--loader-color); opacity: 0.2; animation: grid-luminate var(--loader-speed) linear infinite; }
.loader div:nth-child(5n+1) { animation-delay: 0s; }
.loader div:nth-child(5n+2) { animation-delay: 0.1s; }
.loader div:nth-child(5n+3) { animation-delay: 0.2s; }
.loader div:nth-child(5n+4) { animation-delay: 0.3s; }
.loader div:nth-child(5n) { animation-delay: 0.4s; }
@keyframes grid-luminate { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }`, `<div>${'<div></div>'.repeat(25)}</div>`),
  createGrid('grid-shift', 'Shift Blocks', `
.loader { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; width: var(--loader-size); height: var(--loader-size); }
.loader div { background: var(--loader-color); animation: grid-shift var(--loader-speed) ease-in-out infinite; }
.loader div:nth-child(3n+1) { animation-delay: 0s; }
.loader div:nth-child(3n+2) { animation-delay: 0.1s; }
.loader div:nth-child(3n) { animation-delay: 0.2s; }
@keyframes grid-shift { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(25%); } }`, `<div>${'<div></div>'.repeat(9)}</div>`),
  createGrid('grid-tilt', 'Tilt Grid', `
.loader { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; width: var(--loader-size); height: var(--loader-size); perspective: 400px; }
.loader div { background: var(--loader-color); border-radius: 6px; animation: grid-tilt var(--loader-speed) linear infinite; transform-origin: center; }
.loader div:nth-child(odd) { animation-delay: 0.15s; }
.loader div:nth-child(even) { animation-delay: 0.3s; }
@keyframes grid-tilt { 0% { transform: rotateX(0deg) rotateY(0deg); } 50% { transform: rotateX(35deg) rotateY(35deg); opacity: 0.6; } 100% { transform: rotateX(0deg) rotateY(0deg); } }`, `<div>${'<div></div>'.repeat(9)}</div>`),

  // --- PULSE (10) ---
  {
    id: 'heart-beat',
    name: 'Heart Beat',
    type: 'pulse',
    html: `<div class="loader-heart"><div></div></div>`,
    css: `.loader-heart { display: inline-block; position: relative; width: var(--loader-size); height: var(--loader-size); transform: rotate(45deg); }
.loader-heart div { top: 30%; left: 30%; position: absolute; width: 40%; height: 40%; background: var(--loader-color); animation: heart var(--loader-speed) infinite; }
.loader-heart div:after, .loader-heart div:before { content: ""; position: absolute; display: block; width: 100%; height: 100%; background: var(--loader-color); border-radius: 50%; }
.loader-heart div:before { left: -50%; } .loader-heart div:after { top: -50%; }
@keyframes heart { 0% { transform: scale(0.95); } 5% { transform: scale(1.1); } 39% { transform: scale(0.85); } 45% { transform: scale(1); } 60% { transform: scale(0.95); } 100% { transform: scale(0.9); } }`
  },
  createPulse('pulse-ripple', 'Ripple', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; border: 4px solid var(--loader-color); opacity: 1; border-radius: 50%; animation: ripple var(--loader-speed) cubic-bezier(0, 0.2, 0.8, 1) infinite; }
.loader div:nth-child(2) { animation-delay: -0.5s; }
@keyframes ripple { 0% { top: 45%; left: 45%; width: 10%; height: 10%; opacity: 1; } 100% { top: 0px; left: 0px; width: 90%; height: 90%; opacity: 0; } }`, '<div><div></div><div></div></div>'),
  createPulse('pulse-ping', 'Ping', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; width: 100%; height: 100%; border-radius: 50%; background: var(--loader-color); opacity: 0.6; animation: ping var(--loader-speed) infinite cubic-bezier(0, 0, 0.2, 1); }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }`, '<div><div></div></div>'),
  createPulse('pulse-beacon', 'Beacon', `
.loader { width: var(--loader-size); height: var(--loader-size); background: var(--loader-color); border-radius: 50%; animation: beacon var(--loader-speed) infinite ease-in-out; }
@keyframes beacon { 0% { transform: scale(0.8); box-shadow: 0 0 0 0 var(--loader-color); } 70% { transform: scale(1); box-shadow: 0 0 0 20px transparent; } 100% { transform: scale(0.8); } }`),
  createPulse('pulse-square', 'Square Pulse', `
.loader { width: var(--loader-size); height: var(--loader-size); background: var(--loader-color); animation: square-pulse var(--loader-speed) infinite ease-in-out; }
@keyframes square-pulse { 0% { transform: scale(0.8); opacity: 0.5; } 50% { transform: scale(1); opacity: 1; } 100% { transform: scale(0.8); opacity: 0.5; } }`),
  createPulse('pulse-radar-2', 'Radar Scan', `
.loader { width: var(--loader-size); height: var(--loader-size); border: 2px solid var(--loader-color); border-radius: 50%; position: relative; }
.loader:after { content: ''; position: absolute; width: 4px; height: 50%; background: var(--loader-color); top: 50%; left: 50%; transform-origin: 0 0; animation: scan2 var(--loader-speed) linear infinite; }
@keyframes scan2 { 100% { transform: rotate(360deg); } }`),
  createPulse('pulse-grow', 'Grow', `
.loader { width: var(--loader-size); height: var(--loader-size); background: var(--loader-color); border-radius: 50%; animation: grow-pulse var(--loader-speed) infinite alternate; }
@keyframes grow-pulse { from { transform: scale(0.5); } to { transform: scale(1); } }`),
  createPulse('pulse-shadow', 'Shadow Pulse', `
.loader { width: var(--loader-size); height: var(--loader-size); background: var(--loader-color); border-radius: 50%; animation: shadow-pulse var(--loader-speed) infinite; }
@keyframes shadow-pulse { 0% { box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.2); } 100% { box-shadow: 0 0 0 20px rgba(255, 255, 255, 0); } }`),
  createPulse('pulse-border', 'Border Pulse', `
.loader { width: var(--loader-size); height: var(--loader-size); border: 4px solid var(--loader-color); border-radius: 50%; animation: border-p var(--loader-speed) infinite ease-in-out; }
@keyframes border-p { 0% { border-width: 4px; } 50% { border-width: 20px; opacity: 0.5; } 100% { border-width: 4px; } }`),
  createPulse('pulse-double', 'Double Pulse', `
.loader { width: var(--loader-size); height: var(--loader-size); position: relative; }
.loader div { position: absolute; width: 100%; height: 100%; border-radius: 50%; background: var(--loader-color); opacity: 0.6; animation: double-p var(--loader-speed) infinite ease-in-out; }
.loader div:nth-child(2) { animation-delay: -1s; }
@keyframes double-p { 0%, 100% { transform: scale(0); } 50% { transform: scale(1); } }`, '<div><div></div><div></div></div>'),

  // --- SHAPES/OTHER (10) ---
  {
    id: 'infinity-spin',
    name: 'Infinity Loop',
    type: 'spinner',
    html: '<div class="loader-infinity"></div>',
    css: `.loader-infinity { width: var(--loader-size); height: calc(var(--loader-size) / 2); position: relative; }
.loader-infinity:before, .loader-infinity:after { content: ""; position: absolute; top: 0; left: 0; width: calc(var(--loader-size) / 2); height: calc(var(--loader-size) / 2); border: 4px solid var(--loader-color); border-radius: 50%; animation: infinity var(--loader-speed) linear infinite; box-sizing: border-box; }
.loader-infinity:after { left: auto; right: 0; animation-delay: calc(var(--loader-speed) / -2); }
@keyframes infinity { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`
  },
  createSpinner('shape-triangle', 'Triangle', `
.loader { width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-bottom: 50px solid var(--loader-color); animation: triangle-spin var(--loader-speed) infinite linear; }
@keyframes triangle-spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('shape-diamond', 'Diamond', `
.loader { width: 40px; height: 40px; background: var(--loader-color); transform: rotate(45deg); animation: diamond-breath var(--loader-speed) infinite alternate; }
@keyframes diamond-breath { 0% { transform: rotate(45deg) scale(0.8); } 100% { transform: rotate(45deg) scale(1.2); } }`),
  createSpinner('shape-star', 'Star', `
.loader { width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 40px solid var(--loader-color); position: relative; animation: star-spin var(--loader-speed) infinite linear; }
.loader:after { content: ''; width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-top: 40px solid var(--loader-color); position: absolute; top: 15px; left: -20px; }
@keyframes star-spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('shape-box-3d', 'Box 3D', `
.loader { width: 40px; height: 40px; background: var(--loader-color); animation: box-3d var(--loader-speed) infinite ease-in-out; }
@keyframes box-3d { 0% { transform: perspective(100px) rotateX(0) rotateY(0); } 50% { transform: perspective(100px) rotateX(-180deg) rotateY(0); } 100% { transform: perspective(100px) rotateX(-180deg) rotateY(-180deg); } }`),
  createSpinner('shape-cross', 'Plus', `
.loader { width: 40px; height: 40px; position: relative; animation: plus-spin var(--loader-speed) infinite linear; }
.loader:before, .loader:after { content: ''; position: absolute; background: var(--loader-color); }
.loader:before { width: 100%; height: 10px; top: 15px; left: 0; }
.loader:after { width: 10px; height: 100%; left: 15px; top: 0; }
@keyframes plus-spin { 100% { transform: rotate(360deg); } }`),
  createSpinner('shape-circle-square', 'Morph', `
.loader { width: 40px; height: 40px; background: var(--loader-color); animation: morph var(--loader-speed) infinite ease-in-out; }
@keyframes morph { 0%, 100% { border-radius: 50%; transform: rotate(0deg); } 50% { border-radius: 0%; transform: rotate(180deg); } }`),
  createSpinner('shape-pacman', 'Eater', `
.loader { width: 0; height: 0; border-right: 30px solid transparent; border-top: 30px solid var(--loader-color); border-left: 30px solid var(--loader-color); border-bottom: 30px solid var(--loader-color); border-radius: 30px; animation: eat var(--loader-speed) infinite linear; }
@keyframes eat { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(45deg); } }`),
  createSpinner('shape-arrow', 'Arrow', `
.loader { width: 0; height: 0; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-left: 40px solid var(--loader-color); animation: arrow-move var(--loader-speed) infinite ease-in-out; }
@keyframes arrow-move { 0% { transform: translateX(0); } 50% { transform: translateX(20px); } 100% { transform: translateX(0); } }`),
  createSpinner('shape-battery', 'Battery', `
.loader { width: 40px; height: 20px; border: 2px solid var(--loader-color); border-radius: 4px; position: relative; padding: 2px; }
.loader:before { content: ''; position: absolute; right: -4px; top: 6px; width: 2px; height: 8px; background: var(--loader-color); }
.loader:after { content: ''; position: absolute; top: 2px; left: 2px; bottom: 2px; background: var(--loader-color); width: 0; animation: charge var(--loader-speed) infinite linear; }
@keyframes charge { 0% { width: 0%; } 100% { width: calc(100% - 4px); } }`),
];