
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { useDispatch, useSelector } from 'react-redux';
import { SET_DESCRIPTION, SET_POWER_PEOPLE, setAnyState } from "@/src/store/actions/powerAction";
import { Form } from "react-bootstrap";
import Router from "next/router";
import { useState } from "react";
import {EventTargetType, RegexValidation} from '../src/types';
import { descriptionRegex } from "@/src/utils/validations.utils";
import { DESCRIPTION_FEED_BACK } from "@/src/utils/validations.utils";
import Title from "@/src/components/layouts/title";



const Summary = () => {
  const content = 'Asegurate de que todos los detalles esten listos antes de crear tu poder.';
  const pageNext = '/aditionalDetails';
  const pageBack = '/description';
  const dispatch = useDispatch();



  return (
    <>
      <PreTitle content={content} />
      <ContainerComponent>
      <Title>Resumen</Title>
      </ContainerComponent>
      <Footer back={pageBack} continue={pageNext} />
    </>
  )
}

export default Summary;