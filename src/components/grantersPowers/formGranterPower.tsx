import { useState } from "react";
import { GrantersType } from "../../types";
import { documentTypeList, initialStateGranter, setRandomId } from "../../utils/granters.utils";
import { DOCUMENT_NUMBER_FEED_BACK, FULL_NAME_FEED_BACK, documentNumberRegex, fullNameRegex } from "../../utils/validations.utils";
import { useDispatch, useSelector } from "react-redux";
import { SET_GRANTERS, setAnyState } from "../../store/actions/powerAction";
import { Button, Form } from "react-bootstrap";
import ListGranterPower from "./listGrantersPower";


type FormGranPowerType = {
  granterPowerList: any,
  setUpdateState: any,
}


const FormGranterPower = (props: FormGranPowerType) => {
  const dispatch = useDispatch();
  const country = useSelector<any>(state => state.PowerReducer.country);

  const [isValidForm, setIsValidForm] = useState(false);
  const [showEditDelete, setShowEditDelete] = useState(false);

  const [granter, setGranter] = useState<GrantersType>(
    initialStateGranter
  );

  const onChange = (e: any) => {
    let isInvalid, feedBack;
    switch (e.target.name) {
      case 'fullName':
        isInvalid = !fullNameRegex.test(e.target.value);
        feedBack = FULL_NAME_FEED_BACK;
        break;
      case 'documentType':
        isInvalid = false;
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

    if (!isInvalid &&
      !granter.documentNumber.isInvalid && granter.documentNumber.element !== '' &&
      !granter.documentType.isInvalid && granter.documentType.element !== '' &&
      !granter.fullName.isInvalid && granter.fullName.element !== ''
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
    // setArticle({ ...article, [e.target.name]: {...[e.target.name], element: e.target.value, isInvalid, feedBack } });
  };

  const onSubmit = () => {

    if (isValidForm) {
      const newGranters = props.granterPowerList.concat({
        index: setRandomId(),
        fullName: granter.fullName.element,
        documentType: granter.documentType.element,
        documentNumber: granter.documentNumber.element,
      });
      props.setUpdateState(newGranters)
      // dispatch(setAnyState(SET_GRANTERS, newGranters));
      cleanAfterAction();
    }
  };

  const remove = () => {
    const newArray = props.granterPowerList.filter((granterIterate: GrantersType) =>
      granterIterate.index !== granter.index
    );
    props.setUpdateState(newArray)
    // dispatch(setAnyState(SET_GRANTERS, newArray));
    cleanAfterAction();
  }

  const edit = () => {
    const newArray = props.granterPowerList.filter((granterIterate: GrantersType) =>
      granterIterate.index !== granter.index
    );
    newArray.push({
      index: granter.index,
      fullName: granter.fullName.element,
      documentType: granter.documentType.element,
      documentNumber: granter.documentNumber.element,
    });
    props.setUpdateState(newArray)
    // dispatch(setAnyState(SET_GRANTERS, newArray));
    cleanAfterAction();
  }

  const cleanAfterAction = () => {
    setGranter(initialStateGranter);
    setIsValidForm(false);
    setShowEditDelete(false);
  }
  return (
    <>
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
          <Form.Select id="documentType" name='documentType' onChange={onChange}>
            <option > seleccionar</option>
            {country && documentTypeList[country] && documentTypeList[country].map((documentType: any) => (
              <option selected={granter.documentType.element === documentType.name} value={documentType.name} key={documentType.abreviatura}>{documentType.name}</option>
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
          {!showEditDelete &&
            <Button
              className='radius'
              variant="outline-primary"
              size='lg'
              onClick={() => onSubmit()}
              disabled={!isValidForm}
            >
              Agregar
            </Button>
          }

          {showEditDelete &&
            <>
              <Button
                className='radius space-left'
                variant="outline-primary"
                size='lg'
                onClick={() => edit()}
                disabled={!isValidForm}
              >
                Editar
              </Button>
              <Button
                className='radius space-left'
                variant="outline-danger"
                size='lg'
                onClick={() => remove()}
                disabled={!isValidForm}
              >
                Eliminar
              </Button>
            </>
          }
        </div>
      </Form>
      <ListGranterPower
        setHook={setGranter}
        setIsValidForm={setIsValidForm}
        allGranters={props.granterPowerList}
        setShowEditDelete={setShowEditDelete}
      />
    </>
  )
}

export default FormGranterPower;