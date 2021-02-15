import React from 'react';

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: () => string;
}

const blaat: Props = {
  text: 'fuck'
};

class kut implements Props {
  text: 'string';
}

//const p = new blaat();

const test: Props = { text: 'hoer' };

console.log(test.text);

const Person: React.FC = () => {
  return <div>{'bla'}</div>;
};

export default Person;
