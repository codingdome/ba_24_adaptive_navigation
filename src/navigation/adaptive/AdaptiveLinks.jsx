import React from "react";
import settings from "../../navigation.config";
import routes from "../../routes.config";
import { useNavigate } from "react-router-dom";

const AdaptiveLinks = ({
    setAdaptiveIsOpen
}) => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setAdaptiveIsOpen(false);
        navigate(path)
    }

    const findLabelForPath = (path) => {
        const traverseRoutes = (currentRoutes, segments) => {
            if (segments.length === 0) {
                return currentRoutes.label;
            }

            const currentSegment = segments[0];
            const remainingSegments = segments.slice(1);

            if (currentRoutes.sub && currentRoutes.sub[currentSegment]) {
                return traverseRoutes(currentRoutes.sub[currentSegment], remainingSegments);
            }
            return 'Unknown Label';
        };

        const pathSegments = path.startsWith('/') ? path.slice(1).split('/') : path.split('/');

        const topLevelSegment = pathSegments[0];
        const remainingSegments = pathSegments.slice(1);

        if (routes[topLevelSegment]) {
            return traverseRoutes(routes[topLevelSegment], remainingSegments);
        }

        return 'Unknown Label';
    };

    return (
        <div className="flex flex-col gap-4 items-start">

            <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-semibold opacity-70">Angepasste Vorschläge</p>
                {settings.routes.adaptive.map((path, index) => (
                    <button className="underline text-start" key={index} onClick={() => handleNavigate(path)}>{findLabelForPath(path)}</button>
                ))}
            </div>
        </div>

    );
};

export default AdaptiveLinks;
