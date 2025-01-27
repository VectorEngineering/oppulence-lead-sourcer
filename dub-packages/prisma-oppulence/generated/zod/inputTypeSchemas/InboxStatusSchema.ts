import { z } from 'zod';

export const InboxStatusSchema = z.enum(['new','validating','scanning','processing','analyzing','indexing','pending','completed','failed','corrupted','infected','archived','deleted','purged','flagged','quarantined','restored']);

export type InboxStatusType = `${z.infer<typeof InboxStatusSchema>}`

export default InboxStatusSchema;
