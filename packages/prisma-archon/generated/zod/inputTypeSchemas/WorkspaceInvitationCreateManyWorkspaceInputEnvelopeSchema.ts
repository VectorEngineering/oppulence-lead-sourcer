import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceInvitationCreateManyWorkspaceInputSchema } from './WorkspaceInvitationCreateManyWorkspaceInputSchema'

export const WorkspaceInvitationCreateManyWorkspaceInputEnvelopeSchema: z.ZodType<Prisma.WorkspaceInvitationCreateManyWorkspaceInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => WorkspaceInvitationCreateManyWorkspaceInputSchema),
                z.lazy(() => WorkspaceInvitationCreateManyWorkspaceInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default WorkspaceInvitationCreateManyWorkspaceInputEnvelopeSchema
