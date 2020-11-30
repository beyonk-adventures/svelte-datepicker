// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".calendar.svelte-uuk0y6{box-sizing:border-box;position:relative;user-select:none;width:100%;padding-top:0}@media(min-width: 600px){.calendar.svelte-uuk0y6{height:auto;max-width:100%;width:100%;display:inline-block}.calendar.is-range-picker.svelte-uuk0y6{width:50%}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}