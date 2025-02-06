import { z } from 'zod';

export const ProgramEnrollmentScalarFieldEnumSchema = z.enum(['id','partnerId','programId','linkId','commissionAmount','discountId','applicationId','status','createdAt','updatedAt']);

export default ProgramEnrollmentScalarFieldEnumSchema;
