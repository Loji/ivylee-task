/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {ListItem} from './list-item';

describe('ListItem', () => {
  it('should create an instance', () => {
    expect(new ListItem()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let listItem = new ListItem({
      title: 'hello',
      description: 'this is lorem, lorem ipsum',
      complete: true,
      order: 1,
      added_date: new Date(1995, 11, 17, 3, 24, 0),
      completion_date: new Date(1995, 11, 17, 3, 24, 1)
    });
    expect(listItem.title).toEqual('hello');
    expect(listItem.description).toEqual('this is lorem, lorem ipsum');
    expect(listItem.complete).toEqual(true);
    expect(listItem.order).toEqual(1);
    expect(listItem.added_date).toEqual(new Date(1995, 11, 17, 3, 24, 0));
    expect(listItem.completion_date).toEqual(new Date(1995, 11, 17, 3, 24, 1));

  });
});
