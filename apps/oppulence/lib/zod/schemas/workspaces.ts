import { DEFAULT_REDIRECTS, validSlugRegex } from '@dub/utils'
import { AdminRole, OrganizationSize } from '@prisma/client'
import { planSchema, roleSchema } from './misc'

import { isReservedKey } from '@/lib/edge-config'
import z from '@/lib/zod'
import { OppulenceConfig as platform } from '@dub/platform-config'
import slugify from '@sindresorhus/slugify'
import { DomainSchema } from './domains'

export const workspaceIdSchema = z.object({
  workspaceId: z
    .string()
    .min(1, 'Workspace ID is required.')
    .describe('The ID of the workspace the link belongs to.'),
})

export const WorkspaceSchema = z
  .object({
    id: z.string().describe('The unique ID of the workspace.'),
    name: z.string().describe('The name of the workspace.'),
    slug: z.string().describe('The slug of the workspace.'),
    logo: z.string().nullable().default(null).describe('The logo of the workspace.'),
    inviteCode: z.string().nullable().describe('The invite code of the workspace.'),

    plan: planSchema,
    stripeId: z.string().nullable().describe('The Stripe ID of the workspace.'),
    billingCycleStart: z
      .number()
      .describe('The date and time when the billing cycle starts for the workspace.'),
    paymentFailedAt: z
      .date()
      .nullable()
      .describe('The date and time when the payment failed for the workspace.'),
    stripeConnectId: z.string().nullable().describe('The Stripe Connect ID of the workspace.'),
    payoutMethodId: z
      .string()
      .nullable()
      .describe(
        `[BETA – ${platform.company} Partners]: The ID of the payment method for partner payouts.`
      ),

    usage: z.number().describe('The usage of the workspace.'),
    usageLimit: z.number().describe('The usage limit of the workspace.'),
    linksUsage: z.number().describe('The links usage of the workspace.'),
    linksLimit: z.number().describe('The links limit of the workspace.'),
    salesUsage: z
      .number()
      .describe('The dollar amount of tracked revenue in the current billing cycle (in cents).'),
    salesLimit: z
      .number()
      .describe('The limit of tracked revenue in the current billing cycle (in cents).'),
    domainsLimit: z.number().describe('The domains limit of the workspace.'),
    tagsLimit: z.number().describe('The tags limit of the workspace.'),
    usersLimit: z.number().describe('The users limit of the workspace.'),
    aiUsage: z.number().describe('The AI usage of the workspace.'),
    aiLimit: z.number().describe('The AI limit of the workspace.'),
    /**
     * The admin role of the workspace user.
     * This field can be:
     * - undefined (field not present in object)
     * - null (explicitly set to null)
     * - a valid AdminRole enum value
     *
     * We support null values to handle cases where:
     * 1. The role hasn't been set yet
     * 2. The role was explicitly unset
     * 3. Legacy data migration where role wasn't required
     */
    adminRole: z
      .nativeEnum(AdminRole)
      .nullable()
      .optional()
      .describe('The admin role of the workspace.'),
    /**
     * The size of the organization.
     * This field can be:
     * - undefined (field not present in object)
     * - null (explicitly set to null)
     * - a valid OrganizationSize enum value
     *
     * We support null values to handle cases where:
     * 1. Organization size hasn't been provided yet
     * 2. Size was explicitly unset
     * 3. Legacy data migration where size wasn't required
     */
    organizationSize: z
      .nativeEnum(OrganizationSize)
      .nullable()
      .optional()
      .describe('The organization size of the workspace.'),
    /**
     * The reason for creating the workspace.
     * This field can be:
     * - undefined (field not present in object)
     * - null (explicitly set to null)
     * - a non-empty string
     *
     * We support null values to handle cases where:
     * 1. Reason hasn't been provided yet
     * 2. Reason was explicitly unset
     * 3. Legacy data migration where reason wasn't required
     *
     * This field is typically used during workspace creation for analytics
     * and customer understanding purposes.
     */
    reason: z.string().nullable().optional().describe('The reason for creating the workspace.'),

    conversionEnabled: z
      .boolean()
      .describe('Whether the workspace has conversion tracking enabled (d.to/conversions).'),
    dotLinkClaimed: z
      .boolean()
      .describe('Whether the workspace has claimed a free .link domain. (dub.link/free)'),
    partnersEnabled: z
      .boolean()
      .describe(`Whether the workspace has ${platform.company} Partners enabled.`),

    createdAt: z.date().describe('The date and time when the workspace was created.'),
    users: z
      .array(
        z.object({
          role: roleSchema,
        })
      )
      .describe('The role of the authenticated user in the workspace.'),
    domains: z
      .array(
        DomainSchema.pick({
          slug: true,
          primary: true,
          verified: true,
        })
      )
      .describe('The domains of the workspace.'),
    flags: z
      .record(z.boolean())
      .optional()
      .describe('The feature flags of the workspace, indicating which features are enabled.'),
  })
  .openapi({
    title: 'Workspace',
  })

export const createWorkspaceSchema = z.object({
  name: z.string().min(1).max(32),
  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters')
    .max(48, 'Slug must be less than 48 characters')
    .transform(v => slugify(v))
    .refine(v => validSlugRegex.test(v), { message: 'Invalid slug format' })
    .refine(async v => !((await isReservedKey(v)) || DEFAULT_REDIRECTS[v]), {
      message: 'Cannot use reserved slugs',
    }),
  logo: z.string().optional(),
  adminRole: z.nativeEnum(AdminRole).optional(),
  organizationSize: z.nativeEnum(OrganizationSize).optional(),
  reason: z.string().optional(),
})

export const updateWorkspaceSchema = createWorkspaceSchema.partial()
