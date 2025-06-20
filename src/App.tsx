"use client";
import React from "react";
import { BrowserRouter } from "react-router";
import { CSSBoundingContainer } from "./shared/styles";
// import { useTranslations } from "next-intl";
import { Typography } from "antd";
import { CSSTitle, CSSTextP } from "./styles";

const { Title, Paragraph } = Typography;

export const App: React.FC = () => {
  // const tHomePage = useTranslations(`home-page`);

  return (
    <BrowserRouter basename="/new_task">
      <CSSBoundingContainer>
        <Title level={2} style={CSSTitle}>
          Timed Color Cards
        </Title>
        <Paragraph style={CSSTextP}>
          Для начала задайте количество карточек и интервал. Карточки
          генерируются автоматически. Если клинуть на карточку, то таймер
          обновится, иначе она исчезнет когда время истечёт
        </Paragraph>
      </CSSBoundingContainer>
    </BrowserRouter>
  );
};
