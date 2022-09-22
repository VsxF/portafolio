import { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Field from "./field";

const Information: FC = () => {
  const [t] = useTranslation('global');
  const informatinoArray: [string, [string, string]] = t('postPage.information', { returnObjects: true });

  return (
    <InfoContainer>
      {
        Object.entries(informatinoArray).map(([k, v], key) => 
          <Field field={v[0]} data={v[1]} key={key} /> ) 
      }
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
`

export default Information;