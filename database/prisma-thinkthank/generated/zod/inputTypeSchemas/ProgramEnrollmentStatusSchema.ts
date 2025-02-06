import { z } from 'zod';

export const ProgramEnrollmentStatusSchema = z.enum(['approved','pending','rejected']);

export type ProgramEnrollmentStatusType = `${z.infer<typeof ProgramEnrollmentStatusSchema>}`

export default ProgramEnrollmentStatusSchema;
