export interface CampaignViewDataInterface {
  sliders:any,
  sectionOne: {

    title: string,
  logo: string,
    widthLogo?:string,
    heightLogo?:string,
    description: string[],
    createCampingLink: string,
    qrCode:string,
    gamePreviewLink:string,
    banner:string,
    RequestAdvice:string,
    startGame:string
    iconstartGame?: string,

  },
  sectionTwo: {
    targetTitle: string,
    advantageTitle: string,
    targetDescriptions:  string[],
    advantageDescriptions:  string[],
    createCampingLink: string,
    qrCode:string,
    gamePreviewLink:string,
    banner:string
    bulletMark?:string,
    targetMore?:string[],
    advantageMore?:string[],
    bulletMarkWithNumber: any,
    bulletMarkWithoutNumber: any,
  },
  sectionThree: {
    title: string,
    description: string | string[],
    createCampingLink: string,
    qrCode:string,
    gamePreviewLink:string,
    banner:boolean,
    bulletMark?:string,
    more?:string[],
    bulletMarkWithNumber: any,
    bulletMarkWithoutNumber: any,
  },
}
