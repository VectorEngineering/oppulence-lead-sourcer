import { z } from 'zod';

export const InboxTypeSchema = z.enum(['invoice','expense','document','contract','template','report','image','spreadsheet','presentation','archive','media','code','signature','certificate','form','other']);

export type InboxTypeType = `${z.infer<typeof InboxTypeSchema>}`

export default InboxTypeSchema;
