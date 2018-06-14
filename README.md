# rust-oxide-skins-config-generator

Generates config section of all skins for [http://oxidemod.org/plugins/skins.2431/](http://oxidemod.org/plugins/skins.2431/) (processed_data.json)

Requires:

- Node.JS

1. Put contents of [OxideMod/Oxide.Docs/master/source/includes/rust/item_skins_list.html.md](https://raw.githubusercontent.com/OxideMod/Oxide.Docs/master/source/includes/rust/item_skins_list.html.md) into item_skins_list.html.md
2. Run `node index.js`
3. Copy contents of processed_data.json into Skins config
