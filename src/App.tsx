import styled from "styled-components";
import { motion } from "framer-motion";

const boxVars = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "#2ecc71", transition: { duration: 10 } },
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVars}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
      />
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
