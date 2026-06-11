const chapters = [
  {
    id: "structure",
    title: "玻璃结构与组成",
    subtitle: "从网络形成体、网络外体和中间体出发，理解氧化物为什么会同时改变熔制、料性和最终性能。",
    hook: "答“某氧化物有什么作用”时，固定按「高温助熔 / 低温积聚 / 含量过多的代价」三步展开。",
    points: [
      ["结构骨架", "SiO₄ 四面体通过桥氧连接；网络完整性决定粘度、膨胀与化学稳定性。"],
      ["双重作用", "小半径、高场强离子在高温下极化氧、削弱硅氧键，在低温下又会积聚并增强网络。"],
      ["桥氧与非桥氧", "桥氧多，网络更完整；非桥氧增多，网络断裂，熔体粘度通常下降。"],
      ["组成设计", "成分不是越多越好，需同时权衡析晶倾向、成本、料性、耐水性和电阻率。"]
    ],
    sources: ["第一章-1.2玻璃结构学说-1.4各种氧化物的作用（1）.pdf", "第一章 1.4(2)-1.6.pdf"],
    questions: [
      ["Li⁺ 在玻璃中的双重性是什么？氧化锂含量是否越多越好？", "高温下，Li⁺形成不对称中心，极化氧离子、削弱硅氧键，具有助熔作用；低温下因半径小、场强大而起积聚作用。\n氧化锂不能过多：场强大使玻璃更容易析晶，而且成本较高。", "组成作用"],
      ["解释 CaO 在玻璃中的双重性，并说明机械化生产时应如何调整其含量。", "高温时，CaO 提供游离氧，极化桥氧并削弱硅氧键，降低高温粘度和熔化温度；低温时则积聚、加强网络，使结构致密，阻碍 Na⁺ 迁移，提高耐水性和电阻率。\n机械化生产可适当增加 CaO，使料性变短，适应快速成形。", "组成作用"],
      ["SnO 为什么能帮助玻璃与 Au 封接？写出金属桥。", "金属桥可表示为：玻璃-O²⁻-1/2Sn⁴⁺-1/2Sn⁰-Au-1/2Sn⁰-1/2Sn⁴⁺-O²⁻-玻璃。\nSnO 具有不对称四方锥结构：靠近四个氧的一面近似 Sn⁴⁺ 核，远离氧的一面相当于富电子，因此能够在玻璃与金属之间形成过渡桥。", "封接"]
    ]
  },
  {
    id: "formation",
    title: "玻璃生成规律",
    subtitle: "把“能否形成玻璃”理解为热力学驱动力与动力学阻力的竞争，并联系冷却速度判断结构状态。",
    hook: "遇到急冷与慢冷比较题：急冷来不及调整 → 高温疏松结构被冻结 → 密度和弹模偏低、Tg 偏高。",
    points: [
      ["生成条件", "熔体冷却时若晶体成核和生长受抑制，结构会越过结晶过程而冻结为玻璃。"],
      ["动力学控制", "冷却速度越快、粘度增长越快，质点越难重排，越有利于形成玻璃。"],
      ["结构冻结", "玻璃转变不是固定熔点过程，最终状态依赖热历史。"],
      ["热历史效应", "相同组成也会因退火、淬火和保温制度不同而具有不同密度与性能。"]
    ],
    sources: ["第二章 玻璃的生成规律.pdf", "玻璃工艺学2025-2026（2）-1(1).pdf"],
    questions: [
      ["相同成分的急冷玻璃与慢冷玻璃相比，哪个密度更小？为什么？", "急冷玻璃密度更小。急冷时迅速越过退火温度区间，质点来不及达到平衡位置，高温疏松结构被保留下来，分子体积较大；慢冷时质点有足够时间调整，结构更致密，密度更大。", "热历史"]
    ]
  },
  {
    id: "phase",
    title: "相变、成核与析晶",
    subtitle: "掌握均匀/非均匀成核、晶体生长与微晶玻璃热处理制度之间的因果链。",
    hook: "析晶题抓两个旋钮：过冷度提供驱动力，粘度提供阻力；先成核、后长大，温区和保温时间决定晶粒数量与大小。",
    points: [
      ["非均匀成核", "依靠相界、晶界或缺陷成核；润湿角越小，成核自由能势垒越低。"],
      ["析晶因素", "温度、粘度、杂质与界面能共同影响成核和晶体生长。"],
      ["成核剂", "贵金属盐、高场强氧化物和氟化物分别通过金属微粒、分相或断网诱导成核。"],
      ["晶粒调控", "成核区长时间保温得到多而细的晶粒；成核少而生长区保温长则晶粒粗大。"]
    ],
    sources: ["第三章 3.1-3.3.pdf", "第三章 3.4-3.5.pdf"],
    questions: [
      ["什么是非均匀成核？润湿角如何影响其成核势垒？", "非均匀成核是依靠相界、晶界或基质缺陷等不均匀部位发生的成核。\nθ=0°完全润湿时，势垒因子为 0；θ=180°完全不润湿时，势垒与均匀成核相同；θ<180°时，非均匀成核势垒更小，因此更容易发生。θ=60°时约为均匀成核势垒的 1/6。", "成核"],
      ["影响玻璃结晶的主要因素有哪些？", "主要因素是温度、粘度、杂质和界面能。过冷度是析晶驱动力，粘度是析晶阻力；少量杂质可诱导成核、提高界面流动度；杂质与分相还可降低界面能，从而促进成核和晶体生长。", "析晶"],
      ["列举微晶玻璃常用成核剂，并说明其机理。", "① Au、Ag、Cu、Pt、Ru 等贵金属盐：低温还原并形成高度分散的金属晶粒，诱导析晶。\n② ZrO₂、TiO₂、P₂O₅ 等高场强氧化物：形成富集微区、钛酸盐液相或促进分相，诱导成核。\n③ CaF₂、冰晶石、氟硅酸钠、MgF₂ 等氟化物：F⁻取代 O²⁻使网络断裂，并在一定含量下分离形成细晶沉淀，促进成核。", "成核剂"],
      ["如何通过热处理控制微晶玻璃的晶粒大小？", "快速越过成核速率最大温区、在晶体生长速率最大温区长时间保温：晶核少，得到少而粗大的晶粒。\n在成核速率大而生长速率较小的温区进行热处理：形成多而细、均匀的微晶。", "晶粒调控"]
    ]
  },
  {
    id: "phase-separation",
    title: "分相与粘度",
    subtitle: "用结构连续性解释分相形貌与稳定性，用网络聚合程度解释粘度随温度和组成的变化。",
    hook: "分相先判断形貌：滴状包裹通常能保护不稳定相；连通结构会让不稳定相直接暴露，稳定性恶化。",
    points: [
      ["两类分相", "旋节分解连续、自发并形成连通结构；成核-生长需克服势垒，形成滴状或豆状分散相。"],
      ["稳定性影响", "化学稳定性不仅取决于组成，还取决于不稳定相是否连通并暴露于介质。"],
      ["温度与粘度", "高温使四面体群解聚、空隙增大，易穿插移动，粘度下降；低温则相反。"],
      ["O/Si 与粘度", "O/Si 上升意味着游离氧和非桥氧增多、网络连接降低，通常使粘度下降。"]
    ],
    sources: ["玻璃工艺学-第四章 玻璃的粘度和表面张力.pdf"],
    questions: [
      ["什么是玻璃分相？主要有哪两种类型？", "玻璃分相是玻璃在一定温度和组成范围内，自发分成两个或多个成分不同且互不混溶相的现象。\n旋节分解：成分波动连续增大、无明显相界，最终形成相互交织的连通结构。\n成核-生长：先形成不同成分的微小核心，再吸收周围物质长大，有明显相界并形成分散颗粒。", "分相"],
      ["比较旋节分解与成核-生长的机理和结构。", "旋节分解在 S 区自发进行：早期组成波动小但空间范围大，后期波动增大，形成连通结构。\n成核-生长在 N 区进行，需要克服势垒：早期局部浓度变化大但范围小，后期核心长大，形成滴状或豆状结构。", "分相"],
      ["为什么硼硅酸盐玻璃分相过强会导致化学稳定性突然恶化？", "若不稳定的富碱硼相以滴状分散并被稳定的富硅氧相包围，稳定性可提高；若两相形成连通结构，富碱硼相直接暴露在侵蚀介质中，化学稳定性就会突然恶化。应控制组成与热处理，避免不稳定相连通。", "稳定性"],
      ["从熔体结构解释温度变化对玻璃粘度的影响。", "高温时硅氧四面体群解聚，群间空隙大，小型结构单元易穿插移动，因此粘度下降；低温时四面体群缔结、网络变大、空隙减小，结构单元难移动，因此粘度升高。", "粘度"],
      ["从 O/Si 比解释碱金属和碱土金属氧化物对粘度的影响。", "O/Si 上升时游离氧增多、桥氧减少、网络连接程度下降，粘度降低。高温下 R⁺、R²⁺还会极化氧并削弱硅氧键；低温下迁移能力降低，尤其 R²⁺可能束缚多面体群并产生积聚作用，使低温粘度升高。", "粘度"]
    ]
  },
  {
    id: "mechanical-thermal",
    title: "力学与热学性能",
    subtitle: "把裂纹扩展、弹性模量、热膨胀与导热性统一到结构完整性、键力和热历史上。",
    hook: "性能比较题先找结构：越致密、键越强 → 弹模通常越高；断网越强 → 热膨胀通常越大。",
    points: [
      ["脆性断裂", "裂纹先缓慢增长形成镜面区，随后次生裂纹快速产生并形成辐射条纹。"],
      ["断裂韧度 Kc", "临界应力强度因子描述抗脆断能力；Kc 越大，越不容易发生失稳断裂。"],
      ["热膨胀", "断网组分通常使 α 上升，补网与网络形成体通常使 α 下降。"],
      ["导热与颜色", "深色玻璃透热能力差，池炉宜较浅，避免底层玻璃液供热不足。"]
    ],
    sources: ["8. 玻璃工艺学-第五章5.1.pdf", "玻璃工艺学-第10课时热学.pdf"],
    questions: [
      ["玻璃断裂分为哪两个阶段？", "第一阶段：初生裂纹缓慢增长，形成断裂表面的镜面部分。\n第二阶段：随初生裂纹增长，次生裂纹同时产生和扩展，相遇后形成以镜面为中心的辐射状碎裂条纹。", "力学"],
      ["Kc 是什么？表示什么意义？", "Kc 是临界条件下的应力强度因子，称为临界应力强度因子或断裂韧度，用于描述玻璃抗脆断能力。Kc 越小越易碎，越大抗脆断能力越强。", "力学"],
      ["比较相同组成退火玻璃与淬火玻璃的弹性模量。", "淬火玻璃的弹性模量低于退火玻璃。淬火冷却快，结构来不及调整，保留高温疏松结构，原子键力较弱；退火玻璃结构更致密、键力更强，弹性模量更高。", "力学"],
      ["分析玻璃中各种氧化物对热膨胀系数的影响。", "从网络完整性看，断网组分使 α 上升，补网组分使 α 下降。网络形成体一般使 α 下降；R₂O、RO 通常以断网作用为主；中间体在有足够游离氧时也可使 α 下降。总碱量不变时还需考虑混合碱效应。", "热学"],
      ["玻璃颜色如何影响导热及池炉设计？", "玻璃颜色越深，透热与导热能力越差，池炉深度方向温差更大。因此熔制深色玻璃时池炉通常应较浅，避免深层玻璃液得不到足够热量而难以熔化。", "热学"]
    ]
  },
  {
    id: "electrical-optical",
    title: "电学与光学性能",
    subtitle: "从离子迁移解释导电，从分子振动和电子跃迁区分红外与紫外吸收。",
    hook: "红外看“分子振动”，紫外看“电子激发”；桥氧多且键强，紫外吸收限向短波移动，透紫外更好。",
    points: [
      ["离子导电", "玻璃电导主要与可迁移离子的数量和迁移能力有关，温度升高通常使电导率升高。"],
      ["Tk100", "电导率达到规定值时的温度；Tk100 越高，一般表示室温电阻越高。"],
      ["红外吸收", "红外光与分子振动本征频率相近时产生共振吸收，可用于分析化学键与网络结构。"],
      ["紫外吸收", "紫外光引发价电子或束缚电子激发；氧离子极化率和与阳离子的结合力决定吸收限。"]
    ],
    sources: ["10. 玻璃工艺学-第六章 电磁学.pdf", "玻璃工艺学-第13课时光学.pdf", "玻璃工艺学-第14课时-1.pdf"],
    questions: [
      ["Tk100 的含义是什么？", "Tk100 是温度上升时，玻璃电导率达到规定值（对应电阻率 100 MΩ·cm）时的温度。Tk100 越高，一般说明玻璃室温电阻越高。", "电学"],
      ["红外光谱的本质是什么？在结构分析中有什么作用？", "本质是入射红外光频率与分子振子的本征振动频率相等或接近时产生共振吸收，属于分子光谱。根据红外吸收带可判断空间群、化学键特征及相互作用，是结构分析的重要工具。", "光学"],
      ["玻璃为什么会吸收红外光？红外光谱能提供哪些信息？", "玻璃的红外吸收源于红外光频率与结构中分子振动本征频率相近或相同而产生共振。红外光谱可用于分析玻璃中的键合方式和网络结构。", "光学"],
      ["玻璃为什么能吸收紫外线？桥氧如何影响紫外吸收？", "紫外光频率可与价电子或束缚电子本征频率重叠，引发电子激发，因此产生紫外吸收。桥氧多、Si-O 结合强时，电子激发需要更高能量，吸收限向短波移动，透紫外能力更好；非桥氧多时则相反。", "光学"],
      ["影响玻璃体积电导率的主要因素有哪些？", "主要因素包括化学组成、温度和热历史。\n组成方面：增加可迁移离子或削弱网络通常会提高电导率；混合碱效应会使电导率出现下降。\n温度升高时离子迁移能力增强，电导率上升；淬火玻璃结构较疏松、离子通道较宽，电导率通常高于退火玻璃。", "课件摘取 · 电磁学 P14-18"],
      ["玻璃表面电导率受哪些因素影响？", "玻璃表面电导率主要受环境湿度、表面成分和温度影响。相对湿度上升会使表面吸附水膜增厚，表面电导率升高；K₂O、Na₂O 等碱金属氧化物会增大表面电导率，而 CaO、MgO、BaO、PbO、Al₂O₃、SiO₂ 等可降低表面电导率；温度上升也会使其增大。", "课件摘取 · 电磁学 P21-23"],
      ["玻璃折射率与组成之间有什么关系？", "玻璃折射率主要取决于玻璃中离子的极化率和密度。离子半径增大、可极化性增强时，折射率通常增大；高价、小半径、极化率低的网络形成离子会使折射率降低。引入高极化率的重金属氧化物，通常能显著提高折射率。", "课件摘取 · 光学 P13-17"]
    ]
  },
  {
    id: "chemical",
    title: "化学稳定性",
    subtitle: "比较水、碱和大气侵蚀路径，抓住离子交换、网络破坏与表面膜三个关键词。",
    hook: "水先释碱、碱直接破网、水汽因不能及时稀释而越来越碱，所以水汽有时比水更凶。",
    points: [
      ["水侵蚀", "以 H⁺/Na⁺ 离子交换为速率控制步骤，表面形成贫碱层后反应逐渐减慢。"],
      ["碱侵蚀", "OH⁻在表面富集并直接攻击 Si-O-Si 网络，生成可溶或附着的硅酸盐。"],
      ["大气侵蚀", "水汽、CO₂、SOₓ 等共同作用，先形成水膜，再可能形成碱膜并破坏网络。"],
      ["水汽更强", "微小水膜无法及时带走释出的碱，pH 持续上升，侵蚀由释碱转为溶蚀。"]
    ],
    sources: ["玻璃工艺学-第11课时(1).pdf"],
    questions: [
      ["分析水对玻璃的侵蚀机理，以及侵蚀为何会逐渐停止。", "水侵蚀由 H⁺与玻璃中 Na⁺的离子交换起始，并引发后续反应；总速率受离子交换控制。随着表面层 Na⁺缺乏、R²⁺相对增多，二价离子对 Na⁺迁移的抑制增强，交换逐渐变慢，最终水侵蚀趋于停止。", "侵蚀"],
      ["分析碱对玻璃的侵蚀机理。", "阳离子先吸附在玻璃表面，使 OH⁻在附近富集；OH⁻攻击 Si-O-Si 网络，形成 Si-OH 并进一步转为硅酸离子；硅酸离子与阳离子生成盐，溶解度大则进入溶液，溶解度小则形成表面膜。", "侵蚀"],
      ["分析大气对玻璃的侵蚀机理。", "大气侵蚀是水汽、CO₂、SOₓ 等共同作用的结果。玻璃表面吸附水并形成 Si-OH 与水膜；若 R₂O 较多，水膜变为碱金属氢氧化物溶液并形成碱膜；碱膜继续吸附水和气体，并以碱侵蚀方式破坏网络。", "侵蚀"],
      ["为什么水汽有时比水对玻璃的侵蚀性更强？", "水溶液会持续稀释并带走玻璃释出的碱，表面 pH 变化不大；水汽形成的微小水滴不能及时移走碱，碱在水膜中累积，pH 快速升高，最终类似碱液侵蚀。过程由离子交换释碱逐步转为网络溶蚀。", "侵蚀"]
    ]
  },
  {
    id: "manufacturing",
    title: "熔制、成形与热处理",
    subtitle: "围绕工艺链梳理配合料熔化、澄清均化、成形温度制度，以及退火和淬火如何控制应力。",
    hook: "工艺题沿流程回答：原料反应与熔化 → 排泡澄清 → 均化 → 降温成形 → 退火消除应力 / 淬火引入压应力。",
    points: [
      ["熔制过程", "配合料经历加热、固相反应、熔化、澄清、均化与冷却，最终获得适合成形的玻璃液。"],
      ["成形窗口", "成形依赖合适粘度；温度过高难定形，过低则流动不足并易产生缺陷。"],
      ["退火", "在退火温度范围内消除或降低永久应力，避免制品在使用或加工中自裂。"],
      ["淬火/钢化", "快速冷却使表面先固化并形成压应力层，从而提高机械强度和热稳定性。"]
    ],
    sources: ["玻璃工艺学2025-2026（2）-熔制.pdf", "玻璃工艺学-玻璃的成形.pdf", "玻璃工艺学-退火和淬火.pdf"],
    questions: [
      ["为什么玻璃成形必须控制在合适的粘度范围？", "玻璃成形依靠熔体流动与定形能力的平衡。粘度过低时制品难以保持形状；粘度过高时流动和充模困难，还会增加表面与内部缺陷。不同成形方法对应不同的适宜粘度窗口。", "工艺综合"],
      ["退火和淬火对玻璃应力与性能的作用有何不同？", "退火通过在适宜温区保温和缓慢冷却，使结构与温度梯度逐步均衡，消除或减小永久应力；淬火通过快速冷却使表面形成压应力、内部形成拉应力，以提高强度和抗热冲击能力。", "工艺综合"],
      ["玻璃熔制过程通常分为哪五个阶段？", "通常分为五个阶段：①硅酸盐形成；②玻璃液形成；③澄清；④均化；⑤冷却。\n硅酸盐形成阶段完成主要固相反应；玻璃液形成阶段使未熔颗粒继续溶解；澄清排除可见气泡；均化消除成分和温度不均；冷却使玻璃液达到成形所需粘度。", "课件摘取 · 熔制 P28-33"],
      ["排除玻璃液中可见气泡有哪些主要方法？", "主要有化学澄清和物理澄清。\n化学澄清：加入硫酸盐、多价氧化物、卤化物等澄清剂，产生或释放气体，促进小气泡长大上浮。\n物理澄清：降低玻璃液粘度、机械搅拌、鼓泡、超声或减压等，以加快气泡排出。", "课件摘取 · 缺陷课件 P2-8"],
      ["玻璃液产生不均匀的原因有哪些？促进均化的因素是什么？", "不均匀的主要原因包括：配合料不均匀、耐火材料被侵蚀、熔化制度不稳定、玻璃液层热传递差，以及熔窑加热和冷却不均。\n促进均化主要依靠不均匀体自身溶解、扩散和对流；温差引起的自然对流、机械搅拌、鼓泡等都能强化均化。", "课件摘取 · 缺陷课件 P9-18"],
      ["玻璃成形制度主要控制哪些工艺参数？", "成形制度主要控制成形温度、各个操作工序的持续时间，以及冷却介质和模具的温度。核心依据是玻璃的粘度-温度关系和粘度-时间关系；温度过高难以定形，温度过低则操作困难。", "课件摘取 · 成形 P11-18"],
      ["玻璃退火工艺分为哪几个阶段？", "一般包括四个阶段：①加热阶段，使制品达到退火温度；②均热阶段，使温度均匀并消除应力；③慢冷阶段，以较慢速度通过退火温度区；④快冷阶段，在不会产生过大新应力的前提下加快冷却。", "课件摘取 · 退火淬火 P15-19"],
      ["淬火玻璃有哪些主要特点？影响淬火效果的工艺因素有哪些？", "淬火玻璃的机械强度和热稳定性明显提高，破坏时通常碎成无尖锐棱角的小颗粒，但不能再进行切割等机械加工。\n影响因素包括淬火温度、冷却介质与冷却强度、制品厚度和形状、玻璃组成等。", "课件摘取 · 退火淬火 P22-29"]
    ]
  },
  {
    id: "defects",
    title: "玻璃缺陷与综合诊断",
    subtitle: "把缺陷按气泡、结石、条纹和应力分类，并从原料、熔制、均化、成形和退火各环节倒推原因。",
    hook: "缺陷分析固定用“五段排查”：原料 → 熔化 → 澄清 → 均化 → 成形/退火，并写出对应控制措施。",
    points: [
      ["气泡", "与配合料气体、澄清不足、耐火材料反应或二次气泡有关。"],
      ["结石", "来自未熔原料、耐火材料侵蚀产物或析晶，属于固体夹杂。"],
      ["条纹与节瘤", "反映玻璃液成分或结构不均匀，通常与均化不足、温度波动或耐火材料侵蚀有关。"],
      ["应力缺陷", "冷却不均与退火制度不当会产生残余应力，导致光学畸变、强度下降甚至自裂。"]
    ],
    sources: ["玻璃工艺学2025-2026（2）-玻璃的缺陷.pdf", "玻璃工艺学2025-2026（2）-2(1).pdf"],
    questions: [
      ["分析玻璃缺陷时，如何建立系统诊断思路？", "先按形态判断属于气泡、固体夹杂、条纹/节瘤还是应力缺陷；再沿原料、熔化、澄清、均化、成形和退火流程追溯来源；最后针对温度制度、停留时间、配方、设备与操作提出控制措施。", "缺陷诊断"],
      ["玻璃中的气泡按产生原因可分为哪些类型？如何防止一次气泡？", "气泡按产生原因可分为一次气泡、二次气泡、耐火材料气泡、外界空气气泡和金属铁引起的气泡等。\n防止一次气泡应严格遵守配料与熔制制度，调整熔制制度并改变澄清剂种类和用量，必要时调整玻璃成分以降低粘度和表面张力。", "课件摘取 · 缺陷 P23-30"],
      ["玻璃中的结石主要分为哪些类型？各自来源是什么？", "主要包括：①配合料结石，由未熔化原料形成；②耐火材料结石，由窑炉耐火材料受侵蚀、剥落或反应形成；③玻璃液析晶结石，由玻璃液在一定温度范围内析晶形成。判断时应结合结石外观、组成和所在位置追溯来源。", "课件摘取 · 缺陷 P31-38"],
      ["玻璃条纹和节瘤是什么？常见成因有哪些？", "条纹和节瘤都是与主体玻璃成分或结构不同的玻璃态夹杂物：条纹通常呈线状，节瘤通常呈块状。\n常见成因包括配合料不均匀、窑碹或耐火材料侵蚀、玻璃液发生析晶，以及熔制和均化不足。", "课件摘取 · 缺陷 P39-42"]
    ]
  }
];

