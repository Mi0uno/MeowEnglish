import type { PracticeItem } from "../types";

// daily: 107 words + 50 sentences = 157 items
// builder: 101 words + 50 sentences = 151 items
// flow: 104 words + 50 sentences = 154 items
// cet4: 139 words + 30 sentences = 169 items
// cet6: 128 words + 30 sentences = 158 items
// kaoyan: 125 words + 30 sentences = 155 items
// ielts: 117 words + 30 sentences = 147 items
export const courseItems = {
  daily: [
    {
      id: "daily-w-001",
      kind: "word",
      promptZh: "队列；排队等候",
      answerEn: "queue",
      phonetic: "/kju:/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-002",
      kind: "word",
      promptZh: "常规；例行程序",
      answerEn: "routine",
      phonetic: "/ru:'ti:n/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-003",
      kind: "word",
      promptZh: "预算",
      answerEn: "budget",
      phonetic: "/'bʌdʒit/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-004",
      kind: "word",
      promptZh: "收据；小票",
      answerEn: "receipt",
      phonetic: "/ri'si:t/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-005",
      kind: "word",
      promptZh: "截止日期",
      answerEn: "deadline",
      phonetic: "/'dedlain/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-006",
      kind: "word",
      promptZh: "日程；安排",
      answerEn: "schedule",
      phonetic: "/'skedʒuәl/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-007",
      kind: "word",
      promptZh: "预约；约会",
      answerEn: "appointment",
      phonetic: "/ә'pɒintmәnt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-008",
      kind: "word",
      promptZh: "食品杂货",
      answerEn: "grocery",
      phonetic: "/'grәusәri/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-009",
      kind: "word",
      promptZh: "洗衣物；洗衣店",
      answerEn: "laundry",
      phonetic: "/'lɒ:ndri/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-010",
      kind: "word",
      promptZh: "通勤",
      answerEn: "commute",
      phonetic: "/kә'mju:t/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-011",
      kind: "word",
      promptZh: "站台；平台",
      answerEn: "platform",
      phonetic: "/'plætfɒ:m/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-012",
      kind: "word",
      promptZh: "转移；换乘",
      answerEn: "transfer",
      phonetic: "/træns'fә:/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-013",
      kind: "word",
      promptZh: "退款",
      answerEn: "refund",
      phonetic: "/'ri:fʌnd/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-014",
      kind: "word",
      promptZh: "折扣",
      answerEn: "discount",
      phonetic: "/'diskaunt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-015",
      kind: "word",
      promptZh: "优惠券",
      answerEn: "coupon",
      phonetic: "/'ku:pɒn/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-016",
      kind: "word",
      promptZh: "钱包",
      answerEn: "wallet",
      phonetic: "/'wɒlit/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-017",
      kind: "word",
      promptZh: "电池；电量",
      answerEn: "battery",
      phonetic: "/'bætәri/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-018",
      kind: "word",
      promptZh: "充电器",
      answerEn: "charger",
      phonetic: "/'tʃɑ:dʒә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-019",
      kind: "word",
      promptZh: "信号",
      answerEn: "signal",
      phonetic: "/'signl/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-020",
      kind: "word",
      promptZh: "密码",
      answerEn: "password",
      phonetic: "/'pæswә:d/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-021",
      kind: "word",
      promptZh: "账户",
      answerEn: "account",
      phonetic: "/ә'kaunt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-022",
      kind: "word",
      promptZh: "地址",
      answerEn: "address",
      phonetic: "/ә'dres/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-023",
      kind: "word",
      promptZh: "邻居",
      answerEn: "neighbor",
      phonetic: "/'neibә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-024",
      kind: "word",
      promptZh: "公寓",
      answerEn: "apartment",
      phonetic: "/ә'pɑ:tmәnt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-025",
      kind: "word",
      promptZh: "电梯",
      answerEn: "elevator",
      phonetic: "/'eliveitә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-026",
      kind: "word",
      promptZh: "厨房",
      answerEn: "kitchen",
      phonetic: "/'kitʃin/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-027",
      kind: "word",
      promptZh: "冰箱",
      answerEn: "fridge",
      phonetic: "/fridʒ/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-028",
      kind: "word",
      promptZh: "毯子",
      answerEn: "blanket",
      phonetic: "/'blæŋkit/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-029",
      kind: "word",
      promptZh: "伞",
      answerEn: "umbrella",
      phonetic: "/ʌm'brelә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-030",
      kind: "word",
      promptZh: "药",
      answerEn: "medicine",
      phonetic: "/'medisin/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-031",
      kind: "word",
      promptZh: "诊所",
      answerEn: "clinic",
      phonetic: "/'klinik/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-032",
      kind: "word",
      promptZh: "过敏",
      answerEn: "allergy",
      phonetic: "/'ælәdʒi/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-033",
      kind: "word",
      promptZh: "发烧",
      answerEn: "fever",
      phonetic: "/'fi:vә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-034",
      kind: "word",
      promptZh: "咳嗽",
      answerEn: "cough",
      phonetic: "/kɒf/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-035",
      kind: "word",
      promptZh: "头痛",
      answerEn: "headache",
      phonetic: "/'hedeik/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-036",
      kind: "word",
      promptZh: "交通",
      answerEn: "traffic",
      phonetic: "/'træfik/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-037",
      kind: "word",
      promptZh: "角落；拐角",
      answerEn: "corner",
      phonetic: "/'kɒ:nә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-038",
      kind: "word",
      promptZh: "人行横道",
      answerEn: "crosswalk",
      phonetic: "/'krɒswɒ:k/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-039",
      kind: "word",
      promptZh: "包裹",
      answerEn: "package",
      phonetic: "/'pækidʒ/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-040",
      kind: "word",
      promptZh: "配送；快递",
      answerEn: "delivery",
      phonetic: "/di'livәri/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-041",
      kind: "word",
      promptZh: "预订",
      answerEn: "reservation",
      phonetic: "/.rezә'veiʃәn/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-042",
      kind: "word",
      promptZh: "菜单",
      answerEn: "menu",
      phonetic: "/'menju:/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-043",
      kind: "word",
      promptZh: "原料；成分",
      answerEn: "ingredient",
      phonetic: "/in'gri:diәnt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-044",
      kind: "word",
      promptZh: "味道；风味",
      answerEn: "flavor",
      phonetic: "/'fleivә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-045",
      kind: "word",
      promptZh: "辣的",
      answerEn: "spicy",
      phonetic: "/'spaisi/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-046",
      kind: "word",
      promptZh: "一份；部分",
      answerEn: "portion",
      phonetic: "/'pɒ:ʃәn/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-047",
      kind: "word",
      promptZh: "收银员",
      answerEn: "cashier",
      phonetic: "/kæ'ʃiә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-048",
      kind: "word",
      promptZh: "顾客",
      answerEn: "customer",
      phonetic: "/'kʌstәmә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-049",
      kind: "word",
      promptZh: "经理",
      answerEn: "manager",
      phonetic: "/'mænidʒә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-050",
      kind: "word",
      promptZh: "同事",
      answerEn: "colleague",
      phonetic: "/'kɒli:g/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-051",
      kind: "word",
      promptZh: "会议",
      answerEn: "meeting",
      phonetic: "/'mi:tiŋ/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-052",
      kind: "word",
      promptZh: "项目",
      answerEn: "project",
      phonetic: "/'prɒdʒekt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-053",
      kind: "word",
      promptZh: "进展",
      answerEn: "progress",
      phonetic: "/'prәugres/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-054",
      kind: "word",
      promptZh: "反馈",
      answerEn: "feedback",
      phonetic: "/'fi:dbæk/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-055",
      kind: "word",
      promptZh: "请求",
      answerEn: "request",
      phonetic: "/ri'kwest/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-056",
      kind: "word",
      promptZh: "许可",
      answerEn: "permission",
      phonetic: "/pә'miʃәn/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-057",
      kind: "word",
      promptZh: "文件",
      answerEn: "document",
      phonetic: "/'dɒkjumәnt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-058",
      kind: "word",
      promptZh: "文件夹",
      answerEn: "folder",
      phonetic: "/'fәuldә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-059",
      kind: "word",
      promptZh: "打印机",
      answerEn: "printer",
      phonetic: "/'printә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-060",
      kind: "word",
      promptZh: "屏幕",
      answerEn: "screen",
      phonetic: "/skri:n/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-061",
      kind: "word",
      promptZh: "键盘",
      answerEn: "keyboard",
      phonetic: "/'ki:bɒ:d/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-062",
      kind: "word",
      promptZh: "音量",
      answerEn: "volume",
      phonetic: "/'vɒljum/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-063",
      kind: "word",
      promptZh: "温度",
      answerEn: "temperature",
      phonetic: "/'temprәtʃә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-064",
      kind: "word",
      promptZh: "天气",
      answerEn: "weather",
      phonetic: "/'weðә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-065",
      kind: "word",
      promptZh: "季节",
      answerEn: "season",
      phonetic: "/'si:zn/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-066",
      kind: "word",
      promptZh: "假期",
      answerEn: "holiday",
      phonetic: "/'hɒlәdi/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-067",
      kind: "word",
      promptZh: "票",
      answerEn: "ticket",
      phonetic: "/'tikit/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-068",
      kind: "word",
      promptZh: "护照",
      answerEn: "passport",
      phonetic: "/'pæspɒ:t/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-069",
      kind: "word",
      promptZh: "行李",
      answerEn: "luggage",
      phonetic: "/'lʌgidʒ/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-070",
      kind: "word",
      promptZh: "机场",
      answerEn: "airport",
      phonetic: "/'єәpɒ:t/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-071",
      kind: "word",
      promptZh: "车站",
      answerEn: "station",
      phonetic: "/'steiʃәn/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-072",
      kind: "word",
      promptZh: "市中心",
      answerEn: "downtown",
      phonetic: "/'daun'taun/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-073",
      kind: "word",
      promptZh: "郊区",
      answerEn: "suburb",
      phonetic: "/'sʌbә:b/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-074",
      kind: "word",
      promptZh: "入口",
      answerEn: "entrance",
      phonetic: "/'entrәns/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-075",
      kind: "word",
      promptZh: "出口",
      answerEn: "exit",
      phonetic: "/'eksit/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-076",
      kind: "word",
      promptZh: "方向；指示",
      answerEn: "direction",
      phonetic: "/di'rekʃәn/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-077",
      kind: "word",
      promptZh: "距离",
      answerEn: "distance",
      phonetic: "/'distәns/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-078",
      kind: "word",
      promptZh: "附近的",
      answerEn: "nearby",
      phonetic: "/'niәbai/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-079",
      kind: "word",
      promptZh: "可用的；有空的",
      answerEn: "available",
      phonetic: "/ә'veilәbl/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-080",
      kind: "word",
      promptZh: "方便的",
      answerEn: "convenient",
      phonetic: "/kәn'vi:njәnt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-081",
      kind: "word",
      promptZh: "舒适的",
      answerEn: "comfortable",
      phonetic: "/'kʌmfәtәbl/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-082",
      kind: "word",
      promptZh: "必要的",
      answerEn: "necessary",
      phonetic: "/'nesisәri/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-083",
      kind: "word",
      promptZh: "可能的",
      answerEn: "possible",
      phonetic: "/'pɒsәbl/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-084",
      kind: "word",
      promptZh: "简单的",
      answerEn: "simple",
      phonetic: "/'simpl/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-085",
      kind: "word",
      promptZh: "小心的",
      answerEn: "careful",
      phonetic: "/'kєәful/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-086",
      kind: "word",
      promptZh: "礼貌的",
      answerEn: "polite",
      phonetic: "/pә'lait/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-087",
      kind: "word",
      promptZh: "耐心的",
      answerEn: "patient",
      phonetic: "/'peiʃәnt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-088",
      kind: "word",
      promptZh: "忙碌的",
      answerEn: "busy",
      phonetic: "/'bizi/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-089",
      kind: "word",
      promptZh: "安静的",
      answerEn: "quiet",
      phonetic: "/'kwaiәt/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-090",
      kind: "word",
      promptZh: "安全的",
      answerEn: "safe",
      phonetic: "/seif/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-091",
      kind: "word",
      promptZh: "干净的",
      answerEn: "clean",
      phonetic: "/kli:n/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-092",
      kind: "word",
      promptZh: "新鲜的",
      answerEn: "fresh",
      phonetic: "/freʃ/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-093",
      kind: "word",
      promptZh: "昂贵的",
      answerEn: "expensive",
      phonetic: "/ik'spensiv/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-094",
      kind: "word",
      promptZh: "便宜的",
      answerEn: "cheap",
      phonetic: "/tʃi:p/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-095",
      kind: "word",
      promptZh: "准备好的",
      answerEn: "ready",
      phonetic: "/'redi/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-096",
      kind: "word",
      promptZh: "早的",
      answerEn: "early",
      phonetic: "/'ә:li/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-097",
      kind: "word",
      promptZh: "晚的",
      answerEn: "late",
      phonetic: "/leit/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-098",
      kind: "word",
      promptZh: "再一次",
      answerEn: "again",
      phonetic: "/ә'gein/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-099",
      kind: "word",
      promptZh: "已经",
      answerEn: "already",
      phonetic: "/ɒ:l'redi/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-100",
      kind: "word",
      promptZh: "几乎",
      answerEn: "almost",
      phonetic: "/'ɒ:lmәust/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-101",
      kind: "word",
      promptZh: "通常",
      answerEn: "usually",
      phonetic: "/'ju:ʒuәli/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-102",
      kind: "word",
      promptZh: "有时",
      answerEn: "sometimes",
      phonetic: "/'sʌmtaimz/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-103",
      kind: "word",
      promptZh: "大概；可能",
      answerEn: "probably",
      phonetic: "/'prɒbәbli/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-104",
      kind: "word",
      promptZh: "代替；反而",
      answerEn: "instead",
      phonetic: "/in'sted/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-105",
      kind: "word",
      promptZh: "一起",
      answerEn: "together",
      phonetic: "/tә'geðә/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-106",
      kind: "word",
      promptZh: "没有",
      answerEn: "without",
      phonetic: "/wi'ðaut/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-w-107",
      kind: "word",
      promptZh: "在……之内",
      answerEn: "within",
      phonetic: "/wi'ðin/",
      tags: [
        "daily",
        "word"
      ]
    },
    {
      id: "daily-s-001",
      kind: "sentence",
      promptZh: "请把这张收据放进钱包里。",
      answerEn: "Please put this receipt in your wallet.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-002",
      kind: "sentence",
      promptZh: "我需要在截止日期前完成这个项目。",
      answerEn: "I need to finish this project before the deadline.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-003",
      kind: "sentence",
      promptZh: "今天早上的交通比平时更糟。",
      answerEn: "The traffic was worse than usual this morning.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-004",
      kind: "sentence",
      promptZh: "你可以帮我改一下日程吗？",
      answerEn: "Could you help me change the schedule?",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-005",
      kind: "sentence",
      promptZh: "这家诊所离地铁站很近。",
      answerEn: "This clinic is close to the subway station.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-006",
      kind: "sentence",
      promptZh: "我想预约明天下午。",
      answerEn: "I would like to make an appointment for tomorrow afternoon.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-007",
      kind: "sentence",
      promptZh: "如果商品有问题，我可以退款吗？",
      answerEn: "Can I get a refund if there is a problem with the product?",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-008",
      kind: "sentence",
      promptZh: "请在入口附近等我。",
      answerEn: "Please wait for me near the entrance.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-009",
      kind: "sentence",
      promptZh: "我的手机快没电了。",
      answerEn: "My phone is almost out of battery.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-010",
      kind: "sentence",
      promptZh: "这把伞是你的吗？",
      answerEn: "Is this umbrella yours?",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-011",
      kind: "sentence",
      promptZh: "我通常下班后去买食品杂货。",
      answerEn: "I usually buy groceries after work.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-012",
      kind: "sentence",
      promptZh: "你需要先输入账户密码。",
      answerEn: "You need to enter the account password first.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-013",
      kind: "sentence",
      promptZh: "这份菜单上有素食选择吗？",
      answerEn: "Are there any vegetarian options on this menu?",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-014",
      kind: "sentence",
      promptZh: "这道菜有点辣，但味道很好。",
      answerEn: "This dish is a little spicy, but the flavor is good.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-015",
      kind: "sentence",
      promptZh: "我把文件放在同一个文件夹里了。",
      answerEn: "I put the documents in the same folder.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-016",
      kind: "sentence",
      promptZh: "请把打印机连接到这台电脑。",
      answerEn: "Please connect the printer to this computer.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-017",
      kind: "sentence",
      promptZh: "他给了我很多有用的反馈。",
      answerEn: "He gave me a lot of useful feedback.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-018",
      kind: "sentence",
      promptZh: "这条路晚上很安静也很安全。",
      answerEn: "This road is quiet and safe at night.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-019",
      kind: "sentence",
      promptZh: "我们需要一个更简单的解决办法。",
      answerEn: "We need a simpler solution.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-020",
      kind: "sentence",
      promptZh: "她很有耐心地解释了方向。",
      answerEn: "She explained the directions patiently.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-021",
      kind: "sentence",
      promptZh: "我把包裹寄到了你的地址。",
      answerEn: "I sent the package to your address.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-022",
      kind: "sentence",
      promptZh: "今天的天气适合在市中心散步。",
      answerEn: "The weather is good for walking downtown today.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-023",
      kind: "sentence",
      promptZh: "请提前准备好护照和机票。",
      answerEn: "Please prepare your passport and ticket in advance.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-024",
      kind: "sentence",
      promptZh: "这个公寓有电梯和干净的厨房。",
      answerEn: "This apartment has an elevator and a clean kitchen.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-025",
      kind: "sentence",
      promptZh: "如果你感觉发烧，就早点休息。",
      answerEn: "If you have a fever, get some rest early.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-026",
      kind: "sentence",
      promptZh: "我们在站台换乘下一班车。",
      answerEn: "We will transfer to the next train on the platform.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-027",
      kind: "sentence",
      promptZh: "这家店的折扣今天晚上结束。",
      answerEn: "The discount at this store ends tonight.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-028",
      kind: "sentence",
      promptZh: "我没有带充电器，所以需要借一个。",
      answerEn: "I did not bring a charger, so I need to borrow one.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-029",
      kind: "sentence",
      promptZh: "请把音量调低一点。",
      answerEn: "Please turn the volume down a little.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-030",
      kind: "sentence",
      promptZh: "他正在和经理讨论项目进展。",
      answerEn: "He is discussing the project progress with the manager.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-031",
      kind: "sentence",
      promptZh: "我们可以一起核对这份文件。",
      answerEn: "We can check this document together.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-032",
      kind: "sentence",
      promptZh: "附近有比较便宜的餐厅吗？",
      answerEn: "Is there a cheaper restaurant nearby?",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-033",
      kind: "sentence",
      promptZh: "我可能会晚十分钟到。",
      answerEn: "I will probably be ten minutes late.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-034",
      kind: "sentence",
      promptZh: "这张优惠券只能在周末使用。",
      answerEn: "This coupon can only be used on weekends.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-035",
      kind: "sentence",
      promptZh: "她礼貌地拒绝了这个请求。",
      answerEn: "She politely refused the request.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-036",
      kind: "sentence",
      promptZh: "我需要得到许可才能进入办公室。",
      answerEn: "I need permission to enter the office.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-037",
      kind: "sentence",
      promptZh: "请在拐角处的人行横道过马路。",
      answerEn: "Please cross the road at the crosswalk on the corner.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-038",
      kind: "sentence",
      promptZh: "这个房间的温度刚刚好。",
      answerEn: "The temperature in this room is just right.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-039",
      kind: "sentence",
      promptZh: "我们已经预订了机场附近的酒店。",
      answerEn: "We have already booked a hotel near the airport.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-040",
      kind: "sentence",
      promptZh: "没有雨伞出门可能不太方便。",
      answerEn: "It may not be convenient to go out without an umbrella.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-041",
      kind: "sentence",
      promptZh: "请把剩下的食物放进冰箱。",
      answerEn: "Please put the leftover food in the fridge.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-042",
      kind: "sentence",
      promptZh: "我正在排队等收银员。",
      answerEn: "I am waiting in line for the cashier.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-043",
      kind: "sentence",
      promptZh: "这个问题需要更仔细地检查。",
      answerEn: "This problem needs to be checked more carefully.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-044",
      kind: "sentence",
      promptZh: "我的同事今天很忙。",
      answerEn: "My colleague is very busy today.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-045",
      kind: "sentence",
      promptZh: "郊区的房租通常比市中心便宜。",
      answerEn: "Rent in the suburbs is usually cheaper than downtown.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-046",
      kind: "sentence",
      promptZh: "这个入口关闭了，请走另一个出口。",
      answerEn: "This entrance is closed, so please use another exit.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-047",
      kind: "sentence",
      promptZh: "你可以把屏幕调亮一点吗？",
      answerEn: "Could you make the screen a little brighter?",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-048",
      kind: "sentence",
      promptZh: "我需要一条毯子，因为房间有点冷。",
      answerEn: "I need a blanket because the room is a bit cold.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-049",
      kind: "sentence",
      promptZh: "这份工作需要良好的沟通。",
      answerEn: "This job requires good communication.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    },
    {
      id: "daily-s-050",
      kind: "sentence",
      promptZh: "我们差不多准备好了。",
      answerEn: "We are almost ready.",
      tags: [
        "daily",
        "sentence",
        "translation"
      ]
    }
  ],
  builder: [
    {
      id: "builder-w-001",
      kind: "word",
      promptZh: "分析；细察；分解\\n分析",
      answerEn: "analyze",
      phonetic: "/'ænәlaiz/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-002",
      kind: "word",
      promptZh: "正确的；精确的\\n准确的；精确的",
      answerEn: "accurate",
      phonetic: "/'ækjurәt/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-003",
      kind: "word",
      promptZh: "接近；入门\\nvt. 接近；近似；找...商量\\nvi. 靠近",
      answerEn: "approach",
      phonetic: "/ә'prәutʃ/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-004",
      kind: "word",
      promptZh: "假定；承担；呈现\\nvi. 装腔作势；僭越",
      answerEn: "assume",
      phonetic: "/ә'sju:m/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-005",
      kind: "word",
      promptZh: "利益\\nvt. 有益于\\nvi. 受益",
      answerEn: "benefit",
      phonetic: "/'benifit/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-006",
      kind: "word",
      promptZh: "挑战；盘问\\nvt. 向...挑战；要求；怀疑\\nvi. 挑战",
      answerEn: "challenge",
      phonetic: "/'tʃælindʒ/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-007",
      kind: "word",
      promptZh: "比较；比喻；对照\\nvi. 相比\\nn. 比较\\n比较",
      answerEn: "compare",
      phonetic: "/kәm'pєә/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-008",
      kind: "word",
      promptZh: "综合体；情结；络合物\\na. 复杂的；组合的",
      answerEn: "complex",
      phonetic: "/kәm'pleks/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-009",
      kind: "word",
      promptZh: "观念；概念\\n概念",
      answerEn: "concept",
      phonetic: "/'kɒnsept/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-010",
      kind: "word",
      promptZh: "结束；作结论；推断\\nvi. 结束；推断",
      answerEn: "conclude",
      phonetic: "/kәn'klu:d/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-011",
      kind: "word",
      promptZh: "一致的；坚持的；并立的；坚固的",
      answerEn: "consistent",
      phonetic: "/kәn'sistәnt/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-012",
      kind: "word",
      promptZh: "上下文；背景；来龙去脉\\nn. 上下文\\n上下文",
      answerEn: "context",
      phonetic: "/'kɒntekst/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-013",
      kind: "word",
      promptZh: "差别；对比；对照物\\nvt. 使对比\\nvi. 成对照\\n反差；对比度",
      answerEn: "contrast",
      phonetic: "/kәn'træst/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-014",
      kind: "word",
      promptZh: "创造；建造；引起；任命",
      answerEn: "create",
      phonetic: "/kri:'eit/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-015",
      kind: "word",
      promptZh: "批评；吹毛求疵；非难",
      answerEn: "criticize",
      phonetic: "/'kritisaiz/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-016",
      kind: "word",
      promptZh: "定义；规定；使明确\\n定义",
      answerEn: "define",
      phonetic: "/di'fain/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-017",
      kind: "word",
      promptZh: "靠；视...而定；信赖",
      answerEn: "depend",
      phonetic: "/di'pend/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-018",
      kind: "word",
      promptZh: "描述；描绘；画",
      answerEn: "describe",
      phonetic: "/di'skraib/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-019",
      kind: "word",
      promptZh: "细节；详情\\nvt. 详述；选派\\nvi. 画详图\\n详细数据",
      answerEn: "detail",
      phonetic: "/'di:teil/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-020",
      kind: "word",
      promptZh: "发展；使发达；进步；洗印",
      answerEn: "develop",
      phonetic: "/di'velәp/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-021",
      kind: "word",
      promptZh: "有效的；有力的；实际的\\nn. 有生力量",
      answerEn: "effective",
      phonetic: "/i'fektiv/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-022",
      kind: "word",
      promptZh: "强调；加强语气；着重",
      answerEn: "emphasize",
      phonetic: "/'emfәsaiz/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-023",
      kind: "word",
      promptZh: "鼓励；支持；激励\\n怂恿；煽动",
      answerEn: "encourage",
      phonetic: "/in'kʌridʒ/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-024",
      kind: "word",
      promptZh: "根据；证据；迹象\\n证据；凭证",
      answerEn: "evidence",
      phonetic: "/'evidәns/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-025",
      kind: "word",
      promptZh: "解释；说明",
      answerEn: "explain",
      phonetic: "/ik'splein/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-026",
      kind: "word",
      promptZh: "因素；因数；系数；基因",
      answerEn: "factor",
      phonetic: "/'fæktә/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-027",
      kind: "word",
      promptZh: "反馈",
      answerEn: "feedback",
      phonetic: "/'fi:dbæk/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-028",
      kind: "word",
      promptZh: "焦点；焦距\\nvi. 聚焦；注视\\nvt. 使聚焦；调焦",
      answerEn: "focus",
      phonetic: "/'fәukәs/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-029",
      kind: "word",
      promptZh: "识别；认为...等同于；确定；使参与\\nvi. 一致",
      answerEn: "identify",
      phonetic: "/ai'dentifai/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-030",
      kind: "word",
      promptZh: "不理睬；忽视；驳回；忽略\\n忽略",
      answerEn: "ignore",
      phonetic: "/ig'nɒ:/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-031",
      kind: "word",
      promptZh: "举例说明；作图解；阐明\\nvi. 举例说明",
      answerEn: "illustrate",
      phonetic: "/'ilәstreit/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-032",
      kind: "word",
      promptZh: "冲击；冲突；影响；效果\\nvt. 挤入",
      answerEn: "impact",
      phonetic: "/'impækt/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-033",
      kind: "word",
      promptZh: "改良；提高...的价值；改善；利用\\nvi. 变得更好",
      answerEn: "improve",
      phonetic: "/im'pru:v/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-034",
      kind: "word",
      promptZh: "包括；把...算入；包住\\nDOS内部命令:在CONFIG.SYS文件的一个配置块中包含另一配置块的内容",
      answerEn: "include",
      phonetic: "/in'klu:d/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-035",
      kind: "word",
      promptZh: "增加；增进；利益\\nvt. 增加；加大\\nvi. 增加",
      answerEn: "increase",
      phonetic: "/in'kri:s/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-036",
      kind: "word",
      promptZh: "显示；象征；指示；指出\\n指示",
      answerEn: "indicate",
      phonetic: "/'indikeit/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-037",
      kind: "word",
      promptZh: "影响力；权力；势力\\nvt. 影响；改变",
      answerEn: "influence",
      phonetic: "/'influәns/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-038",
      kind: "word",
      promptZh: "解释；演出；翻译；理解\\nvi. 翻译",
      answerEn: "interpret",
      phonetic: "/in'tә:prit/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-039",
      kind: "word",
      promptZh: "发行；问题；后果；流出",
      answerEn: "issue",
      phonetic: "/'isju/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-040",
      kind: "word",
      promptZh: "维持；维修；保持；坚持",
      answerEn: "maintain",
      phonetic: "/mein'tein/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-041",
      kind: "word",
      promptZh: "方法；办法；条理；秩序\\n法",
      answerEn: "method",
      phonetic: "/'meθәd/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-042",
      kind: "word",
      promptZh: "目的；目标；宗旨；宾格",
      answerEn: "objective",
      phonetic: "/әb'dʒektiv/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-043",
      kind: "word",
      promptZh: "组织；有机化；给予生机\\nvi. 组织起来",
      answerEn: "organize",
      phonetic: "/'ɒ:gәnaiz/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-044",
      kind: "word",
      promptZh: "远景；透视感；(观察问题的)视角；透视法",
      answerEn: "perspective",
      phonetic: "/pә'spektiv/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-045",
      kind: "word",
      promptZh: "政策；方针；策略；保险单\\n凭单",
      answerEn: "policy",
      phonetic: "/'pɒlisi/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-046",
      kind: "word",
      promptZh: "预知；预言；预报",
      answerEn: "predict",
      phonetic: "/pri'dikt/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-047",
      kind: "word",
      promptZh: "程序；进行；过程\\nvt. 加工；使...接受处理",
      answerEn: "process",
      phonetic: "/'prɒses/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-048",
      kind: "word",
      promptZh: "目的；意向；决心；用途",
      answerEn: "purpose",
      phonetic: "/'pә:pәs/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-049",
      kind: "word",
      promptZh: "合理的；明理的；适当的\\n合理的；公道的",
      answerEn: "reasonable",
      phonetic: "/'ri:znәbl/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-050",
      kind: "word",
      promptZh: "减少；分解；降低；使衰退",
      answerEn: "reduce",
      phonetic: "/ri'dju:s/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-051",
      kind: "word",
      promptZh: "反射；反映；招致；深思\\nvi. 被反射",
      answerEn: "reflect",
      phonetic: "/ri'flekt/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-052",
      kind: "word",
      promptZh: "有关联的；有关系的；适当的；相应的\\n有关的",
      answerEn: "relevant",
      phonetic: "/'relivәnt/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-053",
      kind: "word",
      promptZh: "可靠的；可信赖的\\n可靠的；可信赖的；确实的",
      answerEn: "reliable",
      phonetic: "/ri'laiәbl/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-054",
      kind: "word",
      promptZh: "需要；命令；要求\\n需要；要求",
      answerEn: "require",
      phonetic: "/ri'kwaiә/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-055",
      kind: "word",
      promptZh: "资源；财力；办法；策略",
      answerEn: "resource",
      phonetic: "/ri'sɒ:s/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-056",
      kind: "word",
      promptZh: "以...回答\\nvi. 回答；响应；回报；有反应",
      answerEn: "respond",
      phonetic: "/ri'spɒnd/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-057",
      kind: "word",
      promptZh: "结果；成绩；答案\\nvi. 产生；致使\\n结果",
      answerEn: "result",
      phonetic: "/ri'zʌlt/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-058",
      kind: "word",
      promptZh: "重要的；有效的；有含义的；暗示的",
      answerEn: "significant",
      phonetic: "/sig'nifikәnt/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-059",
      kind: "word",
      promptZh: "解决；解答；溶液\\n溶液",
      answerEn: "solution",
      phonetic: "/sә'lu:ʃәn/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-060",
      kind: "word",
      promptZh: "特效药；特性\\na. 特殊的；明确的；具有特效的",
      answerEn: "specific",
      phonetic: "/spi'sifik/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-061",
      kind: "word",
      promptZh: "结构；构造；建筑物\\nvt. 构成；组织",
      answerEn: "structure",
      phonetic: "/'strʌktʃә/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-062",
      kind: "word",
      promptZh: "支持；支撑；援助；供养",
      answerEn: "support",
      phonetic: "/sә'pɒ:t/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-063",
      kind: "word",
      promptZh: "翻译；解释；转化；转变为",
      answerEn: "translate",
      phonetic: "/træns'leit/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-064",
      kind: "word",
      promptZh: "趋势；倾向；走向\\nvi. 倾向；转向\\n趋势",
      answerEn: "trend",
      phonetic: "/trend/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-065",
      kind: "word",
      promptZh: "证明；查证；证实；检验",
      answerEn: "verify",
      phonetic: "/'verifai/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-066",
      kind: "word",
      promptZh: "词汇(量)；词汇表\\n词表",
      answerEn: "vocabulary",
      phonetic: "/vә'kæbjulәri/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-067",
      kind: "word",
      promptZh: "虚弱；薄弱；弱点\\n欲振乏力",
      answerEn: "weakness",
      phonetic: "/'wi:knis/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-068",
      kind: "word",
      promptZh: "争论；论证；论据；自变量\\n参数",
      answerEn: "argument",
      phonetic: "/'ɑ:gjumәnt/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-069",
      kind: "word",
      promptZh: "澄清；阐明\\nvt. 使明晰",
      answerEn: "clarify",
      phonetic: "/'klærifai/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-070",
      kind: "word",
      promptZh: "分配\\n分布",
      answerEn: "distribution",
      phonetic: "/.distrә'bju:ʃәn/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-071",
      kind: "word",
      promptZh: "效率；效能；功效\\n效率；效力",
      answerEn: "efficiency",
      phonetic: "/i'fiʃәnsi/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-072",
      kind: "word",
      promptZh: "周围的；环境的\\n环境的；环保的",
      answerEn: "environmental",
      phonetic: "/in.vaiәrәn'mentәl/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-073",
      kind: "word",
      promptZh: "晴朗；光明正大；美丽\\n公正；适当",
      answerEn: "fairness",
      phonetic: "/'fєәnis/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-074",
      kind: "word",
      promptZh: "人；个人；个体\\na. 个别的；个人的",
      answerEn: "individual",
      phonetic: "/.indi'vidʒuәl/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-075",
      kind: "word",
      promptZh: "改革；创新\\n创新；刷新",
      answerEn: "innovation",
      phonetic: "/.inәu'veiʃәn/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-076",
      kind: "word",
      promptZh: "合乎逻辑的；合理的\\n逻辑的；符合逻辑的",
      answerEn: "logical",
      phonetic: "/'lɒdʒikәl/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-077",
      kind: "word",
      promptZh: "机械的；机械性的；力学的\\n机械的；力学的",
      answerEn: "mechanical",
      phonetic: "/mi'kænikәl/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-078",
      kind: "word",
      promptZh: "隐私；隐居；秘密\\n个人保密权",
      answerEn: "privacy",
      phonetic: "/'praivәsi/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-079",
      kind: "word",
      promptZh: "责任；职责；负担；可靠性\\n职责",
      answerEn: "responsibility",
      phonetic: "/ri.spɒnsә'biliti/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-080",
      kind: "word",
      promptZh: "摘要；概要\\na. 摘要的；简略的\\n摘要；概要",
      answerEn: "summary",
      phonetic: "/'sʌmәri/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-081",
      kind: "word",
      promptZh: "技术；工业技术；术语\\n技术学；工艺学",
      answerEn: "technology",
      phonetic: "/tek'nɒlәdʒi/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-082",
      kind: "word",
      promptZh: "转变；转换；变迁；过渡时期",
      answerEn: "transition",
      phonetic: "/træn'ziʃәn/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-083",
      kind: "word",
      promptZh: "准确地",
      answerEn: "accurately",
      phonetic: "/'ækjurәtli/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-084",
      kind: "word",
      promptZh: "逐渐地",
      answerEn: "gradually",
      phonetic: "/'grædʒuәli/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-085",
      kind: "word",
      promptZh: "自然地",
      answerEn: "naturally",
      phonetic: "/'nætʃәrәli/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-086",
      kind: "word",
      promptZh: "径直地；直接地；直率地；正好地",
      answerEn: "directly",
      phonetic: "/di'rektli, dai'rektli/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-087",
      kind: "word",
      promptZh: "因此",
      answerEn: "therefore",
      phonetic: "/'ðєәfɒ:/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-088",
      kind: "word",
      promptZh: "然而；无论如何；究竟怎样\\nconj. 然而；可是",
      answerEn: "however",
      phonetic: "/hau'evә/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-089",
      kind: "word",
      promptZh: "虽然；尽管",
      answerEn: "although",
      phonetic: "/ɒ:l'ðou/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-090",
      kind: "word",
      promptZh: "除非\\nprep. 除...之外",
      answerEn: "unless",
      phonetic: "/.ʌn'les/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-091",
      kind: "word",
      promptZh: "是否；不论\\npron. 两个中的哪一个",
      answerEn: "whether",
      phonetic: "/'hweðә/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-092",
      kind: "word",
      promptZh: "因为",
      answerEn: "because",
      phonetic: "/bi'kɒ:z/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-093",
      kind: "word",
      promptZh: "代替；反而",
      answerEn: "instead",
      phonetic: "/in'sted/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-094",
      kind: "word",
      promptZh: "在……之内",
      answerEn: "within",
      phonetic: "/wi'ðin/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-095",
      kind: "word",
      promptZh: "超过；在那一边；迟于\\nadv. 在远处\\nn. 更远处",
      answerEn: "beyond",
      phonetic: "/bi'jɒnd/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-096",
      kind: "word",
      promptZh: "向；对于；为了\\na. 即将来临的；进行中的",
      answerEn: "toward",
      phonetic: "/tә'wɒ:d/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-097",
      kind: "word",
      promptZh: "到处；贯穿全部地；自始至终\\nprep. 遍及；在各处\\n吞吐量",
      answerEn: "throughout",
      phonetic: "/θru:'aut/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-098",
      kind: "word",
      promptZh: "相符的；根据...而定的\\nadv. 相应地",
      answerEn: "according",
      phonetic: "/ә'kɒ:diŋ/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-099",
      kind: "word",
      promptZh: "轻视；憎恨\\nprep. 虽然；尽管",
      answerEn: "despite",
      phonetic: "/di'spait/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-100",
      kind: "word",
      promptZh: "在...的时候",
      answerEn: "during",
      phonetic: "/'djuәriŋ/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-w-101",
      kind: "word",
      promptZh: "没有",
      answerEn: "without",
      phonetic: "/wi'ðaut/",
      tags: [
        "builder",
        "word"
      ]
    },
    {
      id: "builder-s-001",
      kind: "sentence",
      promptZh: "我们需要先分析数据，再做决定。",
      answerEn: "We need to analyze the data before making a decision.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-002",
      kind: "sentence",
      promptZh: "持续练习可以提高翻译准确度。",
      answerEn: "Consistent practice can improve translation accuracy.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-003",
      kind: "sentence",
      promptZh: "这个计划取决于预算和时间。",
      answerEn: "This plan depends on the budget and the schedule.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-004",
      kind: "sentence",
      promptZh: "良好的沟通能减少误解。",
      answerEn: "Good communication can reduce misunderstandings.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-005",
      kind: "sentence",
      promptZh: "公司应该保护用户隐私。",
      answerEn: "Companies should protect user privacy.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-006",
      kind: "sentence",
      promptZh: "这项政策可能会影响年轻人的就业。",
      answerEn: "This policy may affect employment for young people.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-007",
      kind: "sentence",
      promptZh: "我们不能忽视空气污染带来的风险。",
      answerEn: "We cannot ignore the risks caused by air pollution.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-008",
      kind: "sentence",
      promptZh: "老师鼓励学生提出不同观点。",
      answerEn: "The teacher encourages students to express different opinions.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-009",
      kind: "sentence",
      promptZh: "这张图表说明了过去五年的变化。",
      answerEn: "This chart illustrates the changes over the past five years.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-010",
      kind: "sentence",
      promptZh: "越来越多的人选择远程工作。",
      answerEn: "More and more people choose to work remotely.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-011",
      kind: "sentence",
      promptZh: "这个例子证明了耐心的重要性。",
      answerEn: "This example proves the importance of patience.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-012",
      kind: "sentence",
      promptZh: "政府需要为公共交通投入更多资金。",
      answerEn: "The government needs to invest more money in public transportation.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-013",
      kind: "sentence",
      promptZh: "我们应该把复杂问题拆成小步骤。",
      answerEn: "We should break complex problems into small steps.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-014",
      kind: "sentence",
      promptZh: "过度使用手机会分散注意力。",
      answerEn: "Excessive phone use can distract attention.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-015",
      kind: "sentence",
      promptZh: "这份报告强调了教育公平。",
      answerEn: "This report emphasizes educational fairness.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-016",
      kind: "sentence",
      promptZh: "如果缺少证据，结论就不够可靠。",
      answerEn: "If evidence is missing, the conclusion is not reliable enough.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-017",
      kind: "sentence",
      promptZh: "城市生活既方便，也可能有压力。",
      answerEn: "City life is convenient, but it can also be stressful.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-018",
      kind: "sentence",
      promptZh: "她试图用简单的语言解释这个概念。",
      answerEn: "She tried to explain the concept in simple language.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-019",
      kind: "sentence",
      promptZh: "团队合作通常比单独行动更有效。",
      answerEn: "Teamwork is often more effective than working alone.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-020",
      kind: "sentence",
      promptZh: "这个应用帮助学习者记录进度。",
      answerEn: "This app helps learners record their progress.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-021",
      kind: "sentence",
      promptZh: "我们必须考虑长期影响。",
      answerEn: "We must consider the long-term impact.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-022",
      kind: "sentence",
      promptZh: "文化差异会影响人们的沟通方式。",
      answerEn: "Cultural differences can influence how people communicate.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-023",
      kind: "sentence",
      promptZh: "这项技术让在线学习更加灵活。",
      answerEn: "This technology makes online learning more flexible.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-024",
      kind: "sentence",
      promptZh: "读英文新闻可以扩大词汇量。",
      answerEn: "Reading English news can expand your vocabulary.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-025",
      kind: "sentence",
      promptZh: "健康的习惯来自每天的小选择。",
      answerEn: "Healthy habits come from small daily choices.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-026",
      kind: "sentence",
      promptZh: "他把主要原因总结成三点。",
      answerEn: "He summarized the main reasons in three points.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-027",
      kind: "sentence",
      promptZh: "如果交通拥堵，我们就改坐地铁。",
      answerEn: "If the traffic is heavy, we will take the subway instead.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-028",
      kind: "sentence",
      promptZh: "很多家庭正在减少不必要的开支。",
      answerEn: "Many families are reducing unnecessary expenses.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-029",
      kind: "sentence",
      promptZh: "环境保护需要个人和社会共同努力。",
      answerEn: "Environmental protection requires efforts from both individuals and society.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-030",
      kind: "sentence",
      promptZh: "这个问题比我们想象的更严重。",
      answerEn: "This problem is more serious than we expected.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-031",
      kind: "sentence",
      promptZh: "请把这句话翻译成自然的英文。",
      answerEn: "Please translate this sentence into natural English.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-032",
      kind: "sentence",
      promptZh: "稳定的输入练习能训练语感。",
      answerEn: "Steady typing practice can train language intuition.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-033",
      kind: "sentence",
      promptZh: "我们应该避免机械地背答案。",
      answerEn: "We should avoid memorizing answers mechanically.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-034",
      kind: "sentence",
      promptZh: "作者在文章中提出了一个反例。",
      answerEn: "The author presents a counterexample in the article.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-035",
      kind: "sentence",
      promptZh: "这个决定反映了公众的担忧。",
      answerEn: "This decision reflects public concern.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-036",
      kind: "sentence",
      promptZh: "学习者需要及时复习常错词。",
      answerEn: "Learners need to review frequently missed words in time.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-037",
      kind: "sentence",
      promptZh: "有效的反馈能帮助我们发现薄弱点。",
      answerEn: "Effective feedback helps us identify weak points.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-038",
      kind: "sentence",
      promptZh: "短句可以逐渐组合成长句。",
      answerEn: "Short sentences can gradually be combined into longer ones.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-039",
      kind: "sentence",
      promptZh: "不要因为一次错误就否定自己的进步。",
      answerEn: "Do not deny your progress because of one mistake.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-040",
      kind: "sentence",
      promptZh: "我们可以用表格比较两种方案。",
      answerEn: "We can compare the two plans with a table.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-041",
      kind: "sentence",
      promptZh: "这个系统根据错误次数安排复习。",
      answerEn: "This system schedules reviews based on the number of mistakes.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-042",
      kind: "sentence",
      promptZh: "保持清晰比使用复杂词更重要。",
      answerEn: "Being clear is more important than using complex words.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-043",
      kind: "sentence",
      promptZh: "翻译时要注意时态和语序。",
      answerEn: "When translating, pay attention to tense and word order.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-044",
      kind: "sentence",
      promptZh: "经济压力会改变消费习惯。",
      answerEn: "Economic pressure can change spending habits.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-045",
      kind: "sentence",
      promptZh: "公共资源应该被合理分配。",
      answerEn: "Public resources should be distributed reasonably.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-046",
      kind: "sentence",
      promptZh: "这次讨论帮助我们澄清了目标。",
      answerEn: "This discussion helped us clarify the goal.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-047",
      kind: "sentence",
      promptZh: "人工智能正在改变语言学习方式。",
      answerEn: "Artificial intelligence is changing the way people learn languages.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-048",
      kind: "sentence",
      promptZh: "练习的目的不是速度，而是稳定。",
      answerEn: "The purpose of practice is not speed but consistency.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-049",
      kind: "sentence",
      promptZh: "我们需要把想法转化成可执行计划。",
      answerEn: "We need to turn ideas into an actionable plan.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    },
    {
      id: "builder-s-050",
      kind: "sentence",
      promptZh: "这个观点缺少足够的背景信息。",
      answerEn: "This view lacks enough background information.",
      tags: [
        "builder",
        "sentence",
        "translation"
      ]
    }
  ],
  flow: [
    {
      id: "flow-w-001",
      kind: "word",
      promptZh: "事实上；竟然；如今；现在",
      answerEn: "actually",
      phonetic: "/'æktʃuәli/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-002",
      kind: "word",
      promptZh: "忠告；劝告；意见；报道",
      answerEn: "advice",
      phonetic: "/әd'vais/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-003",
      kind: "word",
      promptZh: "同意；赞成；应允；适合\\nvt. 承认",
      answerEn: "agree",
      phonetic: "/ә'gri:/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-004",
      kind: "word",
      promptZh: "安排；排列；达成协议\\n重排",
      answerEn: "arrange",
      phonetic: "/ә'reindʒ/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-005",
      kind: "word",
      promptZh: "可用的；有空的",
      answerEn: "available",
      phonetic: "/ә'veilәbl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-006",
      kind: "word",
      promptZh: "摘要；简报\\na. 简短的；短暂的\\nvt. 对...作简报；节录",
      answerEn: "brief",
      phonetic: "/bri:f/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-007",
      kind: "word",
      promptZh: "确定的；某一个的；必然的\\n确凿的；无疑的",
      answerEn: "certain",
      phonetic: "/'sә:tәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-008",
      kind: "word",
      promptZh: "选择；精选品；选择权\\na. 精选的；挑三拣四的",
      answerEn: "choice",
      phonetic: "/tʃɒis/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-009",
      kind: "word",
      promptZh: "舒适的",
      answerEn: "comfortable",
      phonetic: "/'kʌmfәtәbl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-010",
      kind: "word",
      promptZh: "复杂的\\n并发的",
      answerEn: "complicated",
      phonetic: "/'kɒmplikeitid/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-011",
      kind: "word",
      promptZh: "关心；忧虑\\nvt. 与...有关；使担心；使挂念",
      answerEn: "concern",
      phonetic: "/kәn'sә:n/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-012",
      kind: "word",
      promptZh: "证实；确定；批准；使巩固\\n确认",
      answerEn: "confirm",
      phonetic: "/kәn'fә:m/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-013",
      kind: "word",
      promptZh: "考虑；思考；认为",
      answerEn: "consider",
      phonetic: "/kәn'sidŋ/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-014",
      kind: "word",
      promptZh: "继续；延续；延长\\nvt. 使继续；使延长",
      answerEn: "continue",
      phonetic: "/kәn'tinju:/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-015",
      kind: "word",
      promptZh: "会话；说话；交谈\\n交谈；社交",
      answerEn: "conversation",
      phonetic: "/.kɒnvә'seiʃәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-016",
      kind: "word",
      promptZh: "径直地；直接地；直率地；正好地",
      answerEn: "directly",
      phonetic: "/di'rektli, dai'rektli/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-017",
      kind: "word",
      promptZh: "讨论；论述\\n讨论；辩论",
      answerEn: "discuss",
      phonetic: "/dis'kʌs/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-018",
      kind: "word",
      promptZh: "解释；说明",
      answerEn: "explain",
      phonetic: "/ik'splein/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-019",
      kind: "word",
      promptZh: "跟随；沿行；遵循；追求\\nvi. 跟随",
      answerEn: "follow",
      phonetic: "/'fɒlәu/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-020",
      kind: "word",
      promptZh: "一般；将军；大体\\na. 全面的；大体的",
      answerEn: "general",
      phonetic: "/'dʒenәrәl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-021",
      kind: "word",
      promptZh: "诚实的；坦直的；可靠的",
      answerEn: "honest",
      phonetic: "/'ɒnist/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-022",
      kind: "word",
      promptZh: "字首；首字母\\na. 开始的；最初的；字首的\\nvt. 用姓名的首字母签名",
      answerEn: "initial",
      phonetic: "/i'niʃәl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-023",
      kind: "word",
      promptZh: "代替；反而",
      answerEn: "instead",
      phonetic: "/in'sted/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-024",
      kind: "word",
      promptZh: "事件；物质；原因；素材",
      answerEn: "matter",
      phonetic: "/'mætә/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-025",
      kind: "word",
      promptZh: "提到；言及；陈述\\nvt. 提到；提及",
      answerEn: "mention",
      phonetic: "/'menʃәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-026",
      kind: "word",
      promptZh: "选择权；挑选；选项\\n选项",
      answerEn: "option",
      phonetic: "/'ɒpʃәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-027",
      kind: "word",
      promptZh: "也许；大概",
      answerEn: "perhaps",
      phonetic: "/pә'hæps/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-028",
      kind: "word",
      promptZh: "点；小数点；标点；地点",
      answerEn: "point",
      phonetic: "/pɒint/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-029",
      kind: "word",
      promptZh: "可能的",
      answerEn: "possible",
      phonetic: "/'pɒsәbl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-030",
      kind: "word",
      promptZh: "实际的；现实的；实用性的\\n事实上的；实际上的",
      answerEn: "practical",
      phonetic: "/'præktikl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-031",
      kind: "word",
      promptZh: "大概；可能",
      answerEn: "probably",
      phonetic: "/'prɒbәbli/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-032",
      kind: "word",
      promptZh: "很快地",
      answerEn: "quickly",
      phonetic: "/'kwikli/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-033",
      kind: "word",
      promptZh: "了解；实现；使显得逼真；变卖\\nvi. 变卖",
      answerEn: "realize",
      phonetic: "/'riәlaiz/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-034",
      kind: "word",
      promptZh: "理由；原因；理智；道理",
      answerEn: "reason",
      phonetic: "/'ri:zn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-035",
      kind: "word",
      promptZh: "提醒；使想起",
      answerEn: "remind",
      phonetic: "/ri'maind/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-036",
      kind: "word",
      promptZh: "答复；回答；答辩\\nvi. 答复；回击",
      answerEn: "reply",
      phonetic: "/ri'plai/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-037",
      kind: "word",
      promptZh: "请求",
      answerEn: "request",
      phonetic: "/ri'kwest/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-038",
      kind: "word",
      promptZh: "有责任的；负责的；责任重大的\\n应负责任的；能履行责任的",
      answerEn: "responsible",
      phonetic: "/ri'spɒnsәbl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-039",
      kind: "word",
      promptZh: "象是；似乎",
      answerEn: "seem",
      phonetic: "/si:m/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-040",
      kind: "word",
      promptZh: "简单的",
      answerEn: "simple",
      phonetic: "/'simpl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-041",
      kind: "word",
      promptZh: "提议；建议；促成；暗示",
      answerEn: "suggest",
      phonetic: "/sәg'dʒest/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-042",
      kind: "word",
      promptZh: "推想；假设；以为；想像",
      answerEn: "suppose",
      phonetic: "/sә'pәuz/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-043",
      kind: "word",
      promptZh: "惊奇；奇袭；诧异\\nvt. 使惊奇；撞见",
      answerEn: "surprise",
      phonetic: "/sә'praiz/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-044",
      kind: "word",
      promptZh: "想法；思想；思维；关心",
      answerEn: "thought",
      phonetic: "/θɒ:t/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-045",
      kind: "word",
      promptZh: "理解；了解；领会；听说",
      answerEn: "understand",
      phonetic: "/.ʌndә'stænd/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-046",
      kind: "word",
      promptZh: "通常",
      answerEn: "usually",
      phonetic: "/'ju:ʒuәli/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-047",
      kind: "word",
      promptZh: "乐意的；自愿的；甘愿的",
      answerEn: "willing",
      phonetic: "/'wiliŋ/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-048",
      kind: "word",
      promptZh: "奇迹；惊奇；惊愕\\nvt. 惊奇；想知道\\nvi. 惊讶",
      answerEn: "wonder",
      phonetic: "/'wʌndә/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-049",
      kind: "word",
      promptZh: "接受；承认；同意；相信",
      answerEn: "accept",
      phonetic: "/әk'sept/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-050",
      kind: "word",
      promptZh: "调整；使适应于；校准\\nvi. 适应于；被调节",
      answerEn: "adjust",
      phonetic: "/ә'dʒʌst/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-051",
      kind: "word",
      promptZh: "前进；进展；行过的路程\\nvi. 前进；提高",
      answerEn: "advance",
      phonetic: "/әd'vɑ:ns/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-052",
      kind: "word",
      promptZh: "无论如何；至少",
      answerEn: "anyway",
      phonetic: "/'eniwei/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-053",
      kind: "word",
      promptZh: "基本上；主要地",
      answerEn: "basically",
      phonetic: "/'beisikli/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-054",
      kind: "word",
      promptZh: "清楚地",
      answerEn: "clearly",
      phonetic: "/'kliәli/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-055",
      kind: "word",
      promptZh: "方便的",
      answerEn: "convenient",
      phonetic: "/kәn'vi:njәnt/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-056",
      kind: "word",
      promptZh: "决定；决心；决断\\n判定",
      answerEn: "decision",
      phonetic: "/di'siʒәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-057",
      kind: "word",
      promptZh: "明确无疑地；清楚地",
      answerEn: "definitely",
      phonetic: "/'definitli/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-058",
      kind: "word",
      promptZh: "确切地；精确地；恰好；完全地",
      answerEn: "exactly",
      phonetic: "/i^'zæktli/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-059",
      kind: "word",
      promptZh: "例子；样本；实例\\n实例",
      answerEn: "example",
      phonetic: "/ig'zæmpl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-060",
      kind: "word",
      promptZh: "预期；盼望；期待",
      answerEn: "expect",
      phonetic: "/iks'pekt/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-061",
      kind: "word",
      promptZh: "过错；故障；毛病\\nvt. 挑剔\\nvi. 产生断层；弄错\\n故障",
      answerEn: "fault",
      phonetic: "/fɒ:lt/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-062",
      kind: "word",
      promptZh: "想像；设想；猜测\\nvi. 想像起来",
      answerEn: "imagine",
      phonetic: "/i'mædʒin/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-063",
      kind: "word",
      promptZh: "消息；知识；通知；情报",
      answerEn: "information",
      phonetic: "/.infә'meiʃәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-064",
      kind: "word",
      promptZh: "以后；随后",
      answerEn: "later",
      phonetic: "/'leitә/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-065",
      kind: "word",
      promptZh: "也许；大概\\nn. 可能性",
      answerEn: "maybe",
      phonetic: "/'meibi:/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-066",
      kind: "word",
      promptZh: "意见；评价；主张\\n意见",
      answerEn: "opinion",
      phonetic: "/ә'pinjәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-067",
      kind: "word",
      promptZh: "否则；不同地；别的方式",
      answerEn: "otherwise",
      phonetic: "/'ʌðәwaiz/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-068",
      kind: "word",
      promptZh: "宁可；较喜欢；提出\\n给予优先权；优先偿还",
      answerEn: "prefer",
      phonetic: "/pri'fә:/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-069",
      kind: "word",
      promptZh: "诺言；约定的事情；有指望\\nvt. 允诺；约定",
      answerEn: "promise",
      phonetic: "/'prɒmis/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-070",
      kind: "word",
      promptZh: "问题；询问\\nv. 询问；审问；怀疑\\n询问",
      answerEn: "question",
      phonetic: "/'kwestʃәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-071",
      kind: "word",
      promptZh: "准备好的",
      answerEn: "ready",
      phonetic: "/'redi/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-072",
      kind: "word",
      promptZh: "情形；境遇；位置\\n情境；处境",
      answerEn: "situation",
      phonetic: "/.sitju'eiʃәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-073",
      kind: "word",
      promptZh: "特效药；特性\\na. 特殊的；明确的；具有特效的",
      answerEn: "specific",
      phonetic: "/spi'sifik/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-074",
      kind: "word",
      promptZh: "明天；未来\\nadv. 明天；未来地",
      answerEn: "tomorrow",
      phonetic: "/tә'mɒ:rәu/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-075",
      kind: "word",
      promptZh: "烦恼；麻烦；困难；动乱",
      answerEn: "trouble",
      phonetic: "/'trʌbl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-076",
      kind: "word",
      promptZh: "消息；通讯；讯息；教训",
      answerEn: "message",
      phonetic: "/'mesidʒ/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-077",
      kind: "word",
      promptZh: "日程；安排",
      answerEn: "schedule",
      phonetic: "/'skedʒuәl/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-078",
      kind: "word",
      promptZh: "会议",
      answerEn: "meeting",
      phonetic: "/'mi:tiŋ/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-079",
      kind: "word",
      promptZh: "文件",
      answerEn: "document",
      phonetic: "/'dɒkjumәnt/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-080",
      kind: "word",
      promptZh: "问题；难题\\na. 成问题的；难处理的",
      answerEn: "problem",
      phonetic: "/'prɒblәm/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-081",
      kind: "word",
      promptZh: "解决；解答；溶液\\n溶液",
      answerEn: "solution",
      phonetic: "/sә'lu:ʃәn/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-082",
      kind: "word",
      promptZh: "细节；详情\\nvt. 详述；选派\\nvi. 画详图\\n详细数据",
      answerEn: "detail",
      phonetic: "/'di:teil/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-083",
      kind: "word",
      promptZh: "变化；找回的零钱；找头；更换\\nvt. 改变",
      answerEn: "change",
      phonetic: "/tʃeindʒ/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-084",
      kind: "word",
      promptZh: "倒车；后退；后援；支持",
      answerEn: "backup",
      phonetic: "/'bækʌp/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-085",
      kind: "word",
      promptZh: "结果；成绩；答案\\nvi. 产生；致使\\n结果",
      answerEn: "result",
      phonetic: "/ri'zʌlt/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-086",
      kind: "word",
      promptZh: "正确的；精确的\\n准确的；精确的",
      answerEn: "accurate",
      phonetic: "/'ækjurәt/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-087",
      kind: "word",
      promptZh: "展览会；市集；美好的事物\\na. 公平的；按规则进行的",
      answerEn: "fair",
      phonetic: "/fєә/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-088",
      kind: "word",
      promptZh: "忙碌的",
      answerEn: "busy",
      phonetic: "/'bizi/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-089",
      kind: "word",
      promptZh: "清楚的；明确的；澄清的\\nadv. 清晰地\\nvt. 澄清；清除障碍\\nvi. 放晴",
      answerEn: "clear",
      phonetic: "/kliә/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-090",
      kind: "word",
      promptZh: "短的；近的；矮的；短期的",
      answerEn: "short",
      phonetic: "/ʃɒ:t/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-091",
      kind: "word",
      promptZh: "另外的；再一的；不同的\\npron. 又一个；另一个",
      answerEn: "another",
      phonetic: "/ә'nʌðә/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-092",
      kind: "word",
      promptZh: "充足；够；很多\\na. 充足的；足够\\nadv. 足够\\ninterj. 够了",
      answerEn: "enough",
      phonetic: "/i'nʌf/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-093",
      kind: "word",
      promptZh: "一起",
      answerEn: "together",
      phonetic: "/tә'geðә/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-094",
      kind: "word",
      promptZh: "在...之前\\nconj. 在...之前\\nadv. 在前",
      answerEn: "before",
      phonetic: "/bi'fɒ:/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-095",
      kind: "word",
      promptZh: "在...之后；由于\\nconj. 在...之后\\nadv. 后来",
      answerEn: "after",
      phonetic: "/'ɑ:ftә/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-096",
      kind: "word",
      promptZh: "在...的时候",
      answerEn: "during",
      phonetic: "/'djuәriŋ/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-097",
      kind: "word",
      promptZh: "直到；在...以前\\nconj. 直到...时；在...以前",
      answerEn: "until",
      phonetic: "/әn'til/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-098",
      kind: "word",
      promptZh: "一会儿；(一段)时间\\nconj. 当...的时候；虽然\\nvt. 消磨",
      answerEn: "while",
      phonetic: "/hwail/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-099",
      kind: "word",
      promptZh: "自...以后；自...以来\\nadv. 自那时以后\\nconj. 既然；自...以来",
      answerEn: "since",
      phonetic: "/sins/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-100",
      kind: "word",
      promptZh: "如果；是否；无论何时；假设",
      answerEn: "if",
      phonetic: "/if/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-101",
      kind: "word",
      promptZh: "然而；可是\\nconj. 虽然；纵然",
      answerEn: "though",
      phonetic: "/ðәu/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-102",
      kind: "word",
      promptZh: "除非\\nprep. 除...之外",
      answerEn: "unless",
      phonetic: "/.ʌn'les/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-103",
      kind: "word",
      promptZh: "是否；不论\\npron. 两个中的哪一个",
      answerEn: "whether",
      phonetic: "/'hweðә/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-w-104",
      kind: "word",
      promptZh: "因为",
      answerEn: "because",
      phonetic: "/bi'kɒ:z/",
      tags: [
        "conversation",
        "word"
      ]
    },
    {
      id: "flow-s-001",
      kind: "sentence",
      promptZh: "说实话，我还没准备好。",
      answerEn: "To be honest, I am not ready yet.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-002",
      kind: "sentence",
      promptZh: "我明白你的意思，但我有点担心。",
      answerEn: "I see your point, but I am a little worried.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-003",
      kind: "sentence",
      promptZh: "我们先从最简单的部分开始吧。",
      answerEn: "Let us start with the simplest part first.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-004",
      kind: "sentence",
      promptZh: "听起来不错，我愿意试试看。",
      answerEn: "That sounds good, and I am willing to give it a try.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-005",
      kind: "sentence",
      promptZh: "你能再解释一遍吗？",
      answerEn: "Could you explain it one more time?",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-006",
      kind: "sentence",
      promptZh: "我刚才没听清最后一句。",
      answerEn: "I did not catch the last sentence.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-007",
      kind: "sentence",
      promptZh: "我同意大方向，但细节还需要调整。",
      answerEn: "I agree with the general direction, but the details still need adjustment.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-008",
      kind: "sentence",
      promptZh: "这取决于我们有多少时间。",
      answerEn: "It depends on how much time we have.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-009",
      kind: "sentence",
      promptZh: "如果你方便的话，我们下午聊。",
      answerEn: "If it is convenient for you, we can talk this afternoon.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-010",
      kind: "sentence",
      promptZh: "我会尽快给你回复。",
      answerEn: "I will get back to you as soon as possible.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-011",
      kind: "sentence",
      promptZh: "别担心，我们可以一步一步来。",
      answerEn: "Do not worry; we can take it step by step.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-012",
      kind: "sentence",
      promptZh: "我需要一点时间考虑。",
      answerEn: "I need some time to think about it.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-013",
      kind: "sentence",
      promptZh: "这个方法对我来说很有效。",
      answerEn: "This method works well for me.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-014",
      kind: "sentence",
      promptZh: "我不确定这样做是否合适。",
      answerEn: "I am not sure whether this is appropriate.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-015",
      kind: "sentence",
      promptZh: "你说的有道理。",
      answerEn: "What you said makes sense.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-016",
      kind: "sentence",
      promptZh: "我们换个角度看这个问题。",
      answerEn: "Let us look at this problem from another angle.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-017",
      kind: "sentence",
      promptZh: "我现在有点忙，稍后联系你。",
      answerEn: "I am a bit busy now, so I will contact you later.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-018",
      kind: "sentence",
      promptZh: "谢谢你提醒我这个细节。",
      answerEn: "Thank you for reminding me of this detail.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-019",
      kind: "sentence",
      promptZh: "我可以帮你检查一遍。",
      answerEn: "I can help you check it once.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-020",
      kind: "sentence",
      promptZh: "这不是你的错。",
      answerEn: "It is not your fault.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-021",
      kind: "sentence",
      promptZh: "我会负责跟进这件事。",
      answerEn: "I will be responsible for following up on this matter.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-022",
      kind: "sentence",
      promptZh: "我们需要确认一下时间和地点。",
      answerEn: "We need to confirm the time and place.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-023",
      kind: "sentence",
      promptZh: "我觉得这个选择更实际。",
      answerEn: "I think this option is more practical.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-024",
      kind: "sentence",
      promptZh: "请直接告诉我你的想法。",
      answerEn: "Please tell me your thoughts directly.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-025",
      kind: "sentence",
      promptZh: "我担心这个方案成本太高。",
      answerEn: "I am worried that this plan costs too much.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-026",
      kind: "sentence",
      promptZh: "我们可以明天再继续。",
      answerEn: "We can continue tomorrow.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-027",
      kind: "sentence",
      promptZh: "这个问题已经解决了吗？",
      answerEn: "Has this problem been solved?",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-028",
      kind: "sentence",
      promptZh: "我还需要补充一点。",
      answerEn: "I need to add one more point.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-029",
      kind: "sentence",
      promptZh: "这件事比我预期的复杂。",
      answerEn: "This is more complicated than I expected.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-030",
      kind: "sentence",
      promptZh: "我会把重点写下来。",
      answerEn: "I will write down the key points.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-031",
      kind: "sentence",
      promptZh: "如果有变化，请提前告诉我。",
      answerEn: "If anything changes, please tell me in advance.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-032",
      kind: "sentence",
      promptZh: "我现在理解你的选择了。",
      answerEn: "I understand your choice now.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-033",
      kind: "sentence",
      promptZh: "我们最好保持沟通。",
      answerEn: "We had better keep in touch.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-034",
      kind: "sentence",
      promptZh: "我可以接受这个安排。",
      answerEn: "I can accept this arrangement.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-035",
      kind: "sentence",
      promptZh: "我们还有别的选择吗？",
      answerEn: "Do we have any other options?",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-036",
      kind: "sentence",
      promptZh: "这只是我的初步想法。",
      answerEn: "This is just my initial idea.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-037",
      kind: "sentence",
      promptZh: "我想听听你的建议。",
      answerEn: "I would like to hear your advice.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-038",
      kind: "sentence",
      promptZh: "我们先别急着下结论。",
      answerEn: "Let us not rush to a conclusion.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-039",
      kind: "sentence",
      promptZh: "这个结果让我有点意外。",
      answerEn: "This result is a little surprising to me.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-040",
      kind: "sentence",
      promptZh: "我需要确认信息是否准确。",
      answerEn: "I need to confirm whether the information is accurate.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-041",
      kind: "sentence",
      promptZh: "你可以把文件发给我吗？",
      answerEn: "Could you send me the document?",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-042",
      kind: "sentence",
      promptZh: "我们在会议后再决定。",
      answerEn: "We will decide after the meeting.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-043",
      kind: "sentence",
      promptZh: "我认为问题出在沟通上。",
      answerEn: "I think the problem lies in communication.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-044",
      kind: "sentence",
      promptZh: "这对每个人都更公平。",
      answerEn: "This is fairer for everyone.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-045",
      kind: "sentence",
      promptZh: "请给我一个明确的例子。",
      answerEn: "Please give me a clear example.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-046",
      kind: "sentence",
      promptZh: "我会尽量保持简短。",
      answerEn: "I will try to keep it brief.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-047",
      kind: "sentence",
      promptZh: "我们需要一个备用计划。",
      answerEn: "We need a backup plan.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-048",
      kind: "sentence",
      promptZh: "这个决定可能会影响后续工作。",
      answerEn: "This decision may affect the following work.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-049",
      kind: "sentence",
      promptZh: "我很高兴你能理解。",
      answerEn: "I am glad that you understand.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    },
    {
      id: "flow-s-050",
      kind: "sentence",
      promptZh: "我们今天就先到这里。",
      answerEn: "Let us stop here for today.",
      tags: [
        "conversation",
        "sentence",
        "translation"
      ]
    }
  ],
  cet4: [
    {
      id: "cet4-w-001",
      kind: "word",
      promptZh: "能力；才干\\n能力；才能",
      answerEn: "ability",
      phonetic: "/ә'biliti/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-002",
      kind: "word",
      promptZh: "缺席；缺乏；没有\\n失神",
      answerEn: "absence",
      phonetic: "/'æbsәns/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-003",
      kind: "word",
      promptZh: "绝对的；专制的；完全的；独立的\\nn. 绝对事物",
      answerEn: "absolute",
      phonetic: "/'æbsәlu:t/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-004",
      kind: "word",
      promptZh: "吸收；使全神贯注；同化；买进",
      answerEn: "absorb",
      phonetic: "/әb'sɒ:b/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-005",
      kind: "word",
      promptZh: "学院的；学术的；不切实际的\\nn. 大学生；大学教师",
      answerEn: "academic",
      phonetic: "/.ækә'demik/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-006",
      kind: "word",
      promptZh: "接受；承认；同意；相信",
      answerEn: "accept",
      phonetic: "/әk'sept/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-007",
      kind: "word",
      promptZh: "通路；入口；接近；进入",
      answerEn: "access",
      phonetic: "/'ækses/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-008",
      kind: "word",
      promptZh: "意外事件；机遇；事故；次要方面\\n意外事故",
      answerEn: "accident",
      phonetic: "/'æksidәnt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-009",
      kind: "word",
      promptZh: "账户",
      answerEn: "account",
      phonetic: "/ә'kaunt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-010",
      kind: "word",
      promptZh: "完成；达到\\nvi. 如愿以偿",
      answerEn: "achieve",
      phonetic: "/ә'tʃi:v/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-011",
      kind: "word",
      promptZh: "活跃的；起作用的；积极的；有效的",
      answerEn: "active",
      phonetic: "/'æktiv/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-012",
      kind: "word",
      promptZh: "真实的；实际的；现行的\\n实际死亡率",
      answerEn: "actual",
      phonetic: "/'æktʃuәl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-013",
      kind: "word",
      promptZh: "使适应；改编\\nvi. 适应",
      answerEn: "adapt",
      phonetic: "/ә'dæpt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-014",
      kind: "word",
      promptZh: "附加的；另外的；额外的\\n加添的",
      answerEn: "additional",
      phonetic: "/ә'diʃәnәl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-015",
      kind: "word",
      promptZh: "地址",
      answerEn: "address",
      phonetic: "/ә'dres/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-016",
      kind: "word",
      promptZh: "优点；便利；好处；优势\\nvt. 有助于",
      answerEn: "advantage",
      phonetic: "/әd'vɑ:ntidʒ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-017",
      kind: "word",
      promptZh: "广告；启事；广告宣传\\n广告；公告",
      answerEn: "advertisement",
      phonetic: "/.ædvә'taizmәnt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-018",
      kind: "word",
      promptZh: "买得起；足以；给予",
      answerEn: "afford",
      phonetic: "/ә'fɒ:d/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-019",
      kind: "word",
      promptZh: "代理机构；经销商；中介\\n办事处",
      answerEn: "agency",
      phonetic: "/'eidʒәnsi/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-020",
      kind: "word",
      promptZh: "同意；合约；协议\\n契约；协议",
      answerEn: "agreement",
      phonetic: "/ә'gri:mәnt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-021",
      kind: "word",
      promptZh: "农业\\n农业；农学",
      answerEn: "agriculture",
      phonetic: "/'ægrikʌltʃә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-022",
      kind: "word",
      promptZh: "允许；同意给予；承认\\nvi. 容许；猜想\\n允许命令",
      answerEn: "allow",
      phonetic: "/ә'lau/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-023",
      kind: "word",
      promptZh: "两者择一；供替代的选择\\na. 两者择一的；供选择的\\n选择对象",
      answerEn: "alternative",
      phonetic: "/ɒ:l'tә:nәtiv/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-024",
      kind: "word",
      promptZh: "令人惊异的",
      answerEn: "amazing",
      phonetic: "/ә'meiziŋ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-025",
      kind: "word",
      promptZh: "分析\\n分析机；分析员；分析；分析程序",
      answerEn: "analysis",
      phonetic: "/ә'nælәsis/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-026",
      kind: "word",
      promptZh: "古代的；古老的；年老的；旧的",
      answerEn: "ancient",
      phonetic: "/'einʃәnt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-027",
      kind: "word",
      promptZh: "宣布；声称；显示；预告\\nvi. 当报幕员",
      answerEn: "announce",
      phonetic: "/ә'nauns/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-028",
      kind: "word",
      promptZh: "焦虑；忧虑；令人焦虑的事\\n焦虑",
      answerEn: "anxiety",
      phonetic: "/æŋ'zaiәti/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-029",
      kind: "word",
      promptZh: "出现；显得；来到\\n出庭；到案",
      answerEn: "appear",
      phonetic: "/ә'piә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-030",
      kind: "word",
      promptZh: "应用；申请；志愿书；应用程序\\n应用",
      answerEn: "application",
      phonetic: "/.æpli'keiʃәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-031",
      kind: "word",
      promptZh: "接近；入门\\nvt. 接近；近似；找...商量\\nvi. 靠近",
      answerEn: "approach",
      phonetic: "/ә'prәutʃ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-032",
      kind: "word",
      promptZh: "区域；面积；范围；空地\\n区域",
      answerEn: "area",
      phonetic: "/'єәriә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-033",
      kind: "word",
      promptZh: "安排；排列；达成协议\\n重排",
      answerEn: "arrange",
      phonetic: "/ә'reindʒ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-034",
      kind: "word",
      promptZh: "文章；冠词；物品；物件",
      answerEn: "article",
      phonetic: "/'ɑ:tikl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-035",
      kind: "word",
      promptZh: "外观；方面；面貌；方向\\n方面",
      answerEn: "aspect",
      phonetic: "/'æspekt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-036",
      kind: "word",
      promptZh: "尝试；企图\\nvt. 尝试；企图",
      answerEn: "attempt",
      phonetic: "/ә'tempt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-037",
      kind: "word",
      promptZh: "注意；注意力\\n引起注意信号",
      answerEn: "attention",
      phonetic: "/ә'tenʃәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-038",
      kind: "word",
      promptZh: "态度；看法；姿势\\n体态；姿势",
      answerEn: "attitude",
      phonetic: "/'ætitju:d/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-039",
      kind: "word",
      promptZh: "可用的；有空的",
      answerEn: "available",
      phonetic: "/ә'veilәbl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-040",
      kind: "word",
      promptZh: "平均；平均数；一般水平；海损\\na. 平均的",
      answerEn: "average",
      phonetic: "/'ævәridʒ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-041",
      kind: "word",
      promptZh: "避免；防止；撤消\\n避免；回避",
      answerEn: "avoid",
      phonetic: "/ә'vɒid/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-042",
      kind: "word",
      promptZh: "背景；背景资料\\n背景；后台",
      answerEn: "background",
      phonetic: "/'bækgraund/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-043",
      kind: "word",
      promptZh: "平衡；差额\\nvi. 平衡；相等\\nvt. 称；权衡",
      answerEn: "balance",
      phonetic: "/'bælәns/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-044",
      kind: "word",
      promptZh: "行为；举止\\n行为",
      answerEn: "behavior",
      phonetic: "/bi'heivjә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-045",
      kind: "word",
      promptZh: "利益\\nvt. 有益于\\nvi. 受益",
      answerEn: "benefit",
      phonetic: "/'benifit/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-046",
      kind: "word",
      promptZh: "预算",
      answerEn: "budget",
      phonetic: "/'bʌdʒit/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-047",
      kind: "word",
      promptZh: "校园；大学生活",
      answerEn: "campus",
      phonetic: "/'kæmpәs/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-048",
      kind: "word",
      promptZh: "事业；生涯；成功\\n职业；专业",
      answerEn: "career",
      phonetic: "/kә'riә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-049",
      kind: "word",
      promptZh: "挑战；盘问\\nvt. 向...挑战；要求；怀疑\\nvi. 挑战",
      answerEn: "challenge",
      phonetic: "/'tʃælindʒ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-050",
      kind: "word",
      promptZh: "个性；字符；人物；性质",
      answerEn: "character",
      phonetic: "/'kærәktә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-051",
      kind: "word",
      promptZh: "社区；公众；共有；共同体\\n公众",
      answerEn: "community",
      phonetic: "/kә'mju:niti/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-052",
      kind: "word",
      promptZh: "比较；比喻；对照\\nvi. 相比\\nn. 比较\\n比较",
      answerEn: "compare",
      phonetic: "/kәm'pєә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-053",
      kind: "word",
      promptZh: "完全的；十足的；完成的\\nvt. 完成；完工",
      answerEn: "complete",
      phonetic: "/kәm'pli:t/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-054",
      kind: "word",
      promptZh: "情况；条件\\nvt. 使健康；以...为条件；决定",
      answerEn: "condition",
      phonetic: "/kәn'diʃәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-055",
      kind: "word",
      promptZh: "考虑；思考；认为",
      answerEn: "consider",
      phonetic: "/kәn'sidŋ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-056",
      kind: "word",
      promptZh: "消费者\\n消费者；用户",
      answerEn: "consumer",
      phonetic: "/kәn'sju:mә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-057",
      kind: "word",
      promptZh: "继续；延续；延长\\nvt. 使继续；使延长",
      answerEn: "continue",
      phonetic: "/kәn'tinju:/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-058",
      kind: "word",
      promptZh: "控制；管理；克制；控制器",
      answerEn: "control",
      phonetic: "/kәn'trәul/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-059",
      kind: "word",
      promptZh: "文化；修养；耕种\\nvt. 耕种；培养",
      answerEn: "culture",
      phonetic: "/'kʌltʃә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-060",
      kind: "word",
      promptZh: "顾客",
      answerEn: "customer",
      phonetic: "/'kʌstәmә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-061",
      kind: "word",
      promptZh: "决定；决心；决断\\n判定",
      answerEn: "decision",
      phonetic: "/di'siʒәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-062",
      kind: "word",
      promptZh: "程度；度数；学位；度\\n度",
      answerEn: "degree",
      phonetic: "/di'gri:/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-063",
      kind: "word",
      promptZh: "要求；需求；需要\\nv. 要求；查询",
      answerEn: "demand",
      phonetic: "/di'mɑ:nd/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-064",
      kind: "word",
      promptZh: "描述；描绘；画",
      answerEn: "describe",
      phonetic: "/di'skraib/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-065",
      kind: "word",
      promptZh: "设计；图样；方案；企图\\nv. 设计",
      answerEn: "design",
      phonetic: "/di'zain/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-066",
      kind: "word",
      promptZh: "细节；详情\\nvt. 详述；选派\\nvi. 画详图\\n详细数据",
      answerEn: "detail",
      phonetic: "/'di:teil/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-067",
      kind: "word",
      promptZh: "发展；使发达；进步；洗印",
      answerEn: "develop",
      phonetic: "/di'velәp/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-068",
      kind: "word",
      promptZh: "方向；指示",
      answerEn: "direction",
      phonetic: "/di'rekʃәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-069",
      kind: "word",
      promptZh: "经济；理财；节约\\n经济；整体",
      answerEn: "economy",
      phonetic: "/i'kɒnәmi/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-070",
      kind: "word",
      promptZh: "教育；训练；教育学\\n教育",
      answerEn: "education",
      phonetic: "/.edju'keiʃәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-071",
      kind: "word",
      promptZh: "结果；影响；效果；印象\\nvt. 实行",
      answerEn: "effect",
      phonetic: "/i'fekt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-072",
      kind: "word",
      promptZh: "有效率的；能干的",
      answerEn: "efficient",
      phonetic: "/i'fiʃәnt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-073",
      kind: "word",
      promptZh: "努力；成就",
      answerEn: "effort",
      phonetic: "/'efәt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-074",
      kind: "word",
      promptZh: "精力；精神；活力；能量\\n能",
      answerEn: "energy",
      phonetic: "/'enәdʒi/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-075",
      kind: "word",
      promptZh: "环境；外界；围绕\\n环境",
      answerEn: "environment",
      phonetic: "/in'vairәnmәnt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-076",
      kind: "word",
      promptZh: "尤其；特别；格外",
      answerEn: "especially",
      phonetic: "/i'speʃәli/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-077",
      kind: "word",
      promptZh: "事件；结果；事情的进程；竞赛项目\\n事件",
      answerEn: "event",
      phonetic: "/i'vent/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-078",
      kind: "word",
      promptZh: "根据；证据；迹象\\n证据；凭证",
      answerEn: "evidence",
      phonetic: "/'evidәns/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-079",
      kind: "word",
      promptZh: "经历；经验；体验\\nvt. 经历；体验",
      answerEn: "experience",
      phonetic: "/ik'spiәriәns/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-080",
      kind: "word",
      promptZh: "因素；因数；系数；基因",
      answerEn: "factor",
      phonetic: "/'fæktә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-081",
      kind: "word",
      promptZh: "失败；失败者；不足；缺乏",
      answerEn: "failure",
      phonetic: "/'feiljә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-082",
      kind: "word",
      promptZh: "熟悉的；常见的；亲密的\\nn. 熟友；常客",
      answerEn: "familiar",
      phonetic: "/fә'miljә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-083",
      kind: "word",
      promptZh: "面孔的一部分(如眼、口等)；特征；容貌；特色",
      answerEn: "feature",
      phonetic: "/'fi:tʃә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-084",
      kind: "word",
      promptZh: "财政；财务\\nvt. 供给...经费；负担经费\\nvi. 筹措资金",
      answerEn: "finance",
      phonetic: "/fai'næns/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-085",
      kind: "word",
      promptZh: "焦点；焦距\\nvi. 聚焦；注视\\nvt. 使聚焦；调焦",
      answerEn: "focus",
      phonetic: "/'fәukәs/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-086",
      kind: "word",
      promptZh: "外国的；外交的；外省的；外来的",
      answerEn: "foreign",
      phonetic: "/'fɒ:rin/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-087",
      kind: "word",
      promptZh: "正式的；形式的；礼仪的；拘于礼节的",
      answerEn: "formal",
      phonetic: "/'fɒ:mәl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-088",
      kind: "word",
      promptZh: "时常发生的；频繁的；快速的\\nvt. 时常来访；常常聚集",
      answerEn: "frequent",
      phonetic: "/'fri:kwәnt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-089",
      kind: "word",
      promptZh: "政府；内阁\\n政府；政治；政体",
      answerEn: "government",
      phonetic: "/'gʌvәnmәnt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-090",
      kind: "word",
      promptZh: "习惯；嗜好；习性\\nvt. 使穿衣",
      answerEn: "habit",
      phonetic: "/'hæbit/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-091",
      kind: "word",
      promptZh: "健康的；有益健康的；卫生的\\n健康的",
      answerEn: "healthy",
      phonetic: "/'helθi/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-092",
      kind: "word",
      promptZh: "历史；过去；经历；发展过程",
      answerEn: "history",
      phonetic: "/'histәri/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-093",
      kind: "word",
      promptZh: "识别；认为...等同于；确定；使参与\\nvi. 一致",
      answerEn: "identify",
      phonetic: "/ai'dentifai/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-094",
      kind: "word",
      promptZh: "改良；提高...的价值；改善；利用\\nvi. 变得更好",
      answerEn: "improve",
      phonetic: "/im'pru:v/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-095",
      kind: "word",
      promptZh: "包括；把...算入；包住\\nDOS内部命令:在CONFIG.SYS文件的一个配置块中包含另一配置块的内容",
      answerEn: "include",
      phonetic: "/in'klu:d/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-096",
      kind: "word",
      promptZh: "增加；增进；利益\\nvt. 增加；加大\\nvi. 增加",
      answerEn: "increase",
      phonetic: "/in'kri:s/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-097",
      kind: "word",
      promptZh: "人；个人；个体\\na. 个别的；个人的",
      answerEn: "individual",
      phonetic: "/.indi'vidʒuәl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-098",
      kind: "word",
      promptZh: "勤劳；工业；企业；产业",
      answerEn: "industry",
      phonetic: "/'indәstri/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-099",
      kind: "word",
      promptZh: "影响力；权力；势力\\nvt. 影响；改变",
      answerEn: "influence",
      phonetic: "/'influәns/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-100",
      kind: "word",
      promptZh: "消息；知识；通知；情报",
      answerEn: "information",
      phonetic: "/.infә'meiʃәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-101",
      kind: "word",
      promptZh: "国际的\\nn. 国别设定\\n国别设定",
      answerEn: "international",
      phonetic: "/.intә'næʃәnәl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-102",
      kind: "word",
      promptZh: "知识；学问；认识；知道",
      answerEn: "knowledge",
      phonetic: "/'nɒlidʒ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-103",
      kind: "word",
      promptZh: "语言；文字；措辞\\n语言",
      answerEn: "language",
      phonetic: "/'læŋgwidʒ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-104",
      kind: "word",
      promptZh: "地方性的；当地的；局部的；乡土的",
      answerEn: "local",
      phonetic: "/'lәukәl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-105",
      kind: "word",
      promptZh: "主修课；成年人；陆军少校\\na. 主要的；较多的",
      answerEn: "major",
      phonetic: "/'meidʒә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-106",
      kind: "word",
      promptZh: "方法；办法；条理；秩序\\n法",
      answerEn: "method",
      phonetic: "/'meθәd/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-107",
      kind: "word",
      promptZh: "现代人；有思想的人\\na. 现代的；时髦的",
      answerEn: "modern",
      phonetic: "/'mɒdәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-108",
      kind: "word",
      promptZh: "必要的",
      answerEn: "necessary",
      phonetic: "/'nesisәri/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-109",
      kind: "word",
      promptZh: "常态；标准；正常；普通\\na. 正常的",
      answerEn: "normal",
      phonetic: "/'nɒ:ml/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-110",
      kind: "word",
      promptZh: "机会；时机",
      answerEn: "opportunity",
      phonetic: "/.ɒpә'tju:niti/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-111",
      kind: "word",
      promptZh: "一项(或条、点)；个别项目；详细说明\\na. 特别的；独有的",
      answerEn: "particular",
      phonetic: "/pә'tikjulә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-112",
      kind: "word",
      promptZh: "政策；方针；策略；保险单\\n凭单",
      answerEn: "policy",
      phonetic: "/'pɒlisi/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-113",
      kind: "word",
      promptZh: "人口；人口数\\n群体；总体",
      answerEn: "population",
      phonetic: "/.pɒpju'leiʃәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-114",
      kind: "word",
      promptZh: "肯定的；积极的；有把握的\\n正的；阳性的",
      answerEn: "positive",
      phonetic: "/'pɒzitiv/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-115",
      kind: "word",
      promptZh: "可能的",
      answerEn: "possible",
      phonetic: "/'pɒsәbl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-116",
      kind: "word",
      promptZh: "实践；练习；实行；惯例",
      answerEn: "practice",
      phonetic: "/'præktis/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-117",
      kind: "word",
      promptZh: "压；榨；按；强制",
      answerEn: "pressure",
      phonetic: "/'preʃә/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-118",
      kind: "word",
      promptZh: "私人的；秘密的；私立的；隐蔽的\\nn. 士兵",
      answerEn: "private",
      phonetic: "/'praivit/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-119",
      kind: "word",
      promptZh: "程序；进行；过程\\nvt. 加工；使...接受处理",
      answerEn: "process",
      phonetic: "/'prɒses/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-120",
      kind: "word",
      promptZh: "公众；民众\\na. 公众的；公共的；公立的",
      answerEn: "public",
      phonetic: "/'pʌblik/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-121",
      kind: "word",
      promptZh: "目的；意向；决心；用途",
      answerEn: "purpose",
      phonetic: "/'pә:pәs/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-122",
      kind: "word",
      promptZh: "品质；特性；才能；质量\\na. 优质的\\n品质",
      answerEn: "quality",
      phonetic: "/'kwɒlәti/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-123",
      kind: "word",
      promptZh: "合理的；明理的；适当的\\n合理的；公道的",
      answerEn: "reasonable",
      phonetic: "/'ri:znәbl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-124",
      kind: "word",
      promptZh: "关系；关联\\n关系",
      answerEn: "relationship",
      phonetic: "/ri'leiʃәnʃip/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-125",
      kind: "word",
      promptZh: "研究；调查；考察\\nvi. 研究",
      answerEn: "research",
      phonetic: "/ri'sә:tʃ/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-126",
      kind: "word",
      promptZh: "资源；财力；办法；策略",
      answerEn: "resource",
      phonetic: "/ri'sɒ:s/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-127",
      kind: "word",
      promptZh: "结果；成绩；答案\\nvi. 产生；致使\\n结果",
      answerEn: "result",
      phonetic: "/ri'zʌlt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-128",
      kind: "word",
      promptZh: "安全；保险；平安；保安设备\\nvt. 保护",
      answerEn: "safety",
      phonetic: "/'seifti/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-129",
      kind: "word",
      promptZh: "科学；学科；学问；自然科学\\n科学",
      answerEn: "science",
      phonetic: "/'saiәns/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-130",
      kind: "word",
      promptZh: "服务；贡献；雇佣；公职",
      answerEn: "service",
      phonetic: "/'sә:vis/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-131",
      kind: "word",
      promptZh: "重要的；有效的；有含义的；暗示的",
      answerEn: "significant",
      phonetic: "/sig'nifikәnt/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-132",
      kind: "word",
      promptZh: "社会；社交界；交往；社团",
      answerEn: "society",
      phonetic: "/sә'saiәti/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-133",
      kind: "word",
      promptZh: "解决；解答；溶液\\n溶液",
      answerEn: "solution",
      phonetic: "/sә'lu:ʃәn/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-134",
      kind: "word",
      promptZh: "专辑；专车；号外；特别的东西",
      answerEn: "special",
      phonetic: "/'speʃәl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-135",
      kind: "word",
      promptZh: "支持；支撑；援助；供养",
      answerEn: "support",
      phonetic: "/sә'pɒ:t/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-136",
      kind: "word",
      promptZh: "技术；工业技术；术语\\n技术学；工艺学",
      answerEn: "technology",
      phonetic: "/tek'nɒlәdʒi/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-137",
      kind: "word",
      promptZh: "传统的；惯例的\\n传统的；惯例的",
      answerEn: "traditional",
      phonetic: "/trә'diʃәnl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-138",
      kind: "word",
      promptZh: "运输；运输工具；激动；狂喜",
      answerEn: "transport",
      phonetic: "/træns'pɒ:t/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-w-139",
      kind: "word",
      promptZh: "有价值的；贵重的；宝贵的；可估价的\\n有价值的",
      answerEn: "valuable",
      phonetic: "/'væljuәbl/",
      tags: [
        "CET4",
        "word"
      ]
    },
    {
      id: "cet4-s-001",
      kind: "sentence",
      promptZh: "大学生应该培养独立思考的能力。",
      answerEn: "College students should develop the ability to think independently.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-002",
      kind: "sentence",
      promptZh: "越来越多的人关注环境保护。",
      answerEn: "More and more people pay attention to environmental protection.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-003",
      kind: "sentence",
      promptZh: "良好的习惯会影响我们的学习效果。",
      answerEn: "Good habits can affect the results of our study.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-004",
      kind: "sentence",
      promptZh: "学校应该为学生提供更多实践机会。",
      answerEn: "Schools should provide students with more practical opportunities.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-005",
      kind: "sentence",
      promptZh: "这个社区需要更安全的公共空间。",
      answerEn: "This community needs safer public spaces.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-006",
      kind: "sentence",
      promptZh: "互联网让信息传播得更快。",
      answerEn: "The Internet allows information to spread faster.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-007",
      kind: "sentence",
      promptZh: "教育在社会发展中起着重要作用。",
      answerEn: "Education plays an important role in social development.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-008",
      kind: "sentence",
      promptZh: "我们应该学会合理安排时间。",
      answerEn: "We should learn to arrange our time reasonably.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-009",
      kind: "sentence",
      promptZh: "这项研究解释了睡眠和记忆的关系。",
      answerEn: "This study explains the relationship between sleep and memory.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-010",
      kind: "sentence",
      promptZh: "年轻人需要面对经济压力。",
      answerEn: "Young people need to face economic pressure.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-011",
      kind: "sentence",
      promptZh: "公共交通可以减少城市污染。",
      answerEn: "Public transportation can reduce pollution in cities.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-012",
      kind: "sentence",
      promptZh: "团队合作有助于解决复杂问题。",
      answerEn: "Teamwork helps solve complex problems.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-013",
      kind: "sentence",
      promptZh: "我们必须重视食品安全。",
      answerEn: "We must attach importance to food safety.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-014",
      kind: "sentence",
      promptZh: "这次活动吸引了许多当地居民。",
      answerEn: "This event attracted many local residents.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-015",
      kind: "sentence",
      promptZh: "阅读可以拓宽我们的视野。",
      answerEn: "Reading can broaden our view of the world.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-016",
      kind: "sentence",
      promptZh: "手机已经成为日常生活的一部分。",
      answerEn: "Mobile phones have become part of daily life.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-017",
      kind: "sentence",
      promptZh: "志愿服务能增强责任感。",
      answerEn: "Volunteer service can strengthen a sense of responsibility.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-018",
      kind: "sentence",
      promptZh: "政府应该支持绿色能源。",
      answerEn: "The government should support green energy.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-019",
      kind: "sentence",
      promptZh: "每个人都可以为社会做出贡献。",
      answerEn: "Everyone can make a contribution to society.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-020",
      kind: "sentence",
      promptZh: "清晰的目标能提高学习效率。",
      answerEn: "Clear goals can improve learning efficiency.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-021",
      kind: "sentence",
      promptZh: "我们应该尊重不同的文化。",
      answerEn: "We should respect different cultures.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-022",
      kind: "sentence",
      promptZh: "这个问题需要立即处理。",
      answerEn: "This issue needs to be dealt with immediately.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-023",
      kind: "sentence",
      promptZh: "互联网给传统教育带来了挑战。",
      answerEn: "The Internet has brought challenges to traditional education.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-024",
      kind: "sentence",
      promptZh: "学生应该积极参加课堂讨论。",
      answerEn: "Students should actively take part in class discussions.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-025",
      kind: "sentence",
      promptZh: "这本书记录了城市的历史。",
      answerEn: "This book records the history of the city.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-026",
      kind: "sentence",
      promptZh: "合理的计划可以减少浪费。",
      answerEn: "A reasonable plan can reduce waste.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-027",
      kind: "sentence",
      promptZh: "他用简单的语言解释了这个观点。",
      answerEn: "He explained this point in simple language.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-028",
      kind: "sentence",
      promptZh: "这份工作要求良好的沟通能力。",
      answerEn: "This job requires good communication skills.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-029",
      kind: "sentence",
      promptZh: "保护水资源对未来很重要。",
      answerEn: "Protecting water resources is important for the future.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet4-s-030",
      kind: "sentence",
      promptZh: "我们应该保持积极的态度。",
      answerEn: "We should keep a positive attitude.",
      tags: [
        "CET4",
        "sentence",
        "translation"
      ]
    }
  ],
  cet6: [
    {
      id: "cet6-w-001",
      kind: "word",
      promptZh: "反常的；不规则的；变态的；畸形的\\nn. 畸形的人",
      answerEn: "abnormal",
      phonetic: "/æb'nɒ:mәl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-002",
      kind: "word",
      promptZh: "废止；革除；消灭\\n废除；取消",
      answerEn: "abolish",
      phonetic: "/ә'bɒliʃ/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-003",
      kind: "word",
      promptZh: "突然的；唐突的；陡峭的；不连贯的",
      answerEn: "abrupt",
      phonetic: "/ә'brʌpt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-004",
      kind: "word",
      promptZh: "抽象的；深奥的\\nn. 摘要；抽象概念\\nvt. 摘要；提炼",
      answerEn: "abstract",
      phonetic: "/'æbstrækt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-005",
      kind: "word",
      promptZh: "荒谬的；不合理的；可笑的\\nn. 荒诞",
      answerEn: "absurd",
      phonetic: "/әb'sә:d/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-006",
      kind: "word",
      promptZh: "丰富；充足；大量\\n丰富；充裕",
      answerEn: "abundance",
      phonetic: "/ә'bʌndәns/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-007",
      kind: "word",
      promptZh: "滥用；虐待；恶习；辱骂\\nvt. 滥用",
      answerEn: "abuse",
      phonetic: "/ә'bju:s.ә'bju:z/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-008",
      kind: "word",
      promptZh: "加速；促进",
      answerEn: "accelerate",
      phonetic: "/әk'selәreit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-009",
      kind: "word",
      promptZh: "易接近的；可进入的；可使用的；易受影响的",
      answerEn: "accessible",
      phonetic: "/әk'sesәbl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-010",
      kind: "word",
      promptZh: "膳宿；预订铺位；适应性调节；调和",
      answerEn: "accommodation",
      phonetic: "/ә.kɒmә'deiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-011",
      kind: "word",
      promptZh: "问责；责任",
      answerEn: "accountability",
      phonetic: "/ә.kauntә'biliti/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-012",
      kind: "word",
      promptZh: "积聚；堆积",
      answerEn: "accumulate",
      phonetic: "/ә'kju:mjuleit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-013",
      kind: "word",
      promptZh: "正确的；精确的\\n准确的；精确的",
      answerEn: "accurate",
      phonetic: "/'ækjurәt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-014",
      kind: "word",
      promptZh: "承认；告知收悉；答谢；报偿\\n承认",
      answerEn: "acknowledge",
      phonetic: "/әk'nɒlidʒ/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-015",
      kind: "word",
      promptZh: "适应；改编；改编本\\n适应",
      answerEn: "adaptation",
      phonetic: "/.ædæp'teiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-016",
      kind: "word",
      promptZh: "适当的；足够的\\n胜任的；充分的",
      answerEn: "adequate",
      phonetic: "/'ædikwәt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-017",
      kind: "word",
      promptZh: "提倡者；拥护者\\nvt. 主张；提倡",
      answerEn: "advocate",
      phonetic: "/'ædvәkeit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-018",
      kind: "word",
      promptZh: "影响；病；喜爱；情感",
      answerEn: "affection",
      phonetic: "/ә'fekʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-019",
      kind: "word",
      promptZh: "议程；日常工作事项\\n待议事件",
      answerEn: "agenda",
      phonetic: "/ә'dʒendә/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-020",
      kind: "word",
      promptZh: "侵略的；挑畔的；进取的\\n侵略的；爱挑衅的",
      answerEn: "aggressive",
      phonetic: "/ә'gresiv/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-021",
      kind: "word",
      promptZh: "分派；分配\\n分配",
      answerEn: "allocate",
      phonetic: "/'ælәukeit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-022",
      kind: "word",
      promptZh: "不明确的；模棱两可的\\n意思含糊的；模棱两可的；暧昧的",
      answerEn: "ambiguous",
      phonetic: "/æm'bigjuәs/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-023",
      kind: "word",
      promptZh: "分析者；精神分析学家\\n分析员；化验员",
      answerEn: "analyst",
      phonetic: "/'ænәlist/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-024",
      kind: "word",
      promptZh: "预期；占先；加速；提前使用\\n提前出现",
      answerEn: "anticipate",
      phonetic: "/æn'tisipeit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-025",
      kind: "word",
      promptZh: "清晰可见的；显然的；表面上的\\n外在的",
      answerEn: "apparent",
      phonetic: "/ә'pærәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-026",
      kind: "word",
      promptZh: "赏识；鉴别；为...而感激；领会",
      answerEn: "appreciate",
      phonetic: "/ә'pri:ʃieit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-027",
      kind: "word",
      promptZh: "适当的\\n适当的；拨出；占用",
      answerEn: "appropriate",
      phonetic: "/ә'prәupriәt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-028",
      kind: "word",
      promptZh: "建筑学；建筑式样\\n体系结构",
      answerEn: "architecture",
      phonetic: "/'ɑ:kitektʃә/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-029",
      kind: "word",
      promptZh: "人造的；假的；非原地产的\\n人工的；伟牟",
      answerEn: "artificial",
      phonetic: "/.ɑ:ti'fiʃәl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-030",
      kind: "word",
      promptZh: "与会者；集会；装配；组件\\n装配",
      answerEn: "assembly",
      phonetic: "/ә'sembli/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-031",
      kind: "word",
      promptZh: "估定；对...征税；评定\\n估计；估价",
      answerEn: "assess",
      phonetic: "/ә'ses/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-032",
      kind: "word",
      promptZh: "资产；有益的东西",
      answerEn: "asset",
      phonetic: "/'æset/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-033",
      kind: "word",
      promptZh: "假定；自负；担任；假装\\n假定",
      answerEn: "assumption",
      phonetic: "/ә'sʌmpʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-034",
      kind: "word",
      promptZh: "大气；空气；气氛\\n大气；大气压",
      answerEn: "atmosphere",
      phonetic: "/'ætmәsfiә/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-035",
      kind: "word",
      promptZh: "权力；当权者；当局；权威",
      answerEn: "authority",
      phonetic: "/ɒ:'θɒriti/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-036",
      kind: "word",
      promptZh: "自动化；自动操作\\n自动学",
      answerEn: "automation",
      phonetic: "/.ɒ:tә'meiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-037",
      kind: "word",
      promptZh: "能力；性能；约束力\\n能力",
      answerEn: "capability",
      phonetic: "/.keipә'biliti/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-038",
      kind: "word",
      promptZh: "种类；类项\\n分类",
      answerEn: "category",
      phonetic: "/'kætigәri/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-039",
      kind: "word",
      promptZh: "认知的；认识的",
      answerEn: "cognitive",
      phonetic: "/'kɒgnitiv/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-040",
      kind: "word",
      promptZh: "崩溃；倒塌；虚脱\\nvi. 倒塌；瓦解\\nvt. 使倒塌",
      answerEn: "collapse",
      phonetic: "/kә'læps/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-041",
      kind: "word",
      promptZh: "同事",
      answerEn: "colleague",
      phonetic: "/'kɒli:g/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-042",
      kind: "word",
      promptZh: "商业的；商用的；商品化的\\nn. 商业广告节目",
      answerEn: "commercial",
      phonetic: "/kә'mә:ʃәl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-043",
      kind: "word",
      promptZh: "委托；交押；承担义务；赞助\\n院禁",
      answerEn: "commitment",
      phonetic: "/kә'mitmәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-044",
      kind: "word",
      promptZh: "农产品；商品；有用的物品\\n商品；货物",
      answerEn: "commodity",
      phonetic: "/kә'mɒditi/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-045",
      kind: "word",
      promptZh: "竞争者\\n竞争者；竞争对手",
      answerEn: "competitor",
      phonetic: "/kәm'petitә/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-046",
      kind: "word",
      promptZh: "广泛的；有理解力的；综合的\\n广泛的；综合的",
      answerEn: "comprehensive",
      phonetic: "/.kɒmpri'hensiv/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-047",
      kind: "word",
      promptZh: "浓缩；精选\\nv. 集中；专心",
      answerEn: "concentrate",
      phonetic: "/'kɒnsәntreit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-048",
      kind: "word",
      promptZh: "观念；概念\\n概念",
      answerEn: "concept",
      phonetic: "/'kɒnsept/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-049",
      kind: "word",
      promptZh: "关于\\n关于",
      answerEn: "concerning",
      phonetic: "/kәn'sә:niŋ/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-050",
      kind: "word",
      promptZh: "凝结物；混凝土\\na. 具体的；实在的；混凝土的\\nv. (使)凝结",
      answerEn: "concrete",
      phonetic: "/'kɒnkri:t/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-051",
      kind: "word",
      promptZh: "行为；举动；指导\\nvt. 为人；指挥",
      answerEn: "conduct",
      phonetic: "/'kɔndʌkt, -dәkt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-052",
      kind: "word",
      promptZh: "战斗；冲突；矛盾；争执\\nvi. 争执",
      answerEn: "conflict",
      phonetic: "/'kɒnflikt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-053",
      kind: "word",
      promptZh: "结果；重要性\\n结果；后果；推断",
      answerEn: "consequence",
      phonetic: "/'kɒnsikwәns/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-054",
      kind: "word",
      promptZh: "保守的；守旧的；有保存力的\\n防腐剂；保存剂",
      answerEn: "conservative",
      phonetic: "/kәn'sә:vәtiv/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-055",
      kind: "word",
      promptZh: "相当的；可观的；重要的",
      answerEn: "considerable",
      phonetic: "/kәn'sidәrәbl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-056",
      kind: "word",
      promptZh: "一致的；坚持的；并立的；坚固的",
      answerEn: "consistent",
      phonetic: "/kәn'sistәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-057",
      kind: "word",
      promptZh: "构成；组成；任命\\n构造",
      answerEn: "constitute",
      phonetic: "/kәn'stitjut/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-058",
      kind: "word",
      promptZh: "顾问；征询意见者\\n顾问医师",
      answerEn: "consultant",
      phonetic: "/kәn'sʌltәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-059",
      kind: "word",
      promptZh: "消费者\\n消费者；用户",
      answerEn: "consumer",
      phonetic: "/kәn'sju:mә/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-060",
      kind: "word",
      promptZh: "同时代的人\\na. 同时代的；属于同一时期的",
      answerEn: "contemporary",
      phonetic: "/kәn'tempәrәri/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-061",
      kind: "word",
      promptZh: "上下文；背景；来龙去脉\\nn. 上下文\\n上下文",
      answerEn: "context",
      phonetic: "/'kɒntekst/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-062",
      kind: "word",
      promptZh: "合约；婚约；契约\\nvt. 使皱缩；使缩短",
      answerEn: "contract",
      phonetic: "/'kɒntrækt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-063",
      kind: "word",
      promptZh: "论争；辩论；论战；争论\\n论战",
      answerEn: "controversy",
      phonetic: "/'kɒntrәvә:si/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-064",
      kind: "word",
      promptZh: "社团的；合伙的；公司的\\n团体的；法人的",
      answerEn: "corporate",
      phonetic: "/'kɒ:pәrit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-065",
      kind: "word",
      promptZh: "标准；准则；规范\\n判据",
      answerEn: "criterion",
      phonetic: "/krai'tiәriәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-066",
      kind: "word",
      promptZh: "批评的；决定性的；危险的；临界的\\n危象的",
      answerEn: "critical",
      phonetic: "/'kritikәl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-067",
      kind: "word",
      promptZh: "课程\\n课程；学程",
      answerEn: "curriculum",
      phonetic: "/kә'rikjulәm/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-068",
      kind: "word",
      promptZh: "赤字；不足额\\n短缺",
      answerEn: "deficit",
      phonetic: "/'defisit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-069",
      kind: "word",
      promptZh: "示范；证明\\nvi. 示威",
      answerEn: "demonstrate",
      phonetic: "/'demәnstreit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-070",
      kind: "word",
      promptZh: "不景气；消沉；沮丧；洼地\\n抑郁",
      answerEn: "depression",
      phonetic: "/di'preʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-071",
      kind: "word",
      promptZh: "尺寸；次元；面积；维数\\nvt. 标出尺寸",
      answerEn: "dimension",
      phonetic: "/dai'menʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-072",
      kind: "word",
      promptZh: "谈话；演讲\\nvi. 谈话；讲述",
      answerEn: "discourse",
      phonetic: "/'diskɒ:s/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-073",
      kind: "word",
      promptZh: "不同的；变化多的",
      answerEn: "diverse",
      phonetic: "/dai'vә:s/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-074",
      kind: "word",
      promptZh: "占优势的；支配的\\n优性的；显性的",
      answerEn: "dominant",
      phonetic: "/'dɒminәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-075",
      kind: "word",
      promptZh: "戏剧性的；生动的",
      answerEn: "dramatic",
      phonetic: "/drә'mætik/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-076",
      kind: "word",
      promptZh: "经济上的；实用的；节省的\\n经济的",
      answerEn: "economic",
      phonetic: "/.i:kә'nɒmik/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-077",
      kind: "word",
      promptZh: "有效率的；能干的",
      answerEn: "efficient",
      phonetic: "/i'fiʃәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-078",
      kind: "word",
      promptZh: "精华；精锐；中坚分子",
      answerEn: "elite",
      phonetic: "/ei'li:t/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-079",
      kind: "word",
      promptZh: "浮现；形成；出现；(事实)显露",
      answerEn: "emerge",
      phonetic: "/i'mә:dʒ/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-080",
      kind: "word",
      promptZh: "发射；射出；发行\\n发射；遗精",
      answerEn: "emission",
      phonetic: "/i'miʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-081",
      kind: "word",
      promptZh: "企业；事业心；进取心；干事业\\n企业",
      answerEn: "enterprise",
      phonetic: "/'entәpraiz/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-082",
      kind: "word",
      promptZh: "周围的；环境的\\n环境的；环保的",
      answerEn: "environmental",
      phonetic: "/in.vaiәrәn'mentәl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-083",
      kind: "word",
      promptZh: "同等物；等价物；相等物\\na. 相等的；相当的",
      answerEn: "equivalent",
      phonetic: "/i'kwivәlәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-084",
      kind: "word",
      promptZh: "人种的；种族的\\n人种的",
      answerEn: "ethnic",
      phonetic: "/'eθnik/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-085",
      kind: "word",
      promptZh: "评估；评价；赋值",
      answerEn: "evaluate",
      phonetic: "/i'væljueit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-086",
      kind: "word",
      promptZh: "进化；发展；进展；(气体)放出",
      answerEn: "evolution",
      phonetic: "/.i:vә'lu:ʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-087",
      kind: "word",
      promptZh: "过度的；过多的；极端的\\n过度的；过分的",
      answerEn: "excessive",
      phonetic: "/ik'sesiv/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-088",
      kind: "word",
      promptZh: "详述的；清楚的；直言的",
      answerEn: "explicit",
      phonetic: "/ik'splisit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-089",
      kind: "word",
      promptZh: "易曲的；灵活的；柔顺的；能变形的",
      answerEn: "flexible",
      phonetic: "/'fleksәbl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-090",
      kind: "word",
      promptZh: "结构；骨架；参照标准；准则",
      answerEn: "framework",
      phonetic: "/'freimwә:k/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-091",
      kind: "word",
      promptZh: "基本原理；原则；基波\\na. 基本的；重要的",
      answerEn: "fundamental",
      phonetic: "/.fʌndә'mentәl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-092",
      kind: "word",
      promptZh: "遗产；祖先遗留物；继承物\\n遗传性",
      answerEn: "heritage",
      phonetic: "/'heritidʒ/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-093",
      kind: "word",
      promptZh: "历史上著名的；有历史性的",
      answerEn: "historic",
      phonetic: "/hi'stɒrik/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-094",
      kind: "word",
      promptZh: "移民；移居\\n移民",
      answerEn: "immigration",
      phonetic: "/.imi'greiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-095",
      kind: "word",
      promptZh: "动机\\na. 激励的",
      answerEn: "incentive",
      phonetic: "/in'sentiv/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-096",
      kind: "word",
      promptZh: "合并的；组成公司的；一体化的\\nvt. 吸收；合并",
      answerEn: "incorporate",
      phonetic: "/in'kɒ:pәreit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-097",
      kind: "word",
      promptZh: "不可避免的；必然的\\n不可避免的；无法规避的；必然的",
      answerEn: "inevitable",
      phonetic: "/in'evitәbl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-098",
      kind: "word",
      promptZh: "基础结构；基础设施\\n基础设施",
      answerEn: "infrastructure",
      phonetic: "/'infrәstrʌktʃә/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-099",
      kind: "word",
      promptZh: "改革；创新\\n创新；刷新",
      answerEn: "innovation",
      phonetic: "/.inәu'veiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-100",
      kind: "word",
      promptZh: "机构；惯例；制度\\n机关；设施",
      answerEn: "institution",
      phonetic: "/.insti'tju:ʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-101",
      kind: "word",
      promptZh: "交互作用；交感\\n交互作用",
      answerEn: "interaction",
      phonetic: "/.intәr'ækʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-102",
      kind: "word",
      promptZh: "解释；演出；翻译\\n插值；插值法",
      answerEn: "interpretation",
      phonetic: "/in.tә:pri'teiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-103",
      kind: "word",
      promptZh: "投资\\n包埋料；围模料；包埋法；围模法",
      answerEn: "investment",
      phonetic: "/in'vestmәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-104",
      kind: "word",
      promptZh: "合法的；正当的；婚生的\\nvt. 认为正当；立为嫡嗣",
      answerEn: "legitimate",
      phonetic: "/li'dʒitimәt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-105",
      kind: "word",
      promptZh: "机械；机构；结构；机理",
      answerEn: "mechanism",
      phonetic: "/'mekәnizm/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-106",
      kind: "word",
      promptZh: "移民；移往；移动\\n迁移",
      answerEn: "migration",
      phonetic: "/mai'greiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-107",
      kind: "word",
      promptZh: "动机；刺激；推动\\n促动；推动",
      answerEn: "motivation",
      phonetic: "/.mәuti'veiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-108",
      kind: "word",
      promptZh: "叙述；故事\\na. 叙述的；叙事的；故事体的",
      answerEn: "narrative",
      phonetic: "/'nærәtiv/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-109",
      kind: "word",
      promptZh: "商议；谈判；交涉\\nvt. 谈妥；转让",
      answerEn: "negotiate",
      phonetic: "/ni'gәuʃieit/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-110",
      kind: "word",
      promptZh: "目的；目标；宗旨；宾格",
      answerEn: "objective",
      phonetic: "/әb'dʒektiv/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-111",
      kind: "word",
      promptZh: "定方位；适应；向东方\\nn. 方向\\n方向",
      answerEn: "orientation",
      phonetic: "/.ɒ:rien'teiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-112",
      kind: "word",
      promptZh: "参加者；参与者\\na. 有份的；参加的；参与的",
      answerEn: "participant",
      phonetic: "/pɑ:'tisipәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-113",
      kind: "word",
      promptZh: "知觉；感觉；领悟力；获取\\n知觉",
      answerEn: "perception",
      phonetic: "/pә'sepʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-114",
      kind: "word",
      promptZh: "现象；迹象；表现；奇迹",
      answerEn: "phenomenon",
      phonetic: "/fi'nɒminәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-115",
      kind: "word",
      promptZh: "潜在性；可能性；潜力；潜能",
      answerEn: "potential",
      phonetic: "/pә'tenʃәl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-116",
      kind: "word",
      promptZh: "隐私；隐居；秘密\\n个人保密权",
      answerEn: "privacy",
      phonetic: "/'praivәsi/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-117",
      kind: "word",
      promptZh: "心理学；心理状态\\n心理学",
      answerEn: "psychology",
      phonetic: "/sai'kɒlәdʒi/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-118",
      kind: "word",
      promptZh: "出版物；出版；公布\\n发布",
      answerEn: "publication",
      phonetic: "/.pʌbli'keiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-119",
      kind: "word",
      promptZh: "规则；管理；调整\\n调整；规章",
      answerEn: "regulation",
      phonetic: "/.regju'leiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-120",
      kind: "word",
      promptZh: "可靠的；可信赖的\\n可靠的；可信赖的；确实的",
      answerEn: "reliable",
      phonetic: "/ri'laiәbl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-121",
      kind: "word",
      promptZh: "表示法；表现；陈述；代表\\n表示法指定",
      answerEn: "representation",
      phonetic: "/.reprizen'teiʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-122",
      kind: "word",
      promptZh: "扇形；部门；部分；函数尺",
      answerEn: "sector",
      phonetic: "/'sektә/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-123",
      kind: "word",
      promptZh: "重要的；有效的；有含义的；暗示的",
      answerEn: "significant",
      phonetic: "/sig'nifikәnt/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-124",
      kind: "word",
      promptZh: "战略；策略\\n战略；策略",
      answerEn: "strategy",
      phonetic: "/'strætidʒi/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-125",
      kind: "word",
      promptZh: "重要材料(或事物)；有实际价值的东西\\na. 实质上的；物质的；有内容的",
      answerEn: "substantial",
      phonetic: "/sәb'stænʃәl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-126",
      kind: "word",
      promptZh: "可持续的",
      answerEn: "sustainable",
      phonetic: "/sә'steinәbl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-127",
      kind: "word",
      promptZh: "转变；转换；变迁；过渡时期",
      answerEn: "transition",
      phonetic: "/træn'ziʃәn/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-w-128",
      kind: "word",
      promptZh: "易受伤害的；有弱点的；易受影响的；脆弱的",
      answerEn: "vulnerable",
      phonetic: "/'vʌlnәrәbl/",
      tags: [
        "CET6",
        "word"
      ]
    },
    {
      id: "cet6-s-001",
      kind: "sentence",
      promptZh: "技术创新正在重塑就业市场。",
      answerEn: "Technological innovation is reshaping the job market.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-002",
      kind: "sentence",
      promptZh: "公共政策应该考虑长期社会影响。",
      answerEn: "Public policy should consider long-term social impacts.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-003",
      kind: "sentence",
      promptZh: "数据隐私已经成为数字时代的重要议题。",
      answerEn: "Data privacy has become an important issue in the digital age.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-004",
      kind: "sentence",
      promptZh: "这项研究揭示了消费行为的变化。",
      answerEn: "This research reveals changes in consumer behavior.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-005",
      kind: "sentence",
      promptZh: "企业需要在效率和公平之间取得平衡。",
      answerEn: "Enterprises need to balance efficiency and fairness.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-006",
      kind: "sentence",
      promptZh: "媒体叙事会影响公众对事件的理解。",
      answerEn: "Media narratives can influence public understanding of events.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-007",
      kind: "sentence",
      promptZh: "城市规划应当关注弱势群体的需求。",
      answerEn: "Urban planning should address the needs of vulnerable groups.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-008",
      kind: "sentence",
      promptZh: "气候变化要求各国采取协调行动。",
      answerEn: "Climate change requires coordinated action from different countries.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-009",
      kind: "sentence",
      promptZh: "教育资源分配不均会扩大社会差距。",
      answerEn: "Unequal distribution of educational resources can widen social gaps.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-010",
      kind: "sentence",
      promptZh: "自动化提高了生产率，也带来了新的挑战。",
      answerEn: "Automation improves productivity but also brings new challenges.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-011",
      kind: "sentence",
      promptZh: "学术写作需要清晰的结构和可靠证据。",
      answerEn: "Academic writing requires clear structure and reliable evidence.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-012",
      kind: "sentence",
      promptZh: "文化遗产保护离不开社区参与。",
      answerEn: "The protection of cultural heritage depends on community participation.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-013",
      kind: "sentence",
      promptZh: "公共卫生危机会考验社会治理能力。",
      answerEn: "A public health crisis tests the capacity of social governance.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-014",
      kind: "sentence",
      promptZh: "可持续发展不能只依赖技术方案。",
      answerEn: "Sustainable development cannot rely only on technological solutions.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-015",
      kind: "sentence",
      promptZh: "收入差距可能削弱社会信任。",
      answerEn: "Income inequality may weaken social trust.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-016",
      kind: "sentence",
      promptZh: "网络平台应该承担更多社会责任。",
      answerEn: "Online platforms should take more social responsibility.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-017",
      kind: "sentence",
      promptZh: "这份报告对现有制度提出了批评。",
      answerEn: "This report criticizes the existing system.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-018",
      kind: "sentence",
      promptZh: "人口老龄化会改变医疗需求。",
      answerEn: "Population aging will change medical needs.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-019",
      kind: "sentence",
      promptZh: "跨文化交流需要尊重和耐心。",
      answerEn: "Cross-cultural communication requires respect and patience.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-020",
      kind: "sentence",
      promptZh: "研究人员需要避免片面的结论。",
      answerEn: "Researchers need to avoid one-sided conclusions.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-021",
      kind: "sentence",
      promptZh: "过度消费会增加环境负担。",
      answerEn: "Excessive consumption increases the environmental burden.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-022",
      kind: "sentence",
      promptZh: "数字工具可以提升公共服务的可及性。",
      answerEn: "Digital tools can improve access to public services.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-023",
      kind: "sentence",
      promptZh: "社会转型往往伴随着价值冲突。",
      answerEn: "Social transition is often accompanied by conflicts of values.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-024",
      kind: "sentence",
      promptZh: "有效监管可以减少市场风险。",
      answerEn: "Effective regulation can reduce market risks.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-025",
      kind: "sentence",
      promptZh: "这个案例说明了制度设计的重要性。",
      answerEn: "This case illustrates the importance of institutional design.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-026",
      kind: "sentence",
      promptZh: "企业形象会影响消费者信任。",
      answerEn: "Corporate image can affect consumer trust.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-027",
      kind: "sentence",
      promptZh: "城市更新不能忽视原有居民。",
      answerEn: "Urban renewal should not ignore original residents.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-028",
      kind: "sentence",
      promptZh: "心理健康问题需要更公开的讨论。",
      answerEn: "Mental health issues need more open discussion.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-029",
      kind: "sentence",
      promptZh: "国际合作有助于应对全球挑战。",
      answerEn: "International cooperation helps address global challenges.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    },
    {
      id: "cet6-s-030",
      kind: "sentence",
      promptZh: "批判性思维能帮助我们识别偏见。",
      answerEn: "Critical thinking helps us identify bias.",
      tags: [
        "CET6",
        "sentence",
        "translation"
      ]
    }
  ],
  kaoyan: [
    {
      id: "kaoyan-w-001",
      kind: "word",
      promptZh: "放弃；抛弃；遗弃；使屈从",
      answerEn: "abandon",
      phonetic: "/ә'bændәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-002",
      kind: "word",
      promptZh: "停留；遵守；居留；继续下去\\nvt. 忍受",
      answerEn: "abide",
      phonetic: "/ә'baid/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-003",
      kind: "word",
      promptZh: "废止；革除；消灭\\n废除；取消",
      answerEn: "abolish",
      phonetic: "/ә'bɒliʃ/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-004",
      kind: "word",
      promptZh: "大量存在；富于；充满",
      answerEn: "abound",
      phonetic: "/ә'baund/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-005",
      kind: "word",
      promptZh: "抽象的；深奥的\\nn. 摘要；抽象概念\\nvt. 摘要；提炼",
      answerEn: "abstract",
      phonetic: "/'æbstrækt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-006",
      kind: "word",
      promptZh: "荒谬的；不合理的；可笑的\\nn. 荒诞",
      answerEn: "absurd",
      phonetic: "/әb'sә:d/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-007",
      kind: "word",
      promptZh: "学院的；学术的；不切实际的\\nn. 大学生；大学教师",
      answerEn: "academic",
      phonetic: "/.ækә'demik/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-008",
      kind: "word",
      promptZh: "加速；促进",
      answerEn: "accelerate",
      phonetic: "/әk'selәreit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-009",
      kind: "word",
      promptZh: "承认；告知收悉；答谢；报偿\\n承认",
      answerEn: "acknowledge",
      phonetic: "/әk'nɒlidʒ/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-010",
      kind: "word",
      promptZh: "获得；学到\\n目标锁定",
      answerEn: "acquire",
      phonetic: "/ә'kwaiә/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-011",
      kind: "word",
      promptZh: "使适应；改编\\nvi. 适应",
      answerEn: "adapt",
      phonetic: "/ә'dæpt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-012",
      kind: "word",
      promptZh: "适当的；足够的\\n胜任的；充分的",
      answerEn: "adequate",
      phonetic: "/'ædikwәt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-013",
      kind: "word",
      promptZh: "调整；使适应于；校准\\nvi. 适应于；被调节",
      answerEn: "adjust",
      phonetic: "/ә'dʒʌst/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-014",
      kind: "word",
      promptZh: "提倡者；拥护者\\nvt. 主张；提倡",
      answerEn: "advocate",
      phonetic: "/'ædvәkeit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-015",
      kind: "word",
      promptZh: "议程；日常工作事项\\n待议事件",
      answerEn: "agenda",
      phonetic: "/ә'dʒendә/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-016",
      kind: "word",
      promptZh: "侵略的；挑畔的；进取的\\n侵略的；爱挑衅的",
      answerEn: "aggressive",
      phonetic: "/ә'gresiv/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-017",
      kind: "word",
      promptZh: "分派；分配\\n分配",
      answerEn: "allocate",
      phonetic: "/'ælәukeit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-018",
      kind: "word",
      promptZh: "两者择一；供替代的选择\\na. 两者择一的；供选择的\\n选择对象",
      answerEn: "alternative",
      phonetic: "/ɒ:l'tә:nәtiv/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-019",
      kind: "word",
      promptZh: "不明确的；模棱两可的\\n意思含糊的；模棱两可的；暧昧的",
      answerEn: "ambiguous",
      phonetic: "/æm'bigjuәs/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-020",
      kind: "word",
      promptZh: "分析\\n分析机；分析员；分析；分析程序",
      answerEn: "analysis",
      phonetic: "/ә'nælәsis/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-021",
      kind: "word",
      promptZh: "年刊；年报\\na. 每年的；一年一次的；全年的",
      answerEn: "annual",
      phonetic: "/'ænjuәl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-022",
      kind: "word",
      promptZh: "预期；占先；加速；提前使用\\n提前出现",
      answerEn: "anticipate",
      phonetic: "/æn'tisipeit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-023",
      kind: "word",
      promptZh: "清晰可见的；显然的；表面上的\\n外在的",
      answerEn: "apparent",
      phonetic: "/ә'pærәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-024",
      kind: "word",
      promptZh: "接近；入门\\nvt. 接近；近似；找...商量\\nvi. 靠近",
      answerEn: "approach",
      phonetic: "/ә'prәutʃ/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-025",
      kind: "word",
      promptZh: "适当的\\n适当的；拨出；占用",
      answerEn: "appropriate",
      phonetic: "/ә'prәupriәt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-026",
      kind: "word",
      promptZh: "争论；论证；论据；自变量\\n参数",
      answerEn: "argument",
      phonetic: "/'ɑ:gjumәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-027",
      kind: "word",
      promptZh: "估定；对...征税；评定\\n估计；估价",
      answerEn: "assess",
      phonetic: "/ә'ses/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-028",
      kind: "word",
      promptZh: "假定；自负；担任；假装\\n假定",
      answerEn: "assumption",
      phonetic: "/ә'sʌmpʃәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-029",
      kind: "word",
      promptZh: "权力；当权者；当局；权威",
      answerEn: "authority",
      phonetic: "/ɒ:'θɒriti/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-030",
      kind: "word",
      promptZh: "可用的；有空的",
      answerEn: "available",
      phonetic: "/ә'veilәbl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-031",
      kind: "word",
      promptZh: "利益\\nvt. 有益于\\nvi. 受益",
      answerEn: "benefit",
      phonetic: "/'benifit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-032",
      kind: "word",
      promptZh: "容量；能力；才能；资格\\n容量",
      answerEn: "capacity",
      phonetic: "/kә'pæsiti/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-033",
      kind: "word",
      promptZh: "挑战；盘问\\nvt. 向...挑战；要求；怀疑\\nvi. 挑战",
      answerEn: "challenge",
      phonetic: "/'tʃælindʒ/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-034",
      kind: "word",
      promptZh: "环境；状况；事件",
      answerEn: "circumstance",
      phonetic: "/'sә:kәmstәns/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-035",
      kind: "word",
      promptZh: "文明；教化\\n文明；文化；文明国家的总称",
      answerEn: "civilization",
      phonetic: "/si.vilai'zeiʃәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-036",
      kind: "word",
      promptZh: "认知的；认识的",
      answerEn: "cognitive",
      phonetic: "/'kɒgnitiv/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-037",
      kind: "word",
      promptZh: "连贯的；一致的",
      answerEn: "coherent",
      phonetic: "/kәu'hiәrәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-038",
      kind: "word",
      promptZh: "一致；符合\\n重合",
      answerEn: "coincide",
      phonetic: "/.kәuin'said/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-039",
      kind: "word",
      promptZh: "崩溃；倒塌；虚脱\\nvi. 倒塌；瓦解\\nvt. 使倒塌",
      answerEn: "collapse",
      phonetic: "/kә'læps/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-040",
      kind: "word",
      promptZh: "委托；交押；承担义务；赞助\\n院禁",
      answerEn: "commitment",
      phonetic: "/kә'mitmәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-041",
      kind: "word",
      promptZh: "农产品；商品；有用的物品\\n商品；货物",
      answerEn: "commodity",
      phonetic: "/kә'mɒditi/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-042",
      kind: "word",
      promptZh: "偿还；补偿；付报酬",
      answerEn: "compensate",
      phonetic: "/'kɒmpenseit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-043",
      kind: "word",
      promptZh: "综合体；情结；络合物\\na. 复杂的；组合的",
      answerEn: "complex",
      phonetic: "/kәm'pleks/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-044",
      kind: "word",
      promptZh: "广泛的；有理解力的；综合的\\n广泛的；综合的",
      answerEn: "comprehensive",
      phonetic: "/.kɒmpri'hensiv/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-045",
      kind: "word",
      promptZh: "观念；概念\\n概念",
      answerEn: "concept",
      phonetic: "/'kɒnsept/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-046",
      kind: "word",
      promptZh: "凝结物；混凝土\\na. 具体的；实在的；混凝土的\\nv. (使)凝结",
      answerEn: "concrete",
      phonetic: "/'kɒnkri:t/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-047",
      kind: "word",
      promptZh: "行为；举动；指导\\nvt. 为人；指挥",
      answerEn: "conduct",
      phonetic: "/'kɔndʌkt, -dәkt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-048",
      kind: "word",
      promptZh: "证实；确定；批准；使巩固\\n确认",
      answerEn: "confirm",
      phonetic: "/kәn'fә:m/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-049",
      kind: "word",
      promptZh: "战斗；冲突；矛盾；争执\\nvi. 争执",
      answerEn: "conflict",
      phonetic: "/'kɒnflikt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-050",
      kind: "word",
      promptZh: "结果；重要性\\n结果；后果；推断",
      answerEn: "consequence",
      phonetic: "/'kɒnsikwәns/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-051",
      kind: "word",
      promptZh: "相当的；可观的；重要的",
      answerEn: "considerable",
      phonetic: "/kәn'sidәrәbl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-052",
      kind: "word",
      promptZh: "一致的；坚持的；并立的；坚固的",
      answerEn: "consistent",
      phonetic: "/kәn'sistәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-053",
      kind: "word",
      promptZh: "构成；组成；任命\\n构造",
      answerEn: "constitute",
      phonetic: "/kәn'stitjut/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-054",
      kind: "word",
      promptZh: "上下文；背景；来龙去脉\\nn. 上下文\\n上下文",
      answerEn: "context",
      phonetic: "/'kɒntekst/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-055",
      kind: "word",
      promptZh: "论争；辩论；论战；争论\\n论战",
      answerEn: "controversy",
      phonetic: "/'kɒntrәvә:si/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-056",
      kind: "word",
      promptZh: "传统的；习惯的；约定的\\n惯例的；常规的",
      answerEn: "conventional",
      phonetic: "/kәn'venʃәnl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-057",
      kind: "word",
      promptZh: "合作；协力；配合\\n合作",
      answerEn: "cooperation",
      phonetic: "/kәu.ɒpә'reiʃәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-058",
      kind: "word",
      promptZh: "批评的；决定性的；危险的；临界的\\n危象的",
      answerEn: "critical",
      phonetic: "/'kritikәl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-059",
      kind: "word",
      promptZh: "文化；修养；耕种\\nvt. 耕种；培养",
      answerEn: "culture",
      phonetic: "/'kʌltʃә/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-060",
      kind: "word",
      promptZh: "衰退；跌落；下降\\nvt. 使降低；婉谢\\nvi. 下降",
      answerEn: "decline",
      phonetic: "/di'klain/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-061",
      kind: "word",
      promptZh: "定义；规定；使明确\\n定义",
      answerEn: "define",
      phonetic: "/di'fain/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-062",
      kind: "word",
      promptZh: "示范；证明\\nvi. 示威",
      answerEn: "demonstrate",
      phonetic: "/'demәnstreit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-063",
      kind: "word",
      promptZh: "得自\\nvi. 起源",
      answerEn: "derive",
      phonetic: "/di'raiv/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-064",
      kind: "word",
      promptZh: "尺寸；次元；面积；维数\\nvt. 标出尺寸",
      answerEn: "dimension",
      phonetic: "/dai'menʃәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-065",
      kind: "word",
      promptZh: "训练；纪律\\nvt. 训练；惩罚",
      answerEn: "discipline",
      phonetic: "/'disiplin/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-066",
      kind: "word",
      promptZh: "谈话；演讲\\nvi. 谈话；讲述",
      answerEn: "discourse",
      phonetic: "/'diskɒ:s/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-067",
      kind: "word",
      promptZh: "清楚的；显著的；不同的",
      answerEn: "distinct",
      phonetic: "/dis'tiŋkt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-068",
      kind: "word",
      promptZh: "差异；多样性\\n多样性",
      answerEn: "diversity",
      phonetic: "/dai'vә:siti/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-069",
      kind: "word",
      promptZh: "占优势的；支配的\\n优性的；显性的",
      answerEn: "dominant",
      phonetic: "/'dɒminәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-070",
      kind: "word",
      promptZh: "经济上的；实用的；节省的\\n经济的",
      answerEn: "economic",
      phonetic: "/.i:kә'nɒmik/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-071",
      kind: "word",
      promptZh: "结果；影响；效果；印象\\nvt. 实行",
      answerEn: "effect",
      phonetic: "/i'fekt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-072",
      kind: "word",
      promptZh: "有效率的；能干的",
      answerEn: "efficient",
      phonetic: "/i'fiʃәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-073",
      kind: "word",
      promptZh: "浮现；形成；出现；(事实)显露",
      answerEn: "emerge",
      phonetic: "/i'mә:dʒ/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-074",
      kind: "word",
      promptZh: "强调；加强；重点；强语气",
      answerEn: "emphasis",
      phonetic: "/'emfәsis/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-075",
      kind: "word",
      promptZh: "经验主义的；实证的",
      answerEn: "empirical",
      phonetic: "/em'pirikәl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-076",
      kind: "word",
      promptZh: "相会；相遇；遭遇\\nvt. 遇见；邂逅",
      answerEn: "encounter",
      phonetic: "/in'kauntә/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-077",
      kind: "word",
      promptZh: "提高；加强；增加",
      answerEn: "enhance",
      phonetic: "/in'hæns/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-078",
      kind: "word",
      promptZh: "确定；保证；担保；保护\\n确保",
      answerEn: "ensure",
      phonetic: "/in'ʃuә/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-079",
      kind: "word",
      promptZh: "同等物；等价物；相等物\\na. 相等的；相当的",
      answerEn: "equivalent",
      phonetic: "/i'kwivәlәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-080",
      kind: "word",
      promptZh: "要素；要点；本质\\na. 必要的；重要的",
      answerEn: "essential",
      phonetic: "/i'senʃәl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-081",
      kind: "word",
      promptZh: "评估；评价；赋值",
      answerEn: "evaluate",
      phonetic: "/i'væljueit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-082",
      kind: "word",
      promptZh: "根据；证据；迹象\\n证据；凭证",
      answerEn: "evidence",
      phonetic: "/'evidәns/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-083",
      kind: "word",
      promptZh: "进化；发展；进展；(气体)放出",
      answerEn: "evolution",
      phonetic: "/.i:vә'lu:ʃәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-084",
      kind: "word",
      promptZh: "过度的；过多的；极端的\\n过度的；过分的",
      answerEn: "excessive",
      phonetic: "/ik'sesiv/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-085",
      kind: "word",
      promptZh: "详述的；清楚的；直言的",
      answerEn: "explicit",
      phonetic: "/ik'splisit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-086",
      kind: "word",
      promptZh: "因素；因数；系数；基因",
      answerEn: "factor",
      phonetic: "/'fæktә/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-087",
      kind: "word",
      promptZh: "结构；骨架；参照标准；准则",
      answerEn: "framework",
      phonetic: "/'freimwә:k/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-088",
      kind: "word",
      promptZh: "基本原理；原则；基波\\na. 基本的；重要的",
      answerEn: "fundamental",
      phonetic: "/.fʌndә'mentәl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-089",
      kind: "word",
      promptZh: "遗产；祖先遗留物；继承物\\n遗传性",
      answerEn: "heritage",
      phonetic: "/'heritidʒ/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-090",
      kind: "word",
      promptZh: "假设",
      answerEn: "hypothesis",
      phonetic: "/hai'pɒθәsis/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-091",
      kind: "word",
      promptZh: "身份；相同；一致；特性",
      answerEn: "identity",
      phonetic: "/ai'dentiti/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-092",
      kind: "word",
      promptZh: "意识形态",
      answerEn: "ideology",
      phonetic: "/.aidi'ɒlәdʒi/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-093",
      kind: "word",
      promptZh: "冲击；冲突；影响；效果\\nvt. 挤入",
      answerEn: "impact",
      phonetic: "/'impækt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-094",
      kind: "word",
      promptZh: "牵连；含义；暗示\\n推断；含蓄之意",
      answerEn: "implication",
      phonetic: "/.impli'keiʃәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-095",
      kind: "word",
      promptZh: "人；个人；个体\\na. 个别的；个人的",
      answerEn: "individual",
      phonetic: "/.indi'vidʒuәl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-096",
      kind: "word",
      promptZh: "不可避免的；必然的\\n不可避免的；无法规避的；必然的",
      answerEn: "inevitable",
      phonetic: "/in'evitәbl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-097",
      kind: "word",
      promptZh: "改革；创新\\n创新；刷新",
      answerEn: "innovation",
      phonetic: "/.inәu'veiʃәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-098",
      kind: "word",
      promptZh: "机构；惯例；制度\\n机关；设施",
      answerEn: "institution",
      phonetic: "/.insti'tju:ʃәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-099",
      kind: "word",
      promptZh: "综合；使完整；使成整体\\nvi. 成一体\\na. 完整的；完全的",
      answerEn: "integrate",
      phonetic: "/'intigreit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-100",
      kind: "word",
      promptZh: "解释；演出；翻译；理解\\nvi. 翻译",
      answerEn: "interpret",
      phonetic: "/in'tә:prit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-101",
      kind: "word",
      promptZh: "替...辩护；证明\\nvi. 证明合法\\n段落重排；两端对齐",
      answerEn: "justify",
      phonetic: "/'dʒʌstifai/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-102",
      kind: "word",
      promptZh: "合法的；正当的；婚生的\\nvt. 认为正当；立为嫡嗣",
      answerEn: "legitimate",
      phonetic: "/li'dʒitimәt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-103",
      kind: "word",
      promptZh: "维持；维修；保持；坚持",
      answerEn: "maintain",
      phonetic: "/mein'tein/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-104",
      kind: "word",
      promptZh: "机械；机构；结构；机理",
      answerEn: "mechanism",
      phonetic: "/'mekәnizm/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-105",
      kind: "word",
      promptZh: "目的；目标；宗旨；宾格",
      answerEn: "objective",
      phonetic: "/әb'dʒektiv/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-106",
      kind: "word",
      promptZh: "现象；迹象；表现；奇迹",
      answerEn: "phenomenon",
      phonetic: "/fi'nɒminәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-107",
      kind: "word",
      promptZh: "政策；方针；策略；保险单\\n凭单",
      answerEn: "policy",
      phonetic: "/'pɒlisi/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-108",
      kind: "word",
      promptZh: "潜在性；可能性；潜力；潜能",
      answerEn: "potential",
      phonetic: "/pә'tenʃәl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-109",
      kind: "word",
      promptZh: "原则；原理；主义\\n原理",
      answerEn: "principle",
      phonetic: "/'prinsipl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-110",
      kind: "word",
      promptZh: "远景；透视感；(观察问题的)视角；透视法",
      answerEn: "perspective",
      phonetic: "/pә'spektiv/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-111",
      kind: "word",
      promptZh: "理性的；合理的\\nn. 有理数",
      answerEn: "rational",
      phonetic: "/'ræʃәnl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-112",
      kind: "word",
      promptZh: "反射；反映；招致；深思\\nvi. 被反射",
      answerEn: "reflect",
      phonetic: "/ri'flekt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-113",
      kind: "word",
      promptZh: "有关联的；有关系的；适当的；相应的\\n有关的",
      answerEn: "relevant",
      phonetic: "/'relivәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-114",
      kind: "word",
      promptZh: "可靠的；可信赖的\\n可靠的；可信赖的；确实的",
      answerEn: "reliable",
      phonetic: "/ri'laiәbl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-115",
      kind: "word",
      promptZh: "资源；财力；办法；策略",
      answerEn: "resource",
      phonetic: "/ri'sɒ:s/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-116",
      kind: "word",
      promptZh: "重要的；有效的；有含义的；暗示的",
      answerEn: "significant",
      phonetic: "/sig'nifikәnt/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-117",
      kind: "word",
      promptZh: "社会；社交界；交往；社团",
      answerEn: "society",
      phonetic: "/sә'saiәti/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-118",
      kind: "word",
      promptZh: "特效药；特性\\na. 特殊的；明确的；具有特效的",
      answerEn: "specific",
      phonetic: "/spi'sifik/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-119",
      kind: "word",
      promptZh: "战略；策略\\n战略；策略",
      answerEn: "strategy",
      phonetic: "/'strætidʒi/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-120",
      kind: "word",
      promptZh: "结构；构造；建筑物\\nvt. 构成；组织",
      answerEn: "structure",
      phonetic: "/'strʌktʃә/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-121",
      kind: "word",
      promptZh: "重要材料(或事物)；有实际价值的东西\\na. 实质上的；物质的；有内容的",
      answerEn: "substantial",
      phonetic: "/sәb'stænʃәl/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-122",
      kind: "word",
      promptZh: "维持；支撑",
      answerEn: "sustain",
      phonetic: "/sә'stein/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-123",
      kind: "word",
      promptZh: "理论；学说；原理；意见",
      answerEn: "theory",
      phonetic: "/'θiәri/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-124",
      kind: "word",
      promptZh: "转变；转换；变迁；过渡时期",
      answerEn: "transition",
      phonetic: "/træn'ziʃәn/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-w-125",
      kind: "word",
      promptZh: "最终的",
      answerEn: "ultimate",
      phonetic: "/'ʌltimit/",
      tags: [
        "考研",
        "word"
      ]
    },
    {
      id: "kaoyan-s-001",
      kind: "sentence",
      promptZh: "从长远来看，教育公平关系到社会流动。",
      answerEn: "In the long run, educational fairness is related to social mobility.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-002",
      kind: "sentence",
      promptZh: "作者认为技术进步并不必然带来幸福。",
      answerEn: "The author argues that technological progress does not necessarily bring happiness.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-003",
      kind: "sentence",
      promptZh: "我们需要从历史视角理解这一现象。",
      answerEn: "We need to understand this phenomenon from a historical perspective.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-004",
      kind: "sentence",
      promptZh: "充分的证据可以增强论证的说服力。",
      answerEn: "Sufficient evidence can strengthen the persuasiveness of an argument.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-005",
      kind: "sentence",
      promptZh: "个人选择往往受到社会环境的限制。",
      answerEn: "Individual choices are often limited by the social environment.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-006",
      kind: "sentence",
      promptZh: "阅读能力的提高依赖长期积累。",
      answerEn: "The improvement of reading ability depends on long-term accumulation.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-007",
      kind: "sentence",
      promptZh: "经济增长不应以环境破坏为代价。",
      answerEn: "Economic growth should not come at the cost of environmental damage.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-008",
      kind: "sentence",
      promptZh: "这段文字强调了公共责任的重要性。",
      answerEn: "This passage emphasizes the importance of public responsibility.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-009",
      kind: "sentence",
      promptZh: "我们应该警惕看似合理的简单解释。",
      answerEn: "We should be alert to simple explanations that seem reasonable.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-010",
      kind: "sentence",
      promptZh: "社会变化会改变人们对成功的定义。",
      answerEn: "Social change can alter people's definition of success.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-011",
      kind: "sentence",
      promptZh: "理性的讨论需要概念清晰。",
      answerEn: "Rational discussion requires conceptual clarity.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-012",
      kind: "sentence",
      promptZh: "研究结论必须接受事实检验。",
      answerEn: "Research conclusions must be tested by facts.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-013",
      kind: "sentence",
      promptZh: "过度竞争可能削弱合作精神。",
      answerEn: "Excessive competition may weaken the spirit of cooperation.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-014",
      kind: "sentence",
      promptZh: "制度安排会影响个人行为。",
      answerEn: "Institutional arrangements influence individual behavior.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-015",
      kind: "sentence",
      promptZh: "语言学习需要输入和输出结合。",
      answerEn: "Language learning requires a combination of input and output.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-016",
      kind: "sentence",
      promptZh: "这幅图反映了人们对效率的追求。",
      answerEn: "This picture reflects people's pursuit of efficiency.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-017",
      kind: "sentence",
      promptZh: "文化传统在现代社会仍有价值。",
      answerEn: "Cultural traditions still have value in modern society.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-018",
      kind: "sentence",
      promptZh: "我们不能把复杂现实简化成单一原因。",
      answerEn: "We cannot reduce complex reality to a single cause.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-019",
      kind: "sentence",
      promptZh: "公共讨论应当建立在事实基础上。",
      answerEn: "Public discussion should be based on facts.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-020",
      kind: "sentence",
      promptZh: "真正的创新通常来自持续的努力。",
      answerEn: "True innovation usually comes from continuous effort.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-021",
      kind: "sentence",
      promptZh: "社会信任是合作的重要前提。",
      answerEn: "Social trust is an important premise of cooperation.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-022",
      kind: "sentence",
      promptZh: "教育的目的不只是传授知识。",
      answerEn: "The purpose of education is not only to transmit knowledge.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-023",
      kind: "sentence",
      promptZh: "个体经验能够补充宏观分析。",
      answerEn: "Individual experience can supplement macro-level analysis.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-024",
      kind: "sentence",
      promptZh: "我们需要评估政策的实际效果。",
      answerEn: "We need to evaluate the practical effects of the policy.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-025",
      kind: "sentence",
      promptZh: "信息过载会降低判断质量。",
      answerEn: "Information overload can reduce the quality of judgment.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-026",
      kind: "sentence",
      promptZh: "传统观念并不一定阻碍进步。",
      answerEn: "Traditional ideas do not necessarily prevent progress.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-027",
      kind: "sentence",
      promptZh: "写作时要避免空泛的表达。",
      answerEn: "In writing, avoid empty and vague expressions.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-028",
      kind: "sentence",
      promptZh: "社会问题往往需要多方面解决。",
      answerEn: "Social problems often require solutions from multiple sides.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-029",
      kind: "sentence",
      promptZh: "人们对风险的感知会影响决策。",
      answerEn: "People's perception of risk affects decision-making.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    },
    {
      id: "kaoyan-s-030",
      kind: "sentence",
      promptZh: "长期坚持比短期热情更可靠。",
      answerEn: "Long-term persistence is more reliable than short-term enthusiasm.",
      tags: [
        "考研",
        "sentence",
        "translation"
      ]
    }
  ],
  ielts: [
    {
      id: "ielts-w-001",
      kind: "word",
      promptZh: "膳宿；预订铺位；适应性调节；调和",
      answerEn: "accommodation",
      phonetic: "/ә.kɒmә'deiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-002",
      kind: "word",
      promptZh: "易接近的；可进入的；可使用的；易受影响的",
      answerEn: "accessible",
      phonetic: "/әk'sesәbl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-003",
      kind: "word",
      promptZh: "广告；启事；广告宣传\\n广告；公告",
      answerEn: "advertisement",
      phonetic: "/.ædvә'taizmәnt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-004",
      kind: "word",
      promptZh: "农业\\n农业；农学",
      answerEn: "agriculture",
      phonetic: "/'ægrikʌltʃә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-005",
      kind: "word",
      promptZh: "两者择一；供替代的选择\\na. 两者择一的；供选择的\\n选择对象",
      answerEn: "alternative",
      phonetic: "/ɒ:l'tә:nәtiv/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-006",
      kind: "word",
      promptZh: "权力；当权者；当局；权威",
      answerEn: "authority",
      phonetic: "/ɒ:'θɒriti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-007",
      kind: "word",
      promptZh: "可用的；有空的",
      answerEn: "available",
      phonetic: "/ә'veilәbl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-008",
      kind: "word",
      promptZh: "利益\\nvt. 有益于\\nvi. 受益",
      answerEn: "benefit",
      phonetic: "/'benifit/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-009",
      kind: "word",
      promptZh: "生物多样性",
      answerEn: "biodiversity",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-010",
      kind: "word",
      promptZh: "战役；运动；竞选运动\\nvi. 参加运动；作战",
      answerEn: "campaign",
      phonetic: "/kæm'pein/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-011",
      kind: "word",
      promptZh: "挑战；盘问\\nvt. 向...挑战；要求；怀疑\\nvi. 挑战",
      answerEn: "challenge",
      phonetic: "/'tʃælindʒ/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-012",
      kind: "word",
      promptZh: "慈悲；博爱；慈善团体；施舍\\n宽大",
      answerEn: "charity",
      phonetic: "/'tʃæriti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-013",
      kind: "word",
      promptZh: "气候；社会趋势；气候区\\n气候",
      answerEn: "climate",
      phonetic: "/'klaimit/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-014",
      kind: "word",
      promptZh: "商业的；商用的；商品化的\\nn. 商业广告节目",
      answerEn: "commercial",
      phonetic: "/kә'mә:ʃәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-015",
      kind: "word",
      promptZh: "交流；交通；通讯\\n通信",
      answerEn: "communication",
      phonetic: "/kә.mju:ni'keiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-016",
      kind: "word",
      promptZh: "社区；公众；共有；共同体\\n公众",
      answerEn: "community",
      phonetic: "/kә'mju:niti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-017",
      kind: "word",
      promptZh: "保护；保存\\n保存",
      answerEn: "conservation",
      phonetic: "/.kɒnsә'veiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-018",
      kind: "word",
      promptZh: "相当的；可观的；重要的",
      answerEn: "considerable",
      phonetic: "/kәn'sidәrәbl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-019",
      kind: "word",
      promptZh: "消费者\\n消费者；用户",
      answerEn: "consumer",
      phonetic: "/kәn'sju:mә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-020",
      kind: "word",
      promptZh: "方便的",
      answerEn: "convenient",
      phonetic: "/kәn'vi:njәnt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-021",
      kind: "word",
      promptZh: "合作；协力；配合\\n合作",
      answerEn: "cooperation",
      phonetic: "/kәu.ɒpә'reiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-022",
      kind: "word",
      promptZh: "犯罪；罪行；罪恶\\n犯罪；罪",
      answerEn: "crime",
      phonetic: "/kraim/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-023",
      kind: "word",
      promptZh: "文化的；教养的；修养的\\n培养的",
      answerEn: "cultural",
      phonetic: "/'kʌltʃәrәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-024",
      kind: "word",
      promptZh: "文化；修养；耕种\\nvt. 耕种；培养",
      answerEn: "culture",
      phonetic: "/'kʌltʃә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-025",
      kind: "word",
      promptZh: "发展\\n展开",
      answerEn: "development",
      phonetic: "/di'velәpmәnt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-026",
      kind: "word",
      promptZh: "数字显示的；数字的\\nn. 数字仪表；数字式电子表(或时钟)\\n数字；数字式",
      answerEn: "digital",
      phonetic: "/'didʒitәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-027",
      kind: "word",
      promptZh: "差异；多样性\\n多样性",
      answerEn: "diversity",
      phonetic: "/dai'vә:siti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-028",
      kind: "word",
      promptZh: "经济上的；实用的；节省的\\n经济的",
      answerEn: "economic",
      phonetic: "/.i:kә'nɒmik/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-029",
      kind: "word",
      promptZh: "经济；理财；节约\\n经济；整体",
      answerEn: "economy",
      phonetic: "/i'kɒnәmi/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-030",
      kind: "word",
      promptZh: "教育；训练；教育学\\n教育",
      answerEn: "education",
      phonetic: "/.edju'keiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-031",
      kind: "word",
      promptZh: "教育的；教育性的",
      answerEn: "educational",
      phonetic: "/.edju'keiʃәnl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-032",
      kind: "word",
      promptZh: "过了中年的；稍老的",
      answerEn: "elderly",
      phonetic: "/'eldәli/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-033",
      kind: "word",
      promptZh: "发射；射出；发行\\n发射；遗精",
      answerEn: "emission",
      phonetic: "/i'miʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-034",
      kind: "word",
      promptZh: "雇用；职业；工作\\n职业；职工招请",
      answerEn: "employment",
      phonetic: "/im'plɒimәnt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-035",
      kind: "word",
      promptZh: "精力；精神；活力；能量\\n能",
      answerEn: "energy",
      phonetic: "/'enәdʒi/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-036",
      kind: "word",
      promptZh: "环境；外界；围绕\\n环境",
      answerEn: "environment",
      phonetic: "/in'vairәnmәnt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-037",
      kind: "word",
      promptZh: "周围的；环境的\\n环境的；环保的",
      answerEn: "environmental",
      phonetic: "/in.vaiәrәn'mentәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-038",
      kind: "word",
      promptZh: "要素；要点；本质\\na. 必要的；重要的",
      answerEn: "essential",
      phonetic: "/i'senʃәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-039",
      kind: "word",
      promptZh: "根据；证据；迹象\\n证据；凭证",
      answerEn: "evidence",
      phonetic: "/'evidәns/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-040",
      kind: "word",
      promptZh: "容易；灵巧；设备\\n设施；设备",
      answerEn: "facility",
      phonetic: "/fә'siliti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-041",
      kind: "word",
      promptZh: "节日的；喜庆的；快乐的\\nn. 节日；庆祝",
      answerEn: "festival",
      phonetic: "/'festәvәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-042",
      kind: "word",
      promptZh: "财政的；金融的\\n财政的；金融的；财务的",
      answerEn: "financial",
      phonetic: "/fai'nænʃәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-043",
      kind: "word",
      promptZh: "易曲的；灵活的；柔顺的；能变形的",
      answerEn: "flexible",
      phonetic: "/'fleksәbl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-044",
      kind: "word",
      promptZh: "通用的；全球的；球形的；综合的",
      answerEn: "global",
      phonetic: "/'glәubl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-045",
      kind: "word",
      promptZh: "政府；内阁\\n政府；政治；政体",
      answerEn: "government",
      phonetic: "/'gʌvәnmәnt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-046",
      kind: "word",
      promptZh: "栖息地；居留地；自生地；聚集处\\n习生地",
      answerEn: "habitat",
      phonetic: "/'hæbitæt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-047",
      kind: "word",
      promptZh: "健康；卫生；蓬勃；健康状态\\n健康",
      answerEn: "health",
      phonetic: "/'helθ/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-048",
      kind: "word",
      promptZh: "遗产；祖先遗留物；继承物\\n遗传性",
      answerEn: "heritage",
      phonetic: "/'heritidʒ/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-049",
      kind: "word",
      promptZh: "遮盖；住房供给；居留(处)；房屋",
      answerEn: "housing",
      phonetic: "/'hausiŋ/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-050",
      kind: "word",
      promptZh: "冲击；冲突；影响；效果\\nvt. 挤入",
      answerEn: "impact",
      phonetic: "/'impækt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-051",
      kind: "word",
      promptZh: "人；个人；个体\\na. 个别的；个人的",
      answerEn: "individual",
      phonetic: "/.indi'vidʒuәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-052",
      kind: "word",
      promptZh: "勤劳；工业；企业；产业",
      answerEn: "industry",
      phonetic: "/'indәstri/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-053",
      kind: "word",
      promptZh: "不平等；不同；不平坦；不平均\\nn. 不平等",
      answerEn: "inequality",
      phonetic: "/.ini'kwɒliti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-054",
      kind: "word",
      promptZh: "基础结构；基础设施\\n基础设施",
      answerEn: "infrastructure",
      phonetic: "/'infrәstrʌktʃә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-055",
      kind: "word",
      promptZh: "改革；创新\\n创新；刷新",
      answerEn: "innovation",
      phonetic: "/.inәu'veiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-056",
      kind: "word",
      promptZh: "国际的\\nn. 国别设定\\n国别设定",
      answerEn: "international",
      phonetic: "/.intә'næʃәnәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-057",
      kind: "word",
      promptZh: "投资\\n包埋料；围模料；包埋法；围模法",
      answerEn: "investment",
      phonetic: "/in'vestmәnt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-058",
      kind: "word",
      promptZh: "语言；文字；措辞\\n语言",
      answerEn: "language",
      phonetic: "/'læŋgwidʒ/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-059",
      kind: "word",
      promptZh: "文学；文艺；著作\\n广告；商品介绍等文学",
      answerEn: "literature",
      phonetic: "/'litәrәtʃә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-060",
      kind: "word",
      promptZh: "多数；大半\\n多数逻辑",
      answerEn: "majority",
      phonetic: "/mә'dʒɒriti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-061",
      kind: "word",
      promptZh: "媒体\\n媒质",
      answerEn: "media",
      phonetic: "/'mi:diә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-062",
      kind: "word",
      promptZh: "医生；体格检查\\na. 医学的；内科的；药的",
      answerEn: "medical",
      phonetic: "/'medikl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-063",
      kind: "word",
      promptZh: "移民；移往；移动\\n迁移",
      answerEn: "migration",
      phonetic: "/mai'greiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-064",
      kind: "word",
      promptZh: "少数；未成年；少数民族\\na. 少数的；属于少数派的",
      answerEn: "minority",
      phonetic: "/mai'nɒriti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-065",
      kind: "word",
      promptZh: "现代人；有思想的人\\na. 现代的；时髦的",
      answerEn: "modern",
      phonetic: "/'mɒdәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-066",
      kind: "word",
      promptZh: "博物馆",
      answerEn: "museum",
      phonetic: "/mju:'ziәm/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-067",
      kind: "word",
      promptZh: "广播网",
      answerEn: "network",
      phonetic: "/'netwә:k/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-068",
      kind: "word",
      promptZh: "机会；时机",
      answerEn: "opportunity",
      phonetic: "/.ɒpә'tju:niti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-069",
      kind: "word",
      promptZh: "政策；方针；策略；保险单\\n凭单",
      answerEn: "policy",
      phonetic: "/'pɒlisi/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-070",
      kind: "word",
      promptZh: "污染；玷污\\n污染",
      answerEn: "pollution",
      phonetic: "/pә'lu:ʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-071",
      kind: "word",
      promptZh: "人口；人口数\\n群体；总体",
      answerEn: "population",
      phonetic: "/.pɒpju'leiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-072",
      kind: "word",
      promptZh: "贫穷；贫困；缺乏\\n贫乏；缺乏",
      answerEn: "poverty",
      phonetic: "/'pɒvәti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-073",
      kind: "word",
      promptZh: "实际的；现实的；实用性的\\n事实上的；实际上的",
      answerEn: "practical",
      phonetic: "/'præktikl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-074",
      kind: "word",
      promptZh: "隐私；隐居；秘密\\n个人保密权",
      answerEn: "privacy",
      phonetic: "/'praivәsi/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-075",
      kind: "word",
      promptZh: "专业人才\\na. 专业的；职业的",
      answerEn: "professional",
      phonetic: "/prә'feʃәnl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-076",
      kind: "word",
      promptZh: "公众；民众\\na. 公众的；公共的；公立的",
      answerEn: "public",
      phonetic: "/'pʌblik/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-077",
      kind: "word",
      promptZh: "使再循环；重新利用；再制\\nn. 再循环",
      answerEn: "recycle",
      phonetic: "/.ri:'saikl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-078",
      kind: "word",
      promptZh: "规则；管理；调整\\n调整；规章",
      answerEn: "regulation",
      phonetic: "/.regju'leiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-079",
      kind: "word",
      promptZh: "可靠的；可信赖的\\n可靠的；可信赖的；确实的",
      answerEn: "reliable",
      phonetic: "/ri'laiәbl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-080",
      kind: "word",
      promptZh: "可再生的",
      answerEn: "renewable",
      phonetic: "/ri'nju(:)әbl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-081",
      kind: "word",
      promptZh: "研究；调查；考察\\nvi. 研究",
      answerEn: "research",
      phonetic: "/ri'sә:tʃ/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-082",
      kind: "word",
      promptZh: "资源；财力；办法；策略",
      answerEn: "resource",
      phonetic: "/ri'sɒ:s/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-083",
      kind: "word",
      promptZh: "有责任的；负责的；责任重大的\\n应负责任的；能履行责任的",
      answerEn: "responsible",
      phonetic: "/ri'spɒnsәbl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-084",
      kind: "word",
      promptZh: "乡下的；田园的；乡村风味的\\n农村的；乡村的",
      answerEn: "rural",
      phonetic: "/'ruәrәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-085",
      kind: "word",
      promptZh: "安全；安全性；防护物；保安",
      answerEn: "security",
      phonetic: "/si'kjuriti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-086",
      kind: "word",
      promptZh: "重要的；有效的；有含义的；暗示的",
      answerEn: "significant",
      phonetic: "/sig'nifikәnt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-087",
      kind: "word",
      promptZh: "解决；解答；溶液\\n溶液",
      answerEn: "solution",
      phonetic: "/sә'lu:ʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-088",
      kind: "word",
      promptZh: "可持续的",
      answerEn: "sustainable",
      phonetic: "/sә'steinәbl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-089",
      kind: "word",
      promptZh: "技术；工业技术；术语\\n技术学；工艺学",
      answerEn: "technology",
      phonetic: "/tek'nɒlәdʒi/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-090",
      kind: "word",
      promptZh: "观光业；游览\\n旅游业",
      answerEn: "tourism",
      phonetic: "/'tuәrizm/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-091",
      kind: "word",
      promptZh: "传统的；惯例的\\n传统的；惯例的",
      answerEn: "traditional",
      phonetic: "/trә'diʃәnl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-092",
      kind: "word",
      promptZh: "交通",
      answerEn: "traffic",
      phonetic: "/'træfik/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-093",
      kind: "word",
      promptZh: "运输；运输工具；激动；狂喜",
      answerEn: "transport",
      phonetic: "/træns'pɒ:t/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-094",
      kind: "word",
      promptZh: "趋势；倾向；走向\\nvi. 倾向；转向\\n趋势",
      answerEn: "trend",
      phonetic: "/trend/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-095",
      kind: "word",
      promptZh: "都市的；住在都市的；习惯于都市的\\n城市的；市区的",
      answerEn: "urban",
      phonetic: "/'ә:bәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-096",
      kind: "word",
      promptZh: "交通工具；车辆；传播媒介\\n载体；运载体",
      answerEn: "vehicle",
      phonetic: "/'vi:ikl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-097",
      kind: "word",
      promptZh: "志愿者\\na. 志愿的\\nv. 自愿",
      answerEn: "volunteer",
      phonetic: "/.vɒlәn'tiә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-098",
      kind: "word",
      promptZh: "浪费；废物；损耗；消耗",
      answerEn: "waste",
      phonetic: "/weist/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-099",
      kind: "word",
      promptZh: "水；雨水；海水；水位",
      answerEn: "water",
      phonetic: "/'wɒ:tә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-100",
      kind: "word",
      promptZh: "野生动植物",
      answerEn: "wildlife",
      phonetic: "/'waildlaif/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-101",
      kind: "word",
      promptZh: "学院的；学术的；不切实际的\\nn. 大学生；大学教师",
      answerEn: "academic",
      phonetic: "/.ækә'demik/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-102",
      kind: "word",
      promptZh: "自动化；自动操作\\n自动学",
      answerEn: "automation",
      phonetic: "/.ɒ:tә'meiʃәn/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-103",
      kind: "word",
      promptZh: "事业；生涯；成功\\n职业；专业",
      answerEn: "career",
      phonetic: "/kә'riә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-104",
      kind: "word",
      promptZh: "资料；数据\\n数据；DOS内部命令:用于显示或设定系统的日期",
      answerEn: "data",
      phonetic: "/'deitә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-105",
      kind: "word",
      promptZh: "有效率的；能干的",
      answerEn: "efficient",
      phonetic: "/i'fiʃәnt/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-106",
      kind: "word",
      promptZh: "全球化",
      answerEn: "globalization",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-107",
      kind: "word",
      promptZh: "医疗保健",
      answerEn: "healthcare",
      phonetic: "/'helθkεә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-108",
      kind: "word",
      promptZh: "工业的；供工业用的；工业高度发展的；产业的\\nn. 工业工人",
      answerEn: "industrial",
      phonetic: "/in'dʌstriәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-109",
      kind: "word",
      promptZh: "地方性的；当地的；局部的；乡土的",
      answerEn: "local",
      phonetic: "/'lәukәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-110",
      kind: "word",
      promptZh: "百分比；百分数；部分\\n百分率",
      answerEn: "percent",
      phonetic: "/pә'sent/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-111",
      kind: "word",
      promptZh: "潜在性；可能性；潜力；潜能",
      answerEn: "potential",
      phonetic: "/pә'tenʃәl/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-112",
      kind: "word",
      promptZh: "私人的；秘密的；私立的；隐蔽的\\nn. 士兵",
      answerEn: "private",
      phonetic: "/'praivit/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-113",
      kind: "word",
      promptZh: "品质；特性；才能；质量\\na. 优质的\\n品质",
      answerEn: "quality",
      phonetic: "/'kwɒlәti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-114",
      kind: "word",
      promptZh: "纵览；视察；测量；俯瞰",
      answerEn: "survey",
      phonetic: "/sә'vei/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-115",
      kind: "word",
      promptZh: "十三岁到十九岁的少年",
      answerEn: "teenager",
      phonetic: "/'ti:nidʒә/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-116",
      kind: "word",
      promptZh: "游客",
      answerEn: "tourist",
      phonetic: "/'tuәrist/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-w-117",
      kind: "word",
      promptZh: "大学",
      answerEn: "university",
      phonetic: "/.ju:ni'vә:siti/",
      tags: [
        "IELTS",
        "word"
      ]
    },
    {
      id: "ielts-s-001",
      kind: "sentence",
      promptZh: "许多城市正在投资可持续基础设施。",
      answerEn: "Many cities are investing in sustainable infrastructure.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-002",
      kind: "sentence",
      promptZh: "公共交通可以让城市更加宜居。",
      answerEn: "Public transport can make cities more livable.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-003",
      kind: "sentence",
      promptZh: "文化多样性能够丰富校园生活。",
      answerEn: "Cultural diversity can enrich campus life.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-004",
      kind: "sentence",
      promptZh: "游客应该尊重当地传统。",
      answerEn: "Tourists should respect local traditions.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-005",
      kind: "sentence",
      promptZh: "远程办公减少了通勤时间。",
      answerEn: "Remote work reduces commuting time.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-006",
      kind: "sentence",
      promptZh: "可再生能源有助于减少碳排放。",
      answerEn: "Renewable energy helps reduce carbon emissions.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-007",
      kind: "sentence",
      promptZh: "政府应当让医疗服务更容易获得。",
      answerEn: "Governments should make medical services more accessible.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-008",
      kind: "sentence",
      promptZh: "广告会影响年轻人的消费习惯。",
      answerEn: "Advertising can influence young people's spending habits.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-009",
      kind: "sentence",
      promptZh: "住在市中心通常更方便但更昂贵。",
      answerEn: "Living in the city center is usually more convenient but more expensive.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-010",
      kind: "sentence",
      promptZh: "博物馆可以帮助人们理解历史。",
      answerEn: "Museums can help people understand history.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-011",
      kind: "sentence",
      promptZh: "在线课程为成年人提供了灵活选择。",
      answerEn: "Online courses offer flexible options for adults.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-012",
      kind: "sentence",
      promptZh: "保护野生动物需要国际合作。",
      answerEn: "Protecting wildlife requires international cooperation.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-013",
      kind: "sentence",
      promptZh: "现代农业应该减少对环境的压力。",
      answerEn: "Modern agriculture should reduce pressure on the environment.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-014",
      kind: "sentence",
      promptZh: "大学应该帮助学生发展实践技能。",
      answerEn: "Universities should help students develop practical skills.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-015",
      kind: "sentence",
      promptZh: "高房价会给年轻家庭带来压力。",
      answerEn: "High housing prices put pressure on young families.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-016",
      kind: "sentence",
      promptZh: "志愿活动可以增强社区联系。",
      answerEn: "Volunteer activities can strengthen community ties.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-017",
      kind: "sentence",
      promptZh: "数字媒体改变了人们获取新闻的方式。",
      answerEn: "Digital media has changed how people get news.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-018",
      kind: "sentence",
      promptZh: "旅游业能创造就业，也可能破坏环境。",
      answerEn: "Tourism can create jobs, but it may also damage the environment.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-019",
      kind: "sentence",
      promptZh: "良好的城市设计应当照顾老人和儿童。",
      answerEn: "Good urban design should consider both the elderly and children.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-020",
      kind: "sentence",
      promptZh: "学习第二语言能带来更多职业机会。",
      answerEn: "Learning a second language can bring more career opportunities.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-021",
      kind: "sentence",
      promptZh: "许多人认为工作和生活的平衡很重要。",
      answerEn: "Many people believe that work-life balance is important.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-022",
      kind: "sentence",
      promptZh: "学校可以通过项目学习培养创造力。",
      answerEn: "Schools can develop creativity through project-based learning.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-023",
      kind: "sentence",
      promptZh: "塑料垃圾已经成为全球问题。",
      answerEn: "Plastic waste has become a global problem.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-024",
      kind: "sentence",
      promptZh: "科技让跨国交流更加便捷。",
      answerEn: "Technology makes international communication more convenient.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-025",
      kind: "sentence",
      promptZh: "政府和个人都应该为环保负责。",
      answerEn: "Both governments and individuals should be responsible for environmental protection.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-026",
      kind: "sentence",
      promptZh: "城市绿地可以改善居民健康。",
      answerEn: "Urban green spaces can improve residents' health.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-027",
      kind: "sentence",
      promptZh: "贫困会限制儿童接受教育的机会。",
      answerEn: "Poverty can limit children's access to education.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-028",
      kind: "sentence",
      promptZh: "公共图书馆仍然是重要的学习空间。",
      answerEn: "Public libraries remain important learning spaces.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-029",
      kind: "sentence",
      promptZh: "合理的费用能让更多人参加课程。",
      answerEn: "Reasonable fees allow more people to attend courses.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    },
    {
      id: "ielts-s-030",
      kind: "sentence",
      promptZh: "一些传统节日正在吸引国际关注。",
      answerEn: "Some traditional festivals are attracting international attention.",
      tags: [
        "IELTS",
        "sentence",
        "translation"
      ]
    }
  ]
} satisfies Record<string, PracticeItem[]>;
