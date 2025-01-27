import { z } from 'zod';

export const FeedbackStatusSchema = z.enum(['OPEN','IN_PROGRESS','RESOLVED','CLOSED','REOPENED']);

export type FeedbackStatusType = `${z.infer<typeof FeedbackStatusSchema>}`

export default FeedbackStatusSchema;
