import React from "react";
import Highlights from "../../components/Highlights";

const BronzeAge = () => {
  const highlights = [
    "And this is in a sense true since suffering so obviously outweighs its opposite: in any individual life this is true, where moments of happiness are rare and pass quickly. But also, if you imagine the pleasure of an animal eating versus the pain and agony of the animal being eaten, you can’t be fooled …you see that suffering exceeds pleasure or happiness in this world, by many magnitudes.",
    "According to any rational calculation, life is not worth living, because pain far outweighs pleasure. Heavily medicated nihilists are likely to deny this—the blessed and happy know it’s true…but also know that reason and rationality are false.",
    "If there can be any defense of civilization it is this, that historically it gave a class the full or nearly full benefits of the free life of the steppe and forest and mountain while ridding them of some of its inconveniences—at the price, of course, of misery for the vast majority. In nearly all other parts of the world but the West, the misery inside civilization was universal and the elite, such as it was, didn’t redeem this misery: they themselves remained servile. A city means nothing, but could even mean a retrogression in the human type. If the only civilizations that had existed were all like Han China, then the choice between barbarism and civilization would be easily made in favor of barbarism, of free Mongol life.",
    "Nietzsche, who says you should distrust any thoughts you’ve had indoors.",
    "Struggle for space—A healthy animal not under distress, not maimed, not trapped by man, seeks first when young: space. Animal seeks space in physical sense, territory. But this meaning isn’t crudely physical, I give this as vivid image which is true for many animals that seek ownership of concrete territory. But more generally you must take it to mean something else, space to develop inborn powers. Monkey that lives in trees seeks skills to master canopy, beaver seeks ownership of river and banks and reeds in its grasp, many big cat of course seek mastership of actual territory and claims to prey and mates in this territory. Big feline, hunting dogs seek full use of claws, fangs, development of smell and other senses, to extend their reach over space. They seek these things because they want to master matter.",
    "You must learn to see the secret language of nature and what it drives at: there is one path that drives for the production of a supreme specimen. It is the path that governs higher life; survival and reproduction are only side effects of this path. Life is at most basic, struggle for ownership of space.",
    "Only physical beauty is the foundation for a true higher culture of the mind and spirit as well.",
    "Nietzsche went so far as to avoid reading anything written by others, so as not to infect his mind!",
    'They always feel they’re being disrespected. The desire for respect is the true mark of the forever-slighted.',
    "There can be no compromise between those who live under the pressure of need and of material increase, who are the walking shadows of the dead, and on the other side, those who are carefree, joyous, pleasure-loving and worship beauty. One seeks the preservation and expansion of mere life, the other seeks the exaltation of life.",
    "Precisely a character born for conquest, for expansion, a precocious type of boy who seeks real development and the real domination of the space around him, who understands in his blood that play and manliness are to this end, precisely such a boy will have his expectations about life crushed and thwarted as soon as his eyes open. This may be around the age of six or seven, but it sometimes happens earlier.",
    'Actually in history when you look at life of true nomads who are always on the move and in open space, they never engage in the kind of depressive introspection and questioning of life that you only see in settled and civilized peoples.',
    "Communal solidarity absorbs and snuffs out any personal distinction or intelligence and this task is relatively easy where it concerns the majority of the parts of the village: the real problem becomes what to do with the young males. In every way they represent a threat to the established customs and the physiological torpor that benefits the old and the women. The social problem in primitive tribes as well as most civilized and unfree societies becomes this, what to do with the young males, their aggression, their sexual instincts: in every way they must be broken and subsumed for the benefit of the tribe. This is more or less easy for the majority, who lack life force in any significant quantity, harder for the remainder, and where impossible—the fate of the outcast, or, more likely, death."
  ];

  const review = `
  I didn't finish this book, it's heavily biased and provocative in a bad way, I'm okay with reading edgy stuff, but this is not my cup of tea at the moment. Still found some valuable information in it.
  I do like what he says about man's current status in society and his role, and to look for something that (again, is contrarian) engages your spirit and freedom.

  I won't rate it, as I didn't finish it, I do not have plans to continue the book.
  `;

  return (
    <div>
      <Highlights highlights={highlights} review={review}/>
    </div>
  );
};

export default BronzeAge;