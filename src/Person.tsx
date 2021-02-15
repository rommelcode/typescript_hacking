import React from 'react';

type Props = {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: () => string;
};

const blaat: Props = {
  text: 'fuck'
};

class kut implements Props {
  text: 'hoer';
}

//const p = new blaat();

console.log(new kut());

const Person: React.FC = () => {
  return <div>{'bla'}</div>;
};

export default Person;
