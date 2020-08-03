export const chordArr = [
    {code: 'C', name: 'C'},
    {code: 'Cs', name: 'C#'},
    {code: 'D', name: 'D'},
    {code: 'Eb', name: 'Eb'},
    {code: 'E', name: 'E'},
    {code: 'F', name: 'F'},
    {code: 'Fs', name: 'F#'},
    {code: 'G', name: 'G'},
    {code: 'Ab', name: 'Ab'},
    {code: 'A', name: 'A'},
    {code: 'Bb', name: 'Bb'},
    {code: 'B', name: 'B'},
];

export const chordTypes = {
    major: { code: 'MAJ', name: 'Major'},
    minor: { code: 'MIN', name: 'Minor'},
    seventh: { code: 'SEV', name: '7th'},
    sus: { code: 'SUS', name: 'Sustain 4'},
};

export const chordTypesArr = [
    chordTypes.major,
    chordTypes.minor,
    chordTypes.seventh,
    chordTypes.sus
];

export const dirTypes = {
    major: 'assets/images/chords/major/',
    minor: 'assets/images/chords/minor/',
    seventh: 'assets/images/chords/7th/',
    sus: 'assets/images/chords/sus/'
};
