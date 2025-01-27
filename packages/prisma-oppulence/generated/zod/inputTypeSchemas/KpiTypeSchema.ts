import { z } from 'zod';

export const KpiTypeSchema = z.enum(['revenue','conversion_rate','cycle_time','deal_velocity','win_rate','custom']);

export type KpiTypeType = `${z.infer<typeof KpiTypeSchema>}`

export default KpiTypeSchema;
