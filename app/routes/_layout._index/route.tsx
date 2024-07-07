import ListBox, { ICustomList } from "~/common/components/ListBox";
import { useState } from "react";
import CalcBox from "~/common/components/CalcBox";

export default function Index() {
  const [category, setCategory] = useState<ICustomList>({
    value: 1,
    name: "Room Size",
  });

  return (
    <div className="m-auto bg-brand-400 p-4 w-[500px]">
      리스트박스...
      <ListBox
        list={[
          { value: 1, name: "Room Size" },
          { value: 2, name: "Length" },
          { value: 3, name: "Data" },
        ]}
        setSelectState={setCategory}
        selectState={category}
      />
      <CalcBox />
    </div>
  );
}
