import { z } from 'zod';

export const DealHistoryScalarFieldEnumSchema = z.enum(['id','dealId','field','oldValue','newValue','description','createdAt','createdBy']);

export default DealHistoryScalarFieldEnumSchema;
