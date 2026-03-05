"use client";

import { useState } from 'react';
import SoloRecommendation from './components/SoloRecommendation';
import GroupRecommendation from './components/GroupRecommendation';

const MainContainer = () => {
  const [type, setType] = useState('solo');

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <header>
        <h1 className="text-4xl">오늘 뭐 먹지?</h1>
        <div>
          <button 
            className={type === 'solo' ? 'active' : ''} 
            onClick={() => setType('solo')}
          >
            혼밥
          </button>
          <button 
            className={type === 'group' ? 'active' : ''} 
            onClick={() => setType('group')}
          >
            단체
          </button>
        </div>
      </header>
      {/* 탭에 따른 컴포넌트 조건부 렌더링 */}
      <main>
        {type === 'solo' ? <SoloRecommendation /> : <GroupRecommendation />}
      </main>
    </div>
  );
};

export default MainContainer;