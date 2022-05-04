import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-multi-lang',
  templateUrl: './multi-lang.component.html',
  styleUrls: ['./multi-lang.component.scss']
})
export class MultiLangComponent implements OnInit {
  lang:any;
  constructor(public translateService: TranslateService) {

    this.translateService.addLangs(['en','mr','hi'])
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

}

  ngOnInit(): void {
   
  }


}
