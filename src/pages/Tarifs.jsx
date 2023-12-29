import { HeroBanner } from "../components/HeroBanner.jsx";
import { TarifsList } from "../layouts/TarifsList.jsx";
import { DropDown } from "../components/DropDown.jsx";
import { useGetAllDataQuery } from "../services/api/tarifsApi.js";

export const Tarifs = () => {
    const heroImg = './images/vueDuLac/20211011_194517.jpg';
    const { data: tarifs = [], refetch: refetchTarifs } = useGetAllDataQuery();

    return (
    <section className="section section__contents" style={{backgroundImage: `url(${heroImg})`}}>
        <div className="tarifs">
             {tarifs?.map((categorie, index) => (
            <DropDown key={index} className="dropDown--lg" title={categorie?.data?.title}>
                <TarifsList data={categorie.data} />
            </DropDown>
          ))}
        </div>
       
    </section>
    );
};
