import React from 'react';

interface ITestComponent {
  name: string;
}

const TestComponent: React.FC<ITestComponent> = ({ name }) => {
  return <div>Hello {name}!</div>;
};

interface ITestComponentNew {
  age: number;
}

function TestComponentNew({ age }: ITestComponentNew) {
  return (
    <React.Fragment>
      <TestComponent name={'Ted'} />
      You are aged: {age}
    </React.Fragment>
  );
}

export default TestComponentNew;

// ReactDOM.render(
//   <TestComponentNew name="Garry" age="40" />,
//   document.getElementById('root')
// );
