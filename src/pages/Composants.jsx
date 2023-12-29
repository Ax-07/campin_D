import { Tabs } from "../components/Tabs.jsx";
import { HeroBanner } from "../components/HeroBanner.jsx";

export const Composants = () => {
    return (
        <section className="section section__contents">
            <HeroBanner src="about" heroTitle="" heroImg="./images/vueDuLac/coucherDeSoleilSurLeLac.jpg" />
            <Tabs>
                <Tab1 title="tab1" imgSrc="/images/logo-lac-devesset.png"/>
                <Tab2 title="tab2" imgSrc="/images/logo-lac-devesset.png"/>
                {/* etc... (title permet de mettre un titre dans l'onglet idem pour imgSrc) */}
            </Tabs>
        </section>
    );
};

// exemple de code pour le composant Tabs

const Tab1 = () => {
    return (
        <div>
            <h1>tab 1</h1>
        </div>
    );
}
const Tab2 = () => {
    return (
        <div>
            <h1>tab 2</h1>
        </div>
    );
}