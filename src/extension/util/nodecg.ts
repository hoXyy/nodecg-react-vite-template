import { CreateNodecgInstance } from 'ts-nodecg/server';

import { ReplicantMap } from '../../types/replicants';
import { MessageMap } from '../../types/messages';
import { Configschema } from '../../types/generated';

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
