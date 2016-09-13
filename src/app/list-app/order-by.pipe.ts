import { Pipe, PipeTransform } from '@angular/core';
import { ListItem } from '../list-item';

@Pipe({ name: 'orderBy' })
export class OrderBy implements PipeTransform {
    transform(array: Array<ListItem>, args: string): Array<ListItem> {
        array.sort((a: ListItem, b: ListItem) => {
            if (a.order < b.order) {
                return 1;
            } else if (a.order > b.order) {
                return -1;
            } else {
                return 0;
            }
        });
        return array;
    }
}