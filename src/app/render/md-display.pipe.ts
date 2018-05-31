import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';
import * as hljs from 'highlight.js';

@Pipe({
  name: 'mdDisplay'
})
export class MdDisplayPipe implements PipeTransform {

  md : any;
  constructor(private sanitizer:DomSanitizer){
    this.md = marked;
    this.md.setOptions({
      gfm: true,
      breaks: true,
      sanitize: true,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }
  
	transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(this.md.parse(value));
	}
}
