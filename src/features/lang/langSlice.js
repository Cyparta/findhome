import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    lang:
      typeof window !== "undefined" && localStorage.getItem("lang")
        ? localStorage.getItem("lang")
        : "en",
    pages: {
      home: {
        en: "home",
        ar: "الصفحة الرئيسية",
      },
      home2: {
        en: "home 2",
        ar: "الصفحة الرئيسية 2",
      },
      home3: {
        en: "home 3",
        ar: "الصفحة الرئيسية 3",
      },
      home4: {
        en: "home 4",
        ar: "الصفحة الرئيسية 4",
      },
      home5: {
        en: "home 5",
        ar: "الصفحة الرئيسية 5",
      },
      home6: {
        en: "home 6",
        ar: "الصفحة الرئيسية 6",
      },
      home7: {
        en: "home 7",
        ar: "الصفحة الرئيسية 7",
      },
      home8: {
        en: "home 8",
        ar: "الصفحة الرئيسية 8",
      },
      home9: {
        en: "home 9",
        ar: "الصفحة الرئيسية 9",
      },
      home10: {
        en: "home 10",
        ar: "الصفحة الرئيسية 10",
      },
      listing: {
        en: "listing",
        ar: "قائمة",
      },
      listingGrid: {
        en: "listing grid",
        ar: "قائمة",
      },
      grid1: {
        en: "Contracting",
        ar: "مقاولات البناء",
      },
      grid2: {
        en: "Real estate",
        ar: "عقارات للإيجار",
      },
      grid3: {
        en: "decorations",
        ar: "ديكورات المنزل",
      },
      // grid4: {
      //   en: "grid 4",
      //   ar: "4 شبكة",
      // },
      // grid5: {
      //   en: "grid 5",
      //   ar: "5 شبكة",
      // },
      // grid6: {
      //   en: "grid 6",
      //   ar: "6 شبكة",
      // },
      listingList: {
        en: "listing list",
        ar: "قائمة القائمة",
      },
      parallaxStyle: {
        en: "parallax style",
        ar: "أسلوب المنظر",
      },
      sliderStyle: {
        en: "slider style",
        ar: "نمط المنزلق",
      },
      mapHeader: {
        en: "map header",
        ar: "رأس الخريطة",
      },
      listingStyle: {
        en: "listing style",
        ar: "نمط القائمة",
      },
      listingHalf: {
        en: "listing half",
        ar: "قائمة النصف",
      },
      map1: {
        en: "map 1",
        ar: "الخريطة 1",
      },
      map2: {
        en: "map 2",
        ar: "الخريطة 2",
      },
      map3: {
        en: "map 3",
        ar: "الخريطة 3",
      },
      map4: {
        en: "map 4",
        ar: "الخريطة 4",
      },

      agentView: {
        en: "agent view",
        ar: "عرض الوكيل",
      },
      agent1: {
        en: "agent 1",
        ar: "وكيل 1",
      },
      agent2: {
        en: "agent 2",
        ar: "وكيل 2",
      },
      agent3: {
        en: "agent details",
        ar: "تفاصيل الوكيل",
      },
      agenciesView: {
        en: "Zgencies View",
        ar: "وكالات مشاهدة",
      },
      agencies1: {
        en: "agencies 1",
        ar: "وكالات 1",
      },
      agencies2: {
        en: "agencies 2",
        ar: "وكالات 2",
      },
      agencies3: {
        en: "agencies 3",
        ar: "وكالات 3",
      },

      list1: {
        en: "list 1",
        ar: "1 قائمة",
      },
      listing: {
        en: "listing",
        ar: "قائمة",
      },
      /* property */
      property: {
        en: "property",
        ar: "خاصية",
      },
      userAdmin: {
        en: "user Admin",
        ar: "مسؤول المستخدم",
      },
      dashboard: {
        en: "Dashboard",
        ar: "لوحة",
      },
      properties: {
        en: "My Properties",
        ar: "ممتلكاتي",
      },
      message: {
        en: "My Message",
        ar: "رسالتي",
      },
      review: {
        en: "My Review",
        ar: "تقييمي",
      },
      fav: {
        en: "My Favourites",
        ar: "المفضلة",
      },
      profile: {
        en: "My Profile",
        ar: "ملفي",
      },
      package: {
        en: "My Package",
        ar: "ملفي",
      },
      saved: {
        en: "My Saved Search",
        ar: "بحثي المحفوظ",
      },
      addProp: {
        en: "Add Property",
        ar: "أضف خاصية",
      },
      /* LIST SINGLE */
      listingSingle: {
        en: "listing Single",
        ar: "قائمة",
      },
      single1: {
        en: "Single 1",
        ar: "واحد 1",
      },
      single2: {
        en: "Single 2",
        ar: "واحد 2",
      },
      single3: {
        en: "Single 3",
        ar: "واحد 3",
      },
      single4: {
        en: "Single 4",
        ar: "واحد 4",
      },
      single5: {
        en: "Single 5",
        ar: "واحد 5",
      },

      /* PAGES */
      pagesHead: {
        en: "pages",
        ar: "الصفحات",
      },
      aboutUs: {
        en: "About Us",
        ar: "معلومات عنا",
      },
      gallery: {
        en: "marketing",
        ar: "التسويق العقـــارى",
      },
      faq: {
        en: "faq",
        ar: "التعليمات",
      },
      logIn: {
        en: "logIn",
        ar: "تسجيل الدخول",
      },
      consultation: {
        en: "consultation",
        ar: "استشارة",
      },
      compare: {
        en: "compare",
        ar: "يقارن",
      },
      membership: {
        en: "Membership",
        ar: "عضوية",
      },
      register: {
        en: "Register",
        ar: "يسجل",
      },
      service: {
        en: "Service",
        ar: "خدمة",
      },
      error: {
        en: "404 Page",
        ar: "404 صفحة",
      },
      terms: {
        en: "Terms & Conditions",
        ar: "البنود و الظروف",
      },
      aboutUs: {
        en: "About Us",
        ar: "معلومات عنا",
      },
      /* BLOG */
      blog: {
        en: "blog",
        ar: "مقالات",
      },
      blog1: {
        en: "blog",
        ar: "مقالات",
      },
      blog2: {
        en: "blog list 2",
        ar: "2 مقالات",
      },
      blog3: {
        en: "Blogs",
        ar: "مقالات",
      },
      blog4: {
        en: "blog details",
        ar: "تفاصيل المقالات",
      },
      /* CONTACT */
      contact: {
        en: "contact",
        ar: "اتصال",
      },
      login: {
        en: "login",
        ar: "تسجيل الدخول",
      },
      register: {
        en: "register",
        ar: "تسجيل",
      },
      /* create Listing */
      createListing: {
        en: "create Listing",
        ar: "إنشاء القائمة",
      },
    },
    featureProperty: {
      heading: {
        en: "Why Dar Farha is the perfect destination for the best Rental options in Egypt?",
        ar: "لماذا دار فرحة هى الوجهة الأمثل لأفضل خيارات الإيجار فى مصر ؟",
      },
      text: {
        en: "Dar Farha is an Egyptian company that offers its services in three main sectors:Contracting sector, Finishing and decoration sector and Real estate investment sector",
        ar: "دار فرحة شركة مصرية تقدم خدماتها في ثلاثة قطاعات رئيسية: قطاع المقاولات وقطاع التشطيبات والديكور وقطاع الاستثمار العقاري",
      },
    },
    heroPage: {
      heading: {
        en: "",
        ar: "",
      },
      text: {
        en: "",
        ar: "",
      },
    },
    globalHeroFilter: {
      buy: {
        en: "buy",
        ar: "اشتري",
      },
      rent: {
        en: "rent",
        ar: "تاجير",
      },
    },
    advancedSearch: {
      input: {
        en: "Enter keyword",
        ar: "أدخل الكلمة المفتاحية",
      },
      proprtyType: {
        en: "proprty Type",
        ar: "نوع الملكية",
      },
      prop: {
        en: "Apartment",
        ar: "شقة",
      },
      prop1: {
        en: "Bungalow",
        ar: "بيت من طابق واحد",
      },
      prop2: {
        en: "Condo",
        ar: "شقة",
      },
      prop3: {
        en: "House",
        ar: "منزل",
      },
      prop4: {
        en: "Land",
        ar: "الأرض",
      },
      prop5: {
        en: "Single Family",
        ar: "عائلة واحدة",
      },
      location: {
        en: "location",
        ar: "موقعك",
      },
      price: {
        en: "price",
        ar: "السعر",
      },
      advanced: {
        en: "advanded",
        ar: "متقدم",
      },
      button: {
        en: "search",
        ar: "بحث",
      },
    },
    findProperty: {
      heading: {
        en: "Some of Dar Farha's works",
        ar: "بعض من أعمــال دار فرحـــة",
      },
      text: {
        en: "Some of the achievements that Dar Farha has achieved in the recent period from Real Estate to Decor Investments",
        ar: "بعض من الأنجازات اللي حققتها دار فرحه في الفترة الأخيرة من عقارات لديكور للاستثمارات.",
      },
    },
    chooseUs: {
      heading: {
        en: "Why Choose Us",
        ar: "لماذا أخترتنا",
      },
      text: {
        en: "We provide full service at every step.",
        ar: "نحن نقدم خدمة كاملة في كل خطوة.",
      },
    },
    articleTips: {
      heading: {
        en: "Blogs",
        ar: "مدونات",
      },
      text: {
        en: "We provide complete service at every step.",
        ar: "نحن نقدم خدمة كاملة في كل خطوة.",
      },
    },
    ourPartners: {
      heading: {
        en: "Our Partners",
        ar: "شركاؤنا",
      },
      text: {
        en: "We only work with the best companies around the globe",
        ar: "نحن نعمل فقط مع أفضل الشركات حول العالم",
      },
    },
    callAction: {
      heading: {
        en: "Become a Real Estate Agent",
        ar: "كن وكيل عقارات",
      },
      text: {
        en: "We only work with the best companies around the globe",
        ar: "نحن نعمل فقط مع أفضل الشركات حول العالم",
      },
      button: {
        en: "Register Now",
        ar: "سجل الان",
      },
    },
    footer: {
      about: {
        heading: {
          en: "About Site",
          ar: "حول الموقع",
        },
        text: {
          en: "We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.",
          ar: "نحن نعيد تصور كيفية الشراء والبيع والإيجار. أصبح من السهل الآن الوصول إلى مكان تحبه. لذلك دعونا نفعل هذا معًا.",
        },
      },
      quickLinks: {
        heading: {
          en: "Quick Links",
          ar: "روابط سريعة",
        },
        li1: {
          en: "Home",
          ar: " صفحه الرئيسيه",
        },
        li2: {
          en: "Building Contracting",
          ar: "مقاولات البناء",
        },
        li3: {
          en: "Real estate for rent",
          ar: "عقارات للإيجار",
        },
        li4: {
          en: "Home decorations",
          ar: "ديكورات المنزل",
        },
        li5: {
          en: "Real estate marketing",
          ar: "تسويق عقاري",
        },
        li6: {
          en: "Blog",
          ar: "مدونات",
        },
        li7: {
          en: "contact",
          ar: "تواصل معنا",
        },
      },
      contactUS: {
        heading: {
          en: "contact us",
          ar: "اتصل  بنا",
        },
        li1: {
          en: "info@dar-farha.com",
          ar: "info@dar-farha.com",
        },
        li2: {
          en: "6 october city",
          ar: "مدينة 6 اكتوبر",
        },

        li4: {
          en: "01050403363",
          ar: "01050403363",
        },
        li5: {
          en: "01050403364",
          ar: "01050403364",
        },
      },
      followUs: {
        heading: {
          en: "follow us",
          ar: "تابعنا",
        },
        subscribe: {
          en: "subscribe",
          ar: "الإشتراك",
        },
        email: {
          en: "your email",
          ar: "ايميلك",
        },
      },
    },

    /* home2 */
    home2: {
      chooseUs: {
        heading: {
          en: "why choose us",
          ar: "لماذا تختارنا",
        },
        text: {
          en: "We provide full service at every step.",
          ar: "نحن نقدم خدمة كاملة في كل خطوة.",
        },
      },
      cities: {
        heading: {
          en: "Find Properties in These Cities",
          ar: "ابحث عن عقارات في هذه المدن",
        },
        text: {
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ar: "نحن نقدم خدمة كاملة في كل خطوة.",
        },
        button: {
          en: "view all",
          ar: "مشاهدة الكل",
        },
      },
      tips: {
        heading: {
          en: "Articles & Tips",
          ar: "مقالات ونصائح",
        },
        text: {
          en: "We provide full service at every step.",
          ar: "نحن نقدم خدمة كاملة في كل خطوة.",
        },
      },
      property: {
        heading: {
          en: "Best Property Value",
          ar: "أفضل قيمة للعقار",
        },
        text: {
          en: "We provide full service at every step.",
          ar: "نحن نقدم خدمة كاملة في كل خطوة.",
        },
        button: {
          en: "View All",
          ar: "مشاهدة المزيد",
        },
      },
      ourPartner: {
        heading: {
          en: "Our Partners",
          ar: "شركاؤنا",
        },
        text: {
          en: "We only work with the best companies around the globe",
          ar: "نحن نعمل فقط مع أفضل الشركات حول العالم",
        },
      },
    },
    home3: {
      hero: {
        heading: {
          en: "Your Property, Our Priority.",
          ar: "خصائص مميزة",
        },
        text: {
          en: "Handpicked properties by our team.",
          ar: "ملكيتك هي أولويتنا.",
        },
      },
      featured: {
        heading: {
          en: "Featured Properties",
          ar: "خصائص مميزة",
        },
        text: {
          en: "Handpicked properties by our team.",
          ar: "عقارات منتقاة بعناية من قبل فريقنا.",
        },
      },
      find: {
        heading: {
          en: "Find Smarter, From Anywhere",
          ar: "ابحث عن أذكى من أي مكان",
        },
        text: {
          en: "Handpicked properties by our team.",
          ar: "عزِّز بحثك من خلال منصتنا العقارية Resideo ، للحصول على قوائم في الوقت المناسب وتجربة سلسة.",
        },
        button: {
          en: "Find Now",
          ar: "أجد الآن",
        },
      },
      agents: {
        heading: {
          en: "Our Agents",
          ar: "عملائنا",
        },
        text: {
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          ar: "العميل مهم جدا ، العميل سيتبعه",
        },
        button: {
          en: "view All",
          ar: "مشاهدة المزيد",
        },
      },
    },

    globalHome: {
      latest: {
        heading: {
          en: "Latest For Sale",
          ar: "أحدث للبيع",
        },
        text: {
          en: "Handpicked properties by our team.",
          ar: "عقارات منتقاة بعناية من قبل فريقنا.",
        },
      },
      featured: {
        heading: {
          en: "Featured Properties",
          ar: "خصائص مميزة",
        },
        text: {
          en: "Handpicked properties by our team.",
          ar: "عقارات منتقاة بعناية من قبل فريقنا.",
        },
        button: {
          en: "view all",
          ar: "مشاهدة الكل",
        },
      },
      find: {
        heading: {
          en: "Find Smarter, From Anywhere",
          ar: "ابحث عن أذكى من أي مكان",
        },
        text: {
          en: "Handpicked properties by our team.",
          ar: "عزِّز بحثك من خلال منصتنا العقارية Resideo ، للحصول على قوائم في الوقت المناسب وتجربة سلسة.",
        },
        button: {
          en: "Find Now",
          ar: "أجد الآن",
        },
      },
      chooseUs: {
        heading: {
          en: "why choose us",
          ar: "لماذا تختارنا",
        },
        text: {
          en: "We provide full service at every step.",
          ar: "نحن نقدم خدمة كاملة في كل خطوة.",
        },
      },
      cities: {
        heading: {
          en: "Find Properties in These Cities",
          ar: "ابحث عن عقارات في هذه المدن",
        },
        text: {
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ar: "نحن نقدم خدمة كاملة في كل خطوة.",
        },
        button: {
          en: "view all",
          ar: "مشاهدة الكل",
        },
      },
      tips: {
        heading: {
          en: "Articles & Tips",
          ar: "مقالات ونصائح",
        },
        text: {
          en: "We provide full service at every step.",
          ar: "نحن نقدم خدمة كاملة في كل خطوة.",
        },
      },
      property: {
        heading: {
          en: "Best Property Value",
          ar: "أفضل قيمة للعقار",
        },
        text: {
          en: "We provide full service at every step.",
          ar: "نحن نقدم خدمة كاملة في كل خطوة.",
        },
        button: {
          en: "View All",
          ar: "مشاهدة المزيد",
        },
      },
      ourPartner: {
        heading: {
          en: "Our Partners",
          ar: "شركاؤنا",
        },
        text: {
          en: "We only work with the best companies around the globe",
          ar: "نحن نعمل فقط مع أفضل الشركات حول العالم",
        },
      },
      ourTeam: {
        heading: {
          en: "Our Team",
          ar: "فريقنا",
        },
        text: {
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ar: "العميل مهم جدا ، العميل سيتبعه.",
        },
      },
      testi: {
        heading: {
          en: "Testimonials",
          ar: "شهادة",
        },
        text: {
          en: "Here could be a nice sub title",
          ar: "هنا يمكن أن يكون عنوان فرعي جميل",
        },
      },
      hero: {
        heading: {
          en: "Find Your Dream Home",
          ar: "ابحث عن منزل أحلامك",
        },
        text: {
          en: "From as low as $10 per day with limited time offer discounts.",
          ar: "بدءًا من 10 دولارات أمريكية في اليوم مع خصومات تقدم لفترة محدودة.",
        },
        looking: {
          en: "What are you looking for?",
          ar: "ما الذي تبحث عنه؟",
        },
      },
      modern: {
        heading: {
          en: "Modern Apartment",
          ar: "شقة حديثة",
        },
        subtitle: {
          en: "$79 at night",
          ar: "79 دولارًا لليلة الواحدة",
        },
        text: {
          en: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ar: "أنا كتلة نصية. انقر فوق زر التحرير لتغيير هذا النص. العميل مهم جدا ، العميل سيتبعه.",
        },
        button: {
          en: "Book Now",
          ar: "احجز الآن",
        },
      },
      agents: {
        heading: {
          en: "Our Agents",
          ar: "عملائنا",
        },
        text: {
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          ar: "العميل مهم جدا ، العميل سيتبعه",
        },
        button: {
          en: "view All",
          ar: "مشاهدة المزيد",
        },
      },
      what: {
        heading: {
          en: "What are you looking for?",
          ar: "ما الذي تبحث عنه؟",
        },
        text: {
          en: "We provide full service at every step.",
          ar: "نحن نقدم خدمة كاملة في كل خطوة.",
        },
        card1: {
          heading: {
            en: "Modern Villa",
            ar: "فيلا مودرن",
          },
          text: {
            en: "Aliquam dictum elit vitae mauris facilisis, at dictum urna.",
            ar: "قال البعض إن الحياة سهلة ، لكن يقال إنها الجرة",
          },
        },
        card2: {
          heading: {
            en: "Modern Villa",
            ar: "فيلا مودرن",
          },
          text: {
            en: "Aliquam dictum elit vitae mauris facilisis, at dictum urna.",
            ar: "قال البعض إن الحياة سهلة ، لكن يقال إنها الجرة",
          },
        },
        card3: {
          heading: {
            en: "Modern Villa",
            ar: "فيلا مودرن",
          },
          text: {
            en: "Aliquam dictum elit vitae mauris facilisis, at dictum urna.",
            ar: "قال البعض إن الحياة سهلة ، لكن يقال إنها الجرة",
          },
        },
      },
      hotProp: {
        heading: {
          en: "Hot This Week",
          ar: "حار هذا الأسبوع",
        },
        text: {
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          ar: "العميل مهم جدا ، العميل سيتبعه",
        },
        button: {
          en: "view All",
          ar: "مشاهدة المزيد",
        },
      },
      callAction: {
        heading: {
          en: "Become a Real Estate Agent",
          ar: "كن وكيل عقارات",
        },
        text: {
          en: "We only work with the best companies around the globe",
          ar: "نحن نعمل فقط مع أفضل الشركات حول العالم",
        },
        button: {
          en: "Register Now",
          ar: "سجل الان",
        },
      },
    },

    /* BLOG */
    globalBlog: {
      cate: {
        en: "Categories Property",
        ar: "فئات الممتلكات",
      },
      featured: {
        en: "Featured Listings",
        ar: "إعلانات مميزة",
      },
      tags: {
        en: "tags",
        ar: "اشارات",
      },
    },

    /* CONTACT */
    contact: {
      sendEmail: {
        heading: {
          en: "send an email",
          ar: "أرسل بريدا إلكترونيا",
        },
        text: {
          en: "Request a free consultation",
          ar: " اطلب استشارة مجانية",
        },
        name: {
          en: "name",
          ar: "الاسم",
        },
        email: {
          en: "email",
          ar: "البريد الالكتروني",
        },
        phone: {
          en: "phone",
          ar: "تليفون",
        },
        subject: {
          en: "subject",
          ar: "موضوعات",
        },
        message: {
          en: "your message",
          ar: "رسالتك",
        },
        button: {
          en: "Send Message",
          ar: "أرسل رسالة",
        },
      },
      contactUs: {
        heading: {
          en: "Contact Us",
          ar: "اتصل بنا",
        },
        text: {
          en: `We are happy to support and assist you at any time all you have to do is contact us at the following.
          https://www.facebook.com/profile.php?id=100089948943833
           info@dar-farha.com`,
          ar: `يسعدنا دعمك ومساعدتك في أي وقت ، كل ما عليك فعله هو الاتصال بنا على التالي.https://www.facebook.com/profile.php?id=100089948943833
          
          
          info@dar-farha.com`,
        },
        address: {
          en: "Address",
          ar: "عنوان",
        },
        addressText: {
          en: "6 October City",
          ar: "مدينة 6 اكتوبر",
        },
        mail: {
          en: "mail",
          ar: "البريد",
        },
        mailText: {
          en: "info@findhouse.com",
          ar: "info@findhouse.com",
        },
        phone: {
          en: "phone",
          ar: "هاتف",
        },
        phoneText: {
          en: "01050403363/01050403364",
          ar: "01050403363/01050403364",
        },
        skype: {
          en: "skype",
          ar: "skype",
        },
        skypeText: {
          en: "findhouse.com",
          ar: "findhouse.com",
        },
        followUs: {
          en: "follow Us",
          ar: "تابعنا",
        },
      },
    },

    /* ABOUT */
    aboutPage: {
      heading: {
        en: "Our Mission Is To FindHouse",
        ar: "مهمتنا هي ان تجد مكان",
      },
      text: {
        en: "Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor.",
        ar: " طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة النهائية.",
      },
      text2: {
        en: "Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor.",
        ar: " طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة النهائية.",
      },
      text3: {
        en: "Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor.",
        ar: " طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة النهائية.",
      },
    },

    /* FAQ */
    faq: {
      card1: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
      card2: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
      card3: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
      card4: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
      card5: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
      card6: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
      card7: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
      card8: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },

      card9: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
      card10: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
      card1: {
        heading: {
          en: "contray to popular belief, Lorem ipsum is not simply",
          ar: "خلافًا للاعتقاد الشائع ، فإن الرعاية الذاتية ليست ببساطة",
        },
        text: {
          en: "Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.",
          ar: "الذي يخاف من الرسوم المتحركة ، وهو كاذب. فالواجب المنزلي هو الدعوة ومن الواجبات المنزلية ، أما الواجب المنزلي فهو فراش الحداد. صلصة سلطة الوادي. يحتاج عنصر المنزل إلى الكثير من الوقت. إنه سرير رعاية كوسادة ارتجاف. حتى ذلك الحين ، كان حرا. نحن نعيش دائمًا في المستشفى وفي الغشاء. ما سيكون مجانيًا ، لن تكون هناك مشاكل في أوقات أخرى",
        },
      },
    },

    /* LOGIN */
    login: {
      heading: {
        en: "Login to your account",
        ar: "تسجيل الدخول إلى حسابك",
      },
      text: {
        en: "Dont have an account? ",
        ar: "ليس لديك حساب؟",
      },
      signup: {
        en: "signup",
        ar: "اشتراك",
      },
      email: {
        en: "user Name Or Email",
        ar: "اسم المستخدم أو البريد الالكتروني",
      },
      password: {
        en: "password",
        ar: "كلمه السر",
      },
      remember: {
        en: "Remember me",
        ar: "تذكرنى",
      },
      forgotPassword: {
        en: "forgot password",
        ar: "هل نسيت كلمة السر",
      },
      login: {
        en: "login",
        ar: "تسجيل الدخول",
      },
      or: {
        en: "or",
        ar: "او",
      },
      facebook: {
        en: "facebook",
        ar: "فيس بوك",
      },
      gmail: {
        en: "google",
        ar: "جوجل",
      },
    },

    /* COMPARE */
    compare: {
      heading: {
        en: "Compare Listings",
        ar: "قارن القوائم",
      },
      text: {
        en: "We provide full service at every step",
        ar: "نحن نقدم خدمة كاملة في كل خطوة",
      },
      li: {
        en: "city",
        ar: "مدينة",
      },
      li2: {
        en: "Beds",
        ar: "سرير",
      },
      li3: {
        en: "Rooms",
        ar: "غرف",
      },
      li4: {
        en: "garage",
        ar: "كراج",
      },
      li5: {
        en: "Year of build",
        ar: "سنة البناء",
      },
      li6: {
        en: "Laundry Room",
        ar: "غرفة الغسيل",
      },
      li7: {
        en: "status",
        ar: "حالة",
      },
    },

    /* MEBERSHIP */
    member: {
      heading: {
        en: "Choose Your Perfect Plan From Us",
        ar: "اختر خطتك المثالية منا",
      },
      text: {
        en: "We provide full service at every step",
        ar: "نحن نقدم خدمة كاملة في كل خطوة",
      },
    },

    /* REGISTER */
    register: {
      heading: {
        en: "Register to your account",
        ar: "سجل في حسابك",
      },
      text: {
        en: "Already have an account?",
        ar: "هل لديك حساب؟",
      },
      login: {
        en: "",
        ar: "",
      },
      name: {
        en: "user name",
        ar: "اسم المستخدم",
      },
      email: {
        en: "email",
        ar: "البريد الالكتروني",
      },
      password: {
        en: "password",
        ar: "كلمه السر",
      },
      rePassword: {
        en: "re-enter Password",
        ar: "إعادة إدخال كلمة المرور",
      },
      text: {
        en: "I have read and accept the Terms and Privacy Policy?",
        ar: "لقد قرأت وقبلت الشروط وسياسة الخصوصية؟",
      },
      register: {
        en: "register",
        ar: "تسجيل",
      },
      or: {
        en: "or",
        ar: "او",
      },
      facebook: {
        en: "facebook",
        ar: "فيس بوك",
      },
      google: {
        en: "google",
        ar: "جوجل",
      },
    },

    /* ERROR */
    errorPage: {
      heading: {
        en: "Ohh! Page Not Found",
        ar: "الصفحة غير موجودة",
      },
      text: {
        en: "We can’t seem to find the page you’re looking for",
        ar: "يبدو أننا لا نستطيع العثور على الصفحة التي تبحث عنها",
      },
      button: {
        en: "Back To Home",
        ar: "العودة إلى المنزل",
      },
      search: {
        en: "search",
        ar: "بحث",
      },
    },

    /* TERMS */
    terms: {
      en: "Navigation",
      ar: "التنقل",
    },

    /* LISTING GRID */
    globalListingGrid: {
      keyword: {
        en: "keyword",
        ar: "كلمة رئيسية",
      },

      location: {
        en: "location",
        ar: "الموقع",
      },
      status: {
        opt: {
          en: "Status",
          ar: "حالة",
        },
        opt2: {
          en: "Apartment",
          ar: "شقة",
        },
        opt3: {
          en: "bungalow",
          ar: "شقة",
        },
        opt4: {
          en: "condo",
          ar: "شقة",
        },
        opt5: {
          en: "house",
          ar: "بيت",
        },
        opt6: {
          en: "land",
          ar: "ارض",
        },
        opt7: {
          en: "single family",
          ar: "عائلة واحدة",
        },
      },
      type: {
        li: {
          en: "Property Type",
          ar: "نوع الملكية",
        },
        li2: {
          en: "Apartment",
          ar: "شقة",
        },
        li3: {
          en: "Bungalow",
          ar: "بيت من طابق واحد",
        },
        li4: {
          en: "Condo",
          ar: "شقة",
        },
        li5: {
          en: "House",
          ar: "منزل",
        },
        li6: {
          en: "Land",
          ar: "أرض",
        },
        li7: {
          en: "Single Family",
          ar: "عائلة واحدة",
        },
      },
      price: {
        en: "Price Range",
        ar: "نطاق السعر",
      },
      bathroom: {
        en: "Bathrooms",
        ar: "الحمامات",
      },
      bedroom: {
        en: "Bedrooms",
        ar: "غرف نوم",
      },
      garages: {
        opt: {
          en: "Garages",
          ar: "جراجات",
        },
        opt2: {
          en: "Yes",
          ar: "نعم",
        },
        opt3: {
          en: "No",
          ar: "لا",
        },
        opt4: {
          en: "Others",
          ar: "الاخرى",
        },
      },
      built: {
        en: "Year built",
        ar: "بنيت عام",
      },
      min: {
        en: "min Area",
        ar: "اقل منطقة",
      },
      max: {
        en: "Max Area",
        ar: "اكثر المنطقة",
      },
      advanced: {
        en: "Advanced features",
        ar: "الخيارات المتقدمة",
      },
      clearBtn: {
        en: "Clear Filters",
        ar: "مسح عوامل التصفية",
      },
      addBtn: {
        en: "add Filters",
        ar: "اضافه عوامل التصفية",
      },
      featured: {
        en: "Featured Properties",
        ar: "خصائص مميزة",
      },
      cate: {
        en: "Categories Property",
        ar: "فئات الممتلكات",
      },
      recently: {
        en: "Recently Viewed",
        ar: "شوهدت مؤخرا",
      },
    },
    filterTopBar: {
      statusText: {
        en: "Status:",
        ar: "حالة:",
      },
      status: {
        opt: {
          en: "All Status",
          ar: "كل الحالة",
        },
        opt2: {
          en: "Old",
          ar: "قديم",
        },
        opt3: {
          en: "Recent",
          ar: "مؤخرًا",
        },
      },
      sortBy: {
        sort: {
          en: "Sort by:",
          ar: "ترتيب حسب:",
        },
        featured: {
          en: "Featured All",
          ar: "اظهر كل شي",
        },
        sale: {
          en: "sale",
          ar: "أُوكَازيُون",
        },
        rent: {
          en: "rent",
          ar: "إيجار",
        },
      },
    },

    /* LISTING LIST */
    listingList: {
      hero: {
        heading: {
          en: "Enjoy The Finest Homes",
          ar: "استمتع بأرقى المنازل",
        },
        text: {
          en: "From as low as $10 per day with limited time offer discounts.",
          ar: "بدءًا من 10 دولارات أمريكية في اليوم مع خصومات تقدم لفترة محدودة.",
        },
      },
      calc: {
        heading: {
          en: "Mortgage Calculator",
          ar: "آلة حاسبة",
        },
        total: {
          en: "Total Amount",
          ar: "المبلغ الإجمالي",
        },
        down: {
          en: "down payment",
          ar: "دفعة مبدئية",
        },
        rate: {
          en: "Interest Rate",
          ar: "سعر الفائدة",
        },
        loan: {
          en: "Loan Term (Years)",
          ar: "مدة القرض (سنوات)",
        },
        date: {
          opt: {
            en: "Monthly",
            ar: "شهريا",
          },
          opt2: {
            en: "Weekly",
            ar: "أسبوعي",
          },
          opt3: {
            en: "Yearly",
            ar: "سنوي",
          },
          opt4: {
            en: "Daily",
            ar: "يوميًا",
          },
          opt5: {
            en: "Other",
            ar: "آخر",
          },
        },
        search: {
          en: "search",
          ar: "بحث",
        },
      },
      featured: {
        heading: {
          en: "Featured Properties",
          ar: "خصائص مميزة",
        },
      },
      cate: {
        heading: {
          en: "Categories Property",
          ar: "فئات الممتلكات",
        },
      },
      recently: {
        en: "Recently Viewed",
        ar: "شوهدت مؤخرا",
      },
      heroStyle: {
        heading: {
          en: "Welcome, Make Yourself at Home",
          ar: "مرحبًا ، اجعل نفسك في المنزل",
        },
        text: {
          en: "Parallax banner with background image.",
          ar: "لافتة المنظر مع صورة الخلفية.",
        },
      },
    },

    /* LISTING MAP */
    listingMap: {
      status: {
        heading: {
          en: "status",
          ar: "حالة",
        },
        opt: {
          en: "All Status",
          ar: "كل الحالة",
        },
        opt2: {
          en: "Old",
          ar: "قديم",
        },
        opt3: {
          en: "Recent",
          ar: "مؤخرًا",
        },
      },

      sortBy: {
        heading: {
          en: "Sort By",
          ar: "ترتيب حسب",
        },
        opt: {
          en: "Featured All",
          ar: "ظهور الكل",
        },
        opt2: {
          en: "Sale",
          ar: "أُوكَازيُون",
        },
        opt3: {
          en: "Rent",
          ar: "إيجار",
        },
      },
    },

    /* AGENT */
    agent: {
      find: {
        heading: {
          en: "Find Agent",
          ar: "ابحث عن وكيل",
        },
        agentName: {
          en: "Enter agent name",
          ar: "أدخل اسم الوكيل",
        },
        cate: {
          en: "All categories",
          ar: "جميع الفئات",
        },
        cate1: {
          en: "Broker",
          ar: "وسيط",
        },
        cate2: {
          en: "Agent",
          ar: "عامل",
        },
        cities: {
          en: "All Cities",
          ar: "جميع المدن",
        },
        cities1: {
          en: "Atlanta",
          ar: "أتلانتا",
        },
        cities2: {
          en: "Orlando",
          ar: "اورلاند",
        },
        cities3: {
          en: "Florida",
          ar: "فلوريدا",
        },
        cities4: {
          en: "Los Angeles",
          ar: "لوس انجلوس",
        },
        cities5: {
          en: "Miami",
          ar: "ميامي",
        },
        cities6: {
          en: "New York",
          ar: "نيويورك",
        },
        clearBtn: {
          en: "clear",
          ar: "مسح",
        },
      },
      featured: {
        en: "Featured Properties",
        ar: "خصائص مميزة",
      },
      cate: {
        cate: {
          en: "Categories Property",
          ar: "فئات الممتلكات",
        },
        cate1: {
          en: "Apartment",
          ar: "شقة",
        },
        cate2: {
          en: "condo",
          ar: "شقة",
        },
        cate3: {
          en: "Family House",
          ar: "بيت عائلي",
        },
        cate4: {
          en: "Modern Villa",
          ar: "فيلا حديثة",
        },
        cate5: {
          en: "Town House",
          ar: "منزل",
        },
        property: {
          en: "properties",
          ar: "عقارات",
        },
      },
      recently: {
        en: "Recently Viewed",
        ar: "شوهدت مؤخرا",
      },
      address: {
        office: {
          en: "Office",
          ar: "مكتب",
        },
        mobile: {
          en: "mobile",
          ar: "موبايل",
        },
        fax: {
          en: "fax",
          ar: "فاكس",
        },
        email: {
          en: "email",
          ar: "البريد الالكتروني",
        },
        viewBtn: {
          en: "View My Listings",
          ar: "عرض القوائم الخاصة بي",
        },
      },
      topFilter: {
        sortBy: {
          en: "sort By",
          ar: "ترتيب حسب",
        },
        select: {
          en: "Select Type",
          ar: "اختر صنف",
        },
        opt: {
          en: "1 Listings",
          ar: "القوائم 1",
        },
        opt2: {
          en: "2 Listings",
          ar: "القوائم 2",
        },
        opt3: {
          en: "3 Listings",
          ar: "القوائم 3",
        },
        search: {
          en: "Search results",
          ar: "نتائج البحث",
        },
      },
    },
    /* AGENT DETAILS*/
    agentDetail: {
      li1: {
        en: "Description",
        ar: "وصف",
      },
      li2: {
        en: "Listing",
        ar: "قائمة",
      },
      li3: {
        en: "Agents",
        ar: "عملاء",
      },
      li4: {
        en: "Reviews",
        ar: "المراجعات",
      },
      desHeading: {
        en: "Elegantly appointed condominium",
        ar: "عمارات عين بأناقة",
      },
      desText: {
        en: "Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.",
        ar: "برج إيفانز زاوية عالية الطلب بها غرفة نوم واحدة صغيرة بالإضافة إلى شرفة كبيرة تطل على مناظر مفتوحة كاملة لمدينة نيويورك. أنت بحاجة لرؤية الآراء لتصديقها. حالة النعناع مع أرضيات جديدة من الخشب الصلب. الكثير من الحجرات بالإضافة إلى غسالة ومجفف.",
      },
      desText2: {
        en: "Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.Fully furnished. Elegantly appointed condominium unit situated on         premier location. PS6. The wide entry hall leads to a large living room  with dining area. This expansive 2 bedroom and 2 renovated marble         bathroom apartment has great windows. Despite the interior views, the         apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.",
        ar: "مفروشة بالكامل. وحدة عمارات مجهزة بأناقة تقع في موقع متميز. PS6. تؤدي قاعة الدخول الواسعة إلى غرفة معيشة كبيرة مع منطقة لتناول الطعام. تحتوي هذه الشقة الواسعة المكونة من غرفتي نوم وحمامين رخاميين تم تجديدهما على نوافذ رائعة. على الرغم من الإطلالات الداخلية ، فإن التعريضات الجنوبية والشرقية للشقق تسمح بضوء طبيعي جميل يملأ كل غرفة. يحيط بالجناح الرئيسي منتجات الألبان المصنوعة يدويًا ويتميز بمقصورة ملابس ومساحة تخزين رائعة",
      },
      desHeading2: {
        en: "The master suite is surrounded",
        ar: "الجناح الرئيسي محاط",
      },
      desText3: {
        en: "Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.",
        ar: "برج إيفانز زاوية عالية الطلب بها غرفة نوم واحدة صغيرة بالإضافة إلى شرفة كبيرة تطل على مناظر مفتوحة كاملة لمدينة نيويورك. أنت بحاجة لرؤية الآراء لتصديقها. حالة النعناع مع أرضيات جديدة من الخشب الصلب. الكثير من الحجرات بالإضافة إلى غسالة ومجفف.",
      },
      desText4: {
        en: "Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.Fully furnished. Elegantly appointed condominium unit situated on         premier location. PS6. The wide entry hall leads to a large living room  with dining area. This expansive 2 bedroom and 2 renovated marble         bathroom apartment has great windows. Despite the interior views, the         apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.",
        ar: "مفروشة بالكامل. وحدة عمارات مجهزة بأناقة تقع في موقع متميز. PS6. تؤدي قاعة الدخول الواسعة إلى غرفة معيشة كبيرة مع منطقة لتناول الطعام. تحتوي هذه الشقة الواسعة المكونة من غرفتي نوم وحمامين رخاميين تم تجديدهما على نوافذ رائعة. على الرغم من الإطلالات الداخلية ، فإن التعريضات الجنوبية والشرقية للشقق تسمح بضوء طبيعي جميل يملأ كل غرفة. يحيط بالجناح الرئيسي منتجات الألبان المصنوعة يدويًا ويتميز بمقصورة ملابس ومساحة تخزين رائعة",
      },
      desHeading3: {
        en: "Elegantly appointed condominium",
        ar: "عمارات عين بأناقة",
      },
      desText5: {
        en: "Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.",
        ar: "برج إيفانز زاوية عالية الطلب بها غرفة نوم واحدة صغيرة بالإضافة إلى شرفة كبيرة تطل على مناظر مفتوحة كاملة لمدينة نيويورك. أنت بحاجة لرؤية الآراء لتصديقها. حالة النعناع مع أرضيات جديدة من الخشب الصلب. الكثير من الحجرات بالإضافة إلى غسالة ومجفف.",
      },
      desText6: {
        en: "Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.Fully furnished. Elegantly appointed condominium unit situated on         premier location. PS6. The wide entry hall leads to a large living room  with dining area. This expansive 2 bedroom and 2 renovated marble         bathroom apartment has great windows. Despite the interior views, the         apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.",
        ar: "مفروشة بالكامل. وحدة عمارات مجهزة بأناقة تقع في موقع متميز. PS6. تؤدي قاعة الدخول الواسعة إلى غرفة معيشة كبيرة مع منطقة لتناول الطعام. تحتوي هذه الشقة الواسعة المكونة من غرفتي نوم وحمامين رخاميين تم تجديدهما على نوافذ رائعة. على الرغم من الإطلالات الداخلية ، فإن التعريضات الجنوبية والشرقية للشقق تسمح بضوء طبيعي جميل يملأ كل غرفة. يحيط بالجناح الرئيسي منتجات الألبان المصنوعة يدويًا ويتميز بمقصورة ملابس ومساحة تخزين رائعة",
      },
      reviews: {
        en: "896 Reviews",
        ar: "896 تعليقات",
      },
      writeReview: {
        en: "Write a Review",
        ar: "أكتب مراجعة",
      },
      outOf: {
        en: "4.5 out of 5 ",
        ar: "4.5",
      },
      yourRating: {
        en: "Your Rating & Review",
        ar: "تقييمك ومراجعتك",
      },
      reviewTitle: {
        en: "review title",
        ar: "مراجعة العنوان",
      },
      yourRev: {
        en: "your review",
        ar: "مراجعتك",
      },
      submitRev: {
        en: "Submit Review",
        ar: "إرسال المراجعة",
      },

      /* sidebarListing */
      featured: {
        en: "Featured Properties",
        ar: "خصائص مميزة",
      },
      cate: {
        cate: {
          en: "Categories Property",
          ar: "فئات الممتلكات",
        },
        cate1: {
          en: "Apartment",
          ar: "شقة",
        },
        cate2: {
          en: "condo",
          ar: "شقة",
        },
        cate3: {
          en: "Family House",
          ar: "بيت عائلي",
        },
        cate4: {
          en: "Modern Villa",
          ar: "فيلا حديثة",
        },
        cate5: {
          en: "Town House",
          ar: "منزل",
        },
        property: {
          en: "properties",
          ar: "عقارات",
        },
      },
      recently: {
        en: "Recently Viewed",
        ar: "شوهدت مؤخرا",
      },

      form: {
        heading: {
          en: "Contact with Agent",
          ar: "تواصل مع الوكيل",
        },
        name: {
          en: "name",
          ar: "الاسم",
        },
        phone: {
          en: "phone",
          ar: "تليفون",
        },
        email: {
          en: "email",
          ar: "البريد الالكتروني",
        },
        message: {
          en: "message",
          ar: "رسالة",
        },
        btn: {
          en: "search",
          ar: "بحث",
        },
      },

      box: {
        heading: {
          en: "Christopher Pakulla",
          ar: "كريستوفر باكولا",
        },
        text: {
          en: "Agent",
          ar: "عامل",
        },
        office: {
          en: "Office: 134 456 3210",
          ar: "مكتب : 134 456 3210 ",
        },
        mobile: {
          en: "Mobile: 134 456 3210",
          ar: "موبايل : 134 456 3210 ",
        },
        fax: {
          en: "fax: 134 456 3210",
          ar: "فاكس : 134 456 3210 ",
        },
        email: {
          en: "email: 134 456 3210",
          ar: "البريد الالكتروني : 134 456 3210 ",
        },
        btn: {
          en: "View My Listings",
          ar: "عرض القوائم الخاصة بي",
        },
      },
    },
    /* DASHBOARD */
    dashboard: {
      dash: {
        heading: {
          en: "Howdy, Hasan",
          ar: "مرحبا ، حسن",
        },
        text: {
          en: "We are glad to see you again!",
          ar: "نحن سعداء لرؤيتك مرة أخرى!",
        },
        recentActivites: {
          heading: {
            en: "Recent Activities",
            ar: "أنشطة حالية",
          },
          li: {
            en: "Your listing Luxury Family Home has be approved!.",
            ar: "تمت الموافقة على قائمتك ",
          },
          li2: {
            en: "Someone favorites your Gorgeous Villa Bay View listing!",
            ar: "تركت كاثي براون تعليقًا على شقة تم تجديدها",
          },
          li3: {
            en: "Your listing Luxury Family Home has been approved!",
            ar: "تركت كاثي براون تعليقًا على شقة تم تجديدها",
          },
          li4: {
            en: "Kathy Brown left a review on Renovated Apartment",
            ar: "تركت كاثي براون تعليقًا على شقة تم تجديدها",
          },
          li5: {
            en: "Someone favorites your Gorgeous Villa Bay View listing!",
            ar: "تركت كاثي براون تعليقًا على شقة تم تجديدها",
          },
          li6: {
            en: "Someone favorites your Gorgeous Villa Bay View listing!",
            ar: "تركت كاثي براون تعليقًا على شقة تم تجديدها",
          },
        },
        view: {
          en: "View Statistics",
          ar: "عرض الإحصائيات",
        },
      },
      createList: {
        heading: {
          en: "Add New Property",
          ar: "إضافة خاصية جديدة",
        },
        text: {
          en: "We are glad to see you again!",
          ar: "نحن سعداء لرؤيتك مرة أخرى!",
        },
        create: {
          en: "Create Listing",
          ar: "إنشاء قائمة",
        },
        propertyTitle: {
          en: "Property Title",
          ar: "عنوان الملكية",
        },
        desc: {
          en: "Description",
          ar: "وصف",
        },
        type: {
          en: "Type",
          ar: "يكتب",
        },
        type1: {
          en: "Type 1",
          ar: " 1 يكتب",
        },
        type2: {
          en: "Type 2",
          ar: " 2 يكتب",
        },
        type3: {
          en: "Type 3",
          ar: " 3 يكتب",
        },
        type4: {
          en: "Type 4",
          ar: " 4 يكتب",
        },
        type5: {
          en: "Type 5",
          ar: " 5 يكتب",
        },
        status: {
          en: "status",
          ar: "حالات",
        },
        status1: {
          en: "status 1",
          ar: " 1 حالات",
        },
        status2: {
          en: "status 2",
          ar: " 2 حالات",
        },
        status3: {
          en: "status 3",
          ar: " 3 حالات",
        },
        status4: {
          en: "status 4",
          ar: " 4 حالات",
        },
        status5: {
          en: "status 5",
          ar: " 5 حالات",
        },
        price: {
          en: "price",
          ar: "السعر",
        },
        area: {
          en: "Area",
          ar: "منطقة",
        },
        rooms: {
          en: "rooms",
          ar: "غرف",
        },
        btnBack: {
          en: "back",
          ar: "خلف",
        },
        btnNext: {
          en: "next",
          ar: "التالي",
        },
        location: {
          en: "location",
          ar: "موقع",
        },
        address: {
          en: "Address",
          ar: "عنوان",
        },
        country: {
          en: "County",
          ar: "دولة",
        },
        city: {
          en: "city",
          ar: "مدينة",
        },
        neigh: {
          en: "Neighborhood",
          ar: "حيّ",
        },
        zip: {
          en: "zip",
          ar: "منطقة",
        },
        county: {
          en: "county",
          ar: "مقاطعة",
        },
        detailed: {
          en: "Detailed Information",
          ar: "معلومات مفصلة",
        },
        propertyId: {
          en: "Property ID",
          ar: "معرف الخاصية",
        },
        areaSize: {
          en: "Area Size",
          ar: "حجم المنطقة",
        },
        sizePrefix: {
          en: "Size Prefix",
          ar: "بادئة الحجم",
        },
        landArea: {
          en: "Land Area",
          ar: "مساحة الأرض",
        },
        landArea2: {
          en: "Land Area Size Postfix",
          ar: "حجم مساحة الأرض",
        },
        bedroom: {
          en: "bedroom",
          ar: "غرفة نوم",
        },
        bathrooms: {
          en: "Bathrooms",
          ar: "الحمامات",
        },
        garages: {
          en: "Garages",
          ar: "المرائب",
        },
        garagesSize: {
          en: "garages Size",
          ar: "حجم الجراجات",
        },
        yearBuilt: {
          en: "Year Built",
          ar: "بنيت عام",
        },
        video: {
          en: "Video URL",
          ar: "رابط الفيديو",
        },
        virtual: {
          en: "360° Virtual Tour",
          ar: "جولة افتراضية 360 درجة",
        },
        amenities: {
          en: "Amenities",
          ar: "وسائل الراحة",
        },
        propertyMedia: {
          en: "Property media",
          ar: "وسائط الملكية",
        },
        floor: {
          en: "floor plan",
          ar: "مخطط الطابق",
        },
        floorBtn: {
          en: "add More",
          ar: "اضافة المزيد",
        },
        planBedRoom: {
          en: "Plan Bedrooms",
          ar: "خطة غرف النوم",
        },
        planBathRoom: {
          en: "Plan BathRoom",
          ar: "خطة حمام",
        },
        planPrice: {
          en: "plan price",
          ar: "سعر الخطة",
        },
        planPost: {
          en: "Price Postfix",
          ar: "سعر",
        },
        planSize: {
          en: "plan size",
          ar: "حجم الخطة",
        },
        planImage: {
          en: "Plan Image",
          ar: "صورة الخطة",
        },
        uploadBtn: {
          en: "upload",
          ar: "رفع",
        },
        planDescription: {
          en: "plan Description",
          ar: "وصف الخطة",
        },
      },
      propeties: {
        heading: {
          en: "My Favorites",
          ar: "مفضلتي",
        },
        text: {
          en: "We are glad to see you again!",
          ar: "يسعدنا رؤيتك مرة أخرى!",
        },
        search: {
          en: "search",
          ar: "بحث",
        },
        filter: {
          en: "Featured First",
          ar: "ظهرت أولا",
        },
        filter2: {
          en: "Recent",
          ar: "مؤخرًا",
        },
        filter3: {
          en: "Old Review",
          ar: "مراجعة قديمة",
        },
        pending: {
          en: "pending",
          ar: "معلق",
        },
        date: {
          en: "30 December, 2020",
          ar: "30 December, 2020",
        },
      },
      reviews: {
        heading: {
          en: "My Reviews",
          ar: "ملاحظاتي",
        },
        text: {
          en: "We are glad to see you again!",
          ar: "نحن سعداء لرؤيتك مرة أخرى!",
        },
        search: {
          en: "search",
          ar: "بحث",
        },
        date: {
          en: "December 28, 2020",
          ar: "December 28, 2020",
        },
        reviewText: {
          en: "Your review on",
          ar: "رأيك في",
        },
        visitor: {
          en: "Visitor Reviews",
          ar: "مراجعات الزوار",
        },
      },
      favourate: {
        heading: {
          en: "My Favorites",
          ar: "مفضلتي",
        },
        text: {
          en: "We are glad to see you again!",
          ar: "نحن سعداء لرؤيتك مرة أخرى!",
        },
      },
      advanced: {
        heading: {
          en: "My Saved Search",
          ar: "بحثي المحفوظ",
        },
        text: {
          en: "We are glad to see you again!",
          ar: "نحن سعداء لرؤيتك مرة أخرى!",
        },
        searchData: {
          search: {
            en: "Search",
            ar: "يبحث",
          },
          created: {
            en: "Created",
            ar: "مخلوق",
          },
          action: {
            en: "action",
            ar: "فعل",
          },
          li1: {
            en: "List London",
            ar: "قائمة لندن",
          },
          li2: {
            en: "Property List New York",
            ar: "قائمة العقارات ",
          },
          li3: {
            en: "London 3 beds",
            ar: "لندن 3 أسرة",
          },
          li4: {
            en: "Paris $100-$100",
            ar: "باريس 100 دولار - 100 دولار",
          },
          li5: {
            en: "Free",
            ar: "حر",
          },
          li6: {
            en: "$300-$900",
            ar: "$300-$900",
          },
        },
      },
      package: {
        heading: {
          en: "My Package",
          ar: "حزمة بلدي",
        },
        text: {
          en: "We are glad to see you again!",
          ar: "نحن سعداء لرؤيتك مرة أخرى!",
        },
        li1: {
          en: "Current Package",
          ar: "الرزمة الحالية",
        },
        li2: {
          en: "Properties remaining",
          ar: "الخصائص المتبقية",
        },
        li3: {
          en: "Featured remaining",
          ar: "المميز المتبقية",
        },
        li4: {
          en: "Renewal remaining",
          ar: "التجديد المتبقي",
        },
        li5: {
          en: "Storage Space",
          ar: "مساحة التخزين",
        },
        li6: {
          en: "Expiry Date",
          ar: "تاريخ الانتهاء",
        },
        free: {
          en: "free",
          ar: "مجانا",
        },
      },
      profile: {
        heading: {
          en: "My Profile",
          ar: "ملفي",
        },
        text: {
          en: "We are glad to see you again!",
          ar: "نحن سعداء لرؤيتك مرة أخرى!",
        },
        profileInfo: {
          en: "Profile Information",
          ar: "معلومات الملف الشخصي",
        },
        userName: {
          en: "Username",
          ar: "اسم المستخدم",
        },
        email: {
          en: "email",
          ar: "الايميل",
        },
        firstName: {
          en: "firstName",
          ar: "اسم الاول",
        },
        lastName: {
          en: "last Name",
          ar: "الاسم الاخير",
        },
        position: {
          en: "Position",
          ar: "مكانة",
        },
        license: {
          en: "License",
          ar: "رخصة",
        },
        taxNumber: {
          en: "Tax Number",
          ar: "اسم المستخدم",
        },
        phone: {
          en: "Phone",
          ar: "اسم المستخدم",
        },
        taxNumber: {
          en: "Tax Number",
          ar: "الرقم الضريبي",
        },
        faxNumber: {
          en: "Fax Number",
          ar: "رقم الفاكس",
        },
        mobile: {
          en: "Mobile",
          ar: "متحرك",
        },
        language: {
          en: "Language",
          ar: "لغة",
        },
        companyName: {
          en: "company Name",
          ar: "اسم الشركة",
        },
        address: {
          en: "Address",
          ar: "عنوان",
        },
        about: {
          en: "About me",
          ar: "ْعَنِّي",
        },
        btn: {
          en: "View Public Profile",
          ar: "مشاهدة الملف الشخصي العام",
        },
        btnUpdated: {
          en: "updated profile",
          ar: "الملف الشخصي المحدث",
        },
        social: {
          en: "Social Media",
          ar: "وسائل التواصل الاجتماعي",
        },
        skype: {
          en: "Skype",
          ar: "سكايب",
        },
        website: {
          en: "Website",
          ar: "موقع إلكتروني",
        },
        facebook: {
          en: "Facebook",
          ar: "فيس بوك",
        },
        twiiter: {
          en: "twiiter",
          ar: "تويتر",
        },
        linkedin: {
          en: "linkedin",
          ar: "لينكدان",
        },
        instagram: {
          en: "Instagram",
          ar: "انستجرام",
        },
        google: {
          en: "Google Plus",
          ar: "جوجل بلس",
        },
        youtube: {
          en: "youtube",
          ar: "يوتيوب",
        },
        pin: {
          en: "Pinterest",
          ar: "بينتيريست",
        },
        vimeo: {
          en: "Vimeo",
          ar: "فيميو",
        },
        oldPass: {
          en: "old password",
          ar: "كلمة المرور القديمة",
        },
        newPass: {
          en: "New Password",
          ar: "كلمة المرور الجديدة",
        },
        confirm: {
          en: "Confirm New Password",
          ar: "جديد تأكيد كلمة المرور الجديدة",
        },
      },
      search: {
        en: "search",
        ar: "بحث",
      },
    },
    person: {
      en: "ali tofan",
      ar: "علي توفان",
    },
    /* DASH Page */
    dashPages: {
      dashboard: {
        en: "dashboard",
        ar: "لوحة ",
      },
      create: {
        en: "create Listing",
        ar: "إنشاء قائمة ",
      },
      message: {
        en: "message",
        ar: "رسالة",
      },
      prop: {
        en: "My Properties",
        ar: "ممتلكاتي",
      },
      manage: {
        en: "Manage Listings",
        ar: "إدارة القوائم",
      },
      reviews: {
        en: "Reviews",
        ar: "رسالة",
      },
      favorites: {
        en: "My Favorites",
        ar: "مفضلتي",
      },
      saved: {
        en: "Saved Search",
        ar: "رسالة",
      },
      manageAccount: {
        en: "Manage Account",
        ar: "رسالة",
      },
      profile: {
        en: "my profile",
        ar: "ملفي",
      },
      package: {
        en: "My Package",
        ar: "حزمة",
      },
      logOut: {
        en: "Logout",
        ar: "تسجيل خروج",
      },
    },
    /* listing Style */
    listingStyle: {
      des: {
        heading: {
          en: "Description",
          ar: "وصف",
        },
        text: {
          en: "Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.",
          ar: "برج إيفانز زاوية عالية الطلب بها غرفة نوم واحدة صغيرة بالإضافة إلى شرفة كبيرة تطل على مناظر مفتوحة كاملة لمدينة نيويورك. أنت بحاجة لرؤية الآراء لتصديقها. حالة النعناع مع أرضيات جديدة من الخشب الصلب. الكثير من الحجرات بالإضافة إلى غسالة ومجفف.",
        },
        text2: {
          en: "Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom",
          ar: "مفروشة بالكامل. وحدة عمارات مجهزة بأناقة تقع في موقع متميز. PS6. تؤدي قاعة الدخول الواسعة إلى غرفة معيشة كبيرة مع منطقة لتناول الطعام. 2 غرفة نوم و 2 حمام رخامي تم تجديدهما",
        },
        btn: {
          en: "show more",
          ar: "أظهر المزيد",
        },
      },
      det: {
        heading: {
          en: "Property Details",
          ar: "تفاصيل اوضح",
        },
        prop: {
          en: "Property ID",
          ar: "معرف الخاصية",
        },
        price: {
          en: "Price",
          ar: "سعر",
        },
        size: {
          en: "Property Size",
          ar: "حجم الملكية",
        },
        built: {
          en: "Year Built",
          ar: "بنيت عام",
        },
        bedRoom: {
          en: "Bedrooms",
          ar: "غرف نوم",
        },
        bathRoom: {
          en: "Bathrooms",
          ar: "الحمامات",
        },
        garage: {
          en: "garge",
          ar: "الغرغرة",
        },
        gargeSize: {
          en: "Garage Size",
          ar: "حجم المرآب",
        },
        propType: {
          en: "Property Type",
          ar: "نوع الملكية",
        },
        propValue: {
          en: "Property Type",
          ar: "نوع الملكية",
        },
        propStatus: {
          en: "Property Status",
          ar: "حالة الملكية",
        },
        statusValue: {
          en: "Property Status",
          ar: "حالة الملكية",
        },
      },
      add: {
        heading: {
          en: "Additional details",
          ar: "تفاصيل اضافية",
        },
        deposit: {
          en: "deposit",
          ar: "إيداع",
        },
        poolSize: {
          en: "Pool Size",
          ar: "حجم تجمع",
        },
        addRooms: {
          en: "Additional Rooms",
          ar: "غرف إضافية",
        },
        addValue: {
          en: "Guest Bath",
          ar: "حمام الضيف",
        },
        last: {
          en: "Last remodel year",
          ar: "آخر سنة إعادة عرض",
        },
        Amenities: {
          en: "Amenities",
          ar: "وسائل الراحة",
        },
        club: {
          en: "Clubhouse",
          ar: "كلوب هاوس",
        },
        equip: {
          en: "Equipment",
          ar: "معدات",
        },
      },
      propertyAtt: {
        heading: {
          en: "Property Attachments",
          ar: "مرفقات الملكية",
        },
      },
      feat: {
        heading: {
          en: "Features",
          ar: "سمات",
        },
      },
      location: {
        heading: {
          en: "location",
          ar: "موقع",
        },
        text: {
          en: "1421 San Pedro St, Los Angeles, CA 90015",
          ar: "1421 شارع سان بيدرو ، لوس أنجلوس ، كاليفورنيا 90015",
        },
      },
      plans: {
        heading: {
          en: "foor plan",
          ar: "خطط المبنى",
        },
      },
      vedio: {
        heading: {
          en: "Property video",
          ar: "فيديو الملكية",
        },
        heading2: {
          en: "Virtual Tour",
          ar: "جولة افتراضية",
        },
      },
      walk: {
        heading: {
          en: "Walkscore",
          ar: "نقاط المشي",
        },
        walkScore: {
          en: "Walk Score",
          ar: "نقاط المشي",
        },
        li: {
          en: "Somewhat Walkable",
          ar: "يمكن المشي فيه إلى حد ما",
        },
        li2: {
          en: "bike Score",
          ar: "درجة الدراجة",
        },
        btn: {
          en: "More Details Here",
          ar: "مزيد من التفاصيل هنا",
        },
      },
      nearby: {
        en: "What's Nearby",
        ar: "ما هو قريب",
      },
      reviews: {
        en: "reviews",
        ar: "المراجعات",
      },

      comments: {
        heading: {
          en: "896 Reviews",
          ar: "896 تعليقات",
        },
        write: {
          en: "Write a Review",
          ar: "أكتب مراجعة",
        },
        rating: {
          en: "Your Rating & Review",
          ar: "تقييمك ومراجعتك",
        },
      },
    },

    /* loginSignUpModal */
    signUp: {
      global: {
        heading: {
          en: "login",
          ar: "تسجيل الدخول",
        },
        facebook: {
          en: "log with facebook",
          ar: "تسجيل الدخول باستخدام الفيسبوك",
        },
        gmail: {
          en: "log with gmail",
          ar: "تسجيل الدخول باستخدام الفيسبوك",
        },
        user: {
          en: "user Name Or Email",
          ar: "اسم المستخدم أو البريد الالكتروني",
        },
        password: {
          en: "password",
          ar: "كلمة السر",
        },
        rePassword: {
          en: "re-password",
          ar: "إعادة كلمة المرور",
        },
        email: {
          en: "email",
          ar: "البريد الالكتروني",
        },
        lost: {
          en: "Lost your password?",
          ar: "فقدت كلمة المرور الخاصة بك؟",
        },
        remember: {
          en: "remember",
          ar: "تذكرنى",
        },
        button: {
          en: "log in",
          ar: "تسجيل الدخول",
        },

        account: {
          en: "Dont have an account?",
          ar: "ليس لديك حساب؟",
        },
        register: {
          en: "register",
          ar: "تسجيل",
        },
        login: {
          en: "log in",
          ar: "تسجيل الدخول",
        },
        policy: {
          en: "I have accept the Terms and Privacy Policy.",
          ar: "لقد قبلت الشروط وسياسة الخصوصية.",
        },
        signUp: {
          en: "sign up",
          ar: "اشتراك",
        },
        haveAcc: {
          en: "Already have an account ?",
          ar: "هل لديك حساب",
        },
      },
    },
  },
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang: (state, action) => {
      if (action.payload) {
        state.value.lang = action.payload;
      } else {
        switch (state.value.lang) {
          case "en":
            state.value.lang = "en";
            break;
          case "ar":
            state.value.lang = "ar";
            break;
          default:
            state.value.lang = localStorage.getItem("lang") || "en";
        }
      }
    },
  },
});

export const { toggleLang } = langSlice.actions;

export default langSlice.reducer;
