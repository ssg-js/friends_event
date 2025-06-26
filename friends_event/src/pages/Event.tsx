/** @jsxImportSource @emotion/react */

import Button from "../components/Button";
import EventContent from "../components/EventContent";
import { useNavigate } from "react-router-dom";
import { TossWhiteBlue } from "../constants/colors";
import Header from "../components/Header";
import { useState } from "react";
import InformationModal from "../components/InformationModal";

function Event() {
  const nav = useNavigate();
  const [informationModalState, setInformationModalState] = useState(false);

  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header
        title=""
        leftChild={
          <Button
            content="〈"
            padding="1px 0px"
            color="white"
            fontSize={15}
            fontWeight={900}
            onClick={() => {}}
          />
        }
        rightChild={
          <Button
            content="안내"
            padding="1px 0px"
            color="white"
            fontSize={12}
            onClick={() => setInformationModalState(true)}
          />
        }
      />
      <EventContent
        content="지금부터 게임 시작"
        informationModalState={informationModalState}
      />
    </div>
  );
}

export default Event;
