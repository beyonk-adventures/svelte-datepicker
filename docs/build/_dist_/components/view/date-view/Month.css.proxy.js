// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".month-dates.svelte-1a4pezh.svelte-1a4pezh{width:100%;display:-ms-grid;display:grid;-ms-grid-columns:1fr;-ms-grid-rows:1fr}.legend.svelte-1a4pezh.svelte-1a4pezh{display:none;grid-row:1 / 2;color:#4a4a4a;padding:10px 0;margin-bottom:5px}@media(min-width: 600px){.month-container.svelte-1a4pezh.svelte-1a4pezh{display:flex}.month-week.svelte-1a4pezh.svelte-1a4pezh{width:100%}.legend.svelte-1a4pezh.svelte-1a4pezh{display:grid}}.legend.svelte-1a4pezh span.svelte-1a4pezh{width:14.285714%;display:inline-block;text-align:center}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}