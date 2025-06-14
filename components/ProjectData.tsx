import 'swiper/swiper-bundle.css';
import { data, DataProject as Project } from './DataProjectData';
import style from '../styles/Projeto.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Modal, Box } from '@mui/material';
import Image from 'next/image';

const ProjectData: React.FC = () => {
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
            <p className={style.subtitle}>Projetos desenvolvidos com foco em Análise de Dados e Visualização. Deslize e explore os detalhes.</p>

            <div className={style.container}>
                <div className={style.title}>

                </div>
                <div className={style.box}>
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                            scale: 1,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination]}
                        className={`${style.customSwiper} mySwiper`}
                    >
                        {data.map((item) => (
                            <SwiperSlide className={style.customSwiperSlide} key={item.id}>
                                <div className={style.slideContent} onClick={() => openModal(item)}>
                                    <Image
                                        src={item.imagem}
                                        alt="Slider"
                                        className={style.centeredImage}
                                        width={380}
                                        height={300}
                                    />
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
                                <Image src={selectedItem.imagem} alt={selectedItem.nome} className={style.modalImage} width={600} height={400} />
                                <ul className={style.modalList}>
                                    <li>
                                        <div>
                                            <span>Descrição:</span>
                                            <p>{selectedItem.descricao}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>Ferramentas utilizadas:</span>
                                            <p>{selectedItem.ling}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span><b>Repositório:</b></span>
                                        </div>
                                    </li>
                                </ul>
                                <button onClick={closeModal} className={style.button}>
                                    Fechar
                                </button>
                            </>
                        )}
                    </Box>
                </Modal>
            </div></>
    );
};

export default ProjectData;
