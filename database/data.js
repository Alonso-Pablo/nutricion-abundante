const data = {
  products: {
    'aloe200ml': {
      name: 'Aloe Beta Supreme',
      id: 'havgutsdk8',
      image: '/images/products/aloe_beta_200.png',
      description: {
        content: 'Bote de 200ml.',
        flavor: 'Ananá/Piña',
        ingredients: 'Vitamina E y Gel de Aloe Vera en polvo.',
        price: 291,
      },
    },
    'aloe960mllimon': {
      name: 'Aloe Beta Supreme',
      id: 'ao733fzisx',
      image: '/images/products/aloe_beta_limon_bote_900.png',
      description: {
        content: 'Bote de 960ml.',
        flavor: 'Limón',
        ingredients: 'Vitamina E y Gel de Aloe Vera en polvo.',
        price: 1400,
      }
    },
    'aloe960mlanana': {
      name: 'Aloe Beta Supreme',
      id: 'ealgvw2efs',
      image: '/images/products/aloe_beta_anana_bote_900.png',
      description: {
        content: 'Bote de 960ml.',
        flavor: 'Ananá/Piña',
        ingredients: 'Vitamina E y Gel de Aloe Vera en polvo.',
        price: 1400,
      }
    },
    'aqtua': {
      name: 'Aqtúa Supreme',
      id: 'v5izv5wo26',
      image: '/images/products/aqtua_caja_s.png',
      description: {
        content: 'Caja con 30 sobres de 5g (150g).',
        flavor: 'Mandarina',
        ingredients: 'Magnesio, Coenzima QH, L-Carnitina y Ribosa.',
        price: 4920,
      }
    },
    'biocrosbote': {
      name: 'Biocros',
      id: 'h8blaufecx',
      image: '/images/products/biocros_bote.png',
      description: {
        content: 'Bote de 567g',
        flavor: 'Pomelo',
        ingredients: 'Vitamina C, Vitamina E, Vitaminas del complejo B: Tiamina B1, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Ácido Fólico B9 y Cianocobalamina B12, Fenilalanina, Taurina, Cafeína Glicina. Zinc, Cobre y Polinicotinato de Cromo.',
        price: 2600,
      }
    },
    // 'briocroscaja': {
    //   name: 'Biocros',
    //   id: 'ese9nc90kc',
    //   price: 1640,
    //   image: '/images/products/biocros_caja.png',
    //   description: {
    //     content: 'Caja con 30 sobres de 13.5g (405g)',
    //     flavor: 'Pomelo',
    //     ingredients: 'Vitamina C, Vitamina E, Tiamina B1, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Ácido Fólico B9 y Cianocobalamina B12, Fenilalanina, Taurina, Cafeína Glicina. Zinc, Cobre y Polinicotinato de Cromo.',
    //     price: 1640,
    //   }
    // },
    'biocrossupreme': {
      name: 'Biocros Supreme',
      id: 'gitu12xtru',
      image: '/images/products/biocros_caja_s.png',
      description: {
        content: 'Caja con 30 sobres de 8g (240g)',
        flavor: 'Pomelo (Endulzado con Stevia)',
        ingredients: 'Vitamina C, Vitamina E, Tiamina B1, Rivoflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Ácido Fólico B9 y Cianocobalamina B12, Fenilalanina, Glicina, Zinc, Cobre, Polinicotinato de Cromo, Taurina y Cafeína.',
        price: 2740,
      }
    },
    'cafezzino': {
      name: 'Cafezzino Plus',
      id: 'mtxns5d7lh',
      image: '/images/products/cafezzino_caja_plus.png',
      description: {
        content: 'Caja con 30 sobres de 5g (150g)',
        flavor: 'Café',
        ingredients: 'Extracto de Café Verde (Coffea canephora robusta pierre), Polinicotinato de Cromo, Inulina.',
        price: 2870,
      }
    },
    'dolcevita': {
      name: 'Dolcevita Supreme',
      id: 'pjt1wax88y',
      image: '/images/products/dolcevita_caja_s.png',
      description: {
        content: '30 sobres de 5g (150g)',
        flavor: 'Toronja (Endulzado con Stevia)',
        ingredients: 'Fibra de Goma Acacia (Acacia spp), Polidextrosa, Fibra de Manzana, Concentrado de Café Verde (Coffea canephora robusta), Fibra de Avena, Fibra de Arroz.',
        price: 3480,
      }
    },
    'egofrutas': {
      name: 'Ego Frutas (6 Latas)',
      id: 'ja45fsg01r',
      image: '/images/products/ego_frutas_lata.png',
      description: {
        content: '6 Latas de 355ml c/u.',
        flavor: 'Frutos del Bosque',
        ingredients: 'Vitamina C, Tiamina B1, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Cianocobalamina B12, Extracto de Regalíz (Glycyrrhiza glabra), Colina, Glicina, Cafeína, Potasio y Taurina.',
        price: 1615,
      }
    },
    'ego10': {
      name: 'Ego 10',
      id: 'g4n20z9xqv',
      image: '/images/products/ego_10.png',
      description: {
        content: 'Bote de 200ml',
        flavor: 'Fruta de la pasión',
        ingredients: 'Niacina B3, Piridoxina B6, Cianocobalamina B12, Ácido Pantoténico B5, Taurina, Cafeína, Inositol',
        price: 242,
      }
    },
    'egoherbal': {
      name: 'Ego Herbal',
      id: 'nekmvtn4qc',
      image: '/images/products/ego_herbal.png',
      description: {
        content: 'Bote de 200ml',
        flavor: 'Herbal',
        ingredients: 'Vitamina D, Vitamina E, Cianocobalamina B12.',
        price: 242,
      }
    },
    'egolife': {
      name: 'Ego Life Supreme',
      id: 'dp85p194jw',
      image: '/images/products/ego_life_caja_s.png',
      description: {
        content: 'Caja de 30 sobres de 16g (480)',
        flavor: 'Ananá/Piña',
        ingredients: 'Rivoflavina B2, Magnesio, Polinicotinato de Cromo, Ácido Pantoténico B5 y Potasio.',
        price: 1730,
      }
    },
    'estop': {
      name: 'Estop Plus',
      id: 'nr9t7ccpte',
      image: '/images/products/estop_caja_plus.png',
      description: {
        content: 'Caja de 30 sobres de 15g (450g)',
        flavor: 'Nuez-Vainilla',
        ingredients: 'Vitamina E, Niacina B3, Fitoesteroles, Inulina, Aislado de Proteína de Soja, Almendra en Polvo, Extracto de Cera de Caña (Saccharum officinarum L.).',
        price: 5120,
      }
    },
    'fem': {
      name: 'Fem Plus',
      id: 'i724pgvlu5',
      image: '/images/products/fem_caja_s.png',
      description: {
        content: 'Caja de 30 sobres con 6.5g (195g)',
        flavor: 'Durazno (Endulzado con Stevia)',
        ingredients: 'Vitamina A, Vitamina C, Calcio, Vitamina D, Vitamina E, Ácido Fólico B9, Magnesio, Zinc, Vitamina K, Extracto de Semilla de Uva (Vitis Vinifera, Semilla), Lúpulo (Humulus Lupulus, Hoja) y Extracto de Soya (Glycine max, Semilla).',
        price: 3180,
      }
    },
    'fiber': {
      name: 'Fiber Supreme',
      id: 'dwojs605la',
      image: '/images/products/fiber_caja_s.png',
      description: {
        content: ' Caja de 30 sobres de 15g (450g)',
        flavor: 'Durazno (Endulzado con Stevia).',
        ingredients: 'Vitamina C, Calcio, Vitamina D, Magnesio, Cobre, Manganeso, Inulina de Agave, Fibra de Avena (Avena sativa), Aceite de Canola (Brassica campestris), Salvado de Maíz (Zea mays), Polvo de Papaya (Carica papaya), Fibra de soja (Glycine max), Polvo de Ciruela (Prunus domestica), Polvo de Remolacha (Beta vulgaris), Lactobacillus acidophillus y Lactobacillus casei.',
        price: 3920,
      }
    },
    'focus': {
      name: 'Focus',
      id: 't365os8ghv',
      image: '/images/products/focus_bote.png',
      description: {
        content: 'Bote de 555g',
        flavor: 'Lima-limón',
        ingredients: 'Vitamina C, Vitamina E, Tiamina B1, Riboflavina B2, Niacina B3, Piridoxina B6, Cianocobalamina B12, Glicina, Colina, Zinc, Cobre, Polinicotinato de Cromo Biotina, Ácido Pantoténico B5 y Taurina.',
        price: 3450,
      }
    },
    'focussupreme': {
      name: 'Focus Supreme',
      id: 'sbqwskcch0',
      image: '/images/products/focus_caja_s.png',
      description: {
        content: 'Caja con 30 sobres de 8g (240g)',
        flavor: 'Lima-limón (Endulzado con Stevia)',
        ingredients: 'Vitamina C, Vitamina E, Tiamina B1, Riboflavina B2, Niacina B3, Piridoxina B6, Cianocobalamina B12, Glicina, Colina, Zinc, Polinicotinato de Cromo, Biotina, Ácido Pantoténico B5 y Taurina.',
        price: 3420,
      }
    },
    'homo': {
      name: 'Homo Plus',
      id: 'nt1dw8veuv',
      image: '/images/products/homo_caja_plus.png',
      description: {
        content: 'Caja de 30 sobres de 6g (180g)',
        flavor: 'Mandarina (Endulzado con Stevia)',
        ingredients: 'Vitamina C, Vitamina E, Zinc, Selenio, Boro, Licopeno, Extracto de Semilla de Uva (Vitis vinifera, Semilla), Extracto de Soya (Glycine max, Semilla).',
        price: 3180,
      }
    },
    'vkids': {
      name: 'Omnilife VKIDS',
      id: 'rbpds7ghbt',
      image: '/images/products/vkids.png',
      description: {
        content: 'Doypack de 400g',
        flavor: 'Vainilla',
        ingredients: 'Vitamina A, Vitamina C, Vitamina D, Vitamina E, Vitamina K, Tiamina B1, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Ácido Fólico B9, Cobalamina B12 Calcio, Fósforo, Hierro, Magnesio, Biotina, Cobre, Colina, Manganeso, Selenio, Yodo, Potasio, Inositol, Taurina, DHA (Ácido docosahexaenoico), Lactobacillus acidophillus, Lactobacillus casei y Zinc.',
        price: 3380,
      }
    },
    'shake': {
      name: 'Omnilife Shake Supreme',
      id: 'j40eykjgp6',
      image: '/images/products/shake_caja_s.png',
      description: {
        content: 'Caja de 12 sobres de 50g (600g)',
        flavor: 'Cookies & Cream (Endulzado con Stevia)',
        ingredients: 'Vitamina A, , Vitamina C, Vitamina D, Vitamina E, Tiamina B1, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Ácido Fólico B9, Vitamina B12, Biotina, Calcio, Hierro, Magnesio, Zinc, Yodo, Vitamina K, Cobre, Molibdeno, Aislado de Proteina de Soja, Aceite Encapsulado de Canola (Aceite de Canola (Brassica campestris)) y Cacao.',
        price: 3640,
      }
    },
    'omniost': {
      name: 'Omniost Supreme',
      id: 'sspcfst3o3',
      image: '/images/products/omniost_caja_s.png',
      description: {
        content: 'Caja de 30 sobres de 15g (450g)',
        flavor: 'Banana (Endulzado con Stevia)',
        ingredients: 'Vitamina C, Calcio, Vitamina D, Fósforo, Magnesio, Zinc, Vitamina K2 y Aislado de Proteína de Soja.',
        price: 3640,
      }
    },
    'omnipluscaja': {
      name: 'Omniplus',
      id: 'anatste2we',
      image: '/images/products/omniplus_caja.png',
      description: {
        content: 'Caja de 30 sobres de 30ml (900ml)',
        flavor: 'Frutas',
        ingredients: 'Vitamina A, Vitamina C, Vitamina E, Vitamina D, Tiamina B1, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Cafeína, Vitamina B12, Biotina, Zinc, Selenio, Polinicotinato de Cromo, Magnesio, Manganeso, Cobre, Calcio, Fructosa, Gel de Aloe (Aloe vera), Extracto de Schizandra (Schisandra chinesis, fruto), Gotu Cola (Centella asiatica, planta), Nuez de Cola (Cola nitida, semilla), Guaran á (Paullinia cupana, semilla), Kelp (Laminaria fruitescens, tallo), Espirulina (Spirulina maxima, alga entera), Chlorella (Chlorella vulgaris, alga entera), Trigo (Triticum sp., brotes verdes), Perejil (Petroselinum sativum, hoja), Suma (Pfaffia paniculata, raíz) y Manzanilla (Matricaria chamomilla, inflorescencias).',
        price: 3650,
      }
    },
    'omniplusbote': {
      name: 'Omniplus',
      id: 'qmxz4dxlq9',
      image: '/images/products/omniplus_bote.png',
      description: {
        content: 'Bote de 940ml',
        flavor: 'Frutas',
        ingredients: 'Vitamina A, Vitamina C, Vitamina E, Vitamina D, Tiamina B1, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Cafeína, Vitamina B12, Biotina, Zinc, Selenio, Polinicotinato de Cromo, Magnesio, Manganeso, Cobre, Calcio, Fructosa, Gel de Aloe (Aloe vera), Extracto de Schizandra (Schisandra chinesis, fruto), Gotu Cola (Centella asiatica, planta), Nuez de Cola (Cola nitida, semilla), Guaran á (Paullinia cupana, semilla), Kelp (Laminaria fruitescens, tallo), Espirulina (Spirulina maxima, alga entera), Chlorella (Chlorella vulgaris, alga entera), Trigo (Triticum sp., brotes verdes), Perejil (Petroselinum sativum, hoja), Suma (Pfaffia paniculata, raíz) y Manzanilla (Matricaria chamomilla, inflorescencias).',
        price: 3590,
      }
    },
    'omniplussupreme': {
      name: 'Omniplus Supreme',
      id: 's9omfblcq2',
      image: '/images/products/omniplus_caja_s.png',
      description: {
        content: 'Caja de 30 sobres de 17g (510g)',
        flavor: 'Frutas',
        ingredients: 'Vitamina A, Vitamina C, Vitamina E, Vitamina D, Tiamina B1, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Cafeína, Vitamina B12, Biotina, Zinc, Selenio, Polinicotinato de Cromo, Magnesio, Manganeso, Cobre, Calcio, Fructosa, Gel de Aloe (Aloe vera), Extracto de Schizandra (Schisandra chinesis, fruto), Gotu Cola (Centella asiatica, planta), Nuez de Cola (Cola nitida, semilla), Guaran á (Paullinia cupana, semilla), Kelp (Laminaria fruitescens, tallo), Espirulina (Spirulina maxima, alga entera), Chlorella (Chlorella vulgaris, alga entera), Trigo (Triticum sp., brotes verdes), Perejil (Petroselinum sativum, hoja), Suma (Pfaffia paniculata, raíz) y Manzanilla (Matricaria chamomilla, inflorescencias).',
        price: 3710,
      }
    },
    'omniviu': {
      name: 'Omniviu Supreme',
      id: 'zbpxcedlyz',
      image: '/images/products/omniviu_caja_s.png',
      description: {
        content: 'Caja de 30 sobres de 5g (150g)',
        flavor: 'Moras (Endulzado con Stevia)',
        ingredients: 'Vitamina A, Vitamina C, Vitamina E, Luteína, Zeaxantina, Omega 3 de Cadena Larga de Origen Marino (DHA), Extracto de Arándano (Vaccinium mytrillus), Extracto de Grosella Negra (Ribes nigrum), Extracto de Flor de Jamaica (Hibiscus sabdariffa L.) y Extracto de Uva (Vitis vinifera L.).',
        price: 3320,
      }
    },
    'onecmix': {
      name: 'One C Mix Plus',
      id: 'r1y8of8rkx',
      image: '/images/products/one_c_mix_plus.png',
      description: {
        content: 'Caja de 30 sobres de 5g (150g)',
        flavor: 'Mango Verde',
        ingredients: 'Vitamina A, Vitamina C, Calcio, Vitamina D, Vitamina E, Tiamina B1, Riboflavina B2, Niacina B3, Piridoxina B6, Ácido Fólico B9, Vitamina B12, Yodo, Zinc, Cobre, Manganeso, Polinicotinato de Cromo, Biotina, Ácido Pantoténico B5, Vitamina K, Molibdeno, Selenio, Betacaroteno, Cisteína, Taurina, Glutatión.',
        price: 2540,
      }
    },
    'powermaker': {
      name: 'Power Maker',
      id: 'wtw41dsipr',
      image: '/images/products/power_maker_bote.png',
      description: {
        content: 'Bote de 524g',
        flavor: 'Naranja',
        ingredients: 'Vitamina C, Vitamina E, Ácido Pantoténico B5, Calcio, Zinc, Cobre, Polinicotinato de Cromo, Colina, Arginina, Boro, Glicina y Taurina.',
        price: 4520,
      }
    },
    'powermakersupreme': {
      name: 'Power Maker Supreme',
      id: 'i1q6k4ikb6',
      image: '/images/products/power_maker_caja_s.png',
      description: {
        content: 'Contenido: Caja de 30 sobres de 10g (300g)',
        flavor: 'Naranja (Endulzado de Stevia)',
        ingredients: 'Vitamina C, Vitamina E, Ácido Pantoténico B5, Calcio, Zinc, Cobre, Polinicotinato de Cromo, Colina, Arginina, Boro, Glicina y Taurina.',
        price: 4610,
      }
    },
    'starbien': {
      name: 'Starbien',
      id: 'fcvkjnfb79',
      image: '/images/products/starbien_caja.png',
      description: {
        content: 'Caja de 30 sobres de 20.5g (615g)',
        flavor: 'Mandarina',
        ingredients: 'Vitamina C, Vitamina E, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Ácido Fólico B9, Vitamina B12, Zinc, Cobre, Polinicotinato de Cromo, Fructosa y Extracto de Fibra de Manzana (Malus sylvestris, fruto).',
        price: 2360,
      }
    },
    'supermixchocolate': {
      name: 'Super Mix Chocolate',
      id: 'e53d4r3hb8',
      image: '/images/products/super_mix_chocolate.png',
      description: {
        content: 'Doypack de 600g',
        flavor: 'Chocolate',
        ingredients: 'Vitamina A, Vitamina C, Calcio, Hierro, Vitamina D, Vitamina E, Tiamina B1, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Ácido Fólico B9, Vitamina B12, Fósforo, Yodo, Magnesio, Zinc, Cobre, Manganeso, Biotina, Molibdeno, Selenio, L-Carnitina, Aislado de Proteína de Soja, Inulina de Agave, Aceite de Canola (brassica campestris), Salvado de Maíz (Zea mays, Cascarilla), Ácido Gaso Omega 3 de Cadena Larga de Origen Marino (Schizochytrium sp, Alga), Fibra de Avena (Avena sativa, Cascarilla), Fibra de Soja (Glycine hispida, Pulpa de Frijol de Soja), Lactobacillus acidophillus y Lactobacillus casei, y Polinicotinato de Cromo.',
        price: 3980,
      }
    },
    'supermixsupreme': {
      name: 'Super Mix Supreme',
      id: 'gtfs2lkmm8',
      image: '/images/products/super_mix_vainilla_caja_s.png',
      description: {
        content: 'Caja de 30 sobres de 17g (510g)',
        flavor: 'Vainilla',
        ingredients: 'Vitamina A, Vitamina C, Calcio, Hierro, Vitamina D, Vitamina E, Tiamina B1, Riboflavina B2, Niacina B3, Ácido Pantoténico B5, Piridoxina B6, Ácido Fólico B9, Vitamina B12, Fósforo, Yodo, Magnesio, Zinc, Cobre, Manganeso, Biotina, Molibdeno, Selenio, L-Carnitina, Aislado de Proteína de Soja, Inulina de Agave, Aceite de Canola (brassica campestris), Salvado de Maíz (Zea mays, Cascarilla), Ácido Gaso Omega 3 de Cadena Larga de Origen Marino (Schizochytrium sp, Alga), Fibra de Avena (Avena sativa, Cascarilla), Fibra de Soja (Glycine hispida, Pulpa de Frijol de Soja), Lactobacillus acidophillus y Lactobacillus casei, y Polinicotinato de Cromo.',
        price: 4280,
      }
    },
    // 'thermogencoffeebote': {
    //   name: 'Thermogen Coffee',
    //   id: 'rk2squ71zw',
    //   image: '/images/products/thermogen_coffee_bote.png',
    //   description: {
    //     content: 'Bote de 420g',
    //     flavor: 'Café',
    //     ingredients: 'Polinicotinato de Cromo, Mezcla Especial de Cafés (Coffea arabica, Coffea canephora).',
    //     price: 1480,
    //   }
    // },
    'thermogencoffeecaja': {
      name: 'Thermogen Coffee',
      id: 'zwerv8ui7e',
      image: '/images/products/thermogen_coffee_caja.png',
      description: {
        content: 'Caja de 30 sobres de 12g (360g)',
        flavor: 'Café',
        ingredients: 'Polinicotinato de Cromo, Mezcla Especial de Cafés (Coffea arabica, Coffea canephora).',
        price: 2360,
      }
    },
    'thermogentealimon': {
      name: 'Thermogen Tea Limon Supreme',
      id: 'w9as4biz39',
      image: '/images/products/thermogen_limon_caja_s.png',
      description: {
        content: 'Caja de 30 sobres de 7.5g (225g)',
        flavor: 'Limón (Endulzado de Stevia)',
        ingredients: 'Polinicotinato de Cromo y Extracto de Té Negro (Camellia sinensis).',
        price: 2670,
      }
    },
    'thermogenteamaracuya': {
      name: 'Thermogen Tea Maracuyá Supreme',
      id: 'euayazcur0',
      image: '/images/products/thermogen_maracuya_caja_s.png',
      description: {
        content: 'Caja de 30 sobres de 7.5g (225g)',
        flavor: 'Maracuyá (Endulzado de Stevia)',
        ingredients: 'Cafeína, L-Carnitina, L-Tirosina, Extracto de Té Negro (Camellia sinensis), Extracto de Café Verde (Coffea canephora robusta Pierre), Hojas de Menta',
        price: 4030,
      }
    },
    'uzo': {
      name: 'Uzo Supreme',
      id: 'eurerg4ur0',
      image: '/images/products/uzo_caja_s.png',
      description: {
        content: 'Caja de 30 sobres de 8g (240g)',
        flavor: 'Vainilla Francesa',
        ingredients: 'Vitamina E, Niacina B3, Selenio, Proteina de Soja, Fibra de Avena (Avena sativa), Carboximetil Celulosa, Celulosa Microcristalina y Polvo de Salvado de Arroz.',
        price: 6990,
      }
    },
    'acondicionador': {
      name: 'Acondicionador con extractos herbales',
      id: '9pEB9HL8o3',
      image: '/images/products/acondicionador_con_extractos_herbales.webp',
      description: {
        content: 'Bote de 240ml',
        ingredients: 'Enriquecido con extracto de Omniplus y trigo hidrolizado.',
        price: 910,
      }
    },
    'balsamo': {
      name: 'Bálsamo labial OMNIPLUS FPS 15',
      id: 'Tof3MIgolU',
      image: '/images/products/balsamo_labial_omniplus_fps_15.webp',
      description: {
        content: '8g',
        ingredients: 'Extracto de omniplus, aceite de coco, manteca de murumuru y karité.',
        price: 1025,
      }
    },
    'cosmetiquera': {
      name: 'Cosmetiquera SEYTÚ',
      id: 'Zw9VH2ssxx',
      image: '/images/products/cosmetiquera_seytu.webp',
      description: {
        content: 'La nueva cosmetiquera SEYTÚ esta especialmente diseñada para ofrecerte la forma más practica de llevar tus productos a todos lados, de una forma ordenada y ergonómica, ya que podrás adaptar sus compartimentes internos a tus necesidades.',
        ingredients: '',
        price: 2216,
      }
    },
    'cremademanosmanzanapera': {
      name: 'Crema de manos antibacterial Manzana-Pera',
      id: 'cHyS2kJVQX',
      image: '/images/products/crema_de_manos_antibaterial_manzana_pera.webp',
      description: {
        content: '60ml; Fragancia: Manzana-Pera',
        ingredients: 'Enriquecida con hialurónato de sodio y Manteca de Karité.',
        price: 359,
      }
    },
    'cremademanossandiamelon': {
      name: 'Crema de manos antibacterial Sandía-Melón',
      id: 'pZFjc4wYm2',
      image: '/images/products/crema_de_manos_anti_baterial_sandia_melon.webp',
      description: {
        content: '60ml; Fragancia: Sandía-Melón',
        ingredients: 'Enriquecida con hialurónato de sodio y Manteca de Karité.',
        price: 359,
      }
    },
    'cremademanosvainilla': {
      name: 'Crema de manos antibacterial Vainilla',
      id: 'bfIqDorv12',
      image: '/images/products/crema_de_manos__antibaterial_vainilla.webp',
      description: {
        content: '60ml; Fragancia: Vainilla',
        ingredients: 'Enriquecida con hialurónato de sodio y Manteca de Karité.',
        price: 359,
      }
    },
    'cremafacialdedia': {
      name: 'Crema facial con protección solar',
      id: '9wRyV9WZMq',
      image: '/images/products/crema_facial_con_proteccion_solar.webp',
      description: {
        content: '50g',
        ingredients: 'Enriquecida con manteca de karité, extracto de ginseng y vitamina E. Contiene una rica variedad de proteínas y extractos hidrolizados como trigo, soya, maíz, avena y semilla de uva.',
        price: 2210,
      }
    },
    'cremafacialdenoche': {
      name: 'Crema facial de noche',
      id: 'yP3Jo2XV8Z',
      image: '/images/products/crema_facial_denoche.webp',
      description: {
        content: '50g',
        ingredients: 'Enriquecida con té verde, vitaminas del complejo B, A, C y E ricas como antioxidantes y regeneradores.',
        price: 2210,
      }
    },
    'cremanutritivadedia': {
      name: 'Crema nutritiva de día para pieles maduras',
      id: 'v8VNUOGisW',
      image: '/images/products/crema_nutritiva_de_dia_para_pieles_maduras.webp',
      description: {
        content: '45g',
        ingredients: 'Enriquecida con vitaminas A, E y C, así como extracto de soya, té verde, aceite de girasol, ubiquinona y ceramidas.',
        price: 4200,
      }
    },
    'cremanutritivadenoche': {
      name: 'Crema nutritiva de noche para pieles maduras',
      id: '5JmI4fM0F5',
      image: '/images/products/crema_nutritiva_de_noche_para_pieles_madura.webp',
      description: {
        content: '45g',
        ingredients: 'Enriquecida con coenzima Q10, vitaminas E y C, manteca de Karité, aceite de maíz y ceramidas.',
        price: 4200,
      }
    },
    'cremaprotectorasolar': {
      name: 'Crema protectora solar FPS 50',
      id: 'hC53XR5LxB',
      image: '/images/products/crema_protectora_solar_fps_50.webp',
      description: {
        content: '150ml',
        ingredients: 'Enriquecida con aloe vera, proteína de trigo y pantenol.',
        price: 2810,
      }
    },
    'delineadorliquido': {
      name: 'Delineador líquido para ojos mate',
      id: 'uzUNaYYUgP',
      image: '/images/products/delineador_liquido_para_ojos_mate.webp',
      description: {
        content: '25ml; Fórmula de larga duración. Resistente al agua. Acabado mate. Alta adherencia en climas húmedos y cálidos.',
        ingredients: '',
        price: 1460,
      }
    },
    'desmaquillanteparaojos': {
      name: 'Desmaquillante para ojos',
      id: 'xFyj5Hjvhl',
      image: '/images/products/desmaquillante_para_ojos.webp',
      description: {
        content: '80ml',
        ingredients: 'Extracto de pepino, aloe vera, extracto de portuluca.',
        price: 1085,
      }
    },
    'espumalimpiadorafacial': {
      name: 'Espuma limpiadora facial',
      id: 'dsPuGNtU3w',
      image: '/images/products/espuma_facial.webp',
      description: {
        content: '150ml',
        ingredients: 'Extracto de Aloe vera, Moringa y algas marinas.',
        price: 1875,
      }
    },
    'exfoliantefacial': {
      name: 'Exfoliante facial con extracto de ginseng',
      id: 'foON0tZdfG',
      image: '/images/products/exfoliante_facial.webp',
      description: {
        content: '90ml',
        ingredients: 'Extracto de Ginseng y hamamelis.',
        price: 1530,
      }
    },
    'fraganciaforher': {
      name: 'Fragancia for her',
      id: 'jdEQZAjFeH',
      image: '/images/products/fragancia_for_her.webp',
      description: {
        content: '100ml',
        ingredients: 'EDT (eau de toilette) Duración aproximada de aroma hasta por 6 horas.',
        price: 3690,
      }
    },
    'fraganciaforhim': {
      name: 'Fragancia for him',
      id: 'LSavpM8h0M',
      image: '/images/products/fragancia_for_him.webp',
      description: {
        content: '100ml',
        ingredients: 'EDT (eau de toilette) Duración aproximada de aroma hasta por 6 horas.',
        price: 3690,
      }
    },
    'kitseytu': {
      name: 'KIT SEYTÚ 19D',
      id: 'fN0mKsafwq',
      image: '/images/products/kit_seytu_19d.webp',
      description: {
        content: 'Kit de inicio, herramienta que te ayudará con tus primeros pasos en tu negocio independiente Seytú.',
        ingredients: '',
        price: 1949,
      }
    },
    'labialhidratantepurered': {
      name: 'Labial hidratante Pure Red',
      id: 'RRE6G7AbzQ',
      image: '/images/products/labial_hidratante_pure_red.webp',
      description: {
        content: '3.7g',
        ingredients: 'Manteca de karité y vitamina E.',
        price: 1180,
      }
    },
    'labialhidratanteraspberry': {
      name: 'Labial hidratante Raspberry',
      id: 'xkT5jRQUgw',
      image: '/images/products/labial_hidratante_raspberry.webp',
      description: {
        content: '3.7g',
        ingredients: 'Manteca de karité y vitamina E.',
        price: 1180,
      }
    },
    'labialhidratanterosey': {
      name: 'Labial hidratante Rosey',
      id: 'AoPGp8AmgW',
      image: '/images/products/labial_hidratante_rosey.webp',
      description: {
        content: '3.7g',
        ingredients: 'Manteca de karité y vitamina E.',
        price: 1180,
      }
    },
    'labialhidratantesilverrose': {
      name: 'Labial hidratante Silver Rose',
      id: 'LS1CT0u2TP',
      image: '/images/products/labial_hidratante_silver_rose.webp',
      description: {
        content: '3.7g',
        ingredients: 'Manteca de karité y vitamina E.',
        price: 1180,
      }
    },
    'labialhidratantewineberry': {
      name: 'Labial hidratante Wine Berry',
      id: 'TAoFkEQP5i',
      image: '/images/products/labial_hidratante_wine_berry.webp',
      description: {
        content: '3.7g',
        ingredients: 'Manteca de karité y vitamina E.',
        price: 1180,
      }
    },
    'labialliquidonairobi': {
      name: 'Labial líquido mate Nairobi',
      id: '1X773lTTGl',
      image: '/images/products/labial_liquido_mate_nairobi.webp',
      description: {
        content: '6g',
        ingredients: 'Cera microcristalina hidrogenada (cera), acetato de tocoferilo, extracto de argania spinosa.',
        price: 1855,
      }
    },
    'labialliquidomasai': {
      name: 'Labial líquido mate Masai',
      id: '2YXW8rjIsY',
      image: '/images/products/labial_liquido_mate_masai.webp',
      description: {
        content: '6g',
        ingredients: 'Cera microcristalina hidrogenada (cera), acetato de tocoferilo, extracto de argania spinosa.',
        price: 1855,
      }
    },
    'labialliquidosamburu': {
      name: 'Labial líquido mate Samburu',
      id: 'Yyyx2Wf0bJ',
      image: '/images/products/labial_liquido_mate_samburu.webp',
      description: {
        content: '6g',
        ingredients: 'Cera microcristalina hidrogenada (cera), acetato de tocoferilo, extracto de argania spinosa.',
        price: 1855,
      }
    },
    'labialliquidokalahari': {
      name: 'Labial líquido mate Kalahari',
      id: 'VLwFrBQvcb',
      image: '/images/products/labial_liquido_mate_kalahari.webp',
      description: {
        content: '6g',
        ingredients: 'Cera microcristalina hidrogenada (cera), acetato de tocoferilo, extracto de argania spinosa.',
        price: 1855,
      }
    },
    'lapizdelineadorcafe': {
      name: 'Lápiz delineador de ojos café',
      id: 'G9vurbESHn',
      image: '/images/products/lapiz_delineador_cafe.webp',
      description: {
        content: '1.2g; Larga duración, resistente al agua, color intenso en acabado mate, textura cremosa de fácil aplicación.',
        ingredients: '',
        price: 1605,
      }
    },
    'lapizdelineadornegro': {
      name: 'Lápiz delineador de ojos negro',
      id: 'wRLD7QAgFy',
      image: '/images/products/lapiz_delineador_negro.webp',
      description: {
        content: '1.2g; Larga duración, resistente al agua, color intenso en acabado mate, textura cremosa de fácil aplicación.',
        ingredients: '',
        price: 1605,
      }
    },
    'locionburdeos': {
      name: 'Loción refrescante BURDEOS',
      id: 'cuUfblwhnn',
      image: '/images/products/locion_refrecante_burdeo.webp',
      description: {
        content: '83ml',
        ingredients: '',
        price: 1850,
      }
    },
    'locionparis': {
      name: 'Loción refrescante PARÍS',
      id: 'K8Dy7EhbMS',
      image: '/images/products/locion_refrecante_paris.webp',
      description: {
        content: '83ml',
        ingredients: '',
        price: 1850,
      }
    },
    'locioncannes': {
      name: 'Loción refrescante CANNES',
      id: 'SUc9j2fO5e',
      image: '/images/products/locion_refrescante_cannes.webp',
      description: {
        content: '83ml',
        ingredients: '',
        price: 1850,
      }
    },
    'maquillajecompactocreamynatural': {
      name: 'Maquillaje Compacto 2 en 1 Creamy Natural',
      id: 'EpCr0HTDPX',
      image: '/images/products/maquillaje_compacto_2_en_1_cremy_natural.webp',
      description: {
        content: '8.5g; Su fórmula de origen mineral colabora a obtener una cobertura perfecta para todo tipo de piel, brindándole una apariencia homogénea, mate y natural.',
        ingredients: '',
        price: 2330,
      }
    },
    'maquillajecompactofair': {
      name: 'Maquillaje Compacto 2 en 1 Fair',
      id: 'tBOaAYZeOx',
      image: '/images/products/maquillaje_compacto_2_en_1_fair.webp',
      description: {
        content: '8.5g; Su fórmula de origen mineral colabora a obtener una cobertura perfecta para todo tipo de piel, brindándole una apariencia homogénea, mate y natural.',
        ingredients: '',
        price: 2330,
      }
    },
    'maquillajecompactolightsand': {
      name: 'Maquillaje Compacto 2 en 1 Light Sand',
      id: 'Zi9CwI1IjI',
      image: '/images/products/maquillaje_compacto_2_en_1_light_sand.webp',
      description: {
        content: '8.5g; Su fórmula de origen mineral colabora a obtener una cobertura perfecta para todo tipo de piel, brindándole una apariencia homogénea, mate y natural.',
        ingredients: '',
        price: 2330,
      }
    },
    'maquillajecompactonaturalbeige': {
      name: 'Maquillaje Compacto 2 en 1 Natural Beige',
      id: 'r909q4iWxZ',
      image: '/images/products/maquillaje_compacto_2_en_1_natural_beige.webp',
      description: {
        content: '8.5g; Su fórmula de origen mineral colabora a obtener una cobertura perfecta para todo tipo de piel, brindándole una apariencia homogénea, mate y natural.',
        ingredients: '',
        price: 2330,
      }
    },
    'maquillajecompactosofthoney': {
      name: 'Maquillaje Compacto 2 en 1 Soft Honey',
      id: 'u0Az8Tfmjh',
      image: '/images/products/maquillaje_compacto_2_en_1_soft_honey.webp',
      description: {
        content: '8.5g; Su fórmula de origen mineral colabora a obtener una cobertura perfecta para todo tipo de piel, brindándole una apariencia homogénea, mate y natural.',
        ingredients: '',
        price: 2330,
      }
    },
    'maquillajecompactosunbeige': {
      name: 'Maquillaje Compacto 2 en 1 Sun Beige',
      id: '3tXUy9iyJ4',
      image: '/images/products/maquillaje_compacto_2_en_1_sun_beige.webp',
      description: {
        content: '8.5g; Su fórmula de origen mineral colabora a obtener una cobertura perfecta para todo tipo de piel, brindándole una apariencia homogénea, mate y natural.',
        ingredients: '',
        price: 2330,
      }
    },
    'maquillajecompactowarmbeige': {
      name: 'Maquillaje Compacto 2 en 1 Warm Beige',
      id: 'r2zboiDQut',
      image: '/images/products/maquillaje_compacto_2_en_1_warm_beige.webp',
      description: {
        content: '8.5g; Su fórmula de origen mineral colabora a obtener una cobertura perfecta para todo tipo de piel, brindándole una apariencia homogénea, mate y natural.',
        ingredients: '',
        price: 2330,
      }
    },
    'mascaraparapestania': {
      name: 'Mascara para pestañas',
      id: 'Jj3hRGNh4H',
      image: '/images/products/mascara_para_pestania.webp',
      description: {
        content: '6.5g; A prueba de agua. Negro intenso de alta pigmentación. Cepillo esférico anti grumos. Adicionada con activos que colaboran a fortalecer las pestañas.',
        ingredients: '',
        price: 1560,
      }
    },
    'mascaraparapestaniawsb': {
      name: 'Máscara pestañas WSB Flawless Lashes',
      id: 'J35hRgNh4H',
      image: '/images/products/mascara_para_pestania_wsb.png',
      description: {
        content: '6ml; Máxima definición y volumen. Fórmula de larga duración y resistencia al sudor. Efecto "peel off", remueve fácilmente con agua tibia sin manchar la piel. Con activos que aseguran la hidratación y protección de sus pestañas.',
        ingredients: '',
        price: 960,
      }
    },
    'maquillajeliquidogoldenbeige': {
      name: 'Maquillaje líquido UP+ Golden Beige',
      id: 'RpmmKY37By',
      image: '/images/products/maquillaje_liquido_up_golden_beige.webp',
      description: {
        content: '30ml',
        ingredients: 'Colágeno hidrolizado, aceite de jojoba, ácido hialurónico, serina, arginina y arolina e hidrolizado de trigo y soya.',
        price: 2410,
      }
    },
    'maquillajeliquidonudebeige': {
      name: 'Maquillaje líquido UP+ Nude Beige',
      id: 'Bv9gI9dqYB',
      image: '/images/products/maquillaje_liquido_up_nude_beige.webp',
      description: {
        content: '30ml',
        ingredients: 'Colágeno hidrolizado, aceite de jojoba, ácido hialurónico, serina, arginina y prolina e hidrolizado de trigo y soya.',
        price: 2410,
      }
    },
    'maquillajeliquidonaturalbeige': {
      name: 'Maquillaje líquido UP+ Natural Beige',
      id: 'DV2xuEYt1x',
      image: '/images/products/maquillaje_liquido_up_natural_beige.webp',
      description: {
        content: '30ml',
        ingredients: 'Colágeno hidrolizado, aceite de jojoba, ácido hialurónico, serina, arginina y prolina e hidrolizado de trigo y soya.',
        price: 2410,
      }
    },
    'maquillajeliquidofp15fair': {
      name: 'Maquillaje líquido UP+ FPS15 Fair',
      id: 'wml0Hxr0kq',
      image: '/images/products/mascarilla_liquido_up_fps_15_fair.webp',
      description: {
        content: '30ml; Base de maquillaje con acabado mate, de larga duración y cobertura construible, que corregirá el tono de tu piel mientras la protege con sus activos anti edad, humectantes, antioxidantes y protección solar FPS 15.',
        ingredients: '',
        price: 2490,
      }
    },
    'maquillajeliquidofp15softhoney': {
      name: 'Maquillaje líquido UP+ FPS15 Soft Honey',
      id: 'eXMTQjkaLZ',
      image: '/images/products/mascarilla_liquido_up_fps_15_soft_honey.webp',
      description: {
        content: '30ml; Base de maquillaje con acabado mate, de larga duración y cobertura construible, que corregirá el tono de tu piel mientras la protege con sus activos anti edad, humectantes, antioxidantes y protección solar FPS 15.',
        ingredients: '',
        price: 2490,
      }
    },
    'maquillajeliquidofp15warmbeige': {
      name: 'Maquillaje líquido UP+ FPS15 Warm Beige',
      id: 'rUh9jVmMQp',
      image: '/images/products/mascarilla_liquido_up_fps_15_warm_beige.webp',
      description: {
        content: '30ml; Base de maquillaje con acabado mate, de larga duración y cobertura construible, que corregirá el tono de tu piel mientras la protege con sus activos anti edad, humectantes, antioxidantes y protección solar FPS 15.',
        ingredients: '',
        price: 2490,
      }
    },
    'maquillajeliquidofp15creamynatural': {
      name: 'Maquillaje Líquido UP+ FPS15 Creamy Natural',
      id: 'oVWnIhRlKV',
      image: '/images/products/mascarilla_liquido_up_fps_15_creamy_natural.webp',
      description: {
        content: '30ml; Base de maquillaje con acabado mate, de larga duración y cobertura construible, que corregirá el tono de tu piel mientras la protege con sus activos anti edad, humectantes, antioxidantes y protección solar FPS 15.',
        ingredients: '',
        price: 2490,
      }
    },
    'maquillajeliquidofp15sunbeige': {
      name: 'Maquillaje líquido UP+ FPS15 Sun Beige',
      id: 'FE9kokwcQL',
      image: '/images/products/mascarilla_liquido_up_fps_15_sun_beige.webp',
      description: {
        content: '30ml; Base de maquillaje con acabado mate, de larga duración y cobertura construible, que corregirá el tono de tu piel mientras la protege con sus activos anti edad, humectantes, antioxidantes y protección solar FPS 15.',
        ingredients: '',
        price: 2490,
      }
    },
    'maquillajeliquidofp15lightsand': {
      name: 'Maquillaje líquido UP+ FPS15 Light Sand',
      id: 'zGROA7P0pO',
      image: '/images/products/mascarilla_liquido_up_fps_15_light_sand.webp',
      description: {
        content: '30ml; Base de maquillaje con acabado mate, de larga duración y cobertura construible, que corregirá el tono de tu piel mientras la protege con sus activos anti edad, humectantes, antioxidantes y protección solar FPS 15.',
        ingredients: '',
        price: 2490,
      }
    },
    'omniplusgelpremium': {
      name: 'Omniplus gel premium',
      id: 'YE1AL5Hwcx',
      image: '/images/products/omniplus_gel.webp',
      description: {
        content: '30g',
        ingredients: 'Extractos naturales como: levadura, hoja de hlivo, árnica y frutas silvestres, así como aceite de jojoba.',
        price: 1710,
      }
    },
    'polvoiluminadordesertrose': {
      name: 'Polvo Iluminador Desert Rose',
      id: 'Y57m7uh9cK',
      image: '/images/products/polvo_iluminador_desert_rose.webp',
      description: {
        content: '5g',
        ingredients: '',
        price: 880,
      }
    },
    'polvoiluminadordesertsand': {
      name: 'Polvo iluminador Desert Sand',
      id: 'BVsHP39pp2',
      image: '/images/products/polvo_iluminador_desert_sand.webp',
      description: {
        content: '5g',
        ingredients: '',
        price: 880,
      }
    },
    'polvoiluminadordesertsunset': {
      name: 'Polvo Iluminador Desert Sunset',
      id: 'V1YbmFz4Zx',
      image: '/images/products/polvo_iluminador_desert_sunset.webp',
      description: {
        content: '5g',
        ingredients: '',
        price: 880,
      }
    },
    'ruborpetal': {
      name: 'Rubor compacto Petal',
      id: 'qDJrLqoAZL',
      image: '/images/products/rubor_compacto_petal.webp',
      description: {
        content: '4.5g',
        ingredients: 'Ingredientes minerales.',
        price: 2900,
      }
    },
    'rubornectar': {
      name: 'Rubor compacto Nectar',
      id: 'WWT4aF9j0U',
      image: '/images/products/rubor_compacto_nectar.webp',
      description: {
        content: '4.5g',
        ingredients: 'Ingredientes minerales.',
        price: 2900,
      }
    },
    'setbrochasprofesionales': {
      name: 'Set de brochas profesionales',
      id: 'zulXbuerNj',
      image: '/images/products/set_de_brocha_profesionales.webp',
      description: {
        content: 'Set de brochas profesionales (9 piezas); Tu rostro merece maquillarse con este maravilloso set de brochas, ya que, gracias a su diversidad de brochas, tu rostro lucirá un maquillaje perfecto. El Set de Brochas incluye: • Brocha para ceja • Brocha para labios • Brocha para corrector • Brocha para rubor • Brocha para polvo • Brocha para base • Brocha para sombra • Brocha difuminadora • Brocha para delineador',
        ingredients: '',
        price: 5140,
      }
    },
    'shampoo': {
      name: 'Shampoo con extractos herbales',
      id: 'k2s6vlRcwV',
      image: '/images/products/shampoo_con_extractos_herles.webp',
      description: {
        content: '240ml',
        ingredients: 'Enriquecido con extracto de Omniplus, pantenol y aloe vera.',
        price: 910,
      }
    },
    'suerofacialdehidratacion': {
      name: 'Suero facial de hidratación profunda con aloe vera',
      id: 'jKgFxKPRjZ',
      image: '/images/products/suero_facial_de_hidratacion.webp',
      description: {
        content: '30ml',
        ingredients: 'Enriquecido con péptidos precursores del colágeno y ácido hialurónico.',
        price: 2080,
      }
    },
    'sueroparacontornodeojos': {
      name: 'Suero para contorno de ojos de hidratación profunda con aloe vera',
      id: '6ghzKuvK5w',
      image: '/images/products/suero_para_contorno_de_ojos.webp',
      description: {
        content: '14ml',
        ingredients: 'Enriquecido con soya, hialuronato de sodio y péptido.',
        price: 1235,
      }
    },
    'mascarillareparadoracapilar': {
      name: 'Mascarilla reparadora capilar',
      id: 'rXpV4tSHiW',
      image: '/images/products/mascarilla_reparadora_capilar.webp',
      description: {
        content: '250ml',
        ingredients: 'Enriquecida con queratina hidrolizada, extracto de algas marinas e inula.',
        price: 1695,
      }
    },
  },
  countries: {
    'argentina': {
      name: 'Argentina',
      id: 'bV6e6ScaMk',
      image: '/images/flags/ar.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=ARG&lang=es',
    },
    'belgica': {
      name: 'Belgica',
      id: 'ruEisKEBRY',
      image: '/images/flags/be.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=es'
    },
    'bolivia': {
      name: 'Bolivia',
      id: 'XnhDhswKja',
      image: '/images/flags/bo.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=2'
    },
    'brasil': {
      name: 'Brasil',
      id: 'HDGMCpsxHL',
      image: '/images/flags/br.svg',
      link: 'https://portal.omnilife.com/cadastro?distributor_code=54100361TBZ&country_code=3'
    },
    'chile': {
      name: 'Chile',
      id: 'wmREswdyGy',
      image: '/images/flags/cl.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=4'
    },
    'colombia': {
      name: 'Colombia',
      id: 'qLNxvwdw8f',
      image: '/images/flags/co.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=5'
    },
    'costarica': {
      name: 'Costa Rica',
      id: 'ezzD9FCCVo',
      image: '/images/flags/cr.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=6'
    },
    'ecuador': {
      name: 'Ecuador',
      id: 'eNZtSfAVrX',
      image: '/images/flags/ec.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=ECU'
    },
    'elsalvador': {
      name: 'El Salvador',
      id: 'ogTvtB3WYI',
      image: '/images/flags/sv.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=SAL'
    },
    'espana': {
      name: 'España',
      id: '1RCTjz3017',
      image: '/images/flags/es.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=ESP'
    },
    'france': {
      name: 'France',
      id: 'EMDUzxW11L',
      image: '/images/flags/fr.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en'
    },
    'alemania': {
      name: 'Alemania',
      id: 'XyVi5ZYY6d',
      image: '/images/flags/de.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en'
    },
    'guatemala': {
      name: 'Guatemala',
      id: 'E7xr4rxlWy',
      image: '/images/flags/gt.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=10'
    },
    'italia': {
      name: 'Italia',
      id: 'rzPaeEyte7',
      image: '/images/flags/it.svg',
      link: 'https://portal.omnilife.com/iscrizione?distributor_code=54100361TBZ&country_code=&lang=it'
    },
    'mexico': {
      name: 'México',
      id: 'cEWo9MxEjY',
      image: '/images/flags/mx.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=12'
    },
    'paisesbajos': {
      name: 'Paises Bajos',
      id: 'hLTv8hpPiE',
      image: '/images/flags/nl.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en'
    },
    'nicaragua': {
      name: 'Nicaragua',
      id: 'g9ORnJPwHU',
      image: '/images/flags/ni.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=13'
    },
    'panama': {
      name: 'Panamá',
      id: 'kHr86AWyEi',
      image: '/images/flags/pa.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=14'
    },
    'paraguay': {
      name: 'Paraguay',
      id: 'IpQLrGBwFQ',
      image: '/images/flags/py.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=15'
    },
    'peru': {
      name: 'Perú',
      id: 'P0lYNJaEsm',
      image: '/images/flags/pe.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=PER'
    },
    'portugal': {
      name: 'Portugal',
      id: 'blN69OWO3j',
      image: '/images/flags/pt.svg',
      link: 'https://portal.omnilife.com/cadastro?distributor_code=54100361TBZ'
    },
    'republicadeirlanda': {
      name: 'República de Irlanda',
      id: 'E6uTmXwrJi',
      image: '/images/flags/ie.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en'
    },
    'republicadominicana': {
      name: 'República Dominicana',
      id: 'OTyMqNuBH5',
      image: '/images/flags/do.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=DOM'
    },
    'estadosunidos': {
      name: 'Estados Unidos',
      id: 'th7lwH3yGz',
      image: '/images/flags/us.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=USA&lang=es'
    },
    'uruguay': {
      name: 'Uruguay',
      id: 'Z4dAi5LAsg',
      image: '/images/flags/uy.svg',
      link: 'https://portal.omnilife.com/registro?distributor_code=54100361TBZ&country_code=URU'
    },
    'reinounidoinglaterra': {
      name: 'Reino Unido (Inglaterra)',
      id: 'ktLJob4iK4',
      image: '/images/flags/uk.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en'
    },
    'reinounidoirlandadelnorte': {
      name: 'Reino Unido (Irlanda del Norte)',
      id: '2YLY6mxaKv',
      image: '/images/flags/uk.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en'
    },
    'reinounidoescocia': {
      name: 'Reino Unido (Escocia)',
      id: 'Yvv5YpjftX',
      image: '/images/flags/uk.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en'
    },
    'reinounidogales': {
      name: 'Reino Unido (Gales)',
      id: 'OjmIZy9Vyx',
      image: '/images/flags/uk.svg',
      link: 'https://portal.omnilife.com/register?distributor_code=54100361TBZ&country_code=&lang=en'
    },
    'rusia': {
      name: 'Rusia',
      id: 'yCF0hZM2th',
      image: '/images/flags/ru.svg',
      link: 'https://portal.omnilife.com/registaciya?distributor_code=54100361TBZ&country_code=RUS'
    },
  },
  travels: {
    'torredepisa': {
      name: 'Zulema y Pablo en Italia, en el fondo se ve la Torre de Pisa.',
      id: 'jvln1i7rmr',
      image: '/images/travels/zt_pa_pisa.jpg'
    },
    'cruceroenhongkong': {
      name: 'Pablo grabando desde el crucero la ciudad de Hong Kong a lo lejos.',
      id: 'rao7p1h3hx',
      image: '/images/travels/pa_hong_kong_landscape.jpg'
    },
    'cruceroenmar': {
      name: 'Zulema y Pablo en el crucero, detras el Océano Atlantico.',
      id: 'jy4kz2yqiu',
      image: '/images/travels/zt_pa_sea_behind.jpg'
    },
    'jerusalen': {
      name: 'Zulema y en el fondo La Cúpula de la Roca en Jerusalén.',
      id: 'ym10qg5h2p',
      image: '/images/travels/zt_jerusalen_1.jpg'
    },
    'murodeloslamentos': {
      name: 'Zulema en el Muro de los Lamentos en Jerusalén.',
      id: '4kcjzf9mfm',
      image: '/images/travels/zt_muro_lamentos.jpg'
    },
    'dubaifuera': {
      name: 'Zulema y detras los edificios de Sheikh Zayed Grand Mosque en Abu Dhabi.',
      id: 'xie9tj1sen',
      image: '/images/travels/zt_dubai.jpg'
    },
    'dubaidentro': {
      name: 'Zulema y detras los edificios de Sheikh Zayed Grand Mosque en Abu Dhabi.',
      id: 'btdmyrsa4t',
      image: '/images/travels/zt_dubai_3.jpg'
    },
    'cruceroenpuerto': {
      name: 'Pablo y Zulema, detras el crucero Celebrity Millennium.',
      id: 'puloukr43q',
      image: '/images/travels/zt_pa_cruise_behind_2.jpg'
    },
    'cruceroenpuerto2': {
      name: 'Pablo y Zulema, detras el crucero Celebrity Millennium.',
      id: 'k7byi898um',
      image: '/images/travels/zt_pa_cruise_behind.jpg'
    },
    'singapur': {
      name: 'Zulema y detras esta Marina Bay Sands en Singapur.',
      id: 'hvd61ax1aj',
      image: '/images/travels/zt_boat_floating_2.jpg'
    },
    'hongkong': {
      name: 'Zulema en Hong Kong, China.',
      id: '7fxpayoaym',
      image: '/images/travels/zt_hong_kong.jpg'
    },
    'bahamaszulema': {
      name: 'Zulema recibiendo un beso de un delfín en Atlantis Bahamas.',
      id: 'xst8soiudv',
      image: '/images/travels/bahamas_dolphin_zt.jpg'
    },
    'bahamaspablo': {
      name: 'Pablo chocando mano - aleta con un delphin en Atlantis Bahamas.',
      id: 'ozw3eofgss',
      image: '/images/travels/bahamas_dolphin_pa.jpg'
    },
    'bahamasfamilia': {
      name: 'Zulema y Pablo con sus hijos y un delfin en Atlantis Bahamas.',
      id: 'dos0c76hc3',
      image: '/images/travels/bahamas_familia.jpg'
    },
    'bahamasfamilia2': {
      name: 'Zulema y Pablo con sus hijos acariciando a un delfin en Atlantis Bahamas.',
      id: 'je2xyn18pm',
      image: '/images/travels/bahamas_familia_2.jpg'
    },
    'bahamaszulemapablo': {
      name: 'Zulema y Pablo detras el edificio de Atlantis Paradise en Bahamas.',
      id: 'yjw45w6pfr',
      image: '/images/travels/zt_pa_bahamas.jpg'
    },
  }
}

export default data
