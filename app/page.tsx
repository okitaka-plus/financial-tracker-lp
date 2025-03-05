import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  LineChart,
  BellRing,
  Brain,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Financial Tracker</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              機能紹介
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              料金プラン
            </Link>
            <Link href="#cases" className="text-sm font-medium hover:text-primary">
              導入事例
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
            <Button asChild>
              <Link href="#signup">無料登録</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Button */}
          <Button variant="outline" size="icon" className="md:hidden">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">メニュー</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  キャッシュフローを見える化し、
                  <br />
                  経営をシンプルに
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>Financial Tracker</strong>は、小規模事業者向けの財務管理アプリです。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#signup">無料で始める</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#demo">デモを見る</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Financial Tracker アプリのスクリーンショット"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-slate-50 dark:bg-slate-900 py-24">
          <div className="container space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">主要機能</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                小規模事業者の財務管理をサポートする機能が充実
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background rounded-xl p-6 shadow-sm space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">キャッシュフローの可視化</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>収支をリアルタイムで分析</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>グラフやレポート機能</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">収益と支出の管理</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>取引データを簡単入力</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>自動計算機能で手間削減</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <BellRing className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">重要なアラート通知</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>資金不足リスクを事前に警告</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>収益悪化のサインを自動検出</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AIによる財務予測</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Financial Forecasting AI Assistantとの連携</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>過去データを分析し、未来の財務状態を予測</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="#signup">
                  今すぐ無料で試す
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="cases" className="py-24">
          <div className="container space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ユーザーの声</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Financial Trackerを導入した事業者様からの声をご紹介します
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="飲食店経営者"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">飲食店経営者</h3>
                    <p className="text-sm text-muted-foreground">ラーメン店オーナー</p>
                  </div>
                </div>
                <p>
                  「日々の収支を簡単に管理できるようになりました。特に繁忙期と閑散期の売上予測が正確になり、スタッフの配置が最適化できています！」
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="フリーランス"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">フリーランス</h3>
                    <p className="text-sm text-muted-foreground">ウェブデザイナー</p>
                  </div>
                </div>
                <p>
                  「経費管理が楽になり、節税対策にも役立っています。確定申告の時期も以前より格段に楽になりました。個人事業主には本当におすすめです！」
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="小売業オーナー"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">小売業オーナー</h3>
                    <p className="text-sm text-muted-foreground">アパレルショップ</p>
                  </div>
                </div>
                <p>
                  「AI予測のおかげで仕入れの最適化ができるようになりました。在庫の無駄が減り、利益率が向上。導入して本当に良かったです！」
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                成功事例をもっと見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-slate-50 dark:bg-slate-900 py-24">
          <div className="container space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">料金プラン</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                ビジネスの規模に合わせて選べる2つのプラン
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-[900px] mx-auto">
              <div className="bg-background rounded-xl p-8 shadow-sm border">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">無料プラン</h3>
                  <p className="text-4xl font-bold">
                    ¥0<span className="text-base font-normal text-muted-foreground">/月</span>
                  </p>
                  <p className="text-muted-foreground">基本的な財務管理機能を無料でご利用いただけます</p>
                </div>

                <div className="mt-8 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>基本的な財務管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>収支の記録と分析</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>基本レポート機能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>メールサポート</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">AI予測機能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">高度なレポート</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">チャット・電話サポート</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="#signup">無料で始める</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-background rounded-xl p-8 shadow-sm border border-primary relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  おすすめ
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">有料プラン</h3>
                  <p className="text-4xl font-bold">
                    ¥1,980<span className="text-base font-normal text-muted-foreground">/月</span>
                  </p>
                  <p className="text-muted-foreground">すべての機能を利用できる、ビジネス成長のためのプラン</p>
                </div>

                <div className="mt-8 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>基本的な財務管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>収支の記録と分析</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>基本レポート機能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>メールサポート</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>AI予測機能</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>高度なレポート</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>チャット・電話サポート</strong>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button className="w-full" size="lg" variant="default" asChild>
                    <Link href="#signup">有料プランを選択</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <div className="container space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">よくある質問</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Financial Trackerについてよくいただく質問にお答えします
              </p>
            </div>

            <div className="max-w-[800px] mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>本当に無料で使えますか？</AccordionTrigger>
                  <AccordionContent>
                    はい、無料プランで基本的な機能を利用できます。収支の記録や基本的な分析機能など、
                    小規模事業者の方が日々の財務管理を行うために必要な機能は無料でご利用いただけます。
                    より高度な機能や分析が必要な場合は、有料プランへのアップグレードをご検討ください。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>どんな業種に向いていますか？</AccordionTrigger>
                  <AccordionContent>
                    飲食、小売、サービス業など、幅広い小規模事業に対応しています。
                    特に日々の収支管理や売上予測が重要な業種の方に最適です。
                    業種別のテンプレートも用意していますので、導入後すぐにご利用いただけます。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>セキュリティは安全ですか？</AccordionTrigger>
                  <AccordionContent>
                    最新の暗号化技術を採用し、安全にデータを管理できます。
                    すべてのデータは暗号化されて保存され、定期的なセキュリティ監査も実施しています。
                    また、プライバシーポリシーに基づき、お客様の大切なデータを適切に管理いたします。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>会計ソフトとの連携はできますか？</AccordionTrigger>
                  <AccordionContent>
                    はい、主要な会計ソフトとの連携が可能です。
                    データのエクスポート機能を使って、お使いの会計ソフトにデータを簡単に移行できます。
                    詳細な連携方法については、サポートページをご確認ください。
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>スマートフォンでも使えますか？</AccordionTrigger>
                  <AccordionContent>
                    はい、スマートフォンやタブレットなど、さまざまなデバイスで利用できます。
                    専用のモバイルアプリもご用意していますので、外出先でも簡単に収支の記録や確認が可能です。 App
                    StoreやGoogle Playからダウンロードいただけます。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  さらに詳しく
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="signup" className="bg-primary text-primary-foreground py-24">
          <div className="container space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">今すぐ始めましょう</h2>
            <p className="text-xl max-w-[800px] mx-auto opacity-90">
              Financial Trackerで財務管理を効率化し、ビジネスの成長に集中しましょう。 無料プランからお試しいただけます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#demo">デモを見る</Link>
              </Button>
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100" asChild>
                <Link href="#register">無料で登録する</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Financial Tracker</span>
              </div>
              <p className="text-sm text-muted-foreground">
                小規模事業者向けの財務管理アプリ。
                <br />
                キャッシュフローを見える化し、経営をシンプルに。
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                    機能紹介
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                    料金プラン
                  </Link>
                </li>
                <li>
                  <Link href="#cases" className="text-sm text-muted-foreground hover:text-foreground">
                    導入事例
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">法的情報</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    特定商取引法に基づく表記
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">お問い合わせ</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    お問い合わせフォーム
                  </Link>
                </li>
                <li className="text-sm text-muted-foreground">support@financial-tracker.jp</li>
                <li className="text-sm text-muted-foreground">03-1234-5678（平日 9:00-18:00）</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Financial Tracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

