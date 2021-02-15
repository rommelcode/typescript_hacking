import React from 'react';

type Props = {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: () => string;
};

const blaat implements Props = {
  text: 'fuck off'
};

//const p = new blaat();

//console.log(blaat);

const Person: React.FC = () => {
  return <div>{blaat.text}</div>;
};

export default Person;
