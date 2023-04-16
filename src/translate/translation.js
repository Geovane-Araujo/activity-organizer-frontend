const pt = {
  sunday: "Domingo",
  monday: "Segunda-feira",
  tuesday: "Terça-feira",
  wednesday: "Quarta-feira",
  thursday: "Quinta-feira",
  friday: "Sexta-feira",
  saturday: "Sábado",
  activity: "Atividades"
};

const en = {
  sunday: "Sunday",
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  activity: "Activity"
};

const es = {

}

function onTranslate(key){
  if(sessionStorage.getItem('language') != null && sessionStorage.getItem('language') == 'en-US'){
    return en[key];
  } else if(sessionStorage.getItem('language') != null && sessionStorage.getItem('language') == 'es-ES') {
    return es[key];
  } else {
    return pt[key];
  }
}

function setLanguage(language){
  let lang;
  switch(language) {
    case 'pt-BR':
      lang = 0;
      break;
    case 'en-US':
      lang = 1;
      break;
    case 'es-ES':
      lang = 2;
      break;
    default:
      lang = 0;
      break;
  }
  return lang;
}


export default { onTranslate, setLanguage }