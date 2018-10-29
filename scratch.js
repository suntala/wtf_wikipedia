const wtf = require('./src/index');
// const readFile = require('./tests/lib/_cachedPage');
// const wtf = require('./builds/wtf_wikipedia');
// const wtf = require('./build');

// (async () => {
//   let doc = await wtf.fetch('New York City', 'en');
//   console.log(doc.infoboxes());
// })();

// let doc = readFile('jodie_emery');
// console.log(doc.markdown());
// console.log(doc.infobox(0).images(0).thumb());
//
var str = `
{| class="wikitable sortable plainrowheaders"
|+ List of voice performances in direct-to-video and television films
! Year
! Title
! Role
! class="unsortable"| Notes
! class="unsortable"| Source
|-
| {{dts|2014|09|30|format=y}} || ''[[One Piece Film: Z]]'' || Bins || || <ref name="btva"/>
|-
| {{dts|2015|02|24|format=y}} || ''[[Tiger & Bunny|Tiger & Bunny: The Rising]]'' || Richard Max || || <ref>{{cite web | url = http://www.animenewsnetwork.com/news/2015-02-22/tiger-and-bunny-the-movie-the-rising-new-driver-english-dub-clip-streamed/.85283 | title = Tiger & Bunny The Movie: The Rising 'New Driver' English Dub Clip Streamed | date = February 22, 2015|accessdate=July 13, 2015}}</ref>
|-
| {{dts|2015|05|12|format=y}} || ''[[Batman Unlimited: Animal Instincts]]'' || Mech Guard #1, Wealthy Jock || || <ref name="btva"/><!-- <ref>{{cite AV media | at=Closing credits | title=[[Batman Unlimited: Animal Instincts]] | year=2015 | medium=film}}</ref>  -->
|-
| {{dts|2015|12|format=y}} || ''[[Marvel Super Hero Adventures: Frost Fight!]]'' || [[Captain America]], Gingerbread Men || || <ref name="btva"/><!-- <ref>{{cite AV media | at=Closing credits | title=Marvel Super Hero Adventures: Frost Fight | year=2015 | medium=film}}</ref>  -->
|-
| {{dts|2016|02|02|format=y}} || ''[[Batman: Bad Blood]]'' || [[Hellhound (comics)|Hellhound]], Chuckie Sol || || <ref name="btva"/><!-- <ref>{{cite AV media | at=Closing credits | title=[[Batman: Bad Blood]] | year=2016 | medium=film}}</ref> -->
|-
| {{dts|2017|03|14|format=y}} || ''[[K: Missing Kings]]'' || Kuroh Yatogami || || <ref>{{cite web |date=October 7, 2016 |url=https://www.animenewsnetwork.com/news/2016-10-07/viz-reveals-english-dub-cast-for-k-missing-kings-film/.107390 |title=Viz Reveals English Dub Cast for K: Missing Kings Film (Update 2) |publisher=[[Anime News Network]] |accessdate=October 7, 2016}}</ref>
|}`;
let doc = wtf(str);
console.log(doc.tables(0).keyValue());
