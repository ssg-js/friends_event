/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import RankContent from "../components/RankContent";
import { TossWhiteBlue } from "../constants/colors";

export default function Rank() {
  const nav = useNavigate();
  return (
    <div
      css={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        leftChild={
          <Button
            content="〈"
            padding="1px 0px"
            color="white"
            fontSize={15}
            fontWeight={900}
            onClick={() => nav(-1)}
          />
        }
      />
      <RankContent />
      <Button
        content={"도전장 보내기"}
        height={42}
        backgroundColor={TossWhiteBlue}
        color="white"
        fontWeight={340}
        onClick={() => {}}
      />{" "}
    </div>
  );
}
