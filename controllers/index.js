'use strict'


let lenguaje = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let corrida = 13

function init(req, res, next) {
    req.msj = req.body.secret.toUpperCase()
    if (req.body.secret) {
        next()
    } else {
        res.status(402).send({ message: 'Request empty' })
    }
}

function decriptCesar(req, res, next) {
    let cadena = ''
    for (let i = 0; i < req.msj.length; i++) {
        let resp = compare(req.msj.charAt(i), lenguaje)
        cadena += resp
    }
    res.status(200).send({ message: cadena })

}

function compare(search, arr) {
    let contador = 0
    let resp = ''
    for (let j = 0; j < arr.length; j++) {
        if (search === arr.charAt(j)) {
            contador = j
            for (let k = j; k < j + corrida; k++) {
                if (contador < lenguaje.length - 1) {
                    contador++
                } else {
                    contador = 0
                }
            }
            search = lenguaje.charAt(contador)
            return search
        }
    }
    return search
}
module.exports = {
    init,
    decriptCesar
}