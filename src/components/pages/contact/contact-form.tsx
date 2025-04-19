"use client";

import { useActionState, useState } from "react";
import ContactFormInput from "./contact-form-input";
import ContactFormTextarea from "./contact-form-textarea";
import ContactFormSuccess from "./contact-form-success";
import ContactFormSubmitButton from "./contact-form-submit-button";
import { submitContactAction } from "@/lib/api/contact";
import { CreateContactResponseDto } from "@/modules/contact/dto/createContactResponseDto";

const initialState: CreateContactResponseDto = {
  id: "",
  name: "",
  email: "",
  message: "",
  createdAt: new Date(),
  status: "noData",
  errors: undefined,
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactAction, initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 送信成功時にフォームをリセット
  if (state.status && !isPending) {
  }

  return (
    <div className="w-full">
      {isPending ? (
        <ContactFormSuccess onReset={() => setIsSubmitted(false)} />
      ) : (
        <form action={formAction} className="space-y-6">
          <ContactFormInput
            id="name"
            label="お名前"
            placeholder="山田 太郎"
            required
            error={state.errors?.name}
          />

          <ContactFormInput
            id="email"
            label="メールアドレス"
            type="email"
            placeholder="example@example.com"
            required
            error={state.errors?.email}
          />

          <ContactFormTextarea
            id="message"
            label="お問い合わせ内容"
            placeholder="お問い合わせ内容をご記入ください"
            rows={5}
            required
            error={state.errors?.message}
          />

          {state.errors?.form && (
            <div className="p-3 bg-akane/10 border border-akane/30 rounded-md">
              <p className="text-akane text-sm">{state.errors.form}</p>
            </div>
          )}

          <div className="flex justify-center">
            {isSubmitted ? "" : <ContactFormSubmitButton isSubmitting={state.isSubmitting} />}
          </div>
        </form>
      )}
    </div>
  );
}
