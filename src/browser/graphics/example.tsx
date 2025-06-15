import { createRoot } from 'react-dom/client';
import exampleImage from './image.png';
import { useReplicant } from '@nodecg/react-hooks';
import { ExampleReplicant } from '../../types/generated';

const App = () => {
  const [exampleReplicant] = useReplicant<ExampleReplicant>('exampleReplicant');

  return (
    <>
      <img src={exampleImage} />
      <p>{exampleReplicant?.exampleProperty}</p>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
