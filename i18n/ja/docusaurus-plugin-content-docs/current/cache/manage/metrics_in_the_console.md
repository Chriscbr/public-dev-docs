---
sidebar_position: 2
sidebar_label: コンソールのメトリクス
title: コンソールのメトリクス
pagination_prev: null
description: コンソールのメトリクス
---

# コンソールのメトリクス
Momento Cache を使用してアプリケーションを開発および運用する場合、バグを効果的に診断し、パフォーマンスを最適化するための可視性が必要になります。Momento は、トラブルシューティングとチューニングを容易にすることを目的として、Momento コンソールから、すべての顧客に1時間ごとの基本的なサービス側のメトリクスを提供します。Momento Cache への依存度が高い企業の場合は、Momento のサービスチームにご連絡いただき連携することで、サポートと詳細なメトリクスの提供を受けることをお勧めします。

Momento コンソールで、左のナビゲーションメニューにある小さな棒グラフアイコンを選択すると、キャッシュメトリックスダッシュボードにアクセスできます。

![image](/img/metrics_select.png)

利用可能なメトリクスは、キャッシュのデータ・プレーン操作のみを対象としており（キャッシュの作成または削除などの制御プレーン操作は含まれません）、直前の 1 時間のメトリクスとなります。現在、メトリクスは、Momento アカウント内のすべてのキャッシュの集計を表示します。折れ線グラフにある点にカーソルを合わせると、任意の分のデータを表示できます。メトリクスの表示は通常、1～2分遅れます。

## TPS (transactions per second - トランザクション/秒)
この折れ線グラフは、1 秒あたりのキャッシュ・データ操作の要求数を 1 分間ごとに平均したものです。これを使用して、キャッシュ内のアプリケーションのアクティビティを理解することができます。ここに何も表示されない場合は、キャッシュを使用しておらず、アプリケーションの動作とコード内のロジックを確認する必要があります。

![image](/img/metrics_tps.png)

## Byte count (Momentoキャッシュの入出力データ量)
この折れ線グラフは、1分間に Momento キャッシュに転送された、またはキャッシュから転送されたバイト数を合計したものです。直近の 1 時間に転送されたバイト数の合計も上のバーに表示されます。これを使用して、キャッシュ内のアプリケーションのアクティビティを把握できます。ここに何も表示されない場合は、キャッシュを使用していないため、アプリケーションの動作とコード内のロジックを確認する必要があります。転送されたデータに関する情報を使って、アプリケーションがキャッシュに与えているスループットの見積もりを得ることができます。TPS とバイト数の両方のメトリクスを見ることで、キャッシュ・アイテムのサイズに関する大まかな情報を得ることもできます。

![image](/img/metrics_bytecount.png)

## Errors and successes (エラーと成功)
このグラフは、キャッシュへのアプリケーションリクエストに対する Momento からのエラーおよび成功レスポンスの数を示します。このグラフは、パーセンテージとして表示することも、1 分間のレスポンスのカウント数として表示することもできます。エラーのレベルが高い場合は、アプリケーションログを詳しく調べて原因を理解してください。エラー率の上昇は、アプリケーションリクエストが [サービス制限](./limits) に遭遇したために、Momento によってスロットルされていることを示す可能性があります。

![image](/img/metrics_success-error.png)

## Hits and misses (ヒット率)
このグラフは、アプリケーションがどれだけうまくキャッシュを使用しているかを示しています。ヒット率に影響を与える要因には、アイテムに選択した TTL とキャッシュにアイテムを追加する戦略が含まれます（次回、読み込むときにキャッシュにアイテムがあると予想される場合は、キャッシュにアイテムを書き込む必要があります）。ヒット率が高ければ高いほど、キャッシュの恩恵は大きくなります。しかし、長い TTL を使用する場合は、アプリケーションで扱うデータの陳腐化とのバランスを取る必要があります。

![image](/img/metrics_hit-miss.png)


### FAQ's
<details>
<summary>どうすれば1時間以上のメトリックスを見ることができますか？</summary>
本番環境では、Momento のサービスチームに連絡し、サポートを受けることをお勧めします。これには、詳細なメトリクスの観測可能ツールへの公開が含まれます（現在は CloudWatch ですが、今後オプションが増える予定です）。詳細なメトリクスの配信が可能になれば、運用基準に従ってアラームやダッシュボードを構築することができます。
</details>

<details>
<summary>なぜレイテンシのメトリクスが提供されないのですか？</summary>
Momento が測定できるのは、サービス内部（リクエスト・ルーターとストレージ・ノード間）のトラフィックに関連するレイテンシーだけです。これは、全体的なレイテンシーの話と、ユーザーが受けているエクスペリエンスについて、より多くのことが分かります。また、canary を使って、ネットワーク上のどこか遠くにいるエンドユーザーが経験するレイテンシーをテストし、レポートすることを検討してみても良いかもしれません。
<br></br>
<br></br>
CloudWatch への詳細なメトリクス配信を受けているお客様には、パーセンタイル付きのレイテンシ・メトリクスが提供されます。これは、クライアント側のレイテンシやカナリア・レイテンシと比較することで、ユーザー・エクスペリエンスの問題が Momento キャッシュに関連しているのか、あるいは根本的な原因や解決策を他の場所に求める必要があるのかを迅速に判断するために使用できます。
</details>