export class Movie {
    
    constructor(
        public title: string,
        public datePosted: number,
        public description: string,
        public likes: number,
        public hates: number,
        public postedBy: string) {
    }
}