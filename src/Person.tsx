import React from 'react';

interface Props {
  message: string;
  ok?: boolean;
  i?: number;
  fn?: () => string;
}

const blaat: Props = {
  message: 'fuck'
};

// class kut implements Props {
//   text: 'string';
// }

//const p = new blaat();

//const test: Props = { text: 'hoer' };

const test = new (class ya implements Props {
  message = 'hahaha';
})();

console.log(test.message);

const Person: React.FC = () => {
  return <div>{'bla'}</div>;
};

export default Person;
