import React from 'react'
import corgi from '../images/corgi.jpg'

export default function Contact(props) {
  return (
    <div className="contact-card">
        <img src={corgi} alt="" />
        <h3>{props.name}</h3>
        <div className="info-group">
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <p>{props.email}</p>
        </div>
    </div>
  )
}
