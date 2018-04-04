# rust-oxide-skins-config-generator

Generates config section of all skins for http://oxidemod.org/plugins/skins.2431/ (processed_data.txt)

Requires:
- NodeJS

1. Put contents of https://raw.githubusercontent.com/OxideMod/Oxide.Docs/master/source/includes/rust/item_skins_list.html.md into item_skins_list.html.md
2. Run index.js (node index.js)
3. Copy contents of processed_data.txt as your Skins config Workshop JSON object
