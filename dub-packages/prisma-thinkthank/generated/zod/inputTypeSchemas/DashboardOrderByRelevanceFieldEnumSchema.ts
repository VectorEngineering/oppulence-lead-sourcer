import { z } from 'zod';

export const DashboardOrderByRelevanceFieldEnumSchema = z.enum(['id','linkId','projectId','userId','password']);

export default DashboardOrderByRelevanceFieldEnumSchema;
