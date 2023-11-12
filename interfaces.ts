export interface BandMember {
    name: string;
    age: number;
    plays: string[];
}
  
export interface BandMembers {
    current: BandMember[];
    past: BandMember[];
    all?: string[];
}

export interface Band {
    members: BandMembers;
    plays?: object;
}