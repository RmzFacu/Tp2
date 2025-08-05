/**
 * EJERCICIOS BÁSICOS DE JAVASCRIPT (1-5)
 * Soluciones paso a paso
 */

// =================================================================
// EJERCICIO 1: CÁLCULO DE PRECIO TOTAL CON IVA
// =================================================================

console.log("=== EJERCICIO 1: CÁLCULO DE PRECIO CON IVA ===");

function calcularPrecioConIva() {
    const precio = 300;
    const iva = 21;
    
    // Fórmula: precio + (precio * iva / 100)
    const montoIva = precio * iva / 100;
    const precioTotal = precio + montoIva;
    
    console.log(`Precio del producto: $${precio}`);
    console.log(`IVA (${iva}%): $${montoIva}`);
    console.log(`Precio total a pagar: $${precioTotal}`);
    
    return precioTotal;
}

// Ejecutar ejercicio 1
calcularPrecioConIva();

// =================================================================
// EJERCICIO 2: ÁREA Y PERÍMETRO DE UN CUADRADO
// =================================================================

console.log("\n=== EJERCICIO 2: ÁREA Y PERÍMETRO DE CUADRADO ===");

function calcularCuadrado() {
    const lado = 5; // Variable con el lado del cuadrado
    
    // Cálculos
    const area = lado * lado; // o Math.pow(lado, 2)
    const perimetro = lado * 4;
    
    console.log(`Lado del cuadrado: ${lado} unidades`);
    console.log(`Área del cuadrado: ${area} unidades cuadradas`);
    console.log(`Perímetro del cuadrado: ${perimetro} unidades`);
    
    return {
        lado: lado,
        area: area,
        perimetro: perimetro
    };
}

// Ejecutar ejercicio 2
calcularCuadrado();

// =================================================================
// EJERCICIO 3: SALUDO INTERACTIVO CON PROMPT
// =================================================================

console.log("\n=== EJERCICIO 3: SALUDO INTERACTIVO ===");

function saludarUsuario() {
    // Usar prompt para pedir el nombre (en navegador)
    // Para Node.js o consola, usaremos un nombre predefinido
    let nombre;
    
    if (typeof prompt !== 'undefined') {
        // En navegador
        nombre = prompt("Escribe tu nombre:");
    } else {
        // En Node.js o consola (simulación)
        nombre = "Usuario"; // Puedes cambiar este valor
        console.log("Simulando prompt: Escribe tu nombre");
        console.log("Respuesta simulada: " + nombre);
    }
    
    if (nombre && nombre.trim() !== "") {
        const saludo = `Hola ${nombre.trim()}`;
        console.log(saludo);
        
        // Si estamos en navegador, también mostrarlo en alert
        if (typeof alert !== 'undefined') {
            alert(saludo);
        }
        
        return saludo;
    } else {
        console.log("No se ingresó un nombre válido");
        return null;
    }
}

// Ejecutar ejercicio 3
saludarUsuario();

// =================================================================
// EJERCICIO 4: PROMEDIO DE TRES NÚMEROS
// =================================================================

console.log("\n=== EJERCICIO 4: PROMEDIO DE TRES NÚMEROS ===");

function calcularPromedio() {
    let num1, num2, num3;
    
    if (typeof prompt !== 'undefined') {
        // En navegador
        num1 = parseInt(prompt("Ingresa el primer número entero:"));
        num2 = parseInt(prompt("Ingresa el segundo número entero:"));
        num3 = parseInt(prompt("Ingresa el tercer número entero:"));
    } else {
        // En Node.js o consola (simulación)
        num1 = 10;
        num2 = 15;
        num3 = 20;
        console.log("Simulando prompts:");
        console.log("Primer número: " + num1);
        console.log("Segundo número: " + num2);
        console.log("Tercer número: " + num3);
    }
    
    // Validar que sean números válidos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Error: Uno o más valores no son números válidos");
        return null;
    }
    
    const promedio = (num1 + num2 + num3) / 3;
    
    console.log(`Números ingresados: ${num1}, ${num2}, ${num3}`);
    console.log(`Promedio: ${promedio.toFixed(2)}`);
    
    if (typeof alert !== 'undefined') {
        alert(`El promedio de ${num1}, ${num2} y ${num3} es: ${promedio.toFixed(2)}`);
    }
    
    return promedio;
}

// Ejecutar ejercicio 4
calcularPromedio();

// =================================================================
// EJERCICIO 5: CONSUMO DE COMBUSTIBLE
// =================================================================

console.log("\n=== EJERCICIO 5: CONSUMO DE COMBUSTIBLE ===");

function calcularConsumo() {
    let litros, kilometros;
    
    if (typeof prompt !== 'undefined') {
        // En navegador
        litros = parseFloat(prompt("Ingresa los litros de nafta consumidos:"));
        kilometros = parseFloat(prompt("Ingresa los kilómetros recorridos:"));
    } else {
        // En Node.js o consola (simulación)
        litros = 45.5;
        kilometros = 600;
        console.log("Simulando prompts:");
        console.log("Litros consumidos: " + litros);
        console.log("Kilómetros recorridos: " + kilometros);
    }
    
    // Validar datos
    if (isNaN(litros) || isNaN(kilometros) || litros <= 0 || kilometros <= 0) {
        console.log("Error: Los valores deben ser números positivos válidos");
        return null;
    }
    
    // Calcular consumo por kilómetro
    const consumoPorKm = litros / kilometros;
    const consumoPor100Km = consumoPorKm * 100; // Consumo cada 100 km (más común)
    
    console.log(`Litros consumidos: ${litros} L`);
    console.log(`Kilómetros recorridos: ${kilometros} km`);
    console.log(`Consumo por kilómetro: ${consumoPorKm.toFixed(4)} L/km`);
    console.log(`Consumo cada 100 km: ${consumoPor100Km.toFixed(2)} L/100km`);
    
    if (typeof alert !== 'undefined') {
        alert(`Consumo: ${consumoPorKm.toFixed(4)} L/km\nEquivale a ${consumoPor100Km.toFixed(2)} L/100km`);
    }
    
    return {
        consumoPorKm: consumoPorKm,
        consumoPor100Km: consumoPor100Km
    };
}

// Ejecutar ejercicio 5
calcularConsumo();

// =================================================================
// FUNCIONES PARA USAR EN HTML (EJERCICIOS INTERACTIVOS)
// =================================================================

// Función para ejecutar todos los ejercicios desde HTML
function ejecutarTodosLosEjercicios() {
    console.log("🚀 EJECUTANDO TODOS LOS EJERCICIOS...\n");
    
    calcularPrecioConIva();
    calcularCuadrado();
    saludarUsuario();
    calcularPromedio();
    calcularConsumo();
    
    console.log("\n✅ Todos los ejercicios completados!");
}

// Función para ejecutar ejercicio específico desde HTML
function ejecutarEjercicio(numero) {
    switch(numero) {
        case 1:
            return calcularPrecioConIva();
        case 2:
            return calcularCuadrado();
        case 3:
            return saludarUsuario();
        case 4:
            return calcularPromedio();
        case 5:
            return calcularConsumo();
        default:
            console.log("Número de ejercicio inválido");
            return null;
    }
}

console.log("\n🎯 Para usar en HTML, llama a ejecutarEjercicio(numero) o ejecutarTodosLosEjercicios()");