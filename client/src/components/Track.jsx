import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import "../styles/spotify/styles.css"

export default function Track({ track }) {
  return (
    <Container fluid className='mb-4 d-flex track-container'>
      <img src={track.images[0].url} alt='img' style={{ height: '80px', width: '80px' }} />
      <div className='px-3 d-flex-column'>
        <h1>{track.name}</h1>
        {track.artists.map(artist => (<b key={artist.id}>{artist.name} </b>))}
      </div>
    </Container>
  )
}

Track.propTypes = {
  track: PropTypes.object.isRequired
}
