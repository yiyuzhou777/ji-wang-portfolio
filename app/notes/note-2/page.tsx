import Link from 'next/link'

export default function Note2Page() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
      <article className="max-w-[640px]">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          My First Real Negotiation
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          December 13, 2025
        </p>

        <div className="text-[17px] leading-[1.9] text-foreground space-y-6">
          <p>
            H团长跟我差不多高，头型有点像好时巧克力，一条腿走路稍稍有些不灵活，看起来特别像港片里混黑的马仔。交流下来，我发现他身上融合着一股劲劲的匪气和义气。
          </p>
          <p>
            我们在小区的公共区域坐下。他掏出大茶杯和香烟，大茶杯底部沉着厚厚一层茶叶，香烟半包已经见底，看起来就是个喝茶大户、抽烟老手。我说我有鼻炎，我换个位置坐。于是，我们分坐在两个长椅上，开始这一次的合作谈判。
          </p>
          <p>
            我当时的底气只有两点：同价格里，我的质量最好；同质量里，我的价格最低。我也是这样告诉H团长的。
          </p>
          <p>
            但H团长显然更关心价格。他掏出他的手机给我看，说这是几个供应商给他的表单，电子表栏目众多，产品规格、细节、市场价、分享价、推荐价，密密麻麻。他大喝一口茶，坦言：“质量只要在一个层级，差别其实没那么明显。社区团购这边，第一看价格，第二才是质量。”我当时有点懵了，拿着他的手机左右滑来滑去，在心里盘算我到底有没有价格优势。
          </p>
          <p>
            他问我：“你是源头？还是厂？还是批发？是第几道拿货？”我说我是工厂直接拿货自己包装，工厂规模大，有自己的原材料果园。面对这种场面，我也在权衡什么该说，什么不该说。最后还是决定坦诚以待。
          </p>
          <p>
            H团长说：“你这样很难和走量的供应商比拼。供应商有低价，有专业物流、有售后。你这的价格其实已经被工厂赚了两道，一道原材料的利润，一道生产的利润。
          </p>
          <p>
            看我挺有兴趣，他猛吸一口烟，开始仔细跟我讲社区团购的模式，以及供应链是怎么运作的。
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
