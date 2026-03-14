import { useState } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone:"",
    message: ""
  });

  const submitHandler= (e) => {
    e.preventDefault()
  emailjs.send(
    'service_2z0bsfq',   
    'template_u6glg9k',  
    formData,            
    '4Qa191bvJk6mjMb8g'    
  )
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    alert("Message sent to my Gmail successfully!");
 
    setFormData({ userName: "", email: "",phone:"", message: "" });
  })
  .catch((err) => {
    console.log('FAILED...', err);
    alert("Something went wrong. Please try again.");
  });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value 
    }));
  };
  return (
    <div className="flex flex-col gap-10 "> 
     <div className="h-[100px] md:h-[200px] flex items-center justify-center relative ">
        <h1 className=" absolute bottom-0 border-2 p-2 md:p-5 w-3xs md:w-xs justify-center flex text-xl md:text-4xl font-bold ">CONTACT </h1>
      </div>
      <div className="w-full flex justify-center">
<form onSubmit={submitHandler} className="flex flex-col gap-2 md:gap-5 w-xl justify-center border-2 p-3"> 

  <div className="flex flex-col gap-2 p-2"> 
   <label className="text-xl md:text-2xl font-semibold text-gray-900">Name</label>
  <input type="text" 
  onChange={handleChange}
  name="userName"
  value={formData.userName}
  placeholder="Ram Basnet"
  required
  className=" bg-zinc-300 border-x-3 border-gray-400 font-stretch-50% text-xs md:text-2xl p-2  rounded-2xl outline-none"
  />
  </div>


 <div className="flex flex-col gap-2 p-2 ">
   <label className="text-xl md:text-2xl font-semibold text-gray-900">Email</label>
  <input type="email" 
  name="email"
  onChange={handleChange}
  value={formData.email}
  placeholder="john@gmail.com"
  required
  className=" bg-zinc-300 border-x-3 border-gray-400 font-stretch-50% text-xs md:text-2xl p-2  rounded-2xl outline-none"
  />
</div>

 <div className="flex flex-col gap-2 p-2"> 
   <label className="text-xl md:text-2xl font-semibold text-gray-900">Phone</label>
  <input type="phone" 
  name="phone"
  onChange={handleChange}
  value={formData.phone}
  placeholder="98510*****"
  required
  className="bg-zinc-300 border-x-3 border-gray-400 font-stretch-50% text-xs md:text-2xl p-2  rounded-2xl outline-none"
  />
  </div>

   <div className="flex flex-col gap-2 p-2"> 
   <label className="text-xl md:text-2xl font-semibold text-gray-900">Message</label>
  <textarea name="message"
  value={formData.message}
  rows="4"
  onChange={handleChange}
  placeholder="How can i help you"
  className="bg-zinc-300 border-x-3 border-gray-400 font-stretch-50% text-xs md:text-2xl p-2  rounded-2xl outline-none">
  </textarea>
  </div>
  <div className=" flex justify-center">
    <button type="submit" className="text-xs md:text-2xl text-gray-950 bg-amber-600 p-3 rounded-b-2xl rounded-t-xl">Submit</button>
  </div>
</form>
      </div>
    </div>
  )
}

export default Contact