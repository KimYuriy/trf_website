export interface ILoading {
  id: number;
  isAvailable: boolean;
  description: string | undefined;
}

export class LoadingModel {
  constructor(json: ILoading) {
    this.id = json.id;
    this.isAvailable = json.isAvailable;
    this.description = json.description;
  }
  
  id: number;
  isAvailable: boolean;
  description: string | undefined;
}