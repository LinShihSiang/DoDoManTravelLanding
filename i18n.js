// 多語系管理系統
class I18nManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('dodoman-language') || 'en';
        this.translations = {
            'zh-TW': {
                // Header 導航
                'nav.experiences': '體驗',
                'nav.destinations': '目的地',
                'nav.customerService': '客服',
                'nav.about': '關於我們',
                'nav.openApp': '打開 App',

                // Hero Section
                'hero.title': '探索世界的奇蹟',
                'hero.subtitle': '與我們一起踏上難忘的旅程，發現隱藏的寶石和經典景點',
                'hero.downloadBtn': '立即下載 App',
                'hero.browseBtn': '瀏覽體驗',

                // Features Section
                'features.title': '為什麼選擇 DodoMan？',
                'features.unique.title': '獨特體驗',
                'features.unique.desc': '精心策劃的旅遊體驗，讓您深度體驗當地文化和自然美景，創造難忘的回憶。',
                'features.guide.title': '專業導遊',
                'features.guide.desc': '經驗豐富的在地導遊，為您提供專業的解說和貼心的服務，確保旅程順利愉快。',
                'features.booking.title': '即時預訂',
                'features.booking.desc': '隨時隨地透過手機 App 預訂行程，即時確認，讓您的旅行計劃更加彈性便利。',

                // Gallery Section
                'gallery.title': '熱門景點',
                'gallery.neuschwanstein.badge': '主打推薦',
                'gallery.neuschwanstein.title': '新天鵝堡探索之旅',
                'gallery.neuschwanstein.subtitle': '德國浪漫童話城堡',
                'gallery.neuschwanstein.location': '德國',
                'gallery.neuschwanstein.desc': '探索德國最浪漫的童話城堡，感受路德維希二世的夢幻世界',
                'gallery.neuschwanstein.feature1': '城堡內部導覽',
                'gallery.neuschwanstein.feature2': '阿爾卑斯山景',
                'gallery.neuschwanstein.feature3': '專業中文導遊',
                'gallery.neuschwanstein.duration': '半日遊',
                'gallery.uffizi.badge': '藝術殿堂',
                'gallery.uffizi.title': '烏菲茲美術館藝術之旅',
                'gallery.uffizi.subtitle': '佛羅倫斯文藝復興寶庫',
                'gallery.uffizi.location': '佛羅倫斯',
                'gallery.uffizi.desc': '義大利佛羅倫斯文藝復興藝術寶庫，收藏世界頂級藝術品',
                'gallery.uffizi.feature1': '專業藝術導覽',
                'gallery.uffizi.feature2': '文藝復興傑作',
                'gallery.uffizi.feature3': '免排隊門票',
                'gallery.uffizi.duration': '3小時',

                'gallery.colosseum.badge': '經典必遊',
                'gallery.colosseum.title': '羅馬競技場探索',
                'gallery.colosseum.subtitle': '古羅馬帝國見證',
                'gallery.colosseum.location': '羅馬',
                'gallery.colosseum.desc': '世界八大奇蹟之一，感受古羅馬帝國的壯麗與榮耀',
                'gallery.colosseum.feature1': '歷史專業導覽',
                'gallery.colosseum.feature2': '地下層參觀',
                'gallery.colosseum.feature3': '語音導覽設備',
                'gallery.colosseum.duration': '2小時',

                // Packages Section
                'packages.title': '精選套票 Package',

                // Package 1 - Rome Venice Train Tour
                'package.rome_venice_train.title': '羅馬威尼斯高鐵之旅',
                'package.rome_venice_train.subtitle': '從威尼斯出發搭乘高速列車',
                'package.rome_venice_train.location': '威尼斯 → 羅馬',
                'package.rome_venice_train.description': '搭乘高速列車從威尼斯前往羅馬的全新觀光之旅。包含隨上隨下巴士票券，以及梵蒂岡和西斯汀教堂的專業導覽。',
                'package.rome_venice_train.feature1': '高速列車來回票券',
                'package.rome_venice_train.feature2': '隨上隨下巴士',
                'package.rome_venice_train.feature3': '梵蒂岡專業導覽',
                'package.rome_venice_train.feature4': '西斯汀教堂門票',
                'package.rome_venice_train.duration': '1日遊',
                'package.rome_venice_train.badge': '特價優惠',

                // Package 2 - Milan Turin Super Saver
                'package.milan_turin_supersaver.title': '米蘭都靈超值套票',
                'package.milan_turin_supersaver.subtitle': '北義大利精華一日遊',
                'package.milan_turin_supersaver.location': '米蘭 → 都靈',
                'package.milan_turin_supersaver.description': '一日內遊覽北義大利兩大城市。從米蘭搭乘高速列車前往都靈，參觀聖卡羅廣場17世紀教堂，享受巧克力和冰淇淋品嚐。',
                'package.milan_turin_supersaver.feature1': '高速列車',
                'package.milan_turin_supersaver.feature2': '巧克力品嚐',
                'package.milan_turin_supersaver.feature3': '冰淇淋體驗',
                'package.milan_turin_supersaver.feature4': '普羅賽克酒',
                'package.milan_turin_supersaver.feature5': '米蘭夜遊',
                'package.milan_turin_supersaver.duration': '1日遊',
                'package.milan_turin_supersaver.badge': '超值套票',

                // Package 3 - Berlin DDR Museum
                'package.berlin_ddr_museum.title': '柏林東德博物館',
                'package.berlin_ddr_museum.subtitle': '體驗東德社會主義生活',
                'package.berlin_ddr_museum.location': '柏林',
                'package.berlin_ddr_museum.description': '造訪柏林獲獎的東德博物館，了解1949-1989年間東德政府獨裁統治下的生活。包含免排隊門票，可參觀所有區域。',
                'package.berlin_ddr_museum.feature1': '免排隊門票',
                'package.berlin_ddr_museum.feature2': '互動體驗',
                'package.berlin_ddr_museum.feature3': '東德公寓復原',
                'package.berlin_ddr_museum.duration': '2小時',
                'package.berlin_ddr_museum.badge': '歷史體驗',

                // Package 4 - Rome Colosseum Walking Tour
                'package.rome_colosseum_walking.title': '羅馬競技場徒步之旅',
                'package.rome_colosseum_walking.subtitle': '古羅馬帝國榮耀私人導覽',
                'package.rome_colosseum_walking.location': '羅馬',
                'package.rome_colosseum_walking.description': '3小時羅馬帝國觀光之旅，從世界最著名的競技場開始。競技場建於西元72年，8年後完工，可容納5萬名觀眾。',
                'package.rome_colosseum_walking.feature1': '專業導遊',
                'package.rome_colosseum_walking.feature2': '競技場內部參觀',
                'package.rome_colosseum_walking.feature3': '古羅馬歷史講解',
                'package.rome_colosseum_walking.feature4': '私人小團體',
                'package.rome_colosseum_walking.duration': '3小時',
                'package.rome_colosseum_walking.badge': '經典必遊',

                // Package 5 - Berlin Alternative Tour
                'package.berlin_alternative_tour.title': '柏林另類文化之旅',
                'package.berlin_alternative_tour.subtitle': '探索嬉皮柏林文化',
                'package.berlin_alternative_tour.location': '柏林',
                'package.berlin_alternative_tour.description': '3.5小時柏林徒步之旅，探索另類嬉皮柏林的塗鴉、佔屋、藝術項目和特殊另類故事。參觀十字山中心、弗里德里希斯海因等。',
                'package.berlin_alternative_tour.feature1': '塗鴉藝術導覽',
                'package.berlin_alternative_tour.feature2': '東區畫廊',
                'package.berlin_alternative_tour.feature3': 'Yaam海灘',
                'package.berlin_alternative_tour.feature4': '波茨坦廣場',
                'package.berlin_alternative_tour.feature5': '藝術社區',
                'package.berlin_alternative_tour.duration': '3.5小時',
                'package.berlin_alternative_tour.badge': '文化體驗',

                // Package 6 - Milan Duomo Rooftop
                'package.milan_duomo_rooftop.title': '米蘭大教堂屋頂之旅',
                'package.milan_duomo_rooftop.subtitle': '含VR虛擬實境體驗',
                'package.milan_duomo_rooftop.location': '米蘭',
                'package.milan_duomo_rooftop.description': '在專業導遊帶領下登上米蘭大教堂屋頂平台，俯瞰米蘭市景。1小時導覽包含VR虛擬實境體驗，欣賞哥德式雕像和尖塔。',
                'package.milan_duomo_rooftop.feature1': '屋頂平台參觀',
                'package.milan_duomo_rooftop.feature2': 'VR虛擬實境',
                'package.milan_duomo_rooftop.feature3': '專業導遊講解',
                'package.milan_duomo_rooftop.feature4': '哥德式建築欣賞',
                'package.milan_duomo_rooftop.duration': '1小時',
                'package.milan_duomo_rooftop.badge': '獨特體驗',

                // Common package terms
                'package.bookNow': '立即預訂',

                // App Promotion Section
                'app.title': '下載 DodoMan App',
                'app.subtitle': '隨時隨地探索世界，享受獨家優惠和即時預訂服務',
                'app.feature1': '✓ 獨家 App 優惠價格',
                'app.feature2': '✓ 即時行程確認',
                'app.feature3': '✓ 24/7 客服支援',
                'app.feature4': '✓ 個人化推薦',

                // Customer Service Section
                'customerService.title': '需要客服協助嗎？',
                'customerService.order.title': '諮詢訂單問題',
                'customerService.order.desc': '將帶您至訂單列表選擇要詢問的訂單',
                'customerService.order.button': '查詢訂單',
                'customerService.general.title': '諮詢商品或其他問題',
                'customerService.general.desc': '由於諮詢量大，將盡快在一天內回覆',
                'customerService.general.button': '聯絡客服',

                // About Section
                'about.title': '關於 DodoMan',
                'about.desc': 'DodoMan 致力於為旅行者提供最優質的旅遊體驗。我們相信每一次旅行都應該是獨特而難忘的，因此我們精心策劃每一個行程，確保您能夠深度體驗當地文化、品嚐地道美食、欣賞壯麗景色。',
                'about.countries': '個國家',
                'about.customers': '滿意客戶',
                'about.experiences': '精選體驗',
                'about.rating': '客戶評價',

                // Footer
                'footer.tagline': '探索世界，創造回憶',
                'footer.services': '服務',
                'footer.service1': '旅遊體驗',
                'footer.service2': '團體預訂',
                'footer.service3': '企業服務',
                'footer.service4': '客製化行程',
                'footer.support': '支援',
                'footer.support1': '客服中心',
                'footer.support2': '預訂查詢',
                'footer.support3': '退改政策',
                'footer.support4': '常見問題',
                'footer.company': '公司',
                'footer.company1': '關於我們',
                'footer.company2': '加入我們',
                'footer.company3': '隱私政策',
                'footer.company4': '服務條款',
                'footer.copyright': '© 2024 DodoMan. 保留所有權利。',

                // Modal
                'modal.title': '選擇您的平台',
                'modal.desc': '為了獲得最佳體驗，請下載我們的官方 App',
                'modal.android': '下載 Android App',
                'modal.web': '繼續使用網頁版',

                // Subscription Section
                'subscription.badge': '🎯 限時優惠',
                'subscription.title': '加入嘟男會員制',
                'subscription.subtitle': '享受專屬折扣、VIP服務與獨家行程',
                'subscription.priceFrom': '月費低至',
                'subscription.priceStart': '起',
                'subscription.viewPlans': '查看訂閱方案',

                // Subscription Modal
                'subscription.modal.title': '嘟男旅遊訂閱制會員方案',
                'subscription.modal.subtitle': '提升用戶黏性、增加經常性收入，並提供差異化的旅遊體驗',

                // Plan 1: Basic
                'subscription.basic.name': '嘟男會員',
                'subscription.basic.subtitle': 'DodoMan Member',
                'subscription.basic.features.title': '核心權益',
                'subscription.basic.feature1': '🎯 所有旅遊套餐享5%折扣',
                'subscription.basic.feature2': '📱 優先獲得新行程通知',
                'subscription.basic.feature3': '🎧 專屬客服熱線',
                'subscription.basic.feature4': '📚 每月旅遊攻略電子書',
                'subscription.basic.feature5': '🗺️ 免費行程規劃工具使用',
                'subscription.basic.target': '適合族群：預算導向的年輕旅客、初次歐洲旅行者、價格敏感但追求品質的用戶',

                // Plan 2: Premium
                'subscription.premium.name': '岩男會員',
                'subscription.premium.subtitle': 'Rock Man Member',
                'subscription.premium.badge': '推薦',
                'subscription.premium.features.title': '核心權益',
                'subscription.premium.feature1': '🎯 所有旅遊套餐享10%折扣',
                'subscription.premium.feature2': '✈️ 每年2次免費機場接送服務',
                'subscription.premium.feature3': '🏨 酒店免費升等機會',
                'subscription.premium.feature4': '📞 24/7 緊急旅遊支援',
                'subscription.premium.feature5': '🎁 每季專屬限定行程優先預訂',
                'subscription.premium.feature6': '💳 旅遊保險折扣優惠',
                'subscription.premium.feature7': '🍽️ 合作餐廳用餐折扣',
                'subscription.premium.feature8': '📲 APP進階功能解鎖',
                'subscription.premium.target': '適合族群：經常旅行的商務人士、追求便利性的中產階級、重視服務品質的旅客',

                // Plan 3: VIP
                'subscription.vip.name': '霸道總裁會員',
                'subscription.vip.subtitle': 'Executive VIP',
                'subscription.vip.features.title': '核心權益',
                'subscription.vip.feature1': '🎯 所有旅遊套餐享15%折扣',
                'subscription.vip.feature2': '🚗 無限次免費機場接送',
                'subscription.vip.feature3': '🏨 酒店自動升等至最高可用房型',
                'subscription.vip.feature4': '👨‍💼 專屬旅遊顧問服務',
                'subscription.vip.feature5': '🎪 VIP專屬行程與私人導遊',
                'subscription.vip.feature6': '✈️ 商務艙升等優先權',
                'subscription.vip.feature7': '🍾 機場貴賓室免費使用',
                'subscription.vip.feature8': '🎁 每月專屬禮品',
                'subscription.vip.feature9': '📱 優先體驗新功能與服務',
                'subscription.vip.feature10': '🌍 全球緊急救援服務',
                'subscription.vip.feature11': '💎 合作夥伴奢華體驗折扣',
                'subscription.vip.target': '適合族群：高收入專業人士、企業高階主管、追求奢華體驗的旅客',

                // Footer
                'subscription.footer.title': '年度預期效益',
                'subscription.footer.revenue': '年度訂閱收益總計',
                'subscription.footer.growth': '旅遊套餐銷售增長',
                'subscription.footer.value': '客戶生命週期價值提升',
                'subscription.footer.disclaimer': '*訂閱方案即將推出，敬請期待',

                // Language Selector
                'lang.selector': '語言',
                'lang.zh-TW': '繁體中文',
                'lang.en': 'English'
            },
            'en': {
                // Header Navigation
                'nav.experiences': 'Experiences',
                'nav.destinations': 'Destinations',
                'nav.customerService': 'Support',
                'nav.about': 'About Us',
                'nav.openApp': 'Open App',

                // Hero Section
                'hero.title': 'Discover World Wonders',
                'hero.subtitle': 'Join us on unforgettable journeys to discover hidden gems and iconic destinations',
                'hero.downloadBtn': 'Download App Now',
                'hero.browseBtn': 'Browse Experiences',

                // Features Section
                'features.title': 'Why Choose DodoMan?',
                'features.unique.title': 'Unique Experiences',
                'features.unique.desc': 'Carefully curated travel experiences that let you deeply immerse in local culture and natural beauty, creating unforgettable memories.',
                'features.guide.title': 'Professional Guides',
                'features.guide.desc': 'Experienced local guides provide professional commentary and thoughtful service to ensure your journey is smooth and enjoyable.',
                'features.booking.title': 'Instant Booking',
                'features.booking.desc': 'Book trips anytime, anywhere through our mobile app with instant confirmation, making your travel planning more flexible and convenient.',

                // Gallery Section
                'gallery.title': 'Popular Attractions',
                'gallery.neuschwanstein.badge': 'Featured',
                'gallery.neuschwanstein.title': 'Neuschwanstein Castle Tour',
                'gallery.neuschwanstein.subtitle': 'Germany\'s Romantic Fairy-tale Castle',
                'gallery.neuschwanstein.location': 'Germany',
                'gallery.neuschwanstein.desc': 'Explore Germany\'s most romantic fairy-tale castle and experience King Ludwig II\'s dream world',
                'gallery.neuschwanstein.feature1': 'Castle Interior Tour',
                'gallery.neuschwanstein.feature2': 'Alpine Mountain Views',
                'gallery.neuschwanstein.feature3': 'Professional Guide',
                'gallery.neuschwanstein.duration': 'Half Day',

                'gallery.uffizi.badge': 'Art Gallery',
                'gallery.uffizi.title': 'Uffizi Gallery Art Tour',
                'gallery.uffizi.subtitle': 'Florence Renaissance Treasure',
                'gallery.uffizi.location': 'Florence',
                'gallery.uffizi.desc': 'Renaissance art treasure in Florence, Italy, housing world-class masterpieces',
                'gallery.uffizi.feature1': 'Professional Art Guide',
                'gallery.uffizi.feature2': 'Renaissance Masterpieces',
                'gallery.uffizi.feature3': 'Skip-the-Line Tickets',
                'gallery.uffizi.duration': '3 Hours',

                'gallery.colosseum.badge': 'Must Visit',
                'gallery.colosseum.title': 'Colosseum Exploration',
                'gallery.colosseum.subtitle': 'Ancient Roman Empire Witness',
                'gallery.colosseum.location': 'Rome',
                'gallery.colosseum.desc': 'One of the World\'s Eight Wonders, experience the grandeur and glory of the Ancient Roman Empire',
                'gallery.colosseum.feature1': 'Historical Expert Guide',
                'gallery.colosseum.feature2': 'Underground Level Visit',
                'gallery.colosseum.feature3': 'Audio Guide Equipment',
                'gallery.colosseum.duration': '2 Hours',

                // Packages Section
                'packages.title': 'Featured Packages',

                // Package 1 - Rome Venice Train Tour
                'package.rome_venice_train.title': 'Rome Independent Tour',
                'package.rome_venice_train.subtitle': 'From Venice by High-Speed Train',
                'package.rome_venice_train.location': 'Venice → Rome',
                'package.rome_venice_train.description': 'A new sightseeing tour with daily departure from Venice by round trip high speed train. Includes ticket to hop-on hop-off bus and a tour of the Vatican and Sistine Chapel with an expert guide.',
                'package.rome_venice_train.feature1': 'Round-trip High-speed Train',
                'package.rome_venice_train.feature2': 'Hop-on Hop-off Bus',
                'package.rome_venice_train.feature3': 'Vatican Expert Guide',
                'package.rome_venice_train.feature4': 'Sistine Chapel Ticket',
                'package.rome_venice_train.duration': 'Day Trip',
                'package.rome_venice_train.badge': 'Special Offer',

                // Package 2 - Milan Turin Super Saver
                'package.milan_turin_supersaver.title': 'Milan Super Saver: Turin & Milan',
                'package.milan_turin_supersaver.subtitle': 'Northern Italy Twin Cities Tour',
                'package.milan_turin_supersaver.location': 'Milan → Turin',
                'package.milan_turin_supersaver.description': 'Visit two of northern Italy\'s top cities in a single day with this Milan Super Saver. From Milan, travel to Turin by high-speed train, see Piazza San Carlo with its 17th-century churches, and enjoy chocolate and gelato tasting.',
                'package.milan_turin_supersaver.feature1': 'High-speed Train',
                'package.milan_turin_supersaver.feature2': 'Chocolate Tasting',
                'package.milan_turin_supersaver.feature3': 'Gelato Experience',
                'package.milan_turin_supersaver.feature4': 'Prosecco Glass',
                'package.milan_turin_supersaver.feature5': 'Milan Evening Walk',
                'package.milan_turin_supersaver.duration': 'Day Trip',
                'package.milan_turin_supersaver.badge': 'Great Value',

                // Package 3 - Berlin DDR Museum
                'package.berlin_ddr_museum.title': 'Skip the Line: DDR Museum Berlin',
                'package.berlin_ddr_museum.subtitle': 'Experience Socialist East Germany',
                'package.berlin_ddr_museum.location': 'Berlin',
                'package.berlin_ddr_museum.description': 'Experience life in socialist East Germany with a trip to Berlin\'s award-winning DDR Museum. Avoid long queues with skip-the-line entrance ticket and explore all museum areas.',
                'package.berlin_ddr_museum.feature1': 'Skip-the-Line Ticket',
                'package.berlin_ddr_museum.feature2': 'Interactive Experience',
                'package.berlin_ddr_museum.feature3': 'East German Apartment',
                'package.berlin_ddr_museum.duration': '2 Hours',
                'package.berlin_ddr_museum.badge': 'Historical Experience',

                // Package 4 - Rome Colosseum Walking Tour
                'package.rome_colosseum_walking.title': 'Private Tour: Ancient Rome & Colosseum',
                'package.rome_colosseum_walking.subtitle': 'Glory of Ancient Rome Walking Tour',
                'package.rome_colosseum_walking.location': 'Rome',
                'package.rome_colosseum_walking.description': 'Begin this 3-hour sightseeing tour of Imperial Rome at the world\'s most famous arena; the Colosseum. Built in 72 A.D. and finished 8 years later, it could seat up to 50,000 spectators.',
                'package.rome_colosseum_walking.feature1': 'Expert Guide',
                'package.rome_colosseum_walking.feature2': 'Colosseum Interior',
                'package.rome_colosseum_walking.feature3': 'Ancient Rome History',
                'package.rome_colosseum_walking.feature4': 'Private Small Group',
                'package.rome_colosseum_walking.duration': '3 Hours',
                'package.rome_colosseum_walking.badge': 'Must Visit',

                // Package 5 - Berlin Alternative Tour
                'package.berlin_alternative_tour.title': 'Private Berlin Walking Tour',
                'package.berlin_alternative_tour.subtitle': 'The Alternative Berlin Experience',
                'package.berlin_alternative_tour.location': 'Berlin',
                'package.berlin_alternative_tour.description': 'Enjoy a 3.5-hour walking tour in Berlin and see the alternative Hippie Berlin with its graffiti, squats, art projects and special alternative stories. See Kreuzberg center and Friedrichshain.',
                'package.berlin_alternative_tour.feature1': 'Graffiti Art Tour',
                'package.berlin_alternative_tour.feature2': 'East Side Gallery',
                'package.berlin_alternative_tour.feature3': 'Yaam Beach',
                'package.berlin_alternative_tour.feature4': 'Potsdamer Platz',
                'package.berlin_alternative_tour.feature5': 'Art Compounds',
                'package.berlin_alternative_tour.duration': '3.5 Hours',
                'package.berlin_alternative_tour.badge': 'Cultural Experience',

                // Package 6 - Milan Duomo Rooftop
                'package.milan_duomo_rooftop.title': 'Milan Duomo Rooftop Tour',
                'package.milan_duomo_rooftop.subtitle': 'Including VR Experience',
                'package.milan_duomo_rooftop.location': 'Milan',
                'package.milan_duomo_rooftop.description': 'Enjoy amazing views of Milan from above visiting the terraces of the Duomo with professional local guides. During this 1-hour tour, experience spectacular city views and VR technology.',
                'package.milan_duomo_rooftop.feature1': 'Rooftop Terrace Access',
                'package.milan_duomo_rooftop.feature2': 'Virtual Reality Experience',
                'package.milan_duomo_rooftop.feature3': 'Professional Guide',
                'package.milan_duomo_rooftop.feature4': 'Gothic Architecture',
                'package.milan_duomo_rooftop.duration': '1 Hour',
                'package.milan_duomo_rooftop.badge': 'Unique Experience',

                // Common package terms
                'package.bookNow': 'Book Now',

                // App Promotion Section
                'app.title': 'Download DodoMan App',
                'app.subtitle': 'Explore the world anytime, anywhere with exclusive offers and instant booking services',
                'app.feature1': '✓ Exclusive app pricing',
                'app.feature2': '✓ Instant trip confirmation',
                'app.feature3': '✓ 24/7 customer support',
                'app.feature4': '✓ Personalized recommendations',

                // Customer Service Section
                'customerService.title': 'Need Customer Support?',
                'customerService.order.title': 'Order Inquiry',
                'customerService.order.desc': 'We will direct you to your order list to select the order you want to inquire about',
                'customerService.order.button': 'View Orders',
                'customerService.general.title': 'Product or Other Inquiries',
                'customerService.general.desc': 'Due to high inquiry volume, we will respond as soon as possible within one day',
                'customerService.general.button': 'Contact Support',

                // About Section
                'about.title': 'About DodoMan',
                'about.desc': 'DodoMan is committed to providing travelers with the highest quality travel experiences. We believe every journey should be unique and memorable, so we carefully curate every itinerary to ensure you can deeply experience local culture, taste authentic cuisine, and enjoy magnificent scenery.',
                'about.countries': 'Countries',
                'about.customers': 'Satisfied Customers',
                'about.experiences': 'Curated Experiences',
                'about.rating': 'Customer Rating',

                // Footer
                'footer.tagline': 'Explore the World, Create Memories',
                'footer.services': 'Services',
                'footer.service1': 'Travel Experiences',
                'footer.service2': 'Group Bookings',
                'footer.service3': 'Corporate Services',
                'footer.service4': 'Custom Itineraries',
                'footer.support': 'Support',
                'footer.support1': 'Customer Service',
                'footer.support2': 'Booking Inquiry',
                'footer.support3': 'Cancellation Policy',
                'footer.support4': 'FAQ',
                'footer.company': 'Company',
                'footer.company1': 'About Us',
                'footer.company2': 'Join Us',
                'footer.company3': 'Privacy Policy',
                'footer.company4': 'Terms of Service',
                'footer.copyright': '© 2024 DodoMan. All rights reserved.',

                // Modal
                'modal.title': 'Choose Your Platform',
                'modal.desc': 'For the best experience, please download our official App',
                'modal.android': 'Download Android App',
                'modal.web': 'Continue with Web',

                // Subscription Section
                'subscription.badge': '🎯 Limited Offer',
                'subscription.title': 'Join DodoMan Membership',
                'subscription.subtitle': 'Enjoy exclusive discounts, VIP services & unique experiences',
                'subscription.priceFrom': 'Monthly from',
                'subscription.priceStart': 'onwards',
                'subscription.viewPlans': 'View Plans',

                // Subscription Modal
                'subscription.modal.title': 'DodoMan Travel Subscription Membership Plans',
                'subscription.modal.subtitle': 'Enhance user loyalty, increase recurring revenue, and provide differentiated travel experiences',

                // Plan 1: Basic
                'subscription.basic.name': 'DodoMan Member',
                'subscription.basic.subtitle': 'DodoMan Member',
                'subscription.basic.features.title': 'Core Benefits',
                'subscription.basic.feature1': '🎯 5% discount on all travel packages',
                'subscription.basic.feature2': '📱 Priority new itinerary notifications',
                'subscription.basic.feature3': '🎧 Dedicated customer service hotline',
                'subscription.basic.feature4': '📚 Monthly travel guide e-books',
                'subscription.basic.feature5': '🗺️ Free travel planning tool access',
                'subscription.basic.target': 'Target Group: Budget-conscious young travelers, first-time Europe visitors, price-sensitive quality seekers',

                // Plan 2: Premium
                'subscription.premium.name': 'Rock Man Member',
                'subscription.premium.subtitle': 'Rock Man Member',
                'subscription.premium.badge': 'Recommended',
                'subscription.premium.features.title': 'Core Benefits',
                'subscription.premium.feature1': '🎯 10% discount on all travel packages',
                'subscription.premium.feature2': '✈️ 2 free airport transfer services per year',
                'subscription.premium.feature3': '🏨 Free hotel upgrade opportunities',
                'subscription.premium.feature4': '📞 24/7 emergency travel support',
                'subscription.premium.feature5': '🎁 Quarterly exclusive itinerary priority booking',
                'subscription.premium.feature6': '💳 Travel insurance discount benefits',
                'subscription.premium.feature7': '🍽️ Partner restaurant dining discounts',
                'subscription.premium.feature8': '📲 APP advanced features unlock',
                'subscription.premium.target': 'Target Group: Frequent business travelers, convenience-seeking middle class, service quality-focused travelers',

                // Plan 3: VIP
                'subscription.vip.name': 'Executive VIP',
                'subscription.vip.subtitle': 'Executive VIP',
                'subscription.vip.features.title': 'Core Benefits',
                'subscription.vip.feature1': '🎯 15% discount on all travel packages',
                'subscription.vip.feature2': '🚗 Unlimited free airport transfers',
                'subscription.vip.feature3': '🏨 Automatic hotel upgrade to highest available room',
                'subscription.vip.feature4': '👨‍💼 Dedicated travel consultant service',
                'subscription.vip.feature5': '🎪 VIP exclusive tours with private guides',
                'subscription.vip.feature6': '✈️ Business class upgrade priority',
                'subscription.vip.feature7': '🍾 Free airport lounge access',
                'subscription.vip.feature8': '🎁 Monthly exclusive gifts',
                'subscription.vip.feature9': '📱 Priority access to new features & services',
                'subscription.vip.feature10': '🌍 Global emergency rescue services',
                'subscription.vip.feature11': '💎 Partner luxury experience discounts',
                'subscription.vip.target': 'Target Group: High-income professionals, corporate executives, luxury experience seekers',

                // Footer
                'subscription.footer.title': 'Annual Projected Benefits',
                'subscription.footer.revenue': 'Annual subscription revenue total',
                'subscription.footer.growth': 'Travel package sales growth',
                'subscription.footer.value': 'Customer lifetime value increase',
                'subscription.footer.disclaimer': '*Subscription plans coming soon, stay tuned',

                // Language Selector
                'lang.selector': 'Language',
                'lang.zh-TW': '繁體中文',
                'lang.en': 'English'
            }
        };

        this.init();
    }

    init() {
        this.updateContent();
        this.updateLanguageSelector();
    }

    // 獲取翻譯文字
    t(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    // 切換語言
    switchLanguage(language) {
        if (this.translations[language]) {
            this.currentLanguage = language;
            localStorage.setItem('dodoman-language', language);
            this.updateContent();
            this.updateLanguageSelector();

            // 觸發語言切換事件
            document.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: language }
            }));
        }
    }

    // 更新頁面內容
    updateContent() {
        // 更新所有具有 data-i18n 屬性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);

            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // 更新 HTML lang 屬性
        document.documentElement.lang = this.currentLanguage;
    }

    // 更新語言選擇器
    updateLanguageSelector() {
        const currentLangBtn = document.querySelector('#currentLanguage');
        const langOptions = document.querySelectorAll('.lang-option');

        if (currentLangBtn) {
            currentLangBtn.textContent = this.t(`lang.${this.currentLanguage}`);
        }

        langOptions.forEach(option => {
            const lang = option.getAttribute('data-lang');
            if (lang === this.currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    // 獲取當前語言
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // 獲取支援的語言列表
    getSupportedLanguages() {
        return Object.keys(this.translations);
    }
}

// 創建全域 i18n 實例
window.i18n = new I18nManager();