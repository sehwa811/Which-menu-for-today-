import { Suspense } from "react";

import Result from "../components/result.component";

export default function MenuPage() {
  return (
    <Suspense fallback={<h1>결과를 불러오는 중입니다...</h1>}>
      <Result delay={2000} />
    </Suspense>
  );
}
