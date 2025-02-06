import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { BankConnectionArgsSchema } from "../outputTypeSchemas/BankConnectionArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TransactionFindManyArgsSchema } from "../outputTypeSchemas/TransactionFindManyArgsSchema"
import { BankAccountCountOutputTypeArgsSchema } from "../outputTypeSchemas/BankAccountCountOutputTypeArgsSchema"

export const BankAccountIncludeSchema: z.ZodType<Prisma.BankAccountInclude> = z.object({
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  bankConnection: z.union([z.boolean(),z.lazy(() => BankConnectionArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  creator: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  transactions: z.union([z.boolean(),z.lazy(() => TransactionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BankAccountCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BankAccountIncludeSchema;
