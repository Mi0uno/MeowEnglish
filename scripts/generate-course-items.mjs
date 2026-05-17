import { createWriteStream, existsSync, statSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const ecdictPath = process.env.ECDICT_CSV ?? join(tmpdir(), "meowenglish-ecdict.csv");
const outputPath = join(rootDir, "src", "data", "courseItems.json");
const ecdictUrl = "https://raw.githubusercontent.com/skywind3000/ECDICT/master/ecdict.csv";

const dailyPrompts = {
  queue: "队列；排队等候",
  routine: "常规；例行程序",
  budget: "预算",
  receipt: "收据；小票",
  deadline: "截止日期",
  schedule: "日程；安排",
  appointment: "预约；约会",
  grocery: "食品杂货",
  laundry: "洗衣物；洗衣店",
  commute: "通勤",
  platform: "站台；平台",
  transfer: "转移；换乘",
  refund: "退款",
  discount: "折扣",
  coupon: "优惠券",
  wallet: "钱包",
  battery: "电池；电量",
  charger: "充电器",
  signal: "信号",
  password: "密码",
  account: "账户",
  address: "地址",
  neighbor: "邻居",
  apartment: "公寓",
  elevator: "电梯",
  kitchen: "厨房",
  fridge: "冰箱",
  blanket: "毯子",
  umbrella: "伞",
  medicine: "药",
  clinic: "诊所",
  allergy: "过敏",
  fever: "发烧",
  cough: "咳嗽",
  headache: "头痛",
  traffic: "交通",
  corner: "角落；拐角",
  crosswalk: "人行横道",
  package: "包裹",
  delivery: "配送；快递",
  reservation: "预订",
  menu: "菜单",
  ingredient: "原料；成分",
  flavor: "味道；风味",
  spicy: "辣的",
  portion: "一份；部分",
  cashier: "收银员",
  customer: "顾客",
  manager: "经理",
  colleague: "同事",
  meeting: "会议",
  project: "项目",
  progress: "进展",
  feedback: "反馈",
  request: "请求",
  permission: "许可",
  document: "文件",
  folder: "文件夹",
  printer: "打印机",
  screen: "屏幕",
  keyboard: "键盘",
  volume: "音量",
  temperature: "温度",
  weather: "天气",
  season: "季节",
  holiday: "假期",
  ticket: "票",
  passport: "护照",
  luggage: "行李",
  airport: "机场",
  station: "车站",
  downtown: "市中心",
  suburb: "郊区",
  entrance: "入口",
  exit: "出口",
  direction: "方向；指示",
  distance: "距离",
  nearby: "附近的",
  available: "可用的；有空的",
  convenient: "方便的",
  comfortable: "舒适的",
  necessary: "必要的",
  possible: "可能的",
  simple: "简单的",
  careful: "小心的",
  polite: "礼貌的",
  patient: "耐心的",
  busy: "忙碌的",
  quiet: "安静的",
  safe: "安全的",
  clean: "干净的",
  fresh: "新鲜的",
  expensive: "昂贵的",
  cheap: "便宜的",
  ready: "准备好的",
  early: "早的",
  late: "晚的",
  again: "再一次",
  already: "已经",
  almost: "几乎",
  usually: "通常",
  sometimes: "有时",
  probably: "大概；可能",
  instead: "代替；反而",
  together: "一起",
  without: "没有",
  within: "在……之内",
};

const fallbackPrompts = {
  accountability: "问责；责任",
  accurately: "准确地",
  biodiversity: "生物多样性",
  coherent: "连贯的；一致的",
  empirical: "经验主义的；实证的",
  globalization: "全球化",
  gradually: "逐渐地",
  healthcare: "医疗保健",
  hypothesis: "假设",
  ideology: "意识形态",
  naturally: "自然地",
  outdoor: "户外的",
  renewable: "可再生的",
  sustain: "维持；支撑",
  sustainable: "可持续的",
  therefore: "因此",
  tourist: "游客",
  ultimate: "最终的",
  university: "大学",
};

const courseWordLists = {
  daily: Object.keys(dailyPrompts),
  builder: [
    "analyze", "accurate", "approach", "assume", "benefit", "challenge", "compare", "complex",
    "concept", "conclude", "consistent", "context", "contrast", "create", "criticize", "define",
    "depend", "describe", "detail", "develop", "effective", "emphasize", "encourage", "evidence",
    "explain", "factor", "feedback", "focus", "identify", "ignore", "illustrate", "impact",
    "improve", "include", "increase", "indicate", "influence", "interpret", "issue", "maintain",
    "method", "objective", "organize", "perspective", "policy", "predict", "process", "purpose",
    "reasonable", "reduce", "reflect", "relevant", "reliable", "require", "resource", "respond",
    "result", "significant", "solution", "specific", "structure", "support", "translate", "trend",
    "verify", "vocabulary", "weakness", "argument", "clarify", "distribution", "efficiency",
    "environmental", "fairness", "individual", "innovation", "logical", "mechanical", "privacy",
    "responsibility", "summary", "technology", "transition", "accurately", "gradually", "naturally",
    "directly", "therefore", "however", "although", "unless", "whether", "because", "instead",
    "within", "beyond", "toward", "throughout", "according", "despite", "during", "without",
  ],
  flow: [
    "actually", "advice", "agree", "arrange", "available", "brief", "certain", "choice",
    "comfortable", "complicated", "concern", "confirm", "consider", "continue", "conversation",
    "directly", "discuss", "explain", "follow", "general", "honest", "initial", "instead",
    "matter", "mention", "option", "perhaps", "point", "possible", "practical", "probably",
    "quickly", "realize", "reason", "remind", "reply", "request", "responsible", "seem",
    "simple", "suggest", "suppose", "surprise", "thought", "understand", "usually", "willing",
    "wonder", "accept", "adjust", "advance", "anyway", "basically", "clearly", "convenient",
    "decision", "definitely", "exactly", "example", "expect", "fault", "imagine", "information",
    "later", "maybe", "opinion", "otherwise", "prefer", "promise", "question", "ready",
    "situation", "specific", "tomorrow", "trouble", "message", "schedule", "meeting", "document",
    "problem", "solution", "detail", "change", "backup", "result", "accurate", "fair", "busy",
    "clear", "short", "another", "enough", "together", "before", "after", "during", "until",
    "while", "since", "if", "though", "unless", "whether", "because",
  ],
  cet4: [
    "ability", "absence", "absolute", "absorb", "academic", "accept", "access", "accident",
    "account", "achieve", "active", "actual", "adapt", "additional", "address", "advantage",
    "advertisement", "afford", "agency", "agreement", "agriculture", "allow", "alternative",
    "amazing", "analysis", "ancient", "announce", "anxiety", "appear", "application", "approach",
    "area", "arrange", "article", "aspect", "attempt", "attention", "attitude", "available",
    "average", "avoid", "background", "balance", "behavior", "benefit", "budget", "campus",
    "career", "challenge", "character", "community", "compare", "complete", "condition",
    "consider", "consumer", "continue", "control", "culture", "customer", "decision", "degree",
    "demand", "describe", "design", "detail", "develop", "direction", "economy", "education",
    "effect", "efficient", "effort", "energy", "environment", "especially", "event", "evidence",
    "experience", "factor", "failure", "familiar", "feature", "finance", "focus", "foreign",
    "formal", "frequent", "government", "habit", "healthy", "history", "identify", "improve",
    "include", "increase", "individual", "industry", "influence", "information", "international",
    "knowledge", "language", "local", "major", "method", "modern", "necessary", "normal",
    "opportunity", "particular", "policy", "population", "positive", "possible", "practice",
    "pressure", "private", "process", "public", "purpose", "quality", "reasonable", "relationship",
    "research", "resource", "result", "safety", "science", "service", "significant", "society",
    "solution", "special", "support", "technology", "traditional", "transport", "valuable",
  ],
  cet6: [
    "abnormal", "abolish", "abrupt", "abstract", "absurd", "abundance", "abuse", "accelerate",
    "accessible", "accommodation", "accountability", "accumulate", "accurate", "acknowledge",
    "adaptation", "adequate", "advocate", "affection", "agenda", "aggressive", "allocate",
    "ambiguous", "analyst", "anticipate", "apparent", "appreciate", "appropriate", "architecture",
    "artificial", "assembly", "assess", "asset", "assumption", "atmosphere", "authority",
    "automation", "capability", "category", "cognitive", "collapse", "colleague", "commercial",
    "commitment", "commodity", "competitor", "comprehensive", "concentrate", "concept",
    "concerning", "concrete", "conduct", "conflict", "consequence", "conservative", "considerable",
    "consistent", "constitute", "consultant", "consumer", "contemporary", "context", "contract",
    "controversy", "corporate", "criterion", "critical", "curriculum", "deficit", "demonstrate",
    "depression", "dimension", "discourse", "diverse", "dominant", "dramatic", "economic",
    "efficient", "elite", "emerge", "emission", "enterprise", "environmental", "equivalent",
    "ethnic", "evaluate", "evolution", "excessive", "explicit", "flexible", "framework",
    "fundamental", "heritage", "historic", "immigration", "incentive", "incorporate", "inevitable",
    "infrastructure", "innovation", "institution", "interaction", "interpretation", "investment",
    "legitimate", "mechanism", "migration", "motivation", "narrative", "negotiate", "objective",
    "orientation", "participant", "perception", "phenomenon", "potential", "privacy", "psychology",
    "publication", "regulation", "reliable", "representation", "sector", "significant", "strategy",
    "substantial", "sustainable", "transition", "vulnerable",
  ],
  kaoyan: [
    "abandon", "abide", "abolish", "abound", "abstract", "absurd", "academic", "accelerate",
    "acknowledge", "acquire", "adapt", "adequate", "adjust", "advocate", "agenda", "aggressive",
    "allocate", "alternative", "ambiguous", "analysis", "annual", "anticipate", "apparent",
    "approach", "appropriate", "argument", "assess", "assumption", "authority", "available",
    "benefit", "capacity", "challenge", "circumstance", "civilization", "cognitive", "coherent",
    "coincide", "collapse", "commitment", "commodity", "compensate", "complex", "comprehensive",
    "concept", "concrete", "conduct", "confirm", "conflict", "consequence", "considerable",
    "consistent", "constitute", "context", "controversy", "conventional", "cooperation", "critical",
    "culture", "decline", "define", "demonstrate", "derive", "dimension", "discipline", "discourse",
    "distinct", "diversity", "dominant", "economic", "effect", "efficient", "emerge", "emphasis",
    "empirical", "encounter", "enhance", "ensure", "equivalent", "essential", "evaluate", "evidence",
    "evolution", "excessive", "explicit", "factor", "framework", "fundamental", "heritage",
    "hypothesis", "identity", "ideology", "impact", "implication", "individual", "inevitable",
    "innovation", "institution", "integrate", "interpret", "justify", "legitimate", "maintain",
    "mechanism", "objective", "phenomenon", "policy", "potential", "principle", "perspective",
    "rational", "reflect", "relevant", "reliable", "resource", "significant", "society", "specific",
    "strategy", "structure", "substantial", "sustain", "theory", "transition", "ultimate",
  ],
  ielts: [
    "accommodation", "accessible", "advertisement", "agriculture", "alternative", "authority",
    "available", "benefit", "biodiversity", "campaign", "challenge", "charity", "climate",
    "commercial", "communication", "community", "conservation", "considerable", "consumer",
    "convenient", "cooperation", "crime", "cultural", "culture", "development", "digital",
    "diversity", "economic", "economy", "education", "educational", "elderly", "emission",
    "employment", "energy", "environment", "environmental", "essential", "evidence", "facility",
    "festival", "financial", "flexible", "global", "government", "habitat", "health", "heritage",
    "housing", "impact", "individual", "industry", "inequality", "infrastructure", "innovation",
    "international", "investment", "language", "literature", "majority", "media", "medical",
    "migration", "minority", "modern", "museum", "network", "opportunity", "policy", "pollution",
    "population", "poverty", "practical", "privacy", "professional", "public", "recycle",
    "regulation", "reliable", "renewable", "research", "resource", "responsible", "rural",
    "security", "significant", "solution", "sustainable", "technology", "tourism", "traditional",
    "traffic", "transport", "trend", "urban", "vehicle", "volunteer", "waste", "water", "wildlife",
    "academic", "automation", "career", "data", "efficient", "globalization", "healthcare",
    "industrial", "local", "percent", "potential", "private", "quality", "survey", "teenager",
    "tourist", "university",
  ],
};

const sentenceSets = {
  daily: [
    ["请把这张收据放进钱包里。", "Please put this receipt in your wallet."],
    ["我需要在截止日期前完成这个项目。", "I need to finish this project before the deadline."],
    ["今天早上的交通比平时更糟。", "The traffic was worse than usual this morning."],
    ["你可以帮我改一下日程吗？", "Could you help me change the schedule?"],
    ["这家诊所离地铁站很近。", "This clinic is close to the subway station."],
    ["我想预约明天下午。", "I would like to make an appointment for tomorrow afternoon."],
    ["如果商品有问题，我可以退款吗？", "Can I get a refund if there is a problem with the product?"],
    ["请在入口附近等我。", "Please wait for me near the entrance."],
    ["我的手机快没电了。", "My phone is almost out of battery."],
    ["这把伞是你的吗？", "Is this umbrella yours?"],
    ["我通常下班后去买食品杂货。", "I usually buy groceries after work."],
    ["你需要先输入账户密码。", "You need to enter the account password first."],
    ["这份菜单上有素食选择吗？", "Are there any vegetarian options on this menu?"],
    ["这道菜有点辣，但味道很好。", "This dish is a little spicy, but the flavor is good."],
    ["我把文件放在同一个文件夹里了。", "I put the documents in the same folder."],
    ["请把打印机连接到这台电脑。", "Please connect the printer to this computer."],
    ["他给了我很多有用的反馈。", "He gave me a lot of useful feedback."],
    ["这条路晚上很安静也很安全。", "This road is quiet and safe at night."],
    ["我们需要一个更简单的解决办法。", "We need a simpler solution."],
    ["她很有耐心地解释了方向。", "She explained the directions patiently."],
    ["我把包裹寄到了你的地址。", "I sent the package to your address."],
    ["今天的天气适合在市中心散步。", "The weather is good for walking downtown today."],
    ["请提前准备好护照和机票。", "Please prepare your passport and ticket in advance."],
    ["这个公寓有电梯和干净的厨房。", "This apartment has an elevator and a clean kitchen."],
    ["如果你感觉发烧，就早点休息。", "If you have a fever, get some rest early."],
    ["我们在站台换乘下一班车。", "We will transfer to the next train on the platform."],
    ["这家店的折扣今天晚上结束。", "The discount at this store ends tonight."],
    ["我没有带充电器，所以需要借一个。", "I did not bring a charger, so I need to borrow one."],
    ["请把音量调低一点。", "Please turn the volume down a little."],
    ["他正在和经理讨论项目进展。", "He is discussing the project progress with the manager."],
    ["我们可以一起核对这份文件。", "We can check this document together."],
    ["附近有比较便宜的餐厅吗？", "Is there a cheaper restaurant nearby?"],
    ["我可能会晚十分钟到。", "I will probably be ten minutes late."],
    ["这张优惠券只能在周末使用。", "This coupon can only be used on weekends."],
    ["她礼貌地拒绝了这个请求。", "She politely refused the request."],
    ["我需要得到许可才能进入办公室。", "I need permission to enter the office."],
    ["请在拐角处的人行横道过马路。", "Please cross the road at the crosswalk on the corner."],
    ["这个房间的温度刚刚好。", "The temperature in this room is just right."],
    ["我们已经预订了机场附近的酒店。", "We have already booked a hotel near the airport."],
    ["没有雨伞出门可能不太方便。", "It may not be convenient to go out without an umbrella."],
    ["请把剩下的食物放进冰箱。", "Please put the leftover food in the fridge."],
    ["我正在排队等收银员。", "I am waiting in line for the cashier."],
    ["这个问题需要更仔细地检查。", "This problem needs to be checked more carefully."],
    ["我的同事今天很忙。", "My colleague is very busy today."],
    ["郊区的房租通常比市中心便宜。", "Rent in the suburbs is usually cheaper than downtown."],
    ["这个入口关闭了，请走另一个出口。", "This entrance is closed, so please use another exit."],
    ["你可以把屏幕调亮一点吗？", "Could you make the screen a little brighter?"],
    ["我需要一条毯子，因为房间有点冷。", "I need a blanket because the room is a bit cold."],
    ["这份工作需要良好的沟通。", "This job requires good communication."],
    ["我们差不多准备好了。", "We are almost ready."],
  ],
  builder: [
    ["我们需要先分析数据，再做决定。", "We need to analyze the data before making a decision."],
    ["持续练习可以提高翻译准确度。", "Consistent practice can improve translation accuracy."],
    ["这个计划取决于预算和时间。", "This plan depends on the budget and the schedule."],
    ["良好的沟通能减少误解。", "Good communication can reduce misunderstandings."],
    ["公司应该保护用户隐私。", "Companies should protect user privacy."],
    ["这项政策可能会影响年轻人的就业。", "This policy may affect employment for young people."],
    ["我们不能忽视空气污染带来的风险。", "We cannot ignore the risks caused by air pollution."],
    ["老师鼓励学生提出不同观点。", "The teacher encourages students to express different opinions."],
    ["这张图表说明了过去五年的变化。", "This chart illustrates the changes over the past five years."],
    ["越来越多的人选择远程工作。", "More and more people choose to work remotely."],
    ["这个例子证明了耐心的重要性。", "This example proves the importance of patience."],
    ["政府需要为公共交通投入更多资金。", "The government needs to invest more money in public transportation."],
    ["我们应该把复杂问题拆成小步骤。", "We should break complex problems into small steps."],
    ["过度使用手机会分散注意力。", "Excessive phone use can distract attention."],
    ["这份报告强调了教育公平。", "This report emphasizes educational fairness."],
    ["如果缺少证据，结论就不够可靠。", "If evidence is missing, the conclusion is not reliable enough."],
    ["城市生活既方便，也可能有压力。", "City life is convenient, but it can also be stressful."],
    ["她试图用简单的语言解释这个概念。", "She tried to explain the concept in simple language."],
    ["团队合作通常比单独行动更有效。", "Teamwork is often more effective than working alone."],
    ["这个应用帮助学习者记录进度。", "This app helps learners record their progress."],
    ["我们必须考虑长期影响。", "We must consider the long-term impact."],
    ["文化差异会影响人们的沟通方式。", "Cultural differences can influence how people communicate."],
    ["这项技术让在线学习更加灵活。", "This technology makes online learning more flexible."],
    ["读英文新闻可以扩大词汇量。", "Reading English news can expand your vocabulary."],
    ["健康的习惯来自每天的小选择。", "Healthy habits come from small daily choices."],
    ["他把主要原因总结成三点。", "He summarized the main reasons in three points."],
    ["如果交通拥堵，我们就改坐地铁。", "If the traffic is heavy, we will take the subway instead."],
    ["很多家庭正在减少不必要的开支。", "Many families are reducing unnecessary expenses."],
    ["环境保护需要个人和社会共同努力。", "Environmental protection requires efforts from both individuals and society."],
    ["这个问题比我们想象的更严重。", "This problem is more serious than we expected."],
    ["请把这句话翻译成自然的英文。", "Please translate this sentence into natural English."],
    ["稳定的输入练习能训练语感。", "Steady typing practice can train language intuition."],
    ["我们应该避免机械地背答案。", "We should avoid memorizing answers mechanically."],
    ["作者在文章中提出了一个反例。", "The author presents a counterexample in the article."],
    ["这个决定反映了公众的担忧。", "This decision reflects public concern."],
    ["学习者需要及时复习常错词。", "Learners need to review frequently missed words in time."],
    ["有效的反馈能帮助我们发现薄弱点。", "Effective feedback helps us identify weak points."],
    ["短句可以逐渐组合成长句。", "Short sentences can gradually be combined into longer ones."],
    ["不要因为一次错误就否定自己的进步。", "Do not deny your progress because of one mistake."],
    ["我们可以用表格比较两种方案。", "We can compare the two plans with a table."],
    ["这个系统根据错误次数安排复习。", "This system schedules reviews based on the number of mistakes."],
    ["保持清晰比使用复杂词更重要。", "Being clear is more important than using complex words."],
    ["翻译时要注意时态和语序。", "When translating, pay attention to tense and word order."],
    ["经济压力会改变消费习惯。", "Economic pressure can change spending habits."],
    ["公共资源应该被合理分配。", "Public resources should be distributed reasonably."],
    ["这次讨论帮助我们澄清了目标。", "This discussion helped us clarify the goal."],
    ["人工智能正在改变语言学习方式。", "Artificial intelligence is changing the way people learn languages."],
    ["练习的目的不是速度，而是稳定。", "The purpose of practice is not speed but consistency."],
    ["我们需要把想法转化成可执行计划。", "We need to turn ideas into an actionable plan."],
    ["这个观点缺少足够的背景信息。", "This view lacks enough background information."],
  ],
  flow: [
    ["说实话，我还没准备好。", "To be honest, I am not ready yet."],
    ["我明白你的意思，但我有点担心。", "I see your point, but I am a little worried."],
    ["我们先从最简单的部分开始吧。", "Let us start with the simplest part first."],
    ["听起来不错，我愿意试试看。", "That sounds good, and I am willing to give it a try."],
    ["你能再解释一遍吗？", "Could you explain it one more time?"],
    ["我刚才没听清最后一句。", "I did not catch the last sentence."],
    ["我同意大方向，但细节还需要调整。", "I agree with the general direction, but the details still need adjustment."],
    ["这取决于我们有多少时间。", "It depends on how much time we have."],
    ["如果你方便的话，我们下午聊。", "If it is convenient for you, we can talk this afternoon."],
    ["我会尽快给你回复。", "I will get back to you as soon as possible."],
    ["别担心，我们可以一步一步来。", "Do not worry; we can take it step by step."],
    ["我需要一点时间考虑。", "I need some time to think about it."],
    ["这个方法对我来说很有效。", "This method works well for me."],
    ["我不确定这样做是否合适。", "I am not sure whether this is appropriate."],
    ["你说的有道理。", "What you said makes sense."],
    ["我们换个角度看这个问题。", "Let us look at this problem from another angle."],
    ["我现在有点忙，稍后联系你。", "I am a bit busy now, so I will contact you later."],
    ["谢谢你提醒我这个细节。", "Thank you for reminding me of this detail."],
    ["我可以帮你检查一遍。", "I can help you check it once."],
    ["这不是你的错。", "It is not your fault."],
    ["我会负责跟进这件事。", "I will be responsible for following up on this matter."],
    ["我们需要确认一下时间和地点。", "We need to confirm the time and place."],
    ["我觉得这个选择更实际。", "I think this option is more practical."],
    ["请直接告诉我你的想法。", "Please tell me your thoughts directly."],
    ["我担心这个方案成本太高。", "I am worried that this plan costs too much."],
    ["我们可以明天再继续。", "We can continue tomorrow."],
    ["这个问题已经解决了吗？", "Has this problem been solved?"],
    ["我还需要补充一点。", "I need to add one more point."],
    ["这件事比我预期的复杂。", "This is more complicated than I expected."],
    ["我会把重点写下来。", "I will write down the key points."],
    ["如果有变化，请提前告诉我。", "If anything changes, please tell me in advance."],
    ["我现在理解你的选择了。", "I understand your choice now."],
    ["我们最好保持沟通。", "We had better keep in touch."],
    ["我可以接受这个安排。", "I can accept this arrangement."],
    ["我们还有别的选择吗？", "Do we have any other options?"],
    ["这只是我的初步想法。", "This is just my initial idea."],
    ["我想听听你的建议。", "I would like to hear your advice."],
    ["我们先别急着下结论。", "Let us not rush to a conclusion."],
    ["这个结果让我有点意外。", "This result is a little surprising to me."],
    ["我需要确认信息是否准确。", "I need to confirm whether the information is accurate."],
    ["你可以把文件发给我吗？", "Could you send me the document?"],
    ["我们在会议后再决定。", "We will decide after the meeting."],
    ["我认为问题出在沟通上。", "I think the problem lies in communication."],
    ["这对每个人都更公平。", "This is fairer for everyone."],
    ["请给我一个明确的例子。", "Please give me a clear example."],
    ["我会尽量保持简短。", "I will try to keep it brief."],
    ["我们需要一个备用计划。", "We need a backup plan."],
    ["这个决定可能会影响后续工作。", "This decision may affect the following work."],
    ["我很高兴你能理解。", "I am glad that you understand."],
    ["我们今天就先到这里。", "Let us stop here for today."],
  ],
  cet4: [
    ["大学生应该培养独立思考的能力。", "College students should develop the ability to think independently."],
    ["越来越多的人关注环境保护。", "More and more people pay attention to environmental protection."],
    ["良好的习惯会影响我们的学习效果。", "Good habits can affect the results of our study."],
    ["学校应该为学生提供更多实践机会。", "Schools should provide students with more practical opportunities."],
    ["这个社区需要更安全的公共空间。", "This community needs safer public spaces."],
    ["互联网让信息传播得更快。", "The Internet allows information to spread faster."],
    ["教育在社会发展中起着重要作用。", "Education plays an important role in social development."],
    ["我们应该学会合理安排时间。", "We should learn to arrange our time reasonably."],
    ["这项研究解释了睡眠和记忆的关系。", "This study explains the relationship between sleep and memory."],
    ["年轻人需要面对经济压力。", "Young people need to face economic pressure."],
    ["公共交通可以减少城市污染。", "Public transportation can reduce pollution in cities."],
    ["团队合作有助于解决复杂问题。", "Teamwork helps solve complex problems."],
    ["我们必须重视食品安全。", "We must attach importance to food safety."],
    ["这次活动吸引了许多当地居民。", "This event attracted many local residents."],
    ["阅读可以拓宽我们的视野。", "Reading can broaden our view of the world."],
    ["手机已经成为日常生活的一部分。", "Mobile phones have become part of daily life."],
    ["志愿服务能增强责任感。", "Volunteer service can strengthen a sense of responsibility."],
    ["政府应该支持绿色能源。", "The government should support green energy."],
    ["每个人都可以为社会做出贡献。", "Everyone can make a contribution to society."],
    ["清晰的目标能提高学习效率。", "Clear goals can improve learning efficiency."],
    ["我们应该尊重不同的文化。", "We should respect different cultures."],
    ["这个问题需要立即处理。", "This issue needs to be dealt with immediately."],
    ["互联网给传统教育带来了挑战。", "The Internet has brought challenges to traditional education."],
    ["学生应该积极参加课堂讨论。", "Students should actively take part in class discussions."],
    ["这本书记录了城市的历史。", "This book records the history of the city."],
    ["合理的计划可以减少浪费。", "A reasonable plan can reduce waste."],
    ["他用简单的语言解释了这个观点。", "He explained this point in simple language."],
    ["这份工作要求良好的沟通能力。", "This job requires good communication skills."],
    ["保护水资源对未来很重要。", "Protecting water resources is important for the future."],
    ["我们应该保持积极的态度。", "We should keep a positive attitude."],
  ],
  cet6: [
    ["技术创新正在重塑就业市场。", "Technological innovation is reshaping the job market."],
    ["公共政策应该考虑长期社会影响。", "Public policy should consider long-term social impacts."],
    ["数据隐私已经成为数字时代的重要议题。", "Data privacy has become an important issue in the digital age."],
    ["这项研究揭示了消费行为的变化。", "This research reveals changes in consumer behavior."],
    ["企业需要在效率和公平之间取得平衡。", "Enterprises need to balance efficiency and fairness."],
    ["媒体叙事会影响公众对事件的理解。", "Media narratives can influence public understanding of events."],
    ["城市规划应当关注弱势群体的需求。", "Urban planning should address the needs of vulnerable groups."],
    ["气候变化要求各国采取协调行动。", "Climate change requires coordinated action from different countries."],
    ["教育资源分配不均会扩大社会差距。", "Unequal distribution of educational resources can widen social gaps."],
    ["自动化提高了生产率，也带来了新的挑战。", "Automation improves productivity but also brings new challenges."],
    ["学术写作需要清晰的结构和可靠证据。", "Academic writing requires clear structure and reliable evidence."],
    ["文化遗产保护离不开社区参与。", "The protection of cultural heritage depends on community participation."],
    ["公共卫生危机会考验社会治理能力。", "A public health crisis tests the capacity of social governance."],
    ["可持续发展不能只依赖技术方案。", "Sustainable development cannot rely only on technological solutions."],
    ["收入差距可能削弱社会信任。", "Income inequality may weaken social trust."],
    ["网络平台应该承担更多社会责任。", "Online platforms should take more social responsibility."],
    ["这份报告对现有制度提出了批评。", "This report criticizes the existing system."],
    ["人口老龄化会改变医疗需求。", "Population aging will change medical needs."],
    ["跨文化交流需要尊重和耐心。", "Cross-cultural communication requires respect and patience."],
    ["研究人员需要避免片面的结论。", "Researchers need to avoid one-sided conclusions."],
    ["过度消费会增加环境负担。", "Excessive consumption increases the environmental burden."],
    ["数字工具可以提升公共服务的可及性。", "Digital tools can improve access to public services."],
    ["社会转型往往伴随着价值冲突。", "Social transition is often accompanied by conflicts of values."],
    ["有效监管可以减少市场风险。", "Effective regulation can reduce market risks."],
    ["这个案例说明了制度设计的重要性。", "This case illustrates the importance of institutional design."],
    ["企业形象会影响消费者信任。", "Corporate image can affect consumer trust."],
    ["城市更新不能忽视原有居民。", "Urban renewal should not ignore original residents."],
    ["心理健康问题需要更公开的讨论。", "Mental health issues need more open discussion."],
    ["国际合作有助于应对全球挑战。", "International cooperation helps address global challenges."],
    ["批判性思维能帮助我们识别偏见。", "Critical thinking helps us identify bias."],
  ],
  kaoyan: [
    ["从长远来看，教育公平关系到社会流动。", "In the long run, educational fairness is related to social mobility."],
    ["作者认为技术进步并不必然带来幸福。", "The author argues that technological progress does not necessarily bring happiness."],
    ["我们需要从历史视角理解这一现象。", "We need to understand this phenomenon from a historical perspective."],
    ["充分的证据可以增强论证的说服力。", "Sufficient evidence can strengthen the persuasiveness of an argument."],
    ["个人选择往往受到社会环境的限制。", "Individual choices are often limited by the social environment."],
    ["阅读能力的提高依赖长期积累。", "The improvement of reading ability depends on long-term accumulation."],
    ["经济增长不应以环境破坏为代价。", "Economic growth should not come at the cost of environmental damage."],
    ["这段文字强调了公共责任的重要性。", "This passage emphasizes the importance of public responsibility."],
    ["我们应该警惕看似合理的简单解释。", "We should be alert to simple explanations that seem reasonable."],
    ["社会变化会改变人们对成功的定义。", "Social change can alter people's definition of success."],
    ["理性的讨论需要概念清晰。", "Rational discussion requires conceptual clarity."],
    ["研究结论必须接受事实检验。", "Research conclusions must be tested by facts."],
    ["过度竞争可能削弱合作精神。", "Excessive competition may weaken the spirit of cooperation."],
    ["制度安排会影响个人行为。", "Institutional arrangements influence individual behavior."],
    ["语言学习需要输入和输出结合。", "Language learning requires a combination of input and output."],
    ["这幅图反映了人们对效率的追求。", "This picture reflects people's pursuit of efficiency."],
    ["文化传统在现代社会仍有价值。", "Cultural traditions still have value in modern society."],
    ["我们不能把复杂现实简化成单一原因。", "We cannot reduce complex reality to a single cause."],
    ["公共讨论应当建立在事实基础上。", "Public discussion should be based on facts."],
    ["真正的创新通常来自持续的努力。", "True innovation usually comes from continuous effort."],
    ["社会信任是合作的重要前提。", "Social trust is an important premise of cooperation."],
    ["教育的目的不只是传授知识。", "The purpose of education is not only to transmit knowledge."],
    ["个体经验能够补充宏观分析。", "Individual experience can supplement macro-level analysis."],
    ["我们需要评估政策的实际效果。", "We need to evaluate the practical effects of the policy."],
    ["信息过载会降低判断质量。", "Information overload can reduce the quality of judgment."],
    ["传统观念并不一定阻碍进步。", "Traditional ideas do not necessarily prevent progress."],
    ["写作时要避免空泛的表达。", "In writing, avoid empty and vague expressions."],
    ["社会问题往往需要多方面解决。", "Social problems often require solutions from multiple sides."],
    ["人们对风险的感知会影响决策。", "People's perception of risk affects decision-making."],
    ["长期坚持比短期热情更可靠。", "Long-term persistence is more reliable than short-term enthusiasm."],
  ],
  ielts: [
    ["许多城市正在投资可持续基础设施。", "Many cities are investing in sustainable infrastructure."],
    ["公共交通可以让城市更加宜居。", "Public transport can make cities more livable."],
    ["文化多样性能够丰富校园生活。", "Cultural diversity can enrich campus life."],
    ["游客应该尊重当地传统。", "Tourists should respect local traditions."],
    ["远程办公减少了通勤时间。", "Remote work reduces commuting time."],
    ["可再生能源有助于减少碳排放。", "Renewable energy helps reduce carbon emissions."],
    ["政府应当让医疗服务更容易获得。", "Governments should make medical services more accessible."],
    ["广告会影响年轻人的消费习惯。", "Advertising can influence young people's spending habits."],
    ["住在市中心通常更方便但更昂贵。", "Living in the city center is usually more convenient but more expensive."],
    ["博物馆可以帮助人们理解历史。", "Museums can help people understand history."],
    ["在线课程为成年人提供了灵活选择。", "Online courses offer flexible options for adults."],
    ["保护野生动物需要国际合作。", "Protecting wildlife requires international cooperation."],
    ["现代农业应该减少对环境的压力。", "Modern agriculture should reduce pressure on the environment."],
    ["大学应该帮助学生发展实践技能。", "Universities should help students develop practical skills."],
    ["高房价会给年轻家庭带来压力。", "High housing prices put pressure on young families."],
    ["志愿活动可以增强社区联系。", "Volunteer activities can strengthen community ties."],
    ["数字媒体改变了人们获取新闻的方式。", "Digital media has changed how people get news."],
    ["旅游业能创造就业，也可能破坏环境。", "Tourism can create jobs, but it may also damage the environment."],
    ["良好的城市设计应当照顾老人和儿童。", "Good urban design should consider both the elderly and children."],
    ["学习第二语言能带来更多职业机会。", "Learning a second language can bring more career opportunities."],
    ["许多人认为工作和生活的平衡很重要。", "Many people believe that work-life balance is important."],
    ["学校可以通过项目学习培养创造力。", "Schools can develop creativity through project-based learning."],
    ["塑料垃圾已经成为全球问题。", "Plastic waste has become a global problem."],
    ["科技让跨国交流更加便捷。", "Technology makes international communication more convenient."],
    ["政府和个人都应该为环保负责。", "Both governments and individuals should be responsible for environmental protection."],
    ["城市绿地可以改善居民健康。", "Urban green spaces can improve residents' health."],
    ["贫困会限制儿童接受教育的机会。", "Poverty can limit children's access to education."],
    ["公共图书馆仍然是重要的学习空间。", "Public libraries remain important learning spaces."],
    ["合理的费用能让更多人参加课程。", "Reasonable fees allow more people to attend courses."],
    ["一些传统节日正在吸引国际关注。", "Some traditional festivals are attracting international attention."],
  ],
};

function parseCsv(content) {
  const rows = [];
  let field = "";
  let row = [];
  let quoted = false;

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index];
    const next = content[index + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const [headers, ...records] = rows;
  return records.map((record) => Object.fromEntries(headers.map((header, index) => [header, record[index] ?? ""])));
}

function cleanTranslation(value) {
  const pieces = [];
  value.split("\n").forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line || line.startsWith("[")) return;
    const withoutPartOfSpeech = line
      .replace(/^[A-Za-z. ]+\s+/, "")
      .replace(/\[[^\]]+\]\s*/g, "")
      .replace("[网络]", "");
    withoutPartOfSpeech.split(/[;,；，]/).forEach((rawPiece) => {
      const piece = rawPiece.trim().replace(/[.;；,，]+$/g, "");
      if (piece && !piece.includes("网络") && !piece.includes("[")) pieces.push(piece);
    });
  });

  return Array.from(new Set(pieces)).slice(0, 4).join("；");
}

