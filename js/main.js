(function () {
  'use strict';

  // Menu mobile
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('mainNav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        btn.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Cookie
  var cookie = document.getElementById('cookieBanner');
  var cookieBtn = document.getElementById('cookieAccept');
  if (cookie && !localStorage.getItem('ck')) {
    setTimeout(function () { cookie.classList.add('visible'); }, 1200);
  }
  if (cookieBtn) {
    cookieBtn.addEventListener('click', function () {
      localStorage.setItem('ck', '1');
      cookie.classList.remove('visible');
    });
  }

  // WhatsApp dinâmico
  fetch('api.php?action=whatsapp')
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d && d.whatsapp && d.whatsapp.length >= 10) {
        var num = '55' + d.whatsapp;
        document.querySelectorAll('[data-wa="true"]').forEach(function (el) {
          var href = el.getAttribute('href');
          if (href && href.indexOf('wa.me/') !== -1) {
            var parts = href.split('?');
            el.setAttribute('href', 'https://wa.me/' + num + (parts[1] ? '?' + parts[1] : ''));
          }
        });
      }
    })
    .catch(function () {});

  // Ano no footer
  var copy = document.querySelector('.footer__bottom p');
  if (copy) copy.innerHTML = copy.innerHTML.replace('2025', new Date().getFullYear());
})();
