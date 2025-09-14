export interface GamesViewDataInterface {
  sectionOne: {
    title: string,
    description: string[],
    createCampingLink: string,
    qrCode:string,
    gamePreviewLink:string,
    banner:string,
    RequestAdvice:string,
    startGame:string,
    iconstartGame?:string,
    iconStartGameBefore:string | null
  },
  sectionTwo: {
    title: string,
    description:  string[],
    createCampingLink: string,
    qrCode:string,
    gamePreviewLink:string,
    banner:string
    bulletMark:string,
    more?:string[]
  },
  sectionThree: {
    title: string,
    description: string | string[],
    createCampingLink: string,
    qrCode:string,
    gamePreviewLink:string,
    banner:boolean,
    bulletMark?:string,
    more?:string[]
  },
  sectionFour?: {
    title: string,
    description: string,
    createCampingLink: string,
    qrCode:string,
    gamePreviewLink:string,
    banner:string
  }
}
