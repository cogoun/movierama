export class Movie {
  

    public id: number;
    public showLikeLink : boolean = true;
    public showHateLink : boolean = true;
    public showRetractLink : boolean = true;
    

    constructor(
        public title: string,
        public date: string,
        public description: string,
        public likes: number,
        public hates: number,
        public postedByUserId: number,
        public postedByUsername : string,
        public relationToRequestingUser: string) {
    }

    hate() {
        this.hates++;
        this.relationToRequestingUser = 'HATED';
        this.showHateLink = false;
        this.showLikeLink = true;
        this.showRetractLink = true;
    }
    
    like() {
        this.likes++;
        this.relationToRequestingUser = 'LIKED';
        this.showHateLink = true;
        this.showLikeLink = false;
        this.showRetractLink = true;
    }

    retract() {
        if (this.relationToRequestingUser) {
            if (this.relationToRequestingUser == 'LIKED') this.likes--;           
            if (this.relationToRequestingUser == 'HATED') this.hates--;
            
            this.showHateLink = true;
            this.showLikeLink = true;
            this.showRetractLink = false;
        }
    }

}
