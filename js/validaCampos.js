const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    telefono2: /^\d{7,14}$/, // 7 a 14 numeros.
    date:/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
    pais:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

	////Registro de proveedores 2

	direccion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contribuyente: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	ruc: /^\d{7,14}$/, // 7 a 14 numeros.
	
	////REGISTRO DE PROVEEDORES 3
	tarjeta: /^\d{7,14}$/, // 7 a 14 numeros.
	fecha: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	cvc:/^\d{3}$/, // 3 numeros.
}

const campos = {
	nombre: false,
	password: false,
	telefono: false,
    telefono2: false,
    date:false,
    pais: false,
	///////////
	direccion:false,
	ciudad:false,
	contribuyente:false,
	ruc:false,
	////////
	tarjeta:false,
	fecha:false,
	cvc:false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "date":
			validarCampo(expresiones.date, e.target, 'date');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

        case "pais":
			validarCampo(expresiones.pais, e.target, 'pais');
		break;

		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
    
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
        case "telefono2":
			validarCampo(expresiones.telefono2, e.target, 'telefono2');
		break;

		case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;

		case "ciudad":
			validarCampo(expresiones.ciudad, e.target, 'ciudad');
		break;

		case "contribuyente":
			validarCampo(expresiones.contribuyente, e.target, 'contribuyente');
		break;

		case "ruc":
		validarCampo(expresiones.ruc, e.target, 'ruc');
	    break;

		case "tarjeta":
		validarCampo(expresiones.tarjeta, e.target, 'tarjeta');
	    break;

		case "fecha":
		validarCampo(expresiones.fecha, e.target, 'fecha');
	    break;

		case "cvc":
			validarCampo(expresiones.cvc, e.target, 'cvc');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
        //document.getElementById(`input`).style.border = '2px solid #36C9A9';
		document.getElementById(`grupo__${campo}`).classList.remove('inputfield-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('inputfield-correcto');

		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
        //document.getElementById(`input`).style.border = '2px solid red';

		document.getElementById(`grupo__${campo}`).classList.add('inputfield-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('inputfield-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value || inputPassword1.value==''){
		document.getElementById(`grupo__password2`).classList.add('inputfield-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('inputfield-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('inputfield-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('inputfield-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);

});



function redirigirFormulario(){

	const terminos = document.getElementById('terminos');
	const date = document.getElementById('input-date');

    if(campos.pais && campos.nombre && campos.password  && campos.telefono  && campos.telefono2 && terminos.checked && date.value!=''){
        window.location.href='../Html/registroProveedor2.html';
    }else{
        alert('ERROR: FALTAN CAMPOS POR LLENAR');
    }
}


function redirigirFormulario2(){

    if(campos.ciudad && campos.ruc && campos.contribuyente  && campos.direccion){
        window.location.href='../Html/registroProveedor4.html';
    }else{
        alert('ERROR: FALTAN CAMPOS POR LLENAR');
    }
}

function redirigirFormulario3(){

    if(campos.tarjeta && campos.fecha && campos.cvc){
        window.location.href='../Html/final.html';
    }else{
        alert('ERROR: FALTAN CAMPOS POR LLENAR');
    }
}

///////////vendedor independiente

function redirigirFormularioIDP(){

	const terminos = document.getElementById('terminos');
	const date = document.getElementById('input-date');

    if(campos.pais && campos.nombre && campos.password  && campos.telefono  && campos.telefono2 && terminos.checked && date.value!=''){
        window.location.href='../Html/vendedorIDP2.html';
    }else{
        alert('ERROR: FALTAN CAMPOS POR LLENAR');
    }
}


function redirigirFormularioIDP2(){

    if(campos.ciudad && campos.ruc && campos.contribuyente  && campos.direccion){
        window.location.href='../Html/vendedorIDP3.html';
    }else{
        alert('ERROR: FALTAN CAMPOS POR LLENAR');
    }
}


////VENDEDOR PROFESIONAL




function redirigirFormularioPRO(){

	const terminos = document.getElementById('terminos');
	const date = document.getElementById('input-date');

    if(campos.pais && campos.nombre && campos.password  && campos.telefono  && campos.telefono2 && terminos.checked && date.value!=''){
        window.location.href='../Html/VendedorPRO2.html';
    }else{
        alert('ERROR: FALTAN CAMPOS POR LLENAR');
    }
}


function redirigirFormularioPRO2(){

    if(campos.ciudad && campos.ruc && campos.contribuyente  && campos.direccion){
        window.location.href='../Html/VendedorPRO4.html';
    }else{
        alert('ERROR: FALTAN CAMPOS POR LLENAR');
    }
}

function redirigirFormularioPRO3(){

    if(campos.tarjeta && campos.fecha && campos.cvc){
        window.location.href='../Html/final.html';
    }else{
        alert('ERROR: FALTAN CAMPOS POR LLENAR');
    }
}


/*formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});*/