import { RollService } from "../roll.service";
import { lorem } from "faker";
const roll = new RollService();

export class Article {
  title: string;
  text: string;
  isClue: boolean;
  size: number;
  columns: string;
  image: boolean;
  imageUrl: string;
  constructor(
    title: string,
    text: string,
    size: number,
    isClue: boolean,
    image?: boolean,
    imageUrl?: string
  ) {
    this.title = title;
    this.text = text;
    this.size = size;
    this.isClue = isClue;
    this.imageUrl = imageUrl;
    this.image = image;
  }
}
export class Page {
  total: number;
  current: number;
  articles: Article[];

  constructor() {
    this.articles = [];
    this.total = 12;
    this.current = 0;
  }

  createPage() {
    console.log("making articles on a page");
    let lastSize = 1;
    while (this.current < this.total) {
      let artilceSize = roll.roll6();

      artilceSize + this.current > this.total
        ? (artilceSize = this.total - this.current)
        : artilceSize;
      let start = lastSize.toString();
      lastSize = (artilceSize + lastSize);

      this.current = this.current + artilceSize;
      let article = this.makeArticle(artilceSize);
	  article.columns = start+"/"+((lastSize).toString())
      this.articles.push(article);
    }
    // we need to create a page with articles that total 10;
  }
  makeArticle(num: number) {
    let paragraph = lorem.paragraphs(3 * num);
    let title = lorem.sentence(num*2);

    return new Article(title, paragraph, num, false);
  }
}
export class Paper {
  length: number;
  pages: Page[];
  headline: string;
  constructor(length: number, pages: Page[], headline: string) {
    this.pages = pages;
    this.headline = headline;
  }
  // make article number
  // 40 total points -  headline  = 4 , rest = 6
}