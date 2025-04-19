import { CreateContactUseCase } from "@/modules/contact/application/createContact.usecase";
import { PrismaContactRepository } from "@/modules/contact/infrastructure/repositories/contactPrismaRepository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  const useCase = new CreateContactUseCase(new PrismaContactRepository());
  const res = await useCase.execute({
    name,
    email,
    message,
  });
  return NextResponse.json(res);
}
