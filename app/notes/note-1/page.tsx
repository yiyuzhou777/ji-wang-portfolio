import Link from 'next/link'

export default function Note1Page() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
      <article className="max-w-[640px]">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          Trying to Sell Nuts
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          December 11, 2025
        </p>

        <div className="text-[17px] leading-[1.9] text-foreground space-y-6">
          <p>
            我最近在研究做坚果生意。因为我老家有很多专做坚果的工厂，我从小吃到大，质量口味都放心。最近妈妈拿到工厂一批货的资源，我就萌生了试试看卖坚果的想法。
          </p>
          <p>
            关于拉新客，我第一反应想到或许可以和社区团购合作，毕竟团长直接面对的都是有实际需求的客户。考虑到团购价格和客户习惯，我选定了想主推的品类。想着先合作一单，了解流程后再多跑几个社区，把区域慢慢做大。
          </p>
          <p>
            有想法之后，我火速让妈妈寄了样品。
            为了心里有底，我把这个品类下面的所有产品的信息都过了一遍，包括它的产地、质量、规格、包装、损耗、物流和人工，全部算清楚，得出了我能接受的底价。
          </p>
          <p>
            我先联系了三位团长，其中两位反应冷淡，只有H团长比较客气，也愿意继续沟通。他和我聊产品、问来源、讨论价格。我提出第二天可以给他试吃样品，顺便谈谈方案，他很爽快就答应了。
          </p>
          <p>
            其实，我算个纯新手，面对这种见面谈合作的场合难免有些紧张。为了让自己不心虚，我当天又恶补了一堆坚果相关的知识，了解不同产地的品质差别，也查了造成品质差距的原因。我想着这些信息可以扩充我的知识面，让我说话更有底气，也能让对方觉得我是认真做事的人，增加对我的信任。
            见面前的时间，我又反复核算了价格，不停地确认产品图和包装信息等等。
          </p>
          <p>
            下午两点，是我和团长约好的时间。见面的时候也是颇为搞笑。我骑着电瓶车，团长的三轮车向我迎面开来，在交汇的那一刻我们同时刹车，打了个招呼。特别像港片里的镜头，只是更诙谐一些。
          </p>
          <p>
            而真正让我印象深刻的是团长接下来对我说的话。
          </p>
          <p>
            那几句让我知道，我其实很天真。
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
