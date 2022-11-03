import Page from "../../components/Pages";
import Faq from "../../sections/HomePage/Faq";
import FormationAdvantages from "../../sections/HomePage/FormationAdvantages";
import FormationHours from "../../sections/HomePage/FormationHours";
import HomeHero from "../../sections/HomePage/HomeHero";
import RTFormation from "../../sections/HomePage/RTFormation";

function HomePage() {
    return (
        <Page title="Accueil">
            <HomeHero/>
            <FormationAdvantages/>
            <RTFormation/>
            <FormationHours/>
            <Faq/>
        </Page>
    );
}

export default HomePage;