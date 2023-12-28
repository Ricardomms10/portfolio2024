import React from 'react';
import { data } from './SkillData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from '../../styles/Skill.module.scss'; 
import Image from 'next/image';
import { Pagination } from 'swiper/modules'

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
                pagination={{ clickable: true }}
                modules={[ Pagination]}
                breakpoints={breakpoints}
            >
                {data.map((item) => (
                    <SwiperSlide className={styles.customSwipersLide} key={item.id}>
                        <Image src={item.image} alt='icone' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default Skill;
