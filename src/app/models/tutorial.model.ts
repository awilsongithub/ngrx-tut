export interface TutorialRequest {
  name: string;
  url: string;
}

export interface Tutorial extends TutorialRequest {
  id: number;
}
