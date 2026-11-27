document.addEventListener('DOMContentLoaded', () => {
  const fontLink = document.createElement('link'); fontLink.rel = 'stylesheet'; fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap'; document.head.appendChild(fontLink);
  document.querySelectorAll('.brand').forEach((brand) => { brand.innerHTML = '<img class="official-logo" src="assets/axcenta-official-logo-v2.png" alt="Axcenta">'; });
  document.querySelectorAll('.footer-grid').forEach((footer) => { if (!footer.querySelector('.footer-address')) { const address = document.createElement('p'); address.className = 'footer-address'; address.textContent = 'Axcenta ITES (P) Ltd., 35/1612-A, South Janatha Road, Palarivattom, Kochi - 682 025. Kerala.'; footer.appendChild(address); } });
  document.querySelectorAll('img').forEach((image) => {
    if (image.src.includes('/files/interconnected.jfif')) image.src = 'assets/people-systems-v2.png';
    if (image.src.includes('/files/servers.png')) image.src = 'assets/systems-architecture-v2.png';
    if (image.src.includes('/files/code.png') || image.src.includes('/files/trend.png') || image.src.includes('/files/merge.png')) image.src = 'assets/workflow-v2.png';
  });
  const icon = (kind) => {
    const icons = {
      dashboard:'<svg viewBox="0 0 96 96" aria-hidden="true"><rect x="10" y="12" width="76" height="72" rx="16" fill="#e9f7ed"/><rect x="20" y="22" width="56" height="48" rx="7" fill="#fff" stroke="#b8dfc0" stroke-width="3"/><path d="M27 59V48M38 59V41M49 59V51M60 59V34M69 59V29" stroke="#267a3b" stroke-width="5" stroke-linecap="round"/><path d="m25 39 12-8 11 7 19-15" fill="none" stroke="#8dcc72" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="69" cy="23" r="5" fill="#d5a82c"/></svg>',
      workflow:'<svg viewBox="0 0 96 96" aria-hidden="true"><rect x="9" y="9" width="78" height="78" rx="24" fill="#e9f7ed"/><path d="M27 27h18v18H27zM51 51h18v18H51z" fill="none" stroke="#267a3b" stroke-width="6"/><path d="M45 36h9c6 0 9 3 9 9v6" fill="none" stroke="#8dcc72" stroke-width="6" stroke-linecap="round"/><path d="m55 48 8 8 8-8" fill="none" stroke="#d5a82c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      people:'<svg viewBox="0 0 96 96" aria-hidden="true"><rect x="9" y="9" width="78" height="78" rx="24" fill="#e9f7ed"/><circle cx="48" cy="31" r="11" fill="#267a3b"/><circle cx="25" cy="42" r="8" fill="#8dcc72"/><circle cx="71" cy="42" r="8" fill="#8dcc72"/><path d="M27 70c1-15 9-23 21-23s20 8 21 23M12 70c1-11 6-17 14-17 5 0 9 2 12 7M84 70c-1-11-6-17-14-17-5 0-9 2-12 7" fill="none" stroke="#267a3b" stroke-width="6" stroke-linecap="round"/></svg>',
      server:'<svg viewBox="0 0 96 96" aria-hidden="true"><rect x="14" y="13" width="68" height="22" rx="7" fill="#267a3b"/><rect x="14" y="39" width="68" height="22" rx="7" fill="#4caa70"/><rect x="14" y="65" width="68" height="18" rx="7" fill="#8dcc72"/><circle cx="27" cy="24" r="3" fill="#fff"/><circle cx="27" cy="50" r="3" fill="#fff"/><circle cx="27" cy="74" r="3" fill="#fff"/><path d="M42 24h26M42 50h26M42 74h26" stroke="#e9f7ed" stroke-width="4" stroke-linecap="round"/></svg>',
      code:'<svg viewBox="0 0 96 96" aria-hidden="true"><rect x="9" y="9" width="78" height="78" rx="24" fill="#e9f7ed"/><path d="m39 27-18 21 18 21M57 27l18 21-18 21" fill="none" stroke="#267a3b" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="m51 22-7 52" stroke="#d5a82c" stroke-width="6" stroke-linecap="round"/></svg>',
      trend:'<svg viewBox="0 0 96 96" aria-hidden="true"><rect x="9" y="9" width="78" height="78" rx="24" fill="#e9f7ed"/><path d="M21 68h55M25 59l15-15 11 8 21-25" fill="none" stroke="#267a3b" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M62 27h10v10" fill="none" stroke="#d5a82c" stroke-width="6" stroke-linecap="round"/></svg>'
      ,target:'<svg viewBox="0 0 96 96" aria-hidden="true"><rect x="9" y="9" width="78" height="78" rx="24" fill="#e9f7ed"/><circle cx="48" cy="48" r="24" fill="none" stroke="#267a3b" stroke-width="6"/><circle cx="48" cy="48" r="12" fill="none" stroke="#8dcc72" stroke-width="6"/><circle cx="48" cy="48" r="4" fill="#d5a82c"/><path d="M48 18v10M48 68v10M18 48h10M68 48h10" stroke="#267a3b" stroke-width="5" stroke-linecap="round"/></svg>'
      ,refresh:'<svg viewBox="0 0 96 96" aria-hidden="true"><rect x="9" y="9" width="78" height="78" rx="24" fill="#e9f7ed"/><path d="M70 39a24 24 0 0 0-42-9l-7 7M26 57a24 24 0 0 0 42 9l7-7" fill="none" stroke="#267a3b" stroke-width="7" stroke-linecap="round"/><path d="m21 27 0 12 12-1M75 69V57l-12 1" fill="none" stroke="#d5a82c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    };
    const wrapper = document.createElement('span'); wrapper.className = 'card-icon'; wrapper.innerHTML = icons[kind] || icons.workflow; return wrapper;
  };
  document.querySelectorAll('.cards article img').forEach((image) => { const text = (image.alt + ' ' + (image.parentElement.querySelector('h3')?.textContent || '')).toLowerCase(); const kind = text.includes('precision') ? 'target' : text.includes('holistic') ? 'refresh' : text.includes('dashboard') ? 'dashboard' : text.includes('leadership') || text.includes('people') ? 'people' : text.includes('server') || text.includes('erp') ? 'server' : text.includes('architecture') || text.includes('code') ? 'code' : text.includes('trend') || text.includes('automation') ? 'trend' : 'workflow'; image.replaceWith(icon(kind)); });
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
  const form = document.querySelector('#contact-form');
  const message = document.querySelector('#form-message');
  if (form && message) form.addEventListener('submit', (event) => { event.preventDefault(); message.hidden = false; });
  const timeline = document.querySelector('.timeline');
  if (timeline) { const awards = document.createElement('div'); awards.className = 'timeline-awards'; awards.innerHTML = '<span><i>✦</i>Tata Communications — Best Partner</span><span><i>✦</i>FORTINET — Best Select Partner</span><span><i>✦</i>Juniper — Best Enterprise Solution Partner</span>'; timeline.after(awards); }
});

(() => {
  const canvas = document.createElement('canvas');
  canvas.className = 'wave-canvas';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let width = 0, height = 0, dpr = 1, time = 0;
  const resize = () => { dpr = Math.min(window.devicePixelRatio || 1, 2); width = window.innerWidth; height = window.innerHeight; canvas.width = width * dpr; canvas.height = height * dpr; canvas.style.width = width + 'px'; canvas.style.height = height + 'px'; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
  const draw = () => {
    time += 0.006;
    ctx.clearRect(0, 0, width, height);
    const rows = Math.ceil(height / 18) + 8;
    const cols = Math.ceil(width / 30) + 3;
    for (let row = -4; row < rows; row++) {
      ctx.beginPath();
      for (let col = -2; col < cols; col++) {
        const x = col * 30;
        const depth = row / rows;
        const phase = time * 1.8 + depth * 5.5;
        const y = row * 18 + Math.sin(col * 0.22 + phase) * 20 + Math.cos(col * 0.09 - time * 1.1) * 12 + Math.sin(depth * 8 + col * 0.035) * 10;
        const px = x + Math.sin(depth * 2.5 + time) * 14;
        if (col === -2) ctx.moveTo(px, y); else ctx.lineTo(px, y);
      }
      const alpha = 0.09 + (1 - Math.abs(row - rows * .48) / rows) * 0.10;
      ctx.strokeStyle = `rgba(54, 126, 61, ${Math.max(.045, alpha * .7)})`;
      ctx.lineWidth = 1.3;
      ctx.stroke();
      ctx.beginPath();
      for (let col = -2; col < cols; col++) {
        const x = col * 30, depth = row / rows, phase = time * 1.8 + depth * 5.5;
        const y = row * 18 + Math.sin(col * 0.22 + phase) * 20 + Math.cos(col * 0.09 - time * 1.1) * 12 + Math.sin(depth * 8 + col * 0.035) * 10;
        const px = x + Math.sin(depth * 2.5 + time) * 14;
        if (col === -2) ctx.moveTo(px, y); else ctx.lineTo(px, y);
      }
      ctx.strokeStyle = `rgba(222, 249, 211, ${Math.max(.035, alpha * .42)})`;
      ctx.stroke();
    }
    requestAnimationFrame(draw);
  };
  window.addEventListener('resize', resize, { passive: true });
  resize();
  draw();
})();
