import Button from '@mui/material/Button';
import exampleImage from './image.png';
import { useReplicant } from '@nodecg/react-hooks';
import { ExampleReplicant } from '../../types/generated';
import { DashboardThemeProvider } from './components/DashboardThemeProvider';

import { render } from '../render';

const App = () => {
  const [exampleReplicant, setExampleReplicant] =
    useReplicant<ExampleReplicant>('exampleReplicant');

  return (
    <DashboardThemeProvider>
      <img src={exampleImage} />
      <p>Current example replicant value: {exampleReplicant?.exampleProperty}</p>
      <Button
        variant="contained"
        onClick={() => {
          setExampleReplicant({ exampleProperty: Date.now().toString() });
        }}>
        <b>Test button (updates the replicant with current date)</b>
      </Button>
    </DashboardThemeProvider>
  );
};

render(<App />);
