import './Contact.css';


export const Contact = () => {
  
  return (
    <section className='contact'>
      <div className='contact__container'>
        
        <div className='contact__col'>
          <h1 className='contact__title'>Contact</h1>
          <p className='contact__text'>
            Aquí puedes enviarnos un mensaje o sugerencia. Nos encantaría conocer cualquier cosa que nos ayude a mejorar
          </p>
        </div>

        <div className='contact__col'>
          <form className='contact__form' >
            {/* Name */}
            <div className='contact__form-group'>
              <label className='contact__label' htmlFor="name">Name</label>
              <input className='contact__input' type="text" name="name" id="name" />
            </div>
            {/* Phone */}
            <div className='contact__form-group'>
              <label className='contact__label' htmlFor="phone">Phone</label>
              <input className='contact__input' type="text" name="phone" id="phone" />
            </div>
            {/* Email */}
            <div className='contact__form-group'>
              <label className='contact__label' htmlFor="email">Email</label>
              <input className='contact__input' type="email" name="email" id="email" />
            </div>
            <div className='contact__form-group'>
              <label className='contact__label' htmlFor="message">Message</label>
              <textarea className='contact__textarea' name="message" id="message" cols={30} rows={4}></textarea>
            </div>
            <button className='contact__button' type="submit">Send</button>
          </form>
        </div>

      </div>
    </section>
  )
}