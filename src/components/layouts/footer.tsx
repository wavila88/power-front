import Continue from "@/src/components/layouts/buttons/continue";

type FooterType = {
  back: string,
  continue: string | (() => void),
  nameContinue?: string  
}

const Footer = (props: FooterType) => {
  return (
    <>
      <Continue continue={props.continue} back={props.back} nameContinue={props.nameContinue}/>
    </>
  )
}

export default Footer;