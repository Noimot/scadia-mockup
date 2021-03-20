import React from 'react';



function Images({ imageList }) {
    return (
        <div className='images-div-img'>
            <img src={imageList.imageUrl} alt="movie-image" height="300" width="230px" />
            <p style={{ color: '#5f6368', fontSize: '0.875rem' }}>{imageList.movieTitle}</p>

        </div>

    )
}



export default Images