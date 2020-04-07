for (let letra of "CODER") {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

//utiliza os indices
for (let i in assuntosEcma) {
    console.log(i);
}

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', {abordadp: true}]
    ['Set', {abordadp: true}]
    ['Promise', {abordadp: false}]
])

for (let assuntos of assuntosMap) {
    console.log(assunto);
}

for( let chave of assuntosMap.Keys()) {
    console.log(chave);
}

for (let valor of assuntosMap.values()) {
    console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}
