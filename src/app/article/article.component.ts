import { 
  Component, 
  OnInit,
   HostBinding,
   Input
   } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
   @HostBinding('attr.class') cssClass = 'row';
   @Input() article : Article;
   articles: Article[];
 
  
  constructor() {
  
  }
  

  voteUp(): boolean {
  this.article.votes += 1;
  return false;
  }
  
   voteDown(): boolean {
  this.article.votes -= 1;
  return false;
  }
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.article.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
  ngOnInit() {
  }
  
  }