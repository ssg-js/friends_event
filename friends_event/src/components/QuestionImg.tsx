/** @jsxImportSource @emotion/react */

import img from "../assets/gray_question_circle.png";

interface Props {
  size: number;
}

export default function QuestionImg({ size }: Props) {
  return (
    <img
      css={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      src={img}
      alt=""
    />
  );
}
