/** @jsxImportSource @emotion/react */

import type { JSX } from "@emotion/react/jsx-runtime";
import { TossDarkGray, TossSemiWhiteFont } from "../constants/colors";
import InformationItem from "./InformatinoItem";

export default function InformationModal() {
  return (
    <div
      css={{
        position: "absolute",
        left: "0px",

        height: "100%",
        width: "100%",

        backgroundColor: "rgb(0, 0, 0, 0.5)",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "7px",
          margin: "7px",
          padding: "17px 17px",
          backgroundColor: TossDarkGray,
          color: TossSemiWhiteFont,
        }}
      >
        <p>안내</p>
        {renderInformationItems(0, informationData)}
      </div>
    </div>
  );
}

function renderInformationItems(
  nodeIndex: number,
  data: { [key: number]: InfoItem },
  depth: number = 0
): JSX.Element[] {
  if (nodeIndex === 0) {
    return informationData[0].children.flatMap((childIdx) =>
      renderInformationItems(childIdx, informationData, 0)
    );
  }
  const node = data[nodeIndex];
  const baseTabWidth = 17;
  const width = baseTabWidth * depth;
  console.log(nodeIndex, width);

  return [
    <InformationItem key={nodeIndex} content={node.content} width={width} />,
    ...node.children.flatMap((index) =>
      renderInformationItems(index, data, depth + 1)
    ),
  ];
}

export interface InfoItem {
  content: string;
  children: number[];
}

const informationData: { [key: number]: InfoItem } = {
  0: {
    content: "",
    children: [1, 2, 7, 10, 11],
  },
  1: {
    content: "친구들에게 '동그라미 그리기' 링크와 내 점수를 보낼 수 있어요",
    children: [],
  },
  2: {
    content:
      "초대한 사람이 보낸 링크를 통해 초대 받은 사람이 접속하면, 초대한 사람과 초대받은 사람 모두 도전기호를 3회씩 받아요.",
    children: [3, 4, 5, 6],
  },
  3: {
    content: "한 사람은 한 번만 초대할 수 있어요.",
    children: [],
  },
  4: {
    content:
      "이미 내가 초대한 사람에게 다시 링크를 공유해도 새로운 도전 기회가 생기지 않아요.",
    children: [],
  },
  5: {
    content:
      "링크를 공유하는 경우, 링크 받는 친구(또는 지인)의 사전 동의가 필요해요. 동의 없이 이벤트 공유를 통해 불이익이 생긴 경우, 링크 공유에 따른 기회가 취소될 수 있어요.",
    children: [],
  },
  6: {
    content:
      "도전 기회는 한 번에 최대 3회까지 받을 수 있어요. 현재 보유 중인 도전 기회가 3회 이상일 경우, 새로운 친구를 초대하거나 초대받아도 추가 기회가 생기지 않아요.",
    children: [],
  },
  7: {
    content:
      "초대받은 사람이 링크를 열어보면 초대한 사람에게 앱 푸시 메시지를 통해 알려드려요.",
    children: [8, 9],
  },
  8: {
    content:
      "초대한 사람이 확인하는 앱 푸시 메시지에는 초대받은 사람의 이름이 마스킹되어 표시돼요.",
    children: [],
  },
  9: {
    content:
      "마스킹*: 이름의 일부를 가리는 것으로, 김토스 님의 경우 김*스로 표시돼요.",
    children: [],
  },
  10: {
    content:
      "본 이벤트는 회사의 사정에 따라 사전 공지 없이 정책 및 내용이 변경되거나 종료될 수 있어요.",
    children: [],
  },
  11: {
    content:
      "부적절한 방법으로 이벤트에 참여했다고 회사가 판단하는 경우, 해당 회원의 이벤트 참여는 영구적으로 제한될 수 있어요.",
    children: [],
  },
};
