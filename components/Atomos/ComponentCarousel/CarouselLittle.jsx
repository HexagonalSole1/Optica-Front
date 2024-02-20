import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './CarouselLittle.module.css';
import Image from 'next/image';


const CarouselLittle = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <Image src={image}  width={1400} height={320}  objectFit="contain" layout="responsive"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselLittle;
