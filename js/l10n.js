var l10n = {
    "pl" : {
        "offer" : "Oferta"
    },
    "en" : {
        "offer" : "Offer"
    }
};

    document.getElementById('#language-selector').onchange = function() {
      const language = this.options[this.selectedIndex].value;
      const nodes = document.querySelectorAll('[data-l10n]');

      for (let i = 0; i < nodes.length; i++) {
        const key = nodes[i].getAttribute('data-l10n');
        nodes[i].innerHTML = l10n[language][key];
      }
    };
