import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";

const Granters = () => {
  const content = 'Agrega la persona o personas que otorgaran el poder.';
  const content2 = 'Puede ser una sola persona o varias.';
  const pageNext = '/powerPerson';
  const pageBack = '/country';
  return (
    <>
      <PreTitle content={content} content2={content2}/>
      <ContainerComponent>

      </ContainerComponent>
      <Footer back={pageBack}continue={pageNext}/>
    </>
  )
}

export default Granters;