import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image_01 from '../../../assets/04.jpg'
import image_02 from '../../../assets/01.jpg'
import image_03 from '../../../assets/02.jpg'
import image_04 from '../../../assets/03.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div className='overflow-hidden mx-auto h-[600px]'>
                    <img
                        src={image_01}
                        alt="description"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='overflow-hidden mx-auto h-[600px]'>
                    <img
                        src={image_02}
                        alt="description"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='overflow-hidden mx-auto h-[600px]'>
                    <img
                        src={image_03}
                        alt="description"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='overflow-hidden mx-auto h-[600px]'>
                    <img
                        src={image_04}
                        alt="description"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;