import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "../components/Chat/Chat";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
              <Chat />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;