import { Container } from "react-bootstrap";
import PropTypes from 'prop-types'
import "../styles/navbar/styles.css";

export default function MyNavbar({ userData }) {
    return (
        <Container fluid>
            <a className="d-flex layout-div text-decoration-none" href={userData.href}>
                <div>
                    <img src="../assets/spotify/icons8-spotify.svg" />
                </div>
                <div className="profile-container">
                    <div className="profile-pic">
                        <img src={userData.images[0].url} className="image" />
                    </div>
                    <div className="bold-text">
                        Welcome, {userData.display_name}
                    </div>
                </div>
            </a>
        </Container>
    )
}

MyNavbar.propTypes = {
    userData: PropTypes.object.isRequired
}
