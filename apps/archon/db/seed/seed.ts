import { prisma } from '@dub/prisma-archon'
import fs from 'node:fs'
import path from 'node:path'

async function seedDatabase() {
    try {
        // Read the dump file
        const dumpPath = path.join(__dirname, 'user-dump.json')
        const userData = JSON.parse(fs.readFileSync(dumpPath, 'utf-8'))

        // Check for database URL
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL environment variable is not set')
        }

        console.log('Starting database seed...')

        // Insert users
        for (const user of userData) {
            await prisma.user.create({ data: user })
        }

        console.log('Database seeding completed successfully')

        process.exit(0)
    } catch (error) {
        console.error('Error seeding database:', error)
        process.exit(1)
    }
}

seedDatabase()
