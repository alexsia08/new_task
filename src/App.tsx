"use client";
import React from "react";
import { BrowserRouter } from "react-router";
import { IntlProvider } from "react-intl";
import { IndexPage } from "./pages/IndexPage";
import ruMessages from "./shared/localization/messages/ru.json";

export const App: React.FC = () => {
  return (
    <BrowserRouter basename="/new_task">
      <IntlProvider locale="ru" messages={ruMessages}>
        <IndexPage />
      </IntlProvider>
    </BrowserRouter>
  );
};
