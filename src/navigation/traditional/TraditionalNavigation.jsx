import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes.config';
import { Spin as Hamburger } from 'hamburger-react'
import Logo from '../../assets/logo.svg';

const TraditionalNavigation = ({ tradIsOpen, setTradIsOpen }) => {
    const navigate = useNavigate();
    const [expandedRoute, setExpandedRoute] = useState(null);

    const toggleRouteExpansion = (route) => {
        setExpandedRoute(expandedRoute === route ? null : route);
    };

    const navigateToSubroute = (mainRoute, subroute) => {
        navigate(`/${mainRoute}/${subroute}`);
        setTradIsOpen(false);
    };

    const renderSubroutes = (mainRouteKey, color) => {
        const subroutes = routes[mainRouteKey].sub;
        if (subroutes && expandedRoute === mainRouteKey) {
            return (
                <div className='flex flex-col gap-2 items-start'>
                    {
                        Object.entries(subroutes).map(([key, { label }]) => (
                            <button
                                key={key}
                                onClick={() => navigateToSubroute(mainRouteKey, key)}
                                className="pl-4 py-2 w-full"
                                style={{
                                    backgroundColor: color + '10',
                                }}
                            >
                                {label}
                            </button>
                        ))
                    }
                </div>
            )
        }
    };

    return (
        <div className={`${tradIsOpen ? 'translate-x-0' : 'translate-x-[100%]'} transition-all duration-700 fixed top-0 left-0 w-full h-[100dvh] bg-[#F5F5F5] overflow-y-scroll overflow-x-hidden text-black flex flex-col`}>

            <div className='flex flex-col gap-2 py-2'>
                <Hamburger toggled={tradIsOpen} toggle={setTradIsOpen} />

                {Object.entries(routes).map(([key, { label, color }]) => (
                    <div key={key} className='flex flex-col gap-2 w-full' >
                        <button
                            style={{
                                backgroundColor: color,
                            }}
                            className={`py-2 px-4 font-medium text-lg w-full`} onClick={() => toggleRouteExpansion(key)}>
                            {label}
                        </button>
                        {renderSubroutes(key, color)}
                    </div>
                ))}
            </div>

            <img className='object-contain object-center h-[60px] mt-8' src={Logo} alt="" />

            <button className='font-medium underline pt-4 mb-12' onClick={() => setTradIsOpen(false)}>Schließen</button>
        </div>
    );
};

export default TraditionalNavigation;
