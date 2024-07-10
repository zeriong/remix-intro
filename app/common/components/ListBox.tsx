import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Dispatch } from "react";

export interface ICustomList {
  value: number | string;
  name: string;
  list: { name: string }[];
}

interface ICustomListBox {
  list: ICustomList;
  setSelectState: Dispatch<ICustomList>;
  selectState: ICustomList;
}

const ListBox = ({ list, setSelectState, selectState }: ICustomListBox) => {
  return (
    <Listbox value={selectState} onChange={setSelectState}>
      {/* 리스트박스 버튼 */}
      <ListboxButton
        className={clsx(
          "relative block w-full rounded-lg bg-gray-50/80 py-1.5 pr-8 pl-3 text-left text-[18px] font-bold text-gray-600 border-2 border-gray-200",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      >
        {selectState.name}
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-default-black"
          aria-hidden="true"
        />
      </ListboxButton>

      {/* 리스트 */}
      <ListboxOptions
        modal={false} // 해당 props를 통해 html 통째로 overflow: hidden 속성을 막을 수 있음 default: true
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--button-width)] rounded-xl border border-white/5 bg-gray-100 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {/* Data map */}
        {list.map((item: ICustomList) => (
          <ListboxOption
            key={item.value}
            value={item}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/70"
          >
            <CheckIcon
              className={`size-4 fill-default-black ${
                selectState.value === item.value ? "visible" : "invisible"
              }`}
            />
            <div className="text-[17px] font-bold">{item.name}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default ListBox;
