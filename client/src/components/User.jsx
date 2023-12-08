// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'

export default function User({ userData }) {
    return (
        <>
            <div className='d-flex-row'>
                <div className='' style={{ width: '100px', height: '100px' }}>
                    <div className='rounded-circle h-100 d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faUser} size="4x" />
                    </div>
                </div>
                <div className='d-flex flex-grow-2'>
                    <div className='user-name'>{userData.display_name}</div>
                    <div className='user-bio'>{userData.bio}</div>
                </div>
            </div>
        </>
    )
}

User.propTypes = {
    userData: PropTypes.object.isRequired
}