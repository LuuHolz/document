export const validaDocumento = (tipoDocumento: number, value: string): {resultado: boolean, error: string} => {
    
    console.log(value)
    let correcto = {resultado: true, error: ''};   

    if (value.length > 0) {
        if (tipoDocumento == 1) {
            correcto = validaDNI(value);
        } else if (tipoDocumento == 2) {
            correcto = validaNIE(value);
        } else if (tipoDocumento == 5) {
            correcto = validaPasaporte(value);
        }        
    }
    return correcto;
}

export const validaDNI = (dni: string) => {
    // Expresión regular para verificar el formato del DNI
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;

    if (!dniRegex.test(dni)) {
        return {resultado: false, error: 'Formato incorrecto del DNI'};
    };

    const numero = dni.substring(0, dni.length - 1);
    const letter = dni.charAt(dni.length - 1).toUpperCase();

    const lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const expectedLetter = lockup.charAt(numero % 23);

    return {    
        resultado: letter === expectedLetter, 
        error: letter === expectedLetter ? '' : 'add-documento-invalido-1'
    };
}

export const validaNIE = (value: string) => {
    let correcto = {resultado: false, error: 'Formato incorrecto del NIE'};
    value = value.toUpperCase();
    if (value.match(/^[X-Z]{1}(\d{7})([A-Z]{1})$/)) {
       correcto = {resultado: true, error: ''};
    }
    return correcto;
}

export const validaPasaporte = (value: string) => {
    let correcto = {resultado: false, error: 'Formato incorrecto del pasaporte'};
    if (value.length >= 5) {
       correcto = {resultado: true, error: ''};
    }
    return correcto;
}