/** @jsxImportSource @emotion/react */

import {
  TossDarkBlueFont,
  TossGray,
  TossGrayFont,
  TossWhiteFont,
  TossWhiteBlue,
} from "../constants/colors";
import Button from "./Button";

interface Props {
  rank: number;
  name: string;
  score: number;
  isMe: boolean;
}

export default function RankItem({ rank, name, score, isMe }: Props) {
  return (
    <div
      css={{
        height: "30px",
        padding: "10px 0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        css={{
          width: "40px",
          color: TossDarkBlueFont,
          fontWeight: 600,
        }}
      >
        {rank}
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          flex: 1,
        }}
      >
        <div
          css={{
            display: "flex",
            gap: "6px",
            alignItems: "center",
          }}
        >
          <div css={{ fontWeight: 530 }}>{name}</div>
          {isMe && <Tag />}
        </div>
        <div
          css={{
            color: TossGrayFont,
            fontSize: "11px",
          }}
        >
          {`${score}점`}
        </div>
      </div>
      {!isMe && (
        <Button
          content="자랑하기"
          height={25}
          width={50}
          color={TossWhiteFont}
          fontSize={10}
          fontWeight={420}
          backgroundColor={TossWhiteBlue}
          borderRadius={6}
          onClick={() => {}}
        />
      )}
    </div>
  );
}

// 나를 표기
function Tag() {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "17px",
        width: "20px",
        fontSize: "10px",
        backgroundColor: TossGray,
        borderRadius: "7px",
      }}
    >
      <div
        css={{
          fontSize: "9px",
        }}
      >
        나
      </div>
    </div>
  );
}
