// prisma/seed.ts
import { PrismaClient, Vehicle } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const vehiclesData = [
    {
      plateNumber: 'B1234XYZ',
      name: 'Truck Jakarta',
      type: 'Truck',
    },
    {
      plateNumber: 'D5678ABC',
      name: 'Van Bandung',
      type: 'Van',
    },
    {
      plateNumber: 'L9101DEF',
      name: 'Bus Surabaya',
      type: 'Bus',
    },
    {
      plateNumber: 'M1122GHI',
      name: 'Pickup Medan',
      type: 'Pickup',
    },
    {
      plateNumber: 'Z3344JKL',
      name: 'SUV Bali',
      type: 'SUV',
    },
  ]

  const seededVehicles: Vehicle[] = []

  for (const data of vehiclesData) {
    const vehicle = await prisma.vehicle.upsert({
      where: { plateNumber: data.plateNumber },
      update: {}, // No update; only insert if missing
      create: data,
    })
    seededVehicles.push(vehicle)
  }

  console.log('\n✅ Seeded Vehicles:')
  for (const vehicle of seededVehicles) {
    console.log(`- ${vehicle.name} (${vehicle.plateNumber}) → id: ${vehicle.id}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
