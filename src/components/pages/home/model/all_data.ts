export interface IAllData {
  about: IData;
  events: IEvent[];
  gallery: IGallery;
  partners: IDataUrl[];
  socialmedias: IDataUrl[];
  contacts: IDataUrl[];
}

export interface IEvent {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  logo: string;
  img: string
}

export interface IData {
  id: number;
  name: string;
  description: string;
  logo: string;
}

export interface IDataLong {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  logo: string;
}

export interface IDataUrl {
  id: number;
  name: string;
  description: string;
  logo: string;
  url: string
}

export interface IGallery {
  backgroundImg: string;
  albums: IDataUrl[];
}

export class ShortDataModel {
  constructor(json: IData) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.logo = json.logo;
  }

  id: number;
  name: string;
  description: string;
  logo: string;
}

export class LongDataModel {
  constructor(json: IDataLong) {
    this.id = json.id;
    this.name = json.name;
    this.shortDescription = json.short_description;
    this.longDescription = json.long_description;
    this.logo = json.logo;
  }

  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
}

export class DataUrlModel {
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

export class GalleryDataModel {
  constructor(json: IGallery) {
    this.backgroundImg = json.backgroundImg;
    this.albums = json.albums.map(album => new DataUrlModel(album));
  }

  backgroundImg: string;
  albums: DataUrlModel[];
}

export class EventDataModel {
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

export class AllDataModel {
  constructor(json: IAllData) {
    this.about = new ShortDataModel(json.about);
    this.events = json.events.map(event => new EventDataModel(event));
    this.gallery = new GalleryDataModel(json.gallery);
    this.partners = json.partners.map(partner => new DataUrlModel(partner));
    this.socialmedias = json.socialmedias.map(social => new DataUrlModel(social));
    this.contacts = json.contacts.map(contact => new DataUrlModel(contact));
  }

  about: ShortDataModel;
  events: EventDataModel[];
  gallery: GalleryDataModel;
  partners: DataUrlModel[];
  socialmedias: DataUrlModel[];
  contacts: DataUrlModel[];
}