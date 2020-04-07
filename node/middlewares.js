const passo1 = (ctx, next) => {
    ctx.valor1 = 'lala';
    next();
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'lala2';
    next();
}

const passo3 = (ctx) => {ctx.valor3 = 'lala3'};

const exec = (ctx,... middlewars) => {
    const execPasso = indice => {
        indice && indice < middlewars.length &&
            middlewars[indice](ctx, () => execPasso(indice + 1))
    }
}