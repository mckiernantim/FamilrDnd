import { Article, Paper, Page } from './news.items';
import { Component, OnInit } from "@angular/core";
import { RollService } from '../roll.service';
import { lorem } from 'faker';
import { articles, titleText } from './news.article.data';

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  constructor(public roll: RollService) {}
  paper: Paper;
  clues:titleText[] = articles
  totalArticles:number
  ngOnInit() {}
  makeNewsPaper() {
    this.makePages();
	this.totalArticles = this.getArticles()
	this.plantClue()

  }
  getArticles(){
	let total = 0;
	
	for(let i = 0 ; i < this.paper.pages.length; i ++){
		total = total + this.paper.pages[i].articles.length
	}
	return total

  }
  plantClue(){
	  const page = 
	  this.paper.pages[
		  (Math.floor(Math.random() * this.paper.pages.length))
		];
	  const article = page.articles[
		(Math.floor(Math.random() * page.articles.length))
	  ] 

	  article.text = this.clues[2].text
	  article.title = this.clues[2].title
	  console.log(article)
  }
  makePages() {
    let headline = lorem.sentence(this.roll.roll4() / 2);
    let length: number = this.roll.roll6()+this.roll.roll6()+this.roll.roll6();
    let pages: Page[] = [];
    // make each page
    for (let i = 0; i < length; i++) {
      let currentPage = new Page();
      currentPage.createPage();
      pages.push(currentPage);
    }
    this.paper = new Paper(length, pages, headline);
  }
}
