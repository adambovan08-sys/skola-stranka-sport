# HOD DISKOM – slovenský statický web

## Spustenie
Rozbaľ ZIP a otvor index.html v prehliadači. Texty, menu a lokálne fotografie fungujú aj bez internetu. Google Fonts a YouTube vyžadujú internet; pri nedostupnom fonte sa použije systémový font. YouTube používaj cez GitHub Pages alebo lokálny HTTP server, pretože prehrávač môže odmietnuť file:// adresu.

## Nahratie na GitHub Pages
1. Vytvor na GitHube repozitár.
2. Nahraj do jeho koreňa obsah tohto priečinka: index.html, ostatné HTML stránky, styles.css, app.js, assets a .nojekyll. Nenahrávaj iba ZIP ani nadradený priečinok.
3. V Settings → Pages nastav Deploy from a branch, vetvu main a priečinok / (root). Ulož.
4. Po dokončení nasadenia otvor adresu zobrazenú v Pages. Relatívne odkazy podporujú aj projektový web pod /nazov-repozitara/.

## Úpravy
- Text každej stránky je priamo v jej HTML súbore.
- Farby sú na začiatku styles.css v :root.
- Menu je v každom HTML súbore; zmenu názvu vykonaj na všetkých piatich stránkach.
- Video: v o-sporte.html zmeň data-video a priamy odkaz; aktualizuj aj titulok v app.js a zdroj na stránke Odkazy.
- Osobné údaje autora neboli doplnené ani vymyslené.

## Licencie
Autori, originálne odkazy a presné licencie všetkých fotografií sú na stránke odkazy.html. Fotografie boli zmenšené a JPEG komprimované; CSS môže zobrazovať výrez. Upravené fotografie pod CC BY-SA zostávajú pod rovnakými licenciami. Zachovaj atribúcie pri ďalšom použití. Kód možno pre tento projekt voľne upravovať.

Video sa nesťahuje ani nešíri v ZIP: načíta sa odporúčané portálom ActiveSG až po kliknutí. Pri obmedzení YouTube je pod prehrávačom priamy odkaz.

