const products = [
  {
    name: 'After 8',
    image: '/images/icebaby.jpeg',
    description:{
      "ru":'Традиционный вкус известного шоколада в табачном воплощении. Легкий сигарный привкус с ореховыми нотками не перебивает шоколадной ароматики. Насыщенный After 8 раскрывает дымные объятия, обволакивая сначала прохладной свежестью мяты, а затем оставляя выраженное шоколадное послевкусие с характерной сладостью. Яркий контраст делает вкус необычным и многогранным.',
      "en": "The traditional taste of the famous tobacco-based chocolate. Light cigar flavor with nutty notes does not interrupt the chocolate aroma. Intense After 8 opens a smoky embrace, enveloping first with the cool freshness of mint, and then leaving a pronounced chocolate aftertaste with a characteristic sweetness. The bright contrast makes the taste unusual and multifaceted.",
      "hy": "Ծխախոտի վրա հիմնված հայտնի շոկոլադի ավանդական համը. Սիգարի թեթև համը ընկույզային նոտաներով չի ընդհատում շոկոլադի բույրը: Intense After 8-ը բացում է ծխագույն գրկում՝ պարուրելով նախ անանուխի սառը թարմությամբ, իսկ հետո թողնելով ընդգծված շոկոլադե հետհամ՝ բնորոշ քաղցրությամբ: Պայծառ հակադրությունը համը դարձնում է անսովոր և բազմակողմանի"
    },
    brand: 'Black Burn',
    category: 'Табак',
    type: 'Свежий',
    weight: '250г',
    price: '10000',
    countInStock: 3,
    packageImage: '/images/icebaby.png',
  },
  {
    name: 'After 8',
    image: '/images/icebaby.jpeg',
    description:{
      "ru":'Традиционный вкус известного шоколада в табачном воплощении. Легкий сигарный привкус с ореховыми нотками не перебивает шоколадной ароматики. Насыщенный After 8 раскрывает дымные объятия, обволакивая сначала прохладной свежестью мяты, а затем оставляя выраженное шоколадное послевкусие с характерной сладостью. Яркий контраст делает вкус необычным и многогранным.',
      "en": "The traditional taste of the famous tobacco-based chocolate. Light cigar flavor with nutty notes does not interrupt the chocolate aroma. Intense After 8 opens a smoky embrace, enveloping first with the cool freshness of mint, and then leaving a pronounced chocolate aftertaste with a characteristic sweetness. The bright contrast makes the taste unusual and multifaceted.",
      "hy": "Ծխախոտի վրա հիմնված հայտնի շոկոլադի ավանդական համը. Սիգարի թեթև համը ընկույզային նոտաներով չի ընդհատում շոկոլադի բույրը: Intense After 8-ը բացում է ծխագույն գրկում՝ պարուրելով նախ անանուխի սառը թարմությամբ, իսկ հետո թողնելով ընդգծված շոկոլադե հետհամ՝ բնորոշ քաղցրությամբ: Պայծառ հակադրությունը համը դարձնում է անսովոր և բազմակողմանի"
    },
    brand: 'Black Burn',
    category: 'Табак',
    type: 'Свежий',
    weight: '250г',
    price: '10000',
    countInStock: 3,
    packageImage: '/images/icebaby.png',
  },
  {
    name: 'After 8',
    image: '/images/icebaby.jpeg',
    description:{
      "ru":'Традиционный вкус известного шоколада в табачном воплощении. Легкий сигарный привкус с ореховыми нотками не перебивает шоколадной ароматики. Насыщенный After 8 раскрывает дымные объятия, обволакивая сначала прохладной свежестью мяты, а затем оставляя выраженное шоколадное послевкусие с характерной сладостью. Яркий контраст делает вкус необычным и многогранным.',
      "en": "The traditional taste of the famous tobacco-based chocolate. Light cigar flavor with nutty notes does not interrupt the chocolate aroma. Intense After 8 opens a smoky embrace, enveloping first with the cool freshness of mint, and then leaving a pronounced chocolate aftertaste with a characteristic sweetness. The bright contrast makes the taste unusual and multifaceted.",
      "hy": "Ծխախոտի վրա հիմնված հայտնի շոկոլադի ավանդական համը. Սիգարի թեթև համը ընկույզային նոտաներով չի ընդհատում շոկոլադի բույրը: Intense After 8-ը բացում է ծխագույն գրկում՝ պարուրելով նախ անանուխի սառը թարմությամբ, իսկ հետո թողնելով ընդգծված շոկոլադե հետհամ՝ բնորոշ քաղցրությամբ: Պայծառ հակադրությունը համը դարձնում է անսովոր և բազմակողմանի"
    },
    brand: 'Black Burn',
    category: 'Табак',
    type: 'Свежий',
    weight: '250г',
    price: '10000',
    countInStock: 3,
    packageImage: '/images/icebaby.png',
  },
  {
    name: 'After 8',
    image: '/images/icebaby.jpeg',
    description:{
      "ru":'Традиционный вкус известного шоколада в табачном воплощении. Легкий сигарный привкус с ореховыми нотками не перебивает шоколадной ароматики. Насыщенный After 8 раскрывает дымные объятия, обволакивая сначала прохладной свежестью мяты, а затем оставляя выраженное шоколадное послевкусие с характерной сладостью. Яркий контраст делает вкус необычным и многогранным.',
      "en": "The traditional taste of the famous tobacco-based chocolate. Light cigar flavor with nutty notes does not interrupt the chocolate aroma. Intense After 8 opens a smoky embrace, enveloping first with the cool freshness of mint, and then leaving a pronounced chocolate aftertaste with a characteristic sweetness. The bright contrast makes the taste unusual and multifaceted.",
      "hy": "Ծխախոտի վրա հիմնված հայտնի շոկոլադի ավանդական համը. Սիգարի թեթև համը ընկույզային նոտաներով չի ընդհատում շոկոլադի բույրը: Intense After 8-ը բացում է ծխագույն գրկում՝ պարուրելով նախ անանուխի սառը թարմությամբ, իսկ հետո թողնելով ընդգծված շոկոլադե հետհամ՝ բնորոշ քաղցրությամբ: Պայծառ հակադրությունը համը դարձնում է անսովոր և բազմակողմանի"
    },
    brand: 'Black Burn',
    category: 'Табак',
    type: 'Свежий',
    weight: '250г',
    price: '10000',
    countInStock: 3,
    packageImage: '/images/icebaby.png',
  },
  {
    name: 'After 8',
    image: '/images/icebaby.jpeg',
    description:{
      "ru":'Традиционный вкус известного шоколада в табачном воплощении. Легкий сигарный привкус с ореховыми нотками не перебивает шоколадной ароматики. Насыщенный After 8 раскрывает дымные объятия, обволакивая сначала прохладной свежестью мяты, а затем оставляя выраженное шоколадное послевкусие с характерной сладостью. Яркий контраст делает вкус необычным и многогранным.',
      "en": "The traditional taste of the famous tobacco-based chocolate. Light cigar flavor with nutty notes does not interrupt the chocolate aroma. Intense After 8 opens a smoky embrace, enveloping first with the cool freshness of mint, and then leaving a pronounced chocolate aftertaste with a characteristic sweetness. The bright contrast makes the taste unusual and multifaceted.",
      "hy": "Ծխախոտի վրա հիմնված հայտնի շոկոլադի ավանդական համը. Սիգարի թեթև համը ընկույզային նոտաներով չի ընդհատում շոկոլադի բույրը: Intense After 8-ը բացում է ծխագույն գրկում՝ պարուրելով նախ անանուխի սառը թարմությամբ, իսկ հետո թողնելով ընդգծված շոկոլադե հետհամ՝ բնորոշ քաղցրությամբ: Պայծառ հակադրությունը համը դարձնում է անսովոր և բազմակողմանի"
    },
    brand: 'Black Burn',
    category: 'Табак',
    type: 'Свежий',
    weight: '250г',
    price: '10000',
    countInStock: 3,
    packageImage: '/images/icebaby.png',
  },
  {
    name: 'After 8',
    image: '/images/icebaby.jpeg',
    description:{
      "ru":'Традиционный вкус известного шоколада в табачном воплощении. Легкий сигарный привкус с ореховыми нотками не перебивает шоколадной ароматики. Насыщенный After 8 раскрывает дымные объятия, обволакивая сначала прохладной свежестью мяты, а затем оставляя выраженное шоколадное послевкусие с характерной сладостью. Яркий контраст делает вкус необычным и многогранным.',
      "en": "The traditional taste of the famous tobacco-based chocolate. Light cigar flavor with nutty notes does not interrupt the chocolate aroma. Intense After 8 opens a smoky embrace, enveloping first with the cool freshness of mint, and then leaving a pronounced chocolate aftertaste with a characteristic sweetness. The bright contrast makes the taste unusual and multifaceted.",
      "hy": "Ծխախոտի վրա հիմնված հայտնի շոկոլադի ավանդական համը. Սիգարի թեթև համը ընկույզային նոտաներով չի ընդհատում շոկոլադի բույրը: Intense After 8-ը բացում է ծխագույն գրկում՝ պարուրելով նախ անանուխի սառը թարմությամբ, իսկ հետո թողնելով ընդգծված շոկոլադե հետհամ՝ բնորոշ քաղցրությամբ: Պայծառ հակադրությունը համը դարձնում է անսովոր և բազմակողմանի"
    },
    brand: 'Black Burn',
    category: 'Табак',
    type: 'Свежий',
    weight: '250г',
    price: '10000',
    countInStock: 3,
    packageImage: '/images/icebaby.png',
  },
  {
    name: 'After 8',
    image: '/images/icebaby.jpeg',
    description:{
      "ru":'Традиционный вкус известного шоколада в табачном воплощении. Легкий сигарный привкус с ореховыми нотками не перебивает шоколадной ароматики. Насыщенный After 8 раскрывает дымные объятия, обволакивая сначала прохладной свежестью мяты, а затем оставляя выраженное шоколадное послевкусие с характерной сладостью. Яркий контраст делает вкус необычным и многогранным.',
      "en": "The traditional taste of the famous tobacco-based chocolate. Light cigar flavor with nutty notes does not interrupt the chocolate aroma. Intense After 8 opens a smoky embrace, enveloping first with the cool freshness of mint, and then leaving a pronounced chocolate aftertaste with a characteristic sweetness. The bright contrast makes the taste unusual and multifaceted.",
      "hy": "Ծխախոտի վրա հիմնված հայտնի շոկոլադի ավանդական համը. Սիգարի թեթև համը ընկույզային նոտաներով չի ընդհատում շոկոլադի բույրը: Intense After 8-ը բացում է ծխագույն գրկում՝ պարուրելով նախ անանուխի սառը թարմությամբ, իսկ հետո թողնելով ընդգծված շոկոլադե հետհամ՝ բնորոշ քաղցրությամբ: Պայծառ հակադրությունը համը դարձնում է անսովոր և բազմակողմանի"
    },
    brand: 'Black Burn',
    category: 'Табак',
    type: 'Свежий',
    weight: '250г',
    price: '10000',
    countInStock: 3,
    packageImage: '/images/icebaby.png',
  },
  {
    name: 'After 8',
    image: '/images/icebaby.jpeg',
    description:{
      "ru":'Традиционный вкус известного шоколада в табачном воплощении. Легкий сигарный привкус с ореховыми нотками не перебивает шоколадной ароматики. Насыщенный After 8 раскрывает дымные объятия, обволакивая сначала прохладной свежестью мяты, а затем оставляя выраженное шоколадное послевкусие с характерной сладостью. Яркий контраст делает вкус необычным и многогранным.',
      "en": "The traditional taste of the famous tobacco-based chocolate. Light cigar flavor with nutty notes does not interrupt the chocolate aroma. Intense After 8 opens a smoky embrace, enveloping first with the cool freshness of mint, and then leaving a pronounced chocolate aftertaste with a characteristic sweetness. The bright contrast makes the taste unusual and multifaceted.",
      "hy": "Ծխախոտի վրա հիմնված հայտնի շոկոլադի ավանդական համը. Սիգարի թեթև համը ընկույզային նոտաներով չի ընդհատում շոկոլադի բույրը: Intense After 8-ը բացում է ծխագույն գրկում՝ պարուրելով նախ անանուխի սառը թարմությամբ, իսկ հետո թողնելով ընդգծված շոկոլադե հետհամ՝ բնորոշ քաղցրությամբ: Պայծառ հակադրությունը համը դարձնում է անսովոր և բազմակողմանի"
    },
    brand: 'Black Burn',
    category: 'Табак',
    type: 'Свежий',
    weight: '250г',
    price: '10000',
    countInStock: 3,
    packageImage: '/images/icebaby.png',
  },
];

export default products;
