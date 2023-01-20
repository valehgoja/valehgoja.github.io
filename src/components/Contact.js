import React from 'react'

 function Contact() {
  return (
    <div>
      <div className='container'>
      <div className='cards linkedn'><a href='https://www.linkedin.com/in/valehgoja' target={'_blank'}><i className="fa-brands fa-linkedin contactLogo"></i></a></div>
        <div className='cards git'><a href='https://github.com/valehgoja' target={'_blank'}><i className="fa-brands fa-github contactLogo"></i></a></div>
        <div className='cards gmail'><a href='mailto:qocayevvaleh96@gmail.com' target={'_blank'}><i className="fa-regular fa-envelope contactLogo"></i></a></div>
        <div className='cards whatsapp'><a href='https://wa.me/+48509257317' target={'_blank'}><i className="fa-brands fa-whatsapp contactLogo"></i></a></div>
        <div className='cards facebook'><a href='https://www.facebook.com/valeh.qoca.35' target={'_blank'}><i className="fa-brands fa-facebook contactLogo"></i></a></div>
        
      </div>
    </div>
  )
}

export default Contact
