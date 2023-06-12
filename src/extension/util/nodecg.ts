import { CreateNodecgInstance } from 'ts-nodecg/server';

import { ReplicantMap } from '../../nodecg/replicants';
import { MessageMap } from '../../nodecg/messages';
import { Configschema } from '../../nodecg/generated';

export type NodeCG = CreateNodecgInstance<
  'nodecg-react-vite-template',
  Configschema,
  ReplicantMap,
  MessageMap
>;

let nodecg: NodeCG;

export function set(ctx: NodeCG): void {
  nodecg = ctx;
}

export function get(): NodeCG {
  return nodecg;
}
