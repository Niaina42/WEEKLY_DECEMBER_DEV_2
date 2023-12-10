import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ProtectedRoute from "../services/pageGuard/ProtectedRoute";
import RedirectRoute from "../services/pageGuard/RedirectRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectRoute>
              <Login />
            </RedirectRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectRoute>
              <Register />
            </RedirectRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat/:userID/:targetID"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
