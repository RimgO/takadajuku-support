const sessionData = [
    {
        num: "27",
        speaker: "古館さん（コーチングとスタートアップの組織づくり）",
        title: "コーチングとスタートアップの組織づくり",
        description: "外資系IT企業の日本法人をゼロから立ち上げ、8年で業界トップシェアへと導いた古舘さんによる、実体験に基づいた泥臭くも戦略的な起業・経営術。 ",
        link: "1tBw3gKDSEQ_p8DLo9b4jLpcnS5biY--B",
        type: "google-drive"
    },
    {
        num: "26",
        speaker: "東山さん (スタートアップのエクイティファイナンス)",
        title: "スタートアップのエクイティファイナンスについて",
        description: "スタートアップのエクイティファイナンスについて、その仕組みや重要なポイントの解説",
        link: "https://drive.google.com/file/d/1KMOC61Gzb4PyIu4cAY1K_n1zxoJ3MBed/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "25",
        speaker: "岩本さん (企業再生術)",
        title: "上場企業2社代表経験者が語る企業再生術と女性社員の活用法",
        description: "上場企業2社代表経験者が語る企業再生術と女性社員の活用法",
        link: "https://drive.google.com/file/d/11HV3srpq3Lq7YGi69XDigcN5ROzSWCM9/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "24",
        speaker: "武田さん (ファンコミュニティ)",
        title: "ファンコミュニティ",
        description: "※共有なし",
        link: null,
        type: "none"
    },
    {
        num: "23",
        speaker: "中村さん (インフルエンサー事業)",
        title: "TikTokのプロデュースノウハウなど",
        description: "TikTokのプロデュースノウハウ（ライブ配信、ショート動画の企画・撮影・編集）など",
        link: "https://drive.google.com/file/d/128itAXUPN93L0WcIA1R9HacB98ghhdc7/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "22",
        speaker: "夏目さん (脱炭素)",
        title: "カーボンオフセットと健康と自治体ビジネス",
        description: "カーボンオフセットと健康と自治体ビジネス",
        link: "https://drive.google.com/file/d/1dPC3SZd0YtDPKX_yeDWFkVLtVdwoPLRY/view?usp=drive_link",
        type: "google-drive"
    },
    {
        num: "21",
        speaker: "奥山さん",
        title: "八丈島での取り組み",
        description: "※共有準備中",
        link: "https://drive.google.com/file/d/103NDaZNcgYkWciz7qivjvjedIwiemT1a/view?usp=drive_link",
        type: "google-drive"
    },
    {
        num: "20",
        speaker: "北原さん (広告業界)",
        title: "広告のいまとこれから〜メディア、消費者との関係",
        description: "広告のいまとこれから〜メディア、消費者との関係",
        link: "https://drive.google.com/file/d/1-186FeGNcOxCq_8BFdaew2f0GArfRFjB/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "19",
        speaker: "中西さん (半導体業界同行)",
        title: "日本半導体はなぜ30年間負け続けたのか?どのように復活するのか?",
        description: "「日本半導体はなぜ30年間負け続けたのか?どのように復活するのか?」",
        link: "https://drive.google.com/file/d/17Jv4sBxb7hPK-1DjltAdNnFlfQdB3E9g/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "18",
        speaker: "小暮さん",
        title: "※録画なし",
        description: "※録画なし",
        link: null,
        type: "none"
    },
    {
        num: "17",
        speaker: "乗松さん (高速広域WiFi)",
        title: "DX通信株式会社とは/どのようにDX通信に辿り着いたのか",
        description: "多くの企業経験から学んできたこと",
        link: "https://drive.google.com/file/d/1Cf73TYelx9CctCiK8rOeYemnMSP6a5cG/view?usp=drive_link",
        type: "google-drive"
    },
    {
        num: "16",
        speaker: "佐々木しげさん (リベンジポルノ)",
        title: "Shigeのルーツ / “リベンジポルノ撲滅”社会問題",
        description: "“リベンジポルノ撲滅”社会問題を新たなテーマに設定",
        link: "https://drive.google.com/file/d/1K41ve82a1tGT0fIQ8Y2zcnRhvDKfpRXy/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "15",
        speaker: "由利さん (あきらめない経営)",
        title: "24年間企業を率いた経験から「経営者として学んだこと」",
        description: "24年間企業を率いた経験から「経営者として学んだこと」を解説します。",
        link: "https://drive.google.com/file/d/1ZWb00Yrdjkr_VsFj4EZyDVPvNNoJEimX/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "14",
        speaker: "上杉さん (社会貢献)",
        title: "ラオスでの不発弾撤去、社会課題解決を可視化する「actcoin」の運営",
        description: "社会課題解決を可視化する「actcoin」の運営",
        link: "https://drive.google.com/file/d/19nGHLkYfa1QSs2Nm59ZEoeZ0ULzV9KSU/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "13",
        speaker: "葦花さん (お金に愛される方法)",
        title: "お金に愛される私になるためのマインド",
        description: "お金に愛される私になるためのマインド",
        link: "https://drive.google.com/file/d/1_wf45AFOhVKZTVesGXv3H9uC2enyA44w/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "12",
        speaker: "北野さん (カンボジア)",
        title: "カンボジアの今",
        description: "カンボジアの今",
        link: "https://drive.google.com/file/d/1Z3vovRnmye4ZnUnUnF9LgtL2TjTt6heC/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "11",
        speaker: "清水さん (風水) ※非公開",
        title: "開運風水",
        description: "開運風水",
        link: null,
        type: "none"
    },
    {
        num: "10",
        speaker: "仲屋さん (イノベーション)",
        title: "無意識バイアスの外に存在する、イノベーションの素",
        description: "無意識バイアスの外に存在する、イノベーションの素",
        link: "https://drive.google.com/file/d/1tY2MpY2mXeTqKVCcrQC1l3GylO9bPceh/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "9",
        speaker: "福本さん (製造業DX)",
        title: "インダストリー4.0と製造業DX",
        description: "生成AI活用やデータ活用の現在地と課題 ※転載不可",
        link: "https://drive.google.com/file/d/1SeGeRkbnjoKa-kKgKjR8j0ws49tT7qQe/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "8",
        speaker: "宮田さん (滝登り研修)",
        title: "動きを伴うチームビルディング",
        description: "本音・本心で会話が通じるように成る秘訣",
        link: "https://drive.google.com/file/d/1oy5Xn4Jowptojtqm2Sg4JKw4MPyxDRkA/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "7",
        speaker: "山原さん (リーダーシップ)",
        title: "今の時代の共創型リーダーシップとソニー復活にみるパーパス経営",
        description: "〜人と組織はどうしたら成長するか？〜",
        link: "https://drive.google.com/file/d/1hpDtQD_GDeHPiIwI9ui3RuZxR2A5gsO3/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "6",
        speaker: "宮本さん (整体)",
        title: "ビジネス運気を上げる健康法 ※非公開",
        description: "世界のアスリートが認める。整体師が語ります。",
        link: "",
        type: "none"
    },
    {
        num: "5",
        speaker: "長谷川さん (プラットフォーム戦略)",
        title: "プラットフォームビジネスの進化をわかりやすく解説",
        description: "プラットフォームビジネスの進化をわかりやすく解説",
        link: "https://drive.google.com/file/d/1ke6Sf1GxLHBB_3e6bX7Cm5vjns1zbgRd/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "4",
        speaker: "東さん (宇宙事業)",
        title: "宇宙開拓時代におけるプラットフォームビジネス戦略",
        description: "世界を良くする宇宙インフラを作る WARPSPACE社の事業紹介",
        link: "https://drive.google.com/file/d/1jAWelxCCuLoK1OMaQVg72sadeejd5_mT/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "3",
        speaker: "山田さん (外国車整備)",
        title: "好きな事を仕事にする人生 顧客信頼関係を勝ち取る方法を伝授",
        description: "好きな事を仕事にする人生 顧客信頼関係を勝ち取る方法を伝授してもらいます。",
        link: "https://drive.google.com/file/d/1u8fKoHFEyvG_YeMc_ZkcxZ_WsG0iscL6/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "2",
        speaker: "小野さん (メタバースマーケティング)",
        title: "メタバースの実証実験センター",
        description: "目指していること＆応援いただきたいこと",
        link: "https://drive.google.com/file/d/1FjJSuzvNl4ZCvJcpw_ahraW5EB6lut7-/view?usp=sharing",
        type: "google-drive"
    },
    {
        num: "1",
        speaker: "長崎さん (NFT)",
        title: "現代アートとNFTの世界。またWEB3の世界を垣間見る。",
        description: "現代アートとNFTの世界。またWEB3の世界を垣間見る。",
        link: "https://drive.google.com/file/d/12T4xGoPwu6AD2PaWFDTR3NzqVbu_EK83/view?usp=sharing",
        type: "google-drive"
    }
];
