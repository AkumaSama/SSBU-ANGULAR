import Personnage from "./Personnage";

type Univers = {
    id: string
    nom: string
    linkImage: string
    personnages: Personnage[]
}

export default Univers

// DTO OTD
export type UniversModification = {
  nom: string
  linkImage: string
}
