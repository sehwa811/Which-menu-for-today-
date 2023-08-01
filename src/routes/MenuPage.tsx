import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function MenuPage() {
  const location = useLocation();
  const data: string | null = location.state.data;
  console.log(location)
  console.log(location.state)


  return (
    <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
      <span className="display-5">{data}</span>
      <Link className="mt-4" to={""}>
        내 위치 근처 맛집 찾아보기
      </Link>
    </Container>
  );
}
