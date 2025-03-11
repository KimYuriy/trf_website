export interface IAllData {
  about: IAbout;
  events: IEvent[];
  gallery: IPhotoAlbum[];
  partners: IDataUrl[];
  socialmedias: IDataUrl[];
  contacts: IDataUrl[];
}

export interface IAbout {
  id: number;
  name: string;
  description: string;
  logo_zh: string;
  logo_edc: string;
  logo_dv: string;
  logo_rus: string;
}

export interface IEvent {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  logo: string;
  img: string
}

export interface IPhotoAlbum {
  id: number;
  name: string;
  description: string;
  logo: string;
  url: string;
  backgroundImg: string;
}

export interface IDataUrl {
  id: number;
  name: string;
  description: string;
  logo: string;
  url: string
}

export class DataModel {
  constructor(json: IDataUrl) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.logo = json.logo;
    this.url = json.url;
  }

  id: number;
  name: string;
  description: string;
  logo: string;
  url: string;
}

export class EventModel {
  constructor(json: IEvent) {
    this.id = json.id;
    this.name = json.name;
    this.shortDescription = json.short_description;
    this.longDescription = json.long_description;
    this.logo = json.logo;
    this.img = json.img;
  }

  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  img: string;
}

export class AboutModel {
  constructor(json: IAbout) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.logoZH = json.logo_zh;
    this.logoEDC = json.logo_edc;
    this.logoDV = json.logo_dv;
    this.logoRUS = json.logo_rus;
  }

  id: number;
  name: string;
  description: string;
  logoZH: string;
  logoEDC: string;
  logoDV: string;
  logoRUS: string;
}

export class PhotoAlbumModel {
  constructor(json: IPhotoAlbum) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.logo = json.logo;
    this.url = json.url;
    this.backgroundImg = json.backgroundImg;
  }

  id: number;
  name: string;
  description: string;
  logo: string;
  url: string;
  backgroundImg: string;
}

export class AllDataModel {
  constructor(json: IAllData) {
    this.about = new AboutModel(json.about);
    this.events = json.events.map(event => new EventModel(event));
    this.gallery = json.gallery.map(album => new PhotoAlbumModel(album));
    this.partners = json.partners.map(partner => new DataModel(partner));
    this.socialmedias = json.socialmedias.map(social => new DataModel(social));
    this.contacts = json.contacts.map(contact => new DataModel(contact));
  }

  about: AboutModel;
  events: EventModel[];
  gallery: PhotoAlbumModel[];
  partners: DataModel[];
  socialmedias: DataModel[];
  contacts: DataModel[];
}