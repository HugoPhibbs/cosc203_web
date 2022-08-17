const allEmoji = [
    {
        "name": "grinning face",
        "emoji": "ðŸ˜€"
    },
    {
        "name": "grinning face with big eyes",
        "emoji": "ðŸ˜ƒ"
    },
    {
        "name": "grinning face with smiling eyes",
        "emoji": "ðŸ˜„"
    },
    {
        "name": "beaming face with smiling eyes",
        "emoji": "ðŸ˜"
    },
    {
        "name": "grinning squinting face",
        "emoji": "ðŸ˜†"
    },
    {
        "name": "grinning face with sweat",
        "emoji": "ðŸ˜…"
    },
    {
        "name": "rolling on the floor laughing",
        "emoji": "ðŸ¤£"
    },
    {
        "name": "face with tears of joy",
        "emoji": "ðŸ˜‚"
    },
    {
        "name": "slightly smiling face",
        "emoji": "ðŸ™‚"
    },
    {
        "name": "upside-down face",
        "emoji": "ðŸ™ƒ"
    },
    {
        "name": "melting face",
        "emoji": "ðŸ« "
    },
    {
        "name": "winking face",
        "emoji": "ðŸ˜‰"
    },
    {
        "name": "smiling face with smiling eyes",
        "emoji": "ðŸ˜Š"
    },
    {
        "name": "smiling face with halo",
        "emoji": "ðŸ˜‡"
    },
    {
        "name": "smiling face with hearts",
        "emoji": "ðŸ¥°"
    },
    {
        "name": "smiling face with heart-eyes",
        "emoji": "ðŸ˜"
    },
    {
        "name": "star-struck",
        "emoji": "ðŸ¤©"
    },
    {
        "name": "face blowing a kiss",
        "emoji": "ðŸ˜˜"
    },
    {
        "name": "kissing face",
        "emoji": "ðŸ˜—"
    },
    {
        "name": "smiling face",
        "emoji": "â˜ºï¸"
    },
    {
        "name": "kissing face with closed eyes",
        "emoji": "ðŸ˜š"
    },
    {
        "name": "kissing face with smiling eyes",
        "emoji": "ðŸ˜™"
    },
    {
        "name": "smiling face with tear",
        "emoji": "ðŸ¥²"
    },
    {
        "name": "face savoring food",
        "emoji": "ðŸ˜‹"
    },
    {
        "name": "face with tongue",
        "emoji": "ðŸ˜›"
    },
    {
        "name": "winking face with tongue",
        "emoji": "ðŸ˜œ"
    },
    {
        "name": "zany face",
        "emoji": "ðŸ¤ª"
    },
    {
        "name": "squinting face with tongue",
        "emoji": "ðŸ˜"
    },
    {
        "name": "money-mouth face",
        "emoji": "ðŸ¤‘"
    },
    {
        "name": "smiling face with open hands",
        "emoji": "ðŸ¤—"
    },
    {
        "name": "face with hand over mouth",
        "emoji": "ðŸ¤­"
    },
    {
        "name": "face with open eyes and hand over mouth",
        "emoji": "ðŸ«¢"
    },
    {
        "name": "face with peeking eye",
        "emoji": "ðŸ«£"
    },
    {
        "name": "shushing face",
        "emoji": "ðŸ¤«"
    },
    {
        "name": "thinking face",
        "emoji": "ðŸ¤”"
    },
    {
        "name": "saluting face",
        "emoji": "ðŸ«¡"
    },
    {
        "name": "zipper-mouth face",
        "emoji": "ðŸ¤"
    },
    {
        "name": "face with raised eyebrow",
        "emoji": "ðŸ¤¨"
    },
    {
        "name": "neutral face",
        "emoji": "ðŸ˜"
    },
    {
        "name": "expressionless face",
        "emoji": "ðŸ˜‘"
    },
    {
        "name": "face without mouth",
        "emoji": "ðŸ˜¶"
    },
    {
        "name": "dotted line face",
        "emoji": "ðŸ«¥"
    },
    {
        "name": "face in clouds",
        "emoji": "ðŸ˜¶â€ðŸŒ«ï¸"
    },
    {
        "name": "smirking face",
        "emoji": "ðŸ˜"
    },
    {
        "name": "unamused face",
        "emoji": "ðŸ˜’"
    },
    {
        "name": "face with rolling eyes",
        "emoji": "ðŸ™„"
    },
    {
        "name": "grimacing face",
        "emoji": "ðŸ˜¬"
    },
    {
        "name": "face exhaling",
        "emoji": "ðŸ˜®â€ðŸ’¨"
    },
    {
        "name": "lying face",
        "emoji": "ðŸ¤¥"
    },
    {
        "name": "relieved face",
        "emoji": "ðŸ˜Œ"
    },
    {
        "name": "pensive face",
        "emoji": "ðŸ˜”"
    },
    {
        "name": "sleepy face",
        "emoji": "ðŸ˜ª"
    },
    {
        "name": "drooling face",
        "emoji": "ðŸ¤¤"
    },
    {
        "name": "sleeping face",
        "emoji": "ðŸ˜´"
    },
    {
        "name": "face with medical mask",
        "emoji": "ðŸ˜·"
    },
    {
        "name": "face with thermometer",
        "emoji": "ðŸ¤’"
    },
    {
        "name": "face with head-bandage",
        "emoji": "ðŸ¤•"
    },
    {
        "name": "nauseated face",
        "emoji": "ðŸ¤¢"
    },
    {
        "name": "face vomiting",
        "emoji": "ðŸ¤®"
    },
    {
        "name": "sneezing face",
        "emoji": "ðŸ¤§"
    },
    {
        "name": "hot face",
        "emoji": "ðŸ¥µ"
    },
    {
        "name": "cold face",
        "emoji": "ðŸ¥¶"
    },
    {
        "name": "woozy face",
        "emoji": "ðŸ¥´"
    },
    {
        "name": "face with crossed-out eyes",
        "emoji": "ðŸ˜µ"
    },
    {
        "name": "face with spiral eyes",
        "emoji": "ðŸ˜µâ€ðŸ’«"
    },
    {
        "name": "exploding head",
        "emoji": "ðŸ¤¯"
    },
    {
        "name": "cowboy hat face",
        "emoji": "ðŸ¤ "
    },
    {
        "name": "partying face",
        "emoji": "ðŸ¥³"
    },
    {
        "name": "disguised face",
        "emoji": "ðŸ¥¸"
    },
    {
        "name": "smiling face with sunglasses",
        "emoji": "ðŸ˜Ž"
    },
    {
        "name": "nerd face",
        "emoji": "ðŸ¤“"
    },
    {
        "name": "face with monocle",
        "emoji": "ðŸ§"
    },
    {
        "name": "confused face",
        "emoji": "ðŸ˜•"
    },
    {
        "name": "face with diagonal mouth",
        "emoji": "ðŸ«¤"
    },
    {
        "name": "worried face",
        "emoji": "ðŸ˜Ÿ"
    },
    {
        "name": "slightly frowning face",
        "emoji": "ðŸ™"
    },
    {
        "name": "frowning face",
        "emoji": "â˜¹ï¸"
    },
    {
        "name": "face with open mouth",
        "emoji": "ðŸ˜®"
    },
    {
        "name": "hushed face",
        "emoji": "ðŸ˜¯"
    },
    {
        "name": "astonished face",
        "emoji": "ðŸ˜²"
    },
    {
        "name": "flushed face",
        "emoji": "ðŸ˜³"
    },
    {
        "name": "pleading face",
        "emoji": "ðŸ¥º"
    },
    {
        "name": "face holding back tears",
        "emoji": "ðŸ¥¹"
    },
    {
        "name": "frowning face with open mouth",
        "emoji": "ðŸ˜¦"
    },
    {
        "name": "anguished face",
        "emoji": "ðŸ˜§"
    },
    {
        "name": "fearful face",
        "emoji": "ðŸ˜¨"
    },
    {
        "name": "anxious face with sweat",
        "emoji": "ðŸ˜°"
    },
    {
        "name": "sad but relieved face",
        "emoji": "ðŸ˜¥"
    },
    {
        "name": "crying face",
        "emoji": "ðŸ˜¢"
    },
    {
        "name": "loudly crying face",
        "emoji": "ðŸ˜­"
    },
    {
        "name": "face screaming in fear",
        "emoji": "ðŸ˜±"
    },
    {
        "name": "confounded face",
        "emoji": "ðŸ˜–"
    },
    {
        "name": "persevering face",
        "emoji": "ðŸ˜£"
    },
    {
        "name": "disappointed face",
        "emoji": "ðŸ˜ž"
    },
    {
        "name": "downcast face with sweat",
        "emoji": "ðŸ˜“"
    },
    {
        "name": "weary face",
        "emoji": "ðŸ˜©"
    },
    {
        "name": "tired face",
        "emoji": "ðŸ˜«"
    },
    {
        "name": "yawning face",
        "emoji": "ðŸ¥±"
    },
    {
        "name": "face with steam from nose",
        "emoji": "ðŸ˜¤"
    },
    {
        "name": "pouting face",
        "emoji": "ðŸ˜¡"
    },
    {
        "name": "angry face",
        "emoji": "ðŸ˜ "
    },
    {
        "name": "face with symbols on mouth",
        "emoji": "ðŸ¤¬"
    },
    {
        "name": "smiling face with horns",
        "emoji": "ðŸ˜ˆ"
    },
    {
        "name": "angry face with horns",
        "emoji": "ðŸ‘¿"
    },
    {
        "name": "skull",
        "emoji": "ðŸ’€"
    },
    {
        "name": "skull and crossbones",
        "emoji": "â˜ ï¸"
    },
    {
        "name": "pile of poo",
        "emoji": "ðŸ’©"
    },
    {
        "name": "clown face",
        "emoji": "ðŸ¤¡"
    },
    {
        "name": "ogre",
        "emoji": "ðŸ‘¹"
    },
    {
        "name": "goblin",
        "emoji": "ðŸ‘º"
    },
    {
        "name": "ghost",
        "emoji": "ðŸ‘»"
    },
    {
        "name": "alien",
        "emoji": "ðŸ‘½"
    },
    {
        "name": "alien monster",
        "emoji": "ðŸ‘¾"
    },
    {
        "name": "robot",
        "emoji": "ðŸ¤–"
    },
    {
        "name": "grinning cat",
        "emoji": "ðŸ˜º"
    },
    {
        "name": "grinning cat with smiling eyes",
        "emoji": "ðŸ˜¸"
    },
    {
        "name": "cat with tears of joy",
        "emoji": "ðŸ˜¹"
    },
    {
        "name": "smiling cat with heart-eyes",
        "emoji": "ðŸ˜»"
    },
    {
        "name": "cat with wry smile",
        "emoji": "ðŸ˜¼"
    },
    {
        "name": "kissing cat",
        "emoji": "ðŸ˜½"
    },
    {
        "name": "weary cat",
        "emoji": "ðŸ™€"
    },
    {
        "name": "crying cat",
        "emoji": "ðŸ˜¿"
    },
    {
        "name": "pouting cat",
        "emoji": "ðŸ˜¾"
    },
    {
        "name": "see-no-evil monkey",
        "emoji": "ðŸ™ˆ"
    },
    {
        "name": "hear-no-evil monkey",
        "emoji": "ðŸ™‰"
    },
    {
        "name": "speak-no-evil monkey",
        "emoji": "ðŸ™Š"
    },
    {
        "name": "kiss mark",
        "emoji": "ðŸ’‹"
    },
    {
        "name": "love letter",
        "emoji": "ðŸ’Œ"
    },
    {
        "name": "heart with arrow",
        "emoji": "ðŸ’˜"
    },
    {
        "name": "heart with ribbon",
        "emoji": "ðŸ’"
    },
    {
        "name": "sparkling heart",
        "emoji": "ðŸ’–"
    },
    {
        "name": "growing heart",
        "emoji": "ðŸ’—"
    },
    {
        "name": "beating heart",
        "emoji": "ðŸ’“"
    },
    {
        "name": "revolving hearts",
        "emoji": "ðŸ’ž"
    },
    {
        "name": "two hearts",
        "emoji": "ðŸ’•"
    },
    {
        "name": "heart decoration",
        "emoji": "ðŸ’Ÿ"
    },
    {
        "name": "heart exclamation",
        "emoji": "â£ï¸"
    },
    {
        "name": "broken heart",
        "emoji": "ðŸ’”"
    },
    {
        "name": "heart on fire",
        "emoji": "â¤ï¸â€ðŸ”¥"
    },
    {
        "name": "mending heart",
        "emoji": "â¤ï¸â€ðŸ©¹"
    },
    {
        "name": "red heart",
        "emoji": "â¤ï¸"
    },
    {
        "name": "orange heart",
        "emoji": "ðŸ§¡"
    },
    {
        "name": "yellow heart",
        "emoji": "ðŸ’›"
    },
    {
        "name": "green heart",
        "emoji": "ðŸ’š"
    },
    {
        "name": "blue heart",
        "emoji": "ðŸ’™"
    },
    {
        "name": "purple heart",
        "emoji": "ðŸ’œ"
    },
    {
        "name": "brown heart",
        "emoji": "ðŸ¤Ž"
    },
    {
        "name": "black heart",
        "emoji": "ðŸ–¤"
    },
    {
        "name": "white heart",
        "emoji": "ðŸ¤"
    },
    {
        "name": "hundred points",
        "emoji": "ðŸ’¯"
    },
    {
        "name": "anger symbol",
        "emoji": "ðŸ’¢"
    },
    {
        "name": "collision",
        "emoji": "ðŸ’¥"
    },
    {
        "name": "dizzy",
        "emoji": "ðŸ’«"
    },
    {
        "name": "sweat droplets",
        "emoji": "ðŸ’¦"
    },
    {
        "name": "dashing away",
        "emoji": "ðŸ’¨"
    },
    {
        "name": "hole",
        "emoji": "ðŸ•³ï¸"
    },
    {
        "name": "bomb",
        "emoji": "ðŸ’£"
    },
    {
        "name": "speech balloon",
        "emoji": "ðŸ’¬"
    },
    {
        "name": "eye in speech bubble",
        "emoji": "ðŸ‘ï¸â€ðŸ—¨ï¸"
    },
    {
        "name": "left speech bubble",
        "emoji": "ðŸ—¨ï¸"
    },
    {
        "name": "right anger bubble",
        "emoji": "ðŸ—¯ï¸"
    },
    {
        "name": "thought balloon",
        "emoji": "ðŸ’­"
    },
    {
        "name": "zzz",
        "emoji": "ðŸ’¤"
    },
    {
        "name": "waving hand",
        "emoji": "ðŸ‘‹"
    },
    {
        "name": "raised back of hand",
        "emoji": "ðŸ¤š"
    },
    {
        "name": "hand with fingers splayed",
        "emoji": "ðŸ–ï¸"
    },
    {
        "name": "raised hand",
        "emoji": "âœ‹"
    },
    {
        "name": "vulcan salute",
        "emoji": "ðŸ––"
    },
    {
        "name": "rightwards hand",
        "emoji": "ðŸ«±"
    },
    {
        "name": "leftwards hand",
        "emoji": "ðŸ«²"
    },
    {
        "name": "palm down hand",
        "emoji": "ðŸ«³"
    },
    {
        "name": "palm up hand",
        "emoji": "ðŸ«´"
    },
    {
        "name": "OK hand",
        "emoji": "ðŸ‘Œ"
    },
    {
        "name": "pinched fingers",
        "emoji": "ðŸ¤Œ"
    },
    {
        "name": "pinching hand",
        "emoji": "ðŸ¤"
    },
    {
        "name": "victory hand",
        "emoji": "âœŒï¸"
    },
    {
        "name": "crossed fingers",
        "emoji": "ðŸ¤ž"
    },
    {
        "name": "hand with index finger and thumb crossed",
        "emoji": "ðŸ«°"
    },
    {
        "name": "love-you gesture",
        "emoji": "ðŸ¤Ÿ"
    },
    {
        "name": "sign of the horns",
        "emoji": "ðŸ¤˜"
    },
    {
        "name": "call me hand",
        "emoji": "ðŸ¤™"
    },
    {
        "name": "backhand index pointing left",
        "emoji": "ðŸ‘ˆ"
    },
    {
        "name": "backhand index pointing right",
        "emoji": "ðŸ‘‰"
    },
    {
        "name": "backhand index pointing up",
        "emoji": "ðŸ‘†"
    },
    {
        "name": "middle finger",
        "emoji": "ðŸ–•"
    },
    {
        "name": "backhand index pointing down",
        "emoji": "ðŸ‘‡"
    },
    {
        "name": "index pointing up",
        "emoji": "â˜ï¸"
    },
    {
        "name": "index pointing at the viewer",
        "emoji": "ðŸ«µ"
    },
    {
        "name": "thumbs up",
        "emoji": "ðŸ‘"
    },
    {
        "name": "thumbs down",
        "emoji": "ðŸ‘Ž"
    },
    {
        "name": "raised fist",
        "emoji": "âœŠ"
    },
    {
        "name": "oncoming fist",
        "emoji": "ðŸ‘Š"
    },
    {
        "name": "left-facing fist",
        "emoji": "ðŸ¤›"
    },
    {
        "name": "right-facing fist",
        "emoji": "ðŸ¤œ"
    },
    {
        "name": "clapping hands",
        "emoji": "ðŸ‘"
    },
    {
        "name": "raising hands",
        "emoji": "ðŸ™Œ"
    },
    {
        "name": "heart hands",
        "emoji": "ðŸ«¶"
    },
    {
        "name": "open hands",
        "emoji": "ðŸ‘"
    },
    {
        "name": "palms up together",
        "emoji": "ðŸ¤²"
    },
    {
        "name": "handshake",
        "emoji": "ðŸ¤"
    },
    {
        "name": "folded hands",
        "emoji": "ðŸ™"
    },
    {
        "name": "writing hand",
        "emoji": "âœï¸"
    },
    {
        "name": "nail polish",
        "emoji": "ðŸ’…"
    },
    {
        "name": "selfie",
        "emoji": "ðŸ¤³"
    },
    {
        "name": "flexed biceps",
        "emoji": "ðŸ’ª"
    },
    {
        "name": "mechanical arm",
        "emoji": "ðŸ¦¾"
    },
    {
        "name": "mechanical leg",
        "emoji": "ðŸ¦¿"
    },
    {
        "name": "leg",
        "emoji": "ðŸ¦µ"
    },
    {
        "name": "foot",
        "emoji": "ðŸ¦¶"
    },
    {
        "name": "ear",
        "emoji": "ðŸ‘‚"
    },
    {
        "name": "ear with hearing aid",
        "emoji": "ðŸ¦»"
    },
    {
        "name": "nose",
        "emoji": "ðŸ‘ƒ"
    },
    {
        "name": "brain",
        "emoji": "ðŸ§ "
    },
    {
        "name": "anatomical heart",
        "emoji": "ðŸ«€"
    },
    {
        "name": "lungs",
        "emoji": "ðŸ«"
    },
    {
        "name": "tooth",
        "emoji": "ðŸ¦·"
    },
    {
        "name": "bone",
        "emoji": "ðŸ¦´"
    },
    {
        "name": "eyes",
        "emoji": "ðŸ‘€"
    },
    {
        "name": "eye",
        "emoji": "ðŸ‘ï¸"
    },
    {
        "name": "tongue",
        "emoji": "ðŸ‘…"
    },
    {
        "name": "mouth",
        "emoji": "ðŸ‘„"
    },
    {
        "name": "biting lip",
        "emoji": "ðŸ«¦"
    },
    {
        "name": "baby",
        "emoji": "ðŸ‘¶"
    },
    {
        "name": "child",
        "emoji": "ðŸ§’"
    },
    {
        "name": "boy",
        "emoji": "ðŸ‘¦"
    },
    {
        "name": "girl",
        "emoji": "ðŸ‘§"
    },
    {
        "name": "person",
        "emoji": "ðŸ§‘"
    },
    {
        "name": "person blond hair",
        "emoji": "ðŸ‘±"
    },
    {
        "name": "man",
        "emoji": "ðŸ‘¨"
    },
    {
        "name": "person beard",
        "emoji": "ðŸ§”"
    },
    {
        "name": "man beard",
        "emoji": "ðŸ§”â€â™‚ï¸"
    },
    {
        "name": "woman beard",
        "emoji": "ðŸ§”â€â™€ï¸"
    },
    {
        "name": "man red hair",
        "emoji": "ðŸ‘¨â€ðŸ¦°"
    },
    {
        "name": "man curly hair",
        "emoji": "ðŸ‘¨â€ðŸ¦±"
    },
    {
        "name": "man white hair",
        "emoji": "ðŸ‘¨â€ðŸ¦³"
    },
    {
        "name": "man bald",
        "emoji": "ðŸ‘¨â€ðŸ¦²"
    },
    {
        "name": "woman",
        "emoji": "ðŸ‘©"
    },
    {
        "name": "woman red hair",
        "emoji": "ðŸ‘©â€ðŸ¦°"
    },
    {
        "name": "person red hair",
        "emoji": "ðŸ§‘â€ðŸ¦°"
    },
    {
        "name": "woman curly hair",
        "emoji": "ðŸ‘©â€ðŸ¦±"
    },
    {
        "name": "person curly hair",
        "emoji": "ðŸ§‘â€ðŸ¦±"
    },
    {
        "name": "woman white hair",
        "emoji": "ðŸ‘©â€ðŸ¦³"
    },
    {
        "name": "person white hair",
        "emoji": "ðŸ§‘â€ðŸ¦³"
    },
    {
        "name": "woman bald",
        "emoji": "ðŸ‘©â€ðŸ¦²"
    },
    {
        "name": "person bald",
        "emoji": "ðŸ§‘â€ðŸ¦²"
    },
    {
        "name": "woman blond hair",
        "emoji": "ðŸ‘±â€â™€ï¸"
    },
    {
        "name": "man blond hair",
        "emoji": "ðŸ‘±â€â™‚ï¸"
    },
    {
        "name": "older person",
        "emoji": "ðŸ§“"
    },
    {
        "name": "old man",
        "emoji": "ðŸ‘´"
    },
    {
        "name": "old woman",
        "emoji": "ðŸ‘µ"
    },
    {
        "name": "person frowning",
        "emoji": "ðŸ™"
    },
    {
        "name": "man frowning",
        "emoji": "ðŸ™â€â™‚ï¸"
    },
    {
        "name": "woman frowning",
        "emoji": "ðŸ™â€â™€ï¸"
    },
    {
        "name": "person pouting",
        "emoji": "ðŸ™Ž"
    },
    {
        "name": "man pouting",
        "emoji": "ðŸ™Žâ€â™‚ï¸"
    },
    {
        "name": "woman pouting",
        "emoji": "ðŸ™Žâ€â™€ï¸"
    },
    {
        "name": "person gesturing NO",
        "emoji": "ðŸ™…"
    },
    {
        "name": "man gesturing NO",
        "emoji": "ðŸ™…â€â™‚ï¸"
    },
    {
        "name": "woman gesturing NO",
        "emoji": "ðŸ™…â€â™€ï¸"
    },
    {
        "name": "person gesturing OK",
        "emoji": "ðŸ™†"
    },
    {
        "name": "man gesturing OK",
        "emoji": "ðŸ™†â€â™‚ï¸"
    },
    {
        "name": "woman gesturing OK",
        "emoji": "ðŸ™†â€â™€ï¸"
    },
    {
        "name": "person tipping hand",
        "emoji": "ðŸ’"
    },
    {
        "name": "man tipping hand",
        "emoji": "ðŸ’â€â™‚ï¸"
    },
    {
        "name": "woman tipping hand",
        "emoji": "ðŸ’â€â™€ï¸"
    },
    {
        "name": "person raising hand",
        "emoji": "ðŸ™‹"
    },
    {
        "name": "man raising hand",
        "emoji": "ðŸ™‹â€â™‚ï¸"
    },
    {
        "name": "woman raising hand",
        "emoji": "ðŸ™‹â€â™€ï¸"
    },
    {
        "name": "deaf person",
        "emoji": "ðŸ§"
    },
    {
        "name": "deaf man",
        "emoji": "ðŸ§â€â™‚ï¸"
    },
    {
        "name": "deaf woman",
        "emoji": "ðŸ§â€â™€ï¸"
    },
    {
        "name": "person bowing",
        "emoji": "ðŸ™‡"
    },
    {
        "name": "man bowing",
        "emoji": "ðŸ™‡â€â™‚ï¸"
    },
    {
        "name": "woman bowing",
        "emoji": "ðŸ™‡â€â™€ï¸"
    },
    {
        "name": "person facepalming",
        "emoji": "ðŸ¤¦"
    },
    {
        "name": "man facepalming",
        "emoji": "ðŸ¤¦â€â™‚ï¸"
    },
    {
        "name": "woman facepalming",
        "emoji": "ðŸ¤¦â€â™€ï¸"
    },
    {
        "name": "person shrugging",
        "emoji": "ðŸ¤·"
    },
    {
        "name": "man shrugging",
        "emoji": "ðŸ¤·â€â™‚ï¸"
    },
    {
        "name": "woman shrugging",
        "emoji": "ðŸ¤·â€â™€ï¸"
    },
    {
        "name": "health worker",
        "emoji": "ðŸ§‘â€âš•ï¸"
    },
    {
        "name": "man health worker",
        "emoji": "ðŸ‘¨â€âš•ï¸"
    },
    {
        "name": "woman health worker",
        "emoji": "ðŸ‘©â€âš•ï¸"
    },
    {
        "name": "student",
        "emoji": "ðŸ§‘â€ðŸŽ“"
    },
    {
        "name": "man student",
        "emoji": "ðŸ‘¨â€ðŸŽ“"
    },
    {
        "name": "woman student",
        "emoji": "ðŸ‘©â€ðŸŽ“"
    },
    {
        "name": "teacher",
        "emoji": "ðŸ§‘â€ðŸ«"
    },
    {
        "name": "man teacher",
        "emoji": "ðŸ‘¨â€ðŸ«"
    },
    {
        "name": "woman teacher",
        "emoji": "ðŸ‘©â€ðŸ«"
    },
    {
        "name": "judge",
        "emoji": "ðŸ§‘â€âš–ï¸"
    },
    {
        "name": "man judge",
        "emoji": "ðŸ‘¨â€âš–ï¸"
    },
    {
        "name": "woman judge",
        "emoji": "ðŸ‘©â€âš–ï¸"
    },
    {
        "name": "farmer",
        "emoji": "ðŸ§‘â€ðŸŒ¾"
    },
    {
        "name": "man farmer",
        "emoji": "ðŸ‘¨â€ðŸŒ¾"
    },
    {
        "name": "woman farmer",
        "emoji": "ðŸ‘©â€ðŸŒ¾"
    },
    {
        "name": "cook",
        "emoji": "ðŸ§‘â€ðŸ³"
    },
    {
        "name": "man cook",
        "emoji": "ðŸ‘¨â€ðŸ³"
    },
    {
        "name": "woman cook",
        "emoji": "ðŸ‘©â€ðŸ³"
    },
    {
        "name": "mechanic",
        "emoji": "ðŸ§‘â€ðŸ”§"
    },
    {
        "name": "man mechanic",
        "emoji": "ðŸ‘¨â€ðŸ”§"
    },
    {
        "name": "woman mechanic",
        "emoji": "ðŸ‘©â€ðŸ”§"
    },
    {
        "name": "factory worker",
        "emoji": "ðŸ§‘â€ðŸ­"
    },
    {
        "name": "man factory worker",
        "emoji": "ðŸ‘¨â€ðŸ­"
    },
    {
        "name": "woman factory worker",
        "emoji": "ðŸ‘©â€ðŸ­"
    },
    {
        "name": "office worker",
        "emoji": "ðŸ§‘â€ðŸ’¼"
    },
    {
        "name": "man office worker",
        "emoji": "ðŸ‘¨â€ðŸ’¼"
    },
    {
        "name": "woman office worker",
        "emoji": "ðŸ‘©â€ðŸ’¼"
    },
    {
        "name": "scientist",
        "emoji": "ðŸ§‘â€ðŸ”¬"
    },
    {
        "name": "man scientist",
        "emoji": "ðŸ‘¨â€ðŸ”¬"
    },
    {
        "name": "woman scientist",
        "emoji": "ðŸ‘©â€ðŸ”¬"
    },
    {
        "name": "technologist",
        "emoji": "ðŸ§‘â€ðŸ’»"
    },
    {
        "name": "man technologist",
        "emoji": "ðŸ‘¨â€ðŸ’»"
    },
    {
        "name": "woman technologist",
        "emoji": "ðŸ‘©â€ðŸ’»"
    },
    {
        "name": "singer",
        "emoji": "ðŸ§‘â€ðŸŽ¤"
    },
    {
        "name": "man singer",
        "emoji": "ðŸ‘¨â€ðŸŽ¤"
    },
    {
        "name": "woman singer",
        "emoji": "ðŸ‘©â€ðŸŽ¤"
    },
    {
        "name": "artist",
        "emoji": "ðŸ§‘â€ðŸŽ¨"
    },
    {
        "name": "man artist",
        "emoji": "ðŸ‘¨â€ðŸŽ¨"
    },
    {
        "name": "woman artist",
        "emoji": "ðŸ‘©â€ðŸŽ¨"
    },
    {
        "name": "pilot",
        "emoji": "ðŸ§‘â€âœˆï¸"
    },
    {
        "name": "man pilot",
        "emoji": "ðŸ‘¨â€âœˆï¸"
    },
    {
        "name": "woman pilot",
        "emoji": "ðŸ‘©â€âœˆï¸"
    },
    {
        "name": "astronaut",
        "emoji": "ðŸ§‘â€ðŸš€"
    },
    {
        "name": "man astronaut",
        "emoji": "ðŸ‘¨â€ðŸš€"
    },
    {
        "name": "woman astronaut",
        "emoji": "ðŸ‘©â€ðŸš€"
    },
    {
        "name": "firefighter",
        "emoji": "ðŸ§‘â€ðŸš’"
    },
    {
        "name": "man firefighter",
        "emoji": "ðŸ‘¨â€ðŸš’"
    },
    {
        "name": "woman firefighter",
        "emoji": "ðŸ‘©â€ðŸš’"
    },
    {
        "name": "police officer",
        "emoji": "ðŸ‘®"
    },
    {
        "name": "man police officer",
        "emoji": "ðŸ‘®â€â™‚ï¸"
    },
    {
        "name": "woman police officer",
        "emoji": "ðŸ‘®â€â™€ï¸"
    },
    {
        "name": "detective",
        "emoji": "ðŸ•µï¸"
    },
    {
        "name": "man detective",
        "emoji": "ðŸ•µï¸â€â™‚ï¸"
    },
    {
        "name": "woman detective",
        "emoji": "ðŸ•µï¸â€â™€ï¸"
    },
    {
        "name": "guard",
        "emoji": "ðŸ’‚"
    },
    {
        "name": "man guard",
        "emoji": "ðŸ’‚â€â™‚ï¸"
    },
    {
        "name": "woman guard",
        "emoji": "ðŸ’‚â€â™€ï¸"
    },
    {
        "name": "ninja",
        "emoji": "ðŸ¥·"
    },
    {
        "name": "construction worker",
        "emoji": "ðŸ‘·"
    },
    {
        "name": "man construction worker",
        "emoji": "ðŸ‘·â€â™‚ï¸"
    },
    {
        "name": "woman construction worker",
        "emoji": "ðŸ‘·â€â™€ï¸"
    },
    {
        "name": "person with crown",
        "emoji": "ðŸ«…"
    },
    {
        "name": "prince",
        "emoji": "ðŸ¤´"
    },
    {
        "name": "princess",
        "emoji": "ðŸ‘¸"
    },
    {
        "name": "person wearing turban",
        "emoji": "ðŸ‘³"
    },
    {
        "name": "man wearing turban",
        "emoji": "ðŸ‘³â€â™‚ï¸"
    },
    {
        "name": "woman wearing turban",
        "emoji": "ðŸ‘³â€â™€ï¸"
    },
    {
        "name": "person with skullcap",
        "emoji": "ðŸ‘²"
    },
    {
        "name": "woman with headscarf",
        "emoji": "ðŸ§•"
    },
    {
        "name": "person in tuxedo",
        "emoji": "ðŸ¤µ"
    },
    {
        "name": "man in tuxedo",
        "emoji": "ðŸ¤µâ€â™‚ï¸"
    },
    {
        "name": "woman in tuxedo",
        "emoji": "ðŸ¤µâ€â™€ï¸"
    },
    {
        "name": "person with veil",
        "emoji": "ðŸ‘°"
    },
    {
        "name": "man with veil",
        "emoji": "ðŸ‘°â€â™‚ï¸"
    },
    {
        "name": "woman with veil",
        "emoji": "ðŸ‘°â€â™€ï¸"
    },
    {
        "name": "pregnant woman",
        "emoji": "ðŸ¤°"
    },
    {
        "name": "pregnant man",
        "emoji": "ðŸ«ƒ"
    },
    {
        "name": "pregnant person",
        "emoji": "ðŸ«„"
    },
    {
        "name": "breast-feeding",
        "emoji": "ðŸ¤±"
    },
    {
        "name": "woman feeding baby",
        "emoji": "ðŸ‘©â€ðŸ¼"
    },
    {
        "name": "man feeding baby",
        "emoji": "ðŸ‘¨â€ðŸ¼"
    },
    {
        "name": "person feeding baby",
        "emoji": "ðŸ§‘â€ðŸ¼"
    },
    {
        "name": "baby angel",
        "emoji": "ðŸ‘¼"
    },
    {
        "name": "Santa Claus",
        "emoji": "ðŸŽ…"
    },
    {
        "name": "Mrs. Claus",
        "emoji": "ðŸ¤¶"
    },
    {
        "name": "mx claus",
        "emoji": "ðŸ§‘â€ðŸŽ„"
    },
    {
        "name": "superhero",
        "emoji": "ðŸ¦¸"
    },
    {
        "name": "man superhero",
        "emoji": "ðŸ¦¸â€â™‚ï¸"
    },
    {
        "name": "woman superhero",
        "emoji": "ðŸ¦¸â€â™€ï¸"
    },
    {
        "name": "supervillain",
        "emoji": "ðŸ¦¹"
    },
    {
        "name": "man supervillain",
        "emoji": "ðŸ¦¹â€â™‚ï¸"
    },
    {
        "name": "woman supervillain",
        "emoji": "ðŸ¦¹â€â™€ï¸"
    },
    {
        "name": "mage",
        "emoji": "ðŸ§™"
    },
    {
        "name": "man mage",
        "emoji": "ðŸ§™â€â™‚ï¸"
    },
    {
        "name": "woman mage",
        "emoji": "ðŸ§™â€â™€ï¸"
    },
    {
        "name": "fairy",
        "emoji": "ðŸ§š"
    },
    {
        "name": "man fairy",
        "emoji": "ðŸ§šâ€â™‚ï¸"
    },
    {
        "name": "woman fairy",
        "emoji": "ðŸ§šâ€â™€ï¸"
    },
    {
        "name": "vampire",
        "emoji": "ðŸ§›"
    },
    {
        "name": "man vampire",
        "emoji": "ðŸ§›â€â™‚ï¸"
    },
    {
        "name": "woman vampire",
        "emoji": "ðŸ§›â€â™€ï¸"
    },
    {
        "name": "merperson",
        "emoji": "ðŸ§œ"
    },
    {
        "name": "merman",
        "emoji": "ðŸ§œâ€â™‚ï¸"
    },
    {
        "name": "mermaid",
        "emoji": "ðŸ§œâ€â™€ï¸"
    },
    {
        "name": "elf",
        "emoji": "ðŸ§"
    },
    {
        "name": "man elf",
        "emoji": "ðŸ§â€â™‚ï¸"
    },
    {
        "name": "woman elf",
        "emoji": "ðŸ§â€â™€ï¸"
    },
    {
        "name": "genie",
        "emoji": "ðŸ§ž"
    },
    {
        "name": "man genie",
        "emoji": "ðŸ§žâ€â™‚ï¸"
    },
    {
        "name": "woman genie",
        "emoji": "ðŸ§žâ€â™€ï¸"
    },
    {
        "name": "zombie",
        "emoji": "ðŸ§Ÿ"
    },
    {
        "name": "man zombie",
        "emoji": "ðŸ§Ÿâ€â™‚ï¸"
    },
    {
        "name": "woman zombie",
        "emoji": "ðŸ§Ÿâ€â™€ï¸"
    },
    {
        "name": "troll",
        "emoji": "ðŸ§Œ"
    },
    {
        "name": "person getting massage",
        "emoji": "ðŸ’†"
    },
    {
        "name": "man getting massage",
        "emoji": "ðŸ’†â€â™‚ï¸"
    },
    {
        "name": "woman getting massage",
        "emoji": "ðŸ’†â€â™€ï¸"
    },
    {
        "name": "person getting haircut",
        "emoji": "ðŸ’‡"
    },
    {
        "name": "man getting haircut",
        "emoji": "ðŸ’‡â€â™‚ï¸"
    },
    {
        "name": "woman getting haircut",
        "emoji": "ðŸ’‡â€â™€ï¸"
    },
    {
        "name": "person walking",
        "emoji": "ðŸš¶"
    },
    {
        "name": "man walking",
        "emoji": "ðŸš¶â€â™‚ï¸"
    },
    {
        "name": "woman walking",
        "emoji": "ðŸš¶â€â™€ï¸"
    },
    {
        "name": "person standing",
        "emoji": "ðŸ§"
    },
    {
        "name": "man standing",
        "emoji": "ðŸ§â€â™‚ï¸"
    },
    {
        "name": "woman standing",
        "emoji": "ðŸ§â€â™€ï¸"
    },
    {
        "name": "person kneeling",
        "emoji": "ðŸ§Ž"
    },
    {
        "name": "man kneeling",
        "emoji": "ðŸ§Žâ€â™‚ï¸"
    },
    {
        "name": "woman kneeling",
        "emoji": "ðŸ§Žâ€â™€ï¸"
    },
    {
        "name": "person with white cane",
        "emoji": "ðŸ§‘â€ðŸ¦¯"
    },
    {
        "name": "man with white cane",
        "emoji": "ðŸ‘¨â€ðŸ¦¯"
    },
    {
        "name": "woman with white cane",
        "emoji": "ðŸ‘©â€ðŸ¦¯"
    },
    {
        "name": "person in motorized wheelchair",
        "emoji": "ðŸ§‘â€ðŸ¦¼"
    },
    {
        "name": "man in motorized wheelchair",
        "emoji": "ðŸ‘¨â€ðŸ¦¼"
    },
    {
        "name": "woman in motorized wheelchair",
        "emoji": "ðŸ‘©â€ðŸ¦¼"
    },
    {
        "name": "person in manual wheelchair",
        "emoji": "ðŸ§‘â€ðŸ¦½"
    },
    {
        "name": "man in manual wheelchair",
        "emoji": "ðŸ‘¨â€ðŸ¦½"
    },
    {
        "name": "woman in manual wheelchair",
        "emoji": "ðŸ‘©â€ðŸ¦½"
    },
    {
        "name": "person running",
        "emoji": "ðŸƒ"
    },
    {
        "name": "man running",
        "emoji": "ðŸƒâ€â™‚ï¸"
    },
    {
        "name": "woman running",
        "emoji": "ðŸƒâ€â™€ï¸"
    },
    {
        "name": "woman dancing",
        "emoji": "ðŸ’ƒ"
    },
    {
        "name": "man dancing",
        "emoji": "ðŸ•º"
    },
    {
        "name": "person in suit levitating",
        "emoji": "ðŸ•´ï¸"
    },
    {
        "name": "people with bunny ears",
        "emoji": "ðŸ‘¯"
    },
    {
        "name": "men with bunny ears",
        "emoji": "ðŸ‘¯â€â™‚ï¸"
    },
    {
        "name": "women with bunny ears",
        "emoji": "ðŸ‘¯â€â™€ï¸"
    },
    {
        "name": "person in steamy room",
        "emoji": "ðŸ§–"
    },
    {
        "name": "man in steamy room",
        "emoji": "ðŸ§–â€â™‚ï¸"
    },
    {
        "name": "woman in steamy room",
        "emoji": "ðŸ§–â€â™€ï¸"
    },
    {
        "name": "person climbing",
        "emoji": "ðŸ§—"
    },
    {
        "name": "man climbing",
        "emoji": "ðŸ§—â€â™‚ï¸"
    },
    {
        "name": "woman climbing",
        "emoji": "ðŸ§—â€â™€ï¸"
    },
    {
        "name": "person fencing",
        "emoji": "ðŸ¤º"
    },
    {
        "name": "horse racing",
        "emoji": "ðŸ‡"
    },
    {
        "name": "skier",
        "emoji": "â›·ï¸"
    },
    {
        "name": "snowboarder",
        "emoji": "ðŸ‚"
    },
    {
        "name": "person golfing",
        "emoji": "ðŸŒï¸"
    },
    {
        "name": "man golfing",
        "emoji": "ðŸŒï¸â€â™‚ï¸"
    },
    {
        "name": "woman golfing",
        "emoji": "ðŸŒï¸â€â™€ï¸"
    },
    {
        "name": "person surfing",
        "emoji": "ðŸ„"
    },
    {
        "name": "man surfing",
        "emoji": "ðŸ„â€â™‚ï¸"
    },
    {
        "name": "woman surfing",
        "emoji": "ðŸ„â€â™€ï¸"
    },
    {
        "name": "person rowing boat",
        "emoji": "ðŸš£"
    },
    {
        "name": "man rowing boat",
        "emoji": "ðŸš£â€â™‚ï¸"
    },
    {
        "name": "woman rowing boat",
        "emoji": "ðŸš£â€â™€ï¸"
    },
    {
        "name": "person swimming",
        "emoji": "ðŸŠ"
    },
    {
        "name": "man swimming",
        "emoji": "ðŸŠâ€â™‚ï¸"
    },
    {
        "name": "woman swimming",
        "emoji": "ðŸŠâ€â™€ï¸"
    },
    {
        "name": "person bouncing ball",
        "emoji": "â›¹ï¸"
    },
    {
        "name": "man bouncing ball",
        "emoji": "â›¹ï¸â€â™‚ï¸"
    },
    {
        "name": "woman bouncing ball",
        "emoji": "â›¹ï¸â€â™€ï¸"
    },
    {
        "name": "person lifting weights",
        "emoji": "ðŸ‹ï¸"
    },
    {
        "name": "man lifting weights",
        "emoji": "ðŸ‹ï¸â€â™‚ï¸"
    },
    {
        "name": "woman lifting weights",
        "emoji": "ðŸ‹ï¸â€â™€ï¸"
    },
    {
        "name": "person biking",
        "emoji": "ðŸš´"
    },
    {
        "name": "man biking",
        "emoji": "ðŸš´â€â™‚ï¸"
    },
    {
        "name": "woman biking",
        "emoji": "ðŸš´â€â™€ï¸"
    },
    {
        "name": "person mountain biking",
        "emoji": "ðŸšµ"
    },
    {
        "name": "man mountain biking",
        "emoji": "ðŸšµâ€â™‚ï¸"
    },
    {
        "name": "woman mountain biking",
        "emoji": "ðŸšµâ€â™€ï¸"
    },
    {
        "name": "person cartwheeling",
        "emoji": "ðŸ¤¸"
    },
    {
        "name": "man cartwheeling",
        "emoji": "ðŸ¤¸â€â™‚ï¸"
    },
    {
        "name": "woman cartwheeling",
        "emoji": "ðŸ¤¸â€â™€ï¸"
    },
    {
        "name": "people wrestling",
        "emoji": "ðŸ¤¼"
    },
    {
        "name": "men wrestling",
        "emoji": "ðŸ¤¼â€â™‚ï¸"
    },
    {
        "name": "women wrestling",
        "emoji": "ðŸ¤¼â€â™€ï¸"
    },
    {
        "name": "person playing water polo",
        "emoji": "ðŸ¤½"
    },
    {
        "name": "man playing water polo",
        "emoji": "ðŸ¤½â€â™‚ï¸"
    },
    {
        "name": "woman playing water polo",
        "emoji": "ðŸ¤½â€â™€ï¸"
    },
    {
        "name": "person playing handball",
        "emoji": "ðŸ¤¾"
    },
    {
        "name": "man playing handball",
        "emoji": "ðŸ¤¾â€â™‚ï¸"
    },
    {
        "name": "woman playing handball",
        "emoji": "ðŸ¤¾â€â™€ï¸"
    },
    {
        "name": "person juggling",
        "emoji": "ðŸ¤¹"
    },
    {
        "name": "man juggling",
        "emoji": "ðŸ¤¹â€â™‚ï¸"
    },
    {
        "name": "woman juggling",
        "emoji": "ðŸ¤¹â€â™€ï¸"
    },
    {
        "name": "person in lotus position",
        "emoji": "ðŸ§˜"
    },
    {
        "name": "man in lotus position",
        "emoji": "ðŸ§˜â€â™‚ï¸"
    },
    {
        "name": "woman in lotus position",
        "emoji": "ðŸ§˜â€â™€ï¸"
    },
    {
        "name": "person taking bath",
        "emoji": "ðŸ›€"
    },
    {
        "name": "person in bed",
        "emoji": "ðŸ›Œ"
    },
    {
        "name": "people holding hands",
        "emoji": "ðŸ§‘â€ðŸ¤â€ðŸ§‘"
    },
    {
        "name": "women holding hands",
        "emoji": "ðŸ‘­"
    },
    {
        "name": "woman and man holding hands",
        "emoji": "ðŸ‘«"
    },
    {
        "name": "men holding hands",
        "emoji": "ðŸ‘¬"
    },
    {
        "name": "kiss",
        "emoji": "ðŸ’"
    },
    {
        "name": "kiss woman, man",
        "emoji": "ðŸ‘©â€â¤ï¸â€ðŸ’‹â€ðŸ‘¨"
    },
    {
        "name": "kiss man, man",
        "emoji": "ðŸ‘¨â€â¤ï¸â€ðŸ’‹â€ðŸ‘¨"
    },
    {
        "name": "kiss woman, woman",
        "emoji": "ðŸ‘©â€â¤ï¸â€ðŸ’‹â€ðŸ‘©"
    },
    {
        "name": "couple with heart",
        "emoji": "ðŸ’‘"
    },
    {
        "name": "couple with heart woman, man",
        "emoji": "ðŸ‘©â€â¤ï¸â€ðŸ‘¨"
    },
    {
        "name": "couple with heart man, man",
        "emoji": "ðŸ‘¨â€â¤ï¸â€ðŸ‘¨"
    },
    {
        "name": "couple with heart woman, woman",
        "emoji": "ðŸ‘©â€â¤ï¸â€ðŸ‘©"
    },
    {
        "name": "family",
        "emoji": "ðŸ‘ª"
    },
    {
        "name": "family man, woman, boy",
        "emoji": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘¦"
    },
    {
        "name": "family man, woman, girl",
        "emoji": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§"
    },
    {
        "name": "family man, woman, girl, boy",
        "emoji": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦"
    },
    {
        "name": "family man, woman, boy, boy",
        "emoji": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘¦â€ðŸ‘¦"
    },
    {
        "name": "family man, woman, girl, girl",
        "emoji": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘§"
    },
    {
        "name": "family man, man, boy",
        "emoji": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘¦"
    },
    {
        "name": "family man, man, girl",
        "emoji": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘§"
    },
    {
        "name": "family man, man, girl, boy",
        "emoji": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘§â€ðŸ‘¦"
    },
    {
        "name": "family man, man, boy, boy",
        "emoji": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘¦â€ðŸ‘¦"
    },
    {
        "name": "family man, man, girl, girl",
        "emoji": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘§â€ðŸ‘§"
    },
    {
        "name": "family woman, woman, boy",
        "emoji": "ðŸ‘©â€ðŸ‘©â€ðŸ‘¦"
    },
    {
        "name": "family woman, woman, girl",
        "emoji": "ðŸ‘©â€ðŸ‘©â€ðŸ‘§"
    },
    {
        "name": "family woman, woman, girl, boy",
        "emoji": "ðŸ‘©â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦"
    },
    {
        "name": "family woman, woman, boy, boy",
        "emoji": "ðŸ‘©â€ðŸ‘©â€ðŸ‘¦â€ðŸ‘¦"
    },
    {
        "name": "family woman, woman, girl, girl",
        "emoji": "ðŸ‘©â€ðŸ‘©â€ðŸ‘§â€ðŸ‘§"
    },
    {
        "name": "family man, boy",
        "emoji": "ðŸ‘¨â€ðŸ‘¦"
    },
    {
        "name": "family man, boy, boy",
        "emoji": "ðŸ‘¨â€ðŸ‘¦â€ðŸ‘¦"
    },
    {
        "name": "family man, girl",
        "emoji": "ðŸ‘¨â€ðŸ‘§"
    },
    {
        "name": "family man, girl, boy",
        "emoji": "ðŸ‘¨â€ðŸ‘§â€ðŸ‘¦"
    },
    {
        "name": "family man, girl, girl",
        "emoji": "ðŸ‘¨â€ðŸ‘§â€ðŸ‘§"
    },
    {
        "name": "family woman, boy",
        "emoji": "ðŸ‘©â€ðŸ‘¦"
    },
    {
        "name": "family woman, boy, boy",
        "emoji": "ðŸ‘©â€ðŸ‘¦â€ðŸ‘¦"
    },
    {
        "name": "family woman, girl",
        "emoji": "ðŸ‘©â€ðŸ‘§"
    },
    {
        "name": "family woman, girl, boy",
        "emoji": "ðŸ‘©â€ðŸ‘§â€ðŸ‘¦"
    },
    {
        "name": "family woman, girl, girl",
        "emoji": "ðŸ‘©â€ðŸ‘§â€ðŸ‘§"
    },
    {
        "name": "speaking head",
        "emoji": "ðŸ—£ï¸"
    },
    {
        "name": "bust in silhouette",
        "emoji": "ðŸ‘¤"
    },
    {
        "name": "busts in silhouette",
        "emoji": "ðŸ‘¥"
    },
    {
        "name": "people hugging",
        "emoji": "ðŸ«‚"
    },
    {
        "name": "footprints",
        "emoji": "ðŸ‘£"
    },
    {
        "name": "monkey face",
        "emoji": "ðŸµ"
    },
    {
        "name": "monkey",
        "emoji": "ðŸ’"
    },
    {
        "name": "gorilla",
        "emoji": "ðŸ¦"
    },
    {
        "name": "orangutan",
        "emoji": "ðŸ¦§"
    },
    {
        "name": "dog face",
        "emoji": "ðŸ¶"
    },
    {
        "name": "dog",
        "emoji": "ðŸ•"
    },
    {
        "name": "guide dog",
        "emoji": "ðŸ¦®"
    },
    {
        "name": "service dog",
        "emoji": "ðŸ•â€ðŸ¦º"
    },
    {
        "name": "poodle",
        "emoji": "ðŸ©"
    },
    {
        "name": "wolf",
        "emoji": "ðŸº"
    },
    {
        "name": "fox",
        "emoji": "ðŸ¦Š"
    },
    {
        "name": "raccoon",
        "emoji": "ðŸ¦"
    },
    {
        "name": "cat face",
        "emoji": "ðŸ±"
    },
    {
        "name": "cat",
        "emoji": "ðŸˆ"
    },
    {
        "name": "black cat",
        "emoji": "ðŸˆâ€â¬›"
    },
    {
        "name": "lion",
        "emoji": "ðŸ¦"
    },
    {
        "name": "tiger face",
        "emoji": "ðŸ¯"
    },
    {
        "name": "tiger",
        "emoji": "ðŸ…"
    },
    {
        "name": "leopard",
        "emoji": "ðŸ†"
    },
    {
        "name": "horse face",
        "emoji": "ðŸ´"
    },
    {
        "name": "horse",
        "emoji": "ðŸŽ"
    },
    {
        "name": "unicorn",
        "emoji": "ðŸ¦„"
    },
    {
        "name": "zebra",
        "emoji": "ðŸ¦“"
    },
    {
        "name": "deer",
        "emoji": "ðŸ¦Œ"
    },
    {
        "name": "bison",
        "emoji": "ðŸ¦¬"
    },
    {
        "name": "cow face",
        "emoji": "ðŸ®"
    },
    {
        "name": "ox",
        "emoji": "ðŸ‚"
    },
    {
        "name": "water buffalo",
        "emoji": "ðŸƒ"
    },
    {
        "name": "cow",
        "emoji": "ðŸ„"
    },
    {
        "name": "pig face",
        "emoji": "ðŸ·"
    },
    {
        "name": "pig",
        "emoji": "ðŸ–"
    },
    {
        "name": "boar",
        "emoji": "ðŸ—"
    },
    {
        "name": "pig nose",
        "emoji": "ðŸ½"
    },
    {
        "name": "ram",
        "emoji": "ðŸ"
    },
    {
        "name": "ewe",
        "emoji": "ðŸ‘"
    },
    {
        "name": "goat",
        "emoji": "ðŸ"
    },
    {
        "name": "camel",
        "emoji": "ðŸª"
    },
    {
        "name": "two-hump camel",
        "emoji": "ðŸ«"
    },
    {
        "name": "llama",
        "emoji": "ðŸ¦™"
    },
    {
        "name": "giraffe",
        "emoji": "ðŸ¦’"
    },
    {
        "name": "elephant",
        "emoji": "ðŸ˜"
    },
    {
        "name": "mammoth",
        "emoji": "ðŸ¦£"
    },
    {
        "name": "rhinoceros",
        "emoji": "ðŸ¦"
    },
    {
        "name": "hippopotamus",
        "emoji": "ðŸ¦›"
    },
    {
        "name": "mouse face",
        "emoji": "ðŸ­"
    },
    {
        "name": "mouse",
        "emoji": "ðŸ"
    },
    {
        "name": "rat",
        "emoji": "ðŸ€"
    },
    {
        "name": "hamster",
        "emoji": "ðŸ¹"
    },
    {
        "name": "rabbit face",
        "emoji": "ðŸ°"
    },
    {
        "name": "rabbit",
        "emoji": "ðŸ‡"
    },
    {
        "name": "chipmunk",
        "emoji": "ðŸ¿ï¸"
    },
    {
        "name": "beaver",
        "emoji": "ðŸ¦«"
    },
    {
        "name": "hedgehog",
        "emoji": "ðŸ¦”"
    },
    {
        "name": "bat",
        "emoji": "ðŸ¦‡"
    },
    {
        "name": "bear",
        "emoji": "ðŸ»"
    },
    {
        "name": "polar bear",
        "emoji": "ðŸ»â€â„ï¸"
    },
    {
        "name": "koala",
        "emoji": "ðŸ¨"
    },
    {
        "name": "panda",
        "emoji": "ðŸ¼"
    },
    {
        "name": "sloth",
        "emoji": "ðŸ¦¥"
    },
    {
        "name": "otter",
        "emoji": "ðŸ¦¦"
    },
    {
        "name": "skunk",
        "emoji": "ðŸ¦¨"
    },
    {
        "name": "kangaroo",
        "emoji": "ðŸ¦˜"
    },
    {
        "name": "badger",
        "emoji": "ðŸ¦¡"
    },
    {
        "name": "paw prints",
        "emoji": "ðŸ¾"
    },
    {
        "name": "turkey",
        "emoji": "ðŸ¦ƒ"
    },
    {
        "name": "chicken",
        "emoji": "ðŸ”"
    },
    {
        "name": "rooster",
        "emoji": "ðŸ“"
    },
    {
        "name": "hatching chick",
        "emoji": "ðŸ£"
    },
    {
        "name": "baby chick",
        "emoji": "ðŸ¤"
    },
    {
        "name": "front-facing baby chick",
        "emoji": "ðŸ¥"
    },
    {
        "name": "bird",
        "emoji": "ðŸ¦"
    },
    {
        "name": "penguin",
        "emoji": "ðŸ§"
    },
    {
        "name": "dove",
        "emoji": "ðŸ•Šï¸"
    },
    {
        "name": "eagle",
        "emoji": "ðŸ¦…"
    },
    {
        "name": "duck",
        "emoji": "ðŸ¦†"
    },
    {
        "name": "swan",
        "emoji": "ðŸ¦¢"
    },
    {
        "name": "owl",
        "emoji": "ðŸ¦‰"
    },
    {
        "name": "dodo",
        "emoji": "ðŸ¦¤"
    },
    {
        "name": "feather",
        "emoji": "ðŸª¶"
    },
    {
        "name": "flamingo",
        "emoji": "ðŸ¦©"
    },
    {
        "name": "peacock",
        "emoji": "ðŸ¦š"
    },
    {
        "name": "parrot",
        "emoji": "ðŸ¦œ"
    },
    {
        "name": "frog",
        "emoji": "ðŸ¸"
    },
    {
        "name": "crocodile",
        "emoji": "ðŸŠ"
    },
    {
        "name": "turtle",
        "emoji": "ðŸ¢"
    },
    {
        "name": "lizard",
        "emoji": "ðŸ¦Ž"
    },
    {
        "name": "snake",
        "emoji": "ðŸ"
    },
    {
        "name": "dragon face",
        "emoji": "ðŸ²"
    },
    {
        "name": "dragon",
        "emoji": "ðŸ‰"
    },
    {
        "name": "sauropod",
        "emoji": "ðŸ¦•"
    },
    {
        "name": "T-Rex",
        "emoji": "ðŸ¦–"
    },
    {
        "name": "spouting whale",
        "emoji": "ðŸ³"
    },
    {
        "name": "whale",
        "emoji": "ðŸ‹"
    },
    {
        "name": "dolphin",
        "emoji": "ðŸ¬"
    },
    {
        "name": "seal",
        "emoji": "ðŸ¦­"
    },
    {
        "name": "fish",
        "emoji": "ðŸŸ"
    },
    {
        "name": "tropical fish",
        "emoji": "ðŸ "
    },
    {
        "name": "blowfish",
        "emoji": "ðŸ¡"
    },
    {
        "name": "shark",
        "emoji": "ðŸ¦ˆ"
    },
    {
        "name": "octopus",
        "emoji": "ðŸ™"
    },
    {
        "name": "spiral shell",
        "emoji": "ðŸš"
    },
    {
        "name": "coral",
        "emoji": "ðŸª¸"
    },
    {
        "name": "snail",
        "emoji": "ðŸŒ"
    },
    {
        "name": "butterfly",
        "emoji": "ðŸ¦‹"
    },
    {
        "name": "bug",
        "emoji": "ðŸ›"
    },
    {
        "name": "ant",
        "emoji": "ðŸœ"
    },
    {
        "name": "honeybee",
        "emoji": "ðŸ"
    },
    {
        "name": "beetle",
        "emoji": "ðŸª²"
    },
    {
        "name": "lady beetle",
        "emoji": "ðŸž"
    },
    {
        "name": "cricket",
        "emoji": "ðŸ¦—"
    },
    {
        "name": "cockroach",
        "emoji": "ðŸª³"
    },
    {
        "name": "spider",
        "emoji": "ðŸ•·ï¸"
    },
    {
        "name": "spider web",
        "emoji": "ðŸ•¸ï¸"
    },
    {
        "name": "scorpion",
        "emoji": "ðŸ¦‚"
    },
    {
        "name": "mosquito",
        "emoji": "ðŸ¦Ÿ"
    },
    {
        "name": "fly",
        "emoji": "ðŸª°"
    },
    {
        "name": "worm",
        "emoji": "ðŸª±"
    },
    {
        "name": "microbe",
        "emoji": "ðŸ¦ "
    },
    {
        "name": "bouquet",
        "emoji": "ðŸ’"
    },
    {
        "name": "cherry blossom",
        "emoji": "ðŸŒ¸"
    },
    {
        "name": "white flower",
        "emoji": "ðŸ’®"
    },
    {
        "name": "lotus",
        "emoji": "ðŸª·"
    },
    {
        "name": "rosette",
        "emoji": "ðŸµï¸"
    },
    {
        "name": "rose",
        "emoji": "ðŸŒ¹"
    },
    {
        "name": "wilted flower",
        "emoji": "ðŸ¥€"
    },
    {
        "name": "hibiscus",
        "emoji": "ðŸŒº"
    },
    {
        "name": "sunflower",
        "emoji": "ðŸŒ»"
    },
    {
        "name": "blossom",
        "emoji": "ðŸŒ¼"
    },
    {
        "name": "tulip",
        "emoji": "ðŸŒ·"
    },
    {
        "name": "seedling",
        "emoji": "ðŸŒ±"
    },
    {
        "name": "potted plant",
        "emoji": "ðŸª´"
    },
    {
        "name": "evergreen tree",
        "emoji": "ðŸŒ²"
    },
    {
        "name": "deciduous tree",
        "emoji": "ðŸŒ³"
    },
    {
        "name": "palm tree",
        "emoji": "ðŸŒ´"
    },
    {
        "name": "cactus",
        "emoji": "ðŸŒµ"
    },
    {
        "name": "sheaf of rice",
        "emoji": "ðŸŒ¾"
    },
    {
        "name": "herb",
        "emoji": "ðŸŒ¿"
    },
    {
        "name": "shamrock",
        "emoji": "â˜˜ï¸"
    },
    {
        "name": "four leaf clover",
        "emoji": "ðŸ€"
    },
    {
        "name": "maple leaf",
        "emoji": "ðŸ"
    },
    {
        "name": "fallen leaf",
        "emoji": "ðŸ‚"
    },
    {
        "name": "leaf fluttering in wind",
        "emoji": "ðŸƒ"
    },
    {
        "name": "empty nest",
        "emoji": "ðŸª¹"
    },
    {
        "name": "nest with eggs",
        "emoji": "ðŸªº"
    },
    {
        "name": "grapes",
        "emoji": "ðŸ‡"
    },
    {
        "name": "melon",
        "emoji": "ðŸˆ"
    },
    {
        "name": "watermelon",
        "emoji": "ðŸ‰"
    },
    {
        "name": "tangerine",
        "emoji": "ðŸŠ"
    },
    {
        "name": "lemon",
        "emoji": "ðŸ‹"
    },
    {
        "name": "banana",
        "emoji": "ðŸŒ"
    },
    {
        "name": "pineapple",
        "emoji": "ðŸ"
    },
    {
        "name": "mango",
        "emoji": "ðŸ¥­"
    },
    {
        "name": "red apple",
        "emoji": "ðŸŽ"
    },
    {
        "name": "green apple",
        "emoji": "ðŸ"
    },
    {
        "name": "pear",
        "emoji": "ðŸ"
    },
    {
        "name": "peach",
        "emoji": "ðŸ‘"
    },
    {
        "name": "cherries",
        "emoji": "ðŸ’"
    },
    {
        "name": "strawberry",
        "emoji": "ðŸ“"
    },
    {
        "name": "blueberries",
        "emoji": "ðŸ«"
    },
    {
        "name": "kiwi fruit",
        "emoji": "ðŸ¥"
    },
    {
        "name": "tomato",
        "emoji": "ðŸ…"
    },
    {
        "name": "olive",
        "emoji": "ðŸ«’"
    },
    {
        "name": "coconut",
        "emoji": "ðŸ¥¥"
    },
    {
        "name": "avocado",
        "emoji": "ðŸ¥‘"
    },
    {
        "name": "eggplant",
        "emoji": "ðŸ†"
    },
    {
        "name": "potato",
        "emoji": "ðŸ¥”"
    },
    {
        "name": "carrot",
        "emoji": "ðŸ¥•"
    },
    {
        "name": "ear of corn",
        "emoji": "ðŸŒ½"
    },
    {
        "name": "hot pepper",
        "emoji": "ðŸŒ¶ï¸"
    },
    {
        "name": "bell pepper",
        "emoji": "ðŸ«‘"
    },
    {
        "name": "cucumber",
        "emoji": "ðŸ¥’"
    },
    {
        "name": "leafy green",
        "emoji": "ðŸ¥¬"
    },
    {
        "name": "broccoli",
        "emoji": "ðŸ¥¦"
    },
    {
        "name": "garlic",
        "emoji": "ðŸ§„"
    },
    {
        "name": "onion",
        "emoji": "ðŸ§…"
    },
    {
        "name": "mushroom",
        "emoji": "ðŸ„"
    },
    {
        "name": "peanuts",
        "emoji": "ðŸ¥œ"
    },
    {
        "name": "beans",
        "emoji": "ðŸ«˜"
    },
    {
        "name": "chestnut",
        "emoji": "ðŸŒ°"
    },
    {
        "name": "bread",
        "emoji": "ðŸž"
    },
    {
        "name": "croissant",
        "emoji": "ðŸ¥"
    },
    {
        "name": "baguette bread",
        "emoji": "ðŸ¥–"
    },
    {
        "name": "flatbread",
        "emoji": "ðŸ«“"
    },
    {
        "name": "pretzel",
        "emoji": "ðŸ¥¨"
    },
    {
        "name": "bagel",
        "emoji": "ðŸ¥¯"
    },
    {
        "name": "pancakes",
        "emoji": "ðŸ¥ž"
    },
    {
        "name": "waffle",
        "emoji": "ðŸ§‡"
    },
    {
        "name": "cheese wedge",
        "emoji": "ðŸ§€"
    },
    {
        "name": "meat on bone",
        "emoji": "ðŸ–"
    },
    {
        "name": "poultry leg",
        "emoji": "ðŸ—"
    },
    {
        "name": "cut of meat",
        "emoji": "ðŸ¥©"
    },
    {
        "name": "bacon",
        "emoji": "ðŸ¥“"
    },
    {
        "name": "hamburger",
        "emoji": "ðŸ”"
    },
    {
        "name": "french fries",
        "emoji": "ðŸŸ"
    },
    {
        "name": "pizza",
        "emoji": "ðŸ•"
    },
    {
        "name": "hot dog",
        "emoji": "ðŸŒ­"
    },
    {
        "name": "sandwich",
        "emoji": "ðŸ¥ª"
    },
    {
        "name": "taco",
        "emoji": "ðŸŒ®"
    },
    {
        "name": "burrito",
        "emoji": "ðŸŒ¯"
    },
    {
        "name": "tamale",
        "emoji": "ðŸ«”"
    },
    {
        "name": "stuffed flatbread",
        "emoji": "ðŸ¥™"
    },
    {
        "name": "falafel",
        "emoji": "ðŸ§†"
    },
    {
        "name": "egg",
        "emoji": "ðŸ¥š"
    },
    {
        "name": "cooking",
        "emoji": "ðŸ³"
    },
    {
        "name": "shallow pan of food",
        "emoji": "ðŸ¥˜"
    },
    {
        "name": "pot of food",
        "emoji": "ðŸ²"
    },
    {
        "name": "fondue",
        "emoji": "ðŸ«•"
    },
    {
        "name": "bowl with spoon",
        "emoji": "ðŸ¥£"
    },
    {
        "name": "green salad",
        "emoji": "ðŸ¥—"
    },
    {
        "name": "popcorn",
        "emoji": "ðŸ¿"
    },
    {
        "name": "butter",
        "emoji": "ðŸ§ˆ"
    },
    {
        "name": "salt",
        "emoji": "ðŸ§‚"
    },
    {
        "name": "canned food",
        "emoji": "ðŸ¥«"
    },
    {
        "name": "bento box",
        "emoji": "ðŸ±"
    },
    {
        "name": "rice cracker",
        "emoji": "ðŸ˜"
    },
    {
        "name": "rice ball",
        "emoji": "ðŸ™"
    },
    {
        "name": "cooked rice",
        "emoji": "ðŸš"
    },
    {
        "name": "curry rice",
        "emoji": "ðŸ›"
    },
    {
        "name": "steaming bowl",
        "emoji": "ðŸœ"
    },
    {
        "name": "spaghetti",
        "emoji": "ðŸ"
    },
    {
        "name": "roasted sweet potato",
        "emoji": "ðŸ "
    },
    {
        "name": "oden",
        "emoji": "ðŸ¢"
    },
    {
        "name": "sushi",
        "emoji": "ðŸ£"
    },
    {
        "name": "fried shrimp",
        "emoji": "ðŸ¤"
    },
    {
        "name": "fish cake with swirl",
        "emoji": "ðŸ¥"
    },
    {
        "name": "moon cake",
        "emoji": "ðŸ¥®"
    },
    {
        "name": "dango",
        "emoji": "ðŸ¡"
    },
    {
        "name": "dumpling",
        "emoji": "ðŸ¥Ÿ"
    },
    {
        "name": "fortune cookie",
        "emoji": "ðŸ¥ "
    },
    {
        "name": "takeout box",
        "emoji": "ðŸ¥¡"
    },
    {
        "name": "crab",
        "emoji": "ðŸ¦€"
    },
    {
        "name": "lobster",
        "emoji": "ðŸ¦ž"
    },
    {
        "name": "shrimp",
        "emoji": "ðŸ¦"
    },
    {
        "name": "squid",
        "emoji": "ðŸ¦‘"
    },
    {
        "name": "oyster",
        "emoji": "ðŸ¦ª"
    },
    {
        "name": "soft ice cream",
        "emoji": "ðŸ¦"
    },
    {
        "name": "shaved ice",
        "emoji": "ðŸ§"
    },
    {
        "name": "ice cream",
        "emoji": "ðŸ¨"
    },
    {
        "name": "doughnut",
        "emoji": "ðŸ©"
    },
    {
        "name": "cookie",
        "emoji": "ðŸª"
    },
    {
        "name": "birthday cake",
        "emoji": "ðŸŽ‚"
    },
    {
        "name": "shortcake",
        "emoji": "ðŸ°"
    },
    {
        "name": "cupcake",
        "emoji": "ðŸ§"
    },
    {
        "name": "pie",
        "emoji": "ðŸ¥§"
    },
    {
        "name": "chocolate bar",
        "emoji": "ðŸ«"
    },
    {
        "name": "candy",
        "emoji": "ðŸ¬"
    },
    {
        "name": "lollipop",
        "emoji": "ðŸ­"
    },
    {
        "name": "custard",
        "emoji": "ðŸ®"
    },
    {
        "name": "honey pot",
        "emoji": "ðŸ¯"
    },
    {
        "name": "baby bottle",
        "emoji": "ðŸ¼"
    },
    {
        "name": "glass of milk",
        "emoji": "ðŸ¥›"
    },
    {
        "name": "hot beverage",
        "emoji": "â˜•"
    },
    {
        "name": "teapot",
        "emoji": "ðŸ«–"
    },
    {
        "name": "teacup without handle",
        "emoji": "ðŸµ"
    },
    {
        "name": "sake",
        "emoji": "ðŸ¶"
    },
    {
        "name": "bottle with popping cork",
        "emoji": "ðŸ¾"
    },
    {
        "name": "wine glass",
        "emoji": "ðŸ·"
    },
    {
        "name": "cocktail glass",
        "emoji": "ðŸ¸"
    },
    {
        "name": "tropical drink",
        "emoji": "ðŸ¹"
    },
    {
        "name": "beer mug",
        "emoji": "ðŸº"
    },
    {
        "name": "clinking beer mugs",
        "emoji": "ðŸ»"
    },
    {
        "name": "clinking glasses",
        "emoji": "ðŸ¥‚"
    },
    {
        "name": "tumbler glass",
        "emoji": "ðŸ¥ƒ"
    },
    {
        "name": "pouring liquid",
        "emoji": "ðŸ«—"
    },
    {
        "name": "cup with straw",
        "emoji": "ðŸ¥¤"
    },
    {
        "name": "bubble tea",
        "emoji": "ðŸ§‹"
    },
    {
        "name": "beverage box",
        "emoji": "ðŸ§ƒ"
    },
    {
        "name": "mate",
        "emoji": "ðŸ§‰"
    },
    {
        "name": "ice",
        "emoji": "ðŸ§Š"
    },
    {
        "name": "chopsticks",
        "emoji": "ðŸ¥¢"
    },
    {
        "name": "fork and knife with plate",
        "emoji": "ðŸ½ï¸"
    },
    {
        "name": "fork and knife",
        "emoji": "ðŸ´"
    },
    {
        "name": "spoon",
        "emoji": "ðŸ¥„"
    },
    {
        "name": "kitchen knife",
        "emoji": "ðŸ”ª"
    },
    {
        "name": "jar",
        "emoji": "ðŸ«™"
    },
    {
        "name": "amphora",
        "emoji": "ðŸº"
    },
    {
        "name": "globe showing Europe-Africa",
        "emoji": "ðŸŒ"
    },
    {
        "name": "globe showing Americas",
        "emoji": "ðŸŒŽ"
    },
    {
        "name": "globe showing Asia-Australia",
        "emoji": "ðŸŒ"
    },
    {
        "name": "globe with meridians",
        "emoji": "ðŸŒ"
    },
    {
        "name": "world map",
        "emoji": "ðŸ—ºï¸"
    },
    {
        "name": "map of Japan",
        "emoji": "ðŸ—¾"
    },
    {
        "name": "compass",
        "emoji": "ðŸ§­"
    },
    {
        "name": "snow-capped mountain",
        "emoji": "ðŸ”ï¸"
    },
    {
        "name": "mountain",
        "emoji": "â›°ï¸"
    },
    {
        "name": "volcano",
        "emoji": "ðŸŒ‹"
    },
    {
        "name": "mount fuji",
        "emoji": "ðŸ—»"
    },
    {
        "name": "camping",
        "emoji": "ðŸ•ï¸"
    },
    {
        "name": "beach with umbrella",
        "emoji": "ðŸ–ï¸"
    },
    {
        "name": "desert",
        "emoji": "ðŸœï¸"
    },
    {
        "name": "desert island",
        "emoji": "ðŸï¸"
    },
    {
        "name": "national park",
        "emoji": "ðŸžï¸"
    },
    {
        "name": "stadium",
        "emoji": "ðŸŸï¸"
    },
    {
        "name": "classical building",
        "emoji": "ðŸ›ï¸"
    },
    {
        "name": "building construction",
        "emoji": "ðŸ—ï¸"
    },
    {
        "name": "brick",
        "emoji": "ðŸ§±"
    },
    {
        "name": "rock",
        "emoji": "ðŸª¨"
    },
    {
        "name": "wood",
        "emoji": "ðŸªµ"
    },
    {
        "name": "hut",
        "emoji": "ðŸ›–"
    },
    {
        "name": "houses",
        "emoji": "ðŸ˜ï¸"
    },
    {
        "name": "derelict house",
        "emoji": "ðŸšï¸"
    },
    {
        "name": "house",
        "emoji": "ðŸ "
    },
    {
        "name": "house with garden",
        "emoji": "ðŸ¡"
    },
    {
        "name": "office building",
        "emoji": "ðŸ¢"
    },
    {
        "name": "Japanese post office",
        "emoji": "ðŸ£"
    },
    {
        "name": "post office",
        "emoji": "ðŸ¤"
    },
    {
        "name": "hospital",
        "emoji": "ðŸ¥"
    },
    {
        "name": "bank",
        "emoji": "ðŸ¦"
    },
    {
        "name": "hotel",
        "emoji": "ðŸ¨"
    },
    {
        "name": "love hotel",
        "emoji": "ðŸ©"
    },
    {
        "name": "convenience store",
        "emoji": "ðŸª"
    },
    {
        "name": "school",
        "emoji": "ðŸ«"
    },
    {
        "name": "department store",
        "emoji": "ðŸ¬"
    },
    {
        "name": "factory",
        "emoji": "ðŸ­"
    },
    {
        "name": "Japanese castle",
        "emoji": "ðŸ¯"
    },
    {
        "name": "castle",
        "emoji": "ðŸ°"
    },
    {
        "name": "wedding",
        "emoji": "ðŸ’’"
    },
    {
        "name": "Tokyo tower",
        "emoji": "ðŸ—¼"
    },
    {
        "name": "Statue of Liberty",
        "emoji": "ðŸ—½"
    },
    {
        "name": "church",
        "emoji": "â›ª"
    },
    {
        "name": "mosque",
        "emoji": "ðŸ•Œ"
    },
    {
        "name": "hindu temple",
        "emoji": "ðŸ›•"
    },
    {
        "name": "synagogue",
        "emoji": "ðŸ•"
    },
    {
        "name": "shinto shrine",
        "emoji": "â›©ï¸"
    },
    {
        "name": "kaaba",
        "emoji": "ðŸ•‹"
    },
    {
        "name": "fountain",
        "emoji": "â›²"
    },
    {
        "name": "tent",
        "emoji": "â›º"
    },
    {
        "name": "foggy",
        "emoji": "ðŸŒ"
    },
    {
        "name": "night with stars",
        "emoji": "ðŸŒƒ"
    },
    {
        "name": "cityscape",
        "emoji": "ðŸ™ï¸"
    },
    {
        "name": "sunrise over mountains",
        "emoji": "ðŸŒ„"
    },
    {
        "name": "sunrise",
        "emoji": "ðŸŒ…"
    },
    {
        "name": "cityscape at dusk",
        "emoji": "ðŸŒ†"
    },
    {
        "name": "sunset",
        "emoji": "ðŸŒ‡"
    },
    {
        "name": "bridge at night",
        "emoji": "ðŸŒ‰"
    },
    {
        "name": "hot springs",
        "emoji": "â™¨ï¸"
    },
    {
        "name": "carousel horse",
        "emoji": "ðŸŽ "
    },
    {
        "name": "playground slide",
        "emoji": "ðŸ›"
    },
    {
        "name": "ferris wheel",
        "emoji": "ðŸŽ¡"
    },
    {
        "name": "roller coaster",
        "emoji": "ðŸŽ¢"
    },
    {
        "name": "barber pole",
        "emoji": "ðŸ’ˆ"
    },
    {
        "name": "circus tent",
        "emoji": "ðŸŽª"
    },
    {
        "name": "locomotive",
        "emoji": "ðŸš‚"
    },
    {
        "name": "railway car",
        "emoji": "ðŸšƒ"
    },
    {
        "name": "high-speed train",
        "emoji": "ðŸš„"
    },
    {
        "name": "bullet train",
        "emoji": "ðŸš…"
    },
    {
        "name": "train",
        "emoji": "ðŸš†"
    },
    {
        "name": "metro",
        "emoji": "ðŸš‡"
    },
    {
        "name": "light rail",
        "emoji": "ðŸšˆ"
    },
    {
        "name": "station",
        "emoji": "ðŸš‰"
    },
    {
        "name": "tram",
        "emoji": "ðŸšŠ"
    },
    {
        "name": "monorail",
        "emoji": "ðŸš"
    },
    {
        "name": "mountain railway",
        "emoji": "ðŸšž"
    },
    {
        "name": "tram car",
        "emoji": "ðŸš‹"
    },
    {
        "name": "bus",
        "emoji": "ðŸšŒ"
    },
    {
        "name": "oncoming bus",
        "emoji": "ðŸš"
    },
    {
        "name": "trolleybus",
        "emoji": "ðŸšŽ"
    },
    {
        "name": "minibus",
        "emoji": "ðŸš"
    },
    {
        "name": "ambulance",
        "emoji": "ðŸš‘"
    },
    {
        "name": "fire engine",
        "emoji": "ðŸš’"
    },
    {
        "name": "police car",
        "emoji": "ðŸš“"
    },
    {
        "name": "oncoming police car",
        "emoji": "ðŸš”"
    },
    {
        "name": "taxi",
        "emoji": "ðŸš•"
    },
    {
        "name": "oncoming taxi",
        "emoji": "ðŸš–"
    },
    {
        "name": "automobile",
        "emoji": "ðŸš—"
    },
    {
        "name": "oncoming automobile",
        "emoji": "ðŸš˜"
    },
    {
        "name": "sport utility vehicle",
        "emoji": "ðŸš™"
    },
    {
        "name": "pickup truck",
        "emoji": "ðŸ›»"
    },
    {
        "name": "delivery truck",
        "emoji": "ðŸšš"
    },
    {
        "name": "articulated lorry",
        "emoji": "ðŸš›"
    },
    {
        "name": "tractor",
        "emoji": "ðŸšœ"
    },
    {
        "name": "racing car",
        "emoji": "ðŸŽï¸"
    },
    {
        "name": "motorcycle",
        "emoji": "ðŸï¸"
    },
    {
        "name": "motor scooter",
        "emoji": "ðŸ›µ"
    },
    {
        "name": "manual wheelchair",
        "emoji": "ðŸ¦½"
    },
    {
        "name": "motorized wheelchair",
        "emoji": "ðŸ¦¼"
    },
    {
        "name": "auto rickshaw",
        "emoji": "ðŸ›º"
    },
    {
        "name": "bicycle",
        "emoji": "ðŸš²"
    },
    {
        "name": "kick scooter",
        "emoji": "ðŸ›´"
    },
    {
        "name": "skateboard",
        "emoji": "ðŸ›¹"
    },
    {
        "name": "roller skate",
        "emoji": "ðŸ›¼"
    },
    {
        "name": "bus stop",
        "emoji": "ðŸš"
    },
    {
        "name": "motorway",
        "emoji": "ðŸ›£ï¸"
    },
    {
        "name": "railway track",
        "emoji": "ðŸ›¤ï¸"
    },
    {
        "name": "oil drum",
        "emoji": "ðŸ›¢ï¸"
    },
    {
        "name": "fuel pump",
        "emoji": "â›½"
    },
    {
        "name": "wheel",
        "emoji": "ðŸ›ž"
    },
    {
        "name": "police car light",
        "emoji": "ðŸš¨"
    },
    {
        "name": "horizontal traffic light",
        "emoji": "ðŸš¥"
    },
    {
        "name": "vertical traffic light",
        "emoji": "ðŸš¦"
    },
    {
        "name": "stop sign",
        "emoji": "ðŸ›‘"
    },
    {
        "name": "construction",
        "emoji": "ðŸš§"
    },
    {
        "name": "anchor",
        "emoji": "âš“"
    },
    {
        "name": "ring buoy",
        "emoji": "ðŸ›Ÿ"
    },
    {
        "name": "sailboat",
        "emoji": "â›µ"
    },
    {
        "name": "canoe",
        "emoji": "ðŸ›¶"
    },
    {
        "name": "speedboat",
        "emoji": "ðŸš¤"
    },
    {
        "name": "passenger ship",
        "emoji": "ðŸ›³ï¸"
    },
    {
        "name": "ferry",
        "emoji": "â›´ï¸"
    },
    {
        "name": "motor boat",
        "emoji": "ðŸ›¥ï¸"
    },
    {
        "name": "ship",
        "emoji": "ðŸš¢"
    },
    {
        "name": "airplane",
        "emoji": "âœˆï¸"
    },
    {
        "name": "small airplane",
        "emoji": "ðŸ›©ï¸"
    },
    {
        "name": "airplane departure",
        "emoji": "ðŸ›«"
    },
    {
        "name": "airplane arrival",
        "emoji": "ðŸ›¬"
    },
    {
        "name": "parachute",
        "emoji": "ðŸª‚"
    },
    {
        "name": "seat",
        "emoji": "ðŸ’º"
    },
    {
        "name": "helicopter",
        "emoji": "ðŸš"
    },
    {
        "name": "suspension railway",
        "emoji": "ðŸšŸ"
    },
    {
        "name": "mountain cableway",
        "emoji": "ðŸš "
    },
    {
        "name": "aerial tramway",
        "emoji": "ðŸš¡"
    },
    {
        "name": "satellite",
        "emoji": "ðŸ›°ï¸"
    },
    {
        "name": "rocket",
        "emoji": "ðŸš€"
    },
    {
        "name": "flying saucer",
        "emoji": "ðŸ›¸"
    },
    {
        "name": "bellhop bell",
        "emoji": "ðŸ›Žï¸"
    },
    {
        "name": "luggage",
        "emoji": "ðŸ§³"
    },
    {
        "name": "hourglass done",
        "emoji": "âŒ›"
    },
    {
        "name": "hourglass not done",
        "emoji": "â³"
    },
    {
        "name": "watch",
        "emoji": "âŒš"
    },
    {
        "name": "alarm clock",
        "emoji": "â°"
    },
    {
        "name": "stopwatch",
        "emoji": "â±ï¸"
    },
    {
        "name": "timer clock",
        "emoji": "â²ï¸"
    },
    {
        "name": "mantelpiece clock",
        "emoji": "ðŸ•°ï¸"
    },
    {
        "name": "twelve oâ€™clock",
        "emoji": "ðŸ•›"
    },
    {
        "name": "twelve-thirty",
        "emoji": "ðŸ•§"
    },
    {
        "name": "one oâ€™clock",
        "emoji": "ðŸ•"
    },
    {
        "name": "one-thirty",
        "emoji": "ðŸ•œ"
    },
    {
        "name": "two oâ€™clock",
        "emoji": "ðŸ•‘"
    },
    {
        "name": "two-thirty",
        "emoji": "ðŸ•"
    },
    {
        "name": "three oâ€™clock",
        "emoji": "ðŸ•’"
    },
    {
        "name": "three-thirty",
        "emoji": "ðŸ•ž"
    },
    {
        "name": "four oâ€™clock",
        "emoji": "ðŸ•“"
    },
    {
        "name": "four-thirty",
        "emoji": "ðŸ•Ÿ"
    },
    {
        "name": "five oâ€™clock",
        "emoji": "ðŸ•”"
    },
    {
        "name": "five-thirty",
        "emoji": "ðŸ• "
    },
    {
        "name": "six oâ€™clock",
        "emoji": "ðŸ••"
    },
    {
        "name": "six-thirty",
        "emoji": "ðŸ•¡"
    },
    {
        "name": "seven oâ€™clock",
        "emoji": "ðŸ•–"
    },
    {
        "name": "seven-thirty",
        "emoji": "ðŸ•¢"
    },
    {
        "name": "eight oâ€™clock",
        "emoji": "ðŸ•—"
    },
    {
        "name": "eight-thirty",
        "emoji": "ðŸ•£"
    },
    {
        "name": "nine oâ€™clock",
        "emoji": "ðŸ•˜"
    },
    {
        "name": "nine-thirty",
        "emoji": "ðŸ•¤"
    },
    {
        "name": "ten oâ€™clock",
        "emoji": "ðŸ•™"
    },
    {
        "name": "ten-thirty",
        "emoji": "ðŸ•¥"
    },
    {
        "name": "eleven oâ€™clock",
        "emoji": "ðŸ•š"
    },
    {
        "name": "eleven-thirty",
        "emoji": "ðŸ•¦"
    },
    {
        "name": "new moon",
        "emoji": "ðŸŒ‘"
    },
    {
        "name": "waxing crescent moon",
        "emoji": "ðŸŒ’"
    },
    {
        "name": "first quarter moon",
        "emoji": "ðŸŒ“"
    },
    {
        "name": "waxing gibbous moon",
        "emoji": "ðŸŒ”"
    },
    {
        "name": "full moon",
        "emoji": "ðŸŒ•"
    },
    {
        "name": "waning gibbous moon",
        "emoji": "ðŸŒ–"
    },
    {
        "name": "last quarter moon",
        "emoji": "ðŸŒ—"
    },
    {
        "name": "waning crescent moon",
        "emoji": "ðŸŒ˜"
    },
    {
        "name": "crescent moon",
        "emoji": "ðŸŒ™"
    },
    {
        "name": "new moon face",
        "emoji": "ðŸŒš"
    },
    {
        "name": "first quarter moon face",
        "emoji": "ðŸŒ›"
    },
    {
        "name": "last quarter moon face",
        "emoji": "ðŸŒœ"
    },
    {
        "name": "thermometer",
        "emoji": "ðŸŒ¡ï¸"
    },
    {
        "name": "sun",
        "emoji": "â˜€ï¸"
    },
    {
        "name": "full moon face",
        "emoji": "ðŸŒ"
    },
    {
        "name": "sun with face",
        "emoji": "ðŸŒž"
    },
    {
        "name": "ringed planet",
        "emoji": "ðŸª"
    },
    {
        "name": "star",
        "emoji": "â­"
    },
    {
        "name": "glowing star",
        "emoji": "ðŸŒŸ"
    },
    {
        "name": "shooting star",
        "emoji": "ðŸŒ "
    },
    {
        "name": "milky way",
        "emoji": "ðŸŒŒ"
    },
    {
        "name": "cloud",
        "emoji": "â˜ï¸"
    },
    {
        "name": "sun behind cloud",
        "emoji": "â›…"
    },
    {
        "name": "cloud with lightning and rain",
        "emoji": "â›ˆï¸"
    },
    {
        "name": "sun behind small cloud",
        "emoji": "ðŸŒ¤ï¸"
    },
    {
        "name": "sun behind large cloud",
        "emoji": "ðŸŒ¥ï¸"
    },
    {
        "name": "sun behind rain cloud",
        "emoji": "ðŸŒ¦ï¸"
    },
    {
        "name": "cloud with rain",
        "emoji": "ðŸŒ§ï¸"
    },
    {
        "name": "cloud with snow",
        "emoji": "ðŸŒ¨ï¸"
    },
    {
        "name": "cloud with lightning",
        "emoji": "ðŸŒ©ï¸"
    },
    {
        "name": "tornado",
        "emoji": "ðŸŒªï¸"
    },
    {
        "name": "fog",
        "emoji": "ðŸŒ«ï¸"
    },
    {
        "name": "wind face",
        "emoji": "ðŸŒ¬ï¸"
    },
    {
        "name": "cyclone",
        "emoji": "ðŸŒ€"
    },
    {
        "name": "rainbow",
        "emoji": "ðŸŒˆ"
    },
    {
        "name": "closed umbrella",
        "emoji": "ðŸŒ‚"
    },
    {
        "name": "umbrella",
        "emoji": "â˜‚ï¸"
    },
    {
        "name": "umbrella with rain drops",
        "emoji": "â˜”"
    },
    {
        "name": "umbrella on ground",
        "emoji": "â›±ï¸"
    },
    {
        "name": "high voltage",
        "emoji": "âš¡"
    },
    {
        "name": "snowflake",
        "emoji": "â„ï¸"
    },
    {
        "name": "snowman",
        "emoji": "â˜ƒï¸"
    },
    {
        "name": "snowman without snow",
        "emoji": "â›„"
    },
    {
        "name": "comet",
        "emoji": "â˜„ï¸"
    },
    {
        "name": "fire",
        "emoji": "ðŸ”¥"
    },
    {
        "name": "droplet",
        "emoji": "ðŸ’§"
    },
    {
        "name": "water wave",
        "emoji": "ðŸŒŠ"
    },
    {
        "name": "jack-o-lantern",
        "emoji": "ðŸŽƒ"
    },
    {
        "name": "Christmas tree",
        "emoji": "ðŸŽ„"
    },
    {
        "name": "fireworks",
        "emoji": "ðŸŽ†"
    },
    {
        "name": "sparkler",
        "emoji": "ðŸŽ‡"
    },
    {
        "name": "firecracker",
        "emoji": "ðŸ§¨"
    },
    {
        "name": "sparkles",
        "emoji": "âœ¨"
    },
    {
        "name": "balloon",
        "emoji": "ðŸŽˆ"
    },
    {
        "name": "party popper",
        "emoji": "ðŸŽ‰"
    },
    {
        "name": "confetti ball",
        "emoji": "ðŸŽŠ"
    },
    {
        "name": "tanabata tree",
        "emoji": "ðŸŽ‹"
    },
    {
        "name": "pine decoration",
        "emoji": "ðŸŽ"
    },
    {
        "name": "Japanese dolls",
        "emoji": "ðŸŽŽ"
    },
    {
        "name": "carp streamer",
        "emoji": "ðŸŽ"
    },
    {
        "name": "wind chime",
        "emoji": "ðŸŽ"
    },
    {
        "name": "moon viewing ceremony",
        "emoji": "ðŸŽ‘"
    },
    {
        "name": "red envelope",
        "emoji": "ðŸ§§"
    },
    {
        "name": "ribbon",
        "emoji": "ðŸŽ€"
    },
    {
        "name": "wrapped gift",
        "emoji": "ðŸŽ"
    },
    {
        "name": "reminder ribbon",
        "emoji": "ðŸŽ—ï¸"
    },
    {
        "name": "admission tickets",
        "emoji": "ðŸŽŸï¸"
    },
    {
        "name": "ticket",
        "emoji": "ðŸŽ«"
    },
    {
        "name": "military medal",
        "emoji": "ðŸŽ–ï¸"
    },
    {
        "name": "trophy",
        "emoji": "ðŸ†"
    },
    {
        "name": "sports medal",
        "emoji": "ðŸ…"
    },
    {
        "name": "1st place medal",
        "emoji": "ðŸ¥‡"
    },
    {
        "name": "2nd place medal",
        "emoji": "ðŸ¥ˆ"
    },
    {
        "name": "3rd place medal",
        "emoji": "ðŸ¥‰"
    },
    {
        "name": "soccer ball",
        "emoji": "âš½"
    },
    {
        "name": "baseball",
        "emoji": "âš¾"
    },
    {
        "name": "softball",
        "emoji": "ðŸ¥Ž"
    },
    {
        "name": "basketball",
        "emoji": "ðŸ€"
    },
    {
        "name": "volleyball",
        "emoji": "ðŸ"
    },
    {
        "name": "american football",
        "emoji": "ðŸˆ"
    },
    {
        "name": "rugby football",
        "emoji": "ðŸ‰"
    },
    {
        "name": "tennis",
        "emoji": "ðŸŽ¾"
    },
    {
        "name": "flying disc",
        "emoji": "ðŸ¥"
    },
    {
        "name": "bowling",
        "emoji": "ðŸŽ³"
    },
    {
        "name": "cricket game",
        "emoji": "ðŸ"
    },
    {
        "name": "field hockey",
        "emoji": "ðŸ‘"
    },
    {
        "name": "ice hockey",
        "emoji": "ðŸ’"
    },
    {
        "name": "lacrosse",
        "emoji": "ðŸ¥"
    },
    {
        "name": "ping pong",
        "emoji": "ðŸ“"
    },
    {
        "name": "badminton",
        "emoji": "ðŸ¸"
    },
    {
        "name": "boxing glove",
        "emoji": "ðŸ¥Š"
    },
    {
        "name": "martial arts uniform",
        "emoji": "ðŸ¥‹"
    },
    {
        "name": "goal net",
        "emoji": "ðŸ¥…"
    },
    {
        "name": "flag in hole",
        "emoji": "â›³"
    },
    {
        "name": "ice skate",
        "emoji": "â›¸ï¸"
    },
    {
        "name": "fishing pole",
        "emoji": "ðŸŽ£"
    },
    {
        "name": "diving mask",
        "emoji": "ðŸ¤¿"
    },
    {
        "name": "running shirt",
        "emoji": "ðŸŽ½"
    },
    {
        "name": "skis",
        "emoji": "ðŸŽ¿"
    },
    {
        "name": "sled",
        "emoji": "ðŸ›·"
    },
    {
        "name": "curling stone",
        "emoji": "ðŸ¥Œ"
    },
    {
        "name": "bullseye",
        "emoji": "ðŸŽ¯"
    },
    {
        "name": "yo-yo",
        "emoji": "ðŸª€"
    },
    {
        "name": "kite",
        "emoji": "ðŸª"
    },
    {
        "name": "pool 8 ball",
        "emoji": "ðŸŽ±"
    },
    {
        "name": "crystal ball",
        "emoji": "ðŸ”®"
    },
    {
        "name": "magic wand",
        "emoji": "ðŸª„"
    },
    {
        "name": "nazar amulet",
        "emoji": "ðŸ§¿"
    },
    {
        "name": "hamsa",
        "emoji": "ðŸª¬"
    },
    {
        "name": "video game",
        "emoji": "ðŸŽ®"
    },
    {
        "name": "joystick",
        "emoji": "ðŸ•¹ï¸"
    },
    {
        "name": "slot machine",
        "emoji": "ðŸŽ°"
    },
    {
        "name": "game die",
        "emoji": "ðŸŽ²"
    },
    {
        "name": "puzzle piece",
        "emoji": "ðŸ§©"
    },
    {
        "name": "teddy bear",
        "emoji": "ðŸ§¸"
    },
    {
        "name": "piÃ±ata",
        "emoji": "ðŸª…"
    },
    {
        "name": "mirror ball",
        "emoji": "ðŸª©"
    },
    {
        "name": "nesting dolls",
        "emoji": "ðŸª†"
    },
    {
        "name": "spade suit",
        "emoji": "â™ ï¸"
    },
    {
        "name": "heart suit",
        "emoji": "â™¥ï¸"
    },
    {
        "name": "diamond suit",
        "emoji": "â™¦ï¸"
    },
    {
        "name": "club suit",
        "emoji": "â™£ï¸"
    },
    {
        "name": "chess pawn",
        "emoji": "â™Ÿï¸"
    },
    {
        "name": "joker",
        "emoji": "ðŸƒ"
    },
    {
        "name": "mahjong red dragon",
        "emoji": "ðŸ€„"
    },
    {
        "name": "flower playing cards",
        "emoji": "ðŸŽ´"
    },
    {
        "name": "performing arts",
        "emoji": "ðŸŽ­"
    },
    {
        "name": "framed picture",
        "emoji": "ðŸ–¼ï¸"
    },
    {
        "name": "artist palette",
        "emoji": "ðŸŽ¨"
    },
    {
        "name": "thread",
        "emoji": "ðŸ§µ"
    },
    {
        "name": "sewing needle",
        "emoji": "ðŸª¡"
    },
    {
        "name": "yarn",
        "emoji": "ðŸ§¶"
    },
    {
        "name": "knot",
        "emoji": "ðŸª¢"
    },
    {
        "name": "glasses",
        "emoji": "ðŸ‘“"
    },
    {
        "name": "sunglasses",
        "emoji": "ðŸ•¶ï¸"
    },
    {
        "name": "goggles",
        "emoji": "ðŸ¥½"
    },
    {
        "name": "lab coat",
        "emoji": "ðŸ¥¼"
    },
    {
        "name": "safety vest",
        "emoji": "ðŸ¦º"
    },
    {
        "name": "necktie",
        "emoji": "ðŸ‘”"
    },
    {
        "name": "t-shirt",
        "emoji": "ðŸ‘•"
    },
    {
        "name": "jeans",
        "emoji": "ðŸ‘–"
    },
    {
        "name": "scarf",
        "emoji": "ðŸ§£"
    },
    {
        "name": "gloves",
        "emoji": "ðŸ§¤"
    },
    {
        "name": "coat",
        "emoji": "ðŸ§¥"
    },
    {
        "name": "socks",
        "emoji": "ðŸ§¦"
    },
    {
        "name": "dress",
        "emoji": "ðŸ‘—"
    },
    {
        "name": "kimono",
        "emoji": "ðŸ‘˜"
    },
    {
        "name": "sari",
        "emoji": "ðŸ¥»"
    },
    {
        "name": "one-piece swimsuit",
        "emoji": "ðŸ©±"
    },
    {
        "name": "briefs",
        "emoji": "ðŸ©²"
    },
    {
        "name": "shorts",
        "emoji": "ðŸ©³"
    },
    {
        "name": "bikini",
        "emoji": "ðŸ‘™"
    },
    {
        "name": "womanâ€™s clothes",
        "emoji": "ðŸ‘š"
    },
    {
        "name": "purse",
        "emoji": "ðŸ‘›"
    },
    {
        "name": "handbag",
        "emoji": "ðŸ‘œ"
    },
    {
        "name": "clutch bag",
        "emoji": "ðŸ‘"
    },
    {
        "name": "shopping bags",
        "emoji": "ðŸ›ï¸"
    },
    {
        "name": "backpack",
        "emoji": "ðŸŽ’"
    },
    {
        "name": "thong sandal",
        "emoji": "ðŸ©´"
    },
    {
        "name": "manâ€™s shoe",
        "emoji": "ðŸ‘ž"
    },
    {
        "name": "running shoe",
        "emoji": "ðŸ‘Ÿ"
    },
    {
        "name": "hiking boot",
        "emoji": "ðŸ¥¾"
    },
    {
        "name": "flat shoe",
        "emoji": "ðŸ¥¿"
    },
    {
        "name": "high-heeled shoe",
        "emoji": "ðŸ‘ "
    },
    {
        "name": "womanâ€™s sandal",
        "emoji": "ðŸ‘¡"
    },
    {
        "name": "ballet shoes",
        "emoji": "ðŸ©°"
    },
    {
        "name": "womanâ€™s boot",
        "emoji": "ðŸ‘¢"
    },
    {
        "name": "crown",
        "emoji": "ðŸ‘‘"
    },
    {
        "name": "womanâ€™s hat",
        "emoji": "ðŸ‘’"
    },
    {
        "name": "top hat",
        "emoji": "ðŸŽ©"
    },
    {
        "name": "graduation cap",
        "emoji": "ðŸŽ“"
    },
    {
        "name": "billed cap",
        "emoji": "ðŸ§¢"
    },
    {
        "name": "military helmet",
        "emoji": "ðŸª–"
    },
    {
        "name": "rescue workerâ€™s helmet",
        "emoji": "â›‘ï¸"
    },
    {
        "name": "prayer beads",
        "emoji": "ðŸ“¿"
    },
    {
        "name": "lipstick",
        "emoji": "ðŸ’„"
    },
    {
        "name": "ring",
        "emoji": "ðŸ’"
    },
    {
        "name": "gem stone",
        "emoji": "ðŸ’Ž"
    },
    {
        "name": "muted speaker",
        "emoji": "ðŸ”‡"
    },
    {
        "name": "speaker low volume",
        "emoji": "ðŸ”ˆ"
    },
    {
        "name": "speaker medium volume",
        "emoji": "ðŸ”‰"
    },
    {
        "name": "speaker high volume",
        "emoji": "ðŸ”Š"
    },
    {
        "name": "loudspeaker",
        "emoji": "ðŸ“¢"
    },
    {
        "name": "megaphone",
        "emoji": "ðŸ“£"
    },
    {
        "name": "postal horn",
        "emoji": "ðŸ“¯"
    },
    {
        "name": "bell",
        "emoji": "ðŸ””"
    },
    {
        "name": "bell with slash",
        "emoji": "ðŸ”•"
    },
    {
        "name": "musical score",
        "emoji": "ðŸŽ¼"
    },
    {
        "name": "musical note",
        "emoji": "ðŸŽµ"
    },
    {
        "name": "musical notes",
        "emoji": "ðŸŽ¶"
    },
    {
        "name": "studio microphone",
        "emoji": "ðŸŽ™ï¸"
    },
    {
        "name": "level slider",
        "emoji": "ðŸŽšï¸"
    },
    {
        "name": "control knobs",
        "emoji": "ðŸŽ›ï¸"
    },
    {
        "name": "microphone",
        "emoji": "ðŸŽ¤"
    },
    {
        "name": "headphone",
        "emoji": "ðŸŽ§"
    },
    {
        "name": "radio",
        "emoji": "ðŸ“»"
    },
    {
        "name": "saxophone",
        "emoji": "ðŸŽ·"
    },
    {
        "name": "accordion",
        "emoji": "ðŸª—"
    },
    {
        "name": "guitar",
        "emoji": "ðŸŽ¸"
    },
    {
        "name": "musical keyboard",
        "emoji": "ðŸŽ¹"
    },
    {
        "name": "trumpet",
        "emoji": "ðŸŽº"
    },
    {
        "name": "violin",
        "emoji": "ðŸŽ»"
    },
    {
        "name": "banjo",
        "emoji": "ðŸª•"
    },
    {
        "name": "drum",
        "emoji": "ðŸ¥"
    },
    {
        "name": "long drum",
        "emoji": "ðŸª˜"
    },
    {
        "name": "mobile phone",
        "emoji": "ðŸ“±"
    },
    {
        "name": "mobile phone with arrow",
        "emoji": "ðŸ“²"
    },
    {
        "name": "telephone",
        "emoji": "â˜Žï¸"
    },
    {
        "name": "telephone receiver",
        "emoji": "ðŸ“ž"
    },
    {
        "name": "pager",
        "emoji": "ðŸ“Ÿ"
    },
    {
        "name": "fax machine",
        "emoji": "ðŸ“ "
    },
    {
        "name": "battery",
        "emoji": "ðŸ”‹"
    },
    {
        "name": "low battery",
        "emoji": "ðŸª«"
    },
    {
        "name": "electric plug",
        "emoji": "ðŸ”Œ"
    },
    {
        "name": "laptop",
        "emoji": "ðŸ’»"
    },
    {
        "name": "desktop computer",
        "emoji": "ðŸ–¥ï¸"
    },
    {
        "name": "printer",
        "emoji": "ðŸ–¨ï¸"
    },
    {
        "name": "keyboard",
        "emoji": "âŒ¨ï¸"
    },
    {
        "name": "computer mouse",
        "emoji": "ðŸ–±ï¸"
    },
    {
        "name": "trackball",
        "emoji": "ðŸ–²ï¸"
    },
    {
        "name": "computer disk",
        "emoji": "ðŸ’½"
    },
    {
        "name": "floppy disk",
        "emoji": "ðŸ’¾"
    },
    {
        "name": "optical disk",
        "emoji": "ðŸ’¿"
    },
    {
        "name": "dvd",
        "emoji": "ðŸ“€"
    },
    {
        "name": "abacus",
        "emoji": "ðŸ§®"
    },
    {
        "name": "movie camera",
        "emoji": "ðŸŽ¥"
    },
    {
        "name": "film frames",
        "emoji": "ðŸŽžï¸"
    },
    {
        "name": "film projector",
        "emoji": "ðŸ“½ï¸"
    },
    {
        "name": "clapper board",
        "emoji": "ðŸŽ¬"
    },
    {
        "name": "television",
        "emoji": "ðŸ“º"
    },
    {
        "name": "camera",
        "emoji": "ðŸ“·"
    },
    {
        "name": "camera with flash",
        "emoji": "ðŸ“¸"
    },
    {
        "name": "video camera",
        "emoji": "ðŸ“¹"
    },
    {
        "name": "videocassette",
        "emoji": "ðŸ“¼"
    },
    {
        "name": "magnifying glass tilted left",
        "emoji": "ðŸ”"
    },
    {
        "name": "magnifying glass tilted right",
        "emoji": "ðŸ”Ž"
    },
    {
        "name": "candle",
        "emoji": "ðŸ•¯ï¸"
    },
    {
        "name": "light bulb",
        "emoji": "ðŸ’¡"
    },
    {
        "name": "flashlight",
        "emoji": "ðŸ”¦"
    },
    {
        "name": "red paper lantern",
        "emoji": "ðŸ®"
    },
    {
        "name": "diya lamp",
        "emoji": "ðŸª”"
    },
    {
        "name": "notebook with decorative cover",
        "emoji": "ðŸ“”"
    },
    {
        "name": "closed book",
        "emoji": "ðŸ“•"
    },
    {
        "name": "open book",
        "emoji": "ðŸ“–"
    },
    {
        "name": "green book",
        "emoji": "ðŸ“—"
    },
    {
        "name": "blue book",
        "emoji": "ðŸ“˜"
    },
    {
        "name": "orange book",
        "emoji": "ðŸ“™"
    },
    {
        "name": "books",
        "emoji": "ðŸ“š"
    },
    {
        "name": "notebook",
        "emoji": "ðŸ““"
    },
    {
        "name": "ledger",
        "emoji": "ðŸ“’"
    },
    {
        "name": "page with curl",
        "emoji": "ðŸ“ƒ"
    },
    {
        "name": "scroll",
        "emoji": "ðŸ“œ"
    },
    {
        "name": "page facing up",
        "emoji": "ðŸ“„"
    },
    {
        "name": "newspaper",
        "emoji": "ðŸ“°"
    },
    {
        "name": "rolled-up newspaper",
        "emoji": "ðŸ—žï¸"
    },
    {
        "name": "bookmark tabs",
        "emoji": "ðŸ“‘"
    },
    {
        "name": "bookmark",
        "emoji": "ðŸ”–"
    },
    {
        "name": "label",
        "emoji": "ðŸ·ï¸"
    },
    {
        "name": "money bag",
        "emoji": "ðŸ’°"
    },
    {
        "name": "coin",
        "emoji": "ðŸª™"
    },
    {
        "name": "yen banknote",
        "emoji": "ðŸ’´"
    },
    {
        "name": "dollar banknote",
        "emoji": "ðŸ’µ"
    },
    {
        "name": "euro banknote",
        "emoji": "ðŸ’¶"
    },
    {
        "name": "pound banknote",
        "emoji": "ðŸ’·"
    },
    {
        "name": "money with wings",
        "emoji": "ðŸ’¸"
    },
    {
        "name": "credit card",
        "emoji": "ðŸ’³"
    },
    {
        "name": "receipt",
        "emoji": "ðŸ§¾"
    },
    {
        "name": "chart increasing with yen",
        "emoji": "ðŸ’¹"
    },
    {
        "name": "envelope",
        "emoji": "âœ‰ï¸"
    },
    {
        "name": "e-mail",
        "emoji": "ðŸ“§"
    },
    {
        "name": "incoming envelope",
        "emoji": "ðŸ“¨"
    },
    {
        "name": "envelope with arrow",
        "emoji": "ðŸ“©"
    },
    {
        "name": "outbox tray",
        "emoji": "ðŸ“¤"
    },
    {
        "name": "inbox tray",
        "emoji": "ðŸ“¥"
    },
    {
        "name": "package",
        "emoji": "ðŸ“¦"
    },
    {
        "name": "closed mailbox with raised flag",
        "emoji": "ðŸ“«"
    },
    {
        "name": "closed mailbox with lowered flag",
        "emoji": "ðŸ“ª"
    },
    {
        "name": "open mailbox with raised flag",
        "emoji": "ðŸ“¬"
    },
    {
        "name": "open mailbox with lowered flag",
        "emoji": "ðŸ“­"
    },
    {
        "name": "postbox",
        "emoji": "ðŸ“®"
    },
    {
        "name": "ballot box with ballot",
        "emoji": "ðŸ—³ï¸"
    },
    {
        "name": "pencil",
        "emoji": "âœï¸"
    },
    {
        "name": "black nib",
        "emoji": "âœ’ï¸"
    },
    {
        "name": "fountain pen",
        "emoji": "ðŸ–‹ï¸"
    },
    {
        "name": "pen",
        "emoji": "ðŸ–Šï¸"
    },
    {
        "name": "paintbrush",
        "emoji": "ðŸ–Œï¸"
    },
    {
        "name": "crayon",
        "emoji": "ðŸ–ï¸"
    },
    {
        "name": "memo",
        "emoji": "ðŸ“"
    },
    {
        "name": "briefcase",
        "emoji": "ðŸ’¼"
    },
    {
        "name": "file folder",
        "emoji": "ðŸ“"
    },
    {
        "name": "open file folder",
        "emoji": "ðŸ“‚"
    },
    {
        "name": "card index dividers",
        "emoji": "ðŸ—‚ï¸"
    },
    {
        "name": "calendar",
        "emoji": "ðŸ“…"
    },
    {
        "name": "tear-off calendar",
        "emoji": "ðŸ“†"
    },
    {
        "name": "spiral notepad",
        "emoji": "ðŸ—’ï¸"
    },
    {
        "name": "spiral calendar",
        "emoji": "ðŸ—“ï¸"
    },
    {
        "name": "card index",
        "emoji": "ðŸ“‡"
    },
    {
        "name": "chart increasing",
        "emoji": "ðŸ“ˆ"
    },
    {
        "name": "chart decreasing",
        "emoji": "ðŸ“‰"
    },
    {
        "name": "bar chart",
        "emoji": "ðŸ“Š"
    },
    {
        "name": "clipboard",
        "emoji": "ðŸ“‹"
    },
    {
        "name": "pushpin",
        "emoji": "ðŸ“Œ"
    },
    {
        "name": "round pushpin",
        "emoji": "ðŸ“"
    },
    {
        "name": "paperclip",
        "emoji": "ðŸ“Ž"
    },
    {
        "name": "linked paperclips",
        "emoji": "ðŸ–‡ï¸"
    },
    {
        "name": "straight ruler",
        "emoji": "ðŸ“"
    },
    {
        "name": "triangular ruler",
        "emoji": "ðŸ“"
    },
    {
        "name": "scissors",
        "emoji": "âœ‚ï¸"
    },
    {
        "name": "card file box",
        "emoji": "ðŸ—ƒï¸"
    },
    {
        "name": "file cabinet",
        "emoji": "ðŸ—„ï¸"
    },
    {
        "name": "wastebasket",
        "emoji": "ðŸ—‘ï¸"
    },
    {
        "name": "locked",
        "emoji": "ðŸ”’"
    },
    {
        "name": "unlocked",
        "emoji": "ðŸ”“"
    },
    {
        "name": "locked with pen",
        "emoji": "ðŸ”"
    },
    {
        "name": "locked with key",
        "emoji": "ðŸ”"
    },
    {
        "name": "key",
        "emoji": "ðŸ”‘"
    },
    {
        "name": "old key",
        "emoji": "ðŸ—ï¸"
    },
    {
        "name": "hammer",
        "emoji": "ðŸ”¨"
    },
    {
        "name": "axe",
        "emoji": "ðŸª“"
    },
    {
        "name": "pick",
        "emoji": "â›ï¸"
    },
    {
        "name": "hammer and pick",
        "emoji": "âš’ï¸"
    },
    {
        "name": "hammer and wrench",
        "emoji": "ðŸ› ï¸"
    },
    {
        "name": "dagger",
        "emoji": "ðŸ—¡ï¸"
    },
    {
        "name": "crossed swords",
        "emoji": "âš”ï¸"
    },
    {
        "name": "water pistol",
        "emoji": "ðŸ”«"
    },
    {
        "name": "boomerang",
        "emoji": "ðŸªƒ"
    },
    {
        "name": "bow and arrow",
        "emoji": "ðŸ¹"
    },
    {
        "name": "shield",
        "emoji": "ðŸ›¡ï¸"
    },
    {
        "name": "carpentry saw",
        "emoji": "ðŸªš"
    },
    {
        "name": "wrench",
        "emoji": "ðŸ”§"
    },
    {
        "name": "screwdriver",
        "emoji": "ðŸª›"
    },
    {
        "name": "nut and bolt",
        "emoji": "ðŸ”©"
    },
    {
        "name": "gear",
        "emoji": "âš™ï¸"
    },
    {
        "name": "clamp",
        "emoji": "ðŸ—œï¸"
    },
    {
        "name": "balance scale",
        "emoji": "âš–ï¸"
    },
    {
        "name": "white cane",
        "emoji": "ðŸ¦¯"
    },
    {
        "name": "link",
        "emoji": "ðŸ”—"
    },
    {
        "name": "chains",
        "emoji": "â›“ï¸"
    },
    {
        "name": "hook",
        "emoji": "ðŸª"
    },
    {
        "name": "toolbox",
        "emoji": "ðŸ§°"
    },
    {
        "name": "magnet",
        "emoji": "ðŸ§²"
    },
    {
        "name": "ladder",
        "emoji": "ðŸªœ"
    },
    {
        "name": "alembic",
        "emoji": "âš—ï¸"
    },
    {
        "name": "test tube",
        "emoji": "ðŸ§ª"
    },
    {
        "name": "petri dish",
        "emoji": "ðŸ§«"
    },
    {
        "name": "dna",
        "emoji": "ðŸ§¬"
    },
    {
        "name": "microscope",
        "emoji": "ðŸ”¬"
    },
    {
        "name": "telescope",
        "emoji": "ðŸ”­"
    },
    {
        "name": "satellite antenna",
        "emoji": "ðŸ“¡"
    },
    {
        "name": "syringe",
        "emoji": "ðŸ’‰"
    },
    {
        "name": "drop of blood",
        "emoji": "ðŸ©¸"
    },
    {
        "name": "pill",
        "emoji": "ðŸ’Š"
    },
    {
        "name": "adhesive bandage",
        "emoji": "ðŸ©¹"
    },
    {
        "name": "crutch",
        "emoji": "ðŸ©¼"
    },
    {
        "name": "stethoscope",
        "emoji": "ðŸ©º"
    },
    {
        "name": "x-ray",
        "emoji": "ðŸ©»"
    },
    {
        "name": "door",
        "emoji": "ðŸšª"
    },
    {
        "name": "elevator",
        "emoji": "ðŸ›—"
    },
    {
        "name": "mirror",
        "emoji": "ðŸªž"
    },
    {
        "name": "window",
        "emoji": "ðŸªŸ"
    },
    {
        "name": "bed",
        "emoji": "ðŸ›ï¸"
    },
    {
        "name": "couch and lamp",
        "emoji": "ðŸ›‹ï¸"
    },
    {
        "name": "chair",
        "emoji": "ðŸª‘"
    },
    {
        "name": "toilet",
        "emoji": "ðŸš½"
    },
    {
        "name": "plunger",
        "emoji": "ðŸª "
    },
    {
        "name": "shower",
        "emoji": "ðŸš¿"
    },
    {
        "name": "bathtub",
        "emoji": "ðŸ›"
    },
    {
        "name": "mouse trap",
        "emoji": "ðŸª¤"
    },
    {
        "name": "razor",
        "emoji": "ðŸª’"
    },
    {
        "name": "lotion bottle",
        "emoji": "ðŸ§´"
    },
    {
        "name": "safety pin",
        "emoji": "ðŸ§·"
    },
    {
        "name": "broom",
        "emoji": "ðŸ§¹"
    },
    {
        "name": "basket",
        "emoji": "ðŸ§º"
    },
    {
        "name": "roll of paper",
        "emoji": "ðŸ§»"
    },
    {
        "name": "bucket",
        "emoji": "ðŸª£"
    },
    {
        "name": "soap",
        "emoji": "ðŸ§¼"
    },
    {
        "name": "bubbles",
        "emoji": "ðŸ«§"
    },
    {
        "name": "toothbrush",
        "emoji": "ðŸª¥"
    },
    {
        "name": "sponge",
        "emoji": "ðŸ§½"
    },
    {
        "name": "fire extinguisher",
        "emoji": "ðŸ§¯"
    },
    {
        "name": "shopping cart",
        "emoji": "ðŸ›’"
    },
    {
        "name": "cigarette",
        "emoji": "ðŸš¬"
    },
    {
        "name": "coffin",
        "emoji": "âš°ï¸"
    },
    {
        "name": "headstone",
        "emoji": "ðŸª¦"
    },
    {
        "name": "funeral urn",
        "emoji": "âš±ï¸"
    },
    {
        "name": "moai",
        "emoji": "ðŸ—¿"
    },
    {
        "name": "placard",
        "emoji": "ðŸª§"
    },
    {
        "name": "identification card",
        "emoji": "ðŸªª"
    },
    {
        "name": "ATM sign",
        "emoji": "ðŸ§"
    },
    {
        "name": "litter in bin sign",
        "emoji": "ðŸš®"
    },
    {
        "name": "potable water",
        "emoji": "ðŸš°"
    },
    {
        "name": "wheelchair symbol",
        "emoji": "â™¿"
    },
    {
        "name": "menâ€™s room",
        "emoji": "ðŸš¹"
    },
    {
        "name": "womenâ€™s room",
        "emoji": "ðŸšº"
    },
    {
        "name": "restroom",
        "emoji": "ðŸš»"
    },
    {
        "name": "baby symbol",
        "emoji": "ðŸš¼"
    },
    {
        "name": "water closet",
        "emoji": "ðŸš¾"
    },
    {
        "name": "passport control",
        "emoji": "ðŸ›‚"
    },
    {
        "name": "customs",
        "emoji": "ðŸ›ƒ"
    },
    {
        "name": "baggage claim",
        "emoji": "ðŸ›„"
    },
    {
        "name": "left luggage",
        "emoji": "ðŸ›…"
    },
    {
        "name": "warning",
        "emoji": "âš ï¸"
    },
    {
        "name": "children crossing",
        "emoji": "ðŸš¸"
    },
    {
        "name": "no entry",
        "emoji": "â›”"
    },
    {
        "name": "prohibited",
        "emoji": "ðŸš«"
    },
    {
        "name": "no bicycles",
        "emoji": "ðŸš³"
    },
    {
        "name": "no smoking",
        "emoji": "ðŸš­"
    },
    {
        "name": "no littering",
        "emoji": "ðŸš¯"
    },
    {
        "name": "non-potable water",
        "emoji": "ðŸš±"
    },
    {
        "name": "no pedestrians",
        "emoji": "ðŸš·"
    },
    {
        "name": "no mobile phones",
        "emoji": "ðŸ“µ"
    },
    {
        "name": "no one under eighteen",
        "emoji": "ðŸ”ž"
    },
    {
        "name": "radioactive",
        "emoji": "â˜¢ï¸"
    },
    {
        "name": "biohazard",
        "emoji": "â˜£ï¸"
    },
    {
        "name": "up arrow",
        "emoji": "â¬†ï¸"
    },
    {
        "name": "up-right arrow",
        "emoji": "â†—ï¸"
    },
    {
        "name": "right arrow",
        "emoji": "âž¡ï¸"
    },
    {
        "name": "down-right arrow",
        "emoji": "â†˜ï¸"
    },
    {
        "name": "down arrow",
        "emoji": "â¬‡ï¸"
    },
    {
        "name": "down-left arrow",
        "emoji": "â†™ï¸"
    },
    {
        "name": "left arrow",
        "emoji": "â¬…ï¸"
    },
    {
        "name": "up-left arrow",
        "emoji": "â†–ï¸"
    },
    {
        "name": "up-down arrow",
        "emoji": "â†•ï¸"
    },
    {
        "name": "left-right arrow",
        "emoji": "â†”ï¸"
    },
    {
        "name": "right arrow curving left",
        "emoji": "â†©ï¸"
    },
    {
        "name": "left arrow curving right",
        "emoji": "â†ªï¸"
    },
    {
        "name": "right arrow curving up",
        "emoji": "â¤´ï¸"
    },
    {
        "name": "right arrow curving down",
        "emoji": "â¤µï¸"
    },
    {
        "name": "clockwise vertical arrows",
        "emoji": "ðŸ”ƒ"
    },
    {
        "name": "counterclockwise arrows button",
        "emoji": "ðŸ”„"
    },
    {
        "name": "BACK arrow",
        "emoji": "ðŸ”™"
    },
    {
        "name": "END arrow",
        "emoji": "ðŸ”š"
    },
    {
        "name": "ON! arrow",
        "emoji": "ðŸ”›"
    },
    {
        "name": "SOON arrow",
        "emoji": "ðŸ”œ"
    },
    {
        "name": "TOP arrow",
        "emoji": "ðŸ”"
    },
    {
        "name": "place of worship",
        "emoji": "ðŸ›"
    },
    {
        "name": "atom symbol",
        "emoji": "âš›ï¸"
    },
    {
        "name": "om",
        "emoji": "ðŸ•‰ï¸"
    },
    {
        "name": "star of David",
        "emoji": "âœ¡ï¸"
    },
    {
        "name": "wheel of dharma",
        "emoji": "â˜¸ï¸"
    },
    {
        "name": "yin yang",
        "emoji": "â˜¯ï¸"
    },
    {
        "name": "latin cross",
        "emoji": "âœï¸"
    },
    {
        "name": "orthodox cross",
        "emoji": "â˜¦ï¸"
    },
    {
        "name": "star and crescent",
        "emoji": "â˜ªï¸"
    },
    {
        "name": "peace symbol",
        "emoji": "â˜®ï¸"
    },
    {
        "name": "menorah",
        "emoji": "ðŸ•Ž"
    },
    {
        "name": "dotted six-pointed star",
        "emoji": "ðŸ”¯"
    },
    {
        "name": "Aries",
        "emoji": "â™ˆ"
    },
    {
        "name": "Taurus",
        "emoji": "â™‰"
    },
    {
        "name": "Gemini",
        "emoji": "â™Š"
    },
    {
        "name": "Cancer",
        "emoji": "â™‹"
    },
    {
        "name": "Leo",
        "emoji": "â™Œ"
    },
    {
        "name": "Virgo",
        "emoji": "â™"
    },
    {
        "name": "Libra",
        "emoji": "â™Ž"
    },
    {
        "name": "Scorpio",
        "emoji": "â™"
    },
    {
        "name": "Sagittarius",
        "emoji": "â™"
    },
    {
        "name": "Capricorn",
        "emoji": "â™‘"
    },
    {
        "name": "Aquarius",
        "emoji": "â™’"
    },
    {
        "name": "Pisces",
        "emoji": "â™“"
    },
    {
        "name": "Ophiuchus",
        "emoji": "â›Ž"
    },
    {
        "name": "shuffle tracks button",
        "emoji": "ðŸ”€"
    },
    {
        "name": "repeat button",
        "emoji": "ðŸ”"
    },
    {
        "name": "repeat single button",
        "emoji": "ðŸ”‚"
    },
    {
        "name": "play button",
        "emoji": "â–¶ï¸"
    },
    {
        "name": "fast-forward button",
        "emoji": "â©"
    },
    {
        "name": "next track button",
        "emoji": "â­ï¸"
    },
    {
        "name": "play or pause button",
        "emoji": "â¯ï¸"
    },
    {
        "name": "reverse button",
        "emoji": "â—€ï¸"
    },
    {
        "name": "fast reverse button",
        "emoji": "âª"
    },
    {
        "name": "last track button",
        "emoji": "â®ï¸"
    },
    {
        "name": "upwards button",
        "emoji": "ðŸ”¼"
    },
    {
        "name": "fast up button",
        "emoji": "â«"
    },
    {
        "name": "downwards button",
        "emoji": "ðŸ”½"
    },
    {
        "name": "fast down button",
        "emoji": "â¬"
    },
    {
        "name": "pause button",
        "emoji": "â¸ï¸"
    },
    {
        "name": "stop button",
        "emoji": "â¹ï¸"
    },
    {
        "name": "record button",
        "emoji": "âºï¸"
    },
    {
        "name": "eject button",
        "emoji": "âï¸"
    },
    {
        "name": "cinema",
        "emoji": "ðŸŽ¦"
    },
    {
        "name": "dim button",
        "emoji": "ðŸ”…"
    },
    {
        "name": "bright button",
        "emoji": "ðŸ”†"
    },
    {
        "name": "antenna bars",
        "emoji": "ðŸ“¶"
    },
    {
        "name": "vibration mode",
        "emoji": "ðŸ“³"
    },
    {
        "name": "mobile phone off",
        "emoji": "ðŸ“´"
    },
    {
        "name": "female sign",
        "emoji": "â™€ï¸"
    },
    {
        "name": "male sign",
        "emoji": "â™‚ï¸"
    },
    {
        "name": "transgender symbol",
        "emoji": "âš§ï¸"
    },
    {
        "name": "multiply",
        "emoji": "âœ–ï¸"
    },
    {
        "name": "plus",
        "emoji": "âž•"
    },
    {
        "name": "minus",
        "emoji": "âž–"
    },
    {
        "name": "divide",
        "emoji": "âž—"
    },
    {
        "name": "heavy equals sign",
        "emoji": "ðŸŸ°"
    },
    {
        "name": "infinity",
        "emoji": "â™¾ï¸"
    },
    {
        "name": "double exclamation mark",
        "emoji": "â€¼ï¸"
    },
    {
        "name": "exclamation question mark",
        "emoji": "â‰ï¸"
    },
    {
        "name": "red question mark",
        "emoji": "â“"
    },
    {
        "name": "white question mark",
        "emoji": "â”"
    },
    {
        "name": "white exclamation mark",
        "emoji": "â•"
    },
    {
        "name": "red exclamation mark",
        "emoji": "â—"
    },
    {
        "name": "wavy dash",
        "emoji": "ã€°ï¸"
    },
    {
        "name": "currency exchange",
        "emoji": "ðŸ’±"
    },
    {
        "name": "heavy dollar sign",
        "emoji": "ðŸ’²"
    },
    {
        "name": "medical symbol",
        "emoji": "âš•ï¸"
    },
    {
        "name": "recycling symbol",
        "emoji": "â™»ï¸"
    },
    {
        "name": "fleur-de-lis",
        "emoji": "âšœï¸"
    },
    {
        "name": "trident emblem",
        "emoji": "ðŸ”±"
    },
    {
        "name": "name badge",
        "emoji": "ðŸ“›"
    },
    {
        "name": "Japanese symbol for beginner",
        "emoji": "ðŸ”°"
    },
    {
        "name": "hollow red circle",
        "emoji": "â­•"
    },
    {
        "name": "check mark button",
        "emoji": "âœ…"
    },
    {
        "name": "check box with check",
        "emoji": "â˜‘ï¸"
    },
    {
        "name": "check mark",
        "emoji": "âœ”ï¸"
    },
    {
        "name": "cross mark",
        "emoji": "âŒ"
    },
    {
        "name": "cross mark button",
        "emoji": "âŽ"
    },
    {
        "name": "curly loop",
        "emoji": "âž°"
    },
    {
        "name": "double curly loop",
        "emoji": "âž¿"
    },
    {
        "name": "part alternation mark",
        "emoji": "ã€½ï¸"
    },
    {
        "name": "eight-spoked asterisk",
        "emoji": "âœ³ï¸"
    },
    {
        "name": "eight-pointed star",
        "emoji": "âœ´ï¸"
    },
    {
        "name": "sparkle",
        "emoji": "â‡ï¸"
    },
    {
        "name": "copyright",
        "emoji": "Â©ï¸"
    },
    {
        "name": "registered",
        "emoji": "Â®ï¸"
    },
    {
        "name": "trade mark",
        "emoji": "â„¢ï¸"
    },
    {
        "name": "keycap #",
        "emoji": "#ï¸âƒ£"
    },
    {
        "name": "keycap *",
        "emoji": "*ï¸âƒ£"
    },
    {
        "name": "keycap 0",
        "emoji": "0ï¸âƒ£"
    },
    {
        "name": "keycap 1",
        "emoji": "1ï¸âƒ£"
    },
    {
        "name": "keycap 2",
        "emoji": "2ï¸âƒ£"
    },
    {
        "name": "keycap 3",
        "emoji": "3ï¸âƒ£"
    },
    {
        "name": "keycap 4",
        "emoji": "4ï¸âƒ£"
    },
    {
        "name": "keycap 5",
        "emoji": "5ï¸âƒ£"
    },
    {
        "name": "keycap 6",
        "emoji": "6ï¸âƒ£"
    },
    {
        "name": "keycap 7",
        "emoji": "7ï¸âƒ£"
    },
    {
        "name": "keycap 8",
        "emoji": "8ï¸âƒ£"
    },
    {
        "name": "keycap 9",
        "emoji": "9ï¸âƒ£"
    },
    {
        "name": "keycap 10",
        "emoji": "ðŸ”Ÿ"
    },
    {
        "name": "input latin uppercase",
        "emoji": "ðŸ” "
    },
    {
        "name": "input latin lowercase",
        "emoji": "ðŸ”¡"
    },
    {
        "name": "input numbers",
        "emoji": "ðŸ”¢"
    },
    {
        "name": "input symbols",
        "emoji": "ðŸ”£"
    },
    {
        "name": "input latin letters",
        "emoji": "ðŸ”¤"
    },
    {
        "name": "A button (blood type)",
        "emoji": "ðŸ…°ï¸"
    },
    {
        "name": "AB button (blood type)",
        "emoji": "ðŸ†Ž"
    },
    {
        "name": "B button (blood type)",
        "emoji": "ðŸ…±ï¸"
    },
    {
        "name": "CL button",
        "emoji": "ðŸ†‘"
    },
    {
        "name": "COOL button",
        "emoji": "ðŸ†’"
    },
    {
        "name": "FREE button",
        "emoji": "ðŸ†“"
    },
    {
        "name": "information",
        "emoji": "â„¹ï¸"
    },
    {
        "name": "ID button",
        "emoji": "ðŸ†”"
    },
    {
        "name": "circled M",
        "emoji": "â“‚ï¸"
    },
    {
        "name": "NEW button",
        "emoji": "ðŸ†•"
    },
    {
        "name": "NG button",
        "emoji": "ðŸ†–"
    },
    {
        "name": "O button (blood type)",
        "emoji": "ðŸ…¾ï¸"
    },
    {
        "name": "OK button",
        "emoji": "ðŸ†—"
    },
    {
        "name": "P button",
        "emoji": "ðŸ…¿ï¸"
    },
    {
        "name": "SOS button",
        "emoji": "ðŸ†˜"
    },
    {
        "name": "UP! button",
        "emoji": "ðŸ†™"
    },
    {
        "name": "VS button",
        "emoji": "ðŸ†š"
    },
    {
        "name": "Japanese â€œhereâ€ button",
        "emoji": "ðŸˆ"
    },
    {
        "name": "Japanese â€œservice chargeâ€ button",
        "emoji": "ðŸˆ‚ï¸"
    },
    {
        "name": "Japanese â€œmonthly amountâ€ button",
        "emoji": "ðŸˆ·ï¸"
    },
    {
        "name": "Japanese â€œnot free of chargeâ€ button",
        "emoji": "ðŸˆ¶"
    },
    {
        "name": "Japanese â€œreservedâ€ button",
        "emoji": "ðŸˆ¯"
    },
    {
        "name": "Japanese â€œbargainâ€ button",
        "emoji": "ðŸ‰"
    },
    {
        "name": "Japanese â€œdiscountâ€ button",
        "emoji": "ðŸˆ¹"
    },
    {
        "name": "Japanese â€œfree of chargeâ€ button",
        "emoji": "ðŸˆš"
    },
    {
        "name": "Japanese â€œprohibitedâ€ button",
        "emoji": "ðŸˆ²"
    },
    {
        "name": "Japanese â€œacceptableâ€ button",
        "emoji": "ðŸ‰‘"
    },
    {
        "name": "Japanese â€œapplicationâ€ button",
        "emoji": "ðŸˆ¸"
    },
    {
        "name": "Japanese â€œpassing gradeâ€ button",
        "emoji": "ðŸˆ´"
    },
    {
        "name": "Japanese â€œvacancyâ€ button",
        "emoji": "ðŸˆ³"
    },
    {
        "name": "Japanese â€œcongratulationsâ€ button",
        "emoji": "ãŠ—ï¸"
    },
    {
        "name": "Japanese â€œsecretâ€ button",
        "emoji": "ãŠ™ï¸"
    },
    {
        "name": "Japanese â€œopen for businessâ€ button",
        "emoji": "ðŸˆº"
    },
    {
        "name": "Japanese â€œno vacancyâ€ button",
        "emoji": "ðŸˆµ"
    },
    {
        "name": "red circle",
        "emoji": "ðŸ”´"
    },
    {
        "name": "orange circle",
        "emoji": "ðŸŸ "
    },
    {
        "name": "yellow circle",
        "emoji": "ðŸŸ¡"
    },
    {
        "name": "green circle",
        "emoji": "ðŸŸ¢"
    },
    {
        "name": "blue circle",
        "emoji": "ðŸ”µ"
    },
    {
        "name": "purple circle",
        "emoji": "ðŸŸ£"
    },
    {
        "name": "brown circle",
        "emoji": "ðŸŸ¤"
    },
    {
        "name": "black circle",
        "emoji": "âš«"
    },
    {
        "name": "white circle",
        "emoji": "âšª"
    },
    {
        "name": "red square",
        "emoji": "ðŸŸ¥"
    },
    {
        "name": "orange square",
        "emoji": "ðŸŸ§"
    },
    {
        "name": "yellow square",
        "emoji": "ðŸŸ¨"
    },
    {
        "name": "green square",
        "emoji": "ðŸŸ©"
    },
    {
        "name": "blue square",
        "emoji": "ðŸŸ¦"
    },
    {
        "name": "purple square",
        "emoji": "ðŸŸª"
    },
    {
        "name": "brown square",
        "emoji": "ðŸŸ«"
    },
    {
        "name": "black large square",
        "emoji": "â¬›"
    },
    {
        "name": "white large square",
        "emoji": "â¬œ"
    },
    {
        "name": "black medium square",
        "emoji": "â—¼ï¸"
    },
    {
        "name": "white medium square",
        "emoji": "â—»ï¸"
    },
    {
        "name": "black medium-small square",
        "emoji": "â—¾"
    },
    {
        "name": "white medium-small square",
        "emoji": "â—½"
    },
    {
        "name": "black small square",
        "emoji": "â–ªï¸"
    },
    {
        "name": "white small square",
        "emoji": "â–«ï¸"
    },
    {
        "name": "large orange diamond",
        "emoji": "ðŸ”¶"
    },
    {
        "name": "large blue diamond",
        "emoji": "ðŸ”·"
    },
    {
        "name": "small orange diamond",
        "emoji": "ðŸ”¸"
    },
    {
        "name": "small blue diamond",
        "emoji": "ðŸ”¹"
    },
    {
        "name": "red triangle pointed up",
        "emoji": "ðŸ”º"
    },
    {
        "name": "red triangle pointed down",
        "emoji": "ðŸ”»"
    },
    {
        "name": "diamond with a dot",
        "emoji": "ðŸ’ "
    },
    {
        "name": "radio button",
        "emoji": "ðŸ”˜"
    },
    {
        "name": "white square button",
        "emoji": "ðŸ”³"
    },
    {
        "name": "black square button",
        "emoji": "ðŸ”²"
    },
    {
        "name": "chequered flag",
        "emoji": "ðŸ"
    },
    {
        "name": "triangular flag",
        "emoji": "ðŸš©"
    },
    {
        "name": "crossed flags",
        "emoji": "ðŸŽŒ"
    },
    {
        "name": "black flag",
        "emoji": "ðŸ´"
    },
    {
        "name": "white flag",
        "emoji": "ðŸ³ï¸"
    },
    {
        "name": "rainbow flag",
        "emoji": "ðŸ³ï¸â€ðŸŒˆ"
    },
    {
        "name": "transgender flag",
        "emoji": "ðŸ³ï¸â€âš§ï¸"
    },
    {
        "name": "pirate flag",
        "emoji": "ðŸ´â€â˜ ï¸"
    },
    {
        "name": "flag Ascension Island",
        "emoji": "ðŸ‡¦ðŸ‡¨"
    },
    {
        "name": "flag Andorra",
        "emoji": "ðŸ‡¦ðŸ‡©"
    },
    {
        "name": "flag United Arab Emirates",
        "emoji": "ðŸ‡¦ðŸ‡ª"
    },
    {
        "name": "flag Afghanistan",
        "emoji": "ðŸ‡¦ðŸ‡«"
    },
    {
        "name": "flag Antigua & Barbuda",
        "emoji": "ðŸ‡¦ðŸ‡¬"
    },
    {
        "name": "flag Anguilla",
        "emoji": "ðŸ‡¦ðŸ‡®"
    },
    {
        "name": "flag Albania",
        "emoji": "ðŸ‡¦ðŸ‡±"
    },
    {
        "name": "flag Armenia",
        "emoji": "ðŸ‡¦ðŸ‡²"
    },
    {
        "name": "flag Angola",
        "emoji": "ðŸ‡¦ðŸ‡´"
    },
    {
        "name": "flag Antarctica",
        "emoji": "ðŸ‡¦ðŸ‡¶"
    },
    {
        "name": "flag Argentina",
        "emoji": "ðŸ‡¦ðŸ‡·"
    },
    {
        "name": "flag American Samoa",
        "emoji": "ðŸ‡¦ðŸ‡¸"
    },
    {
        "name": "flag Austria",
        "emoji": "ðŸ‡¦ðŸ‡¹"
    },
    {
        "name": "flag Australia",
        "emoji": "ðŸ‡¦ðŸ‡º"
    },
    {
        "name": "flag Aruba",
        "emoji": "ðŸ‡¦ðŸ‡¼"
    },
    {
        "name": "flag Ã…land Islands",
        "emoji": "ðŸ‡¦ðŸ‡½"
    },
    {
        "name": "flag Azerbaijan",
        "emoji": "ðŸ‡¦ðŸ‡¿"
    },
    {
        "name": "flag Bosnia & Herzegovina",
        "emoji": "ðŸ‡§ðŸ‡¦"
    },
    {
        "name": "flag Barbados",
        "emoji": "ðŸ‡§ðŸ‡§"
    },
    {
        "name": "flag Bangladesh",
        "emoji": "ðŸ‡§ðŸ‡©"
    },
    {
        "name": "flag Belgium",
        "emoji": "ðŸ‡§ðŸ‡ª"
    },
    {
        "name": "flag Burkina Faso",
        "emoji": "ðŸ‡§ðŸ‡«"
    },
    {
        "name": "flag Bulgaria",
        "emoji": "ðŸ‡§ðŸ‡¬"
    },
    {
        "name": "flag Bahrain",
        "emoji": "ðŸ‡§ðŸ‡­"
    },
    {
        "name": "flag Burundi",
        "emoji": "ðŸ‡§ðŸ‡®"
    },
    {
        "name": "flag Benin",
        "emoji": "ðŸ‡§ðŸ‡¯"
    },
    {
        "name": "flag St. BarthÃ©lemy",
        "emoji": "ðŸ‡§ðŸ‡±"
    },
    {
        "name": "flag Bermuda",
        "emoji": "ðŸ‡§ðŸ‡²"
    },
    {
        "name": "flag Brunei",
        "emoji": "ðŸ‡§ðŸ‡³"
    },
    {
        "name": "flag Bolivia",
        "emoji": "ðŸ‡§ðŸ‡´"
    },
    {
        "name": "flag Caribbean Netherlands",
        "emoji": "ðŸ‡§ðŸ‡¶"
    },
    {
        "name": "flag Brazil",
        "emoji": "ðŸ‡§ðŸ‡·"
    },
    {
        "name": "flag Bahamas",
        "emoji": "ðŸ‡§ðŸ‡¸"
    },
    {
        "name": "flag Bhutan",
        "emoji": "ðŸ‡§ðŸ‡¹"
    },
    {
        "name": "flag Bouvet Island",
        "emoji": "ðŸ‡§ðŸ‡»"
    },
    {
        "name": "flag Botswana",
        "emoji": "ðŸ‡§ðŸ‡¼"
    },
    {
        "name": "flag Belarus",
        "emoji": "ðŸ‡§ðŸ‡¾"
    },
    {
        "name": "flag Belize",
        "emoji": "ðŸ‡§ðŸ‡¿"
    },
    {
        "name": "flag Canada",
        "emoji": "ðŸ‡¨ðŸ‡¦"
    },
    {
        "name": "flag Cocos (Keeling) Islands",
        "emoji": "ðŸ‡¨ðŸ‡¨"
    },
    {
        "name": "flag Congo - Kinshasa",
        "emoji": "ðŸ‡¨ðŸ‡©"
    },
    {
        "name": "flag Central African Republic",
        "emoji": "ðŸ‡¨ðŸ‡«"
    },
    {
        "name": "flag Congo - Brazzaville",
        "emoji": "ðŸ‡¨ðŸ‡¬"
    },
    {
        "name": "flag Switzerland",
        "emoji": "ðŸ‡¨ðŸ‡­"
    },
    {
        "name": "flag CÃ´te dâ€™Ivoire",
        "emoji": "ðŸ‡¨ðŸ‡®"
    },
    {
        "name": "flag Cook Islands",
        "emoji": "ðŸ‡¨ðŸ‡°"
    },
    {
        "name": "flag Chile",
        "emoji": "ðŸ‡¨ðŸ‡±"
    },
    {
        "name": "flag Cameroon",
        "emoji": "ðŸ‡¨ðŸ‡²"
    },
    {
        "name": "flag China",
        "emoji": "ðŸ‡¨ðŸ‡³"
    },
    {
        "name": "flag Colombia",
        "emoji": "ðŸ‡¨ðŸ‡´"
    },
    {
        "name": "flag Clipperton Island",
        "emoji": "ðŸ‡¨ðŸ‡µ"
    },
    {
        "name": "flag Costa Rica",
        "emoji": "ðŸ‡¨ðŸ‡·"
    },
    {
        "name": "flag Cuba",
        "emoji": "ðŸ‡¨ðŸ‡º"
    },
    {
        "name": "flag Cape Verde",
        "emoji": "ðŸ‡¨ðŸ‡»"
    },
    {
        "name": "flag CuraÃ§ao",
        "emoji": "ðŸ‡¨ðŸ‡¼"
    },
    {
        "name": "flag Christmas Island",
        "emoji": "ðŸ‡¨ðŸ‡½"
    },
    {
        "name": "flag Cyprus",
        "emoji": "ðŸ‡¨ðŸ‡¾"
    },
    {
        "name": "flag Czechia",
        "emoji": "ðŸ‡¨ðŸ‡¿"
    },
    {
        "name": "flag Germany",
        "emoji": "ðŸ‡©ðŸ‡ª"
    },
    {
        "name": "flag Diego Garcia",
        "emoji": "ðŸ‡©ðŸ‡¬"
    },
    {
        "name": "flag Djibouti",
        "emoji": "ðŸ‡©ðŸ‡¯"
    },
    {
        "name": "flag Denmark",
        "emoji": "ðŸ‡©ðŸ‡°"
    },
    {
        "name": "flag Dominica",
        "emoji": "ðŸ‡©ðŸ‡²"
    },
    {
        "name": "flag Dominican Republic",
        "emoji": "ðŸ‡©ðŸ‡´"
    },
    {
        "name": "flag Algeria",
        "emoji": "ðŸ‡©ðŸ‡¿"
    },
    {
        "name": "flag Ceuta & Melilla",
        "emoji": "ðŸ‡ªðŸ‡¦"
    },
    {
        "name": "flag Ecuador",
        "emoji": "ðŸ‡ªðŸ‡¨"
    },
    {
        "name": "flag Estonia",
        "emoji": "ðŸ‡ªðŸ‡ª"
    },
    {
        "name": "flag Egypt",
        "emoji": "ðŸ‡ªðŸ‡¬"
    },
    {
        "name": "flag Western Sahara",
        "emoji": "ðŸ‡ªðŸ‡­"
    },
    {
        "name": "flag Eritrea",
        "emoji": "ðŸ‡ªðŸ‡·"
    },
    {
        "name": "flag Spain",
        "emoji": "ðŸ‡ªðŸ‡¸"
    },
    {
        "name": "flag Ethiopia",
        "emoji": "ðŸ‡ªðŸ‡¹"
    },
    {
        "name": "flag European Union",
        "emoji": "ðŸ‡ªðŸ‡º"
    },
    {
        "name": "flag Finland",
        "emoji": "ðŸ‡«ðŸ‡®"
    },
    {
        "name": "flag Fiji",
        "emoji": "ðŸ‡«ðŸ‡¯"
    },
    {
        "name": "flag Falkland Islands",
        "emoji": "ðŸ‡«ðŸ‡°"
    },
    {
        "name": "flag Micronesia",
        "emoji": "ðŸ‡«ðŸ‡²"
    },
    {
        "name": "flag Faroe Islands",
        "emoji": "ðŸ‡«ðŸ‡´"
    },
    {
        "name": "flag France",
        "emoji": "ðŸ‡«ðŸ‡·"
    },
    {
        "name": "flag Gabon",
        "emoji": "ðŸ‡¬ðŸ‡¦"
    },
    {
        "name": "flag United Kingdom",
        "emoji": "ðŸ‡¬ðŸ‡§"
    },
    {
        "name": "flag Grenada",
        "emoji": "ðŸ‡¬ðŸ‡©"
    },
    {
        "name": "flag Georgia",
        "emoji": "ðŸ‡¬ðŸ‡ª"
    },
    {
        "name": "flag French Guiana",
        "emoji": "ðŸ‡¬ðŸ‡«"
    },
    {
        "name": "flag Guernsey",
        "emoji": "ðŸ‡¬ðŸ‡¬"
    },
    {
        "name": "flag Ghana",
        "emoji": "ðŸ‡¬ðŸ‡­"
    },
    {
        "name": "flag Gibraltar",
        "emoji": "ðŸ‡¬ðŸ‡®"
    },
    {
        "name": "flag Greenland",
        "emoji": "ðŸ‡¬ðŸ‡±"
    },
    {
        "name": "flag Gambia",
        "emoji": "ðŸ‡¬ðŸ‡²"
    },
    {
        "name": "flag Guinea",
        "emoji": "ðŸ‡¬ðŸ‡³"
    },
    {
        "name": "flag Guadeloupe",
        "emoji": "ðŸ‡¬ðŸ‡µ"
    },
    {
        "name": "flag Equatorial Guinea",
        "emoji": "ðŸ‡¬ðŸ‡¶"
    },
    {
        "name": "flag Greece",
        "emoji": "ðŸ‡¬ðŸ‡·"
    },
    {
        "name": "flag South Georgia & South Sandwich Islands",
        "emoji": "ðŸ‡¬ðŸ‡¸"
    },
    {
        "name": "flag Guatemala",
        "emoji": "ðŸ‡¬ðŸ‡¹"
    },
    {
        "name": "flag Guam",
        "emoji": "ðŸ‡¬ðŸ‡º"
    },
    {
        "name": "flag Guinea-Bissau",
        "emoji": "ðŸ‡¬ðŸ‡¼"
    },
    {
        "name": "flag Guyana",
        "emoji": "ðŸ‡¬ðŸ‡¾"
    },
    {
        "name": "flag Hong Kong SAR China",
        "emoji": "ðŸ‡­ðŸ‡°"
    },
    {
        "name": "flag Heard & McDonald Islands",
        "emoji": "ðŸ‡­ðŸ‡²"
    },
    {
        "name": "flag Honduras",
        "emoji": "ðŸ‡­ðŸ‡³"
    },
    {
        "name": "flag Croatia",
        "emoji": "ðŸ‡­ðŸ‡·"
    },
    {
        "name": "flag Haiti",
        "emoji": "ðŸ‡­ðŸ‡¹"
    },
    {
        "name": "flag Hungary",
        "emoji": "ðŸ‡­ðŸ‡º"
    },
    {
        "name": "flag Canary Islands",
        "emoji": "ðŸ‡®ðŸ‡¨"
    },
    {
        "name": "flag Indonesia",
        "emoji": "ðŸ‡®ðŸ‡©"
    },
    {
        "name": "flag Ireland",
        "emoji": "ðŸ‡®ðŸ‡ª"
    },
    {
        "name": "flag Israel",
        "emoji": "ðŸ‡®ðŸ‡±"
    },
    {
        "name": "flag Isle of Man",
        "emoji": "ðŸ‡®ðŸ‡²"
    },
    {
        "name": "flag India",
        "emoji": "ðŸ‡®ðŸ‡³"
    },
    {
        "name": "flag British Indian Ocean Territory",
        "emoji": "ðŸ‡®ðŸ‡´"
    },
    {
        "name": "flag Iraq",
        "emoji": "ðŸ‡®ðŸ‡¶"
    },
    {
        "name": "flag Iran",
        "emoji": "ðŸ‡®ðŸ‡·"
    },
    {
        "name": "flag Iceland",
        "emoji": "ðŸ‡®ðŸ‡¸"
    },
    {
        "name": "flag Italy",
        "emoji": "ðŸ‡®ðŸ‡¹"
    },
    {
        "name": "flag Jersey",
        "emoji": "ðŸ‡¯ðŸ‡ª"
    },
    {
        "name": "flag Jamaica",
        "emoji": "ðŸ‡¯ðŸ‡²"
    },
    {
        "name": "flag Jordan",
        "emoji": "ðŸ‡¯ðŸ‡´"
    },
    {
        "name": "flag Japan",
        "emoji": "ðŸ‡¯ðŸ‡µ"
    },
    {
        "name": "flag Kenya",
        "emoji": "ðŸ‡°ðŸ‡ª"
    },
    {
        "name": "flag Kyrgyzstan",
        "emoji": "ðŸ‡°ðŸ‡¬"
    },
    {
        "name": "flag Cambodia",
        "emoji": "ðŸ‡°ðŸ‡­"
    },
    {
        "name": "flag Kiribati",
        "emoji": "ðŸ‡°ðŸ‡®"
    },
    {
        "name": "flag Comoros",
        "emoji": "ðŸ‡°ðŸ‡²"
    },
    {
        "name": "flag St. Kitts & Nevis",
        "emoji": "ðŸ‡°ðŸ‡³"
    },
    {
        "name": "flag North Korea",
        "emoji": "ðŸ‡°ðŸ‡µ"
    },
    {
        "name": "flag South Korea",
        "emoji": "ðŸ‡°ðŸ‡·"
    },
    {
        "name": "flag Kuwait",
        "emoji": "ðŸ‡°ðŸ‡¼"
    },
    {
        "name": "flag Cayman Islands",
        "emoji": "ðŸ‡°ðŸ‡¾"
    },
    {
        "name": "flag Kazakhstan",
        "emoji": "ðŸ‡°ðŸ‡¿"
    },
    {
        "name": "flag Laos",
        "emoji": "ðŸ‡±ðŸ‡¦"
    },
    {
        "name": "flag Lebanon",
        "emoji": "ðŸ‡±ðŸ‡§"
    },
    {
        "name": "flag St. Lucia",
        "emoji": "ðŸ‡±ðŸ‡¨"
    },
    {
        "name": "flag Liechtenstein",
        "emoji": "ðŸ‡±ðŸ‡®"
    },
    {
        "name": "flag Sri Lanka",
        "emoji": "ðŸ‡±ðŸ‡°"
    },
    {
        "name": "flag Liberia",
        "emoji": "ðŸ‡±ðŸ‡·"
    },
    {
        "name": "flag Lesotho",
        "emoji": "ðŸ‡±ðŸ‡¸"
    },
    {
        "name": "flag Lithuania",
        "emoji": "ðŸ‡±ðŸ‡¹"
    },
    {
        "name": "flag Luxembourg",
        "emoji": "ðŸ‡±ðŸ‡º"
    },
    {
        "name": "flag Latvia",
        "emoji": "ðŸ‡±ðŸ‡»"
    },
    {
        "name": "flag Libya",
        "emoji": "ðŸ‡±ðŸ‡¾"
    },
    {
        "name": "flag Morocco",
        "emoji": "ðŸ‡²ðŸ‡¦"
    },
    {
        "name": "flag Monaco",
        "emoji": "ðŸ‡²ðŸ‡¨"
    },
    {
        "name": "flag Moldova",
        "emoji": "ðŸ‡²ðŸ‡©"
    },
    {
        "name": "flag Montenegro",
        "emoji": "ðŸ‡²ðŸ‡ª"
    },
    {
        "name": "flag St. Martin",
        "emoji": "ðŸ‡²ðŸ‡«"
    },
    {
        "name": "flag Madagascar",
        "emoji": "ðŸ‡²ðŸ‡¬"
    },
    {
        "name": "flag Marshall Islands",
        "emoji": "ðŸ‡²ðŸ‡­"
    },
    {
        "name": "flag North Macedonia",
        "emoji": "ðŸ‡²ðŸ‡°"
    },
    {
        "name": "flag Mali",
        "emoji": "ðŸ‡²ðŸ‡±"
    },
    {
        "name": "flag Myanmar (Burma)",
        "emoji": "ðŸ‡²ðŸ‡²"
    },
    {
        "name": "flag Mongolia",
        "emoji": "ðŸ‡²ðŸ‡³"
    },
    {
        "name": "flag Macao SAR China",
        "emoji": "ðŸ‡²ðŸ‡´"
    },
    {
        "name": "flag Northern Mariana Islands",
        "emoji": "ðŸ‡²ðŸ‡µ"
    },
    {
        "name": "flag Martinique",
        "emoji": "ðŸ‡²ðŸ‡¶"
    },
    {
        "name": "flag Mauritania",
        "emoji": "ðŸ‡²ðŸ‡·"
    },
    {
        "name": "flag Montserrat",
        "emoji": "ðŸ‡²ðŸ‡¸"
    },
    {
        "name": "flag Malta",
        "emoji": "ðŸ‡²ðŸ‡¹"
    },
    {
        "name": "flag Mauritius",
        "emoji": "ðŸ‡²ðŸ‡º"
    },
    {
        "name": "flag Maldives",
        "emoji": "ðŸ‡²ðŸ‡»"
    },
    {
        "name": "flag Malawi",
        "emoji": "ðŸ‡²ðŸ‡¼"
    },
    {
        "name": "flag Mexico",
        "emoji": "ðŸ‡²ðŸ‡½"
    },
    {
        "name": "flag Malaysia",
        "emoji": "ðŸ‡²ðŸ‡¾"
    },
    {
        "name": "flag Mozambique",
        "emoji": "ðŸ‡²ðŸ‡¿"
    },
    {
        "name": "flag Namibia",
        "emoji": "ðŸ‡³ðŸ‡¦"
    },
    {
        "name": "flag New Caledonia",
        "emoji": "ðŸ‡³ðŸ‡¨"
    },
    {
        "name": "flag Niger",
        "emoji": "ðŸ‡³ðŸ‡ª"
    },
    {
        "name": "flag Norfolk Island",
        "emoji": "ðŸ‡³ðŸ‡«"
    },
    {
        "name": "flag Nigeria",
        "emoji": "ðŸ‡³ðŸ‡¬"
    },
    {
        "name": "flag Nicaragua",
        "emoji": "ðŸ‡³ðŸ‡®"
    },
    {
        "name": "flag Netherlands",
        "emoji": "ðŸ‡³ðŸ‡±"
    },
    {
        "name": "flag Norway",
        "emoji": "ðŸ‡³ðŸ‡´"
    },
    {
        "name": "flag Nepal",
        "emoji": "ðŸ‡³ðŸ‡µ"
    },
    {
        "name": "flag Nauru",
        "emoji": "ðŸ‡³ðŸ‡·"
    },
    {
        "name": "flag Niue",
        "emoji": "ðŸ‡³ðŸ‡º"
    },
    {
        "name": "flag New Zealand",
        "emoji": "ðŸ‡³ðŸ‡¿"
    },
    {
        "name": "flag Oman",
        "emoji": "ðŸ‡´ðŸ‡²"
    },
    {
        "name": "flag Panama",
        "emoji": "ðŸ‡µðŸ‡¦"
    },
    {
        "name": "flag Peru",
        "emoji": "ðŸ‡µðŸ‡ª"
    },
    {
        "name": "flag French Polynesia",
        "emoji": "ðŸ‡µðŸ‡«"
    },
    {
        "name": "flag Papua New Guinea",
        "emoji": "ðŸ‡µðŸ‡¬"
    },
    {
        "name": "flag Philippines",
        "emoji": "ðŸ‡µðŸ‡­"
    },
    {
        "name": "flag Pakistan",
        "emoji": "ðŸ‡µðŸ‡°"
    },
    {
        "name": "flag Poland",
        "emoji": "ðŸ‡µðŸ‡±"
    },
    {
        "name": "flag St. Pierre & Miquelon",
        "emoji": "ðŸ‡µðŸ‡²"
    },
    {
        "name": "flag Pitcairn Islands",
        "emoji": "ðŸ‡µðŸ‡³"
    },
    {
        "name": "flag Puerto Rico",
        "emoji": "ðŸ‡µðŸ‡·"
    },
    {
        "name": "flag Palestinian Territories",
        "emoji": "ðŸ‡µðŸ‡¸"
    },
    {
        "name": "flag Portugal",
        "emoji": "ðŸ‡µðŸ‡¹"
    },
    {
        "name": "flag Palau",
        "emoji": "ðŸ‡µðŸ‡¼"
    },
    {
        "name": "flag Paraguay",
        "emoji": "ðŸ‡µðŸ‡¾"
    },
    {
        "name": "flag Qatar",
        "emoji": "ðŸ‡¶ðŸ‡¦"
    },
    {
        "name": "flag RÃ©union",
        "emoji": "ðŸ‡·ðŸ‡ª"
    },
    {
        "name": "flag Romania",
        "emoji": "ðŸ‡·ðŸ‡´"
    },
    {
        "name": "flag Serbia",
        "emoji": "ðŸ‡·ðŸ‡¸"
    },
    {
        "name": "flag Russia",
        "emoji": "ðŸ‡·ðŸ‡º"
    },
    {
        "name": "flag Rwanda",
        "emoji": "ðŸ‡·ðŸ‡¼"
    },
    {
        "name": "flag Saudi Arabia",
        "emoji": "ðŸ‡¸ðŸ‡¦"
    },
    {
        "name": "flag Solomon Islands",
        "emoji": "ðŸ‡¸ðŸ‡§"
    },
    {
        "name": "flag Seychelles",
        "emoji": "ðŸ‡¸ðŸ‡¨"
    },
    {
        "name": "flag Sudan",
        "emoji": "ðŸ‡¸ðŸ‡©"
    },
    {
        "name": "flag Sweden",
        "emoji": "ðŸ‡¸ðŸ‡ª"
    },
    {
        "name": "flag Singapore",
        "emoji": "ðŸ‡¸ðŸ‡¬"
    },
    {
        "name": "flag St. Helena",
        "emoji": "ðŸ‡¸ðŸ‡­"
    },
    {
        "name": "flag Slovenia",
        "emoji": "ðŸ‡¸ðŸ‡®"
    },
    {
        "name": "flag Svalbard & Jan Mayen",
        "emoji": "ðŸ‡¸ðŸ‡¯"
    },
    {
        "name": "flag Slovakia",
        "emoji": "ðŸ‡¸ðŸ‡°"
    },
    {
        "name": "flag Sierra Leone",
        "emoji": "ðŸ‡¸ðŸ‡±"
    },
    {
        "name": "flag San Marino",
        "emoji": "ðŸ‡¸ðŸ‡²"
    },
    {
        "name": "flag Senegal",
        "emoji": "ðŸ‡¸ðŸ‡³"
    },
    {
        "name": "flag Somalia",
        "emoji": "ðŸ‡¸ðŸ‡´"
    },
    {
        "name": "flag Suriname",
        "emoji": "ðŸ‡¸ðŸ‡·"
    },
    {
        "name": "flag South Sudan",
        "emoji": "ðŸ‡¸ðŸ‡¸"
    },
    {
        "name": "flag SÃ£o TomÃ© & PrÃ­ncipe",
        "emoji": "ðŸ‡¸ðŸ‡¹"
    },
    {
        "name": "flag El Salvador",
        "emoji": "ðŸ‡¸ðŸ‡»"
    },
    {
        "name": "flag Sint Maarten",
        "emoji": "ðŸ‡¸ðŸ‡½"
    },
    {
        "name": "flag Syria",
        "emoji": "ðŸ‡¸ðŸ‡¾"
    },
    {
        "name": "flag Eswatini",
        "emoji": "ðŸ‡¸ðŸ‡¿"
    },
    {
        "name": "flag Tristan da Cunha",
        "emoji": "ðŸ‡¹ðŸ‡¦"
    },
    {
        "name": "flag Turks & Caicos Islands",
        "emoji": "ðŸ‡¹ðŸ‡¨"
    },
    {
        "name": "flag Chad",
        "emoji": "ðŸ‡¹ðŸ‡©"
    },
    {
        "name": "flag French Southern Territories",
        "emoji": "ðŸ‡¹ðŸ‡«"
    },
    {
        "name": "flag Togo",
        "emoji": "ðŸ‡¹ðŸ‡¬"
    },
    {
        "name": "flag Thailand",
        "emoji": "ðŸ‡¹ðŸ‡­"
    },
    {
        "name": "flag Tajikistan",
        "emoji": "ðŸ‡¹ðŸ‡¯"
    },
    {
        "name": "flag Tokelau",
        "emoji": "ðŸ‡¹ðŸ‡°"
    },
    {
        "name": "flag Timor-Leste",
        "emoji": "ðŸ‡¹ðŸ‡±"
    },
    {
        "name": "flag Turkmenistan",
        "emoji": "ðŸ‡¹ðŸ‡²"
    },
    {
        "name": "flag Tunisia",
        "emoji": "ðŸ‡¹ðŸ‡³"
    },
    {
        "name": "flag Tonga",
        "emoji": "ðŸ‡¹ðŸ‡´"
    },
    {
        "name": "flag Turkey",
        "emoji": "ðŸ‡¹ðŸ‡·"
    },
    {
        "name": "flag Trinidad & Tobago",
        "emoji": "ðŸ‡¹ðŸ‡¹"
    },
    {
        "name": "flag Tuvalu",
        "emoji": "ðŸ‡¹ðŸ‡»"
    },
    {
        "name": "flag Taiwan",
        "emoji": "ðŸ‡¹ðŸ‡¼"
    },
    {
        "name": "flag Tanzania",
        "emoji": "ðŸ‡¹ðŸ‡¿"
    },
    {
        "name": "flag Ukraine",
        "emoji": "ðŸ‡ºðŸ‡¦"
    },
    {
        "name": "flag Uganda",
        "emoji": "ðŸ‡ºðŸ‡¬"
    },
    {
        "name": "flag U.S. Outlying Islands",
        "emoji": "ðŸ‡ºðŸ‡²"
    },
    {
        "name": "flag United Nations",
        "emoji": "ðŸ‡ºðŸ‡³"
    },
    {
        "name": "flag United States",
        "emoji": "ðŸ‡ºðŸ‡¸"
    },
    {
        "name": "flag Uruguay",
        "emoji": "ðŸ‡ºðŸ‡¾"
    },
    {
        "name": "flag Uzbekistan",
        "emoji": "ðŸ‡ºðŸ‡¿"
    },
    {
        "name": "flag Vatican City",
        "emoji": "ðŸ‡»ðŸ‡¦"
    },
    {
        "name": "flag St. Vincent & Grenadines",
        "emoji": "ðŸ‡»ðŸ‡¨"
    },
    {
        "name": "flag Venezuela",
        "emoji": "ðŸ‡»ðŸ‡ª"
    },
    {
        "name": "flag British Virgin Islands",
        "emoji": "ðŸ‡»ðŸ‡¬"
    },
    {
        "name": "flag U.S. Virgin Islands",
        "emoji": "ðŸ‡»ðŸ‡®"
    },
    {
        "name": "flag Vietnam",
        "emoji": "ðŸ‡»ðŸ‡³"
    },
    {
        "name": "flag Vanuatu",
        "emoji": "ðŸ‡»ðŸ‡º"
    },
    {
        "name": "flag Wallis & Futuna",
        "emoji": "ðŸ‡¼ðŸ‡«"
    },
    {
        "name": "flag Samoa",
        "emoji": "ðŸ‡¼ðŸ‡¸"
    },
    {
        "name": "flag Kosovo",
        "emoji": "ðŸ‡½ðŸ‡°"
    },
    {
        "name": "flag Yemen",
        "emoji": "ðŸ‡¾ðŸ‡ª"
    },
    {
        "name": "flag Mayotte",
        "emoji": "ðŸ‡¾ðŸ‡¹"
    },
    {
        "name": "flag South Africa",
        "emoji": "ðŸ‡¿ðŸ‡¦"
    },
    {
        "name": "flag Zambia",
        "emoji": "ðŸ‡¿ðŸ‡²"
    },
    {
        "name": "flag Zimbabwe",
        "emoji": "ðŸ‡¿ðŸ‡¼"
    },
    {
        "name": "flag England",
        "emoji": "ðŸ´ó §ó ¢ó ¥ó ®ó §ó ¿"
    },
    {
        "name": "flag Scotland",
        "emoji": "ðŸ´ó §ó ¢ó ³ó £ó ´ó ¿"
    },
    {
        "name": "flag Wales",
        "emoji": "ðŸ´ó §ó ¢ó ·ó ¬ó ³ó ¿"
    }
];

function main() {
    console.log(`There are ${allEmoji.length} emoji`);

    // const first = allEmoji[0].emoji;
    // console.log(`The first emoji is: ${first}, named "${allEmoji[0].name}"`);

    /* Task: print all the emoji with 'smiling' in their name */

    for (let emoji of allEmoji) {
        if (emoji.name.includes("smiling")) {
            console.log(`${emoji.name}: ${emoji.emoji}`)
        }
    }

}

main();
