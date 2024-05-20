import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageMeldeservice = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title='Meldeservice'>
            <div className="flex flex-col items-start gap-2">
                <OnPageNavButton
                    text={'Anmelden eines Wohnsitzes'}
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/verwaltungundpolitik/meldeservice/anmeldeneineswohnsitzes')}
                />
            </div>
        </PageWrapper>
    )
}

export default PageMeldeservice;