function getSeniales() {
    let seniales = [100, 200, 50, 330, 250, 180, 190, 200, 150, 90, 165, 240, 20, 340];
    // while (true) {
    //     let senial = prompt("Ingrese una señal (o ingrese un número negativo para detenerse):");
    //     senial = parseFloat(senial);
    //     if (senial < 0 || senial >= 360 || isNaN(senial)) {
    //         break;
    //     }
    //     seniales.push(senial);
    // }
    return seniales;
}

function obtenerCuadrantes(seniales) {
    let cuadrantes = '';
    seniales.forEach(senial => {
        senial %= 360; // Normalizar el ángulo
        if (senial < 0) {
            senial += 360;
        }
        if ((senial >= 0 && senial <= 45) || (senial >= 315 && senial <= 360)) {
            cuadrantes += 'E';
        } else if (senial > 45 && senial <= 135) {
            cuadrantes += 'N';
        } else if (senial > 135 && senial <= 225) {
            cuadrantes += 'O';
        } else if (senial > 225 && senial <= 315) {
            cuadrantes += 'S';
        }
    });
    return cuadrantes;
}

function contarCiclos(secuencia) { 
    let ciclos = 0;
    
    for (let i = 0; i < secuencia.length - 3; i++) {
        if (secuencia.slice(i, i + 4) === 'NESO' || secuencia.slice(i, i + 4) === 'OSEN' || secuencia.slice(i, i + 4) === 'ESON' || secuencia.slice(i, i + 4) === 'SENO' || secuencia.slice(i, i + 4) === 'SONE' || secuencia.slice(i, i + 4) === 'ENOS' || secuencia.slice(i, i + 4) === 'ONES' || secuencia.slice(i, i + 4) === 'NOSE') {
            ciclos++;
        }
    }
    return ciclos;
}

function calcularPorcentaje(secuencia, cuadrante) {
    const ocurrencias = secuencia.split(cuadrante).length - 1;
    const porcentaje = (ocurrencias / secuencia.length) * 100;
    return porcentaje.toFixed(2);
}

function main() {
    const seniales = getSeniales();
    const secuencia = obtenerCuadrantes(seniales);
    let secuenciaConEspacios = '';
    for(let i = 0; i < secuencia.length; i++) {
        secuenciaConEspacios += secuencia[i] + ' ';
    }
    console.log("Secuencia de cuadrantes:", secuenciaConEspacios);
    
    const ciclos = contarCiclos(secuencia);
    console.log("Cantidad de ciclos completos:", ciclos);
    
    console.log("Porcentaje de ocurrencia de cada cuadrante:");
    console.log("Norte:", calcularPorcentaje(secuencia, 'N') + "%");
    console.log("Este:", calcularPorcentaje(secuencia, 'E') + "%");
    console.log("Sur:", calcularPorcentaje(secuencia, 'S') + "%");
    console.log("Oeste:", calcularPorcentaje(secuencia, 'O') + "%");
}

main();