interface ContactFormSuccessProps {
  onReset: () => void;
}

export default function ContactFormSuccess({ onReset }: ContactFormSuccessProps) {
  return (
    <div className="bg-washi-50 p-6 rounded-lg border border-washi-200 text-center">
      <h2 className="text-xl font-medium text-kusagi mb-2">お問い合わせありがとうございます</h2>
      <p className="text-sumi">
        メッセージを受け付けました。内容を確認し、近日中にご連絡いたします。
      </p>
      <button
        onClick={onReset}
        className="mt-4 px-4 py-2 bg-asagi text-white rounded-md hover:bg-asagi/80"
      >
        新しいお問い合わせをする
      </button>
    </div>
  );
}
