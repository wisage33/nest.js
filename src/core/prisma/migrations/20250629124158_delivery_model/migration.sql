-- CreateEnum
CREATE TYPE "deliveryStatus" AS ENUM ('pending', 'onWay', 'delivered');

-- CreateTable
CREATE TABLE "Delivery" (
    "id" SERIAL NOT NULL,
    "purchaseId" INTEGER NOT NULL,
    "status" "deliveryStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_purchaseId_key" ON "Delivery"("purchaseId");

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
