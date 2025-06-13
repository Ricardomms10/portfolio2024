import React from 'react';
import { data } from './SkillData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from '../../styles/Skill.module.scss';
import Image from 'next/image';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';

const Skill: React.FC = () => {
    const breakpoints = {
        320: {
            slidesPerView: 5,
        },
        480: {
            slidesPerView: 8,
        },
        768: {
            slidesPerView: 10,
        },
    };

    return (
        <div className={styles.container}>
            <h4>MINHAS SKILLS</h4>
            <Swiper
                className={styles.customSwiper}
                slidesPerView={10}
                breakpoints={breakpoints}
                loop={true}
                freeMode={{
                    enabled: true,
                    momentum: false,
                }}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={1500}
                modules={[Autoplay, FreeMode]}
            >

                {data.map((item) => (
                    <SwiperSlide className={styles.customSwipersLide} key={item.id}>
                        <Image src={item.image} alt='icone' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Skill;
