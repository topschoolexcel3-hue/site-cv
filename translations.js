/**
 * translations.js — Multilingual support (FR / AR / EN)
 * Uses data-i18n attributes on HTML elements.
 * Alpine.js `lang` reactive property triggers re-translation.
 */

const TRANSLATIONS = {

  // ─── NAVIGATION ───────────────────────────────────
  'nav.subtitle': {
    fr: 'Consultant IT & Formateur',
    ar: 'مستشار تكنولوجيا المعلومات ومدرّب',
    en: 'IT Consultant & Trainer'
  },
  'nav.profil': { fr: 'Profil', ar: 'الملف الشخصي', en: 'Profile' },
  'nav.competences': { fr: 'Compétences', ar: 'المهارات', en: 'Skills' },
  'nav.formations': { fr: 'Formations Dispensées', ar: 'التكوينات المقدّمة', en: 'Training Delivered' },
  'nav.parcours': { fr: 'Parcours', ar: 'المسار المهني', en: 'Career Path' },
  'nav.clients': { fr: 'Clients', ar: 'العملاء', en: 'Clients' },
  'nav.contact': { fr: 'Contact', ar: 'اتصل بنا', en: 'Contact' },
  'nav.download_cv': { fr: 'Télécharger CV (PDF)', ar: 'تحميل السيرة الذاتية (PDF)', en: 'Download CV (PDF)' },

  // ─── HERO SECTION ─────────────────────────────────
  'hero.available': {
    fr: 'Disponible pour Formations & Missions de Consulting',
    ar: 'متوفر للتكوينات والمهام الاستشارية',
    en: 'Available for Training & Consulting Missions'
  },
  'hero.title_sub': {
    fr: 'Formateur IT & Consultant Informatique',
    ar: 'مدرّب تكنولوجيا المعلومات ومستشار معلوماتية',
    en: 'IT Trainer & IT Consultant'
  },
  'hero.desc': {
    fr: 'Enseignant à l\'Université d\'Alger 2 • Consultant Auto-Entrepreneur',
    ar: 'أستاذ بجامعة الجزائر 2 • مستشار مقاول ذاتي',
    en: 'Lecturer at University of Algiers 2 • Self-Employed Consultant'
  },
  'hero.specialization': {
    fr: 'Spécialisé dans la formation de cadres dirigeants, la Data Analysis (Excel, Python, SQL, Power BI), la cybersécurité, le web et l\'intelligence artificielle.',
    ar: 'متخصص في تكوين الإطارات العليا، تحليل البيانات (Excel, Python, SQL, Power BI)، الأمن السيبراني، الويب والذكاء الاصطناعي.',
    en: 'Specialized in training executives, Data Analysis (Excel, Python, SQL, Power BI), cybersecurity, web and artificial intelligence.'
  },
  'hero.location': { fr: 'Boumerdes, Algérie', ar: 'بومرداس، الجزائر', en: 'Boumerdes, Algeria' },
  'hero.cta_plan': {
    fr: 'Planifier une Formation / Mission',
    ar: 'التخطيط لتكوين / مهمة',
    en: 'Schedule Training / Mission'
  },
  'hero.cta_catalog': { fr: 'Voir mon catalogue', ar: 'عرض الكتالوج', en: 'View my catalog' },
  'hero.cta_attest': { fr: 'Voir mes attestations', ar: 'عرض الشهادات', en: 'View my certificates' },

  // ─── HERO CARD ────────────────────────────────────
  'card.title': { fr: 'Directeur & Consultant International', ar: 'مدير ومستشار دولي', en: 'Director & International Consultant' },
  'card.years': { fr: '30+ Ans d\'Impact Technologique', ar: '30+ سنة من التأثير التكنولوجي', en: '30+ Years of Technological Impact' },
  'card.univ_label': { fr: 'Université :', ar: 'الجامعة:', en: 'University:' },
  'card.univ_val': { fr: 'Alger 2 (Enseignant)', ar: 'الجزائر 2 (أستاذ)', en: 'Algiers 2 (Lecturer)' },
  'card.diplomas_label': { fr: 'Diplômes :', ar: 'الشهادات:', en: 'Degrees:' },
  'card.diplomas_val': { fr: 'European Bachelor · Ingénieur PRO (Limoges, FR)', ar: 'بكالوريوس أوروبي · مهندس مهني (ليموج، فرنسا)', en: 'European Bachelor · PRO Engineer (Limoges, FR)' },
  'card.expertise_label': { fr: 'Expertise Légale :', ar: 'الخبرة القانونية:', en: 'Legal Expertise:' },
  'card.expertise_val': { fr: 'Consultant Indépendant', ar: 'مستشار مستقل', en: 'Independent Consultant' },
  'card.permis_label': { fr: 'Permis :', ar: 'رخصة القيادة:', en: 'License:' },
  'card.permis_val': { fr: 'Catégorie B (Disponible)', ar: 'الفئة ب (متوفر)', en: 'Category B (Available)' },
  'card.write': { fr: 'Écrire', ar: 'مراسلة', en: 'Write' },
  'card.call': { fr: 'Appeler', ar: 'اتصال', en: 'Call' },

  // ─── STATISTICS BANNER ────────────────────────────
  'stat.years': { fr: 'Années d\'Expérience', ar: 'سنة خبرة', en: 'Years of Experience' },
  'stat.cadres': { fr: 'Cadres & Ingénieurs Formés', ar: 'إطار ومهندس تم تكوينهم', en: 'Executives & Engineers Trained' },
  'stat.entreprises': { fr: 'Grandes Entreprises Clientes', ar: 'مؤسسة كبرى عميلة', en: 'Major Client Companies' },
  'stat.modules': { fr: 'Modules Technologiques', ar: 'وحدة تقنية', en: 'Technology Modules' },

  // ─── ABOUT / PROFIL ───────────────────────────────
  'about.tagline': { fr: 'Mon Profil', ar: 'ملفي الشخصي', en: 'My Profile' },
  'about.heading': {
    fr: 'Consultant Informatique Senior et Enseignant Académique',
    ar: 'مستشار معلوماتية أول وأستاذ جامعي',
    en: 'Senior IT Consultant and Academic Lecturer'
  },
  'about.quote': {
    fr: '"La transmission du savoir et la sécurisation des architectures applicatives sont les deux piliers de la transformation numérique d\'une entreprise moderne. Mon engagement est d\'amener les équipes vers l\'excellence technologique."',
    ar: '"نقل المعرفة وتأمين البنى التطبيقية هما ركيزتا التحول الرقمي للمؤسسة الحديثة. التزامي هو الارتقاء بالفرق نحو التميّز التكنولوجي."',
    en: '"Knowledge transfer and securing application architectures are the two pillars of digital transformation for a modern enterprise. My commitment is to lead teams towards technological excellence."'
  },
  'about.quote_sub': { fr: 'Consultant & Conférencier Senior', ar: 'مستشار ومحاضر أول', en: 'Senior Consultant & Speaker' },
  'about.p1': {
    fr: 'Fort d\'une solide expérience pluridimensionnelle, j\'accompagne les cadres dirigeants et les ingénieurs des plus grandes organisations d\'Algérie (comme la CACI, l\'EPAL, Algérie Télécom et Halliburton) à travers des programmes de formation intensifs, de l\'audit et de l\'intégration technique.',
    ar: 'بخبرة متعددة الأبعاد، أرافق الإطارات العليا والمهندسين في أكبر المؤسسات الجزائرية (مثل CACI، EPAL، اتصالات الجزائر و Halliburton) من خلال برامج تكوين مكثّفة وعمليات تدقيق وتكامل تقني.',
    en: 'With extensive multidimensional experience, I support executives and engineers from Algeria\'s largest organizations (such as CACI, EPAL, Algérie Télécom and Halliburton) through intensive training programs, auditing and technical integration.'
  },
  'about.p2': {
    fr: 'Depuis 2025, je transmets mon savoir en tant qu\'<strong>Enseignant à l\'Université d\'Alger 2</strong>, tout en formant des cadres d\'entreprises. Ma double casquette d\'académicien et de consultant de terrain m\'offre une vision réaliste et opérationnelle des besoins de l\'industrie.',
    ar: 'منذ 2025، أنقل معرفتي كـ<strong>أستاذ بجامعة الجزائر 2</strong>، مع تكوين إطارات المؤسسات. ازدواجية دوري كأكاديمي ومستشار ميداني تمنحني رؤية واقعية وعملية لاحتياجات الصناعة.',
    en: 'Since 2025, I share my knowledge as a <strong>Lecturer at the University of Algiers 2</strong>, while training corporate executives. My dual role as academic and field consultant gives me a realistic and operational view of industry needs.'
  },
  'about.p3': {
    fr: 'Mes domaines d\'excellence se concentrent autour de la <strong>DATA ANALYST</strong>, de la <strong>cybersécurité</strong>, de l\'<strong>ingénierie logicielle (Python, Java, .NET Core)</strong> et du <strong>décisionnel (Power BI)</strong>.',
    ar: 'مجالات تميّزي تتمحور حول <strong>تحليل البيانات</strong>، <strong>الأمن السيبراني</strong>، <strong>هندسة البرمجيات (Python, Java, .NET Core)</strong> و<strong>ذكاء الأعمال (Power BI)</strong>.',
    en: 'My areas of excellence focus on <strong>Data Analysis</strong>, <strong>cybersecurity</strong>, <strong>software engineering (Python, Java, .NET Core)</strong> and <strong>business intelligence (Power BI)</strong>.'
  },
  'about.bullet1_title': { fr: 'Data Analyste', ar: 'محلل بيانات', en: 'Data Analyst' },
  'about.bullet1_sub': { fr: 'Excel · Python · SQL · Power BI · Tableau', ar: 'Excel · Python · SQL · Power BI · Tableau', en: 'Excel · Python · SQL · Power BI · Tableau' },
  'about.bullet2_title': { fr: 'Formateur Certifié Cadres', ar: 'مدرّب معتمد للإطارات', en: 'Certified Executive Trainer' },
  'about.bullet2_sub': { fr: 'Pédagogie de haut niveau adaptée aux directeurs.', ar: 'منهجية تعليمية عالية المستوى موجّهة للمديرين.', en: 'High-level pedagogy adapted for directors.' },
  'about.bullet3_title': { fr: 'Expert Full-Stack & DevOPS', ar: 'خبير Full-Stack و DevOPS', en: 'Full-Stack & DevOPS Expert' },
  'about.bullet3_sub': { fr: 'Maîtrise complète du cycle de vie logiciel.', ar: 'إتقان كامل لدورة حياة البرمجيات.', en: 'Complete mastery of the software lifecycle.' },
  'about.bullet4_title': { fr: 'EUROPEAN BACHELOR d\'Université 3IL', ar: 'بكالوريوس أوروبي من جامعة 3IL', en: 'EUROPEAN BACHELOR from University 3IL' },
  'about.bullet4_sub': { fr: 'Diplômé d\'une école d\'ingénieurs française.', ar: 'متخرج من مدرسة مهندسين فرنسية.', en: 'Graduate of a French engineering school.' },

  // ─── SKILLS SECTION ───────────────────────────────
  'skills.tagline': { fr: 'Mon Arsenal Technique', ar: 'ترسانتي التقنية', en: 'My Technical Arsenal' },
  'skills.heading': { fr: 'Expertise & Technologies Maîtrisées', ar: 'خبرات وتقنيات متقنة', en: 'Expertise & Mastered Technologies' },
  'skills.desc': {
    fr: 'Mes compétences couvrent l\'intégralité du cycle informatique d\'entreprise, allant du codage pur à la mise en œuvre de politiques de sécurité d\'envergure.',
    ar: 'كفاءاتي تغطي كامل الدورة المعلوماتية للمؤسسة، من البرمجة الصافية إلى تطبيق سياسات الأمن واسعة النطاق.',
    en: 'My skills cover the entire enterprise IT cycle, from pure coding to implementing large-scale security policies.'
  },
  'skills.card1_title': { fr: 'Sécurité & Gouvernance', ar: 'الأمن والحوكمة', en: 'Security & Governance' },
  'skills.card1_sub': { fr: 'Protection & Réglementation', ar: 'الحماية والتنظيم', en: 'Protection & Regulation' },
  'skills.card2_title': { fr: 'Développement Web', ar: 'تطوير الويب', en: 'Web Development' },
  'skills.card2_sub': { fr: 'Langages de Programmation', ar: 'لغات البرمجة', en: 'Programming Languages' },
  'skills.card3_title': { fr: 'Frameworks & Mobile', ar: 'أطر عمل وتطبيقات الموبايل', en: 'Frameworks & Mobile' },
  'skills.card3_sub': { fr: 'Frameworks Client & Mobile', ar: 'أطر عمل العميل والموبايل', en: 'Client & Mobile Frameworks' },
  'skills.card4_title': { fr: 'Data & Intelligence', ar: 'البيانات والذكاء', en: 'Data & Intelligence' },
  'skills.card4_sub': { fr: 'BI, SGBD & IA', ar: 'BI, SGBD & IA', en: 'BI, DBMS & AI' },
  'skills.card5_title': { fr: 'CMS, LMS & Bureautique', ar: 'CMS، LMS والمكتبيات', en: 'CMS, LMS & Office' },
  'skills.card5_sub': { fr: 'Plateformes web & Office', ar: 'منصات الويب والمكتب', en: 'Web & Office Platforms' },
  'skills.card6_title': { fr: 'Méthodes & DevOps', ar: 'المناهج و DevOps', en: 'Methods & DevOps' },
  'skills.card6_sub': { fr: 'Architecture & DevOps', ar: 'الهندسة المعمارية و DevOps', en: 'Architecture & DevOps' },
  'skills.level_expert': { fr: 'Expert', ar: 'خبير', en: 'Expert' },
  'skills.level_advanced': { fr: 'Avancé', ar: 'متقدّم', en: 'Advanced' },
  'skills.level_intermediate': { fr: 'Intermédiaire', ar: 'متوسط', en: 'Intermediate' },
  'skills.langs_title': { fr: 'Langues de Travail & Communication', ar: 'لغات العمل والتواصل', en: 'Working & Communication Languages' },
  'skills.lang_ar': { fr: 'Arabe (Maternelle)', ar: 'العربية (اللغة الأم)', en: 'Arabic (Native)' },
  'skills.lang_fr': { fr: 'Français (Très bien - Lu, Parlé, Écrit)', ar: 'الفرنسية (جيد جداً - قراءة، محادثة، كتابة)', en: 'French (Very Good - Read, Spoken, Written)' },
  'skills.lang_en': { fr: 'Anglais (Bien - Lu, Parlé, Écrit)', ar: 'الإنجليزية (جيد - قراءة، محادثة، كتابة)', en: 'English (Good - Read, Spoken, Written)' },
  'skills.lang_ro': { fr: 'Roumain (Bien - Lu, Parlé, Écrit)', ar: 'الرومانية (جيد - قراءة، محادثة، كتابة)', en: 'Romanian (Good - Read, Spoken, Written)' },

  // ─── EXPERIENCES SECTION ──────────────────────────
  'exp.tagline': { fr: 'Catalogue d\'Interventions', ar: 'كتالوج التدخلات', en: 'Interventions Catalog' },
  'exp.heading': { fr: 'Formations Dispensées & Expériences', ar: 'التكوينات المقدّمة والخبرات', en: 'Training Delivered & Experiences' },
  'exp.desc': {
    fr: 'J\'interviens de manière récurrente auprès d\'organismes de formation d\'élite et de grands comptes. Filtrez par catégorie ou recherchez une thématique spécifique.',
    ar: 'أتدخل بشكل متكرر لدى مؤسسات تكوين النخبة والحسابات الكبرى. فلتر حسب الفئة أو ابحث عن موضوع محدد.',
    en: 'I regularly work with elite training organizations and major accounts. Filter by category or search for a specific topic.'
  },
  'exp.search_placeholder': {
    fr: 'Rechercher (ex: Excel, Cyber, Power BI, CACI...)',
    ar: 'بحث (مثال: Excel, Cyber, Power BI, CACI...)',
    en: 'Search (e.g.: Excel, Cyber, Power BI, CACI...)'
  },
  'exp.filter_all': { fr: 'Tout voir', ar: 'عرض الكل', en: 'View All' },
  'exp.filter_security': { fr: 'Sécurité & RGPD', ar: 'الأمن و RGPD', en: 'Security & GDPR' },
  'exp.filter_dev': { fr: 'Dév Web & Mobile', ar: 'تطوير الويب والموبايل', en: 'Web & Mobile Dev' },
  'exp.filter_data': { fr: 'Data & BI', ar: 'البيانات و BI', en: 'Data & BI' },
  'exp.filter_office': { fr: 'Bureautique Pro', ar: 'مكتبيات احترافية', en: 'Pro Office' },
  'exp.filter_management': { fr: 'Processus / DevOps', ar: 'العمليات / DevOps', en: 'Processes / DevOps' },
  'exp.counter_prefix': { fr: 'Affichage de', ar: 'عرض', en: 'Showing' },
  'exp.counter_suffix': { fr: 'sessions sur', ar: 'جلسة من', en: 'sessions out of' },
  'exp.counter_end': { fr: 'enregistrées', ar: 'مسجّلة', en: 'recorded' },
  'exp.reset': { fr: 'Réinitialiser les filtres', ar: 'إعادة تعيين الفلاتر', en: 'Reset filters' },
  'exp.th_period': { fr: 'Période', ar: 'الفترة', en: 'Period' },
  'exp.th_institution': { fr: 'Établissement', ar: 'المؤسسة', en: 'Institution' },
  'exp.th_module': { fr: 'Module Dispensé', ar: 'الوحدة المقدّمة', en: 'Module Delivered' },
  'exp.th_client': { fr: 'Client Finaux / Cible', ar: 'العملاء النهائيون / الفئة المستهدفة', en: 'End Clients / Target' },
  'exp.empty': { fr: 'Aucun résultat ne correspond à vos critères de recherche.', ar: 'لا توجد نتائج تطابق معايير البحث.', en: 'No results match your search criteria.' },
  'exp.empty_mobile': { fr: 'Aucun résultat trouvé.', ar: 'لم يتم العثور على نتائج.', en: 'No results found.' },
  'exp.mobile_label': { fr: 'Établissement:', ar: 'المؤسسة:', en: 'Institution:' },

  // ─── EDUCATION / PARCOURS ─────────────────────────
  'edu.tagline': { fr: 'Chronologie de Carrière', ar: 'التسلسل الزمني للمسيرة', en: 'Career Timeline' },
  'edu.heading': { fr: 'Formations & Parcours Académique', ar: 'التكوينات والمسار الأكاديمي', en: 'Education & Academic Path' },
  'edu.desc': {
    fr: 'Découvrez mes certifications, diplômes internationaux et rôles de direction sur les trente dernières années.',
    ar: 'اكتشف شهاداتي، دبلوماتي الدولية وأدواري القيادية خلال الثلاثين سنة الماضية.',
    en: 'Discover my certifications, international degrees and leadership roles over the last thirty years.'
  },
  'edu.t1_title': { fr: 'Consultant Informatique Senior', ar: 'مستشار معلوماتية أول', en: 'Senior IT Consultant' },
  'edu.t1_sub': { fr: 'ISGP Formation', ar: 'ISGP Formation', en: 'ISGP Formation' },
  'edu.t1_desc': { fr: 'Animation de modules de haut niveau et de séminaires d\'architecture logicielle.', ar: 'تنشيط وحدات عالية المستوى وندوات هندسة البرمجيات.', en: 'Delivering high-level modules and software architecture seminars.' },
  'edu.t2_title': { fr: 'Enseignant Universitaire', ar: 'أستاذ جامعي', en: 'University Lecturer' },
  'edu.t2_sub': { fr: 'Université Alger 2 • Alger, Algérie', ar: 'جامعة الجزائر 2 • الجزائر', en: 'University of Algiers 2 • Algiers, Algeria' },
  'edu.t2_desc': { fr: 'Enseignement académique théorique et pratique des langages informatiques et bases de données.', ar: 'تعليم أكاديمي نظري وتطبيقي للغات البرمجة وقواعد البيانات.', en: 'Theoretical and practical academic teaching of programming languages and databases.' },
  'edu.t3_title': { fr: 'Consultant Informatique CACI', ar: 'مستشار معلوماتية CACI', en: 'CACI IT Consultant' },
  'edu.t3_sub': { fr: 'CACI Formation (Chambre Algérienne de Commerce)', ar: 'CACI Formation (الغرفة الجزائرية للتجارة)', en: 'CACI Training (Algerian Chamber of Commerce)' },
  'edu.t3_desc': { fr: 'Formateur de cadres d\'entreprises sur la législation Loi 18-07 relative à la protection des données personnelles.', ar: 'مدرب إطارات المؤسسات حول تشريع قانون 18-07 المتعلق بحماية البيانات الشخصية.', en: 'Corporate executive trainer on Law 18-07 regarding personal data protection.' },
  'edu.t4_title': { fr: 'Directeur d\'Établissement', ar: 'مدير مؤسسة', en: 'Institution Director' },
  'edu.t4_sub': { fr: 'École de Formation Professionnelle Informica • Boumerdes', ar: 'مدرسة التكوين المهني Informica • بومرداس', en: 'Informica Professional Training School • Boumerdes' },
  'edu.t4_desc': { fr: 'Gestion globale, conception de syllabus pédagogiques agréés et encadrement d\'élèves et formateurs.', ar: 'إدارة شاملة، تصميم مناهج تعليمية معتمدة وتأطير الطلاب والمدربين.', en: 'Overall management, design of approved educational syllabi and supervision of students and trainers.' },
  'edu.t5_title': { fr: 'Master Professionnel Informatique & CSI', ar: 'ماستر مهني معلوماتية و CSI', en: 'Professional Master in IT & CSI' },
  'edu.t5_sub': { fr: 'Université 3IL – Limoges, France', ar: 'جامعة 3IL – ليموج، فرنسا', en: 'University 3IL – Limoges, France' },
  'edu.t5_desc': { fr: 'Spécialisation en Conception de Systèmes d\'Information et architecture distribuée.', ar: 'تخصص في تصميم أنظمة المعلومات والهندسة الموزّعة.', en: 'Specialization in Information Systems Design and distributed architecture.' },
  'edu.t6_title': { fr: 'Ingénieur Professionnel & European Bachelor', ar: 'مهندس مهني وبكالوريوس أوروبي', en: 'Professional Engineer & European Bachelor' },
  'edu.t6_sub': { fr: 'Université 3IL – Limoges, France', ar: 'جامعة 3IL – ليموج، فرنسا', en: 'University 3IL – Limoges, France' },
  'edu.t6_desc': { fr: 'Bases approfondies de génie logiciel, réseaux informatiques et administration système.', ar: 'أسس معمّقة في هندسة البرمجيات، الشبكات المعلوماتية وإدارة الأنظمة.', en: 'Deep foundations in software engineering, computer networks and system administration.' },
  'edu.t7_title': { fr: 'Technicien Supérieur Informatique', ar: 'تقني سامي في المعلوماتية', en: 'Senior IT Technician' },
  'edu.t7_sub': { fr: 'UNSFP El-Mohammadia • Algérie', ar: 'UNSFP المحمدية • الجزائر', en: 'UNSFP El-Mohammadia • Algeria' },
  'edu.t7_desc': { fr: 'Option : Bases de Données (Conception, requêtes complexes et modélisation).', ar: 'تخصص: قواعد البيانات (التصميم، الاستعلامات المعقدة والنمذجة).', en: 'Specialization: Databases (Design, complex queries and modeling).' },

  // ─── CLIENTS SECTION ──────────────────────────────
  'clients.tagline': { fr: 'Références Clés', ar: 'مراجع رئيسية', en: 'Key References' },
  'clients.heading': { fr: 'Ils m\'ont fait confiance', ar: 'وثقوا بي', en: 'They Trusted Me' },
  'clients.desc': {
    fr: 'Mes cours et services de consulting ont été délivrés à des multinationales d\'envergure, des ministères et de grands services portuaires et de télécommunications.',
    ar: 'تم تقديم دوراتي وخدماتي الاستشارية لشركات متعددة الجنسيات، وزارات وخدمات الموانئ والاتصالات الكبرى.',
    en: 'My courses and consulting services have been delivered to major multinationals, ministries and large port and telecommunications services.'
  },

  // ─── ATTESTATIONS / QUALITY ───────────────────────
  'attest.banner_title': { fr: 'Attestations de bonne exécution validées', ar: 'شهادات حسن التنفيذ المعتمدة', en: 'Validated Good Execution Certificates' },
  'attest.banner_desc': { fr: 'Certificats disponibles auprès des instituts agréés (Royal School, Kaizen, CNAT, AGA...)', ar: 'الشهادات متوفرة لدى المعاهد المعتمدة (Royal School, Kaizen, CNAT, AGA...)', en: 'Certificates available from accredited institutes (Royal School, Kaizen, CNAT, AGA...)' },
  'attest.banner_btn': { fr: 'Demander des références', ar: 'طلب المراجع', en: 'Request References' },
  'attest.modal_title': { fr: 'Attestations Officielles', ar: 'الشهادات الرسمية', en: 'Official Certificates' },
  'attest.modal_sub': { fr: 'Documents & Certificats de bonne exécution', ar: 'وثائق وشهادات حسن التنفيذ', en: 'Documents & Good Execution Certificates' },
  'attest.modal_footer': { fr: 'Documents officiels — Cliquer sur un document pour le télécharger', ar: 'وثائق رسمية — انقر على وثيقة لتحميلها', en: 'Official documents — Click a document to download' },
  'attest.doc_badge': { fr: 'Document officiel PDF', ar: 'وثيقة رسمية PDF', en: 'Official PDF Document' },

  // ─── CONTACT SECTION ──────────────────────────────
  'contact.tagline': { fr: 'Prendre Contact', ar: 'تواصل معي', en: 'Get in Touch' },
  'contact.heading': { fr: 'Lançons votre projet ou formation', ar: 'لنبدأ مشروعك أو تكوينك', en: 'Let\'s Launch Your Project or Training' },
  'contact.desc': {
    fr: 'Besoin d\'un audit de sécurité ? D\'une mise en conformité Loi 18-07 sur la protection des données personnelles ? D\'un plan de formation sur-mesure pour vos ingénieurs ? N\'hésitez pas à me joindre directement par téléphone ou par message.',
    ar: 'هل تحتاج إلى تدقيق أمني؟ التزام بقانون 18-07 لحماية البيانات الشخصية؟ خطة تكوين مخصصة لمهندسيك؟ لا تتردد في التواصل معي مباشرة عبر الهاتف أو الرسالة.',
    en: 'Need a security audit? Law 18-07 compliance for personal data protection? A custom training plan for your engineers? Don\'t hesitate to contact me directly by phone or message.'
  },
  'contact.phone_label': { fr: 'Téléphone mobile', ar: 'الهاتف النقال', en: 'Mobile Phone' },
  'contact.email_label': { fr: 'Courrier Électronique', ar: 'البريد الإلكتروني', en: 'Email' },
  'contact.location_label': { fr: 'Localisation', ar: 'الموقع', en: 'Location' },
  'contact.location_val': { fr: 'Boudouaou, Boumerdes, Algérie', ar: 'بودواو، بومرداس، الجزائر', en: 'Boudouaou, Boumerdes, Algeria' },
  'contact.location_sub': { fr: 'Mobilité sur toute la wilaya d\'Alger et de Boumerdes', ar: 'التنقل عبر كامل ولايتي الجزائر وبومرداس', en: 'Mobility across Algiers and Boumerdes provinces' },
  'contact.immediate_title': { fr: 'Besoin d\'un entretien immédiat ?', ar: 'تحتاج مقابلة فورية؟', en: 'Need an immediate meeting?' },
  'contact.immediate_desc': { fr: 'Je suis joignable du samedi au jeudi de 8h00 à 18h00 pour échanger sur vos besoins techniques.', ar: 'أنا متاح من السبت إلى الخميس من 8:00 إلى 18:00 لمناقشة احتياجاتكم التقنية.', en: 'I am reachable Saturday to Thursday from 8:00 AM to 6:00 PM to discuss your technical needs.' },
  'contact.immediate_btn': { fr: 'Appeler directement', ar: 'اتصل مباشرة', en: 'Call Directly' },
  'contact.form_name': { fr: 'Nom Complet', ar: 'الاسم الكامل', en: 'Full Name' },
  'contact.form_name_ph': { fr: 'Ex: Slimane Amrani', ar: 'مثال: سليمان عمراني', en: 'E.g.: Slimane Amrani' },
  'contact.form_company': { fr: 'Entreprise / Organisme', ar: 'المؤسسة / الهيئة', en: 'Company / Organization' },
  'contact.form_company_ph': { fr: 'Ex: OPGI, Sonatrach, CACI...', ar: 'مثال: OPGI, Sonatrach, CACI...', en: 'E.g.: OPGI, Sonatrach, CACI...' },
  'contact.form_email': { fr: 'Adresse Électronique', ar: 'البريد الإلكتروني', en: 'Email Address' },
  'contact.form_email_ph': { fr: 'Ex: contact@entreprise.dz', ar: 'مثال: contact@entreprise.dz', en: 'E.g.: contact@company.dz' },
  'contact.form_phone': { fr: 'Numéro de Téléphone', ar: 'رقم الهاتف', en: 'Phone Number' },
  'contact.form_phone_ph': { fr: 'Ex: 05 50 12 34 56', ar: 'مثال: 05 50 12 34 56', en: 'E.g.: 05 50 12 34 56' },
  'contact.form_subject': { fr: 'Objet de votre demande', ar: 'موضوع طلبك', en: 'Subject of your request' },
  'contact.form_opt1': { fr: 'Demande de formation d\'équipe', ar: 'طلب تكوين الفريق', en: 'Team training request' },
  'contact.form_opt2': { fr: 'Mise en conformité Loi 18-07', ar: 'الامتثال لقانون 18-07', en: 'Law 18-07 compliance' },
  'contact.form_opt3': { fr: 'Mission de conseil ou d\'Audit IT', ar: 'مهمة استشارية أو تدقيق تكنولوجيا المعلومات', en: 'IT consulting or audit mission' },
  'contact.form_opt4': { fr: 'Collaboration Universitaire / Académique', ar: 'تعاون جامعي / أكاديمي', en: 'University / Academic collaboration' },
  'contact.form_opt5': { fr: 'Autre demande professionnelle', ar: 'طلب مهني آخر', en: 'Other professional request' },
  'contact.form_details': { fr: 'Détails de votre besoin', ar: 'تفاصيل احتياجك', en: 'Details of your need' },
  'contact.form_details_ph': {
    fr: 'Veuillez décrire brièvement les thématiques à couvrir, le public cible (ingénieurs, cadres), le nombre de personnes et la période souhaitée...',
    ar: 'يرجى وصف المواضيع المراد تغطيتها بإيجاز، الفئة المستهدفة (مهندسين، إطارات)، عدد الأشخاص والفترة المرغوبة...',
    en: 'Please briefly describe the topics to cover, target audience (engineers, executives), number of people and desired period...'
  },
  'contact.form_submit': { fr: 'Envoyer le message', ar: 'إرسال الرسالة', en: 'Send Message' },

  // ─── FOOTER ───────────────────────────────────────
  'footer.title': { fr: 'Formateur IT & Expert Consultant Informatique Agréé', ar: 'مدرب تكنولوجيا المعلومات وخبير مستشار معلوماتية معتمد', en: 'IT Trainer & Accredited Expert IT Consultant' },
  'footer.profil': { fr: 'Profil', ar: 'الملف الشخصي', en: 'Profile' },
  'footer.competences': { fr: 'Compétences', ar: 'المهارات', en: 'Skills' },
  'footer.formations': { fr: 'Formations', ar: 'التكوينات', en: 'Training' },
  'footer.parcours': { fr: 'Parcours', ar: 'المسار', en: 'Career' },
  'footer.contact': { fr: 'Contact', ar: 'اتصل', en: 'Contact' },
  'footer.download': { fr: 'Télécharger CV', ar: 'تحميل السيرة', en: 'Download CV' },
  'footer.copyright': { fr: '© 2026 Bouafia Rehabi. Tous droits réservés.', ar: '© 2026 بوعافية رحابي. جميع الحقوق محفوظة.', en: '© 2026 Bouafia Rehabi. All rights reserved.' },
  'footer.powered': { fr: 'Propulsé par', ar: 'بدعم من', en: 'Powered by' },

  // ─── WHATSAPP ─────────────────────────────────────
  'whatsapp.label': { fr: '💬 Discuter sur WhatsApp', ar: '💬 تحدث عبر واتساب', en: '💬 Chat on WhatsApp' },
};

// ─── Translation Engine ─────────────────────────────
function applyTranslations(lang) {
  // Set HTML dir and lang
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = TRANSLATIONS[key];
    if (!t || !t[lang]) return;
    
    // Check if has HTML (for <strong> tags, etc.)
    if (t[lang].includes('<')) {
      el.innerHTML = t[lang];
    } else {
      el.textContent = t[lang];
    }
  });
  
  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const t = TRANSLATIONS[key];
    if (t && t[lang]) el.placeholder = t[lang];
  });

  // Translate aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const t = TRANSLATIONS[key];
    if (t && t[lang]) el.setAttribute('aria-label', t[lang]);
  });
  
  // Save preference
  localStorage.setItem('siteLang', lang);
}
