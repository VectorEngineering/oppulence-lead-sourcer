import { redis } from '@/lib/upstash'
import { prisma } from '@dub/prisma-thinkthank'

export async function appUninstalled({ shopDomain }: { shopDomain: string }) {
    await Promise.all([
        prisma.project.update({
            where: {
                shopifyStoreId: shopDomain
            },
            data: {
                shopifyStoreId: null
            }
        }),
        redis.del(`shopify:shop:${shopDomain}`)
    ])

    return '[Shopify] App Uninstalled received.'
}
