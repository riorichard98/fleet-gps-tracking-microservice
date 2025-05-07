import cron from 'node-cron'
import { env } from '../environment/environment'
import prisma from '../models/primsa-client';

const daysToKeep = env.CLEANUP_LOGS_AFTER_DAYS;

export function startGPSLogCleanupJob() {

  cron.schedule('0 0 * * *', async () => {
    const now = new Date()
    console.log(`[CRON] Running GPS log cleanup at ${now.toISOString()}`)

    const thresholdDate = new Date()
    thresholdDate.setDate(thresholdDate.getDate() - daysToKeep)

    try {
      const result = await prisma.gPSLog.deleteMany({
        where: {
          timestamp: {
            lt: thresholdDate,
          },
        },
      })

      console.log(`[CRON] Deleted ${result.count} GPS logs older than ${thresholdDate.toISOString()}`)
    } catch (err) {
      console.error('[CRON ERROR] Failed to clean up GPS logs:', err)
    }
  })

  console.log('[CRON] GPS log cleanup job scheduled')
}