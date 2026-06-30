(function() {
  'use strict';

  fetch('api.php?action=empresa')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (!data || !data.cnpj) return;

      var nome = data.nome_fantasia || data.razao_social || '';
      var cnpj = data.cnpj || '';
      var endereco = data.endereco || '';
      var telefone = data.telefone || '';

      // Footer company info
      var footerCompany = document.getElementById('footerCompany');
      if (footerCompany && nome) {
        footerCompany.style.display = '';
        var nomeEl = document.getElementById('footerEmpresaNome');
        if (nomeEl) nomeEl.textContent = nome;
        var endEl = document.getElementById('footerEmpresaEndereco');
        if (endEl && endereco) endEl.textContent = endereco;
        var telEl = document.getElementById('footerEmpresaTelefone');
        if (telEl && telefone) telEl.textContent = 'Tel: ' + telefone;
        var cnpjEl = document.getElementById('footerEmpresaCnpj');
        if (cnpjEl) cnpjEl.textContent = 'CNPJ: ' + cnpj;
      }

      // Footer nome empresa
      var nomeEmpresa = document.querySelectorAll('.footer-nome-empresa');
      nomeEmpresa.forEach(function(el) {
        el.textContent = nome || 'Portal de Atendimento Atendimento Saúde';
      });
    })
    .catch(function() {});
})();
