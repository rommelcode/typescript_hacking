import React from 'react';

interface TestComponentProps {
  name?: string;
}

function TestComponent(props: TestComponentProps) {
  return <h1>{props.name || 'Unknown'} - Hello, world!</h1>;
}

interface TestComponentNewProps extends TestComponentProps {
  age?: number;
}

function TestComponentNew(props: TestComponentNewProps) {
  return (
    <div>
      <TestComponent {...props} />
      <h2>Age: {props.age}</h2>
    </div>
  );
}

export default TestComponentNew;

// ReactDOM.render(
//   <TestComponentNew name="Garry" age="40" />,
//   document.getElementById('root')
// );
