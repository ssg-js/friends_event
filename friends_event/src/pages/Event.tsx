/** @jsxImportSource @emotion/react */

import Header from "../components/Header";
import Button from "../components/Button";
import Content from "../components/Content";
import Space from "../components/Space";

import { useNavigate } from "react-router-dom";
import { TossWhiteBlue } from "../constants/colors";

function Event() {
  const nav = useNavigate();

  return (
    <div
      css={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Space height={40} />
      <Header
        title=""
        leftChild={
          <Button
            content="〈"
            padding="1px 0px"
            color="white"
            fontSize={15}
            onClick={() => {}}
          />
        }
        rightChild={
          <Button
            content="안내"
            padding="1px 0px"
            color="white"
            fontSize={12}
            onClick={() => nav("/explain")}
          />
        }
      />
      <Content content="지금부터 게임 시작" />

      <Button
        content={"동그라미 그리기"}
        height={45}
        backgroundColor={TossWhiteBlue}
        color="white"
        onClick={() => nav("/game")}
      />
      <Space height={10} />
    </div>
  );
}

export default Event;
