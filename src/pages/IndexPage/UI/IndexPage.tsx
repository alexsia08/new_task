"use client";
import React from "react";
import { CSSBoundingContainer } from "../../../shared/styles";
import { useIntl } from "react-intl";
import { Typography } from "antd";
import { CSSTitle, CSSTextP } from "./styles";
import { CardGenerator } from "../../../widgets/CardGenerator";

const { Title, Paragraph } = Typography;

export const IndexPage: React.FC = () => {
  const intl = useIntl();
  return (
    <CSSBoundingContainer>
      <Title level={2} style={CSSTitle}>
        {`${intl.messages["title"]}`}
      </Title>
      <Paragraph style={CSSTextP}>{`${intl.messages["text"]}`}</Paragraph>
      <CardGenerator />
    </CSSBoundingContainer>
  );
};
