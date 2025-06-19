/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { TossDarkGray, TossGray, TossWhiteFont } from "../constants/colors";

interface Props {}

export default function Ranking({}: Props) {
  const nav = useNavigate();
  return (
    <div
      css={{
        height: "37px",
        padding: "0 14px",
        display: "flex",
        gap: "7px",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "11px",
        backgroundColor: TossDarkGray,
        borderRadius: "20px",
      }}
      onClick={() => nav("/rank")}
    >
      <div>🏆</div>
      <div css={{ flex: 1, color: TossWhiteFont }}>친구들 중 1등이에요</div>
      <div
        css={{
          padding: "3px 7px",
          fontSize: "9px",
          fontWeight: 500,
          backgroundColor: TossGray,
          borderRadius: "7px",
        }}
      >
        랭킹 확인하기
      </div>
    </div>
  );
}