function parseInteger(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 999_999;
}

async function downloadEcdict() {
  if (existsSync(ecdictPath) && statSync(ecdictPath).size > 1_000_000) return;
  await mkdir(dirname(ecdictPath), { recursive: true });
  const response = await fetch(ecdictUrl);
  if (!response.ok || !response.body) {
    throw new Error(`Failed to download ECDICT: HTTP ${response.status}`);
  }

  const writer = createWriteStream(ecdictPath);
  await new Promise((resolve, reject) => {
    response.body.pipeTo(new WritableStream({
      write(chunk) {
        writer.write(Buffer.from(chunk));
      },
      close() {
        writer.end(resolve);
      },
      abort(error) {
        writer.destroy(error);
        reject(error);
      },
    })).catch(reject);
  });
}

function buildDictionary(rows) {
  const dictionary = new Map();
  rows.forEach((row) => {
    const word = row.word?.trim();
    const promptZh = cleanTranslation(row.translation ?? "");
    if (!word || !promptZh) return;
    dictionary.set(word.toLowerCase(), {
      word,
      promptZh,
      phonetic: row.phonetic?.trim() ?? "",
      tags: (row.tag ?? "").split(/\s+/).filter(Boolean),
      frq: parseInteger(row.frq ?? ""),
      bnc: parseInteger(row.bnc ?? ""),
      collins: parseInteger(row.collins ?? ""),
    });
  });
  return dictionary;
}

