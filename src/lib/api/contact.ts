import { CreateContactResponseDto } from "@/modules/contact/dto/createContactResponseDto";

export async function submitContactAction(
  prevState: CreateContactResponseDto,
  formdata: FormData
): Promise<CreateContactResponseDto> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formdata.get("name"),
        email: formdata.get("email"),
        message: formdata.get("message"),
      }),
    }
  );
  if (!res.ok) {
    throw new Error("お問い合わせの送信に失敗しました");
  }
  const data: CreateContactResponseDto = await res.json();
  return {
    ...data,
    status: "success",
    errors: undefined,
    isSubmitting: false,
  } as CreateContactResponseDto;
}
