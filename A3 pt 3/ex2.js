function compararObjetos(objeto1, objeto2, chavePai = "") {
    const chaves1 = Object.keys(objeto1);
    const chaves2 = Object.keys(objeto2);

    if (chaves1.length !== chaves2.length) {
        console.log(`Os objetos têm número diferente de chaves na chave ${chavePai}`);
        return false;
    }

    let saoIdenticos = true;

    for (let chave of chaves1) {
        if (!chaves2.includes(chave)) {
            console.log(`Chave '${chavePai}.${chave}' presente apenas no primeiro objeto.`);
            saoIdenticos = false;
        } else {
            const valor1 = objeto1[chave];
            const valor2 = objeto2[chave];

            if (typeof valor1 === 'object' && typeof valor2 === 'object') {
                saoIdenticos = compararObjetos(valor1, valor2, `${chavePai}.${chave}`);
            } else {
                if (valor1 !== valor2) {
                    console.log(`Chave '${chavePai}.${chave}' com valores diferentes: ${valor1} !== ${valor2}`);
                    saoIdenticos = false;
                }
            }
        }
    }

    return saoIdenticos;
}

const carro1 = {
    "modelo": "Logan",
        "marca": "Renault",
        "especificacoes": {
            "motor": 1.0,
            "cores": {
                "carcaca": ["preto", "branco"],
                "interior": ["cinza"]
            }
}
};

const carro2 = {
    "modelo": "Sandero",
        "marca": "Renault",
        "especificacoes": {
            "motor": 1.6,
            "cores": {
                "carcaca": ["preto", "branco"],
                "interior": ["Preto"]
    }
}
};

compararObjetos(carro1, carro2);
