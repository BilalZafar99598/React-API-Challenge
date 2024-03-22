const Button = ({ buttonText, reqType, setReqType,  }) => {
  return (
    <div>
        <button
         type="button" 
         className={buttonText === reqType ? "selected" : null}
         onClick={() => setReqType(buttonText)}
         >
            {buttonText}
        </button>
    </div>
  )
}

export default Button
