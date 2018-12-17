/*
You are given a large dictionary of strings (maybe 100,000) that fit in memory.
Write a function to be called repeatedly that takes in a single letter and returns the list of
strings that contain that character.

dict = [
  '‘aardvark’,'
  ''wait'.'
  ''hello','
  ''world','
  ''sup''
  ''blah''
  ''foo''
  ''bar''
]
 */

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class WordList {
  constructor(dict) {
    this.alphabet = ALPHABET;
    this.wordMemo = [];

    this.alphabet.forEach((ltr) => {
      this.wordMemo[ltr] = new Set();
    });

    dict.forEach((word) => {
      for (let i = 0; i < word.length; i += 1) {
        const ltr = word[i];
        this.wordMemo[ltr.toLowerCase()].add(word);
      }
    });
  }

  findWords(ltr) {
    return Array.from(this.wordMemo[ltr]);
  }
}

const wordList = [
  'PKEUHKYTSF',
  'AMAICMIWQM',
  'XKMGKLVPFT',
  'UPTGFLVSFQ',
  'TPOOJXLKZE',
  'NBWFCUHEBP',
  'MQTALKJXBJ',
  'IQGGUGHMDD',
  'FQZKUZJAKS',
  'JPTRHFBLUD',
  'GHTKNGCRVG',
  'UIEVDWHFVL',
  'TVWHRFYGGI',
  'UYVXBKWGRY',
  'OGXHZEXSKR',
  'SYDDQIPQTJ',
  'XLWYFHUSWO',
  'UGUBEEWLGH',
  'RYPBXBIRZY',
  'YNSNLPBOHS',
  'YBJCQAAZGI',
  'RRJSNPEVGZ',
  'ZUYSKZEFGR',
  'NZDNVJLXEN',
  'ECOWAWUMHT',
  'GFRAJXMCQQ',
  'SZXDCYGJZX',
  'JPKAPBDNCD',
  'GWOVAVEWAH',
  'TKXYUGSDDX',
  'ENFVGQJYEW',
  'DDTVCUPKUU',
  'FUMNMLFUAU',
  'ONQRZHTVRN',
  'TTAJJRMBIB',
  'XUROBBCPOC',
  'ILJYLHJZYC',
  'FONBWWMLPC',
  'XGFRAFCAQE',
  'ZELCUTERGX',
  'CQEKIIHKIU',
  'ALGXQIKLVE',
  'TTQVHPHSRA',
  'WSHERYQUYH',
  'QQJJFGQZMW',
  'KJYKZCWVJZ',
  'JDBSSYFSJY',
  'YGBBFNNARK',
  'DNDJBTLZKM',
  'ZBZNFEAXVQ',
  'BUAPCWXKJU',
  'HOBGFPBYXJ',
  'PEBPOFNXKG',
  'RJFPPYTFTF',
  'LFJMGDMLAC',
  'IZGWAJWMAX',
  'JFTKBDBQGR',
  'BYZCIJWCXS',
  'YGJGBBYPVK',
  'URVRYSFUMO',
  'CEAQVXGKLR',
  'WBHBMWSAFY',
  'SZXGHHURBX',
  'WBBBKFXYUV',
  'BGONNZAAXI',
  'JNTKXTQAFF',
  'ESDNVFVEGG',
  'PMYMBCZDSM',
  'VWZTSTPILT',
  'EMCLQKVUXP',
  'QPSBKBCMXW',
  'COTPKAOVEB',
  'BIZPYNODZT',
  'BXOZIYRPES',
  'XIRFFQKEOC',
  'DWODKYGPOR',
  'GOZYUZYUNX',
  'EQRNSAIKCQ',
  'QRZJDUGCTM',
  'SXXIMLMVFN',
  'LLDVUVXSVT',
  'KHTESIGUHJ',
  'JAUKNMDNHH',
  'THQZZGTTNL',
  'GUZPWFLUXC',
  'AYCJOPHUUR',
  'JNHFKUXOVQ',
  'PQLNAWGZSU',
  'CUFBMOOJBV',
  'OPZHADJNAC',
  'DKFZPVWTBZ',
  'QSRSWHYXTJ',
  'NNMPJIJKLF',
  'NMANSPMIJE',
  'OBZEXEDLGJ',
  'VYXJLKJKCD',
  'UXRQRUGCDK',
  'YIRADDTMSK',
  'XWBAUVPNKJ',
  'UZQPFCJYQV',
  'BGRZIUQSJK',
  'UQDCOYWRXO',
  'RBPQINNJVY',
  'ZNDNHRFEIV',
  'JTFBUNPHLJ',
  'FLNZZVAHQZ',
  'FUUXRHMVMW',
  'KUVITIIXLW',
  'BBLYEJRHIN',
  'OBBVXDRAQY',
  'RSDPQXELFP',
  'KUKHLAKZWH',
  'LGWJCTTAHI',
  'AQWGTZZLWG',
  'CWMMNFYOUV',
  'DUCJPHOOCI',
  'YZFGVCIJUH',
  'DJZWLYWRKF',
  'JALUAUOLEP',
  'QGGSXUNZHY',
  'SXPJOPHDQA',
  'HLBANWWYQI',
  'QDDNMCUOFZ',
  'ERSWGDNRDW',
  'RAYLYNNWDA',
  'BHWJDOUVSU',
  'GYXWLUNVXC',
  'JDDPDAELZU',
  'WNUKXMQFLB',
  'COSTYULCNZ',
  'EKPRALFUKN',
  'IYZMYELAJQ',
  'PIKUOTNCUA',
  'FQIUSROWHC',
  'FATGQUFIGR',
  'YSAFVXVSUV',
  'SDBTJSPKEF',
  'LKWWVJVNRZ',
  'CZAGRSWGOP',
  'BHSNSFCCTF',
  'CSFKMJCXAY',
  'TZAYCDOGBA',
  'QLBQZCFRXR',
  'SFCZCREUWQ',
  'ZVVLESSBXL',
  'BPEVPVPOTX',
  'RMTEBYGUQS',
  'UTKWEMLYPF',
  'MJRUYZXOFQ',
  'LWWMYQBYNR',
  'LGGRZWWSPF',
  'IHJVRTTKSF',
  'FVIKMLNHHF',
  'SZHBLIMQSJ',
  'UWXXLXKWQX',
  'YNSKQVQWXZ',
  'CRKKQYMLNJ',
  'AAYJZGQDTD',
  'MOBQOGTXQX',
  'QXUCWXXNXB',
  'VCBBESADVR',
  'VIEPLHYHIN',
  'BMYXAPWUTA',
  'PMCCPIWYWS',
  'KHGRIVCDMQ',
  'LMXHDOLEKJ',
  'ZGVGZAFGDS',
  'OOGPJXFUPL',
  'SWQPJXAMTR',
  'BFECVHFLBW',
  'OHIGJRTJTK',
  'WYRNHWLBIL',
  'BJCNKZIYIB',
  'XFAJZCWIKA',
  'RTMBWBTBUX',
  'ZHFINSMZSC',
  'XLHSGKWYHU',
  'VTGBOSZPPX',
  'TQTFSZPUPZ',
  'EMWHYKZTMG',
  'VYFSQMQYTE',
  'SWYVQGQEQJ',
];

const words = new WordList(wordList);
console.log(words.findWords('a'));
