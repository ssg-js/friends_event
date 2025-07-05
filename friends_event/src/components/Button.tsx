/** @jsxImportSource @emotion/react */
import type { MouseEventHandler } from "react";

interface Props {
  content: string;
  margin?: string;
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
  margin,
  height,
  width,
  padding,
  backgroundColor = "transparent",
  color,
  fontSize,
  fontWeight,
  borderRadius = 11,
  onClick,
}: Props) {
  return (
    <button
      css={{
        margin,
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
