
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { useDispatch, useSelector } from 'react-redux';
import { SET_POWER_PEOPLE, setAnyState } from "@/src/store/actions/powerAction";
import { Form } from "react-bootstrap";
import Router from "next/router";
import { useState } from "react";
import {EventTargetType, RegexValidation} from '../src/types';



const PowerPeople = () => {
  const content = 'Entre mas detalles agregues, el documento quedara mejor redactado ';
  const pageNext = '/summary';
  const pageBack = '/powerPeople';
  const dispatch = useDispatch();

  const [description, setDescription] = useState<RegexValidation<string>>({element: '', isInvalid: false, feedBack: ''})


  
  const setDescriptio = () => {
    // dispatch(setAnyState(SET_POWER_PEOPLE,powerPeopleList))
  }

  const onChange = (e:EventTargetType) =>{
    
  }

  const changePage = ()=> {
    Router.push(pageNext)
  }

  return (
    <>
      <PreTitle content={content} />
      <ContainerComponent>
      <Form.Group className="col-12">
          <Form.Label htmlFor="documentNumber">Numero Documento</Form.Label>
          <Form.Control
            as="textarea"
            name='documentNumber'
            rows={3}
            isInvalid={description.isInvalid}
            onChange={onChange}
            value={description.element}
            placeholder='Descripción' />
          <Form.Control.Feedback type='invalid'>
            {description.feedBack}
          </Form.Control.Feedback>
        </Form.Group>
      </ContainerComponent>
      <Footer back={pageBack} continue={changePage} />
    </>
  )
}

export default PowerPeople;