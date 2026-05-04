import Link from 'next/link'

export default function Note3Page() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
      <article className="max-w-[640px]">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          What a Community Leader Actually Does
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          December 17, 2025
        </p>

        <div className="text-[17px] leading-[1.9] text-foreground space-y-6">
          <p>
            H团长是我见过少有的毫不藏私，说话干脆的人。他直截了当地告诉我，“现在供应商每一道都可以提供非常专业的服务，一般人很难比得过。”
          </p>
          <p>
            根据H团长的分享以及我的调研，我慢慢整理出了社区团购背后的供应链和销售模式。
          </p>
          <p>
            但在此之前，我需要搞明确团长的角色定位。社区团购的核心是预售+次日送达。商品大多卖的是蔬菜、水果、肉类、糕点、即食品等这些居民的日常刚需。所以团长本质上是个有私域流量的“社区带货人”，负责选品、宣传和售后。团长把信任他们的用户集中在一个群里，在群里发产品图和推介语，推动用户下单。
            用户下单后，团长把需求反馈给平台或商家。等货配送到小区的点位，团长会送至用户的家门口，有些团长也会设立一个小的自提点。
          </p>
          <p>
            其实这里暗藏了很多因素：用户对团长的信任、稳定靠谱的供应链以及私域社群的运营。
          </p>
          <p>
            社区团购在我们的生活里出现已久。它的出现不是偶然，而是互联网和社区零售发展共同推动的结果。
            萌芽期2015-2017年，社区团长的雏形已经出现。当时各种微信群盛行，一些微商在群里卖货，但规模较小，专业度也不高。
            成型期2018-2020年，社区团长真正成型。此时，第一代社区团购平台爆发，比如兴盛优选、同程生活、橙心优选、美团优选和多多买菜等。
            繁荣期2020-2021年，社区团长达到巅峰期。疫情使得线上买菜需求暴涨，团长数量和团长收入达到历史最高点。
            稳定期2022年至今，社区团购完成洗牌。在激烈的竞争下，疫情红利褪去，团长数量回归到正常值，专业化门槛在提高，社区团购也更成熟。
          </p>
          <p>
            “我们和客户之间最重要的是信任。他们信任我们的人品，信任我们挑选东西的能力，才愿意跟着我们买。”H团长说，“最开始建立信任的阶段，我宁肯少赚点钱。”
          </p>
          <p>
            那在这么一个小区生意里，信任会更容易建立吗？
          </p>
        </div>

        <Link
          href="/notes"
          className="inline-block mt-12 text-primary hover:underline transition-colors"
        >
          &larr; Back to Notes
        </Link>
      </article>
    </div>
  )
}
