import clap from "./clap.wav";
import hihat from "./hihat.wav";
import kick from "./kick.wav";
import openhat from "./openhat.wav";
import boom from "./boom.wav";
import ride from "./ride.wav";
import snare from "./snare.wav";
import tom from "./tom.wav";
import tink from "./tink.wav";

const sounds = {
  65: new Audio(clap),
  83: new Audio(hihat),
  68: new Audio(kick),
  70: new Audio(openhat),
  71: new Audio(boom),
  72: new Audio(ride),
  74: new Audio(snare),
  75: new Audio(tom),
  76: new Audio(tink)
};

export default sounds;
