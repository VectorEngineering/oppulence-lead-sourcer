import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankConnectionSettingsUpdateManyMutationInputSchema } from '../inputTypeSchemas/BankConnectionSettingsUpdateManyMutationInputSchema'
import { BankConnectionSettingsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BankConnectionSettingsUncheckedUpdateManyInputSchema'
import { BankConnectionSettingsWhereInputSchema } from '../inputTypeSchemas/BankConnectionSettingsWhereInputSchema'

export const BankConnectionSettingsUpdateManyArgsSchema: z.ZodType<Prisma.BankConnectionSettingsUpdateManyArgs> = z.object({
  data: z.union([ BankConnectionSettingsUpdateManyMutationInputSchema,BankConnectionSettingsUncheckedUpdateManyInputSchema ]),
  where: BankConnectionSettingsWhereInputSchema.optional(),
}).strict() ;

export default BankConnectionSettingsUpdateManyArgsSchema;
