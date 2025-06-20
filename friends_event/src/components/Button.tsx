/** @jsxImportSource @emotion/react */
import type { MouseEventHandler } from "react";

interface Props {
  content: string;
  height?: number;
  width?: number;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  borderRadius?: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  content,
  height,
  width,
  padding,
  backgroundColor = "transparent",
  color,
  fontSize,
  fontWeight,
  borderRadius = 14,
  onClick,
}: Props) {
  return (
    <button
      css={{
        width,
        height,
        padding,
        backgroundColor,
        color,
        fontSize: `${fontSize}px`,
        fontWeight,
        border: "none",
        borderRadius,
      }}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
