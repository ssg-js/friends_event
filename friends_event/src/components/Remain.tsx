/** @jsxImportSource @emotion/react */

import { TossDarkBlueFont, TossGrayFont } from "../constants/colors";
import QuestionImg from "./QuestionImg";

export default function Remain() {
  return (
    <div
      css={{
        margin: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "4px",
        color: TossGrayFont,
      }}
    >
      <div>도전 기회</div>
      <div css={{ color: TossDarkBlueFont }}>3번</div>
      <div>남음</div>
      <QuestionImg size={12} />
    </div>
  );
}
