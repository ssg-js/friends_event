/** @jsxImportSource @emotion/react */
import type { JSX } from "@emotion/react/jsx-runtime";

interface Props {
  title?: string;
  leftChild?: JSX.Element;
  rightChild?: JSX.Element;
}

export default function Header({ title, leftChild, rightChild }: Props) {
  return (
    <div
      css={{
        padding: "0px 14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 30,
      }}
    >
      <div>{leftChild}</div>
      <div>{title}</div>
      <div>{rightChild}</div>
    </div>
  );
}
