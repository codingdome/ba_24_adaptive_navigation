import React from "react";

import { useNavigate } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";
import data from "../../placeholder.data";

const PageKulturUndFreizeit = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper title='Kultur und Freizeit'>
            <div className="flex flex-col gap-2 items-start">

                <img src={data.kulturundfreizeit.img} alt="" />

                <OnPageNavButton
                    text={'Kultur'}
                    onClick={() => navigate('/themen/kulturundfreizeit/kultur')}
                />
                <OnPageNavButton
                    text={'Freizeit'}
                    onClick={() => navigate('/themen/kulturundfreizeit/freizeit')}
                />
            </div>
        </PageWrapper>

    )
}

export default PageKulturUndFreizeit;