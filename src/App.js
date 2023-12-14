import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const Index = lazy(() => import("./index/index.jsx"));
export default function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate to="/index" />}></Route>
          <Route path="/index" element={<Index />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
