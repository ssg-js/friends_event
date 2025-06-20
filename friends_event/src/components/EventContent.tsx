/** @jsxImportSource @emotion/react */

import Ranking from "./Ranking";
import Remain from "./Remain";

interface Props {
  content: string;
  eventId?: number;
}

export default function EventContent({ content, eventId }: Props) {
  return (
    <div
      css={{
        margin: "10px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Ranking />
      <div css={{ margin: "0 auto" }}>{content}</div>
      <img src={""} />
      <Remain />
    </div>
  );
}
