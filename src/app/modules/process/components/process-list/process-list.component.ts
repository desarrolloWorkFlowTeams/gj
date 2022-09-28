import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  contentCard:any
  processes:any[]=[]
  constructor() { }

  ngOnInit(): void {
    let i=1;
    while(i < 12){
      this.processes.push ({ title: 'titulo ' + i, description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam voluptas ad unde impedit libero mollitia harum! Nisi eos sint velit pariatur magnam autem asperiores, enim facere exercitationem. Facere, consectetur doloremque.
      Nob .` + i, id: i, type:"process"})
      i++ 
    }
  }

  userClick(e:any){
    console.log(e)

  }
}
