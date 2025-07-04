import 'swiper/swiper-bundle.css';
import { data, Project } from './DataProject';
import style from '../styles/Projeto.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useState } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Modal, Box } from '@mui/material';

const WebProjects: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<Project | null>(null);

    const openModal = (item: Project) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setOpen(false);
    };

    return (
        <>
            <p className={style.subtitle}>
                Projetos desenvolvidos com foco em Web Design e Desenvolvimento. Deslize e explore os detalhes.
            </p>
            <div className={style.box}>
                <Swiper
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className={`${style.customSwiper} mySwiper`}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {data.map((item) => (
                        <SwiperSlide className={style.customSwiperSlide} key={item.id}>
                            <div className={style.slideContent} onClick={() => openModal(item)}>
                                <Image src={item.image} alt="Slider" className={style.centeredImage} />
                                <div className={style.text}>
                                    <h1>{item.nome}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Modal open={open} onClose={closeModal} className={style.modal}>
                <Box className={style.modalContent}>
                    {selectedItem && (
                        <>
                            <h2 className={style.modalTitle}>{selectedItem.nome}</h2>
                            <Image src={selectedItem.image} alt={selectedItem.nome} className={style.modalImage} />
                            <ul className={style.modalList}>
                                <li>
                                    <div>
                                        <span>Descrição:</span>
                                        <p>{selectedItem.descricao}</p>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <span>Linguagens utilizadas:</span>
                                        <p>{selectedItem.ling}</p>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <span><b>Repositório:</b></span>
                                        <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                                            Acessar repositório
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <button onClick={closeModal} className={style.button}>Fechar</button>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default WebProjects;
