import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import TraditionalNavigation from './navigation/traditional/TraditionalNavigation';
import routes from './routes.config';
import PageNotFound from './pages/end/PageNotFound';
import PageHome from './pages/main/PageHome';
import BreadcrumbsNavigation from './navigation/breadcrumb/BreadcrumbNavigation';
import AdaptiveNavigation from './navigation/adaptive/AdaptiveNavigation';
import settings from './navigation.config';
import Navbar from './navigation/Navbar';


const generateFlatRoutes = (routeConfig, parentPath = '') => {
  let routes = [];
  Object.keys(routeConfig).forEach(key => {
    const route = routeConfig[key];
    const path = `${parentPath}/${key}`;
    if (route.component) {
      routes.push({ path, component: route.component });
    }
    if (route.sub) {
      routes = routes.concat(generateFlatRoutes(route.sub, path));
    }
  });
  return routes;
};


function App() {

  const [tradIsOpen, setTradIsOpen] = useState(false);
  const [adaptiveIsOpen, setAdaptiveIsOpen] = useState(false);

  const flatRoutes = generateFlatRoutes(routes);

  return (
    <div className="bg-[#f5f5f5]">

      <Router>

        <Navbar tradIsOpen={tradIsOpen} setTradIsOpen={setTradIsOpen} mode={settings.mode} />

        <TraditionalNavigation tradIsOpen={tradIsOpen} setTradIsOpen={setTradIsOpen} />
        {settings.mode === 'adaptive' && (
          <AdaptiveNavigation
            adaptiveIsOpen={adaptiveIsOpen}
            setAdaptiveIsOpen={setAdaptiveIsOpen}
            tradIsOpen={tradIsOpen}
            setTradIsOpen={setTradIsOpen}
          />)}

        <BreadcrumbsNavigation />

        <Routes>
          <Route path="/" element={<PageHome />} />
          {flatRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          {/* FALLBACK ROUTE */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
