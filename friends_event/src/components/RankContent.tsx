/** @jsxImportSource @emotion/react */
import { TossGrayFont, TossWhiteBlue } from "../constants/colors";
import Button from "./Button";
import RankItem from "./RankItem";

const data = [
  {
    id: 1,
    name: "박*성",
    score: 96,
  },
  {
    id: 2,
    name: "서*혁",
    score: 86,
  },
  {
    id: 2,
    name: "김*희",
    score: 61,
  },
];

export default function RankContent() {
  const clientIdx = 1;
  return (
    <div
      css={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        css={{
          margin: "14px 18px",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        동그라미 장인 랭킹
      </div>
      <div
        css={{
          flex: 1,
          margin: "0px 14px",
          padding: "9px 5px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {data.map((item, idx) => {
          return (
            <RankItem
              rank={idx + 1}
              name={item.name}
              score={item.score}
              isMe={idx + 1 === Number(clientIdx)}
            />
          );
        })}
      </div>
      <p css={{ color: TossGrayFont, margin: "22px auto" }}>
        아직 안 그려본 친구에게
      </p>
      <Button
        content={"도전장 보내기"}
        margin="0px 14px"
        height={42}
        backgroundColor={TossWhiteBlue}
        color="white"
        fontWeight={340}
        onClick={() => {}}
      />{" "}
    </div>
  );
}
