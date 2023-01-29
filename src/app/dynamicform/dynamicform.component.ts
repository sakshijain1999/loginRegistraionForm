import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { FormGroup,FormBuilder,FormControl} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  @ViewChild('formly', { read: ElementRef }) formlyForm: ElementRef<HTMLElement>;
  constructor(private dragDrop: DragDrop) {}
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'fn',
      type: 'input',
      templateOptions: {
        label: '1. Firstname',
      },
    },
    {
      key: 'ln',
      type: 'input',
      templateOptions: {
        label: '2. Lastname',
      },
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: '3. Age',
      },
    },
  ];



  ngOnInit() {
    setTimeout(() => this.initDragAndDrop());
  }
  private initDragAndDrop() {
    const _this = this;
    const dropListRef = _this.dragDrop
      .createDropList(_this.formlyForm.nativeElement)
      .withItems(Array.from(_this.formlyForm.nativeElement.querySelectorAll<HTMLElement>('formly-field')).map(field => {
        const dragRef = _this.dragDrop.createDrag(field);
        dragRef.withBoundaryElement(_this.formlyForm.nativeElement);
        return dragRef;
      }));
    dropListRef.withOrientation('vertical');
    dropListRef.dropped.subscribe(({ previousIndex, currentIndex }) => {
    
      moveItemInArray(_this.fields, previousIndex, currentIndex);
      _this.fields = [..._this.fields]; 
    });
  }
}
