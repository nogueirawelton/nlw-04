import { PrismaClient } from "@prisma/client";
import { PrismaClient as PrismaTests } from "../../__tests__/internal/";

export const prisma = process.env.NODE_ENV === "test" ? new PrismaTests() : new PrismaClient();
