/** @jsxImportSource @emotion/react */

interface Props {
  content: string;
  eventId?: number;
}

export default function Content({ content, eventId }: Props) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <div>{content}</div>
      <img />
    </div>
  );
}
