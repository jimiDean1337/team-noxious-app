import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'tna-coding-languages-grid',
  templateUrl: './coding-languages-grid.component.html',
  styleUrls: ['./coding-languages-grid.component.scss']
})
export class CodingLanguagesGridComponent implements OnInit {
  @ViewChild(NgxMasonryComponent, {static: true}) masonry?: NgxMasonryComponent;
  /* Title, Subtitle, Description */
  @Input() section?: any;
  /* ngx-masonry options */
  public tagsOptions: NgxMasonryOptions = {
    itemSelector: '.grid-item',
    columnWidth: 100,
    fitWidth: true,
    gutter: 0,
  };

  public list: any = [];

  constructor(private dataService: DataService) { }

  public itemsLoaded(event: any) {
    console.log('Items Loaded', event)
  }

  public layoutComplete(event: any) {
    console.log('Layout Complete', event)
  }

  public reorderLayout(index: number, item: any) {
    this.masonry?.remove(item);
    this.masonry?.reloadItems()
  }

  ngOnInit(): void {
    this.dataService.getDBList('languages')
    .valueChanges()
    .subscribe(data => this.list = data)
    this.dataService.getDBList('tools')
    .valueChanges()
    .subscribe(data => this.list.push(...data))
    this.dataService.getDBList('frameworks')
    .valueChanges()
    .subscribe(data => this.list.push(...data))
  }

}
