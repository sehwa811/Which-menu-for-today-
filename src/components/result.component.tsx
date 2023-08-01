import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import { selectOptions } from "../store/selected/selector";

import { Container } from "react-bootstrap";

export default function Result({ delay }: { delay: number }) {
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

  const getResult = async ({ delay }: { delay: number }) => {
    sendToServer();
    await new Promise((resolve) => setTimeout(resolve, delay));
    const res = await sendToServer();
    const data: string | null = await res.json();
    return data;
  };

  const { data } = useQuery(["data"], () => getResult({ delay: delay }), {
    suspense: true,
  });


  return (
    <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
      <span className="display-5">{data}</span>
      <Link className="mt-4" to={""}>
        내 위치 근처 맛집 찾아보기
      </Link>
    </Container>
  );
}
