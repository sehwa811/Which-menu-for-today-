import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";

import { ctrOptions, spcOptions, ndlOptions } from "../datas/options";
import { selectOptions } from "../store/selected/selector";
import { sendToReducer } from "../store/selected/action";

import { Container, Button } from "react-bootstrap";


export default function SelectBox() {
  const dispatch = useDispatch<any>();
  const gotoNext = useNavigate();
  //console.log(selected)
  if (!dispatch) throw new Error("dispatch is null");

  const { ctr, ndl, spc } = useSelector(selectOptions);

  const sendToServer = () => {
    const formData = new FormData();
    formData.append("ctr", ctr);
    formData.append("ndl", ndl);
    formData.append("spc", spc);
    return fetch("/pt", {
      method: "POST",
      body: formData,
    });
  };

  const OnClickHandler = async () => {
    sendToServer();
    const res = await sendToServer();
    const data: string | null = await res.json();
    gotoNext("/menu", { state: { data: data } });
  };

  return (
    <Container fluid="md" className="mt-3">
      <label>어느 나라 음식이 좋을까요?</label>
      <Select
        options={ctrOptions}
        onChange={(e: any) => dispatch(sendToReducer(e))}
        className="mb-3 mt-2"
        theme={(theme) => ({...theme, colors: {...theme.colors, primary: "skyblue", primary25: 'skyblue'} })}
      ></Select>
      {ctr === "그 외" ? null : (
        <>
          <label>면이랑 밥 중에선?</label>
          <Select
            options={ndlOptions}
            onChange={(e: any) => dispatch(sendToReducer(e))}
            className="mb-3 mt-2"
            theme={(theme) => ({...theme, colors: {...theme.colors, primary: "skyblue", primary25: 'skyblue'} })}
          ></Select>
          <label>매운 음식이 좋을까요?</label>
          <Select
            options={spcOptions}
            onChange={(e: any) => dispatch(sendToReducer(e))}
            className="mb-3 mt-2"
            theme={(theme) => ({...theme, colors: {...theme.colors, primary: "skyblue", primary25: 'skyblue'} })}
          ></Select>
        </>
      )}
      <Button onClick={OnClickHandler} className="mt-1 w-100 bg-skyblue">
        메뉴 추천받기
      </Button>
    </Container>
  );
}
