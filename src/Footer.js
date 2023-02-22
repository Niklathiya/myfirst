import SocialLinks from "./component/SocialLinks"

const Footer = (props) => {
  return (
    <div>
        <SocialLinks links={props.links}/>
    </div>
  )
}

export default Footer;
