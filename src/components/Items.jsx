const starter = [
    ["seal", [3, 8], "dark seal"],
    ["tear", [15]],
    ["dring", [3, 8]],
    ["world", [8, 9, 16]],
    ["dblade", [0, 8, 10]],
    ["cull", [0]],
    ["dshield", [8, 9]],
];

const basic = [
    ["mote", [2]],
    ["faerie", [16]],
    ["dagger", [1]],
    ["cloth", [4]],
    ["rejuv", [9]],
    ["sapphire", [15]],
    ["sword", [0]],
    ["tome", [3]],
    ["ruby", [8]],
    ["mantle", [14]],
    ["crit", [6]],
    ["blasting", [3]],
    ["pick", [0]],
    ["rod", [3]],
    ["bf", [0]],
];

const boots = [
    ["boots", [17]],
    ["berserker", [1, 17]],
    ["swifties", [17]],
    ["symbiotic", [17]],
    ["sorcs", [17, 12]],
    ["lucidity", [2, 17]],
    ["plated", [4, 17]],
    ["mercs", [14, 17, 20]],
];

const epic = [
    ["recurve", [1]],
    ["oblivion", [3]],
    ["forbidden", [16, 7]],
    ["scout", [1]],
    ["executioner", [0]],
    ["kindle", [8, 2]],
    ["chain", [4]],
    ["bramble", [4]],
    ["crystalline", [8, 9]],
    ["winged", [8, 18]],
    ["aether", [3, 18]],
    ["fated", [3]],
    ["fiendish", [3, 2]],
    ["rectrix", [0, 18]],
    ["vamp", [0, 10]],
    ["sheen", [2]],
    ["bami", [8, 2]],
    ["negatron", [14]],
    ["giant", [8]],
    ["glacial", [2, 15, 4]],
    ["bandleglass", [3, 16, 2]],
    ["dirk", [0, 11]],
    ["wardens", [4]],
    ["hextech", [3]],
    ["blighting", [3, 13]],
    ["zeal", [1, 6, 18]],
    ["caulfield", [0, 2]],
    ["steel", [0, 4]],
    ["phage", [0, 8]],
    ["watchful", [8, 2, 4, 14]],
    ["tunneler", [0, 8]],
    ["lost", [3, 15, 2]],
    ["tiamat", [0]],
    ["spectre", [8, 14, 9]],
    ["catalyst", [8, 15]],
    ["haunting", [8, 3]],
    ["hearthbound", [0, 1]],
    ["hex", [0, 14]],
    ["qss", [14]],
    ["brutalizer", [0, 2, 11]],
    ["noonquiver", [0, 6]],
    ["whisper", [0, 5]],
    ["seekers", [3, 4]],
    ["verdant", [3, 14]],
  ];
  
  const legendary = [
    ["mejai", [3, 8]],
    ["morel", [3, 2]],
    ["shurelya", [3, 2, 16, 18]],
    ["echoes", [3, 8, 2, 16]],
    ["moonstone", [3, 8, 2, 16]],
    ["locket", [8, 4, 14, 2]],
    ["zekes", [8, 4, 14, 2]],
    ["knights", [8, 4, 2, 9]],
    ["imperial", [3, 2, 16]],
    ["ardent", [3, 7, 16, 18]],
    ["staff", [3, 7, 16, 2]],
    ["redemption", [8, 2, 16, 7]],
    ["mikael", [8, 2, 16, 7]],
    ["abyssal", [8, 14, 2]],
    ["winters", [8, 15, 2]],
    ["frozen", [4, 15, 2]],
    ["serpants", [0, 11]],
    ["trail", [8, 4, 18]],
    ["roa", [3, 8, 15]],
    ["rylais", [3, 8]],
    ["rocketbelt", [3, 8, 2]],
    ["umbral", [0, 11, 2]],
    ["phantom", [1, 6, 18]],
    ["runaans", [1, 6, 18]],
    ["navori", [1, 6, 18]],
    ["rfc", [1, 6, 18]],
    ["iceborn", [8, 4, 2]],
    ["malignance", [3, 15, 2]],
    ["horizon", [3, 2]],
    ["dawncore", [3, 7, 16]],
    ["youmuu", [0, 11]],
    ["opportunity", [0, 11, 18]],
    ["sunfire", [8, 4, 2]],
    ["randuin", [8, 4]],
    ["thornmail", [8, 4]],
    ["blackfire", [3, 2, 15]],
    ["edge", [0, 11, 8]],
    ["wits", [1, 14, 20]],
    ["statikk", [0, 1, 18]],
    ["eclipse", [0, 2]],
    ["chempunk", [0, 8, 2]],
    ["hollow", [8, 14, 2, 9]],
    ["unending", [2, 8, 4]],
    ["force", [8, 14, 18]],
    ["cryptbloom", [3, 13, 2]],
    ["luden", [3, 15, 2]],
    ["archangel", [3, 2, 15]],
    ["manamune", [0, 2, 15]],
    ["stormsurge", [3, 12, 18]],
    ["voltaic", [0, 11, 2]],
    ["spirit", [8, 14, 2, 9]],
    ["kaernic", [8, 9, 14]],
    ["dead", [8, 4, 18]],
    ["nashor", [3, 1, 2]],
    ["liandry", [3, 8]],
    ["void", [3, 13]],
    ["cosmic", [3, 8, 2, 18]],
    ["guinsoo", [0, 3, 1]],
    ["hubris", [0, 11, 2]],
    ["axiom", [0, 11, 2]],
    ["immortal", [0, 6]],
    ["ldr", [0, 5, 6]],
    ["mortal", [0, 5, 6]],
    ["terminus", [0, 1]],
    ["experimental", [0, 1, 8]],
    ["hullbreaker", [0, 8, 18]],
    ["bc", [0, 8, 2]],
    ["heartsteel", [8, 9]],
    ["banshee", [3, 14]],
    ["lich", [3, 18, 2]],
    ["rift", [3, 8, 2]],
    ["essence", [0, 2, 6]],
    ["zephyr", [1, 17]],
    ["kraken", [0, 1, 18]],
    ["maw", [0, 2, 14]],
    ["shojin", [0, 8, 2]],
    ["sundered", [0, 8, 2]],
    ["warmogs", [8, 9, 18]],
    ["shadowflame", [3, 12]],
    ["serylda", [0, 11, 2]],
    ["collector", [0, 11, 6]],
    ["yuntal", [0, 6]],
    ["bork", [0, 1, 10]],
    ["dd", [0, 2, 4]],
    ["ga", [0, 4]],
    ["jaksho", [4, 8, 14]],
    ["steraks", [8, 20]],
    ["zhonyas", [3, 4]],
    ["profane", [0, 11, 2]],
    ["stride", [0, 1, 8]],
    ["ravenous", [0, 2, 10]],
    ["titanic", [0, 8]],
    ["mercurial", [0, 14, 10]],
    ["overlord", [0, 8]],
    ["triforce", [0, 1, 8, 2]],
    ["ie", [0, 6]],
    ["blood", [0, 10]],
    ["rabadon", [3]],
];

export { starter, basic, boots, epic, legendary };