const state = {
  chapter: localStorage.getItem("glass-current-chapter") || chapters[0].id,
  view: "overview",
  mode: "sequence",
  cardIndex: 0,
  cardOrder: [],
  revealed: false,
  progress: JSON.parse(localStorage.getItem("glass-review-progress") || "{}")
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const currentChapter = () => chapters.find((c) => c.id === state.chapter) || chapters[0];
const questionId = (chapter, index) => `${chapter.id}-${index}`;

function saveProgress() {
  localStorage.setItem("glass-review-progress", JSON.stringify(state.progress));
  localStorage.setItem("glass-current-chapter", state.chapter);
}

function allQuestions() {
  return chapters.flatMap((chapter) => chapter.questions.map((q, index) => ({ chapter, q, index })));
}

function renderNav() {
  $("#chapterNav").innerHTML = chapters.map((chapter, index) => `
    <button class="chapter-link ${chapter.id === state.chapter ? "active" : ""}" data-chapter="${chapter.id}">
      <span class="num">${String(index + 1).padStart(2, "0")}</span>
      <span class="title">${chapter.title}</span>
      <span class="count">${chapter.questions.length}题</span>
    </button>`).join("");
  $$(".chapter-link").forEach((button) => button.addEventListener("click", () => selectChapter(button.dataset.chapter)));
}

function renderChapter() {
  const chapter = currentChapter();
  const chapterIndex = chapters.findIndex((c) => c.id === chapter.id);
  $("#chapterNumber").textContent = `CHAPTER ${String(chapterIndex + 1).padStart(2, "0")}`;
  $("#chapterTitle").textContent = chapter.title;
  $("#chapterSubtitle").textContent = chapter.subtitle;
  $("#chapterQuestionCount").textContent = chapter.questions.length;
  $("#memoryHook").textContent = chapter.hook;
  $("#keyPoints").innerHTML = chapter.points.map((point, index) => `
    <article class="key-point">
      <span class="index">0${index + 1} / KEY POINT</span>
      <h3>${point[0]}</h3>
      <p>${point[1]}</p>
    </article>`).join("");
  $("#sourceList").innerHTML = chapter.sources.map((source) => `
    <a class="source-item" href="./pdfs/${encodeURIComponent(source)}" target="_blank">
      <span class="pdf-badge">PDF</span>
      <strong>${source.replace(".pdf", "")}</strong>
      <small>打开压缩版 ↗</small>
    </a>`).join("");
  buildCardOrder();
  renderCard();
  renderNav();
  renderProgress();
}

function buildCardOrder() {
  const chapter = currentChapter();
  let order = chapter.questions.map((_, index) => index);
  if (state.mode === "shuffle") order = order.sort(() => Math.random() - .5);
  if (state.mode === "review") order = order.filter((index) => state.progress[questionId(chapter, index)] === "review");
  state.cardOrder = order;
  state.cardIndex = Math.min(state.cardIndex, Math.max(0, order.length - 1));
  state.revealed = false;
}

function renderCard() {
  const chapter = currentChapter();
  const index = state.cardOrder[state.cardIndex];
  const empty = index === undefined;
  $("#flashcard").classList.toggle("empty", empty);
  if (empty) {
    $("#questionText").textContent = state.mode === "review" ? "本章暂时没有待回炉题目。" : "本章没有题目。";
    $("#answerText").textContent = "切换到顺序模式继续复习。";
    $("#cardTag").textContent = "EMPTY";
    $("#cardStatus").textContent = "—";
    $("#cardPosition").textContent = "0 / 0";
    $("#answerSide").classList.remove("visible");
    return;
  }
  const [question, answer, tag] = chapter.questions[index];
  const id = questionId(chapter, index);
  const status = state.progress[id];
  $("#questionText").textContent = question;
  $("#answerText").textContent = answer;
  $("#cardTag").textContent = tag;
  $("#cardStatus").textContent = status === "mastered" ? "已掌握" : status === "review" ? "待回炉" : "未标记";
  $("#cardPosition").textContent = `${state.cardIndex + 1} / ${state.cardOrder.length}`;
  $("#answerSide").classList.toggle("visible", state.revealed);
  $("#revealButton").textContent = state.revealed ? "收起答案" : "点击翻面看答案";
  $("#markMasteredButton").classList.toggle("selected", status === "mastered");
  $("#markReviewButton").classList.toggle("selected", status === "review");
}

function renderProgress() {
  const questions = allQuestions();
  const mastered = questions.filter(({ chapter, index }) => state.progress[questionId(chapter, index)] === "mastered").length;
  const review = questions.filter(({ chapter, index }) => state.progress[questionId(chapter, index)] === "review").length;
  const percent = questions.length ? Math.round(mastered / questions.length * 100) : 0;
  $("#masteredCount").textContent = mastered;
  $("#reviewCount").textContent = review;
  $("#progressPercent").textContent = `${percent}%`;
  $("#progressBar").style.width = `${percent}%`;
}

function selectChapter(id) {
  state.chapter = id;
  state.cardIndex = 0;
  saveProgress();
  renderChapter();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectView(view) {
  state.view = view;
  $$(".view-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  $$(".view").forEach((panel) => panel.classList.toggle("active", panel.id === `${view}View`));
}

function stepCard(direction) {
  if (!state.cardOrder.length) return;
  state.cardIndex = (state.cardIndex + direction + state.cardOrder.length) % state.cardOrder.length;
  state.revealed = false;
  renderCard();
}

function markCard(status) {
  const chapter = currentChapter();
  const index = state.cardOrder[state.cardIndex];
  if (index === undefined) return;
  state.progress[questionId(chapter, index)] = status;
  saveProgress();
  renderProgress();
  if (state.mode === "review" && status === "mastered") {
    buildCardOrder();
    renderCard();
  } else {
    renderCard();
    window.setTimeout(() => stepCard(1), 260);
  }
}

function openSearch() {
  $("#searchDialog").showModal();
  $("#searchInput").value = "";
  $("#searchResults").innerHTML = `<p class="empty">输入关键词，快速定位知识点和题目。</p>`;
  window.setTimeout(() => $("#searchInput").focus(), 50);
}

function search(query) {
  const term = query.trim().toLowerCase();
  if (!term) {
    $("#searchResults").innerHTML = `<p class="empty">输入关键词，快速定位知识点和题目。</p>`;
    return;
  }
  const results = allQuestions().filter(({ chapter, q }) =>
    `${chapter.title} ${chapter.subtitle} ${q.join(" ")}`.toLowerCase().includes(term)
  ).slice(0, 30);
  $("#searchResults").innerHTML = results.length ? results.map(({ chapter, q, index }) => `
    <button class="search-result" data-chapter="${chapter.id}" data-index="${index}">
      <strong>${q[0]}</strong>
      <small>${chapter.title} · ${q[2]}</small>
    </button>`).join("") : `<p class="empty">没有找到相关内容，换个关键词试试。</p>`;
  $$(".search-result").forEach((button) => button.addEventListener("click", () => {
    state.chapter = button.dataset.chapter;
    state.mode = "sequence";
    state.cardIndex = Number(button.dataset.index);
    renderChapter();
    selectView("cards");
    $("#searchDialog").close();
  }));
}

function bindEvents() {
  $$(".view-tab").forEach((tab) => tab.addEventListener("click", () => selectView(tab.dataset.view)));
  $$(".mode-switch button").forEach((button) => button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    $$(".mode-switch button").forEach((b) => b.classList.toggle("active", b === button));
    state.cardIndex = 0;
    buildCardOrder();
    renderCard();
  }));
  $("#startChapterButton").addEventListener("click", () => selectView("cards"));
  $("#revealButton").addEventListener("click", () => { state.revealed = !state.revealed; renderCard(); });
  $("#prevButton").addEventListener("click", () => stepCard(-1));
  $("#nextButton").addEventListener("click", () => stepCard(1));
  $("#markReviewButton").addEventListener("click", () => markCard("review"));
  $("#markMasteredButton").addEventListener("click", () => markCard("mastered"));
  $("#searchButton").addEventListener("click", openSearch);
  $("#searchInput").addEventListener("input", (event) => search(event.target.value));
  $("#resetButton").addEventListener("click", () => {
    if (confirm("确定清空全部背题进度吗？")) {
      state.progress = {};
      saveProgress();
      renderChapter();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !$("#searchDialog").open) { event.preventDefault(); openSearch(); }
    if ($("#searchDialog").open) return;
    if (event.code === "Space" && state.view === "cards") { event.preventDefault(); state.revealed = !state.revealed; renderCard(); }
    if (event.key === "ArrowRight" && state.view === "cards") stepCard(1);
    if (event.key === "ArrowLeft" && state.view === "cards") stepCard(-1);
  });
}

bindEvents();
renderChapter();
