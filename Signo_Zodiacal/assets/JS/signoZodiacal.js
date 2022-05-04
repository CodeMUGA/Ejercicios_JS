let mesNacimiento = prompt('Digita el mes(Solo formato numero 1-12) ');
let dia = parseInt(prompt('Digita el dia'));

switch (mesNacimiento){
    case "1":
        if (dia >= 20 && dia <= 31) {
           alert('Acuario');
        } else if (dia <= 19 && dia >= 0) {
            alert('Capricornio');
        }
        break;
    case "2":
        if (dia >=0 && dia <= 18) {
            alert('Acuario');
        } else if (dia >= 18 && dia <= 31) {
            alert('Piscis');
        }
        break;
    case "3":
        if (dia >= 0 && dia <= 20) {
            alert('Piscis');
        } else if (dia >= 21 && dia <= 31) {
            alert('Aries');
        }break;
    case "4":
        if (dia >=0 && dia <= 19 ) {
            alert('Aries');
        } else if(dia>=20&&dia<=31){
            alert('Tauro');
        }break;
    case "5":
        if(dia>=0&&dia<=21){
            alert('Tauro');
        }else if(dia>=21 && dia<=31){
            alert('Geminis');
        }break;
    case "6":
        if(dia>=0&&dia<=20){
            alert('Geminis');
        }else if(dia>=21 && dia<=31){
            alert('Cancer');
        }break;
    case "7":
        if(dia>=0&&dia<=22){
            alert('Cancer');
        }else if(dia>=23 && dia<=31){
            alert('Leo');
        }break;
    case "8":
        if(dia>=0&&dia<=22){
            alert('Leo');
        }else if(dia>=23 && dia<=31){
            alert('Virgo');
        }break;
    case "9":
        if(dia>=0&&dia<=23){
            alert('Virgo');
        }else if(dia>=23 && dia<=31){
            alert('Libra');
        }break;
    case "10":
        if(dia>=0&&dia<=22){
            alert('Libra');
        }else if(dia>=23 && dia<=31){
            alert('Escorpio');
        }break;
    case "11":
        if(dia>=0&&dia<=21){
            alert('Escorpio');
        }else if(dia>=22 && dia<=31){
            alert('Sagitario');
        }break;
    case "12":
        if(dia>=0&&dia<=21){
            alert('Sagitario');
        }else if(dia>=23 && dia<=31){
            alert('Lcapricornio');
        }break;
    default:
        alert('Escribiste algo erroneo');
}

