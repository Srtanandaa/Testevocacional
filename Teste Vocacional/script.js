function calculateResult() {
    const answers = document.forms["vocationalTest"];
    let counts = { humanas: 0, exatas: 0, biologicas: 0, artes: 0, empreendedorismo: 0 };

    for (let i = 1; i <= 7; i++) {
        const answer = answers[`q${i}`].value;
        if (answer) {
            counts[answer]++;
        }
    }

    let max = 0;
    let result = '';

    for (let area in counts) {
        if (counts[area] > max) {
            max = counts[area];
            result = area;
        }
    }

    let resultText = '';

    switch(result) {
        case 'humanas':
            resultText = 'Você tem uma tendência para as áreas de Humanas!';
            break;
        case 'exatas':
            resultText = 'Você tem uma tendência para as áreas de Exatas!';
            break;
        case 'biologicas':
            resultText = 'Você tem uma tendência para as áreas de Biológicas!';
            break;
        case 'artes':
            resultText = 'Você tem uma tendência para as áreas de Artes!';
            break;
        case 'empreendedorismo':
            resultText = 'Você tem uma tendência para a área de Empreendedorismo!';
            break;
        default:
            resultText = 'Por favor, responda todas as perguntas!';
            break;
    }

    document.getElementById("result").innerText = resultText;
}
