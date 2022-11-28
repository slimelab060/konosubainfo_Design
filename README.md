![artbord](assets/docimg/artbord.jpg)

# Konosubainfo_Design

This repository produces the design for the Konofan summary website.

## Information

Functional implementation will be created in a separate repository.

![picture 1](assets/docimg/1.png)
![picture 2](assets/docimg/2.png)
![picture 3](assets/docimg/3.png)
![picture 4](assets/docimg/4.png)

## これは何？

これはこのファンサイトのフロント部分のソースコードです。  
まだサイトは見ることはできませんがこのリポジトリをクローンして環境を整えると誰でも使えるようになります。  
これを公開している理由は、単にバージョン管理と保存が目的です。  
Twitter にリンク張るのは正式版のみで開発版は Discord 経由にして見る人を分けています。

# 開発環境

このサイトは`Nuxt3`をベースに構築しています。  
最近正式リリースされたばかりなのでモジュールが少ない状況です。  
なのでしばらくはモジュールは常に更新されて行きますので注意してください。

# ⚠ 注意

**Warning**  
いままで`Tailwindcss`を使用してきましたが、Nuxt3 が正式リリースに合わせて`PrimeVue`に変更します。  
理由は、使い勝手は悪くなかったけど、更新が遅すぎるのと納得いかない部分がありすぎてデザインの統一ができていなかったのが理由です。  
ただ色々と勉強不足なのでいつか`Tailwindcss`で小規模のサイトなら積極的に採用していきたいと思います。  
なのである程度まとまったコンポーネントを使用することにして決めたのが、`PrimeVue`です。  
他のフレームワーク`Vuetify3`や`Quasar`も検討しましたが、`Vuetify3`は出たばっかりでコンポーネントが少なく`Quasar`は cli でないと SSR 使えないので検討を見送りました。

## ライセンス

これはフロント部分のワイヤーフレームだけを公開していますので MIT ライセンスになります。

[MIT](https://github.com/slimelab060/Konosubainfo_Design/blob/main/LICENSE)
