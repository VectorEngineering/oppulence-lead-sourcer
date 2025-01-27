import { z } from 'zod';

export const LeadSocialProfileScalarFieldEnumSchema = z.enum(['id','leadId','platform','profileUrl','username','lastSynced']);

export default LeadSocialProfileScalarFieldEnumSchema;
