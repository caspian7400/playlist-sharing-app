import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function Track({ track }) {
  return (
    <Container fluid className='mb-4 d-flex'>
      <img src={track.images[0].url} alt='img' style={{ height: '80px', width: '80px' }} />
      <div className='px-3'>
        <h1>{track.name}</h1>
        {track.artists.map(artist => (<b key={artist.id}>{artist.name} </b>))}
      </div>
    </Container>
  )
}

Track.propTypes = {
  track: PropTypes.object.isRequired
}
