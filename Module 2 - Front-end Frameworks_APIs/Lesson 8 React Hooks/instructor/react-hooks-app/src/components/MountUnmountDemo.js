import { useEffect, useState } from "react";

function MountUnmountDemo() {
  const [showChild, setShowChild] = useState(true);

  function ChildComponent(props) {

    // Part 2 - Mount and Unmount
    useEffect(() => {
      console.log("child component mounted"); // On Mount

      // On Unmount
      return () => {
        console.log("unmounting child component");
      };
    }, []);


    return (
      <>
        <div>I am a child component</div>
        <button onClick={props.unmountMe}>Unmount</button>
      </>
    );
  }

  function unmountChild() {
    setShowChild(false);
  }

  return (
    <>
      <div>I am parent</div>
      {showChild ? <ChildComponent unmountMe={unmountChild} /> : null}
    </>
  );
}

export default MountUnmountDemo;
