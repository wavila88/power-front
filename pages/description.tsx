
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { useDispatch, useSelector } from 'react-redux';
import { SET_DESCRIPTION, SET_POWER_PEOPLE, setAnyState } from "@/src/store/actions/powerAction";
import { Form } from "react-bootstrap";
import Router from "next/router";
import { useState } from "react";
import { EventTargetType, RegexValidation } from '../src/types';
import { descriptionRegex } from "@/src/utils/validations.utils";
import { DESCRIPTION_FEED_BACK } from "@/src/utils/validations.utils";
import Title from "@/src/components/layouts/title";
import Head from "next/head";



const PowerPeople = () => {
  const content = 'Entre mas detalles agregues, el documento quedara mejor redactado ';
  const pageNext = '/aditionalDetails';
  const pageBack = '/powerPeople';
  const dispatch = useDispatch();

  const [description, setDescription] = useState<RegexValidation<string>>({ element: '', isInvalid: false, feedBack: '' })



  const setDescriptio = () => {
    // dispatch(setAnyState(SET_POWER_PEOPLE,powerPeopleList))
  }

  const onChange = (e: EventTargetType) => {
    let isInvalid;
    isInvalid = !descriptionRegex.test(e.target.value);
    setDescription({ element: e.target.value, feedBack: DESCRIPTION_FEED_BACK, isInvalid })
  }

  const changePage = () => {
    if (!description.isInvalid && description.element.length > 0) {
      dispatch(setAnyState(SET_DESCRIPTION, description.element));
      Router.push(pageNext)
    }
  }

  return (
    <>
      <Head>
        <title>Descripción</title>
      </Head>
      <PreTitle content={content} />
      <ContainerComponent>
        <Title>Descripción</Title>
        <br></br>
        <br></br>
        <h3>Agrega descripción para el poder que deseas crear</h3>
        <div><strong>“Ejemplo: Crear un poder para vender una casa, esta esta ubicada en la siguiente dirección #### . ”</strong></div>
        <br></br>
        <Form.Group className="col-12">

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