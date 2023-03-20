import React, {useRef} from 'react'

const UseRef = () => {

    const nameRef = useRef(null)
    const onSubmitHandler = (event) =>{
        event.preventDefault()
        console.log(nameRef.current.value)
    }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div><input placeholder='name' type="text" ref={nameRef} /></div>
        <div><input placeholder='email' type="email"/></div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default UseRef
