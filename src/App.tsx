import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

function App() {
  // useMotionValue: react state가 아니기 때문에 리랜더링 되지 않음
  const x = useMotionValue(0);
  /**
   * @constant useTransform 한 값에서 다른 값 범위로 매핑하여 다른 motionValue의 output을 변환
   */
  const opacity = useTransform(x, [-800, 0, 800], [0.1, 1, 0.1]);
  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    opacity.onChange(() => console.log(opacity.get()));
  }, [opacity]);
  return (
    <Wrapper>
      <Box style={{ x, opacity }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
