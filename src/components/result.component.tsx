import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import { selectOptions } from "../store/selected/selector";

import { clearAll } from "../store/selected/action";
import { useDispatch } from "react-redux";

export default function Result({ delay }: { delay: number }) {
  
  const { ctr, ndl, spc } = useSelector(selectOptions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const getResult = async ({ delay }: { delay: number }) => {
    await new Promise((resolve) => setTimeout(resolve, delay));
    const res = await sendToServer();
    const data: string | null = await res.json();
    return data;
  };

  const { data } = useQuery(["result"], () => getResult({ delay: delay }), {
    suspense: true,
    cacheTime: 0,
  });

  const onHandleClick = () => {
    navigate("/");
    dispatch(clearAll());
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <span className="display-5">{data}</span>
      <Link className="mt-4" to="/resultMap">
        내 위치 근처 맛집 찾아보기
      </Link><br></br>
      <button onClick={onHandleClick}>다시 추천받기</button>
    </div>
  );
}
