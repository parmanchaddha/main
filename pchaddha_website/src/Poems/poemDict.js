//List All Poem Titles Here. 
const busTitle = "The Bus";
const menOfClothTitle = "The Men of the Cloth";
const americaTheGreatTitle = "America The Great";
const EPTitle = "E.- Do I Know You?";



//PoemBody
const busPoem = `As this bus came to a halt, at the local station,
Two passengers,
Their movements slowed, 
Their expressions grotesque, 
Made their way to the back.

It seemed as if they knew that they were an afterthought, 
that they did not belong in the front, 
that they were ghosts. 

The male unhooked his backpack, setting it onto the floor of the bus.
The female let go of the two worn-out recyclable bags that she carried.
They sat there, quiet and absolute, not uttering a single word to each other.

The bus fell into a rhythmic pattern.
Its movements become the beat of each palpitating heart.
And with each beat, the female slowly tilted her head towards the man’s shoulder.
It was as if her body was a petrified fluid, such that each stop on the bus,
Acted like a chisel
Whose periodic strikes 
Relieved her body from rigidness. 

Finally, her head lay on the man’s shoulder:
And a twinkle of light encased her demeanour. 
The man,
Who a moment ago looked a statue incapable of emotion, 
Now stroked her hair, 
Radiating warmth and emotion from his eyes.

His dull, worn out, light-blue jeans and her ripped-apart Canada-Goose jacket,
Could not, at that moment, hide from the world,
Their love for each other. 

Had the gloominess of the winter night,
The dank of the bus,
And the stereotype of their appearance not been there,
It would have been impossible to see, 
That their love for each other was unconditional and beautiful:
The most beautiful part of each of them.`;

const menOfClothPoem = `We are resolute.
Full of pride.
‎Full of control.
‎Full of wisdom.

With hands behind our back,
And our chest puffed out,
We are the last- the last men.

We are the men of the cloth.
The men whose actions moved the heavens.
The men whose actions moved hell.
The men whose actions defined 'man'.

But Time,
That lass, whose ticking defines legacy-
She promises the fruit of wisdom, whilst taking away the last of our strength.

And so it is,
These men of the cloth,
Made weak by age,
But strengthened in mind,
Realize
That love commands life.

And

Even these men,
Who moved the Earth,
Are helpless when their sons leave.

And even they cry when mortality reminds them that they are not in control.`

const americaTheGreatPoem = `It was the land of freedom. 
Miles of highway cutting through unexplored territory connecting the Atlantic to the Pacific.

It was land of communication.
New Yorkers and Texans connected by miles of cable through which messages and voice were heard at the speed of light.

It was the land of mobility, 
Connected by car, train, and plane. Each person had agency. 

Of course, nothing was as pretty as America in the 2010s. 
In its golden age.

Then something happened. 
Somehow a evilness was released into the wind that brought out the hate, which spent its days in the darkest caverns of the faculties. 
It helped it grow until that little speck become the cave itself. 

And so the highways, which before transported opportunity, now carried danger.
And the cables which carried messages of love and growth, cried messages of degeneracy.
And the transports, which before people together, segregated.

But this was the land of hope. 
And the flames of hope are not so easily quenched. 
Through the beaches of California, the sands of Nevada, the hills of Colarado, the plains of Montana, the streets of New York, and the shores of Delaware, these flames grow.
Ready to wipe off the petina from Golden America, and make her beauty once again visible for all to see.`

const EPPoem = `A woman made perfect by perception.
Her quietness was resolution. 
Her hesitation, thought.
Her blue eyes were a summer breeze 
Reminiscent of a care-free childhood. 

She was always surrounded by friends,
Shields guarding her innocence, 
From the cruelty of the world. 

We are good friends, E. and I. 
We sat drinking coffee one cold midsummer morning.
We talked. 
We laughed. 
We discussed magic. 
We discussed mundane.

Then, she asked for a promise of secrecy and a commitment to support.
“I kissed ____ last night”
“Does ____ know?”
“Yeah, I told him this morning. We talked and he wants time to think”. 

Your beautiful eyes become slightly colder. 
It was the smallest fact and the smallest change in perception. 

But it became the day on which perfection died. 
Not heroically flamed out in the battlefield protecting family, friends, and Love. 
But by a mistake encouraged by impulse, and made potent by a bottle of Crown.

A day on which a dirac delta, 
Spiked at perfection, 
Became a distribution, 
Centered between personal best and worst. 

A day on which soul mates became extinct, 
And good enough became the accepted standard.`



//Export PoemDict
var poemDict = {
    "bus": {"title": busTitle, "body": busPoem },
    "EP": {"title": EPTitle, "body": EPPoem },
    "americaTheGreat": {"title": americaTheGreatTitle, "body": americaTheGreatPoem },
    "menOfCloth": {"title": menOfClothTitle, "body": menOfClothPoem },
}

export default poemDict;