function isPracticeWord(entry) {
  return /^[A-Za-z][A-Za-z-]*$/.test(entry.word) && entry.word.length <= 28;
}

function selectTaggedWords(dictionary, primaryTags, options = {}) {
  const { minCount, supplementalTags = [] } = options;
  const byRank = (left, right) =>
    left.frq - right.frq ||
    left.bnc - right.bnc ||
    left.word.localeCompare(right.word);
  const hasAnyTag = (entry, tags) => tags.some((tag) => entry.tags.includes(tag));
  const selected = new Map();

  Array.from(dictionary.values())
    .filter((entry) => isPracticeWord(entry) && hasAnyTag(entry, primaryTags))
    .sort(byRank)
    .forEach((entry) => selected.set(entry.word.toLowerCase(), entry.word));

  if (minCount && selected.size < minCount) {
    Array.from(dictionary.values())
      .filter((entry) => isPracticeWord(entry) && hasAnyTag(entry, supplementalTags))
      .sort(byRank)
      .some((entry) => {
        selected.set(entry.word.toLowerCase(), entry.word);
        return selected.size >= minCount;
      });
  }

  return Array.from(selected.values());
}

function buildWordItems(dictionary, prefix, words, tagLabel) {
  return words.map((word, index) => {
    const entry = dictionary.get(word.toLowerCase());
    const phonetic = entry?.phonetic ? `/${entry.phonetic}/` : undefined;
    const promptZh = dailyPrompts[word] ?? fallbackPrompts[word] ?? entry?.promptZh;
    if (!promptZh) throw new Error(`Missing translation for ${word}`);

    return {
      id: `${prefix}-w-${String(index + 1).padStart(3, "0")}`,
      kind: "word",
      promptZh,
      answerEn: word,
      ...(phonetic ? { phonetic } : {}),
      tags: [tagLabel, "word"],
    };
  });
}

