
const SocialLinks = (props) => {
  return (
    <div className="footer">
      {props.links.map((i)=>
        <span>{i}</span>
      )}
        {/* <span>Facebook</span>
        <span>Twitter</span>
        <span>Whatsapp</span>
        <span>LinkedIn</span>
        <span>Instagram</span> */}
    </div>  
  )
}

export default SocialLinks;
