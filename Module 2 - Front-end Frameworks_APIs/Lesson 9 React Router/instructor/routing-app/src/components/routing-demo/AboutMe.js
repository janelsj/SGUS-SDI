import { useParams } from "react-router-dom";

function AboutMe() {
  const { name } = useParams();
  return (
    <>
      <h3>About Me {name ? "(" + name + ")" : null}</h3>
      <p>This is a short paragraph where I talk about myself.</p>
    </>
  );
}

export default AboutMe;
