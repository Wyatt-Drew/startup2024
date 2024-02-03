import React from 'react';
import picture from '../../assets/farming.png';
import picture2 from '../../assets/asperagus.jpg';
import picture3 from '../../assets/grass.jpg';
import picture4 from '../../assets/LoZ.gif';
import './GalleryPage.css';
import GalleryImage from '../../components/GalleryImage';

const images = [picture, picture2, picture3, picture4, picture2, picture3, picture, picture3, picture, picture4, picture2, picture];

const GalleryPage = () => {
    return (
        <div className = "gallery-page">
            <h1 className='title'>Gallery</h1>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <GalleryImage key={index} image={image} index={index} />
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;