---
sidebar_position: 2
sidebar_label: Metrics in the Console
title: Metrics in the Console
pagination_prev: null
description: Metrics in the console
hide_title: true
---

# コンソール内のメトリクス

Momento Cacheを使用したアプリケーションの開発や運用では、バグを効果的に診断し、パフォーマンスを最適化するための可視性が求められます。Momentoは、トラブルシューティングとチューニングを容易にすることを目的として、Momentoコンソールを介して、サービス側のメトリクスをすべてのお客様に提供しています。Momento Cacheに重要な依存関係を持つ企業であれば、Momentoチームと緊密に連携し、サポートと詳細な履歴メトリクスの提供を受けることをお勧めします。

Momentoコンソールで、左のナビゲーションメニューにある小さな棒グラフアイコンを選択すると、キャッシュメトリクスのダッシュボードにアクセスできます。

![イメージ](@site/static/img/metrics_select.png)

利用可能なメトリクスは、キャッシュのデータ・プレーン操作のみを対象としており（キャッシュの作成や削除などの制御プレーン操作は含まれません）、直前の1時間のものです。現在、メトリクスは、Momento アカウント内のすべてのキャッシュの集計を示しています。折れ線グラフのその分のバブルにカーソルを合わせると、任意の分のポイント・データを表示できます。メトリクスの表示は通常、1～2 分遅れて表示されます。

## TPS (トランザクション/秒)

この折れ線グラフは、1 秒あたりのキャッシュ・データ操作要求数を 1 分間ごとに平均したものです。これを使用して、キャッシュ内のアプリケーション・アクティビティのレベルを把握することができます。ここに何も表示されない場合は、キャッシュを使用しておらず、アプリケーションの動作の健全性とコード内のロジックを確認する必要があります！

![イメージ](@site/static/img/metrics_tps.png)

## バイト数 (Momento キャッシュに出入りするデータ量)

この折れ線グラフは、1分間にMomentoキャッシュに転送された、またはキャッシュから転送されたバイト数を合計したものです。直近の 1 時間に転送されたバイト数の合計も上のバーに表示されます。これを使用して、キャッシュ内のアプリケーションアクティビティの状況を把握できます。ここに何も表示されない場合は、キャッシュを使用していないため、アプリケーションの動作とコード内のロジックを確認する必要があります。転送されたデータに関する情報を使って、アプリケーションがキャッシュに与えているスループットの見積もりを得ることができます。TPSとバイト数の両方のメトリクスを見ることで、キャッシュアイテムのサイズに関する大まかな情報を得ることもできます。

![イメージ](@site/static/img/metrics_bytecount.png)

## エラーと成功

このグラフは、キャッシュへのアプリケーションリクエストに対する Momento からのエラーおよび成功レスポンスの数を示します。このグラフは、パーセンテージとして表示することも、1分間のレスポンスの生のカウントとして表示することもできます。エラーのレベルが高い場合は、アプリケーションログを詳しく調べて原因を理解してください。エラー率の上昇は、アプリケーションのリクエストが[サービス制限に](./limits)遭遇したためにMomentoによってスロットルされていることを示す可能性があります。

![イメージ](@site/static/img/metrics_success-error.png)

## ヒットとミス（ヒット率）

このグラフは、アプリケーションがどの程度うまくキャッシュを適用しているかを示します。ヒット率に影響を与える要因には、アイテムに選択した TTL とキャッシュにアイテムを書き込む戦略があります (次に読み込むときにキャッシュにアイテムがあることを期待するなら、キャッシュにアイテムを書き込む必要があります)。ヒット率が高ければ高いほど、キャッシュの恩恵は大きくなります。しかし、長いTTLを使用する場合は、アプリケーションで扱うデータの陳腐化とのバランスをとる必要があります。

![イメージ](@site/static/img/metrics_hit-miss.png)

### よくある質問

<details>
<summary>1時間以上のメトリクスを取得するにはどうすればよいですか？</summary>
本番環境では、Momento チームと提携してサポートを受けることをお勧めします。これには、詳細なメトリクスを観測可能なツール（現在は CloudWatch ですが、今後オプションが追加される予定です）に公開することも含まれます。詳細なメトリクスの配信が可能になれば、運用基準に従ってアラームやダッシュボードを構築できます。
</details>

<details>
<summary>なぜレイテンシー・メトリクスが提供されないのですか？</summary>
Momentoが測定できるのは、サービス内部（リクエストルーターとストレージノード間）のトラフィックに関連するレイテンシーだけです。これは、全体的なレイテンシーの話や、ユーザーが受けている体験について、より多くのことを物語っています。また、カナリアを使って、ネットワーク上のどこか遠くにいるエンドユーザーが経験するレイテンシーをテストし、報告することを検討することもできます。
<br></br>
<br></br>
CloudWatchに詳細なメトリクスを配信しているお客様には、パーセンタイル付きのレイテンシ・メトリクスが提供されます。これをクライアント側のレイテンシやカナリア・レイテンシと比較して使用することで、ユーザー・エクスペリエンスの問題がMomentoキャッシュに関連しているのか、あるいは根本的な原因や解決策を他の場所に求める必要があるのかを迅速に判断することができます。
</details>