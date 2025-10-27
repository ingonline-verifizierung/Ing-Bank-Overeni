function copyIBAN() {
    const iban = "GB29CLJU04130767638745";
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(iban).then(function() {
            alert('IBAN zkopírován do schránky: ' + iban);
        }).catch(function(err) {
            fallbackCopyIBAN(iban);
        });
    } else {
        fallbackCopyIBAN(iban);
    }
}

function fallbackCopyIBAN(iban) {
    const textArea = document.createElement("textarea");
    textArea.value = iban;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('IBAN zkopírován do schránky: ' + iban);
    } catch (err) {
        alert('IBAN: ' + iban + '\n\nProsím zkopírujte ručně.');
    }
    
    document.body.removeChild(textArea);
}

document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.payment-card');
    
    setTimeout(() => {
        if (card) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    }, 100);
});