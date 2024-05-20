import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";
import data from "../../placeholder.data";

const PageAufenthalt = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title={'Aufenthalt'}>
            <div className="flex flex-col gap-2 items-start">

                <p>{data.aufenthalt.text}</p>

                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/aufenthalt/aufenthaltfuerewrbuergerundschweizer')}
                    text={'Aufenthalt für EWR-Bürger:innen und Schweizer:innen'}
                />

                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/aufenthalt/aufenthaltfuerdrittstaatsangehoerige')}
                    text={'Aufenthalt für Drittstaatsangehörige'}
                />

            </div>
        </PageWrapper>
    )
};

export default PageAufenthalt;