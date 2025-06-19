/** @jsxImportSource @emotion/react */

interface Props {
  height: number;
}
export default function Space({ height }: Props) {
  return (
    <div
      css={{
        height,
      }}
    ></div>
  );
}
