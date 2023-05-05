
//PATTERNS

const WITH_ACCENT = 'a-zA-ZáéíóúüÁÉÍÓÚÜñÑ'
const FULL_NAME_PATTERN = `(^[${WITH_ACCENT}]{3,16})([ ]{0,1})([${WITH_ACCENT}]{3,16})?([ ]{0,1})?([${WITH_ACCENT}]{3,16})?([ ]{0,1})?([${WITH_ACCENT}]{3,16})`

const DOCUMENT_NUMBER_PATTERN = '^[a-zA-Z0-9?\'"&% ]{3,30}$';
//VALIDATIONS
export const fullNameRegex = new RegExp(FULL_NAME_PATTERN);
export const documentNumberRegex = new RegExp(DOCUMENT_NUMBER_PATTERN);

//FEED BACK

export const FULL_NAME_FEED_BACK = 'debes incluir nombres y apellidos';
export const DOCUMENT_NUMBER_FEED_BACK = 'debe tener entre 3 y 30 caracteres, este es un campo requerido';