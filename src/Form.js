import Button from "./Button"
const Form = ({ reqType, setReqType }) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}></form>
      <Button
      buttonText="users"
      reqType={reqType}
      setReqType={setReqType}
      />
      <Button
      buttonText="posts"
      reqType={reqType}
      setReqType={setReqType}
      />
      <Button
      buttonText="comments"
      reqType={reqType}
      setReqType={setReqType}
      />
    </div>
  )
}

export default Form
