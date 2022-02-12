const rnd = () => { return Math.round(Math.random()) },
	random = (min, max) => { return Math.floor(Math.random(1) * (max - min)) + min; },
	lib = {
    	classes: ["человек", "огр", "ельф", "демон", "животное", "дракон", "тень", "ангел", "душа", "фея", "робот"],
   		skins: [
	    	{ ifClass: "человек", colors: ["светлая", "тёмный отенок", "тёмная"], nm: "кожи" },   	
	    	{ ifClass: "огр", colors: ["зеленый", "серый"], nm: "кожи" },  
	    	{ ifClass: "ельф", colors: ["светлая", "тёмный отенок", "тёмная"], nm: "кожи" },  
	    	{ ifClass: "демон", colors: ["красный"], nm: "кожи" },  
	    	{ ifClass: "животное", colors: ["коричневый", "светло-коричневый", "белый", "серый"], nm: "мха" },  
	    	{ ifClass: "дракон", colors: ["красный", "синий", "фиолетовый", "зеленый", "белый", "серый"], nm: "луски" },  
	    	{ ifClass: "тень", colors: ["черный"], nm: "тени" },  
	    	{ ifClass: "ангел", colors: ["белый"], nm: "кожи" },  
    		{ ifClass: "душа", colors: ["белый", "черный"], nm: "души" },
    		{ ifClass: "фея", colors: ["светлая", "тёмный отенок", "тёмная"], nm: "кожи" },  
    		{ ifClass: "робот", colors: ["светло-серый", "серый", "тёмно-серый"], nm: "метала" },    
    	],
    	height:  [
	    	{ ifClass: "человек", min: 20, max: 200 },   	
	    	{ ifClass: "огр", min: 10000, max: 20000 },  
	    	{ ifClass: "ельф", min: 20, max: 200 },  
	    	{ ifClass: "демон", min: 50, max: 500 },  
	    	{ ifClass: "животное", min: null, max: null },  
	    	{ ifClass: "дракон", min: 10000, max: 20000 },  
	    	{ ifClass: "тень", min: 40, max: 300 },  
	    	{ ifClass: "ангел", min: 50, max: 500 },  
    		{ ifClass: "душа", min: 25, max: 25 },
    		{ ifClass: "фея", min: 20, max: 100 },  
    		{ ifClass: "робот", min: null, max: null },    
    	]
	},
	ageOld = "возраст, при котором персонаж будет старый: ";

let age = document.querySelector(".age").value;
document.querySelector(".age-old").innerHTML = `${ageOld}${(age/100)*75}.`;

document.querySelector(".age").addEventListener("change", (event) => {
	age = event.target.value;
	document.querySelector(".age-old").innerHTML = `${ageOld}${(age/100)*75}.`;
});

document.querySelector(".button").addEventListener("click", () => {
	const character = new Object();
    character.class = lib.classes[random(0, (lib.classes.length))];
    character.age = random(1, age);
    character.isOld = character.age >= ((age/100)*75) ? true : false;
    character.accesColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    character.hasBread = character.isOld ? (rnd() == 1 ? true : false) : false;
    character.eyesColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;

    for(let skin of lib.skins) {
    	if(character.class == skin.ifClass) {
    		character.skin = `${skin.nm}: ${skin.colors[random(0, (skin.colors.length - 1))]}`;
    	};
    };

    for(let heig of lib.height) {
    	if(heig.ifClass == character.class) {
    		character.height = random(heig.min, heig.max)/100; 
    	};
    };

    const clrText = `<a style="background-color: ${character.accesColor}; color: ${character.accesColor};">0p</a>`,
    	eyeColor =  `<a style="background-color: ${character.eyesColor}; color: ${character.eyesColor};">0p</a>`

    document.querySelector(".info").innerHTML = `
        расса: ${character.class} <br>
        гендер: ${rnd() == 1 ? "мальчик" : "девочка"} <br>
        цвет ${character.skin} <br>
        возраст: ${character.age} лет <br>
       	старый: ${character.isOld ? "да" : "нет"} <br>
       	цвет волос: ${clrText} <br>
       	${character.isOld ? `есть борода: ${character.hasBread ? "да" : "нет"} <br>` : ''}
       	${character.isOld && character.hasBread ? `цвет бороды: ${clrText} <br>` : ''}
       	имеет друзей: ${rnd() == 1 ? "да" : "нет"} <br>
       	цвет глаз: ${eyeColor} <br>
       	рост: ${character.height != 0 ? `${character.height} метров` : 'невозможно обчислить'} <br>
       	сила: ${random(0, 10)}/10 <br>
       	маневриность: ${random(0, 10)}/10 <br>
       	баланс: ${random(0, 10)}/10 <br>
       	защита: ${random(0, 10)}/10 <br>
       	разум: ${random(0, 10)}/10 <br>
       	уровень магии: ${random(0, 10)}/10 <br>
       	<br>
       	левая рука сломаная: ${rnd() == 1 ? true : false}<br>
       	правая рука сломаная: ${rnd() == 1 ? true : false}<br>
       	левая нога сломаная: ${rnd() == 1 ? true : false}<br>
       	правая нога сломаная: ${rnd() == 1 ? true : false}<br>
       	левый глаз сломан: ${rnd() == 1 ? true : false}<br>
       	правый глаз сломан: ${rnd() == 1 ? true : false}<br>
       	<br>
       	слепой: ${rnd() == 1 ? true : false}<br>
       	глухой: ${rnd() == 1 ? true : false}
    `;

    delete(clrText, character, eyeColor);
});

//by TheEE145
//github: "https://github.com/TheEE145/random-character-generator"
