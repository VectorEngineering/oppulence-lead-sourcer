import { z } from 'zod';

export const DiscountOrderByRelevanceFieldEnumSchema = z.enum(['id','couponId','couponTestId','workspaceId','programId']);

export default DiscountOrderByRelevanceFieldEnumSchema;
