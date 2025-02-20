import { z } from 'zod';

export const DiscountScalarFieldEnumSchema = z.enum(['id','amount','type','duration','interval','couponId','couponTestId','workspaceId','programId','createdAt','updatedAt']);

export default DiscountScalarFieldEnumSchema;
