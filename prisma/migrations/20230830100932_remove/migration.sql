/*
  Warnings:

  - You are about to drop the `semester_registrations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "semester_registrations" DROP CONSTRAINT "semester_registrations_academicSemesterId_fkey";

-- DropTable
DROP TABLE "semester_registrations";

-- DropEnum
DROP TYPE "SemesterRegistrationStatus";
