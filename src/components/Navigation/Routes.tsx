import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IntroPage } from 'src/pages/IntroPage/IntroPage';
import { NotFoundPage } from 'src/pages/NotFoundPage/NotFoundPage';
import { PagesPage } from 'src/pages/PagesPage/PagesPage';
import { PricePlansPage } from 'src/pages/PricePlansPage/PricePlansPage';
import { ProductsPage } from 'src/pages/ProductsPage/ProductsPage';

export const routesArray = [
  { path: '/', name: 'Home', element: <IntroPage /> },
  { path: '/products', name: 'Products', element: <ProductsPage /> },
  { path: '/price-plans', name: 'Price Plans', element: <PricePlansPage /> },
  { path: '/pages', name: 'Pages', element: <PagesPage /> },
];

export const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      {routesArray.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

