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
}

interface ICustomListBox {
  list: ICustomList[];
  setSelectState: Dispatch<ICustomList>;
  selectState: ICustomList;
}

const ListBox = ({ list, setSelectState, selectState }: ICustomListBox) => {
  return (
    <Listbox value={selectState} onChange={setSelectState}>
      {/* 리스트박스 버튼 */}
      <ListboxButton
        className={clsx(
          "relative block w-full rounded-lg bg-brand-500 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      >
        {selectState.name}
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        />
      </ListboxButton>

      {/* 리스트 */}
      <ListboxOptions
        modal={false} // 해당 props를 통해 html 통째로 overflow: hidden 속성을 막을 수 있음 default: true
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--button-width)] rounded-xl border border-white/5 bg-brand-400 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {/* Data map */}
        {list.map((item: ICustomList) => (
          <ListboxOption
            key={item.value}
            value={item}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
          >
            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
            <div className="text-sm/6 text-white">{item.name}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default ListBox;
