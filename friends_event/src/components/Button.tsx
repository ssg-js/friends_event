/** @jsxImportSource @emotion/react */
import type { MouseEventHandler } from "react";

interface Props {
  content: string;
  height?: number;
  width?: number;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  borderRadius?: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  content,
  height,
  width,
  backgroundColor = "transparent",
  color,
  fontSize,
  borderRadius = 14,
  onClick,
}: Props) {
  return (
    <button
      css={{
        width,
        height,
        backgroundColor,
        color,
        fontSize: `${fontSize}px`,
        border: "none",
        borderRadius,
      }}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
