// type aliases
type Pirate = {
    name: string,
    crewName: string,
    role: string,
    bounty: number,
    // optional property (either boolean | undefined)
    active?: boolean,
    crew: Pirate[]
}
const luffy: Pirate = {
    name: 'luffy',
    crewName: 'strawhats',
    role: 'captain',
    bounty: 300000000,
    //active: true,
    crew: []
}
const getBounty = (pirate: Pirate) => {
    return pirate.bounty;
}
// type alias for another type alias
type stringOrNumber = string | number;
type band = {
    albums: stringOrNumber,
    member: number,
    name: string
}

// interfaces -> better for an object structure (inheritance etc.)
//            -> cannot use union types
interface Marine {
    name: string,
    rang: string,
    active: boolean,
    crew: Marine[]
}
const garp: Marine = {
    name: 'garp',
    rang: 'vice-admiral',
    active: true,
    crew: []
}
const getRang = (marine: Marine) => {
    return marine.rang;
}