import ListBox, { ICustomList } from "~/common/components/ListBox";
import { useState } from "react";

export default function Index() {
  const [selectList, setSelectList] = useState<ICustomList>({
    value: 1,
    name: "Tom Cook",
  });
  return (
    <div className="h-full">
      리스트박스...
      <ListBox
        list={[
          { value: 1, name: "Tom Cook" },
          { value: 2, name: "Wade Cooper" },
          { value: 3, name: "Tanya Fox" },
          { value: 4, name: "Arlene Mccoy" },
          { value: 5, name: "Devon Webb" },
        ]}
        setSelectState={setSelectList}
        selectState={selectList}
      />
    </div>
  );
}
