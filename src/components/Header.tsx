import { Card } from "react-bootstrap";

export default function Header() {
  return (
      <Card className="h-100 position-relative d-flex align-items-center">
        <Card.Img src={"/images/food.jpg"} height="220px" className='img-responsive' />
        <span className="position-absolute text-white top-50 display-5" style={{}}>오늘 뭐 먹지?</span>
      </Card>
  );
}