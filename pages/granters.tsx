import { useState } from 'react'
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { GrantersType } from '@/src/types';
import { DOCUMENT_NUMBER_FEED_BACK, FULL_NAME_FEED_BACK, documentNumberRegex, fullNameRegex } from '@/src/utils/validations.utils';
import { useDispatch, useSelector } from 'react-redux';
import { documentTypeList, initialStateGranter, setRandomId } from '@/src/utils/granters.utils';
import { SET_GRANTERS, setAnyState } from '@/src/store/actions/powerAction';
import FormGranterPower from '@/src/components/formGrantersPower';



const Granters = () => {
  const content = 'Agrega la persona o personas que otorgaran el poder.';
  const content2 = 'Puede ser una sola persona o varias.';
  const pageNext = '/powerPerson';
  const pageBack = '/country';
  const dispatch = useDispatch();
  const country = useSelector<any>(state => state.PowerReducer.country);
  const allGranters = useSelector<any>(state => state.PowerReducer.granters);
  
  

  const [granter, setGranter] = useState<GrantersType>(
    initialStateGranter
  );

  const [validForm, setValidForm] = useState<boolean>(true);

  const onChange = (e: any) => {
    let isInvalid, feedBack;
    switch (e.target.name) {
      case 'fullName':
        isInvalid = !fullNameRegex.test(e.target.value);
        feedBack = FULL_NAME_FEED_BACK;
        break;
      case 'documentType':
        // isInvalid= !productsNumberRegex.test(e.target.value);
        // feedBack = FEED_BACK_NUMBER_PRODUCTS
        break;
      case 'documentNumber':
        isInvalid = !documentNumberRegex.test(e.target.value);
        feedBack = DOCUMENT_NUMBER_FEED_BACK
        break;
    }
    setGranter(
      {
        ...granter,
        [e.target.name]: {
          ...[e.target.name],
          element: e.target.value,
          isInvalid, feedBack
        }

      }
    )
    // setArticle({ ...article, [e.target.name]: {...[e.target.name], element: e.target.value, isInvalid, feedBack } });
  };

  const onSubmit = () => {
   const newGranters= allGranters.concat({
      index: setRandomId(),
      fullName: granter.fullName.element,
      documentType: granter.documentType.element,
      documentNumber: granter.documentNumber.element,
    });
    dispatch(setAnyState(SET_GRANTERS,newGranters));
    setGranter(initialStateGranter);
  }

  return (
    <>
      <PreTitle content={content} content2={content2} />
      <ContainerComponent>
        <Form>
          <Form.Group className="col-12">
            <Form.Label htmlFor="fullName">Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              name='fullName'
              isInvalid={granter.fullName.isInvalid}
              onChange={onChange}
              value={granter.fullName.element}
              placeholder="Agregar Nombre" />
            <Form.Control.Feedback type='invalid'>
              {granter.fullName.feedBack}
            </Form.Control.Feedback>
          </Form.Group>
          <br></br>
          <Form.Group className="col-12">
            <Form.Label htmlFor="documentType">Tipo de documento</Form.Label>
            <Form.Select id="documentType" onChange={onChange}>
              <option > seleccionar</option>
              {country && documentTypeList[country] && documentTypeList[country].map((documentType: any) => (
                <option value={documentType.name} key={documentType.abreviatura}>{documentType.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <br></br>
          <Form.Group className="col-12">
            <Form.Label htmlFor="documentNumber">Numero Documento</Form.Label>
            <Form.Control
              type="text"
              name='documentNumber'
              isInvalid={granter.documentNumber.isInvalid}
              onChange={onChange}
              value={granter.documentNumber.element}
              placeholder='Numero' />
            <Form.Control.Feedback type='invalid'>
              {granter.documentNumber.feedBack}
            </Form.Control.Feedback>
          </Form.Group>
          <br></br>
          <div className='center'>
            <Button
              className='radius center'
              variant="outline-primary"
              size='sm'
              onClick={() => onSubmit()}
            >
              Agregar Poderdante
            </Button>
          </div>
        </Form>
        <FormGranterPower setHook={setGranter} allGranters={allGranters} />

      </ContainerComponent>
      <Footer back={pageBack} continue={pageNext} />
    </>
  )
}

export default Granters;