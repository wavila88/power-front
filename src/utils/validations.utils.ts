
//PATTERNS
const FULL_NAME_PATTERN = '(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})'
//VALIDATIONS
export const fullNameRegex = new RegExp(FULL_NAME_PATTERN);

//FEED BACK

export const FULL_NAME_FEED_BACK = 'debes incluir nombres y apellidos';