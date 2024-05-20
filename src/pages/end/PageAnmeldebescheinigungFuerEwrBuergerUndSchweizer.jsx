import React from "react";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

import { useNavigate } from "react-router-dom";

const PageAnmeldebescheinigungFuerEwrBuergerUndSchweizer = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title={'Anmeldebescheinigung für EWR-Bürger:innen und Schweizer:innen'}>
            <OnPageNavButton text={'Fomular'} onClick={() => navigate('/virtuellesamt/persoenlichedokumente/aufenthalt/aufenthaltfuerewrbuergerundschweizer/anmeldebescheinigungfuerewrbuergerundschweizer/formular')} />

        </PageWrapper>
    )
}

export default PageAnmeldebescheinigungFuerEwrBuergerUndSchweizer;