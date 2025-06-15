import exampleImage from './image.png';
import { useReplicant } from '@nodecg/react-hooks';
import { ExampleReplicant } from '../../types/generated';
import './css/style.css';
import { render } from '../render';

const App = () => {
  const [exampleReplicant] = useReplicant<ExampleReplicant>('exampleReplicant');

  return (
    <>
      <img src={exampleImage} />
      <p className="test-class">{exampleReplicant?.exampleProperty}</p>
    </>
  );
};

render(<App />);
