const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");

const nombre = document.querySelector("#input1");
const num1 = document.querySelector("#input2");
const num2 = document.querySelector("#input3");

const panel1 = document.querySelector(".panel1");
const panel2 = document.querySelector(".panel2");
const panel3 = document.querySelector(".panel3");

const respuesta = document.querySelector(".respuesta");

form1.addEventListener('submit', () => {
    let name = nombre.value;
    panel1.remove()
    panel2.classList.toggle("pasar2");

    form2.addEventListener('submit', () => {
        let numero1 = num1.value;
        panel2.remove()
        panel3.classList.toggle("pasar3");
    
        form3.addEventListener('submit', () => { 
            let numero2 = num2.value;
            console.log(numero2);
            if(numero1 > numero2 ){
                respuesta.innerHTML += `
                <h2>${name} el número ${numero1} es mayor a ${numero2}</h2>
                `    
            } else if(numero2 > numero1 ) {
                respuesta.innerHTML += `
                <h2>${name} el número ${numero2} es mayor a ${numero1}</h2>
                `
                respuesta.classList.toggle("res");
            } else {
                respuesta.innerHTML += `
                <h2>${name} el número mayor es ${numero2} es igual al número ${numero1}</h2>
                `
                respuesta.classList.toggle("res");
            }
        })
    })    
})

