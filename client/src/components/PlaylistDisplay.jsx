import PropTypes from 'prop-types';

function PlaylistDisplay({playlist , duration}) {

    //use jimp (ip library) to make it look epic 
    return (
        <div>
            <h1>{playlist.name}</h1>
            <h3>{duration}</h3>
        </div>
    )
}

PlaylistDisplay.propTypes = {
    playlist: PropTypes.object.isRequired,
    duration: PropTypes.number.isRequired,
}

export default PlaylistDisplay
