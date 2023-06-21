import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { DispatchContext, SelectedContext } from "../contexts/selectedContext";

import { Container, Button } from "react-bootstrap";

interface OptionKeys {
  value: string;
  label: string;
}

export default function SelectBox() {
  const dispatch = useContext(DispatchContext);
  const gotoNext = useNavigate();

  const ctrOptions: Array<OptionKeys> = [
    { value: "ctr", label: "한식" },
    { value: "ctr", label: "아시안" },
    { value: "ctr", label: "양식" },
    { value: "ctr", label: "그 외" },
  ];
  const ndlOptions: Array<OptionKeys> = [
    { value: "ndl", label: "면" },
    { value: "ndl", label: "밥" },
  ];
  const spcOptions: Array<OptionKeys> = [
    { value: "spc", label: "좋아요" },
    { value: "spc", label: "싫어요" },
  ];

  //console.log(selected)
  if (!dispatch) throw new Error("dispatch is null");

  const { ctr, ndl, spc } = useContext(SelectedContext);

  const sendToBack = () => {
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
    sendToBack();
    const res = await sendToBack();
    const data: string | null = await res.json();
    gotoNext("/menu", { state: { data: data } });
  };

  return (
    <Container fluid="md" className="mt-3">
      <label>어느 나라 음식이 좋을까요?</label>
      <Select
        options={ctrOptions}
        onChange={(e: any) => dispatch({ type: "add", payload: e })}
        className="mb-3 mt-2"
        theme={(theme) => ({...theme, colors: {...theme.colors, primary: "skyblue", primary25: 'skyblue'} })}
      ></Select>
      {ctr === "그 외" ? null : (
        <>
          <label>면이랑 밥 중에선?</label>
          <Select
            options={ndlOptions}
            onChange={(e: any) => dispatch({ type: "add", payload: e })}
            className="mb-3 mt-2"
            theme={(theme) => ({...theme, colors: {...theme.colors, primary: "skyblue", primary25: 'skyblue'} })}
          ></Select>
          <label>매운 음식이 좋을까요?</label>
          <Select
            options={spcOptions}
            onChange={(e: any) => dispatch({ type: "add", payload: e })}
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
