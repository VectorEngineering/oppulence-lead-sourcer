import { z } from 'zod';

export const LeadTimelineScalarFieldEnumSchema = z.enum(['id','leadId','milestone','targetDate','actualDate','status','notes']);

export default LeadTimelineScalarFieldEnumSchema;
