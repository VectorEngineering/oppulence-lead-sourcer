import { z } from 'zod';

export const ConnectionStatusSchema = z.enum(['disconnected','connected','unknown','error','pending_verification','requires_attention','expired']);

export type ConnectionStatusType = `${z.infer<typeof ConnectionStatusSchema>}`

export default ConnectionStatusSchema;
