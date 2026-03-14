"use client";

import { useState } from "react";
import Image from "next/image";
import SoloRecommendation from "@/app/components/SoloRecommendation";
import DuoRecommendation from "@/app/components/DuoRecommendation";
import GroupRecommendation from "@/app/components/GroupRecommendation";

export default function MainContainer() {
  // 1인 / 2인 / 3인 이상을 구분하기 위한 상태
  const [type, setType] = useState("solo");

  const renderContent = (type) => {
    switch (type) {
      case "solo":
        return <SoloRecommendation />;
      case "duo":
        return <DuoRecommendation />;
      case "group":
        return <GroupRecommendation />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <header className="flex flex-col items-center mb-10">
        <Image
          src="/food-restaurant-svgrepo-com.svg"
          alt="food picture"
          width="100"
          height="100"
          className="mt-30 mb-10"
        />
        <p className="text-4xl font-black mb-5">오늘 뭐 먹지?</p>
        <p className="text-lg font-black text-gray-500">
          혼밥 / 소개팅 / 회식 / 술자리 {" "}
          {/* 모바일에서 줄바꿈 추가 위해 768px 이상에서는 br태그 숨김*/}
          <br className="md:hidden" />
          메뉴 고민은 이제 그만
        </p>
      </header>
      <main className="flex grow flex-col items-center">
        <div>
          <button
            className={"w-15 h-10 font-black border-2 rounded-3xl " + `${type === "solo" ? "bg-green-500" : ""}`}
            onClick={() => setType("solo")}
          >
            1인
          </button>
          <button
            className={"w-15 h-10 font-black border-2 rounded-3xl " + `${type === "duo" ? "bg-green-500" : ""}`}
            onClick={() => setType("duo")}
          >
            2인
          </button>
          <button
            className={"w-25 h-10 font-black border-2 rounded-3xl " + `${type === "group" ? "bg-green-500" : ""}`}
            onClick={() => setType("group")}
          >
            3인 이상
          </button>
        </div>
        {/* 탭에 따른 컴포넌트 조건부 렌더링 */}
        {renderContent(type)}
      </main>
      {/* Tip 적는 칸 */}
      <aside>

      </aside>
      <footer>
        <p className="text-sm text-gray-500 mt-10">© 2026 Kim Jeong Hun. All rights reserved.</p>
      </footer>
    </div>
  );
}
