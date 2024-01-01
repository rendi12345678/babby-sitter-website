import React, {useState} from 'react'
import contactStyles from "../styles/contact.module.css" 

export const Contact = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    noHp: "",
    location: "",
    date: "",
    salary: 0,
    message: ""
   })

   const {name, email, noHp, date, salary, message} = formData

   const handleSubmit = () => {
      
   }

   const handleInputChange = e => {
      setFormData(prevFormData => ({...prevFormData, [e.target.name]: e.target.value}))
   }

  return (
    <section className={contactStyles.contact}>
       <div className="section-title">
        <h2>Contact Me</h2>
        <p>Lets call me now</p>
       </div>
       <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name <br />
            <input type="text" value={name} name="name" onChange={handleInputChange}/>
          </label>
          <label htmlFor="email">
            Email <br />
            <input type="email" value={name} name="email" onChange={handleInputChange}/>
          </label>
       </form>
    </section>
  )
}
