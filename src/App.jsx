import "./App.css";
import AuthSwitch from "./components/AuthSwitcher";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter />
      <AuthSwitch />
    </div>
  );
};

export default App;
