import { z } from 'zod';

export const DealCompetitorScalarFieldEnumSchema = z.enum(['id','dealId','name','strengths','weaknesses','strategy','status','threatLevel','createdAt','updatedAt']);

export default DealCompetitorScalarFieldEnumSchema;
