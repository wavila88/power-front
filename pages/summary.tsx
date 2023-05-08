
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



const Summary = () => {
  const content = 'Entre mas detalles agregues, el documento quedara mejor redactado ';
  const pageNext = '/aditionalDetails';
  const pageBack = '/description';
  const dispatch = useDispatch();



  return (
    <>
      <PreTitle content={content} />
      <ContainerComponent>
   
      </ContainerComponent>
      <Footer back={pageBack} continue={pageNext} />
    </>
  )
}

export default Summary;