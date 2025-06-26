/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { TossWhiteBlue } from "../constants/colors";
import Button from "./Button";
import Ranking from "./Ranking";
import Remain from "./Remain";
import InformationModal from "./InformationModal";

interface Props {
  content: string;
  eventId?: number;
  informationModalState: boolean;
}

export default function EventContent({
  content,
  eventId,
  informationModalState,
}: Props) {
  const nav = useNavigate();
  return (
    <div
      css={{
        position: "relative",
        padding: "10px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Ranking />
      <div
        css={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {content}
        <img src={""} />
      </div>

      <Remain />
      <Button
        content={"동그라미 그리기"}
        margin="0px 14px"
        height={42}
        backgroundColor={TossWhiteBlue}
        color="white"
        fontWeight={340}
        onClick={() => nav("/game")}
      />
      {informationModalState && <InformationModal />}
    </div>
  );
}
