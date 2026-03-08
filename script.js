// filename: script.js
document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const platformSelect = document.getElementById('platform');
    const amountSelect = document.getElementById('amount');
    const generateButton = document.getElementById('generateButton');
    const statusOutput = document.getElementById('statusOutput');

    // Initialisation des options de montant pour Play Store
    function updateAmountOptions(platform) {
        amountSelect.innerHTML = ''; // Clear existing options
        let optionsHtml = '';
        if (platform === 'playstore') {
            optionsHtml = `
                <option value="10">10€</option>
                <option value="25">25€</option>
                <option value="50">50€</option>
                <option value="100">100€</option>
            `;
        } else if (platform === 'roblox') {
            optionsHtml = `
                <option value="800">800 Robux</option>
                <option value="1700">1700 Robux</option>
                <option value="4500">4500 Robux</option>
                <option value="10000">10000 Robux</option>
            `;
        }
        amountSelect.innerHTML = optionsHtml;
    }

    // Mettre à jour les options au changement de plateforme
    platformSelect.addEventListener('change', () => {
        updateAmountOptions(platformSelect.value);
    });

    // Charger les options initiales
    updateAmountOptions(platformSelect.value);

    generateButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const platform = platformSelect.value;
        const amount = amountSelect.value;

        if (!username) {
            alert("Veuillez entrer votre nom d'utilisateur ou ID.");
            return;
        }

        statusOutput.innerHTML = ''; // Clear previous status
        generateButton.disabled = true;
        generateButton.textContent = 'Génération en cours...';

        const messages = [
            `[0%] Connexion aux serveurs de ${platform}...`,
            `[10%] Authentification de l'utilisateur ${username}...`,
            `[25%] Établissement d'une connexion sécurisée...`,
            `[40%] Recherche de failles dans le système de ${platform}...`,
            `[55%] Injectant le script de génération...`,
            `[70%] Récupération des codes non utilisés...`,
            `[85%] Génération du montant de ${amount} pour ${username}...`,
            `[95%] Finalisation du processus...`,
            `[100%] Code généré avec succès !`
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < messages.length) {
                const p = document.createElement('p');
                p.textContent = messages[i];
                statusOutput.appendChild(p);
                statusOutput.scrollTop = statusOutput.scrollHeight; // Scroll to bottom
                i++;
            } else {
                clearInterval(interval);
                const finalMessage = document.createElement('p');
                finalMessage.innerHTML = `<strong style="color: #bbe1fa;">Code généré ! Une VÉRIFICATION HUMAINE est requise pour débloquer votre code. Cliquez sur "Vérifier" ci-dessous.</strong>`;
                statusOutput.appendChild(finalMessage);

                const verifyButton = document.createElement('button');
                verifyButton.textContent = 'Vérifier Maintenant';
                verifyButton.style.cssText = `
                    background-color: #e67e22;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-size: 1em;
                    cursor: pointer;
                    margin-top: 15px;
                    transition: background-color 0.3s ease;
                `;
                verifyButton.onmouseover = function() { this.style.backgroundColor = '#d35400'; };
                verifyButton.onmouseout = function() { this.style.backgroundColor = '#e67e22'; };
                verifyButton.onclick = () => {
                    alert("Vérification humaine requise. Veuillez compléter l'offre pour recevoir votre code.");
                    // Ici, vous pourriez rediriger vers une page de fausse vérification
                    // window.location.href = "https://example.com/human_verification";
                };
                statusOutput.appendChild(verifyButton);

                generateButton.disabled = false;
                generateButton.textContent = 'Générer Maintenant';
            }
        }, 1500); // Délai entre chaque message
    });
});
