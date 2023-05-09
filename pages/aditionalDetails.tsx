
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { AditionalDetailsType, EventTargetType } from "@/src/types";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es'; // importa el idioma español desde date-fns

import "react-datepicker/dist/react-datepicker.css";
import { CREATE_GENERAL_FEED_BACK, DOCUMENT_NUMBER_FEED_BACK, createGeneralRegex, documentNumberRegex } from "@/src/utils/validations.utils";
import { SET_DETAILS, setAnyState } from "@/src/store/actions/powerAction";
import Router from "next/router";
import { formatDate } from "@/src/utils/general.utils";
import Title from "@/src/components/layouts/title";

registerLocale('es', es);

const AditionalDetails = () => {
  const content = 'Dos detalles mas y quedara listo.';
  const pageNext = '/summary';
  const pageBack = '/powerPeople';
  const dispatch = useDispatch();

  const [details, setDetails] = useState<AditionalDetailsType>({
    city: {element: '', isInvalid: false ,feedBack: ''},
    singDate: {element: null, isInvalid: false ,feedBack: ''}
  });

 const onChange = (e: EventTargetType) => {
  let isInvalid, feedBack;
  
    switch(e?.target?.name){
      case'city':
        isInvalid = !createGeneralRegex('3','20').test(e.target.value);
        feedBack = CREATE_GENERAL_FEED_BACK('3','20');
        break;
    }

    setDetails({...details, city: {element:e.target.value, feedBack: feedBack, isInvalid }})
 };
  
 const nextPage = () => {
  if(details.city.element && !details.city.isInvalid 
    && details.singDate.element && !details.singDate.isInvalid){
      dispatch(setAnyState(SET_DETAILS , {
        city: details.city.element,
        singDate: formatDate(details.singDate.element)
      })),
      Router.push(pageNext);

    }
 }


  return (
    <>
      <PreTitle content={content} />
      <ContainerComponent>
      <Title>Detalles adicionales</Title>
      <br></br>
      <br></br>
      <Form.Group className="col-12">
      <Form.Label htmlFor="fullName">Ciudad en la que se fiirma el poder</Form.Label>
          <Form.Control
            type="text"
            name='city'
            isInvalid={details.city.isInvalid}
            onChange={onChange}
            value={details.city.element}
            placeholder="Agregar ciudad" />
          <Form.Control.Feedback type='invalid'>
            {details.city.feedBack}
          </Form.Control.Feedback>
        </Form.Group>

        <br></br>
        
      <Form.Group>
        <Form.Label htmlFor="date">Fecha en la que se firma el poder</Form.Label>
        <DatePicker
          name='singDate'
          selected={details.singDate.element}
          onChange={(date: Date | null) => setDetails({...details, singDate: {element: date, feedBack: '', isInvalid: false}})}
          placeholder="Selecciona una fecha"
          locale="es" // define la opción locale en español
          dateFormat="dd/MM/yyyy" // formato de la fecha
          className="form-control"
        />
      </Form.Group>
  
     
          
      </ContainerComponent>
      <Footer back={pageBack} continue={nextPage} />
    </>
  )
}

export default AditionalDetails;