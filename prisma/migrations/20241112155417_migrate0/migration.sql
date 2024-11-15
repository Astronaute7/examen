-- CreateEnum
CREATE TYPE "TypeEnum" AS ENUM ('PEINTURE', 'SCULPTURE', 'DESSIN', 'ASCII_ART');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "year" INTEGER,
    "description" TEXT,
    "type" "TypeEnum" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
