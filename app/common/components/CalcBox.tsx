import ListBox, { ICustomList } from "~/common/components/ListBox";
import { useEffect, useState } from "react";

const CalcBox = ({ currentCategory }: { currentCategory: ICustomList }) => {
  // Deep Copy
  const _calcCategoryList = JSON.parse(JSON.stringify(currentCategory));

  // origin && copy
  const [originList, setOriginList] = useState(CONVERT_LIST[0]);
  const [copyList, setCopyList] = useState(_calcCategoryList.list[1]);

  // calc category tween change effect
  useEffect(() => {
    if (originList.value === copyList.value) {
      // 첫번쨰인 경우 2번째로 단위로 변경, 아닌경우는 일괄 1번째 단위로
      if (originList.value === 1) setCopyList(calcCategoryList[1]);
      else setCopyList(calcCategoryList[0]);
    }
  }, [originList]);
  useEffect(() => {
    if (originList.value === copyList.value) {
      // 첫번쨰인 경우 2번째로 단위로 변경, 아닌경우는 일괄 1번째 단위로
      if (copyList.value === 1) setOriginList(calcCategoryList[1]);
      else setOriginList(calcCategoryList[0]);
    }
  }, [copyList]);

  // todo: 추가적으로 계산식에 대한 설계 필요 ***

  return (
    <section className="grid place-content-center w-full h-full">
      {/* content area */}
      <div className="my-auto p-4 w-[500px] h-[500px] rounded bg-white border-2 border-gray-50 shadow-md">
        <div className="flex gap-5">
          <ListBox
            list={currentCategory.list}
            setSelectState={setOriginList}
            selectState={originList}
          />
          <p className="text-[30px]">=</p>
          <ListBox
            list={[
              { value: 1, name: "방 크기" },
              { value: 2, name: "길이" },
              { value: 3, name: "데이터 크기" },
            ]}
            setSelectState={setCopyList}
            selectState={copyList}
          />
        </div>
      </div>
    </section>
  );
};

export default CalcBox;
