import 'swiper/swiper-bundle.css';
import { data, Project } from '../components/DataProject';
import style from '../styles/Projeto.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useState } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';


interface MyProjectProps {

}

const Projeto: React.FC<MyProjectProps> = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<Project | null>(null);


    const openModal = (item: Project) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setModalOpen(false);
    };

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1> Projetos </h1>
                <p> Aqui estão alguns exemplos dos projetos que desenvolvi e estou trabalhando atualmente. <br /> Confira abaixo: </p>
            </div>
            <div className={style.box}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
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
            {modalOpen && selectedItem && (
                <div className={`${style.modalContainer} ${selectedItem ? style.open : ''} `}>
                    <div className={style.flex}>
                        <button className={style.closeButton} onClick={closeModal}>X</button>
                        <h1>{selectedItem.nome}</h1>
                        <ul>
                            <li>
                                <span><i className="fa-regular fa-file-lines"></i></span>
                                <div>
                                    <span><b>Descrição:</b></span>
                                    <span>{selectedItem.descricao}</span>
                                </div>
                            </li>

                            <li>
                                <span><i className="fa-regular fa-user"></i></span>
                                <div>
                                    <span><b>Repositório:</b></span>
                                    <span><a href={selectedItem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Acessar repositório</a></span>
                                </div>
                            </li>
                        </ul>
                        <Image src={selectedItem.image} alt="Slider" />
                        <div>
                            <span><b>Linguagens utilizadas: </b></span>
                            <span>{selectedItem.ling} </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projeto;