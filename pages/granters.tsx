import {useState} from 'react'
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { Form } from "react-bootstrap";
import { GrantersType } from '@/src/types';
import { FULL_NAME_FEED_BACK, fullNameRegex } from '@/src/utils/validations.utils';
import { useSelector } from 'react-redux';
import { documentTypeList } from '@/src/utils/granters.utils';

const Granters = () => {
  const content = 'Agrega la persona o personas que otorgaran el poder.';
  const content2 = 'Puede ser una sola persona o varias.';
  const pageNext = '/powerPerson';
  const pageBack = '/country';
  const country = useSelector<any>(state => state.PersonReducer.country);

  const [granters, setGranters] = useState<GrantersType>(
    {
      fullName: {element: '', isInvalid: false, feedBack:'' },
      documentType: {element: '', isInvalid: false, feedBack:'' },
      documentNumber: {element:'', isInvalid: false, feedBack: ''},
    }
    );

  const [validForm, setValidForm] = useState<boolean>(true);

  const onChange = (e: any) => {
     let isInvalid, feedBack;
    switch(e.target.name){
      case 'fullName':
        isInvalid = !fullNameRegex.test(e.target.value);
        feedBack = FULL_NAME_FEED_BACK;
        break;
      case 'documentType':
        // isInvalid= !productsNumberRegex.test(e.target.value);
        // feedBack = FEED_BACK_NUMBER_PRODUCTS
      break;
    }
    setGranters(
      {
        ...granters,
          [e.target.name]: {
            ...[e.target.name],
            element: e.target.value, 
            isInvalid, feedBack
          }
      
      }
    )
    // setArticle({ ...article, [e.target.name]: {...[e.target.name], element: e.target.value, isInvalid, feedBack } });
  };

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
              isInvalid={granters.fullName.isInvalid}
              onChange={onChange}
              value={granters.fullName.element}
              placeholder="Luis Alberto Jimenez Arevalo" />
            <Form.Control.Feedback type='invalid'>
              {granters.fullName.feedBack}
            </Form.Control.Feedback>
          </Form.Group>
          <br></br>
          <Form.Group className="col-12">
            <Form.Label htmlFor="documentType">Tipo de documento</Form.Label>
            <Form.Select id="documentType"  onChange={onChange}>
              <option > seleccionar</option>
              { country && documentTypeList[country] && documentTypeList[country].map((documentType :any) => (
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
              isInvalid={granters.documentNumber.isInvalid}
              onChange={onChange}
              value={granters.documentNumber.element}
              placeholder='Numero' />
            <Form.Control.Feedback type='invalid'>
              {granters.documentNumber.feedBack}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>

      </ContainerComponent>
      <Footer back={pageBack} continue={pageNext} />
    </>
  )
}

export default Granters;