export interface IAllData {
  about: IAbout;
  events: IEvent[];
  gallery: IPhotoAlbum[];
  partners: IDataUrl[];
  socialmedias: IDataUrl[];
  contacts: IDataUrl[];
}

export interface ILogo {
  id: number;
  url: string;
  position: 'top' | 'center' | 'left' | 'right' | undefined;
}

export interface IAbout {
  id: number;
  name: string;
  description: string;
}

export interface IEvent {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo: ILogo;
  img: ILogo;
}

export interface IPhotoAlbum {
  id: number;
  name: string;
  description: string;
  logo: ILogo;
  background: ILogo;
  url: string;
}

export interface IDataUrl {
  id: number;
  name: string;
  description: string;
  logo: ILogo;
  url: string;
}

export class LogoModel {
  constructor(json: ILogo) {
    this.id = json.id;
    this.url = json.url;
    this.position = json.position ?? undefined;
  }

  id: number;
  url: string;
  position: 'top' | 'center' | 'left' | 'right' | undefined;
}

export class DataModel {
  constructor(json: IDataUrl) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.logo = new LogoModel(json.logo);
    this.url = json.url;
  }

  id: number;
  name: string;
  description: string;
  logo: LogoModel;
  url: string;
}

export class EventModel {
  constructor(json: IEvent) {
    this.id = json.id;
    this.name = json.name;
    this.shortDescription = json.shortDescription;
    this.longDescription = json.longDescription;
    this.logo = new LogoModel(json.logo);
    this.img = new LogoModel(json.img);
  }

  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo: LogoModel;
  img: LogoModel;
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
    this.logo = new LogoModel(json.logo);
    this.url = json.url;
    this.background = new LogoModel(json.background);
  }

  id: number;
  name: string;
  description: string;
  logo: LogoModel;
  url: string;
  background: ILogo;
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