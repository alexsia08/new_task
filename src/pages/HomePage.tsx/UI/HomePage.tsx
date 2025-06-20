"use client";
import React from "react";
import { BrowserRouter } from "react-router";
import { CSSBoundingContainer } from "../../../shared/styles";
import { useTranslations } from "next-intl";
import { Typography } from "antd";
import { CSSTitle, CSSTextP } from "../UI/styles";

const { Title, Paragraph } = Typography;

export const HomePage: React.FC = () => {
  const tHomePage = useTranslations(`home-page`);

  return (
    <BrowserRouter basename="/new_task">
      <CSSBoundingContainer>
        <Title level={2} style={CSSTitle}>
          {tHomePage("title")}
        </Title>
        <Paragraph style={CSSTextP}>{tHomePage("text")}</Paragraph>
      </CSSBoundingContainer>
    </BrowserRouter>
  );
};
