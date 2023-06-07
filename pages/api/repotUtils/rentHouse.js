module.exports = ({description, ubication ,granters, lawRepresentatives}) => 
 `Eres un abogado, me ayudaras a crear un poder especial con la siguiente descripción  ${description}, ${ubication ? `especifica la ubicación en: ${ubication}`:''} los ${granters.length >1? 'poderdantes': 'apoderados'} : ${JSON.stringify(granters)} , ${lawRepresentatives.length > 1 ? 'apoderados': 'apoderado'} ${JSON.stringify(lawRepresentatives)}, ten encuenta las siguientes instrucciones:
 1. escribe todo en 2 parrafos separados.
 2. No incluir la fecha
 3. Indicar los poderdantes y apoderados de la siguiente forma: nombre completo  identificado con tipo documento numero.
 4. No incluir el formato json
 5. no indicar nombres ni documentos al finalizar el parrafo  
`

 
