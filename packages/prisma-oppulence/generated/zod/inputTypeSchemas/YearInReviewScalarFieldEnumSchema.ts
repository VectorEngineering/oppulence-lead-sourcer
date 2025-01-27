import { z } from 'zod';

export const YearInReviewScalarFieldEnumSchema = z.enum(['id','year','totalLinks','totalClicks','topLinks','topCountries','workspaceId','createdAt','sentAt']);

export default YearInReviewScalarFieldEnumSchema;
