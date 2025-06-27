/** @jsxImportSource @emotion/react */

import { TossGray } from "../constants/colors";

interface ModalHandleProps {
  height?: number;
}

export default function ModalHandle({ height = 13 }: ModalHandleProps) {
  return (
    <div
      css={{
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <div
        css={{
          height: 3,
          width: 35,
          borderRadius: 3,
          backgroundColor: TossGray,
        }}
      ></div>
    </div>
  );
}
