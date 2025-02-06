import 'dotenv-flow/config'

import { BusinessConfig as platform } from '@dub/platform-config'
import { prisma } from '@dub/prisma-thinkthank'
import { DUB_WORKSPACE_ID } from '@dub/utils'

async function main() {
    const integration = await prisma.integration.create({
        data: {
            name: 'Slack',
            slug: 'slack',
            description: 'Create links from Slack messages easily with Dub.',
            developer: 'Dub',
            website: `${platform.webUrl}`,
            verified: true,
            projectId: DUB_WORKSPACE_ID

            // screenshots: [],
            // userId: "",
            // logo: "",
            // readme: "",
        }
    })

    console.log(`${integration.name} integration created`, integration)
}

main()
