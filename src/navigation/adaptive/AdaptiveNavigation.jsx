import React, { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react';
import PositionContainer from "./PositioningContainer";
import AdaptiveLinks from "./AdaptiveLinks";
import Logo from '../../assets/logo_white.svg';
import FixedLinks from "./FixedLinks";
import FeaturedLink from "./FeaturedLink";

const AdaptiveNavigation = ({
    adaptiveIsOpen,
    setAdaptiveIsOpen,
    tradIsOpen,
    setTradIsOpen,
}) => {

    const handleOtherSearchButton = () => {
        setAdaptiveIsOpen(false);
        setTradIsOpen(true);
    }

    const [position, setPosition] = useState('tr');

    const widthStyle = `${adaptiveIsOpen ? 'w-full' : 'w-[50px]'}`;

    const heightStyle = `${adaptiveIsOpen ? 'h-[600px]' : 'h-[50px]'}`;

    const alignmentStyle = `flex flex-col items-center justify-center`;

    const animationStyle = `transition-all duration-300`;

    const roundnessStyle = `${adaptiveIsOpen ? (position === 'tl' || position === 'tr' ? 'rounded-b-2xl' : position === 'bl' || position === 'br' ? 'rounded-t-2xl' : '') : 'rounded-full'}`;

    const defaultPosition = `${position === 'tl' ? 'left-2 top-2' : position === 'tr' ? 'right-2 top-2' : position === 'br' ? 'right-2 bottom-2' : position === 'bl' ? 'left-2 bottom-2' : ''}`;

    const openPosition = `${position === 'tl' ? 'left-0 top-0' : position === 'tr' ? 'right-0 top-0' : position === 'br' ? 'right-0 bottom-0' : position === 'bl' ? 'left-0 bottom-0' : ''}`;

    const positionStyle = `fixed ${adaptiveIsOpen ? openPosition : defaultPosition}`;

    const positionContainer = `${adaptiveIsOpen ? (position === 'tl' ? 'fixed top-0 right-0' : position === 'tr' ? 'fixed top-0 left-0' : position === 'br' ? 'fixed left-0 bottom-0' : position === 'bl' ? 'fixed right-0 bottom-0' : '') : ''}`;

    const burgerContainer = `${adaptiveIsOpen ? (position === 'tl' ? 'fixed top-0 left-0' : position === 'tr' ? 'fixed top-0 right-0' : position === 'br' ? 'fixed right-0 bottom-0' : position === 'bl' ? 'fixed left-0 bottom-0' : '') : ''}`;

    const logoAndFullNavContainer = `w-full flex justify-between items-center`;
    const logoContainer = `h-[50px] object-contain`;

    const adaptiveAndFixedContainer = `w-full flex flex-col gap-8`;

    const grandparent = `${widthStyle} ${animationStyle} ${heightStyle} ${alignmentStyle} ${roundnessStyle} ${positionStyle} bg-[#FF0000] text-white overflow-hidden`;

    const adaptivePadding = `${adaptiveIsOpen && ((position === 'tl' || position === 'tr') ? 'pt-20' : 'pb-20')}`;

    const parent = `${adaptiveIsOpen && 'w-full h-full flex flex-col relative overflow-x-scroll p-4 gap-8'} ${adaptivePadding}`;

    return (
        <div className={grandparent}>

            <div className={parent}>
                <div className={burgerContainer}>
                    <Hamburger size={25} toggled={adaptiveIsOpen} onToggle={setAdaptiveIsOpen} />
                </div>

                {adaptiveIsOpen && (
                    <div className={logoAndFullNavContainer}>
                        <img className={logoContainer} src={Logo} alt="Logo Wien" />
                    </div>
                )}

                {adaptiveIsOpen && (
                    <div className={positionContainer}>
                        <PositionContainer onChange={setPosition} setIsOpen={setAdaptiveIsOpen} />
                    </div>
                )}

                {adaptiveIsOpen && (
                    <div className={adaptiveAndFixedContainer}>
                        <FeaturedLink setAdaptiveIsOpen={setAdaptiveIsOpen} />
                        <FixedLinks setAdaptiveIsOpen={setAdaptiveIsOpen} />
                        <AdaptiveLinks setAdaptiveIsOpen={setAdaptiveIsOpen} />
                    </div>
                )}

                {adaptiveIsOpen && (
                    <button
                        onClick={handleOtherSearchButton}
                        className="py-3 px-4 w-full rounded-md bg-red-500">Ich suche etwas anderes
                    </button>
                )}

            </div>


        </div>
    )
}

export default AdaptiveNavigation;