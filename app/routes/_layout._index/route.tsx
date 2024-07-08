import ListBox, { ICustomList } from "~/common/components/ListBox";
import { useState } from "react";
import CalcBox from "~/common/components/CalcBox";

export default function Index() {
  const [category, setCategory] = useState<ICustomList>({
    value: 1,
    name: "Room Size",
  });

  return (
    <section className="grid place-content-center w-full h-full">
      {/* content area */}
      <div className="my-auto p-4 w-[500px] h-[500px] rounded bg-white border-2 border-gray-50 shadow-md">
        <p className="font-bold text-[24px] mb-3">Total Convertor</p>
        <ListBox
          list={[
            { value: 1, name: "방 크기" },
            { value: 2, name: "길이" },
            { value: 3, name: "데이터 크기" },
          ]}
          setSelectState={setCategory}
          selectState={category}
        />
        <CalcBox />
      </div>
    </section>
  );
}
