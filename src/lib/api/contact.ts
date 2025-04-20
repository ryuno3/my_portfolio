"use server";

import { CreateContactUseCase } from "@/modules/contact/application/createContact.usecase";
import { CreateContactDto } from "@/modules/contact/dto/createContactDto";
import { CreateContactResponseDto } from "@/modules/contact/dto/createContactResponseDto";
import { PrismaContactRepository } from "@/modules/contact/infrastructure/repositories/contactPrismaRepository";

export async function submitContactAction(
  prevState: CreateContactResponseDto,
  formdata: FormData
): Promise<CreateContactResponseDto> {
  const name = formdata.get("name") as CreateContactDto["name"];
  const email = formdata.get("email") as CreateContactDto["email"];
  const message = formdata.get("message") as CreateContactDto["message"];
  const dto: CreateContactDto = { name, email, message };

  const useCase = new CreateContactUseCase(new PrismaContactRepository());
  const res = await useCase.execute(dto);

  return {
    ...res,
    status: "success",
    errors: undefined,
    isSubmitting: false,
  } as CreateContactResponseDto;
}
