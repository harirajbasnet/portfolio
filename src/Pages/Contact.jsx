const Contact = () => {

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: ""
  });
  const submitHandler= (e) => {
    e.preventDefault()
    console.log('Form Submitted by',title);
    alert(`Thank you ${formData.userName}! I will contact you soon.`);
    setTitle({userName: "", email: "", message: ""})
  }
  return (
    <div>
     <div className="h-[200px] flex items-center justify-center relative ">
        <h1 className=" absolute bottom-0 border-2  p-5 w-xs justify-center flex text-4xl font-bold ">CONTACT </h1>
      </div>
      <div>
<form> 
  <input type="text" />
  <input type="email" />
  <input type="phone" />
  <textarea></textarea>
</form>
      </div>
    </div>
  )
}

export default Contact