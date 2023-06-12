import { BundleNodecgInstance as NodeCG } from '../../types/nodecg';

let nodecg: NodeCG;

export function set(ctx: NodeCG): void {
  nodecg = ctx;
}

export function get(): NodeCG {
  return nodecg;
}
