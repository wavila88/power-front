
//PATTERNS

const WITH_ACCENT = 'a-zA-ZáéíóúüÁÉÍÓÚÜñÑ'
const FULL_NAME_PATTERN = `(^[${WITH_ACCENT}]{3,16})([ ]{0,1})([${WITH_ACCENT}]{3,16})?([ ]{0,1})?([${WITH_ACCENT}]{3,16})?([ ]{0,1})?([${WITH_ACCENT}]{3,16})`
const DESCRIPTION = '^[a-zA-Z0-9?\'"&% áéíóúüÁÉÍÓÚÜñÑ/¡]{10,}$'
const CREATE_GENERAL_TEXT = (min: string = '3', max: string = '15' ) => `^[a-zA-Z0-9?\'"&% áéíóúüÁÉÍÓÚÜñÑ/¡,:;.]{${min},${max}}$`


const DOCUMENT_NUMBER_PATTERN = '^[a-zA-Z0-9?\'"&% ]{3,30}$';
//VALIDATIONS
export const fullNameRegex = new RegExp(FULL_NAME_PATTERN);
export const documentNumberRegex = new RegExp(DOCUMENT_NUMBER_PATTERN);
export const descriptionRegex = new RegExp(DESCRIPTION);
export const createGeneralRegex = (min: string = '3', max: string = '15') => new RegExp(CREATE_GENERAL_TEXT(min,max));

//FEED BACK

export const FULL_NAME_FEED_BACK = 'debes incluir nombres y apellidos';
export const DOCUMENT_NUMBER_FEED_BACK = 'debe tener entre 3 y 30 caracteres, este es un campo requerido';
export const DESCRIPTION_FEED_BACK = 'Debe tener un minimo de 10 caracteres';
export const CREATE_GENERAL_FEED_BACK = (min: string = '3', max: string = '15') =>`debe tener entre ${min} y ${max} caracteres, este es un campo requerido`;