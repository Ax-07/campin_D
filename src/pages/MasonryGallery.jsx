import { useState } from "react";
import { Modal } from "../layouts/Modal";
import { Slider } from "../components/Slider";

export const MasonryGallery = () => {
    const [selectedImg, setSelectedImg] = useState({});
    const [selectedAlt, setSelectedAlt] = useState({});
    const [selectedImgIndex, setSelectedImgIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    console.log("src:", selectedImg, "alt:", selectedAlt, "index:", selectedImgIndex);

    const images = [
            { src: "./images/chalet/cuisineChalet.jpg", alt: "cuisisne du chalet" },
            { src: "./images/chalet/chalet.jpg", alt: "Chalet" },
            { src: "./images/chalet/chambre2Chalet.jpg", alt: "chambre 2 du Chalet" },
            { src: "./images/chalet/chambreChalet.jpg", alt: "chambre du chalet" },
            { src: "./images/chalet/salonChalets.jpeg", alt: "salon du chalet" },
            { src: "./images/chalet/terrasseChalet.jpg", alt: "terrasse du chalet" },
            { src: "./images/vueDuLac/coucherDeSoleilSurLeLac.jpg", alt: "coucher de soleil sur le lac" },
            { src: "./images/chalet/cuisineChalet.jpg", alt: "cuisisne du chalet" },
            { src: "./images/chalet/chalet.jpg", alt: "Chalet" },
            { src: "./images/chalet/chambre2Chalet.jpg", alt: "chambre 2 du Chalet" },
            { src: "./images/chalet/chambreChalet.jpg", alt: "chambre du chalet" },
            { src: "./images/chalet/salonChalets.jpeg", alt: "salon du chalet" },
            { src: "./images/chalet/terrasseChalet.jpg", alt: "terrasse du chalet" },
            { src: "./images/vueDuLac/coucherDeSoleilSurLeLac.jpg", alt: "coucher de soleil sur le lac" },
            { src: "./images/vueDuLac/coucherDeSoleilSurLeLac.jpg", alt: "coucher de soleil sur le lac" },
            { src: "./images/vueDuLac/coucherDeSoleilSurLeLac.jpg", alt: "coucher de soleil sur le lac" },
        ];
return (
    <>
        <div className="masonry-grid">
            {images?.map((image, index) => (
            <div key={index} className="masonry-grid__item">
                <img src={image.src} alt={image.alt} onClick={()=> {
                    setSelectedImg(image.src)
                    setSelectedAlt(image.alt)
                    setSelectedImgIndex(index)
                    setIsOpen(true)
                    }}/>
            </div>
            ))}
        </div>
        {/* affiche la photo selectionner dans la modal */}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Slider data={images} currentIndex={selectedImgIndex}/>
        </Modal>
    </>
    );
}