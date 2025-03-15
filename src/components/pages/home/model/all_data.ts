export interface IAllData {
  about: IAbout;
  events: IAllEvents;
  gallery: IPhotoAlbum[];
  partners: IDataUrl[];
  socialmedias: IDataUrl[];
  contacts: IDataUrl[];
}

export interface IAbout {
  id: number;
  name: string;
  description: string;
}

export interface IAllEvents {
  zh: IEvent;
  edc: IEvent;
  dvudulka: IEvent;
  rus: IEvent;
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

export class AllEventsModel {
  constructor(json: IAllEvents) {
    this.zh = new EventModel(json.zh);
    this.edc = new EventModel(json.edc);
    this.dvudulka = new EventModel(json.dvudulka);
    this.rus = new EventModel(json.rus);
  }

  zh: EventModel;
  edc: EventModel;
  dvudulka: EventModel;
  rus: EventModel;
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
  }

  id: number;
  name: string;
  description: string;
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
    this.events = new AllEventsModel(json.events);
    this.gallery = json.gallery.map(album => new PhotoAlbumModel(album));
    this.partners = json.partners.map(partner => new DataModel(partner));
    this.socialmedias = json.socialmedias.map(social => new DataModel(social));
    this.contacts = json.contacts.map(contact => new DataModel(contact));
  }

  about: AboutModel;
  events: AllEventsModel;
  gallery: PhotoAlbumModel[];
  partners: DataModel[];
  socialmedias: DataModel[];
  contacts: DataModel[];
}