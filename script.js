// script.js
// This script provides multi‑language support for the AndesGold website.
// A translations dictionary maps data‑i18n keys to text for each supported language.

const translations = {
  en: {
    'company-name': 'AndesGold',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-product': 'Product',
    'nav-shipping': 'Shipping',
    'nav-giving': 'Giving Back',
    'nav-contact': 'Contact',
    'hero-title': 'Premium Colombian Hass Avocados',
    'hero-tagline': 'From our Andean orchards to tables around the world, we deliver freshness and flavor you can trust.',
    'hero-button': 'Get a Quote',
    'about-title': 'Our Story',
    'about-text1': 'AndesGold is a premier exporter of Hass avocados grown in the fertile Colombian Andes. Our orchards benefit from nutrient‑rich soils, abundant water and ideal climates, producing fruit with the creamy texture and rich flavor demanded by discerning consumers.',
    'about-text2': 'Colombia devotes over 35,000 hectares to Hass avocado production and exported more than 112,000 tons between January and October 2024, generating USD 248 million and ranking among the world’s top suppliers. By partnering with us, you tap into a reliable source of sustainable premium fruit.',
    'product-title': 'Our Hass Avocados',
    'product-feature1': '<strong>Unmatched Quality:</strong> Carefully harvested at peak ripeness for creamy texture and rich flavor.',
    'product-feature2': '<strong>Sustainable Cultivation:</strong> Eco‑friendly farming practices that protect soils, water and biodiversity.',
    'product-feature3': '<strong>Global Accessibility:</strong> Thanks to Colombia’s trade agreements, our avocados reach over 30 countries.',
    'shipping-title': 'Global Shipping',
    'shipping-text1': 'Our logistics experts coordinate every step from orchard to destination. We provide custom packaging, cold‑chain monitoring and real‑time tracking to ensure your avocados arrive fresh and on time.',
    'shipping-text2': 'We ship year‑round to North America, Europe, Asia and the Middle East. Whether you need a few pallets or full container loads, AndesGold is your partner for dependable supply.',
    'giving-title': 'Giving Back',
    'env-title': 'Environmental Stewardship',
    'env-text': 'Colombia is home to vast forests threatened by deforestation. We donate a portion of our profits to projects that plant trees, restore habitats and promote deforestation‑free rural development.',
    'edu-title': 'Agricultural Education',
    'edu-text': 'Persistent gaps in rural education limit opportunities for young Colombians. Our programs provide farmers and students with training in sustainable agriculture, business skills and innovation, empowering the next generation of growers.',
    'health-title': 'Community Health',
    'health-text': 'Remote communities often travel hours to reach basic health care. We support mobile clinics and health initiatives that improve access to medical services for women, children and vulnerable populations.',
    'contact-title': 'Contact Us',
    'contact-text': 'Ready to source premium Hass avocados or want to learn more about our programs? Reach out and let’s grow together.',
    'contact-button': 'Send Email'
  },
  es: {
    'company-name': 'AndesGold',
    'nav-home': 'Inicio',
    'nav-about': 'Sobre nosotros',
    'nav-product': 'Producto',
    'nav-shipping': 'Envíos',
    'nav-giving': 'Compromiso social',
    'nav-contact': 'Contacto',
    'hero-title': 'Aguacates Hass colombianos premium',
    'hero-tagline': 'Desde nuestros huertos andinos hasta mesas de todo el mundo, entregamos frescura y sabor en los que puede confiar.',
    'hero-button': 'Solicitar cotización',
    'about-title': 'Nuestra historia',
    'about-text1': 'AndesGold es un exportador de primer nivel de aguacates Hass cultivados en los fértiles Andes colombianos. Nuestros huertos se benefician de suelos ricos en nutrientes, abundante agua y climas ideales, produciendo frutos con la textura cremosa y el sabor rico que exigen los consumidores exigentes.',
    'about-text2': 'Colombia dedica más de 35.000 hectáreas a la producción de aguacate Hass y exportó más de 112.000 toneladas entre enero y octubre de 2024, generando USD 248 millones y situándose entre los principales proveedores mundiales. Al asociarse con nosotros, accede a una fuente confiable de fruta premium sostenible.',
    'product-title': 'Nuestros aguacates Hass',
    'product-feature1': '<strong>Calidad inigualable:</strong> Cosechados cuidadosamente en su punto óptimo de madurez para obtener textura cremosa y sabor rico.',
    'product-feature2': '<strong>Cultivo sostenible:</strong> Prácticas agrícolas ecológicas que protegen los suelos, el agua y la biodiversidad.',
    'product-feature3': '<strong>Accesibilidad global:</strong> Gracias a los acuerdos comerciales de Colombia, nuestros aguacates llegan a más de 30 países.',
    'shipping-title': 'Envíos globales',
    'shipping-text1': 'Nuestros expertos en logística coordinan cada paso desde el huerto hasta el destino. Proporcionamos empaques personalizados, monitoreo de la cadena de frío y seguimiento en tiempo real para garantizar que sus aguacates lleguen frescos y puntuales.',
    'shipping-text2': 'Enviamos durante todo el año a Norteamérica, Europa, Asia y Oriente Medio. Ya necesite algunos palés o contenedores completos, AndesGold es su socio para un suministro confiable.',
    'giving-title': 'Compromiso social',
    'env-title': 'Gestión ambiental',
    'env-text': 'Colombia alberga vastos bosques amenazados por la deforestación. Donamos una parte de nuestras ganancias a proyectos que plantan árboles, restauran hábitats y promueven un desarrollo rural libre de deforestación.',
    'edu-title': 'Educación agrícola',
    'edu-text': 'Las brechas persistentes en la educación rural limitan las oportunidades para los jóvenes colombianos. Nuestros programas brindan a agricultores y estudiantes capacitación en agricultura sostenible, habilidades empresariales e innovación, empoderando a la próxima generación de cultivadores.',
    'health-title': 'Salud comunitaria',
    'health-text': 'Las comunidades remotas a menudo viajan horas para acceder a atención médica básica. Apoyamos clínicas móviles e iniciativas de salud que mejoran el acceso a servicios médicos para mujeres, niños y poblaciones vulnerables.',
    'contact-title': 'Contáctenos',
    'contact-text': '¿Listo para abastecerse de aguacates Hass premium o desea saber más sobre nuestros programas? Comuníquese con nosotros y crezcamos juntos.',
    'contact-button': 'Enviar correo'
  },
  zh: {
    'company-name': 'AndesGold',
    'nav-home': '首页',
    'nav-about': '关于我们',
    'nav-product': '产品',
    'nav-shipping': '运输',
    'nav-giving': '社会回馈',
    'nav-contact': '联系',
    'hero-title': '哥伦比亚优质哈斯鳄梨',
    'hero-tagline': '从我们安第斯山的果园到世界各地的餐桌，我们为您送去值得信赖的新鲜和美味。',
    'hero-button': '获取报价',
    'about-title': '我们的故事',
    'about-text1': 'AndesGold 是哥伦比亚安第斯肥沃土地上种植的哈斯鳄梨的顶级出口商。我们的果园受益于富含养分的土壤、充足的水源和理想的气候，生产出具有奶油般口感和丰富风味的水果，深受挑剔消费者的青睐。',
    'about-text2': '哥伦比亚有超过 3.5 万公顷用于哈斯鳄梨生产，并在 2024 年 1 月至 10 月期间出口了超过 11.2 万吨，创造了 2.48 亿美元的收入，在全球供应商中名列前茅。与我们合作，您可以获得可持续高端水果的可靠来源。',
    'product-title': '我们的哈斯鳄梨',
    'product-feature1': '<strong>卓越品质：</strong> 在最佳成熟度精心采摘，口感细腻、风味浓郁。',
    'product-feature2': '<strong>可持续种植：</strong> 保护土壤、水和生物多样性的环保种植实践。',
    'product-feature3': '<strong>全球通达：</strong> 得益于哥伦比亚的贸易协定，我们的鳄梨销往 30 多个国家。',
    'shipping-title': '全球运输',
    'shipping-text1': '我们的物流专家协调从果园到目的地的每一个环节。我们提供定制包装、冷链监控和实时跟踪，确保您的鳄梨新鲜准时抵达。',
    'shipping-text2': '我们全年向北美、欧洲、亚洲和中东地区发货。无论您需要几个托盘还是整柜货物，AndesGold 都是您可靠的供应伙伴。',
    'giving-title': '社会回馈',
    'env-title': '环境保护',
    'env-text': '哥伦比亚拥有广阔的森林，但正受到砍伐的威胁。我们将部分利润捐赠给植树、恢复栖息地和促进无砍伐的农村发展的项目。',
    'edu-title': '农业教育',
    'edu-text': '农村教育的长期差距限制了年轻哥伦比亚人的机会。我们的计划为农民和学生提供可持续农业、商业技能和创新培训，赋予下一代种植者力量。',
    'health-title': '社区健康',
    'health-text': '偏远社区往往需要长途跋涉才能获得基础医疗。我们支持流动诊所和卫生项目，改善妇女、儿童和弱势群体的医疗服务获得。',
    'contact-title': '联系我们',
    'contact-text': '准备采购优质哈斯鳄梨，或想了解更多我们的计划？欢迎联系我们，让我们共同成长。',
    'contact-button': '发送邮件'
  },
  it: {
    'company-name': 'AndesGold',
    'nav-home': 'Home',
    'nav-about': 'Chi siamo',
    'nav-product': 'Prodotto',
    'nav-shipping': 'Spedizioni',
    'nav-giving': 'Impegno sociale',
    'nav-contact': 'Contatti',
    'hero-title': 'Avocado Hass colombiani premium',
    'hero-tagline': 'Dai nostri frutteti andini alle tavole di tutto il mondo, consegniamo freschezza e sapore di cui ci si può fidare.',
    'hero-button': 'Richiedi un preventivo',
    'about-title': 'La nostra storia',
    'about-text1': 'AndesGold è un esportatore di primo livello di avocado Hass coltivati nelle fertili Ande colombiane. I nostri frutteti beneficiano di terreni ricchi di nutrienti, abbondanza d’acqua e climi ideali, producendo frutti con la consistenza cremosa e il sapore intenso richiesti dai consumatori più esigenti.',
    'about-text2': 'La Colombia dedica oltre 35.000 ettari alla produzione di avocado Hass ed ha esportato più di 112.000 tonnellate tra gennaio e ottobre 2024, generando 248 milioni di dollari e collocandosi tra i principali fornitori al mondo. Collaborando con noi, accedete a una fonte affidabile di frutta premium e sostenibile.',
    'product-title': 'I nostri avocado Hass',
    'product-feature1': '<strong>Qualità impareggiabile:</strong> Raccolti con cura al momento giusto per una consistenza cremosa e un gusto ricco.',
    'product-feature2': '<strong>Coltivazione sostenibile:</strong> Pratiche agricole eco-compatibili che proteggono suolo, acqua e biodiversità.',
    'product-feature3': '<strong>Accessibilità globale:</strong> Grazie agli accordi commerciali della Colombia, i nostri avocado raggiungono oltre 30 paesi.',
    'shipping-title': 'Spedizioni globali',
    'shipping-text1': 'I nostri esperti di logistica coordinano ogni fase dal frutteto alla destinazione. Forniamo imballaggi personalizzati, monitoraggio della catena del freddo e tracciamento in tempo reale per garantire che i vostri avocado arrivino freschi e puntuali.',
    'shipping-text2': 'Spediamo tutto l’anno in Nord America, Europa, Asia e Medio Oriente. Che abbiate bisogno di pochi pallet o di container completi, AndesGold è il vostro partner per una fornitura affidabile.',
    'giving-title': 'Impegno sociale',
    'env-title': 'Tutela ambientale',
    'env-text': 'La Colombia ospita vaste foreste minacciate dalla deforestazione. Doniamo una parte dei nostri profitti a progetti che piantano alberi, ripristinano habitat e promuovono lo sviluppo rurale senza deforestazione.',
    'edu-title': 'Formazione agricola',
    'edu-text': 'Le persistenti lacune nell’istruzione rurale limitano le opportunità per i giovani colombiani. I nostri programmi offrono a agricoltori e studenti formazione in agricoltura sostenibile, competenze imprenditoriali e innovazione, dando potere alla prossima generazione di coltivatori.',
    'health-title': 'Salute comunitaria',
    'health-text': 'Le comunità remote spesso devono viaggiare per ore per raggiungere cure mediche di base. Sosteniamo cliniche mobili e iniziative sanitarie che migliorano l’accesso ai servizi medici per donne, bambini e popolazioni vulnerabili.',
    'contact-title': 'Contattaci',
    'contact-text': 'Pronti a procurare avocado Hass premium o volete saperne di più sui nostri programmi? Mettetevi in contatto e cresciamo insieme.',
    'contact-button': 'Invia email'
  },
  ar: {
    'company-name': 'AndesGold',
    'nav-home': 'الصفحة الرئيسية',
    'nav-about': 'من نحن',
    'nav-product': 'المنتج',
    'nav-shipping': 'الشحن',
    'nav-giving': 'العطاء المجتمعي',
    'nav-contact': 'اتصل بنا',
    'hero-title': 'أفوكادو هاس الكولومبي الفاخر',
    'hero-tagline': 'من بساتيننا في جبال الأنديز إلى موائد العالم، نوفر لكم الطزاجة والنكهة التي يمكنكم الثقة بها.',
    'hero-button': 'احصل على عرض سعر',
    'about-title': 'قصتنا',
    'about-text1': 'AndesGold هي شركة رائدة في تصدير أفوكادو هاس المزروع في جبال الأنديز الكولومبية الخصبة. تستفيد بساتيننا من التربة الغنية بالمغذيات والمياه الوفيرة والمناخات المثالية، مما ينتج ثمرة ذات قوام كريمي ونكهة غنية يطلبها المستهلكون المميزون.',
    'about-text2': 'تخصص كولومبيا أكثر من 35 ألف هكتار لإنتاج أفوكادو هاس وصدرت أكثر من 112 ألف طن بين يناير وأكتوبر 2024، محققةً إيرادات بقيمة 248 مليون دولار، مما يضعها بين كبار الموردين في العالم. من خلال الشراكة معنا، تحصلون على مصدر موثوق لفاكهة فاخرة ومستدامة.',
    'product-title': 'أفوكادو هاس الخاص بنا',
    'product-feature1': '<strong>جودة لا مثيل لها:</strong> يتم حصادها بعناية في ذروة النضج للحصول على قوام كريمي ونكهة غنية.',
    'product-feature2': '<strong>زراعة مستدامة:</strong> ممارسات زراعية صديقة للبيئة تحمي التربة والمياه والتنوع البيولوجي.',
    'product-feature3': '<strong>وصول عالمي:</strong> بفضل اتفاقيات التجارة الكولومبية، تصل أفوكادونا إلى أكثر من 30 دولة.',
    'shipping-title': 'شحن عالمي',
    'shipping-text1': 'يقوم خبراء اللوجستيات لدينا بتنسيق كل خطوة من البستان إلى الوجهة. نوفر تغليفًا مخصصًا، مراقبة لسلسلة التبريد وتتبعًا في الوقت الحقيقي لضمان وصول أفوكادوكم طازجًا وفي الوقت المناسب.',
    'shipping-text2': 'نحن نشحن طوال العام إلى أمريكا الشمالية وأوروبا وآسيا والشرق الأوسط. سواء كنتم بحاجة إلى عدة منصات أو حاويات كاملة، تعد AndesGold شريككم لتوفير موثوق.',
    'giving-title': 'العطاء المجتمعي',
    'env-title': 'الحماية البيئية',
    'env-text': 'تضم كولومبيا غابات واسعة مهددة بإزالة الغابات. نتبرع بجزء من أرباحنا لمشاريع تزرع الأشجار، تعيد تأهيل الموائل وتعزز التنمية الريفية الخالية من إزالة الغابات.',
    'edu-title': 'التعليم الزراعي',
    'edu-text': 'الفجوات المستمرة في التعليم الريفي تحد من فرص الشباب الكولومبيين. تقدم برامجنا تدريبًا للمزارعين والطلاب في الزراعة المستدامة، مهارات الأعمال والابتكار، وتمكّن الجيل القادم من المزارعين.',
    'health-title': 'الصحة المجتمعية',
    'health-text': 'غالبًا ما تسافر المجتمعات النائية لساعات للوصول إلى الرعاية الصحية الأساسية. نحن ندعم العيادات المتنقلة والمبادرات الصحية التي تحسن الوصول إلى الخدمات الطبية للنساء والأطفال والفئات الضعيفة.',
    'contact-title': 'اتصل بنا',
    'contact-text': 'هل أنتم مستعدون للحصول على أفوكادو هاس فاخرة أو تريدون معرفة المزيد عن برامجنا؟ تواصلوا معنا ولننمو معًا.',
    'contact-button': 'إرسال بريد إلكتروني'
  },
  fr: {
    'company-name': 'AndesGold',
    'nav-home': 'Accueil',
    'nav-about': 'À propos',
    'nav-product': 'Produit',
    'nav-shipping': 'Expédition',
    'nav-giving': 'Responsabilité sociétale',
    'nav-contact': 'Contact',
    'hero-title': 'Avocats Hass colombiens premium',
    'hero-tagline': 'De nos vergers andins aux tables du monde entier, nous livrons une fraîcheur et une saveur auxquelles vous pouvez faire confiance.',
    'hero-button': 'Obtenir un devis',
    'about-title': 'Notre histoire',
    'about-text1': 'AndesGold est un exportateur de premier plan d’avocats Hass cultivés dans les Andes colombiennes fertiles. Nos vergers bénéficient de sols riches en nutriments, d’une eau abondante et de climats idéaux, produisant des fruits à la texture crémeuse et à la saveur riche exigées par les consommateurs les plus exigeants.',
    'about-text2': 'La Colombie consacre plus de 35 000 hectares à la production d’avocats Hass et a exporté plus de 112 000 tonnes entre janvier et octobre 2024, générant 248 millions USD et se plaçant parmi les principaux fournisseurs mondiaux. En vous associant à nous, vous bénéficiez d’une source fiable de fruits premium durables.',
    'product-title': 'Nos avocats Hass',
    'product-feature1': '<strong>Qualité inégalée :</strong> Récoltés avec soin à maturité optimale pour une texture crémeuse et une saveur riche.',
    'product-feature2': '<strong>Culture durable :</strong> Pratiques agricoles écologiques qui protègent les sols, l’eau et la biodiversité.',
    'product-feature3': '<strong>Accessibilité mondiale :</strong> Grâce aux accords commerciaux de la Colombie, nos avocats atteignent plus de 30 pays.',
    'shipping-title': 'Expédition mondiale',
    'shipping-text1': 'Nos experts logistiques coordonnent chaque étape du verger à la destination. Nous fournissons un emballage personnalisé, une surveillance de la chaîne du froid et un suivi en temps réel pour garantir que vos avocats arrivent frais et à temps.',
    'shipping-text2': 'Nous expédions toute l’année vers l’Amérique du Nord, l’Europe, l’Asie et le Moyen-Orient. Que vous ayez besoin de quelques palettes ou de conteneurs complets, AndesGold est votre partenaire pour un approvisionnement fiable.',
    'giving-title': 'Responsabilité sociétale',
    'env-title': 'Protection de l’environnement',
    'env-text': 'La Colombie abrite de vastes forêts menacées par la déforestation. Nous versons une partie de nos bénéfices à des projets qui plantent des arbres, restaurent les habitats et promeuvent le développement rural sans déforestation.',
    'edu-title': 'Éducation agricole',
    'edu-text': 'Les écarts persistants dans l’éducation rurale limitent les opportunités pour les jeunes Colombiens. Nos programmes offrent aux agriculteurs et aux étudiants une formation en agriculture durable, en compétences commerciales et en innovation, donnant du pouvoir à la prochaine génération de cultivateurs.',
    'health-title': 'Santé communautaire',
    'health-text': 'Les communautés isolées parcourent souvent des heures pour accéder à des soins médicaux de base. Nous soutenons des cliniques mobiles et des initiatives de santé qui améliorent l’accès aux services médicaux pour les femmes, les enfants et les populations vulnérables.',
    'contact-title': 'Contactez-nous',
    'contact-text': 'Prêt à vous approvisionner en avocats Hass premium ou envie d’en savoir plus sur nos programmes ? Contactez-nous et grandissons ensemble.',
    'contact-button': 'Envoyer un e-mail'
  }
};

/**
 * Update visible text on the page when the language changes.
 * @param {string} lang The language code selected (en, es, zh, it, ar, fr).
 */
function updateLanguage(lang) {
  const trans = translations[lang] || translations.en;
  // Set html lang attribute for accessibility
  document.documentElement.lang = lang;
  // Set direction for Arabic (rtl) or left‑to‑right for others
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Update every element with a data‑i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (trans[key]) {
      // Use innerHTML to preserve any markup in translations (e.g., <strong>)
      el.innerHTML = trans[key];
    }
  });
}

// Initialize language selection and event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Set default language to English on load
  updateLanguage('en');
  const selector = document.getElementById('language-select');
  if (selector) {
    selector.addEventListener('change', (e) => {
      const newLang = e.target.value;
      updateLanguage(newLang);
    });
  }
});