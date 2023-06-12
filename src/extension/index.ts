import { set } from './util/nodecg';
import { BundleNodecgInstance as NodeCG } from '../types/nodecg';

export default (nodecg: NodeCG) => {
  set(nodecg);
  // Import your extension files here:
  // require('./example');
};
