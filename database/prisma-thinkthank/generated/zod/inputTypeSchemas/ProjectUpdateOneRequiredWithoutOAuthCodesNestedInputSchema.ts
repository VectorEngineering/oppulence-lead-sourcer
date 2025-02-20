import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutOAuthCodesInputSchema } from './ProjectCreateWithoutOAuthCodesInputSchema';
import { ProjectUncheckedCreateWithoutOAuthCodesInputSchema } from './ProjectUncheckedCreateWithoutOAuthCodesInputSchema';
import { ProjectCreateOrConnectWithoutOAuthCodesInputSchema } from './ProjectCreateOrConnectWithoutOAuthCodesInputSchema';
import { ProjectUpsertWithoutOAuthCodesInputSchema } from './ProjectUpsertWithoutOAuthCodesInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutOAuthCodesInputSchema } from './ProjectUpdateToOneWithWhereWithoutOAuthCodesInputSchema';
import { ProjectUpdateWithoutOAuthCodesInputSchema } from './ProjectUpdateWithoutOAuthCodesInputSchema';
import { ProjectUncheckedUpdateWithoutOAuthCodesInputSchema } from './ProjectUncheckedUpdateWithoutOAuthCodesInputSchema';

export const ProjectUpdateOneRequiredWithoutOAuthCodesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutOAuthCodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutOAuthCodesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutOAuthCodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutOAuthCodesInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutOAuthCodesInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutOAuthCodesInputSchema),z.lazy(() => ProjectUpdateWithoutOAuthCodesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutOAuthCodesInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutOAuthCodesNestedInputSchema;
