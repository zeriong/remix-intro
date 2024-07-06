import { useUIStore } from "~/store/common";
import { Transition } from "@headlessui/react";

export default function Aside() {
  const { isOpenAside } = useUIStore();
  return (
    <Transition
      show={isOpenAside}
      enter="transition ease-out duration-75"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <aside className="fixed right-0 bottom-0  h-[calc(100%-86px)] p-3 transition-all">
        <ul className="h-full rounded-md w-[300px] p-5 shadow-lg border-4 border-gray-100">
          <li className="bg-brand-500 p-3 font-extrabold">아이템</li>
        </ul>
      </aside>
    </Transition>
  );
}
