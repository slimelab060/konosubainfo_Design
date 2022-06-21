# Konosubainfo_Design

This repository produces the design for the Konofan summary website.

## Information

Functional implementation will be created in a separate repository.


## このファンまとめ オリジナルα版  更新履歴


:pushpin:**バージョンの名称**:pushpin:  
```
 α    : フレームワークとレイアウトの雛形を作成する段階(フロントエンド開発)  
 β    : 検索機能とタグ機能とコンテンツ作成を実装する段階(バックエンド開発)  
 RC   : リリース候補の修正段階  
 b    : ビルドフォーマット  
 なし : 正式リリース  
 ```
  
  
:pushpin:**ビルドフォーマット形式**:pushpin:
```md
例: α1.0-b20220601-100-公開

(バージョン)-(ビルド日時)-(ビルドした回数)-(公開 or 一部公開 or 非公開) 

・バージョン : 上記参照
・ビルド日時 : ビルドした日時
・ビルドした回数 : 主にデバッグした回数をカウントします。

・公開     : GitHub Pushした時と情報公開の両方のときに使用されます。
・一部公開 : DiscordまたはTwitterで情報公開するときのみに使用します。
・非公開   : ローカル内で完結したときに使用されます。

※公開部分はTwitterやGitHubのみで使用されるもので内部データにはありません。
```

## 🖥最新更新履歴

**α1.5.2-b20220620-158(公開)**  
- 一部脆弱性のライブラリが存在していたのでアップデート  
- Tailwind CSS v3.0.24からv3.1.3にアップデート  

**α1.5.1-b20220619-157(Twitterで一部公開&公開)**  
- 文字ロゴを変更  
- 検索枠追加  
- 細かいレイアウトの修正  

**α1.5-b20220619-155(非公開)**  
- このすばの背景とロゴを追加(1024px以上のタブレットとPCが対象)  
- ヘッダーとフッターを外側に配置を変更  
- 使用端末の解像度が1024px以下の場合は1カラム表示に変更  

**α1.4-b20220617-128(非公開)**  
- Grid構成を変更して保守しやすいように修正  
- レスポンシブに対応(一部レイアウト未対応)  
- ダークテーマ対応(テストのためテーマは29種類試せるようになっています)  
- ダークテーマに対応するにあたって一部クラス名を変更  

**α1.3-b20220604-113(Twitterで一部公開)**  
- フレームワーク再構築  
- Grid構成を変更して保守しやすいようになった  
- レスポンシブに対応(一部レイアウト未対応)  

**α1.2.1-b20220603-64(非公開)**  
- flexをメインで使用していた部分を廃止  
- アドサイド廃止  
- Swiperのサイズ変更時に挙動がおかしくなってなっていたので修正  

**α1.2-b20220602-38(非公開)**  
- IE11サポート終了が近づいてきたのでレイアウトGridベースに変更  
- サイドメニューを廃止  

**α1.1-b20220528-24-(公開)**  
- Tailwind CSSベースに変更  
- これによりCSSに直接書く必要がなくなった  

**α1.0.7-b20220522-15(非公開)**  
- タイマー処理を一時保留(今後使うか使用用途が不明になったため)  
- プラグイン「Tailwind CSS v3.0.24」 追加  
- TailwindCSSそのまま使うのは骨が折れるのでそのプラグイン「daisyUI」追加  

**α1.0.4-b20220519-7(非公開)**  
- コンポーネント作成  
- Header ,Footer, Content, SideMenu, Adside追加  

**α1.0.1-b20220517-3(非公開)**  
- タイマー同期処理を修正  

**α1.0-b20220516-1(非公開)**  
- 簡易フレームワーク作成  