import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./stores/atoms/Counter";

function App() {
  return <RecoilRoot>
    <Count/>
  </RecoilRoot>
}
export default App;

function Count() {
  return (
    <div>
      <CurrentCount  />
      <IncButton />
      <DecButton />
    </div>
  );
}
function CurrentCount() {
  const count = useRecoilValue(counterAtom)
  return <div>Count : {count}</div>;
}

function IncButton() {
  const setCount = useSetRecoilState(counterAtom)
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
function DecButton() {
  const setCount = useSetRecoilState(counterAtom)
  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
    </div>
  );
}
