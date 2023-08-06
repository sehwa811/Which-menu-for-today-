import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";

import { ctrOptions, spcOptions, ndlOptions } from "../datas/options";
import { selectOptions } from "../store/selected/selector";
import { sendToReducer } from "../store/selected/action";



export default function SelectBox() {
  const dispatch = useDispatch<any>();
  const gotoNext = useNavigate();
  if (!dispatch) throw new Error("dispatch is null");

  const { ctr } = useSelector(selectOptions);


  const OnClickHandler = async () => {
    gotoNext("/menu");
  };

  return (
    <div className="">
      <label>어느 나라 음식이 좋을까요?</label>
      <Select
        options={ctrOptions}
        onChange={(e: any) => dispatch(sendToReducer(e))}
        className=""
        theme={(theme) => ({...theme, colors: {...theme.colors, primary: "skyblue", primary25: 'skyblue'} })}
      ></Select>
      {ctr === "그 외" ? null : (
        <>
          <label>면이랑 밥 중에선?</label>
          <Select
            options={ndlOptions}
            onChange={(e: any) => dispatch(sendToReducer(e))}
            className=""
            theme={(theme) => ({...theme, colors: {...theme.colors, primary: "skyblue", primary25: 'skyblue'} })}
          ></Select>
          <label>매운 음식이 좋을까요?</label>
          <Select
            options={spcOptions}
            onChange={(e: any) => dispatch(sendToReducer(e))}
            className=""
            theme={(theme) => ({...theme, colors: {...theme.colors, primary: "skyblue", primary25: 'skyblue'} })}
          ></Select>
        </>
      )}
      <button onClick={OnClickHandler} className="box-border w-40 h-8 bg-[#bbf7d0] rounded-full">
        메뉴 추천받기
      </button>
    </div>
  );
}
