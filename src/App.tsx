import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import CustomForm from './components/CustomForm';
import Login from './components/Login';
import Users from './components/Users';
import BasicTypes from './typescript/BasicTypes';
import Functions from './typescript/Functions';
import ObjectLiterals from './typescript/ObjectLiterals';

const App = () => {
  return (
    <div>
      Intro to TS in React
      <hr />
      <BasicTypes />
      <hr />
      <ObjectLiterals />
      <hr />
      <Functions />
      <hr />
      <Counter />
      <hr />
      <CounterHook />
      <hr />
      <Login />
      <hr />
      <Users />
      <hr />
      <CustomForm />
    </div>
  );
};

export default App;
