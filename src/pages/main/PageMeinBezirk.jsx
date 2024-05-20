import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageMeinBezirk = () => {
    const navigate = useNavigate();
    return (
        <PageWrapper title={'Mein Bezirk'}>
            <div className="flex flex-col gap-2 items-start">
                <OnPageNavButton
                    text={'1010'}
                    onClick={() => navigate('/meinbezirk/erster')}
                />
                <OnPageNavButton
                    text={'1020'}
                    onClick={() => navigate('/meinbezirk/zweiter')}
                />
                <OnPageNavButton
                    text={'1030'}
                    onClick={() => navigate('/meinbezirk/dritter')}
                />
                ...
            </div>
        </PageWrapper>
    )
}

export default PageMeinBezirk;