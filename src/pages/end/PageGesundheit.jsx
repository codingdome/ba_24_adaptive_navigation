import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageGesundheit = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title={'Gesundheit'}>
            <div className="flex flex-col gap-2 items-start">
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/aerztinnenundapotheken')}
                    text={'Ärtzt:innen und Apotheken'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/beratungundvorsorge')}
                    text={'Beratung und Vorsorge'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/erstehilfe')}
                    text={'Erste Hilfe'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/gesundheitseinrichtungen')}
                    text={'Gesundheitseinrichtungen'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/planungundqualitaetssicherung')}
                    text={'Planung und Qualitätssicherung'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/themen/gesundheitundsoziales/gesundheit/spitaelerundgesundheitsdienste')}
                    text={'Spitäler und Gesundheitsdiense'}
                />
            </div>
        </PageWrapper>
    )
}

export default PageGesundheit;