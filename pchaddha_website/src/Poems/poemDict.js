import {EPTitle, EPPoem } from "./EP";
import {busTitle, busPoem} from "./bus";
import {menOfClothTitle, menOfClothPoem} from "./menofcloth";
import {americaTheGreatTitle, americaTheGreatPoem} from "./americathegreat";
import {theSpeechTitle, theSpeechPoem} from "./thespeech";

//Export PoemDict
const poemDict = {
    "bus": {"title": busTitle, "body": busPoem },
    "EP": {"title": EPTitle, "body": EPPoem },
    "americaTheGreat": {"title": americaTheGreatTitle, "body": americaTheGreatPoem },
    "menOfCloth": {"title": menOfClothTitle, "body": menOfClothPoem },
    "theSpeech": {"title": theSpeechTitle, "body": theSpeechPoem }
}

export default poemDict;