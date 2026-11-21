/* TheCraftedTech — shared script
   icon sprite · scroll reveal · mobile nav · share menu · lightbox · copy buttons ·
   scroll progress · card spotlight · profile tilt                                   */
(function () {
  'use strict';

  /* ---------- icon sprite (inline so it works from file:// and on GitHub Pages) ---------- */
  var sprite =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' +
    '<symbol id="i-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></symbol>' +
    '<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M7 7h10v10M7 17 17 7"/></symbol>' +
    '<symbol id="i-right" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>' +
    '<symbol id="i-left" viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></symbol>' +
    '<symbol id="i-chev" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></symbol>' +
    '<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>' +
    '<symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>' +
    '<symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12 5 5 9-10"/></symbol>' +
    '<symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-5M12 8h.01"/></symbol>' +
    '<symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>' +
    '<symbol id="i-download" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></symbol>' +
    '<symbol id="i-play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8Z"/></symbol>' +
    '<symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></symbol>' +
    '<symbol id="i-star" viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/></symbol>' +
    '<symbol id="i-lib" viewBox="0 0 24 24"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5ZM3.3 7 12 12l8.7-5M12 22V12"/></symbol>' +
    '<symbol id="i-sliders" viewBox="0 0 24 24"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></symbol>' +
    '<symbol id="i-zap" viewBox="0 0 24 24"><path d="m13 2-10 12h9l-1 8 10-12h-9l1-8Z"/></symbol>' +
    '<symbol id="i-tablet" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M12 18h.01"/></symbol>' +
    '<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>' +
    '<symbol id="i-panels" viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="10" rx="1.5"/><rect x="13" y="3" width="8" height="6" rx="1.5"/><rect x="13" y="11" width="8" height="10" rx="1.5"/><rect x="3" y="15" width="8" height="6" rx="1.5"/></symbol>' +
    '<symbol id="i-tv" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="m17 2-5 5-5-5"/></symbol>' +
    '<symbol id="i-cal" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h3M8 18h6"/></symbol>' +
    '<symbol id="i-remote" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="3"/><circle cx="12" cy="8" r="2"/><path d="M10 14h4M10 18h4"/></symbol>' +
    '<symbol id="i-code" viewBox="0 0 24 24"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></symbol>' +
    '<symbol id="i-book" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></symbol>' +
    '<symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-4"/></symbol>' +
    '<symbol id="i-folder" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></symbol>' +
    '<symbol id="i-bolt" viewBox="0 0 24 24"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4Z"/></symbol>' +
    '<symbol id="i-list" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></symbol>' +
    '<symbol id="i-gear" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/></symbol>' +
    '<symbol id="i-share" viewBox="0 0 24 24"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 6l-4-4-4 4M12 2v13"/></symbol>' +
    '<symbol id="i-link" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></symbol>' +
    '<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></symbol>' +
    '<symbol id="i-copy" viewBox="0 0 24 24"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></symbol>' +
    '<symbol id="i-expand" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></symbol>' +
    '<symbol id="b-x" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></symbol>' +
    '<symbol id="b-telegram" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></symbol>' +
    '<symbol id="b-linkedin" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></symbol>' +
    '<symbol id="b-whatsapp" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></symbol>' +
    '</svg>';
  document.body.insertAdjacentHTML('afterbegin', sprite);

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var icon = function (id, cls) { return '<svg class="icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#' + id + '"/></svg>'; };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- toast ---------- */
  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = icon('i-check') + '<span></span>';
    toastEl.lastChild.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }

  /* ---------- scroll reveal ---------- */
  var els = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- mobile nav ---------- */
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  if (nav && burger) {
    var use = $('use', burger);
    var setNav = function (open) {
      nav.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
      burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      use.setAttribute('href', open ? '#i-close' : '#i-menu');
    };
    burger.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
    $$('#navlinks a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
  }

  /* ---------- scroll progress ---------- */
  if (nav) {
    var bar = document.createElement('div');
    bar.className = 'progress';
    bar.innerHTML = '<i></i>';
    nav.appendChild(bar);
    var fill = bar.firstChild, ticking = false;
    var update = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      fill.style.transform = 'scaleX(' + p + ')';
      nav.classList.toggle('scrolled', window.scrollY > 8);
      ticking = false;
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ---------- share menu ---------- */
  var share, shareBackdrop, shareTrigger;

  function pageInfo() {
    var canon = $('link[rel="canonical"]');
    var desc = $('meta[name="description"]');
    return {
      url: canon ? canon.href : location.href,
      title: document.title,
      text: desc ? desc.content : '',
      image: document.body.getAttribute('data-share-image') || ''
    };
  }

  function buildShare() {
    var info = pageInfo();
    var u = encodeURIComponent(info.url), t = encodeURIComponent(info.title);
    var items = [
      { id: 'b-whatsapp', label: 'WhatsApp', cls: 'wa', href: 'https://wa.me/?text=' + encodeURIComponent(info.title + ' ' + info.url) },
      { id: 'b-telegram', label: 'Telegram', cls: 'tg', href: 'https://t.me/share/url?url=' + u + '&text=' + t },
      { id: 'b-x', label: 'X', cls: 'x', href: 'https://x.com/intent/post?url=' + u + '&text=' + t },
      { id: 'b-linkedin', label: 'LinkedIn', cls: 'li', href: 'https://www.linkedin.com/sharing/share-offsite/?url=' + u },
      { id: 'i-mail', label: 'E-Mail', cls: 'ml', href: 'mailto:?subject=' + t + '&body=' + encodeURIComponent(info.text + '\n\n' + info.url) }
    ];
    var host = info.url.replace(/^https?:\/\//, '');

    shareBackdrop = document.createElement('div');
    shareBackdrop.className = 'share-backdrop';
    shareBackdrop.hidden = true;

    share = document.createElement('div');
    share.className = 'share';
    share.hidden = true;
    share.setAttribute('role', 'dialog');
    share.setAttribute('aria-label', 'Seite teilen');
    share.innerHTML =
      '<div class="share-head"><b>Seite teilen</b><button type="button" class="share-close" aria-label="Schließen">' + icon('i-close') + '</button></div>' +
      '<div class="share-preview">' +
        (info.image ? '<img alt="" src="' + info.image + '">' : '') +
        '<div class="share-meta"><b></b><small></small></div>' +
      '</div>' +
      '<div class="share-grid">' +
        (navigator.share ? '<button type="button" class="share-item native" data-native><span class="s-ico">' + icon('i-share') + '</span><span>Teilen …</span></button>' : '') +
        items.map(function (i) {
          return '<a class="share-item ' + i.cls + '" href="' + i.href + '" target="_blank" rel="noopener noreferrer"><span class="s-ico">' + icon(i.id, i.id.indexOf('b-') === 0 ? 'fill' : '') + '</span><span>' + i.label + '</span></a>';
        }).join('') +
      '</div>' +
      '<div class="share-link"><input type="text" readonly aria-label="Link zur Seite"><button type="button" class="btn-copy">' + icon('i-copy') + '<span>Kopieren</span></button></div>';
    document.body.appendChild(shareBackdrop);
    document.body.appendChild(share);

    $('.share-meta b', share).textContent = info.title;
    $('.share-meta small', share).textContent = host;
    var input = $('input', share);
    input.value = info.url;
    var img = $('.share-preview img', share);
    if (img) img.addEventListener('error', function () { img.remove(); });

    input.addEventListener('focus', function () { input.select(); });
    $('.btn-copy', share).addEventListener('click', function () {
      copyText(info.url).then(function () { toast('Link kopiert'); }, function () { input.select(); toast('Zum Kopieren Strg+C drücken'); });
    });
    var native = $('[data-native]', share);
    if (native) native.addEventListener('click', function () {
      navigator.share({ title: info.title, text: info.text, url: info.url }).catch(function () {});
    });
    $('.share-close', share).addEventListener('click', closeShare);
    shareBackdrop.addEventListener('click', closeShare);
  }

  function placeShare() {
    if (window.innerWidth <= 560 || !shareTrigger) { share.style.left = share.style.top = ''; return; }
    var r = shareTrigger.getBoundingClientRect();
    var w = share.offsetWidth;
    var left = Math.min(Math.max(12, r.right - w), window.innerWidth - w - 12);
    share.style.left = left + 'px';
    share.style.top = Math.min(r.bottom + 10, window.innerHeight - share.offsetHeight - 12) + 'px';
  }

  function openShare(trigger, viaKeyboard) {
    if (!share) buildShare();
    shareTrigger = trigger;
    shareBackdrop.hidden = false;
    share.hidden = false;
    placeShare();
    requestAnimationFrame(function () { share.classList.add('open'); shareBackdrop.classList.add('open'); });
    trigger.setAttribute('aria-expanded', 'true');
    var first = $('.share-item', share);
    if (first && viaKeyboard) first.focus({ preventScroll: true });
  }

  function closeShare() {
    if (!share || share.hidden) return;
    share.classList.remove('open'); shareBackdrop.classList.remove('open');
    if (shareTrigger) { shareTrigger.setAttribute('aria-expanded', 'false'); shareTrigger.focus({ preventScroll: true }); }
    setTimeout(function () { share.hidden = true; shareBackdrop.hidden = true; }, 180);
  }

  $$('[data-share-open]').forEach(function (b) {
    b.setAttribute('aria-haspopup', 'dialog');
    b.setAttribute('aria-expanded', 'false');
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      if (share && !share.hidden && share.classList.contains('open')) closeShare(); else openShare(b, e.detail === 0);
    });
  });
  document.addEventListener('click', function (e) {
    if (share && !share.hidden && !share.contains(e.target)) closeShare();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeShare(); });
  window.addEventListener('resize', function () { if (share && !share.hidden) placeShare(); });

  /* ---------- lightbox ---------- */
  var zoomables = $$('[data-zoom]');
  if (zoomables.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.hidden = true;
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-label', 'Bildansicht');
    lb.innerHTML = '<button type="button" class="lb-close" aria-label="Schließen">' + icon('i-close') + '</button><img alt="">';
    document.body.appendChild(lb);
    var lbImg = $('img', lb), lastFocus;
    var openLb = function (src, alt) {
      lastFocus = document.activeElement;
      lbImg.src = src; lbImg.alt = alt || '';
      lb.hidden = false;
      requestAnimationFrame(function () { lb.classList.add('open'); });
      document.documentElement.classList.add('no-scroll');
      $('.lb-close', lb).focus();
    };
    var closeLb = function () {
      lb.classList.remove('open');
      document.documentElement.classList.remove('no-scroll');
      setTimeout(function () { lb.hidden = true; lbImg.removeAttribute('src'); }, 200);
      if (lastFocus) lastFocus.focus({ preventScroll: true });
    };
    zoomables.forEach(function (img) {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', (img.alt ? img.alt + ' — ' : '') + 'vergrößern');
      var go = function () { openLb(img.currentSrc || img.src, img.alt); };
      img.addEventListener('click', go);
      img.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      var hint = document.createElement('span');
      hint.className = 'zoom-hint';
      hint.innerHTML = icon('i-expand') + '<span>Vergrößern</span>';
      hint.setAttribute('aria-hidden', 'true');
      img.parentNode.style.position = 'relative';
      img.parentNode.appendChild(hint);
    });
    lb.addEventListener('click', closeLb);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLb(); });
  }

  /* ---------- copy buttons for code blocks ---------- */
  $$('pre.code').forEach(function (pre) {
    var wrap = document.createElement('div');
    wrap.className = 'code-wrap';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'code-copy';
    btn.innerHTML = icon('i-copy') + '<span>Kopieren</span>';
    wrap.appendChild(btn);
    btn.addEventListener('click', function () {
      copyText(pre.innerText.replace(/\s+$/, '')).then(function () {
        btn.classList.add('done');
        btn.innerHTML = icon('i-check') + '<span>Kopiert</span>';
        toast('In die Zwischenablage kopiert');
        setTimeout(function () { btn.classList.remove('done'); btn.innerHTML = icon('i-copy') + '<span>Kopieren</span>'; }, 1800);
      }, function () { toast('Kopieren nicht möglich'); });
    });
  });

  /* ---------- hover effects (pointer devices only) ---------- */
  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canHover && !reduceMotion) {
    // spotlight that follows the cursor
    $$('.p-card, .value, .fact, .features li').forEach(function (el) {
      el.classList.add('spot');
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
    // gentle 3D tilt on the profile card
    var card = $('.profile-card');
    if (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'rotateY(' + (x * 9).toFixed(2) + 'deg) rotateX(' + (-y * 9).toFixed(2) + 'deg)';
      });
      card.addEventListener('pointerleave', function () { card.style.transform = ''; });
    }
  }

  /* ---------- Home TV demo: click a channel ---------- */
  $$('.showcase .tv-row').forEach(function (row) {
    row.addEventListener('click', function () {
      $$('.showcase .tv-row').forEach(function (r) { r.classList.remove('on'); });
      row.classList.add('on');
    });
  });
})();
