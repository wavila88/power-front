import { useDispatch } from 'react-redux'
import PreTitle from "@/src/components/layouts/preTitle";
import Form from 'react-bootstrap/Form';
import { countries } from "@/src/utils/home.utils";
import ContainerComponent from "@/src/components/layouts/containerContent";
import { SELECT_COUNTRY, setAnyState} from '../src/store/actions/personAction';


import styles from '../styles/components/country.module.css';
import Footer from "@/src/components/layouts/footer";

const Country = () => {
  const content = 'Empecemos con la información de tu país';
  const pageNext = '/granters';
  const pageBack = '/';
  const dispatch = useDispatch();

  return (
    <>
      <PreTitle content={content}/>
      <ContainerComponent>
        <div className={styles.countryContainer}>
        <Form>
          <Form.Group className="col-12">
            <Form.Label htmlFor="disabledSelect">Seleccionar Pais</Form.Label>
            <Form.Select id="disabledSelect" size='lg' onChange={(e:any) => dispatch(setAnyState(SELECT_COUNTRY,e.target.value))}>
              <option disabled={true}> seleccionar</option>
              {countries.map((country) => (
                <option value={country.countryName} key={country.countryId}>{country.countryName}</option>
              ))}
            </Form.Select>
          </Form.Group>
          </Form>
         
        </div>
      </ContainerComponent>
      <Footer back={pageBack}continue={pageNext}/>
    </>
  )
}

export default Country;