// import React from 'react'
import { Container, Offcanvas, Navbar, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'

export default function User({ userData }) {
    return (
        <>
            <Navbar key='false' expand='false' className='mb-3' data-bs-theme='dark'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='offcanvasNavbar' className='border-0' />
                    <Form inline className='w-50 m-auto'>
                        <InputGroup>
                            <Form.Control type='text' placeholder='Search' aria-label='Search' aria-describedby='basic-addon1' />
                            <InputGroup.Text id='basic-addon1'>Search</InputGroup.Text>
                        </InputGroup>
                    </Form>
                    <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='start' data-bs-theme='dark'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel'>{userData.display_name}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className=' rounded-circle w-50 h-50'>
                                {
                                    userData.images.length === 0 ?
                                        <div style={{ height: '150px', width: '150px' }}>
                                            <div className='bg-success rounded-circle h-100 d-flex justify-content-center align-items-center'>
                                                <FontAwesomeIcon icon={faUser} size="4x" />
                                            </div>
                                        </div>
                                        :
                                        <img src={userData.images[0]} alt="" />

                                }
                            </div>
                            <h3 className=''>{JSON.stringify(userData)}</h3>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
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