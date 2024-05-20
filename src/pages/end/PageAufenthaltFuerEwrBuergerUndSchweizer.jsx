import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";
import data from "../../placeholder.data";

const PageAufenthaltFuerEwrBuergerUndSchweizer = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title={'Aufenthalt für EWR Bürger:innen und Schweizer'}>
            <div className="flex flex-col gap-2 items-start">
                <p>{data.aufenthaltewr.text}</p>
                <OnPageNavButton
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/aufenthalt/aufenthaltfuerewrbuergerundschweizer/anmeldebescheinigungfuerewrbuergerundschweizer')}
                    text={'Anmeldebescheinigung für EWR-Bürger:innen und Schweizer:innen'}
                />
            </div>
        </PageWrapper>
    )
}

export default PageAufenthaltFuerEwrBuergerUndSchweizer;