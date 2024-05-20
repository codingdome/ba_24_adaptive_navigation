import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '../../routes.config';
import ChevronRight from '../../assets/icon/chevron-right.svg';

const BreadcrumbsNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const pathSegments = location.pathname.split('/').filter(Boolean);

    const findRoutePart = (pathSegment, routeObj) => {
        for (const key in routeObj) {
            if (routeObj.hasOwnProperty(key) && key === pathSegment) {
                return routeObj[key];
            }
            if (routeObj[key].sub) {
                const found = findRoutePart(pathSegment, routeObj[key].sub);
                if (found) return found;
            }
        }
        return null;
    };

    const buildCrumbs = (segments) => {
        let currentPath = '';
        return segments.map((segment) => {
            currentPath += `/${segment}`;
            const routePart = findRoutePart(segment, routes);
            const label = routePart ? routePart.label : segment;
            return { path: currentPath, label };
        });
    };

    const crumbs = buildCrumbs(pathSegments);

    if (crumbs.length < 1) {
        return null;
    }

    return (
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0 px-2 text-sm font-medium py-2 bg-[#FF0000] text-white">
            {crumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                    <span className="crumb" onClick={() => navigate(crumb.path)} style={{ cursor: 'pointer' }}>
                        {crumb.label}
                    </span>
                    {index < crumbs.length - 1 && <img className='h-[13px] object-contain' src={ChevronRight} alt="" />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default BreadcrumbsNavigation;
