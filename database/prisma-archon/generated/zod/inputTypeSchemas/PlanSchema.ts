import { z } from 'zod';

export const PlanSchema = z.enum(['free','lite','pro','business','enterprise']);

export type PlanType = `${z.infer<typeof PlanSchema>}`

export default PlanSchema;
