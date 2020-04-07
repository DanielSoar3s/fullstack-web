const tecnologias = new Map()

tecnologias.set('react', {framework: false});
tecnologias.set('angular', {framework: true});

console.log(tecnologias.react);
console.log(tecnologias.get('react'));

const chavesVariadas = new Map([
    [function () {}, 'Function'],
    [{}, 'object'],
    [123, 'number'],
]);

chavesVariadas.forEach((v1, ch) => {
    console.log(ch, v1);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);


