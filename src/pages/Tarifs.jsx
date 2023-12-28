import { HeroBanner } from "../components/HeroBanner";
import { TarifsList } from "../layouts/TarifsList";
import { DropDown } from "../components/DropDown";
import { useGetAllDataQuery } from "../services/api/tarifsApi";

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
