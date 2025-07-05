/** @jsxImportSource @emotion/react */

import { TossGrayFont } from "../constants/colors";

interface InformationItemProps {
  content: string;
  width: number;
}

export default function InformationItem({
  content,
  width = 0,
}: InformationItemProps) {
  return (
    <div
      css={{
        paddingLeft: width,
        display: "flex",
        gap: "7px",
        color: TossGrayFont,
        fontSize: "9.5px",
        fontWeight: "310",
      }}
    >
      <div>•</div>
      <div>{content}</div>
    </div>
  );
}