function buildSentenceItems(prefix, sentences, tagLabel) {
  return sentences.map(([promptZh, answerEn], index) => ({
    id: `${prefix}-s-${String(index + 1).padStart(3, "0")}`,
    kind: "sentence",
    promptZh,
    answerEn,
    tags: [tagLabel, "sentence", "translation"],
  }));
}

async function main() {
  await downloadEcdict();
  const rows = parseCsv(await readFile(ecdictPath, "utf8"));
  const dictionary = buildDictionary(rows);
  const completeExamWordLists = {
    cet4: selectTaggedWords(dictionary, ["cet4"], { minCount: 4_000, supplementalTags: ["gk", "ielts"] }),
    cet6: selectTaggedWords(dictionary, ["cet6"], { minCount: 5_000, supplementalTags: ["ky", "toefl"] }),
    kaoyan: selectTaggedWords(dictionary, ["ky"], { minCount: 5_000, supplementalTags: ["cet6", "toefl"] }),
    ielts: selectTaggedWords(dictionary, ["ielts"], { minCount: 4_500, supplementalTags: ["toefl", "cet6"] }),
  };
  const resolvedWordLists = {
    ...courseWordLists,
    ...completeExamWordLists,
  };
  const courseItems = Object.fromEntries(
    Object.entries(resolvedWordLists).map(([key, words]) => {
      const prefix = key === "kaoyan" ? "kaoyan" : key;
      const tagLabel = {
        daily: "daily",
        builder: "builder",
        flow: "conversation",
        cet4: "CET4",
        cet6: "CET6",
        kaoyan: "考研",
        ielts: "IELTS",
      }[key];
      return [
        key,
        [
          ...buildWordItems(dictionary, prefix, words, tagLabel),
          ...buildSentenceItems(prefix, sentenceSets[key], tagLabel),
        ],
      ];
    }),
  );

  const counts = Object.entries(courseItems)
    .map(([key, items]) => {
      const words = items.filter((item) => item.kind === "word").length;
      return `// ${key}: ${words} words + ${items.length - words} sentences = ${items.length} items`;
    })
    .join("\n");

  await writeFile(outputPath, `${JSON.stringify(courseItems)}\n`, "utf8");
  console.log(counts);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
