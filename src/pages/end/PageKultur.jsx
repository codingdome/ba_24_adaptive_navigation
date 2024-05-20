import React from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import OnPageNavButton from "../../navigation/OnPageNavButton";
import data from "../../placeholder.data";

const PageKultur = () => {

    const navigate = useNavigate();
    return (
        <PageWrapper title='Kultur'>
            <div className="flex flex-col items-start gap-2">
                <img src={data.kultur.img} alt="" />
                <OnPageNavButton
                    text={'Film & Kino'}
                    onClick={() => navigate('/themen/kulturundfreizeit/kultur/filmundkino')}
                />
                <OnPageNavButton
                    text={'Kulturabteilung'}
                    onClick={() => navigate('/themen/kulturundfreizeit/kultur/kulturabteilung')}
                />
                <OnPageNavButton
                    text={'Literatug'}
                    onClick={() => navigate('/themen/kulturundfreizeit/kultur/literatur')}
                />
                <OnPageNavButton
                    text={'Museen und Sammlungen'}
                    onClick={() => navigate('/themen/kulturundfreizeit/kultur/museenundsammlungen')}
                />
                <OnPageNavButton
                    text={'Musik, Bühne, Tanz'}
                    onClick={() => navigate('/themen/kulturundfreizeit/kultur/musikbuehnetanz')}
                />
                <OnPageNavButton
                    text={'Religion und Friedhöfe'}
                    onClick={() => navigate('/themen/kulturundfreizeit/kultur/religionundfriedhoefe')}
                />
            </div>
        </PageWrapper>
    )
};

export default PageKultur;