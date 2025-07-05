/** @jsxImportSource @emotion/react */

interface Props {
  height?: number;
  width?: number;
}
export default function Space({ height, width }: Props) {
  return (
    <div
      css={{
        height,
        width,
      }}
    ></div>
  );
}
