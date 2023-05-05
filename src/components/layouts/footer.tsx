import Continue from "@/src/components/layouts/buttons/continue";

type FooterType = {
  back: string,
  continue: string | (() => void) 
}

const Footer = (props: FooterType) => {
  return (
    <>
      <Continue continue={props.continue} back={props.back}/>
    </>
  )
}

export default Footer;