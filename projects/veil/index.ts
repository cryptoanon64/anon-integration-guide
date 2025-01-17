import { AdapterExport } from '@heyanon/sdk';
import { tools } from './tools';
import * as functions from './functions';

export default {
    tools,
    functions,
    description: 'Veil.Cash is a non-custodial privacy protocol on Base L2, enabling verified users to achieve privacy and anonymity through trusted pools.',
} satisfies AdapterExport;