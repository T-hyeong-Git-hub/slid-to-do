'use client';

import {
  Flag,
  House,
  Menu,
  Plus,
  PanelLeftOpen,
  PanelLeftClose,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

function User() {
  return (
    <div className="flex gap-6 px-4 pb-6 pt-3 border-b border-slate-200 md:px-6 md:flex-col">
      <div className="flex gap-2">
        <div className="relative w-8 h-8 md:w-16 md:h-16">
          <Image
            src="/images/user.svg"
            alt="프로필이미지"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-fit w-full flex justify-between md:flex-col md:gap-2 md:items-start items-center">
          <div className="flex flex-col">
            <p className="text-xs font-semibold md:text-sm">홍길동</p>
            <p className="text-xs font-medium md:text-sm">chedacheese@slid.kr</p>
          </div>
          <button className="text-sm font-medium text-slate-400 md:text-xs font-normal">
            로그아웃
          </button>
        </div>
      </div>
      <div className="hidden md:block ">
        <AddTodoButton />
      </div>
    </div>
  );
}

function AddTodoButton() {
  return (
    <button className="flex gap-0.5 items-center justify-center bg-[#3B82F6] rounded-xl w-21 md:w-full h-9 md:h-12">
      <Plus className="w-4 h-4 text-white" />
      <p className="text-sm font-semibold text-white">새 할 일</p>
    </button>
  );
}

function AddGoalButton() {
  return (
    <button className="flex gap-0.5 items-center justify-center border border-[#3B82F6] rounded-xl w-21 md:w-full h-9 md:h-12">
      <Plus className="w-4 h-4 text-[#3B82F6]" />
      <p className="text-sm font-semibold text-[#3B82F6]">새 목표</p>
    </button>
  );
}

function DashboardPart() {
  return (
    <div className="flex justify-between pl-4 pr-5 py-3 border-b border-slate-200">
      <div className="flex gap-2 items-center">
        <House className="size-3.5 fill-black" />
        <p className="text-lg font-medium">대시보드</p>
      </div>
      <div className="block md:hidden">
        <AddTodoButton />
      </div>
    </div>
  );
}

function GoalPart() {
  return (
    <div className="flex justify-between px-5 pt-3">
      <div className="flex gap-2 items-center">
        <Flag className="size-4 fill-black" />
        <p className="text-lg font-medium">목표</p>
      </div>
      <div className="block md:hidden">
        <AddGoalButton />
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* 모바일 헤더 */}
      <div
        className={`md:hidden h-12 w-full bg-white border-b border-slate-200 px-4 flex items-center ${
          isOpen && 'border-none'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`transition-colors text-base font-semibold flex gap-4 items-center ${
            isOpen && 'hidden'
          }`}
        >
          <Menu className="size-4 text-gray-500 hover:bg-slate-100" />
          대시보드
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className={`${isOpen ? 'block' : 'hidden'}`}
        >
          <Image src="/images/logo.svg" alt="로고" width={106} height={35} />
        </button>
      </div>

      {/* 데스크탑 사이드바 */}
      <div
        className={`hidden md:flex flex-col h-screen bg-white border-r border-slate-200 transition-all duration-300 ${
          isOpen ? 'w-70' : 'w-16'
        }`}
      >
        {/* 헤더 부분 */}
        <div
          className={`flex items-center py-4 ${isOpen ? 'justify-between px-4' : 'justify-center'}`}
        >
          <Image
            src="/images/dashboard-logo.svg"
            alt="대시보드로고"
            width={32}
            height={32}
          />
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <PanelLeftClose className="w-5 h-5 text-slate-400" />
            </button>
          )}
        </div>

        {/* 접힌 상태일 때 펼치기 버튼 */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 mx-auto hover:bg-slate-100 rounded-lg transition-colors"
          >
            <PanelLeftOpen className="w-5 h-5 text-slate-400" />
          </button>
        )}

        {/* 펼쳐졌을 때만 내용 표시 */}
        {isOpen && (
          <>
            <User />
            <DashboardPart />
            <GoalPart />
          </>
        )}
      </div>

      {/* 모바일 사이드바 내용물 */}
      <div
        className={`w-full h-full bg-white z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <User />
        <DashboardPart />
        <GoalPart />
      </div>
    </div>
  );
}
