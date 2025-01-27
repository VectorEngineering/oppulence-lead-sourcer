import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutBankAccountInputSchema } from './ProjectCreateWithoutBankAccountInputSchema';
import { ProjectUncheckedCreateWithoutBankAccountInputSchema } from './ProjectUncheckedCreateWithoutBankAccountInputSchema';
import { ProjectCreateOrConnectWithoutBankAccountInputSchema } from './ProjectCreateOrConnectWithoutBankAccountInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutBankAccountInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutBankAccountInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutBankAccountInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutBankAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutBankAccountInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutBankAccountInputSchema;
