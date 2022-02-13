import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const Profile = ({ img, name, position, about }) => {
    return (
        <article className='review'>
            <div className="img-wrapper">
                <img src={img} alt={name} />
                <div className="quote">
                    <FontAwesomeIcon icon={faQuoteRight} />
                </div>
            </div>
            <div className="info">
                <h3 className="name">{name}</h3>
                <p className="position">{position}</p>
                <p className="about">{about}</p>
            </div>
        </article>
    )
}

export default Profile
