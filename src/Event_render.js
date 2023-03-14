import React ,{useState} from 'react'

const Event_render = () => {
    // onsubmit
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(event.target.name.value)
        console.log(event.target.email.value)
    }

    // on click & on change
    const [cname, setName] = useState('')
    const [cemail, setEmail] = useState('')
    const onClickHandler = () =>{
        console.log(cname)
        console.log(cemail)
    }
    const onChangeName = (event) =>{
        setName(event.target.value)
    }
    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    // onMouseEnter & onMouseLeave
    const onMouseEnter =()=>{
        console.log("mouse enter")
    }
    const onMouseLeave =()=>{
        console.log("mouse leave")
    }

    // onchange radio(conditional rendering)
    const [Display, setDisplay] = useState(true)
    const onChangeRadio =()=>{
        setDisplay (!Display)
    }


    return (
        <div>
            <h4>onSubmit</h4>
            <form onSubmit={onSubmitHandler}>
                <div><input type="text" name="name" placeholder='name' /></div>
                <div><input type="email" name="email" placeholder='email' /></div>
                <div><input type="submit" value="Submit" /></div>
            </form>

            <h4>onclick & onchange</h4>
            <div><input onChange={onChangeName} type="text" name="cname" placeholder='name' /></div>
            <div><input onChange={onChangeEmail} type="email" name="cemail" placeholder='email' /></div>
            <div><input onClick={onClickHandler} type="submit" value="Submit" /></div>

            <h3 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >mouse hover</h3>

            <h4>onchange radio(conditional rendering)</h4>
            <input type="radio" onChange={onChangeRadio} value={Display} checked={Display === true} />Display<br/>
            <input type="radio" onChange={onChangeRadio} value={Display} checked={Display === false}/>Hide
            {Display === true && <form>
                <div><input type="text" name="name" placeholder='name' /></div>
                <div><input type="email" name="email" placeholder='email' /></div>
                <div><input type="submit" value="Submit" /></div>
            </form>}
            {Display === false && <p>unable to show</p>}
        </div>
    )
}

export default Event_render
