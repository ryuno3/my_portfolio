import Headline from "@/components/ui/headline";
import Link from "next/link";
import {
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "@/components/pages/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <Headline title="お問い合わせ" color="text-kusagi" />

      <div className="grid md:grid-cols-2 gap-8 my-8">
        {/* SNSアカウント情報 */}
        <div className="washi-container">
          <h2 className="text-xl font-semibold text-kusagi mb-4 border-b border-washi-200 pb-2">
            SNSアカウント
          </h2>

          <p className="text-sm text-sumi mb-6">
            以下のSNSからもお気軽にご連絡ください。技術記事や日々の活動を発信しています。
          </p>

          <div className="space-y-4">
            {/* GitHub */}
            <Link
              href="https://github.com/ryuno3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-washi-50 hover:bg-asagi/5 rounded-md transition-colors group"
            >
              <div className="h-10 w-10 flex items-center justify-center bg-washi-200 rounded-full mr-4">
                <CodeBracketIcon className="h-6 w-6 text-sumi" />
              </div>
              <div>
                <h3 className="font-semibold text-kusagi group-hover:text-asagi">GitHub</h3>
                <p className="text-sm text-sumi/80">@ryuno3</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-4 w-4 text-sumi/50 ml-auto" />
            </Link>

            {/* X (Twitter) */}
            <Link
              href="https://twitter.com/ryuno3_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-washi-50 hover:bg-asagi/5 rounded-md transition-colors group"
            >
              <div className="h-10 w-10 flex items-center justify-center bg-washi-200 rounded-full mr-4">
                <svg className="h-5 w-5 text-sumi" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-kusagi group-hover:text-asagi">X (Twitter)</h3>
                <p className="text-sm text-sumi/80">@ryuno3_dev</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-4 w-4 text-sumi/50 ml-auto" />
            </Link>

            {/* Qiita */}
            <Link
              href="https://qiita.com/ryuno3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-washi-50 hover:bg-asagi/5 rounded-md transition-colors group"
            >
              <div className="h-10 w-10 flex items-center justify-center bg-washi-200 rounded-full mr-4">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-sumi" />
              </div>
              <div>
                <h3 className="font-semibold text-kusagi group-hover:text-asagi">Qiita</h3>
                <p className="text-sm text-sumi/80">@ryuno3</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-4 w-4 text-sumi/50 ml-auto" />
            </Link>
          </div>

          <div className="japanese-divider" />

          <p className="text-center text-sm text-sumi/70 italic">
            ※フォロー、スター、いいねなどもお待ちしております。
          </p>
        </div>

        {/* お問い合わせフォーム */}
        <div className="washi-container">
          <h2 className="text-xl font-semibold text-kusagi mb-4 border-b border-washi-200 pb-2">
            メッセージを送る
          </h2>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
