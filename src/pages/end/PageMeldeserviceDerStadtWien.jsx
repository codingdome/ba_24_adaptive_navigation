import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageMeldeserviceDerStadtWien = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title='Meldeservice der Stadt Wien'>
            <div className="flex flex-col items-start">
                <OnPageNavButton
                    text={'Online Termin Reservierung'}
                    onClick={() => navigate('/virtuellesamt/persoenlichedokumente/verwaltungundpolitik/meldeservice/anmeldeneineswohnsitzes/meldeservicederstadtwien/onlineterminreservierung')}
                />
            </div>
        </PageWrapper>

    )
}

export default PageMeldeserviceDerStadtWien;