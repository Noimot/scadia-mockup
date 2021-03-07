import React from 'react';



function Images({ imageList }) {
    return (
        <div className='images-div-img'>
            <img src={imageList.imageUrl} alt="movie-image" height="300" width="230px" />
            <p>{imageList.movieTitle}</p>

        </div>

    )
}



export default Images