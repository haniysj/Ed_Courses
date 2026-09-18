import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const bookings = await prisma.booking.findMany({
    where: { bookingReference: null },
    orderBy: { createdAt: "asc" },
    select: { id: true },
  });

  console.log(`Backfilling ${bookings.length} booking(s) without a reference...`);

  let seq = 1000;
  for (const b of bookings) {
    await prisma.booking.update({ where: { id: b.id }, data: { bookingReference: `BK-${seq}` } });
    seq += 1;
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
