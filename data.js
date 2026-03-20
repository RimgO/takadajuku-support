const sessionData = [
    {
        num: "27",
        speaker: "古館さん",
        title: "第27回 セッション",
        description: "Google Driveから直接再生が可能な第27回アーカイブ。古館さんによるプレゼンテーション。",
        link: "1Afdm5dqX56DJ4NlZvlU3n_IIYF1kacyl",
        type: "google-drive"
    },
    {
        num: "26",
        speaker: "東山さん (スタートアップのエクイティファイナンス)",
        title: "スタートアップのエクイティファイナンスについて",
        description: "スタートアップのエクイティファイナンスについて、その仕組みや重要なポイントの解説",
        link: "1N-ajJrRinwAY1WXT4gTp8HEcetlEeXQ0",
        type: "google-drive"
    },
    {
        num: "25",
        speaker: "岩本さん (企業再生術)",
        title: "上場企業2社代表経験者が語る企業再生術と女性社員の活用法",
        description: "上場企業2社代表経験者が語る企業再生術と女性社員の活用法",
        link: "https://photos.app.goo.gl/9wmTTyiDsiU9pzRi6",
        type: "external"
    },
    {
        num: "24",
        speaker: "武田さん (ファンコミュニティ)",
        title: "※共有なし",
        description: "※共有なし",
        link: null,
        type: "none"
    },
    {
        num: "23",
        speaker: "中村さん (インフルエンサー事業)",
        title: "TikTokのプロデュースノウハウなど",
        description: "TikTokのプロデュースノウハウ（ライブ配信、ショート動画の企画・撮影・編集）など",
        link: "https://photos.app.goo.gl/ChU5hhXqxL6giAwR6",
        type: "external"
    },
    {
        num: "22",
        speaker: "夏目さん (脱炭素)",
        title: "カーボンオフセットと健康と自治体ビジネス",
        description: "カーボンオフセットと健康と自治体ビジネス",
        link: "https://photos.app.goo.gl/PYLUW8oJJWi6BmCU9",
        type: "external"
    },
    {
        num: "21",
        speaker: "奥山さん",
        title: "八丈島での取り組み",
        description: "※共有準備中",
        link: null,
        type: "none"
    },
    {
        num: "20",
        speaker: "北原さん (広告業界)",
        title: "広告のいまとこれから〜メディア、消費者との関係",
        description: "広告のいまとこれから〜メディア、消費者との関係",
        link: "https://photos.app.goo.gl/Nonow37Mq8KCriRdA",
        type: "external"
    },
    {
        num: "19",
        speaker: "中西さん (半導体業界同行)",
        title: "日本半導体はなぜ30年間負け続けたのか?どのように復活するのか?",
        description: "「日本半導体はなぜ30年間負け続けたのか?どのように復活するのか?」",
        link: "https://photos.app.goo.gl/DnnTXuLfkM9MGbTq8",
        type: "external"
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
        link: "https://photos.app.goo.gl/vyzMAGiCtJGfyLbH9",
        type: "external"
    },
    {
        num: "16",
        speaker: "佐藤しげさん (リベンジポルノ)",
        title: "Shigeのルーツ / “リベンジポルノ撲滅”社会問題",
        description: "“リベンジポルノ撲滅”社会問題を新たなテーマに設定",
        link: "https://photos.app.goo.gl/EGRnvTGpex33ZZQ88",
        type: "external"
    },
    {
        num: "15",
        speaker: "由利さん (あきらめない経営)",
        title: "24年間企業を率いた経験から「経営者として学んだこと」",
        description: "24年間企業を率いた経験から「経営者として学んだこと」を解説します。",
        link: "https://www.canva.com/design/DAGRxA22wdI/uoYA1ptm7IYxOAooCvlgIA/edit",
        type: "external"
    },
    {
        num: "14",
        speaker: "上杉さん (社会貢献)",
        title: "ラオスでの不発弾撤去、社会課題解決を可視化する「actcoin」の運営",
        description: "社会課題解決を可視化する「actcoin」の運営",
        link: "https://photos.app.goo.gl/vYBxZaeLrLFku3nEA",
        type: "external"
    },
    {
        num: "13",
        speaker: "葦花さん (お金に愛される方法)",
        title: "お金に愛される私になるためのマインド",
        description: "お金に愛される私になるためのマインド",
        link: "https://photos.app.goo.gl/X9ih2pvNRCgqT4Z78",
        type: "external"
    },
    {
        num: "12",
        speaker: "北野さん (カンボジア)",
        title: "カンボジアの今",
        description: "カンボジアの今",
        link: "https://photos.app.goo.gl/QFyxqJfQt6M4egqv5",
        type: "external"
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
        speaker: "中屋さん (イノベーション)",
        title: "無意識バイアスの外に存在する、イノベーションの素",
        description: "無意識バイアスの外に存在する、イノベーションの素",
        link: "https://photos.app.goo.gl/ZB6dENqYFQaTcyfp7",
        type: "external"
    },
    {
        num: "9",
        speaker: "福本さん (製造業DX)",
        title: "インダストリー4.0と製造業DX",
        description: "生成AI活用やデータ活用の現在地と課題 ※転載不可",
        link: "https://photos.app.goo.gl/WYJyaPAQXzLhixey9",
        type: "external"
    },
    {
        num: "8",
        speaker: "宮田さん (滝登り研修)",
        title: "動きを伴うチームビルディング",
        description: "本音・本心で会話が通じるように成る秘訣",
        link: "https://photos.app.goo.gl/G7ToBs22E2L9x4wEA",
        type: "external"
    },
    {
        num: "7",
        speaker: "山原さん (リーダーシップ)",
        title: "今の時代の共創型リーダーシップとソニー復活にみるパーパス経営",
        description: "〜人と組織はどうしたら成長するか？〜",
        link: "https://photos.app.goo.gl/V3jVsQSsQpvHw9hc8",
        type: "external"
    },
    {
        num: "6",
        speaker: "宮本さん (整体)",
        title: "ビジネス運気を上げる健康法",
        description: "世界のアスリートが認める。整体師が語ります。",
        link: "https://photos.app.goo.gl/t3y8f89a9X5ibZY98",
        type: "external"
    },
    {
        num: "5",
        speaker: "長谷川さん (プラットフォーム戦略)",
        title: "プラットフォームビジネスの進化をわかりやすく解説",
        description: "プラットフォームビジネスの進化をわかりやすく解説",
        link: "https://photos.app.goo.gl/EQvCZWUVkL8LLKBm8",
        type: "external"
    },
    {
        num: "4",
        speaker: "東さん (宇宙事業)",
        title: "宇宙開拓時代におけるプラットフォームビジネス戦略",
        description: "世界を良くする宇宙インフラを作る WARPSPACE社の事業紹介",
        link: "https://www.facebook.com/groups/724852256027082/permalink/756768099502164/",
        type: "external"
    },
    {
        num: "3",
        speaker: "山田さん (外国車整備)",
        title: "好きな事を仕事にする人生 顧客信頼関係を勝ち取る方法を伝授",
        description: "好きな事を仕事にする人生 顧客信頼関係を勝ち取る方法を伝授してもらいます。",
        link: "https://www.facebook.com/groups/724852256027082/permalink/749600133552294/",
        type: "external"
    },
    {
        num: "2",
        speaker: "小野さん (メタバースマーケティング)",
        title: "メタバースの実証実験センター",
        description: "目指していること＆応援いただきたいこと",
        link: "https://www.facebook.com/groups/724852256027082/permalink/743257847519856/",
        type: "external"
    },
    {
        num: "1",
        speaker: "長崎さん (NFT)",
        title: "現代アートとNFTの世界。またWEB3の世界を垣間見る。",
        description: "現代アートとNFTの世界。またWEB3の世界を垣間見る。",
        link: "https://www.facebook.com/groups/724852256027082/permalink/735077741671200/",
        type: "external"
    }
];
