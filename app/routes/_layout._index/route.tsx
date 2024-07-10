import ListBox, { ICustomList } from "~/common/components/ListBox";
import { useState } from "react";
import CalcBox from "~/common/components/CalcBox";
import { CONVERT_LIST } from "~/constants/convertList";

export default function Index() {
  const [category, setCategory] = useState<ICustomList>(CONVERT_LIST[0]);

  return (
    <section className="grid place-content-center w-full h-full">
      {/* content area */}
      <div className="my-auto p-4 w-[500px] h-[500px] rounded bg-white border-2 border-gray-50 shadow-md">
        <p className="font-bold text-[24px] mb-3">Total Convertor</p>
        <ListBox
          list={CONVERT_LIST}
          setSelectState={setCategory}
          selectState={category}
        />
        <CalcBox currentCategory={category} />
      </div>
    </section>
  );
}
