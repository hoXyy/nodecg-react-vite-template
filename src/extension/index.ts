import { Configschema } from 'src/types/generated';
import { set } from './util/nodecg';
import type NodeCG from 'nodecg/types';

export default (nodecg: NodeCG.ServerAPI<Configschema>) => {
  set(nodecg);
  nodecg.log.error('mounted')
  // Import your extension files here:
  // require('./example');
};
