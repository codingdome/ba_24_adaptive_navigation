import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";

const PageStadtplan = () => {
    const navigate = useNavigate();
    return (
        <PageWrapper title={'Stadtplan'}>
            <div className="flex flex-col gap-2 items-start">
                <OnPageNavButton
                    onClick={() => navigate('/stadtplan/karten')}
                    text={'Karten'}
                />
                <OnPageNavButton
                    onClick={() => navigate('/stadtplan/filter')}
                    text={'Filter'}
                />
            </div>
        </PageWrapper>

    )
}

export default PageStadtplan;