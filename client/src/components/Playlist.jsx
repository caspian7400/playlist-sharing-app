// import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

export default function Playlist({ playlist }) {
  return (
    <div className='bg-black text-light d-flex-column my-4 pe-4' style={{ flexBasis: '150px' }}>
      <img src={playlist.images[0].url} alt='' style={{ width: '150px', height: '150px' }} />
      <div className='d-flex flex-column mt-2'>
        <h3 className='' style={{ fontSize: '0.75rem' }}>
          name: <b>{playlist.name}</b>
        </h3>
        <h3 className='' style={{ fontSize: '0.75rem' }}>
          owner: <a href={playlist.owner.external_urls.spotify} className='text-light link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover'>
            <b>{playlist.owner.display_name}</b>
          </a>
        </h3>
        <h3 className='' style={{ fontSize: '0.75rem' }}>
          tracks: <b>{playlist.tracks.total}</b>
        </h3>
        <h3 className='' style={{ fontSize: '0.75rem' }}>{playlist.public == false ?
          <div>
            <b>private</b>
            <i className='bi bi-lock ms-1' />
          </div> :
          <div>
            <b>public</b>
            <i className='bi bi-globe ms-1' />
          </div>}
        </h3>
      </div>
    </div>
  )
}

Playlist.propTypes = {
  playlist: PropTypes.object
}
