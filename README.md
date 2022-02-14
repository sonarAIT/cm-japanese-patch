# Word Splitting for Japanese in Edit Mode

A patch for Obsidian's built-in CodeMirror Editor to support Japanese word splitting

Obsidian内蔵のCodeMirrorエディタが日本語の単語分割をサポートするためのパッチ．

This plugin is based on [the chs word splitting module](https://github.com/linonetwo/segmentit) by [@linonetwo](https://github.com/linonetwo) and modified to Japanese version.  
For Japanese word segmentation, we used [tiny-segmenter](http://chasen.org/~taku/software/TinySegmenter/) created by [Taku Kudo](https://github.com/taku910).  
Special Thanks to [@linonetwo](https://github.com/linonetwo) and [Taku Kudo](https://github.com/taku910)!

## Demo

| Obsidian's Default Word Splitting<br>パッチを適用していない場合 | Patched<br>パッチを適用した場合 |
| ------------------ | ----------- |
| ![ob-default-splitting](https://github.com/sonarAIT/cm-japanese-patch/blob/main/img/off.gif)|![ob-patched-splitting](https://github.com/sonarAIT/cm-japanese-patch/blob/main/img/on.gif)|

## Compatibility

The required API feature is only available for Obsidian v0.13.8+.  
必要なAPI機能は，Obsidian v0.13.8+でのみ利用可能です．

## Installation インストール方法

### From Obsidian

1. Open `Settings` > `Community plugin`
2. Make sure Safe mode is **off**
3. Click `Browse` in  `Community plugins`
4. Search for this plugin
5. Click `Install`
6. Once installed, click `Enable` and the patch is ready to use.

***

1. `設定`から`コミュニティプラグイン`を開きます．
2. セーフモードが**オフ**であることを確認します．
3. `コミュニティプラグイン`の`閲覧`をクリックします．
4. このプラグインを検索します．
5. `インストール`をクリック
6. インストールが完了したら，`有効化`を押すことで，パッチは使用可能な状態になります．

### From GitHub

1. Download the Latest Release from the Releases section of the GitHub Repository
2. Put files to your vault's plugins folder: `<vault>/.obsidian/plugins/japanese-word-splitter`  
3. Reload Obsidian
4. If prompted about Safe Mode, you can disable safe mode and enable the plugin.
Otherwise head to Settings, third-party plugins, make sure safe mode is off and
enable the plugin from there.

> Note: The `.obsidian` folder may be hidden. On macOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.

***

1. GitHubリポジトリのReleasesからLatest Releaseをダウンロードします．
2. vaultのpluginsフォルダにファイルを配置します．`<vault>/.obsidian/plugins/japanese-word-splitter`にファイルを置きます．
3. Obsidianをリロードします．
4. セーフモードについてプロンプトが表示されたら，セーフモードを無効にしてプラグインを有効にすることができます．それ以外の場合は，`設定`から`コミュニティプラグイン`に移動し，セーフモードがオフになっていることを確認し，そこからプラグインを有効にしてください．

> 注意： `.obsidian` フォルダは隠されている可能性があります．macOSでは，`Command+Shift+Dot`を押すと，Finderでフォルダを表示できるはずです．
