import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutRestrictedTokensInputSchema } from './ProjectUpdateWithoutRestrictedTokensInputSchema';
import { ProjectUncheckedUpdateWithoutRestrictedTokensInputSchema } from './ProjectUncheckedUpdateWithoutRestrictedTokensInputSchema';
import { ProjectCreateWithoutRestrictedTokensInputSchema } from './ProjectCreateWithoutRestrictedTokensInputSchema';
import { ProjectUncheckedCreateWithoutRestrictedTokensInputSchema } from './ProjectUncheckedCreateWithoutRestrictedTokensInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutRestrictedTokensInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutRestrictedTokensInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutRestrictedTokensInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutRestrictedTokensInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutRestrictedTokensInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutRestrictedTokensInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutRestrictedTokensInputSchema;
