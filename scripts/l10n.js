let l10n = 
{
    "pl" : {
        "offer" : "Oferta",
        "toggle" : "Switch to English version"
    },
    "en" : {
        "offer" : "Offer",
        "toggle" : "Przełącz na wersję polską"
    }
};

let currentLanguage = 'pl'; 

function updateLanguage() 
{
  const nodes = document.querySelectorAll('[data-l10n]');
  
  nodes.forEach(node => {
    const key = node.getAttribute('data-l10n');
    node.innerHTML = l10n[currentLanguage][key];
  });
}

document.getElementById('#language-toggle').onclick = function() 
{
  currentLanguage = (currentLanguage === 'pl') ? 'en' : 'pl';
  
  updateLanguage();
};